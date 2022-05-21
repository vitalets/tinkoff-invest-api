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

// сохраняем оригинальный конструктор Date(), т.к. при бэктесте он подменяется.
const OriginalDate = Date;

/**
 * Базовый класс запроса свечей с учетом кеша.
 * - за текущий день данные берутся всегда из апи (чтобы была свежая последняя цена)
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
    protected req: CandlesReqParams,
    protected debug: Debug.Debugger,
  ) {
    this.to = req.to || new Date();
    this.chunkDate = this.calcInitialChunkDate();
  }

  protected abstract getChunkFromTo(): { from: Date, to: Date };
  protected abstract moveChunkDate(): void;
  protected abstract getCacheFile(): string;

  // eslint-disable-next-line max-statements
  async getCandles() {
    this.debug(`Запрос на загрузку свечей: ${JSON.stringify(this.req)}`);
    this.candles = await this.loadChunk({ useCache: !this.needTodayCandles() });

    this.filterCandlesBy('to');

    while (this.shouldLoadMore()) {
      this.moveChunkDate();
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

  // eslint-disable-next-line max-statements
  protected async loadChunkFromFile(): Promise<HistoricCandle[] | void> {
    const cacheFile = this.getCacheFile();
    if (fs.existsSync(cacheFile)) {
      this.debug(`Загружаю свечи из файла: ${cacheFile}`);
      const candles: HistoricCandle[] = await loadJson(cacheFile);
      this.debug(`Загружено свечей: ${candles.length}`);
      // Из файла даты приходят строками: '2022-05-06T07:00:00.000Z', переводим в Date
      candles.forEach(candle => candle.time = new Date(candle.time!));
      return candles;
    }
    const cacheFileEmpty = this.getEmptyCacheFile(cacheFile);
    if (fs.existsSync(cacheFileEmpty)) {
      this.debug(`Загружаю свечи из файла: ${cacheFileEmpty}`);
      return [];
    }
  }

  protected async loadChunkFromApi() {
    const { figi, interval } = this.req;
    const { from, to } = this.getChunkFromTo();
    const apiStr = this.api.isBacktest ? 'API (backtest)' : 'API';
    this.debug(`Загружаю свечи из ${apiStr}: ${from.toISOString()} - ${to.toISOString()}`);
    const { candles } = await this.api.marketdata.getCandles({ figi, interval, from, to });
    this.debug(`Загружено свечей: ${candles.length}`);
    return candles;
  }

  protected async saveChunkToCache(candles: HistoricCandle[]) {
    const cacheFile = this.getCacheFile();
    const saveFile = candles.length > 0 ? cacheFile : this.getEmptyCacheFile(cacheFile);
    this.debug(`Сохраняю свечи: ${candles.length}, в файл: ${saveFile}`);
    await saveJson(saveFile, candles);
  }

  protected getEmptyCacheFile(cacheFile: string) {
    return cacheFile.replace(/\.json$/, '_empty.json');
  }

  protected shouldLoadMore() {
    // todo: check max iterations
    if (this.req.minCount) {
      const res = this.candles.length < this.req.minCount;
      res && this.debug(`Сейчас свечей: ${this.candles.length}, а нужно: ${this.req.minCount}`);
      return res;
    }
    if (this.req.from) {
      const res = this.chunkDate > this.req.from;
      res && this.debug([
        `Сейчас свечей: ${this.candles.length}, начиная с ${this.chunkDate.toISOString()},`,
        `а нужно с ${this.req.from.toISOString()}`,
      ].join(' '));
      return res;
    }
    throw new Error(`Нужно указать "from" или "minCount"`);
  }

  protected filterCandlesBy(date: 'from' | 'to') {
    const oldLength = this.candles.length;
    const { from } = this.req;
    if (date === 'to') {
      this.candles = this.candles.filter(candle => candle.time! < this.to);
    } else if (from) {
      this.candles = this.candles.filter(candle => candle.time! >= from);
    }
    const newLength = this.candles.length;
    if (newLength !== oldLength) {
      const dateStr = date === 'from' ? from!.toISOString() : this.to.toISOString();
      this.debug(`Фильтрация свечей по ${date} (${dateStr}): ${oldLength} -> ${newLength}`);
    }
  }

  protected needTodayCandles() {
    const todayMidnight = new OriginalDate();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    return this.to > todayMidnight;
  }

  protected calcInitialChunkDate() {
    // вычитаем 1мс, т.к. само значение to не включается в фильтр.
    // если to = 2022-04-29T00:00:00+03:00, то в результате нужны свечи только за 2022-04-28
    const date = new Date(this.to.valueOf() - 1);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  protected getFigiDir() {
    return path.join(this.options.cacheDir, 'candles', this.req.figi);
  }
}
