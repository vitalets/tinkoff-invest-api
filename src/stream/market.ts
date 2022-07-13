/**
 * Класс для подписок на realtime marketdata.
 * See: https://tinkoff.github.io/investAPI/marketdata/#marketdataservice
 */
import { BaseStream } from './base.js';
import { MarketDataRequest, MarketDataResponse, SubscriptionAction } from '../generated/marketdata.js';

type MarketDataWatch = {
  candles?: Required<MarketDataRequest>['subscribeCandlesRequest']['instruments'],
  orderBook?: Required<MarketDataRequest>['subscribeOrderBookRequest']['instruments'],
  trades?: Required<MarketDataRequest>['subscribeTradesRequest']['instruments'],
  info?: Required<MarketDataRequest>['subscribeInfoRequest']['instruments'],
  lastPrice?: Required<MarketDataRequest>['subscribeLastPriceRequest']['instruments'],
}

// todo: support unwatch 'all'
// type MarketDataUnwatch = {
//   [K in keyof MarketDataWatch]: MarketDataWatch[K] | 'all'
// }

export class MarketStream extends BaseStream<MarketDataRequest, MarketDataResponse> {
  /**
   * Подписаться на обновления.
   */
  watch(request: MarketDataWatch) {
    this.ensureConnected();
    this.createSubscription(request, SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE);
  }

  /**
   * Отписаться от обновлений.
   */
  unwatch(request: MarketDataWatch) {
    this.ensureConnected();
    this.createSubscription(request, SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE);
  }

  protected ensureConnected() {
    if (!this.connected) {
      const req = this.createRequestIterable();
      const call = this.api.marketdataStream.marketDataStream(req);
      this.loop(call);
    }
  }

  protected createSubscription(request: MarketDataWatch, subscriptionAction: SubscriptionAction) {
    const keys = Object.keys(request) as (keyof MarketDataWatch)[];
    keys.forEach(key => {
      const capitalKey = capitalize(key) as Capitalize<typeof key>;
      const reqKey: keyof MarketDataRequest = `subscribe${capitalKey}Request`;
      const instruments = request[key];
      // todo: better type check
      this.sendSubscriptionRequest({ [reqKey]: { subscriptionAction, instruments } });
    });
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
