/**
 * Базовый класс запроса свечей с учетом кеша.
 */
import fs from 'fs';
import { TinkoffInvestApi } from '../api.js';
import { GetCandlesRequest, HistoricCandle } from '../generated/marketdata.js';
import { loadJson, saveJson } from '../utils/json.js';
import { CandlesLoaderOptions } from './index.js';

export type CandlesReqParams = GetCandlesRequest & {
  /** Минимальное кол-во свечей в ответе */
  minCount?: number;
}

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
    this.to = this.calcDateTo();
    this.chunkDate = this.calcInitialChunkDate();
  }

  protected abstract getChunkFromTo(): { from: Date, to: Date };
  protected abstract moveChunkDate(): void;
  protected abstract getCacheFile(): string;

  async getCandles() {
    this.candles = await this.loadChunk({ useCache: !this.needTodayCandles() });
    this.removeCandles(time => time >= this.to);

    while (this.shouldLoadMore()) {
      this.moveChunkDate();
      const candles = await this.loadChunk({ useCache: true });
      this.candles.unshift(...candles);
    }
    if (this.req.from) this.removeCandles(time => time < this.req.from!);

    return this.candles;
  }

  protected async loadChunk({ useCache = true }) {
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
    if (this.req.minCount) return this.candles.length < this.req.minCount;
    if (this.req.from) return this.chunkDate > this.req.from;
    throw new Error(`You should provide "from" or "minCount"`);
  }

  protected removeCandles(fn: (time: Date) => boolean) {
    this.candles = this.candles.filter(c => c.time && !fn(c.time));
  }

  protected needTodayCandles() {
    const todayMidnight = new Date();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    return this.to > todayMidnight;
  }

  protected calcDateTo() {
    const now = new Date();
    return this.req.to
      ? (this.req.to > now ? now : this.req.to)
      : now;
  }

  protected calcInitialChunkDate() {
    const date = new Date(this.to);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }
}
