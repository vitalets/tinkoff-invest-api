/**
 * Классы реального счета или в песочнице с универсальным интерфейсом.
 */
import { TinkoffInvestApi } from './api.js';
import { OperationsRequest } from './generated/operations.js';
import { PostOrderRequest } from './generated/orders.js';
import { SandboxPayInRequest } from './generated/sandbox.js';

export type Account = RealAccount | SandboxAccount;

type AccountCommonMethods = Pick<RealAccount,
  'accountId'
  | 'isSandbox'
  | 'getPortfolio'
  | 'getOperations'
  | 'getPositions'
  | 'getOrders'
  | 'getOrderState'
  | 'postOrder'
  | 'cancelOrder'
 >;

export class RealAccount {
  constructor(protected api: TinkoffInvestApi, public accountId: string) {}

  isSandbox() { return false; }

  async getPortfolio() {
    return this.api.operations.getPortfolio({ accountId: this.accountId });
  }

  async getOperations(request: Omit<OperationsRequest, 'accountId'>) {
    return this.api.operations.getOperations({ accountId: this.accountId, ...request });
  }

  async getPositions() {
    return this.api.operations.getPositions({ accountId: this.accountId });
  }

  async getOrders() {
    return this.api.orders.getOrders({ accountId: this.accountId });
  }

  async getOrderState(orderId: string) {
    return this.api.orders.getOrderState({ accountId: this.accountId, orderId });
  }

  async postOrder(request: Omit<PostOrderRequest, 'accountId'>) {
    return this.api.orders.postOrder({ accountId: this.accountId, ...request });
  }

  async cancelOrder(orderId: string) {
    return this.api.orders.cancelOrder({ accountId: this.accountId, orderId });
  }
}

export class SandboxAccount implements AccountCommonMethods {
  constructor(protected api: TinkoffInvestApi, public accountId: string) {}

  isSandbox(): this is SandboxAccount { return true; }

  async getPortfolio() {
    return this.api.sandbox.getSandboxPortfolio({ accountId: this.accountId });
  }

  async getOperations(request: Omit<OperationsRequest, 'accountId'>) {
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

  async postOrder(request: Omit<PostOrderRequest, 'accountId'>) {
    return this.api.sandbox.postSandboxOrder({ accountId: this.accountId, ...request });
  }

  async cancelOrder(orderId: string) {
    return this.api.sandbox.cancelSandboxOrder({ accountId: this.accountId, orderId });
  }

  // own methods

  async init() {
    if (this.accountId) throw new Error(`Sandbox account already has id`);
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
