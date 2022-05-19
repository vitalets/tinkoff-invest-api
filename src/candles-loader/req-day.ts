/**
 * Запрос свечей с интервалом = день.
 * Сохраняем в кеш по годам.
 */

import path from 'path';
import { CandlesReq } from './req.js';

export class CandlesReqDay extends CandlesReq {
  protected getChunkFromTo() {
    const from = new Date(this.chunkDate);
    from.setMonth(0, 1);
    from.setHours(0, 0, 0, 0);
    const to = new Date(from);
    to.setFullYear(to.getFullYear() + 1);
    return { from, to };
  }

  protected moveChunkDate() {
    this.chunkDate.setFullYear(this.chunkDate.getFullYear() - 1);
  }

  protected getCacheFile() {
    const year = this.chunkDate.getUTCFullYear().toString();
    return path.join(this.getFigiDir(), 'day', `${year}.json`);
  }
}

