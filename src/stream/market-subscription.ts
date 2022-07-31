/**
 * Класс подписки в стриме market.
 * Позволяет ожидать результата подписки и вызывать обработчики для figi, заданных при подписке.
 * See: https://github.com/vitalets/tinkoff-invest-api/issues/6
 */
import {
  Candle,
  CandleSubscription,
  InfoSubscription,
  LastPrice,
  LastPriceSubscription,
  MarketDataRequest,
  MarketDataResponse,
  OrderBook,
  OrderBookSubscription,
  SubscriptionAction,
  SubscriptionStatus,
  Trade,
  TradeSubscription,
  TradingStatus
} from '../generated/marketdata.js';

type ResponseSubscription = CandleSubscription
  | TradeSubscription
  | OrderBookSubscription
  | LastPriceSubscription
  | InfoSubscription;
type ResponseData = Candle | Trade | OrderBook | LastPrice | TradingStatus;

type MarketSubscriptionOptions<S, D> = {
  buildRequest: (subscriptionAction: SubscriptionAction) => MarketDataRequest,
  buildResponse: (res: MarketDataResponse) => UniversalMarketResponse<S, D>,
  dataHandler: (data: D) => unknown,
  // массив ключей под данным в запросе (по ним матчим ответы на нужный обработчик)
  requestKeys: string[],
}

/**
 * Универсальный ответ (одинаковые поля для разных типов подписок)
 */
export type UniversalMarketResponse<S, D> = {
  trackingId?: string;
  subscriptions?: S[];
  // ключи в статусе подписки, по которым определяем, что статус для нужного запроса
  subscriptionKeys?: string[];
  data?: D;
  // ключ данных в ответе, по которому определяем, что данные для нужного обработчика
  dataKey?: string;
}

export class MarketSubscription<S extends ResponseSubscription, D extends ResponseData> {
  protected waitingStatusResolve?: () => unknown;
  protected waitingStatusReject?: (error: Error) => unknown;

  constructor(protected options: MarketSubscriptionOptions<S, D>) {
    this.handler = this.handler.bind(this);
  }

  getRequest(subscriptionAction: SubscriptionAction) {
    return this.options.buildRequest(subscriptionAction);
  }

  handler(res: MarketDataResponse) {
    const uniRes = this.options.buildResponse(res);
    this.statusHandler(uniRes);
    this.dataHandler(uniRes);
  }

  async waitStatus() {
    try {
      await new Promise<void>((resolve, reject) => {
        this.waitingStatusResolve = resolve;
        this.waitingStatusReject = reject;
      });
    } finally {
      this.waitingStatusResolve = undefined;
      this.waitingStatusReject = undefined;
    }
  }

  // eslint-disable-next-line complexity
  protected statusHandler({ subscriptions, subscriptionKeys, trackingId }: UniversalMarketResponse<S, D>) {
    if (!this.waitingStatusResolve || !this.waitingStatusReject) return;
    if (!subscriptions || !subscriptionKeys) return;
    if (subscriptionKeys.sort().join() !== this.options.requestKeys.sort().join()) return;
    const errorSubscriptions = subscriptions
      .filter(s => s.subscriptionStatus !== SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS);
    if (errorSubscriptions.length) {
      const error = this.buildSubscriptionError(errorSubscriptions, trackingId);
      this.waitingStatusReject(error);
    } else {
      this.waitingStatusResolve();
    }
  }

  protected dataHandler({ data, dataKey }: UniversalMarketResponse<S, D>) {
    if (!data || !dataKey) return;
    if (this.options.requestKeys.includes(dataKey)) {
      this.options.dataHandler(data);
    }
  }

  protected buildSubscriptionError(errorSubscriptions: S[], trackingId?: string) {
    const lines = errorSubscriptions.map(s => `${s.figi}: status ${s.subscriptionStatus}`);
    return new Error([
      'Subscription error:',
      ...lines,
      `TrackingId: ${trackingId}`,
    ].join('\n'));
  }
}
