import { MarketDataResponse, SubscriptionInterval } from '../../src/generated/marketdata.js';

describe('stream', () => {

  after(() => {
    api.stream.cancel();
  });

  it('подписка на свечи', async () => {
    api.stream.watch({ candles: [
      { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]});
    const data = await new Promise<MarketDataResponse>(resolve => api.stream.on('data', resolve));
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'BBG004730N88', interval: 1, subscriptionStatus: 1 }
    ]);
  });

});
