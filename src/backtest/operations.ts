/**
 * Эмуляция operations.
 * See: https://tinkoff.github.io/investAPI/head-operations/
 */
import { Client } from 'nice-grpc';
import {
  BrokerReportRequest,
  GetDividendsForeignIssuerRequest,
  Operation,
  OperationsRequest,
  OperationsServiceDefinition,
  OperationState,
  PortfolioPosition,
  PortfolioRequest,
  PositionsRequest,
  PositionsSecurities,
  WithdrawLimitsRequest
} from '../generated/operations.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class OperationsStub implements Client<typeof OperationsServiceDefinition> {
  private balance = this.backtest.options.initialCapital;
  private positions: PortfolioPosition[] = [];
  private operations: Operation[] = [];

  constructor(private backtest: Backtest) { }

  async getPortfolio(_: PortfolioRequest) {
    return {
      totalAmountCurrencies: Helpers.toMoneyValue(this.balance, 'rub'),
      totalAmountShares: Helpers.toMoneyValue(0, 'rub'),
      totalAmountBonds: Helpers.toMoneyValue(0, 'rub'),
      totalAmountEtf: Helpers.toMoneyValue(0, 'rub'),
      totalAmountFutures: Helpers.toMoneyValue(0, 'rub'),
      expectedYield: Helpers.toQuotation(0),
      positions: this.positions,
    };
  }

  async getPositions(_: PositionsRequest) {
    const securities: PositionsSecurities[] = this.positions.map(({ figi, quantity }) => {
      const balance = Helpers.toNumber(quantity) || 0;
      return { figi, balance, blocked: 0 };
    });
    const money = [ Helpers.toMoneyValue(this.balance, 'rub') ];
    return {
      securities,
      money,
      blocked: [],
      futures: [],
      limitsLoadingInProgress: false,
    };
  }

  async getOperations({ figi, state }: OperationsRequest) {
    const operations = this.operations.filter(o => o.figi === figi && o.state === state);
    return { operations };
  }

  async getWithdrawLimits(_: WithdrawLimitsRequest) {
    return {
      money: [],
      blocked: [],
      blockedGuarantee: [],
    };
  }

  async getBrokerReport(_: BrokerReportRequest) {
    return {};
  }

  async getDividendsForeignIssuer(_: GetDividendsForeignIssuerRequest) {
    return {};
  }

  addOperations(operations: Operation[]) {
    operations.forEach(operation => {
      this.operations.push(operation);
      this.balance += Helpers.toNumber(operation.payment!);
      if (operation.quantity) this.updatePosition(operation.figi);
    });
  }

  getPosition(figi: string) {
    return this.positions.find(p => p.figi === figi);
  }

  getBalance() {
    return this.balance;
  }

  private updatePosition(figi: string) {
    const operations = this.operations
      .filter(o => o.figi === figi && o.state === OperationState.OPERATION_STATE_EXECUTED && o.quantity > 0);
    const position = this.backtest.broker.calcPosition(operations);
    const curIndex = this.positions.findIndex(p => p.figi === figi);
    if (curIndex >= 0) {
      this.positions[curIndex] = position;
    } else {
      this.positions.push(position);
    }
  }
}
