/**
 * Tinkoff Invest API.
 */
import { createChannel, createClientFactory, Client, Channel } from 'nice-grpc';
import { createGrpcCredentials } from './utils/grpc.js';
import { errorMiddleware } from './api-error.js';
import { Helpers } from './helpers.js';
import { InstrumentsServiceDefinition } from './generated/instruments.js';
import { MarketDataServiceDefinition, MarketDataStreamServiceDefinition } from './generated/marketdata.js';
import { OperationsServiceDefinition } from './generated/operations.js';
import { OrdersServiceDefinition } from './generated/orders.js';
import { SandboxServiceDefinition } from './generated/sandbox.js';
import { StopOrdersServiceDefinition } from './generated/stoporders.js';
import { UsersServiceDefinition } from './generated/users.js';

const TINKOFF_API_URL = 'invest-public-api.tinkoff.ru:443';

type ServiceDefinition = typeof InstrumentsServiceDefinition
  | typeof MarketDataServiceDefinition
  | typeof MarketDataStreamServiceDefinition
  | typeof OperationsServiceDefinition
  | typeof OrdersServiceDefinition
  | typeof SandboxServiceDefinition
  | typeof StopOrdersServiceDefinition
  | typeof UsersServiceDefinition;

export interface TinkoffInvestApiOptions {
  token: string;
  appName?: string;
}

export class TinkoffInvestApi {
  protected channel: Channel;
  protected clients: Map<ServiceDefinition, Client<ServiceDefinition>> = new Map();

  constructor(protected options: TinkoffInvestApiOptions) {
    this.channel = this.createChannel();
  }

  helpers = Helpers;
  get instruments() { return this.getOrCreateClient(InstrumentsServiceDefinition); }
  get marketdata() { return this.getOrCreateClient(MarketDataServiceDefinition); }
  get marketdataStream() { return this.getOrCreateClient(MarketDataStreamServiceDefinition); }
  get operations() { return this.getOrCreateClient(OperationsServiceDefinition); }
  get orders() { return this.getOrCreateClient(OrdersServiceDefinition); }
  get sandbox() { return this.getOrCreateClient(SandboxServiceDefinition); }
  get stoporders() { return this.getOrCreateClient(StopOrdersServiceDefinition); }
  get users() { return this.getOrCreateClient(UsersServiceDefinition); }

  private createChannel() {
    const credentials = createGrpcCredentials({
      'Authorization': `Bearer ${this.options.token}`,
      'x-app-name': this.options.appName,
    });
    return createChannel(TINKOFF_API_URL, credentials);
  }

  private getOrCreateClient<T extends ServiceDefinition>(service: T) {
    let client = this.clients.get(service)!;
    if (!client) {
      client = createClientFactory().use(errorMiddleware).create(service, this.channel);
      this.clients.set(service, client);
    }
    return client as Client<T>;
  }
}
