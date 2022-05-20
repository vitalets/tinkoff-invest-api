import path from 'path';
import { CandleInterval } from '../generated/marketdata.js';
import { formatDateUTC } from '../utils/date.js';
import { CandlesReq } from './req.js';

/**
 * Запрос свечей с интервалом минуты/часы.
 * Сохраняем в кеш по дням.
 */
 export class CandlesReqMh extends CandlesReq {
  protected getChunkFromTo() {
    const from = new Date(this.chunkDate);
    from.setUTCHours(0, 0, 0, 0);
    const to = new Date(from);
    to.setUTCDate(to.getUTCDate() + 1);
    return { from, to };
  }

  protected moveChunkDate() {
    this.chunkDate.setUTCDate(this.chunkDate.getUTCDate() - 1);
  }

  protected getCacheFile() {
    const intervalStr = CandleInterval[this.req.interval].replace('CANDLE_INTERVAL_', '').toLowerCase();
    const dateStr = formatDateUTC(this.chunkDate, 'YYYY-MM-DD');
    return path.join(this.getFigiDir(), intervalStr, `${dateStr}.json`);
  }
}
