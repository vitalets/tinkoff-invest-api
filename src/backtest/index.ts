/**
 * Эмуляция работы апи для бэктеста.
 * - все операции с одним счетом
 * - рыночные заявки исполняются по цене закрытия
 * - лимитные заявки исполняются, если цена закрытия пересекает лимит
 */

import { MarketDataStub, MarketDataStreamStub } from './marketdata.js';
import { UsersStub } from './users.js';
import { OrdersStub, OrdersStreamStub } from './orders.js';
import { OperationsStub } from './operations.js';
import { SandboxStub } from './sandbox.js';
import { StopOrdersStub } from './stoporders.js';
import { Broker } from './broker.js';
import { TinkoffInvestApi } from '../api.js';
import { OptionalKeys, PublicOf } from '../utils/types.js';
import { Helpers } from '../helpers.js';
import { InstrumentsStub, InstrumentsConfig } from './instruments.js';
import { MarketStream } from '../stream/market.js';
import { TradesStream } from '../stream/trades.js';

export interface BacktestOptions {
  /** Свечи: путь к файлу */
  candles: string;
  /** Массив путей к файлам с инструментами (акции, облигации, итд) */
  instruments: InstrumentsConfig;
  /** Стартовый индекс для свечей */
  initialCandleIndex?: number;
  /** Начальный капитал */
  initialCapital?: number;
   /** Валюта */
  currency?: string;
  /** Комиссия брокера, % от суммы сделки */
  brokerFee?: number;
}

const defaults: Required<Pick<BacktestOptions, OptionalKeys<BacktestOptions>>> = {
  initialCandleIndex: 0,
  initialCapital: 100_000,
  currency: 'rub',
  brokerFee: 0.3,
};

export class Backtest {
  options: Required<BacktestOptions>;
  api: TinkoffInvestApi;

  marketdata: MarketDataStub;
  marketdataStream: MarketDataStreamStub;
  instruments: InstrumentsStub;
  users: UsersStub;
  orders: OrdersStub;
  ordersStream: OrdersStreamStub;
  stoporders: StopOrdersStub;
  operations: OperationsStub;
  sandbox: SandboxStub;
  broker: Broker;

  // eslint-disable-next-line max-statements
  constructor(options: BacktestOptions) {
    this.options = Object.assign({}, defaults, options);
    this.marketdata = new MarketDataStub(this);
    this.marketdataStream = new MarketDataStreamStub(this);
    this.instruments = new InstrumentsStub(this);
    this.users = new UsersStub(this);
    this.orders = new OrdersStub(this);
    this.ordersStream = new OrdersStreamStub(this);
    this.stoporders = new StopOrdersStub(this);
    this.operations = new OperationsStub(this);
    this.sandbox = new SandboxStub(this);
    this.broker = new Broker(this);
    this.api = this.createApi();
  }

  async tick() {
    const success = this.marketdata.addCandle(); // or marketDataStream.emit(nextCandle)
    if (success) await this.broker.tryExecuteOrders();
    return success;
  }

  private createApi() {
    let stream: TinkoffInvestApi['stream'];
    // Забираем публичную часть TinkoffInvestApi (https://github.com/microsoft/TypeScript/issues/471)
    const api: PublicOf<TinkoffInvestApi> = {
      helpers: Helpers,
      marketdata: this.marketdata,
      marketdataStream: this.marketdataStream,
      instruments: this.instruments as unknown as TinkoffInvestApi['instruments'],
      users: this.users,
      orders: this.orders,
      ordersStream: this.ordersStream,
      stoporders: this.stoporders as unknown as TinkoffInvestApi['stoporders'],
      operations: this.operations,
      sandbox: this.sandbox,
      get stream() {
        if (!stream) stream = {
          market: new MarketStream(api as TinkoffInvestApi),
          trades: new TradesStream(api as TinkoffInvestApi),
        };
        return stream;
      }
    };
    return api as TinkoffInvestApi;
  }
}
