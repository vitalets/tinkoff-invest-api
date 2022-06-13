const assert = require('assert');
const { TinkoffInvestApi } = require('tinkoff-invest-api');
const { CandleInterval } = require('tinkoff-invest-api/marketdata');

assert(new TinkoffInvestApi({ token: 'token' }));
assert.equal(CandleInterval.CANDLE_INTERVAL_1_MIN, 1);

console.log('CJS: ok!');
