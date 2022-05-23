/**
 * Эмуляция работы апи для бэктеста.
 * - все операции с одним счетом
 * - рыночные заявки исполняются по цене закрытия
 * - лимитные заявки исполняются, если цена закрытия пересекает лимит
 */

import Debug from 'debug';
import { MarketDataStub } from './marketdata.js';
import { MarketDataStreamStub } from './marketdata-stream.js';
import { UsersStub } from './users.js';
import { OrdersStub, OrdersStreamStub } from './orders.js';
import { OperationsStub } from './operations.js';
import { SandboxStub } from './sandbox.js';
import { StopOrdersStub } from './stoporders.js';
import { Broker } from './broker.js';
import { TinkoffInvestApi } from '../api.js';
import { PublicOf } from '../utils/types.js';
import { Helpers } from '../helpers.js';
import { InstrumentsStub } from './instruments.js';
import { MarketStream } from '../stream/market.js';
import { TradesStream } from '../stream/trades.js';
import { CandleInterval } from '../generated/marketdata.js';

const debug = Debug('tinkoff-invest-api:backtest');

export interface BacktestOptions {
  /** Токен Тинькофф API. Используется для разовой загрузки данных. Можно readonly. */
  token: string;
  /** Стартовая дата бэктестинга */
  from: Date;
  /** Конечная дата бэктестинга */
  to: Date;
  /** Интервал свечей */
  candleInterval: CandleInterval,
  /** Начальный капитал */
  initialCapital?: number;
  /** Комиссия брокера, % от суммы сделки */
  brokerFee?: number;
  /** Директория для кеширования данных */
  cacheDir?: string,
}

const defaults: Required<Pick<BacktestOptions, 'initialCapital' | 'brokerFee' | 'cacheDir'>> = {
  initialCapital: 100_000,
  brokerFee: 0.3,
  cacheDir: '.cache',
};

export class Backtest {
  options: Required<BacktestOptions>;
  api: TinkoffInvestApi;
  apiReal: TinkoffInvestApi;

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
    const { from, to } = this.options;
    debug(`Создан инстанс бэктеста на свечах: ${from.toLocaleString()} - ${to.toLocaleString()}`);
    this.assertOptionsFromTo();
    this.apiReal = this.createApiReal();
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
    this.api = this.createApiStub();
  }

  /**
   * Переход к следующей исторической свече.
   */
  async tick() {
    const success = this.marketdata.tick();
    if (success) {
      await this.broker.tryExecuteOrders();
      await this.marketdataStream.emitData();
    }
    return success;
  }

  /**
   * Сброс в исходное состояние.
   */
  reset() {
    // this.marketdata.reset();
  }

  private createApiStub() {
    let stream: TinkoffInvestApi['stream'];
    // Забираем публичную часть TinkoffInvestApi (https://github.com/microsoft/TypeScript/issues/471)
    const api: PublicOf<TinkoffInvestApi> = {
      options: { token: '', appName: 'backtest', endpoint: '' },
      isBacktest: true,
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

  private createApiReal() {
    return new TinkoffInvestApi({ token: this.options.token });
  }

  private assertOptionsFromTo() {
    if (this.options.from > this.options.to) {
      throw new Error(`from должно быть меньше чем to`);
    }
  }
}
