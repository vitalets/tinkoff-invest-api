/**
 * See: https://tinkoff.github.io/investAPI/faq_custom_types/
 */

import ms, { StringValue } from 'ms';
import { Quotation } from './generated/common.js';

export function toQuotation(value: number): Quotation {
  const units = Math.floor(value);
  const nano = (value - units) * 1000000000;
  return { units, nano };
}

export function fromQuotation(value: Quotation): number {
  return value.units + value.nano / 1000000000;
}

/**
 * Возвращает интервал времени в формате { from, to }.
 * Для входных значений используется формат из https://github.com/vercel/ms
 */
export function timeInterval(from: StringValue | Date, to: StringValue | Date = new Date()) {
  const now = Date.now();
  if (typeof from === 'string') from = new Date(now + ms(from));
  if (typeof to === 'string') to = new Date(now + ms(to));
  return { from, to };
}

// todo?

// export function toMoneyValue(value: number, currency: string): MoneyValue {
//   const { units, nano } = toQuotation(value);
//   return { units, nano, currency };
// }

// export function fromMoneyValue(value: number, currency: string): MoneyValue {
//   const units = Math.floor(value);
//   const nano = (value - units) * 1000000000;
//   return { units, nano, currency };
// }
