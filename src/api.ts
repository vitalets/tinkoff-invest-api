/**
 * Tinkoff Invest API.
 */
import {
  createChannel,
  createClientFactory,
  Client,
  Channel,
  Metadata,
  ChannelCredentials,
  ChannelOptions
} from 'nice-grpc';
import { errorMiddleware, TinkoffApiError } from './api-error.js';
import { Helpers } from './helpers.js';
import { MarketStream } from './stream/market.js';
import { InstrumentsServiceDefinition } from './generated/instruments.js';
import { MarketDataServiceDefinition, MarketDataStreamServiceDefinition } from './generated/marketdata.js';
import { OperationsServiceDefinition } from './generated/operations.js';
import { OrdersServiceDefinition, OrdersStreamServiceDefinition } from './generated/orders.js';
import { SandboxServiceDefinition } from './generated/sandbox.js';
import { StopOrdersServiceDefinition } from './generated/stoporders.js';
import { UsersServiceDefinition } from './generated/users.js';
import { TradesStream } from './stream/trades.js';

export { TinkoffApiError };

export interface TinkoffInvestApiOptions {
  /** Токен доступа */
  token: string;
  /** Имя приложения */
  appName?: string;
  /** API endpoint */
  endpoint?: string;
  /** Channel options */
  channelOptions?: ChannelOptions;
}

const defaults: Required<Pick<TinkoffInvestApiOptions, 'appName' | 'endpoint' | 'channelOptions' >> = {
  endpoint: 'invest-public-api.tinkoff.ru:443',
  appName: '',
  // See: https://github.com/vitalets/tinkoff-invest-api/issues/23
  channelOptions: {
    'grpc.max_receive_message_length': 1024 * 1024 * 100,
    'grpc.max_send_message_length': 1024 * 1024 * 100,
  }
};

type ServiceDefinition = typeof InstrumentsServiceDefinition
  | typeof MarketDataServiceDefinition
  | typeof MarketDataStreamServiceDefinition
  | typeof OperationsServiceDefinition
  | typeof OrdersServiceDefinition
  | typeof OrdersStreamServiceDefinition
  | typeof SandboxServiceDefinition
  | typeof StopOrdersServiceDefinition
  | typeof UsersServiceDefinition;

export class TinkoffInvestApi {
  options: TinkoffInvestApiOptions & typeof defaults;
  protected channel: Channel;
  protected metadata: Metadata;
  protected clients: Map<ServiceDefinition, Client<ServiceDefinition>> = new Map();
  protected streamClients?: { market: MarketStream, trades: TradesStream };

  constructor(options: TinkoffInvestApiOptions) {
    this.options = Object.assign({}, defaults, options);
    this.channel = this.createChannel();
    this.metadata = this.createDefaultMetadata();
  }

  helpers = Helpers;
  get instruments() { return this.getOrCreateClient(InstrumentsServiceDefinition); }
  get marketdata() { return this.getOrCreateClient(MarketDataServiceDefinition); }
  get marketdataStream() { return this.getOrCreateClient(MarketDataStreamServiceDefinition); }
  get operations() { return this.getOrCreateClient(OperationsServiceDefinition); }
  get orders() { return this.getOrCreateClient(OrdersServiceDefinition); }
  get ordersStream() { return this.getOrCreateClient(OrdersStreamServiceDefinition); }
  get sandbox() { return this.getOrCreateClient(SandboxServiceDefinition); }
  get stoporders() { return this.getOrCreateClient(StopOrdersServiceDefinition); }
  get users() { return this.getOrCreateClient(UsersServiceDefinition); }
  get stream() { return this.getOrCreateStream(); }

  isBacktest = false;

  private createChannel() {
    const { endpoint, channelOptions } = this.options;
    const credentials = /^localhost/i.test(endpoint)
      ? ChannelCredentials.createInsecure()
      : ChannelCredentials.createSsl();
    return createChannel(endpoint, credentials, channelOptions);
  }

  private getOrCreateClient<T extends ServiceDefinition>(service: T) {
    let client = this.clients.get(service) as Client<T>;
    if (!client) {
      const defaultCallOptions = { '*': { metadata: this.metadata } };
      client = createClientFactory().use(errorMiddleware).create(service, this.channel, defaultCallOptions);
      this.clients.set(service, client as Client<ServiceDefinition>);
    }
    return client as Client<T>;
  }

  private getOrCreateStream() {
    if (!this.streamClients) {
      this.streamClients = {
        market: new MarketStream(this),
        trades: new TradesStream(this),
      };
    }
    return this.streamClients;
  }

  private createDefaultMetadata() {
    return new Metadata({
      'Authorization': `Bearer ${this.options.token}`,
      'x-app-name': this.options.appName,
    });
  }
}
