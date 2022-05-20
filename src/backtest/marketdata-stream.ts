/**
 * Эмуляция marketdata stream.
 * See: https://tinkoff.github.io/investAPI/marketdata/#marketdatastreamservice
 */

import { on, EventEmitter } from 'node:events';
import { Client } from 'nice-grpc';
import {
  MarketDataStreamServiceDefinition,
  MarketDataRequest,
  MarketDataResponse,
  CandleSubscription,
  SubscriptionStatus,
  SubscriptionAction,
  LastPriceSubscription,
  InfoSubscription,
  OrderBookSubscription,
  TradeSubscription,
} from '../generated/marketdata.js';
import { Backtest } from './index.js';
import { capitalize } from '../utils/string.js';

type Subscriptions = {
  candles: CandleSubscription[],
  orderBook: OrderBookSubscription[],
  trades: TradeSubscription[],
  info: InfoSubscription[],
  lastPrice: LastPriceSubscription[],
}

export class MarketDataStreamStub implements Client<typeof MarketDataStreamServiceDefinition> {
  protected emitter = new EventEmitter();
  protected subscriptions: Subscriptions = {
    candles: [],
    orderBook: [],
    trades: [],
    info: [],
    lastPrice: [],
  };

  constructor(private backtest: Backtest) { }

  async *marketDataStream(req: AsyncIterable<MarketDataRequest>) {
    this.listenSubscriptions(req);
    const innerReq = on(this.emitter, 'data');
    for await (const data of innerReq) {
      const value = data[0];
      // Используем null как специальное значение, чтобы выйти из цикла и закрыть соединение
      if (value === null) break;
      yield value as MarketDataResponse;
    }
  }

  async emitData() {
    await this.emitCandle();
    await this.emitLastPrice();
    await this.emitOrderBook();
    // todo: emit trades, emit info
  }

  protected async listenSubscriptions(reqIterable: AsyncIterable<MarketDataRequest>) {
    for await (const req of reqIterable) {
      this.handleSubscriptionRequest(req, 'candles');
      this.handleSubscriptionRequest(req, 'orderBook');
      this.handleSubscriptionRequest(req, 'trades');
      this.handleSubscriptionRequest(req, 'info');
      this.handleSubscriptionRequest(req, 'lastPrice');
    }
    // Сюда попадаем в случае завершения запроса, поэтому закрываем ответное соединение
    this.emitter.emit('data', null);
  }

  protected handleSubscriptionRequest<T extends keyof Subscriptions>(req: MarketDataRequest, key: T) {
    const subscriptionStatus = SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS;
    const upperKey = capitalize(key);
    const data = req[`subscribe${upperKey}Request`];
    if (!data) return;
    const { subscriptionAction, instruments } = data;
    const isSubscribe = subscriptionAction === SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE;
    const subscriptions = instruments.map(item => ({ ...item, subscriptionStatus })) as Subscriptions[T];
    this.updateSubscriptions(key, subscriptions, isSubscribe);
    // todo: better typecheck
    const res = { trackingId: 'xxx', [`${key}Subscriptions`]: subscriptions };
    this.emitter.emit('data', { [`subscribe${upperKey}Response`]: res });
  }

  protected updateSubscriptions<T extends keyof Subscriptions>(
    key: T,
    newSubscriptions: Subscriptions[T],
    isSubscribe: boolean,
  ) {
    newSubscriptions.forEach(newSubscription => {
      const existingIndex = this.subscriptions[key].findIndex(s => JSON.stringify(s) === JSON.stringify(s));
      // @ts-expect-error не придумал как победить типизацию )
      if (existingIndex < 0 && isSubscribe) this.subscriptions[key].push(newSubscription);
      if (existingIndex >= 0 && !isSubscribe) this.subscriptions[key].splice(existingIndex, 1);
    });
  }

  protected async emitCandle() {
    for (const { figi, interval } of this.subscriptions.candles) {
      const historicCandle = await this.backtest.marketdata.getCurrentCandle(figi);
      const candle: NonNullable<MarketDataResponse['candle']> = { figi, interval, ...historicCandle };
      this.emitter.emit('data', { candle });
    }
  }

  protected async emitLastPrice() {
    for (const { figi } of this.subscriptions.lastPrice) {
      const { close: price, time } = await this.backtest.marketdata.getCurrentCandle(figi);
      const lastPrice: NonNullable<MarketDataResponse['lastPrice']> = { figi, price, time };
      this.emitter.emit('data', { lastPrice });
    }
  }

  protected async emitOrderBook() {
    for (const { figi, depth } of this.subscriptions.orderBook) {
      const { high: limitUp, low: limitDown, time } = await this.backtest.marketdata.getCurrentCandle(figi);
      const orderbook: NonNullable<MarketDataResponse['orderbook']> = {
        figi,
        depth,
        bids: [],
        asks: [],
        limitUp,
        limitDown,
        time,
        isConsistent: true,
      };
      this.emitter.emit('data', { orderbook });
    }
  }
}

