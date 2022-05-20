/**
 * Базовый класс запроса свечей с учетом кеша.
 */
import fs from 'fs';
import path from 'path';
import Debug from 'debug';
import { TinkoffInvestApi } from '../api.js';
import { GetCandlesRequest, HistoricCandle } from '../generated/marketdata.js';
import { loadJson, saveJson } from '../utils/json.js';
import { CandlesLoaderOptions } from './index.js';

export type CandlesReqParams = GetCandlesRequest & {
  /** Минимальное кол-во свечей в ответе */
  minCount?: number;
}

const debug = Debug('tinkoff-invest-api:candles-loader');

// сохраняем оригинальный конструктор Date(), т.к. при бэктесте он подменяется.
const OriginalDate = Date;

/**
 * Базовый класс запроса свечей с учетом кеша.
 * - за текущий день данные берутся всегда из апи (чтобы были свежие)
 * - за прошлые дни данные берутся из кеша или из апи (и сохраняются в кеш)
 */
export abstract class CandlesReq {
  protected candles: HistoricCandle[] = [];
  protected to: Date;
  /** Это дата бежит в прошлое по файлам, чтобы загрузить свечи из кеша */
  protected chunkDate: Date;

  constructor(
    protected api: TinkoffInvestApi,
    protected options: Required<CandlesLoaderOptions>,
    protected req: CandlesReqParams
  ) {
    this.to = req.to || new Date();
    this.chunkDate = this.calcInitialChunkDate();
  }

  protected abstract getChunkFromTo(): { from: Date, to: Date };
  protected abstract moveChunkDate(): void;
  protected abstract getCacheFile(): string;

  async getCandles() {
    this.candles = await this.loadChunk({ useCache: !this.needTodayCandles() });
    this.filterCandles(time => time < this.to);
    while (this.shouldLoadMore()) {
      this.moveChunkDate();
      const candles = await this.loadChunk({ useCache: true });
      this.candles.unshift(...candles);
    }
    if (this.req.from) this.filterCandles(time => time >= this.req.from!);

    return this.candles;
  }

  protected async loadChunk({ useCache = true }) {
    // в режиме бэктеста не кешируем в файлы, т.к. данные из апи и так приходят из кеша
    if (this.api.isBacktest) useCache = false;
    if (useCache) {
      const candles = await this.loadChunkFromCache();
      if (candles) return candles;
    }
    const candles = await this.loadChunkFromApi();
    if (useCache) {
      await this.saveChunkToCache(candles);
    }
    return candles;
  }

  protected async loadChunkFromCache(): Promise<HistoricCandle[] | void> {
    const cacheFile = this.getCacheFile();
    if (fs.existsSync(cacheFile)) {
      debug(`Загружаю свечи из файла: ${cacheFile}`);
      const candles: HistoricCandle[] = await loadJson(cacheFile);
      // '2022-05-06T07:00:00.000Z' -> Date
      candles.forEach(candle => candle.time = new Date(candle.time as unknown as string));
      return candles;
    }
    const cacheFileEmpty = this.getEmptyCacheFile(cacheFile);
    if (fs.existsSync(cacheFileEmpty)) return [];
  }

  protected async loadChunkFromApi() {
    const { figi, interval } = this.req;
    const { from, to } = this.getChunkFromTo();
    debug(`Загружаю свечи из API: ${from.toISOString()} - ${to.toISOString()}`);
    const { candles } = await this.api.marketdata.getCandles({ figi, interval, from, to });
    return candles;
  }

  protected async saveChunkToCache(candles: HistoricCandle[]) {
    const cacheFile = this.getCacheFile();
    const saveFile = candles.length > 0 ? cacheFile : this.getEmptyCacheFile(cacheFile);
    await saveJson(saveFile, candles);
  }

  protected getEmptyCacheFile(cacheFile: string) {
    return cacheFile.replace(/\.json$/, '_empty.json');
  }

  protected shouldLoadMore() {
    // todo: check max iterations
    if (this.req.minCount) {
      const res = this.candles.length < this.req.minCount;
      res && debug(
        `Загружено свечей: ${this.candles.length}, а нужно: ${this.req.minCount}. Продолжаем загрузку...`
      );
      return res;
    }
    if (this.req.from) {
      const res = this.chunkDate > this.req.from;
      res && debug([
        `Загружены свечи с ${this.chunkDate.toISOString()},`,
        `а нужно с ${this.req.from.toISOString()}. Продолжаем загрузку...`,
      ].join(' '));
      return res;
    }
    throw new Error(`Нужно указать "from" или "minCount"`);
  }

  protected filterCandles(fn: (time: Date) => boolean) {
    this.candles = this.candles.filter(c => c.time && fn(c.time));
  }

  protected needTodayCandles() {
    const todayMidnight = new OriginalDate();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    return this.to > todayMidnight;
  }

  protected calcInitialChunkDate() {
    const date = new Date(this.to);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  protected getFigiDir() {
    return path.join(this.options.cacheDir, 'candles', this.req.figi);
  }
}
