/**
 * Загрузчик свечей.
 * - позволяет загрузить необходимое кол-во свечей из прошлого
 * - использует кеш на файловой системе
 *
 * Структура кеша:
 * <figi>
 *   1_min
 *      2022-05-01.json
 *      2022-05-02.json
 *   5_min
 *      2022-05-01.json
 *      2022-05-02.json
 *   15_min
 *      2022-05-01.json
 *      2022-05-02.json
 *   hour
 *      2022-05-01.json
 *      2022-05-02.json
 *   day
 *      2020.json
 *      2021.json
 *      2022.json
 */
import Debug from 'debug';
import { TinkoffInvestApi } from '../api.js';
import { CandlesReq, CandlesReqParams } from './req.js';

export interface CandlesLoaderOptions {
  /** Директория для кеширования свечей */
  cacheDir?: string;
}

const defaults: Required<CandlesLoaderOptions> = {
  cacheDir: '.cache',
};

export class CandlesLoader {
  protected options: Required<CandlesLoaderOptions>;
  protected debug = Debug('tinkoff-invest-api:candles-loader');

  constructor(protected api: TinkoffInvestApi, options: CandlesLoaderOptions = {}) {
    this.options = Object.assign({}, defaults, options);
  }

  async getCandles(req: CandlesReqParams) {
    const candlesReq = new CandlesReq(this.api, this.options, req, this.debug);
    const candles = await candlesReq.getCandles();
    return { candles };
  }
}
