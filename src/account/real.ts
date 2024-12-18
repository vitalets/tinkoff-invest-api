/**
 * Реальный счет
 */
import { TinkoffInvestApi } from '../api.js';
import { OperationsRequest, PortfolioRequest_CurrencyRequest } from '../generated/operations.js';
import { GetOrderStateRequest, PostOrderRequest } from '../generated/orders.js';
import { OmitAccount } from './types.js';

export class RealAccount {
  constructor(public api: TinkoffInvestApi, public accountId: string) {}

  isSandbox() { return false; }

  async getInfo() {
    const { accounts } = await this.api.users.getAccounts({});
    return accounts.find(a => a.id === this.accountId);
  }

  async getPortfolio(currency: PortfolioRequest_CurrencyRequest = PortfolioRequest_CurrencyRequest.RUB) {
    return this.api.operations.getPortfolio({ accountId: this.accountId, currency });
  }

  async getOperations(request: OmitAccount<OperationsRequest>) {
    return this.api.operations.getOperations({ accountId: this.accountId, ...request });
  }

  async getPositions() {
    return this.api.operations.getPositions({ accountId: this.accountId });
  }

  async getOrders() {
    return this.api.orders.getOrders({ accountId: this.accountId });
  }

  async getOrderState(request: OmitAccount<GetOrderStateRequest>) {
    return this.api.orders.getOrderState({ accountId: this.accountId, ...request });
  }

  async postOrder(request: OmitAccount<PostOrderRequest>) {
    return this.api.orders.postOrder({ accountId: this.accountId, ...request });
  }

  async cancelOrder(orderId: string) {
    return this.api.orders.cancelOrder({ accountId: this.accountId, orderId });
  }
}
