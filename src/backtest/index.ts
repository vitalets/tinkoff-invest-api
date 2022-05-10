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
import { InstrumentsStub, InstrumentsConfig } from './instruments.js';

export interface BacktestOptions {
  /** Свечи: путь к файлу */
  candles: string;
  /** Массив путей к файлам с инструментами (акции, облигации, итд) */
  instruments: InstrumentsConfig;
  /** Смещение стартового индекса свечей */
  offset?: number;
  /** Начальный капитал */
  initialCapital?: number;
   /** Валюта */
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

// Забираем публичную часть TinkoffInvestApi (исключая то, что еще не реализовано в backtest)
// see: https://github.com/microsoft/TypeScript/issues/471
type TinkoffInvestApiPublic = PublicOf<Omit<TinkoffInvestApi, 'stream' | 'stoporders'>>

export class Backtest {
  options: Required<BacktestOptions>;
  api: TinkoffInvestApi;
  marketdata: MarketDataStub;
  marketdataStream: MarketDataStreamStub;
  instruments: InstrumentsStub;
  users: UsersStub;
  orders: OrdersStub;
  operations: OperationsStub;
  sandbox: SandboxStub;
  broker: Broker;

  constructor(options: BacktestOptions) {
    this.options = Object.assign({}, defaults, options);
    this.marketdata = new MarketDataStub(this);
    this.marketdataStream = new MarketDataStreamStub(this);
    this.instruments = new InstrumentsStub(this);
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
    const api: TinkoffInvestApiPublic = {
      helpers: Helpers,
      marketdata: this.marketdata,
      marketdataStream: this.marketdataStream,
      instruments: this.instruments as unknown as TinkoffInvestApi['instruments'],
      users: this.users,
      orders: this.orders,
      operations: this.operations,
      sandbox: this.sandbox,
    };
    return api as TinkoffInvestApi;
  }
}
