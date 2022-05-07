/**
 * Класс для подписок на realtime marketdata.
 */
import { on, EventEmitter } from 'node:events';
import { TinkoffInvestApi } from './api.js';
import { MarketDataRequest, MarketDataResponse, SubscriptionAction } from './generated/marketdata.js';

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

export class MarketDataStream {
  connected = false;
  private emitter = new EventEmitter();

  constructor(public api: TinkoffInvestApi) {}

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

  /**
   * Установить обработчик.
   */
  on(event: 'data', handler: (data: MarketDataResponse) => unknown) {
    this.emitter.on(event, handler);
    return () => this.emitter.off(event, handler);
  }

  /**
   * Удалить обработчик.
   */
  off(event: 'data', handler: (data: MarketDataResponse) => unknown) {
    this.emitter.off(event, handler);
  }

  /**
   * Отмена запроса.
   */
  cancel() {
    this.emitter.emit('request', null);
    // todo: remove all listeners?
  }

  private ensureConnected() {
    if (!this.connected) {
      const req = this.createRequestIterable();
      this.connectAndWaitData(req);
    }
  }

  private async *createRequestIterable(): AsyncIterable<MarketDataRequest> {
    const innerReq = on(this.emitter, 'request');
    // events.on эмитит данные в виде массива (https://nodejs.org/api/events.html#eventsonemitter-eventname-options)
    // поэтому трансформируем все вызовы в новый AsyncIterable, куда передается только первый аргумент
    for await (const data of innerReq) {
      const value = data[0];
      // Используем null как специальное значение, чтобы выйти из цикла и закрыть соединение
      if (value === null) break;
      yield value;
    }
  }

  private createSubscription(request: MarketDataWatch, subscriptionAction: SubscriptionAction) {
    const keys = Object.keys(request) as (keyof MarketDataWatch)[];
    keys.forEach(key => {
      const capitalKey = capitalize(key) as Capitalize<typeof key>;
      const reqKey: keyof MarketDataRequest = `subscribe${capitalKey}Request`;
      const instruments = request[key];
      // todo: better type check
      this.emitter.emit('request', { [reqKey]: { subscriptionAction, instruments } });
    });
  }

  private async connectAndWaitData(req: AsyncIterable<MarketDataRequest>) {
    const call = this.api.marketdataStream.marketDataStream(req);
    this.connected = true;
    for await (const data of call) {
      this.emitter.emit('data', data);
    }
    // Если вышли из цикла, значит соединение разорвано
    this.connected = false;
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
