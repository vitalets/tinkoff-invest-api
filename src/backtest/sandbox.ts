/**
 * Эмуляция sandbox.
 * See: https://tinkoff.github.io/investAPI/head-sandbox/
 */
import { Client } from 'nice-grpc';
import {
  CloseSandboxAccountRequest,
  OpenSandboxAccountRequest,
  SandboxPayInRequest,
  SandboxServiceDefinition
} from '../generated/sandbox.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class SandboxStub implements Client<typeof SandboxServiceDefinition> {
  constructor(private backtest: Backtest) { }

  async getSandboxAccounts(_: Parameters<Backtest['api']['users']['getAccounts']>[0]) {
    return this.backtest.users.getAccounts(_);
  }

  async getSandboxPortfolio(_: Parameters<Backtest['api']['operations']['getPortfolio']>[0]) {
    return this.backtest.operations.getPortfolio(_);
  }

  async getSandboxOperations(_: Parameters<Backtest['api']['operations']['getOperations']>[0]) {
    return this.backtest.operations.getOperations(_);
  }

  async getSandboxPositions(_: Parameters<Backtest['api']['operations']['getPositions']>[0]) {
    return this.backtest.operations.getPositions(_);
  }

  async postSandboxOrder(_: Parameters<Backtest['api']['orders']['postOrder']>[0]) {
    return this.backtest.orders.postOrder(_);
  }

  async cancelSandboxOrder(_: Parameters<Backtest['api']['orders']['cancelOrder']>[0]) {
    return this.backtest.orders.cancelOrder(_);
  }

  async getSandboxOrders(_: Parameters<Backtest['api']['orders']['getOrders']>[0]) {
    return this.backtest.orders.getOrders(_);
  }

  async getSandboxOrderState(_: Parameters<Backtest['api']['orders']['getOrderState']>[0]) {
    return this.backtest.orders.getOrderState(_);
  }

  async openSandboxAccount(_: OpenSandboxAccountRequest) {
    const { accounts } = await this.getSandboxAccounts({});
    return {
      accountId: accounts[0].id
    };
  }

  async closeSandboxAccount(_: CloseSandboxAccountRequest) {
    return {};
  }

  async sandboxPayIn(_: SandboxPayInRequest) {
    return {
      balance: Helpers.toMoneyValue(0, 'rub'),
    };
  }
}
