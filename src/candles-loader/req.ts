/**
 * Класс запроса свечей с учетом кеша.
 * - за текущий день данные берутся всегда из апи (чтобы была свежая последняя цена)
 * - за прошлые дни данные берутся из кеша или из апи (и сохраняются в кеш)
 */
import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import { TinkoffInvestApi } from '../api.js';
import { CandleInterval, GetCandlesRequest, HistoricCandle } from '../generated/marketdata.js';
import { loadJson, saveJson } from '../utils/json.js';
import { CandlesLoaderOptions } from './index.js';
import { formatDateUTC } from '../utils/date.js';
import { DateIterator } from './date-iterator.js';

export type CandlesReqParams = GetCandlesRequest & {
  /** Минимальное кол-во свечей в ответе */
  minCount?: number;
}

export class CandlesReq {
  protected candles: HistoricCandle[] = [];
  protected dateIterator: DateIterator;

  constructor(
    protected api: TinkoffInvestApi,
    protected options: Required<CandlesLoaderOptions>,
    protected params: CandlesReqParams,
    protected debug: Debug.Debugger,
  ) {
    this.dateIterator = new DateIterator(params, debug);
  }

  // eslint-disable-next-line max-statements
  async getCandles() {
    this.debug(`Запрос на загрузку свечей: ${JSON.stringify(this.params)}`);
    this.candles = await this.loadChunk({ useCache: !this.dateIterator.needTodayCandles() });

    this.filterCandlesBy('to');

    while (this.shouldLoadMore()) {
      this.dateIterator.nextChunk();
      const candles = await this.loadChunk({ useCache: true });
      this.candles.unshift(...candles);
    }

    this.filterCandlesBy('from');

    this.debug(`Загрузка свечей завершена: ${this.candles.length}`);
    return this.candles;
  }

  protected async loadChunk({ useCache = true }) {
    // в режиме бэктеста не кешируем в файлы, т.к. данные из апи и так приходят из кеша
    if (this.api.isBacktest) useCache = false;
    if (useCache) {
      const candles = await this.loadChunkFromFile();
      if (candles) return candles;
    }
    const candles = await this.loadChunkFromApi();
    if (useCache) {
      await this.saveChunkToCache(candles);
    }
    return candles;
  }

  protected async loadChunkFromFile(): Promise<HistoricCandle[] | void> {
    const cacheFile = this.getCacheFileName();
    if (fs.existsSync(cacheFile)) {
      this.debug(`Загружаю свечи из файла: ${cacheFile}`);
      const candles: HistoricCandle[] = await loadJson(cacheFile);
      this.debug(`Загружено свечей: ${candles.length}`);
      // Из файла даты приходят строками: '2022-05-06T07:00:00.000Z', переводим в Date
      candles.forEach(candle => candle.time = new Date(candle.time!));
      return candles;
    }
  }

  protected async loadChunkFromApi() {
    const { figi, interval } = this.params;
    const { from, to } = this.dateIterator.getCurrentChunkRange();
    const apiStr = this.api.isBacktest ? 'API (backtest)' : 'API';
    this.debug(`Загружаю свечи из ${apiStr}: ${from.toISOString()} - ${to.toISOString()}`);
    const { candles } = await this.api.marketdata.getCandles({ figi, instrumentId: figi, interval, from, to });
    this.debug(`Загружено свечей: ${candles.length}`);
    return candles;
  }

  protected async saveChunkToCache(candles: HistoricCandle[]) {
    const cacheFile = this.getCacheFileName();
    this.debug(`Сохраняю свечи (${candles.length}) в файл: ${cacheFile}`);
    await saveJson(cacheFile, candles);
  }

  // eslint-disable-next-line max-statements
  protected shouldLoadMore() {
    // todo: check max iterations
    const { minCount, from } = this.params;
    if (minCount) {
      const res = this.candles.length < minCount;
      res && this.debug(`Сейчас свечей: ${this.candles.length}, а нужно: ${minCount}`);
      return res;
    }
    if (from) {
      const { currentChunkDate } = this.dateIterator;
      const res = currentChunkDate > from;
      res && this.debug([
        `Сейчас свечей: ${this.candles.length}, начиная с ${currentChunkDate.toISOString()},`,
        `а нужно с ${from.toISOString()}`,
      ].join(' '));
      return res;
    }
    throw new Error(`Нужно указать "from" или "minCount"`);
  }

  protected filterCandlesBy(date: 'from' | 'to') {
    const oldLength = this.candles.length;
    const { from } = this.params;
    if (date === 'to') {
      this.candles = this.candles.filter(candle => candle.time! < this.dateIterator.to);
    } else if (from) {
      this.candles = this.candles.filter(candle => candle.time! >= from);
    }
    const newLength = this.candles.length;
    if (newLength !== oldLength) {
      const dateStr = date === 'from' ? from!.toISOString() : this.dateIterator.to.toISOString();
      this.debug(`Фильтрация свечей по ${date} (${dateStr}): ${oldLength} -> ${newLength}`);
    }
  }

  protected getInstrumentKey() {
    const key = this.params.instrumentId || this.params.figi;
    if (!key) throw new Error(`instrumentId or figi is required.`);

    return key;
  }

  protected getCacheFileName() {
    const { isYearChunk, currentChunkDate } = this.dateIterator;
    const dateStr = formatDateUTC(currentChunkDate, isYearChunk ? 'YYYY' : 'YYYY-MM-DD');
    return path.join(
      this.options.cacheDir,
      'candles',
      this.getInstrumentKey(),
      isYearChunk ? 'day' : candleIntervalToString(this.params.interval),
      `${dateStr}.json`
    );
  }
}

function candleIntervalToString(interval: CandleInterval) {
  return CandleInterval[interval].replace('CANDLE_INTERVAL_', '').toLowerCase();
}
