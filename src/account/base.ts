/**
 * Базовый класс счета.
 */
import { randomUUID } from 'crypto';
import { TinkoffInvestApi } from '../api.js';
import { PostOrderRequest, OrderDirection, OrderType } from '../generated/orders.js';
import { RequiredBy } from '../utils/types.js';

export type OmitAccount<T> = Omit<T, 'accountId'>;

type PostOrderRequestSimple = Omit<OmitAccount<PostOrderRequest>, 'direction' | 'orderType' | 'orderId'>
  & Partial<Pick<PostOrderRequest, 'orderId'>>;
type PostOrderRequestMarket = Omit<PostOrderRequestSimple, 'price'>;
type PostOrderRequestLimit = RequiredBy<PostOrderRequestSimple, 'price'>;

export abstract class BaseAccount {
  constructor(public api: TinkoffInvestApi, public accountId: string) {}
  abstract postOrder(request: OmitAccount<PostOrderRequest>): ReturnType<TinkoffInvestApi['orders']['postOrder']>;

  /**
   * Покупка по рыночной цене.
   */
  async buyMarket(request: PostOrderRequestMarket) {
    return this.postOrder({
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: request.orderId || randomUUID(),
      ...request,
    });
  }

  /**
   * Покупка по лимитированной цене.
   */
  async buyLimit(request: PostOrderRequestLimit) {
    return this.postOrder({
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: request.orderId || randomUUID(),
      ...request,
    });
  }

  /**
   * Продажа по рыночной цене.
   */
  async sellMarket(request: PostOrderRequestMarket) {
    return this.postOrder({
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: request.orderId || randomUUID(),
      ...request,
    });
  }

  /**
   * Продажа по лимитированной цене.
   */
  async sellLimit(request: PostOrderRequestLimit) {
    return this.postOrder({
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: request.orderId || randomUUID(),
      ...request,
    });
  }
}
