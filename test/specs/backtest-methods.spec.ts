import { InstrumentIdType } from '../../src/generated/instruments.js';
import { CandleInterval, SubscriptionInterval } from '../../src/generated/marketdata.js';
import { Backtest, CandlesLoader, Helpers } from '../../src/index.js';
import { waitMarketStreamEvent } from './stream.spec.js';

export async function createBacktest({ from, to }: { to?: Date, from?: Date} = {}) {
  const backtest = new Backtest({
    token: process.env.TINKOFF_API_TOKEN_READONLY!,
    from: from || new Date('2022-04-29T10:00:00+03:00'),
    to: to || new Date('2022-04-29T19:00:00+03:00'),
    candleInterval: CandleInterval.CANDLE_INTERVAL_1_MIN,
    cacheDir: 'test/.cache',
  });
  await backtest.tick();
  return backtest;
}

describe('backtest-methods', () => {

  const figi = 'BBG004730N88';

  it('getAccounts', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.users.getAccounts({});
    assert.equal(res.accounts[ 0 ].id, '0000000000');
  });

  it('getPortfolio', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.operations.getPortfolio({ accountId: 'x' });
    assert.deepEqual(res.positions, []);
    assert.deepEqual(res.totalAmountCurrencies, { units: 100_000, nano: 0, currency: 'rub' });
    assert.deepEqual(res.expectedYield, { units: 0, nano: 0 });
  });

  it('getInstrumentBy', async () => {
    const backtest = await createBacktest();
    const { instrument } = await backtest.api.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG004730N88'
    });
    assert.equal(instrument?.ticker, 'SBER');
    assert.equal(instrument?.tradingStatus, 5);
  });

  it('getPositions', async () => {
    const backtest = await createBacktest();
    const positions = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positions, {
      money: [ { units: 100000, nano: 0, currency: 'rub' } ],
      securities: [],
      blocked: [],
      futures: [],
      limitsLoadingInProgress: false,
    });
  });

  it('getCandles', async () => {
    const backtest = await createBacktest();
    const interval = CandleInterval.CANDLE_INTERVAL_1_MIN;

    // запрашиваем свечи за 3 мин
    let res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('-3m') });
    assert.equal(new Date().toISOString(), '2022-04-29T07:00:00.001Z');
    assert.equal(res.candles.length, 1);
    assert.equal(res.candles[0].time?.toISOString(), '2022-04-29T07:00:00.000Z');

    await backtest.tick();

    res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('-3m') });
    assert.equal(new Date().toISOString(), '2022-04-29T07:01:00.001Z');
    assert.equal(res.candles.length, 2);
    assert.equal(res.candles[0].time?.toISOString(), '2022-04-29T07:00:00.000Z');
    assert.equal(res.candles[1].time?.toISOString(), '2022-04-29T07:01:00.000Z');

    while (await backtest.tick()) { /* noop */ }

    res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('-13m') });
    assert.equal(new Date().toISOString(), '2022-04-29T15:59:00.001Z');
    assert.equal(res.candles.length, 3);
    assert.equal(res.candles[0].time?.toISOString(), '2022-04-29T15:47:00.000Z');
    assert.equal(res.candles[1].time?.toISOString(), '2022-04-29T15:48:00.000Z');
    assert.equal(res.candles[2].time?.toISOString(), '2022-04-29T15:49:00.000Z');
  });

  it('getLastPrices', async () => {
    const backtest = await createBacktest();
    const res1 = await backtest.api.marketdata.getLastPrices({ figi: [ figi ] });
    assert.deepEqual(res1.lastPrices[0], {
      figi,
      price: { units: 122, nano: 860000000 },
      time: new Date('2022-04-29T07:00:00.000Z')
    });

    await backtest.tick();

    const res2 = await backtest.api.marketdata.getLastPrices({ figi: [ figi ] });
    assert.deepEqual(res2.lastPrices[0], {
      figi,
      price: { units: 123, nano: 650000000 },
      time: new Date('2022-04-29T07:01:00.000Z')
    });

    while (await backtest.tick()) { /* noop */ }

    const res3 = await backtest.api.marketdata.getLastPrices({ figi: [ figi ] });
    assert.deepEqual(res3.lastPrices[0], {
      figi,
      price: { units: 128, nano: 800000000 },
      time: new Date('2022-04-29T15:49:00.000Z')
    });
  });

  it('getOrderBook', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.marketdata.getOrderBook({ figi, depth: 1 });
    assert.deepEqual(res, {
      figi,
      depth: 1,
      bids: [],
      asks: [],
      lastPrice: { units: 122, nano: 860000000 },
      closePrice: { units: 122, nano: 860000000 },
      limitUp: { units: 123, nano: 870000000 },
      limitDown: { units: 122, nano: 800000000 },
    });
  });

  it('stream: подписка и получение свечей', async () => {
    const backtest = await createBacktest();
    const interval = SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;

    // подписываемся
    const promise = waitMarketStreamEvent(backtest.api);
    backtest.api.stream.market.watch({ candles: [ { figi, interval } ]});
    const data = await promise;
    assert.deepEqual(data, {
      subscribeCandlesResponse: {
        trackingId: 'xxx',
        candlesSubscriptions: [
          { figi: 'BBG004730N88', interval: 1, subscriptionStatus: 1 }
        ]
      }
    });

    // ждем свечу
    const promiseCandle = waitMarketStreamEvent(backtest.api);
    await backtest.tick();
    const dataCandle = await promiseCandle;
    assert.deepEqual(dataCandle.candle?.figi, 'BBG004730N88');
    assert.deepEqual(dataCandle.candle?.close, { units: 123, nano: 650000000 });
  });

  it('загрузка свечей через candlesLoader', async () => {
    const backtest = await createBacktest({ to: new Date('2022-04-30T18:50:00+03:00') });
    const candlesLoader = new CandlesLoader(backtest.api, { cacheDir: backtest.options.cacheDir });
    const { candleInterval: interval } = backtest.options;

    const res1 = await candlesLoader.getCandles({ figi, interval, minCount: 31 });
    assert.equal(new Date().toISOString(), '2022-04-29T07:00:00.001Z');
    assert.equal(res1.candles.length, 526);
    assert.equal(res1.candles[0].time?.toISOString(), '2022-04-28T07:00:00.000Z');
    assert.equal(res1.candles.slice(-1)[0].time?.toISOString(), '2022-04-29T07:00:00.000Z');

    await backtest.tick();

    const res2 = await candlesLoader.getCandles({ figi, interval, minCount: 31 });
    assert.equal(new Date().toISOString(), '2022-04-29T07:01:00.001Z');
    assert.equal(res2.candles.length, 527);
    assert.equal(res2.candles[0].time?.toISOString(), '2022-04-28T07:00:00.000Z');
    assert.equal(res2.candles.slice(-1)[0].time?.toISOString(), '2022-04-29T07:01:00.000Z');

    while (await backtest.tick()) { /* noop */ }

    const res3 = await candlesLoader.getCandles({ figi, interval, minCount: 31 });
    assert.equal(new Date().toISOString(), '2022-04-30T15:49:00.001Z');
    assert.equal(res3.candles.length, 525);
    assert.equal(res3.candles[0].time?.toISOString(), '2022-04-29T07:00:00.000Z');
    assert.equal(res3.candles.slice(-1)[0].time?.toISOString(), '2022-04-29T15:49:00.000Z');
  });

});
