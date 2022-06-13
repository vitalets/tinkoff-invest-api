const assert = require('assert');
// Без package.exports тест менее эффективен, т.к. нельзя использовать self-reference в путях
const { TinkoffInvestApi } = require('../..');
const { CandleInterval } = require('../../cjs/generated/marketdata');

assert(new TinkoffInvestApi({ token: 'token' }));
assert.equal(CandleInterval.CANDLE_INTERVAL_1_MIN, 1);

console.log('CJS: ok!');
