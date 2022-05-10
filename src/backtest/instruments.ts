/**
 * Эмуляция instruments.
 * See: https://tinkoff.github.io/investAPI/head-instruments/
 */
import fs from 'fs';
import { Client } from 'nice-grpc';
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
  Share
} from '../generated/instruments.js';
import { Backtest } from './index.js';

type NameMap = {
  shares: Share;
  bonds: Bond;
  currencies: Currency;
  etfs: Etf;
  futures: Future;
}

export type InstrumentsConfig = {
  [K in keyof NameMap]+?: string;
}

// пока исключаем некоторые методы
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
  private cache: {[K in keyof NameMap]+?: NameMap[K][]} = {};

  constructor(private backtest: Backtest) { }

  private get options() {
    return this.backtest.options;
  }

  async getInstrumentBy(req: InstrumentRequest) {
    const keys = Object.keys(this.options.instruments) as (keyof typeof this.options.instruments)[];
    for (const key of keys) {
      const { instrument } = this.getBy(key, req);
      if (instrument) {
        // todo: изучить, насколько совпадают поля у Instrument и Share, Bond идт.
        const finalInstrument = {...instrument, instrumentType: getInstrumentType(key) } as Instrument;
        return { instrument: finalInstrument };
      }
    }
    return {};
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

  private getAll<T extends keyof NameMap>(key: T) {
    let cache = this.cache[key];
    if (!cache) {
      const fileName = this.options.instruments[key];
      if (!fileName) throw new Error(`Не указан файл для ${key}`);
      cache = this.cache[key] = JSON.parse(fs.readFileSync(fileName, 'utf8'));
      if (!Array.isArray(cache)) throw new Error(`В файле ${fileName} должен лежать массив ${key}`);
      this.setTradingStatusNormal(cache!);
    }
    return { instruments: cache as NonNullable<typeof cache> };
  }

  private getBy<T extends keyof NameMap>(key: T, req: InstrumentRequest) {
    const { instruments } = this.getAll(key);
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

  private setTradingStatusNormal(items: NameMap[keyof NameMap][]) {
    items.forEach(item => item.tradingStatus = SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING);
  }
}

function getInstrumentType(key: keyof NameMap) {
  switch (key) {
    case 'shares': return 'share';
    case 'bonds': return 'bond';
    case 'etfs': return 'etf';
    case 'futures': return 'future';
    case 'currencies': return 'currency';
    default: return '';
  }
}
