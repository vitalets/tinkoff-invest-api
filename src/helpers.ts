/**
 * Хелперы.
 * See: https://tinkoff.github.io/investAPI/faq_custom_types/
 */

import ms, { StringValue } from 'ms';
import { MoneyValue, Quotation, SecurityTradingStatus } from './generated/common.js';
import { CandleInterval } from './generated/marketdata.js';
import { OrderDirection } from './generated/orders.js';
import { getCommonPart } from './utils/string.js';

export class Helpers {
  /**
   * Переводит число в Quotation.
   * Пример: 123.4 -> { units: 123, nano: 400000000 }
   */
  static toQuotation(value: number): Quotation {
    const sign = value < 0 ? -1 : 1;
    const absValue = Math.abs(value);
    const units = Math.floor(absValue);
    // Math.round нужен, чтобы не было чисел вида 10000000.00000227
    const nano = Math.round((absValue - units) * 1000000000);
    return {
      units: sign * units,
      nano: sign * nano,
    };
  }

  /**
   * Переводит число в MoneyValue { units, nano, currency }
   * Пример: (123.4, 'rub') -> { units: 123, nano: 400000000, currency: 'rub' }
   */
  static toMoneyValue(value: number, currency: string): MoneyValue {
    const { units, nano } = Helpers.toQuotation(value);
    return { units, nano, currency };
  }

  /**
   * Переводит MoneyValue в строку.
   * Пример: { units: 123, nano: 400000000, currency: 'rub' } -> '123.4 rub'
   */
  static toMoneyString(value: MoneyValue | undefined) {
    return `${Helpers.toNumber(value)} ${value?.currency}`;
  }

  /**
   * Переводит Quotation или MoneyValue в число.
   * Пример: { units: 123, nano: 400000000 } -> 123.4
   */
  static toNumber<T extends Quotation | MoneyValue | undefined>(value: T) {
    return (value ? value.units + value.nano / 1000000000 : value) as T extends undefined ? undefined : number;
  }

  /**
   * Возвращает интервал времени в формате { from, to } по заданному смещению и базовой дате.
   * Для смещения можно использовать кол-во миллисекунд или строку в формате из https://github.com/vercel/ms
   */
  static fromTo(offset: string | number, base = new Date()) {
    // Не использую StringValue, т.к. с ним больше мороки: нужно импортить при использовании итд.
    const offsetMs = typeof offset === 'string' ? ms(offset as StringValue) : offset;
    const date = new Date(base.valueOf() + offsetMs);
    const [ from, to ] = offsetMs > 0 ? [ base, date ] : [ date, base ];
    return { from, to };
  }

  /**
   * Переводит значения констант в человеко-читаемые строки.
   * Пример: CandleInterval.CANDLE_INTERVAL_1_MIN -> '1_MIN'
   */
  static toHuman<T extends Enums>(value: T, values: getEnumType<T>) {
    const str = values[value] || '';
    const commonPart = getCommonPart(values[0], values[1]);
    return str.replace(commonPart, '');
  }
}

// todo: добавлять по мере необходимости
type Enums = CandleInterval
  | OrderDirection
  | SecurityTradingStatus;

// todo: можно ли сделать более лаконично?
type getEnumType<T extends Enums> = T extends CandleInterval ? typeof CandleInterval
  : T extends OrderDirection ? typeof OrderDirection : never;
