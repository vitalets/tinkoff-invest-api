/**
 * Helpers.
 * See: https://tinkoff.github.io/investAPI/faq_custom_types/
 */

import ms, { StringValue } from 'ms';
import { MoneyValue, Quotation } from './generated/common.js';

export class Helpers {
  static toQuotation(value: number): Quotation {
    const units = Math.floor(value);
    const nano = (value - units) * 1000000000;
    return { units, nano };
  }

  static toMoney(value: number, currency: string): MoneyValue {
    const { units, nano } = Helpers.toQuotation(value);
    return { units, nano, currency };
  }

  static toNumber(value: Quotation | MoneyValue) {
    return value.units + value.nano / 1000000000;
  }

  /**
   * Возвращает интервал времени в формате { from, to }.
   * Для смещения используется формат из https://github.com/vercel/ms
   */
  static fromTo(offset: StringValue, base = new Date()) {
    const offsetMs = ms(offset);
    const date = new Date(base.valueOf() + offsetMs);
    const [ from, to ] = offsetMs > 0 ? [ base, date ] : [ date, base ];
    return { from, to };
  }
}
