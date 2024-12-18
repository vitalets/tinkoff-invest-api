/**
 * Счет в песочнице
 */
import { TinkoffInvestApi } from '../api.js';
import { OperationsRequest, PortfolioRequest_CurrencyRequest } from '../generated/operations.js';
import { GetOrderStateRequest, PostOrderRequest } from '../generated/orders.js';
import { SandboxPayInRequest } from '../generated/sandbox.js';
import { OmitAccount, CommonAccountMethods } from './types.js';

export class SandboxAccount implements CommonAccountMethods {
  constructor(public api: TinkoffInvestApi, public accountId: string) {}

  isSandbox(): this is SandboxAccount { return true; }

  async getInfo() {
    const { accounts } = await this.api.sandbox.getSandboxAccounts({});
    return accounts.find(a => a.id === this.accountId);
  }

  async getPortfolio(currency: PortfolioRequest_CurrencyRequest = PortfolioRequest_CurrencyRequest.RUB) {
    return this.api.sandbox.getSandboxPortfolio({ accountId: this.accountId, currency });
  }

  async getOperations(request: OmitAccount<OperationsRequest>) {
    return this.api.sandbox.getSandboxOperations({ accountId: this.accountId, ...request });
  }

  async getPositions() {
    return this.api.sandbox.getSandboxPositions({ accountId: this.accountId });
  }

  async getOrders() {
    return this.api.sandbox.getSandboxOrders({ accountId: this.accountId });
  }

  async getOrderState(request: OmitAccount<GetOrderStateRequest>) {
    return this.api.sandbox.getSandboxOrderState({ accountId: this.accountId, ...request });
  }

  async postOrder(request: OmitAccount<PostOrderRequest>) {
    return this.api.sandbox.postSandboxOrder({ accountId: this.accountId, ...request });
  }

  async cancelOrder(orderId: string) {
    return this.api.sandbox.cancelSandboxOrder({ accountId: this.accountId, orderId });
  }

  // own methods

  async open() {
    const res = await this.api.sandbox.openSandboxAccount({});
    this.accountId = res.accountId;
  }

  async close() {
    return this.api.sandbox.closeSandboxAccount({ accountId: this.accountId });
  }

  async payIn(amount: SandboxPayInRequest['amount']) {
    return this.api.sandbox.sandboxPayIn({ accountId: this.accountId, amount });
  }
}
