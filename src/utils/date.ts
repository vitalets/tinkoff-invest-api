export function formatDateUTC(date: Date, tpl: string) {
  return tpl
    .replace('YYYY', String(date.getUTCFullYear()))
    .replace('MM', addLeadingZero(date.getUTCMonth() + 1))
    .replace('DD', addLeadingZero(date.getUTCDate()))
    .replace('hh', addLeadingZero(date.getUTCHours()))
    .replace('mm', addLeadingZero(date.getUTCMinutes()))
    .replace('ss', addLeadingZero(date.getUTCSeconds()))
    .replace('SSS', addLeadingZero(date.getUTCMilliseconds(), 2));
}

function addLeadingZero(value: number, length = 2) {
  const strValue = String(value);
  const zeros = strValue.length < length ? '0'.repeat(length - strValue.length) : '';
  return `${zeros}${strValue}`;
}

export function addYears(date: Date, years: number) {
  date.setFullYear(date.getFullYear() + years);
  return date;
}

export function addDays(date: Date, days: number) {
  date.setDate(date.getDate() + days);
  return date;
}
