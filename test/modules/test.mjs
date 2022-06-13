import assert from 'assert';
import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { CandleInterval } from 'tinkoff-invest-api/marketdata';

assert(new TinkoffInvestApi({ token: 'token' }));
assert.equal(CandleInterval.CANDLE_INTERVAL_1_MIN, 1);

console.log('MJS: ok!');
