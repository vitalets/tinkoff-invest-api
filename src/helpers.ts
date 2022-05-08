/**
 * Хелперы.
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

  static toMoneyValue(value: number, currency: string): MoneyValue {
    const { units, nano } = Helpers.toQuotation(value);
    return { units, nano, currency };
  }

  static toMoneyString(value: MoneyValue | undefined) {
    return `${Helpers.toNumber(value)} ${value?.currency}`;
  }

  /**
   * Возвращает число из объекта { units, nano }
   */
  static toNumber<T extends Quotation | MoneyValue | undefined>(value: T) {
    return (value ? value.units + value.nano / 1000000000 : value) as T extends undefined ? undefined : number;
  }

  /**
   * Возвращает интервал времени в формате { from, to }.
   * Для смещения используется формат из https://github.com/vercel/ms
   */
  static fromTo(offset: string, base = new Date()) {
    // Не использую StringValue, т.к. с ним больше мороки: нужно импортить при использовании итд.
    const offsetMs = ms(offset as StringValue);
    const date = new Date(base.valueOf() + offsetMs);
    const [ from, to ] = offsetMs > 0 ? [ base, date ] : [ date, base ];
    return { from, to };
  }
}
