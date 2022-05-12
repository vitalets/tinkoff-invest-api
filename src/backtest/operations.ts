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
    this.updatePositionsCurrentPrice();
    const totalAmountCurrencies = this.balance + this.calcTotalAmount('currency');
    return {
      totalAmountCurrencies: Helpers.toMoneyValue(totalAmountCurrencies, 'rub'),
      totalAmountShares: Helpers.toMoneyValue(this.calcTotalAmount('share'), 'rub'),
      totalAmountBonds: Helpers.toMoneyValue(this.calcTotalAmount('bond'), 'rub'),
      totalAmountEtf: Helpers.toMoneyValue(this.calcTotalAmount('etf'), 'rub'),
      totalAmountFutures: Helpers.toMoneyValue(this.calcTotalAmount('future'), 'rub'),
      expectedYield: Helpers.toQuotation(0), // todo
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

  pushOperations(operations: Operation[]) {
    operations.forEach(operation => {
      this.operations.push(operation);
      this.balance += Helpers.toNumber(operation.payment) || 0;
    });
    return this.operations;
  }

  pushPosition(position: PortfolioPosition) {
    const curIndex = this.positions.findIndex(p => p.figi === position.figi);
    curIndex >= 0
      ? this.positions[curIndex] = position
      : this.positions.push(position);
  }

  getBalance() {
    return this.balance;
  }

  private updatePositionsCurrentPrice() {
    // пока для простоты всем позициям выставляем единую цену от текущей свечи,
    // т.к. запуск бэктеста предполагается на одном инструменте
    const currentPrice = Helpers.toNumber(this.backtest.marketdata.currentCandle.close) || 0;
    this.positions.forEach(position => {
      position.currentPrice = Helpers.toMoneyValue(currentPrice, 'rub');
    });
  }

  private calcTotalAmount(instrumentType: string) {
    return this.positions
      .filter(position => position.instrumentType === instrumentType)
      .reduce((acc, position) => {
        const price = Helpers.toNumber(position.currentPrice) || 0;
        const quantity = Helpers.toNumber(position.quantity) || 0;
        return acc + price * quantity;
      }, 0);
  }
}
