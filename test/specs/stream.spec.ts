import { MarketDataResponse, SubscriptionInterval } from '../../src/generated/marketdata.js';
import { MarketStream } from '../../src/stream/market.js';

export async function waitMarketStreamEvent(stream: MarketStream, event: 'data' | 'close' | 'error') {
  return new Promise<MarketDataResponse>(resolve => stream.on(event, resolve));
}

describe('stream', () => {

  const figi = 'BBG004730N88';
  const interval = SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;

  after(() => {
    testApi.stream.market.cancel();
  });

  it('подписка на свечи', async () => {
    testApi.stream.market.watch({ candles: [ { figi, interval } ]});
    const data = await waitMarketStreamEvent(testApi.stream.market, 'data');
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi, interval: 1, subscriptionStatus: 1 }
    ]);
  });

  it('подписка: неверный figi - ошибки нет, subscriptionStatus в ответе = 2', async () => {
    testApi.stream.market.watch({ candles: [{ figi: 'bad figi', interval }]});
    const data = await waitMarketStreamEvent(testApi.stream.market, 'data');
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'bad figi', interval: 1, subscriptionStatus: 2 }
    ]);
  });

  it('close', async () => {
    testApi.stream.market.watch({ candles: [ { figi, interval } ]});
    await waitMarketStreamEvent(testApi.stream.market, 'data');
    assert.equal(testApi.stream.market.connected, true);
    const promise = waitMarketStreamEvent(testApi.stream.market, 'close');
    testApi.stream.market.cancel();
    const reason = await promise;
    assert.equal(testApi.stream.market.connected, false);
    assert.equal(reason, undefined);
  });

  it('error', async () => {
    class MarketStreamTest extends MarketStream {
      protected async loop() {
        // emulate stream that throws error
        // eslint-disable-next-line require-yield
        const call = { async *[Symbol.asyncIterator]() { throw new Error('foo'); } };
        await super.loop(call);
      }
    }

    const stream = new MarketStreamTest(testApi);

    const errorPromise = waitMarketStreamEvent(stream, 'error');
    const closePromise = waitMarketStreamEvent(stream, 'close');

    stream.watch({ candles: [{ figi, interval } ]});

    const [ error, reason ] = await Promise.all([ errorPromise, closePromise ]);

    assert.equal(stream.connected, false);
    assert.equal(error.toString(), 'Error: foo');
    assert.equal(reason.toString(), 'Error: foo');
  });
});
