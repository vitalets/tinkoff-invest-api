import { TinkoffInvestApi } from '../../src/api.js';
import { MarketDataResponse, SubscriptionInterval } from '../../src/generated/marketdata.js';

export async function waitMarketStreamEvent(api: TinkoffInvestApi, event: 'data' | 'close') {
  return new Promise<MarketDataResponse>(resolve => api.stream.market.on(event, resolve));
}

describe('stream', () => {

  after(() => {
    testApi.stream.market.cancel();
  });

  it('подписка на свечи', async () => {
    testApi.stream.market.watch({ candles: [
      { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]});
    const data = await waitMarketStreamEvent(testApi, 'data');
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'BBG004730N88', interval: 1, subscriptionStatus: 1 }
    ]);
  });

  it('подписка: неверный figi - ошибки нет, subscriptionStatus в ответе = 2', async () => {
    testApi.stream.market.watch({ candles: [
      { figi: 'bad figi', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]});
    const data = await waitMarketStreamEvent(testApi, 'data');
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'bad figi', interval: 1, subscriptionStatus: 2 }
    ]);
  });

  it('close', async () => {
    testApi.stream.market.watch({ candles: [
      { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]});
    await waitMarketStreamEvent(testApi, 'data');
    assert.equal(testApi.stream.market.connected, true);
    const promise = waitMarketStreamEvent(testApi, 'close');
    testApi.stream.market.cancel();
    await promise;
    assert.equal(testApi.stream.market.connected, false);
  });

});
