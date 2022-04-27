/**
 * Tinkoff Invest API.
 */
import { createChannel, createClient, Client, Channel } from 'nice-grpc';
import { createCredentialsWithToken } from './credentials.js';
import { InstrumentsServiceDefinition } from './generated/instruments.js';
import { MarketDataServiceDefinition } from './generated/marketdata.js';
import { OperationsServiceDefinition } from './generated/operations.js';
import { OrdersServiceDefinition } from './generated/orders.js';
import { SandboxServiceDefinition } from './generated/sandbox.js';
import { StopOrdersServiceDefinition } from './generated/stoporders.js';
import { UsersServiceDefinition } from './generated/users.js';

const TINKOFF_API_URL = 'invest-public-api.tinkoff.ru:443';

type Service = typeof InstrumentsServiceDefinition
  | typeof MarketDataServiceDefinition
  | typeof OperationsServiceDefinition
  | typeof OrdersServiceDefinition
  | typeof SandboxServiceDefinition
  | typeof StopOrdersServiceDefinition
  | typeof UsersServiceDefinition;

export interface TinkoffInvestApiOptions {
  token: string;
}

export class TinkoffInvestApi {
  protected channel: Channel;
  protected clients: Map<Service, Client<Service>> = new Map();

  constructor(protected options: TinkoffInvestApiOptions) {
    this.channel = this.createChannel();
  }

  get instruments() { return this.getOrCreateClient(InstrumentsServiceDefinition); }
  get marketdata() { return this.getOrCreateClient(MarketDataServiceDefinition); }
  get operations() { return this.getOrCreateClient(OperationsServiceDefinition); }
  get orders() { return this.getOrCreateClient(OrdersServiceDefinition); }
  get sandbox() { return this.getOrCreateClient(SandboxServiceDefinition); }
  get stoporders() { return this.getOrCreateClient(StopOrdersServiceDefinition); }
  get users() { return this.getOrCreateClient(UsersServiceDefinition); }

  private createChannel() {
    const credentials = createCredentialsWithToken(this.options.token);
    return createChannel(TINKOFF_API_URL, credentials);
  }

  private getOrCreateClient<T extends Service>(service: T) {
    let client = this.clients.get(service) as Client<T>;
    if (!client) {
      client = createClient(service, this.channel);
      this.clients.set(service, client);
    }
    return client;
  }
}
