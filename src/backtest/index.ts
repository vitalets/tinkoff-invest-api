/**
 * Эмуляция работы апи для бэктеста.
 * - все операции с одним счетом
 * - рыночные заявки исполняются по цене закрытия
 * - лимитные заявки исполняются, если цена закрытия пересекает лимит
 */

import { MarketDataStub, MarketDataStreamStub } from './marketdata.js';
import { UsersStub } from './users.js';
import { OrdersStub } from './orders.js';
import { OperationsStub } from './operations.js';
import { SandboxStub } from './sandbox.js';
import { Broker } from './broker.js';
import { TinkoffInvestApi } from '../api.js';
import { OptionalKeys, PublicOf } from '../utils/types.js';
import { Helpers } from '../helpers.js';

export interface BacktestOptions {
  candlesFile: string;
  /** Смещение индекса свечей */
  offset?: number;
  initialCapital?: number;
  currency?: string;
  /** Комиссия брокера, % от суммы сделки */
  brokerFee?: number;
}

const defaults: Required<Pick<BacktestOptions, OptionalKeys<BacktestOptions>>> = {
  offset: 0,
  initialCapital: 100_000,
  currency: 'rub',
  brokerFee: 0.3,
};

// see: https://github.com/microsoft/TypeScript/issues/471
type TinkoffInvestApiPublic = PublicOf<Omit<TinkoffInvestApi,
  'instruments'
  | 'stream'
  | 'stoporders'
>>

export class Backtest {
  options: Required<BacktestOptions>;
  api: TinkoffInvestApi;
  marketdata: MarketDataStub;
  marketdataStream: MarketDataStreamStub;
  users: UsersStub;
  orders: OrdersStub;
  operations: OperationsStub;
  sandbox: SandboxStub;
  broker: Broker;

  constructor(options: BacktestOptions) {
    this.options = Object.assign({}, defaults, options);
    this.marketdata = new MarketDataStub(this);
    this.marketdataStream = new MarketDataStreamStub(this);
    this.users = new UsersStub(this);
    this.orders = new OrdersStub(this);
    this.operations = new OperationsStub(this);
    this.sandbox = new SandboxStub(this);
    this.broker = new Broker(this);
    this.api = this.createApi();
  }

  tick() {
    const success = this.marketdata.addCandle();
    if (success) this.broker.tryExecuteOrders();
    return success;
  }

  private createApi() {
    const { marketdata, marketdataStream, users, orders, operations, sandbox } = this;
    const api: TinkoffInvestApiPublic = {
      helpers: Helpers,
      marketdata,
      marketdataStream,
      users,
      orders,
      operations,
      sandbox
    };
    return api as TinkoffInvestApi;
  }
}
