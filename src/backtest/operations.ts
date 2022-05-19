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
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
  WithdrawLimitsRequest
} from '../generated/operations.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class OperationsStub implements Client<typeof OperationsServiceDefinition> {
  private portfolioPositions: PortfolioPosition[] = [];
  private positionsResponse: PositionsResponse = {
    money: [],
    blocked: [],
    securities: [],
    futures: [],
    limitsLoadingInProgress: false,
  };
  private operations: Operation[] = [];

  constructor(private backtest: Backtest) {
    this.addToBalance(this.backtest.options.initialCapital, 'money');
  }

  async getPortfolio(_: PortfolioRequest) {
    await this.updatePositionsCurrentPrice();
    // иностранная валюта пока не поддержана, считаем только рубли
    const totalAmountCurrencies = this.positionsResponse.money.find(item => item.currency === 'rub');
    const portfolio: PortfolioResponse = {
      totalAmountCurrencies: totalAmountCurrencies || Helpers.toMoneyValue(0, 'rub'),
      totalAmountShares: Helpers.toMoneyValue(this.calcTotalAmount('share'), 'rub'),
      totalAmountBonds: Helpers.toMoneyValue(this.calcTotalAmount('bond'), 'rub'),
      totalAmountEtf: Helpers.toMoneyValue(this.calcTotalAmount('etf'), 'rub'),
      totalAmountFutures: Helpers.toMoneyValue(this.calcTotalAmount('future'), 'rub'),
      expectedYield: Helpers.toQuotation(0),
      positions: this.portfolioPositions,
    };
    portfolio.expectedYield = Helpers.toQuotation(this.calcExpectedYield(portfolio));
    return portfolio;
  }

  async getPositions(_: PositionsRequest) {
    return this.positionsResponse;
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
    this.operations.push(...operations);
  }

  replacePortfolioPosition(position: PortfolioPosition) {
    const curIndex = this.portfolioPositions.findIndex(p => p.figi === position.figi);
    curIndex >= 0
      ? this.portfolioPositions[curIndex] = position
      : this.portfolioPositions.push(position);
  }

  /**
   * Блокируем (разблокируем) деньги в балансе (positionsResponse)
   */
  blockMoney(amount: number) {
    this.addToBalance(-amount, 'money');
    this.addToBalance(amount, 'blocked');
  }

  /**
   * Блокируем (разблокируем) штуки инстумента (positionsResponse)
   */
  blockFigi(figi: string, qty: number) {
    this.addToFigi(figi, -qty, 'balance');
    this.addToFigi(figi, qty, 'blocked');
  }

  private async updatePositionsCurrentPrice() {
    const figi = this.portfolioPositions.map(p => p.figi);
    const { lastPrices } = await this.backtest.marketdata.getLastPrices({ figi });
    this.portfolioPositions.forEach(p => {
      const { price } = lastPrices.find(lp => lp.figi === p.figi) || {};
      p.currentPrice = Helpers.toMoneyValue(Helpers.toNumber(price) || 0, 'rub');
    });
  }

  private calcTotalAmount(instrumentType: string) {
    return this.portfolioPositions
      .filter(position => position.instrumentType === instrumentType)
      .reduce((acc, position) => {
        const price = Helpers.toNumber(position.currentPrice) || 0;
        const quantity = Helpers.toNumber(position.quantity) || 0;
        return acc + price * quantity;
      }, 0);
  }

  private calcExpectedYield(portfolio: PortfolioResponse) {
    const amounts = [
      portfolio.totalAmountCurrencies,
      portfolio.totalAmountBonds,
      portfolio.totalAmountEtf,
      portfolio.totalAmountFutures,
      portfolio.totalAmountShares,
    ].map(amount => Helpers.toNumber(amount) || 0);
    const currentCapital = amounts.reduce((acc, amount) => acc + amount, 0);
    const { initialCapital } = this.backtest.options;
    return 100 * (currentCapital - initialCapital) / initialCapital;
  }

  /**
   * Добавляем (вычитаем) штуки инстумента в positionsResponse
   */
   addToFigi(figi: string, qty: number, type: 'balance' | 'blocked') {
    const { securities } = this.positionsResponse;
    let index = securities.findIndex(item => item.figi === figi);
    if (index === -1) {
      securities.push({ figi, balance: 0, blocked: 0 });
      index = securities.length - 1;
    }
    const value = securities[index][type];
    const newValue = value + qty;
    if (newValue < 0) throw new Error(`Отрицательный баланс инструмента ${figi}: ${newValue}`);
    securities[index][type] = newValue;
  }

  /**
   * Добавляем (вычитаем) деньги в positionsResponse
   */
  addToBalance(amount: number, type: 'money' | 'blocked') {
    let index = this.positionsResponse[type].findIndex(item => item.currency === 'rub');
    if (index === -1) {
      this.positionsResponse[type].push({ units: 0, nano: 0, currency: 'rub' });
      index = this.positionsResponse[type].length - 1;
    }
    const value = Helpers.toNumber(this.positionsResponse[type][index]);
    const newValue = value + amount;
    if (newValue < 0) throw new Error(`Отрицательный баланс (${type}): ${newValue}`);
    if (newValue === 0) {
      this.positionsResponse[type].splice(index, 1);
    } else {
      this.positionsResponse[type][index] = Helpers.toMoneyValue(newValue, 'rub');
    }
  }
}
