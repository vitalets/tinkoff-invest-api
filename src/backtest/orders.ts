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
  OrderState,
  PostOrderRequest
} from '../generated/orders.js';
import { Backtest } from './index.js';

export class OrdersStub implements Client<typeof OrdersServiceDefinition> {
  private orders: OrderState[] = [];

  constructor(private backtest: Backtest) { }

  async getOrders(_: GetOrdersRequest) {
    const orders = this.getActiveOrders();
    return { orders };
  }

  async postOrder(req: PostOrderRequest) {
    const order = this.getExistingOrder(req.orderId) || this.createOrder(req);
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
    return {
      time: new Date()
    };
  }

  async getOrderState({ orderId }: GetOrderStateRequest) {
    const order = this.getExistingOrder(orderId);
    if (!order) throw new Error(`Order not found: ${orderId}`);
    return order;
  }

  getActiveOrders() {
    const statuses = [
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW,
      OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL,
    ];
    return this.orders.filter(order => statuses.includes(order.executionReportStatus));
  }

  private getExistingOrder(orderId: string) {
    return this.orders.find(o => o.orderId === orderId);
  }

  private createOrder(req: PostOrderRequest) {
    const order = this.backtest.broker.createOrder(req);
    this.backtest.broker.blockPositionForOrder(order);
    this.orders.push(order);
    return order;
  }
}
