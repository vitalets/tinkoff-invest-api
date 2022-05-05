import { OperationsRequest } from '../generated/operations.js';
import { PostOrderRequest } from '../generated/orders.js';
import { SandboxPayInRequest } from '../generated/sandbox.js';
import { BaseAccount, OmitAccount } from './base.js';
import { RealAccount } from './real.js';

export type AccountCommonMethods = Pick<RealAccount,
'accountId'
| 'api'
| 'isSandbox'
| 'getInfo'
| 'getPortfolio'
| 'getOperations'
| 'getPositions'
| 'getOrders'
| 'getOrderState'
| 'postOrder'
| 'cancelOrder'
>;

export class SandboxAccount extends BaseAccount implements AccountCommonMethods {
  isSandbox(): this is SandboxAccount { return true; }

  async getInfo() {
    const { accounts } = await this.api.sandbox.getSandboxAccounts({});
    return accounts.find(a => a.id === this.accountId);
  }

  async getPortfolio() {
    return this.api.sandbox.getSandboxPortfolio({ accountId: this.accountId });
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

  async getOrderState(orderId: string) {
    return this.api.sandbox.getSandboxOrderState({ accountId: this.accountId, orderId });
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
