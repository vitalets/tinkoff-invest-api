/**
 * Эмуляция instruments.
 * See: https://tinkoff.github.io/investAPI/head-instruments/
 */
import fs from 'fs';
import { Client } from 'nice-grpc';
import path from 'path';
import { SecurityTradingStatus } from '../generated/common.js';
import {
  Bond,
  Currency,
  Etf,
  Future,
  Instrument,
  InstrumentIdType,
  InstrumentRequest,
  InstrumentsRequest,
  InstrumentsServiceDefinition,
  InstrumentStatus,
  Share
} from '../generated/instruments.js';
import { loadJson, saveJson } from '../utils/json.js';
import { Backtest } from './index.js';

type InstrumentsMap = {
  shares: Share;
  bonds: Bond;
  currencies: Currency;
  etfs: Etf;
  futures: Future;
}

// пока не все методы реализованы
type InstrumentsStubType = Omit<Client<typeof InstrumentsServiceDefinition>,
  'tradingSchedules'
  | 'getBondCoupons'
  | 'getAccruedInterests'
  | 'getFuturesMargin'
  | 'getDividends'
  | 'getAssetBy'
  | 'getAssets'
  | 'getFavorites'
  | 'editFavorites'
  >

export class InstrumentsStub implements InstrumentsStubType {
  /** In-memory кеш для запросов shares(), shareBy(), bonds(), bondBy(), итд */
  // todo: в значениях оставил unknown, т.к. в getAll не получилось красиво затипизировать
  private instrumentsCache: Map<keyof InstrumentsMap, unknown[]> = new Map();
  /** In-memory кеш для запросов getInstrumentBy() */
  private instrumentCache: Map<string, Instrument> = new Map();

  constructor(private backtest: Backtest) { }

  private get options() {
    return this.backtest.options;
  }

  /**
   * Возвращает данные по инструменту.
   * Если данных в кеше нет, они разово загрузятся.
   */
  // eslint-disable-next-line max-statements
  async getInstrumentBy(req: InstrumentRequest) {
    const idTypeStr = InstrumentIdType[req.idType].replace('INSTRUMENT_ID_TYPE_', '').toLowerCase();
    const cacheId = [ idTypeStr, req.id, req.classCode ].filter(Boolean).join('_');
    const filePath = path.join(this.options.cacheDir, 'instrument', `${cacheId}.json`);
    let instrument: Instrument;
    if (this.instrumentCache.has(cacheId)) {
      instrument = this.instrumentCache.get(cacheId)!;
    } else if (fs.existsSync(filePath)) {
      instrument = await loadJson(filePath);
      this.instrumentCache.set(cacheId, instrument);
    } else {
      const res = await this.backtest.apiReal.instruments.getInstrumentBy(req);
      if (!res.instrument) throw new Error(`Нет данных по инструменту: ${cacheId}`);
      instrument = res.instrument;
      instrument.tradingStatus = SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING;
      instrument.buyAvailableFlag = true;
      instrument.sellAvailableFlag = true;
      instrument.apiTradeAvailableFlag = true;
      await saveJson(filePath, instrument);
      this.instrumentCache.set(cacheId, instrument);
    }
    return { instrument };
  }

  async shares(_: InstrumentsRequest) { return this.getAll('shares'); }
  async shareBy(req: InstrumentRequest) { return this.getBy('shares', req); }
  async bonds(_: InstrumentsRequest) { return this.getAll('bonds'); }
  async bondBy(req: InstrumentRequest) { return this.getBy('bonds', req); }
  async etfs(_: InstrumentsRequest) { return this.getAll('etfs'); }
  async etfBy(req: InstrumentRequest) { return this.getBy('etfs', req); }
  async futures(_: InstrumentsRequest) { return this.getAll('futures'); }
  async futureBy(req: InstrumentRequest) { return this.getBy('futures', req); }
  async currencies(_: InstrumentsRequest) { return this.getAll('currencies'); }
  async currencyBy(req: InstrumentRequest) { return this.getBy('currencies', req); }

  // eslint-disable-next-line max-statements
  private async getAll<T extends keyof InstrumentsMap>(key: T) {
    const filePath = path.join(this.options.cacheDir, 'instruments', `${key}.json`);
    let instruments: InstrumentsMap[T][];
    if (this.instrumentsCache.has(key)) {
      instruments = this.instrumentsCache.get(key) as InstrumentsMap[T][];
    } else if (fs.existsSync(filePath)) {
      instruments = await loadJson(filePath);
      if (!Array.isArray(instruments)) throw new Error(`В файле должен лежать массив ${key}: ${filePath}`);
      this.instrumentsCache.set(key, instruments);
    } else {
      const method = key as keyof InstrumentsMap;
      const res = await this.backtest.apiReal.instruments[method]({
        instrumentStatus: InstrumentStatus.INSTRUMENT_STATUS_BASE
      });
      instruments = res.instruments as InstrumentsMap[T][];
      instruments.forEach(i => i.tradingStatus = SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING);
      await saveJson(filePath, instruments);
      this.instrumentsCache.set(key, instruments);
    }
    return { instruments };
  }

  private async getBy<T extends keyof InstrumentsMap>(key: T, req: InstrumentRequest) {
    const { instruments } = await this.getAll(key);
    const instrument = instruments.find(instrument => {
      switch (req.idType) {
        case InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI: return instrument.figi === req.id;
        case InstrumentIdType.INSTRUMENT_ID_TYPE_UID: return instrument.uid === req.id;
        case InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER: {
          return instrument.ticker === req.id && instrument.classCode === req.classCode;
        }
        default: throw new Error(`Unknown idType: ${req.idType}`);
      }
    });
    return { instrument };
  }
}
