import { TinkoffInvestApi } from '../../src/api.js';
import { MarketDataResponse, SubscriptionInterval } from '../../src/generated/marketdata.js';

export async function waitMarketStreamEvent(api: TinkoffInvestApi) {
  return new Promise<MarketDataResponse>(resolve => api.stream.market.on('data', resolve));
}

describe('stream', () => {

  after(() => {
    testApi.stream.market.cancel();
  });

  it('подписка на свечи', async () => {
    testApi.stream.market.watch({ candles: [
      { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]});
    const data = await waitMarketStreamEvent(testApi);
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'BBG004730N88', interval: 1, subscriptionStatus: 1 }
    ]);
  });

});
