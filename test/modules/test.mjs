import assert from 'assert';
// Без package.exports тест менее эффективен, т.к. нельзя использовать self-reference в путях
import { TinkoffInvestApi } from '../../dist/index.js';
import { CandleInterval } from '../../dist/generated/marketdata.js';

assert(new TinkoffInvestApi({ token: 'token' }));
assert.equal(CandleInterval.CANDLE_INTERVAL_1_MIN, 1);

console.log('MJS: ok!');
