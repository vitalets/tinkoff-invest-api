/**
 * Эмуляция orders.
 * See: https://tinkoff.github.io/investAPI/head-orders/
 */
import { Client } from 'nice-grpc';
import {
  CancelOrderRequest,
  GetOrdersRequest,
  GetOrderStateRequest,
  OrderExecutionReportStatus,
  OrdersServiceDefinition,
  OrdersStreamServiceDefinition,
  OrderState,
  PostOrderRequest,
  TradesStreamRequest
} from '../generated/orders.js';
import { Backtest } from './index.js';

export class OrdersStub implements Client<typeof OrdersServiceDefinition> {
  private orders: OrderState[] = [];

  constructor(private backtest: Backtest) { }

  async getOrders(_: GetOrdersRequest) {
    const statuses = [
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL,
    ];
    const orders = this.orders.filter(order => statuses.includes(order.executionReportStatus));
    return { orders };
  }

  async postOrder(req: PostOrderRequest) {
    const order = this.getExistingOrder(req.orderId) || (await this.createOrder(req));
    return {
      orderId: order.orderId,
      executionReportStatus: order.executionReportStatus,
      lotsRequested: order.lotsRequested,
      lotsExecuted: order.lotsExecuted,
      initialOrderPrice: order.initialOrderPrice,
      figi: order.figi,
      direction: order.direction,
      orderType: order.orderType,
      message: '',
    };
  }

  async cancelOrder({ orderId }: CancelOrderRequest) {
    const order = this.getExistingOrder(orderId);
    if (order) {
      order.executionReportStatus = OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED;
      this.backtest.broker.unblockPositionForOrder(order);
    }
    return { time: this.backtest.marketdata.getTime() };
  }

  async getOrderState({ orderId }: GetOrderStateRequest) {
    const order = this.getExistingOrder(orderId);
    if (!order) throw new Error(`Order not found: ${orderId}`);
    return order;
  }

  private getExistingOrder(orderId: string) {
    return this.orders.find(o => o.orderId === orderId);
  }

  private async createOrder(req: PostOrderRequest) {
    const order = await this.backtest.broker.createOrder(req);
    await this.backtest.broker.blockPositionForOrder(order);
    this.orders.push(order);
    return order;
  }
}

export class OrdersStreamStub implements Client<typeof OrdersStreamServiceDefinition> {
  constructor(private backtest: Backtest) { }

  async *tradesStream(_: TradesStreamRequest) {
    yield {
      orderTrades: undefined,
    };
  }
}
