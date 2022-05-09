/**
 * Эмуляция users.
 * See: https://tinkoff.github.io/investAPI/head-users/
 */
import { Client } from 'nice-grpc';
import {
  AccessLevel,
  Account,
  AccountStatus,
  AccountType,
  GetAccountsRequest,
  GetInfoRequest,
  GetMarginAttributesRequest,
  GetUserTariffRequest,
  UsersServiceDefinition
} from '../generated/users.js';
import { Backtest } from './index.js';

export class UsersStub implements Client<typeof UsersServiceDefinition> {
  private account: Account = {
    id: '0000000000',
    type: AccountType.ACCOUNT_TYPE_TINKOFF,
    name: 'Backtest account',
    status: AccountStatus.ACCOUNT_STATUS_OPEN,
    accessLevel: AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS,
    openedDate: new Date(),
  };

  constructor(private backtest: Backtest) { }

  async getAccounts(_: GetAccountsRequest) {
    return {
      accounts: [ this.account ],
    };
  }

  async getInfo(_: GetInfoRequest) {
    return {
      premStatus: false,
      qualStatus: false,
      qualifiedForWorkWith: [],
      tariff: 'investor',
    };
  }

  async getMarginAttributes(_: GetMarginAttributesRequest) {
    return {};
  }

  async getUserTariff(_: GetUserTariffRequest) {
    return {
      unaryLimits: [],
      streamLimits: [],
    };
  }
}
