/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue, Quotation } from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип счeта. */
export enum AccountType {
  /** ACCOUNT_TYPE_UNSPECIFIED - Тип аккаунта не определeн. */
  ACCOUNT_TYPE_UNSPECIFIED = 0,
  /** ACCOUNT_TYPE_TINKOFF - Брокерский счeт Т-Инвестиций. */
  ACCOUNT_TYPE_TINKOFF = 1,
  /** ACCOUNT_TYPE_TINKOFF_IIS - ИИС. */
  ACCOUNT_TYPE_TINKOFF_IIS = 2,
  /** ACCOUNT_TYPE_INVEST_BOX - Инвесткопилка. */
  ACCOUNT_TYPE_INVEST_BOX = 3,
  /** ACCOUNT_TYPE_INVEST_FUND - Фонд денежного рынка. */
  ACCOUNT_TYPE_INVEST_FUND = 4,
  /** ACCOUNT_TYPE_DEBIT - Дебетовый карточный счeт. */
  ACCOUNT_TYPE_DEBIT = 5,
  /** ACCOUNT_TYPE_SAVING - Накопительный счeт. */
  ACCOUNT_TYPE_SAVING = 6,
  UNRECOGNIZED = -1,
}

export function accountTypeFromJSON(object: any): AccountType {
  switch (object) {
    case 0:
    case "ACCOUNT_TYPE_UNSPECIFIED":
      return AccountType.ACCOUNT_TYPE_UNSPECIFIED;
    case 1:
    case "ACCOUNT_TYPE_TINKOFF":
      return AccountType.ACCOUNT_TYPE_TINKOFF;
    case 2:
    case "ACCOUNT_TYPE_TINKOFF_IIS":
      return AccountType.ACCOUNT_TYPE_TINKOFF_IIS;
    case 3:
    case "ACCOUNT_TYPE_INVEST_BOX":
      return AccountType.ACCOUNT_TYPE_INVEST_BOX;
    case 4:
    case "ACCOUNT_TYPE_INVEST_FUND":
      return AccountType.ACCOUNT_TYPE_INVEST_FUND;
    case 5:
    case "ACCOUNT_TYPE_DEBIT":
      return AccountType.ACCOUNT_TYPE_DEBIT;
    case 6:
    case "ACCOUNT_TYPE_SAVING":
      return AccountType.ACCOUNT_TYPE_SAVING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountType.UNRECOGNIZED;
  }
}

export function accountTypeToJSON(object: AccountType): string {
  switch (object) {
    case AccountType.ACCOUNT_TYPE_UNSPECIFIED:
      return "ACCOUNT_TYPE_UNSPECIFIED";
    case AccountType.ACCOUNT_TYPE_TINKOFF:
      return "ACCOUNT_TYPE_TINKOFF";
    case AccountType.ACCOUNT_TYPE_TINKOFF_IIS:
      return "ACCOUNT_TYPE_TINKOFF_IIS";
    case AccountType.ACCOUNT_TYPE_INVEST_BOX:
      return "ACCOUNT_TYPE_INVEST_BOX";
    case AccountType.ACCOUNT_TYPE_INVEST_FUND:
      return "ACCOUNT_TYPE_INVEST_FUND";
    case AccountType.ACCOUNT_TYPE_DEBIT:
      return "ACCOUNT_TYPE_DEBIT";
    case AccountType.ACCOUNT_TYPE_SAVING:
      return "ACCOUNT_TYPE_SAVING";
    case AccountType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Статус счeта. */
export enum AccountStatus {
  /** ACCOUNT_STATUS_UNSPECIFIED - Статус счeта не определeн. */
  ACCOUNT_STATUS_UNSPECIFIED = 0,
  /** ACCOUNT_STATUS_NEW - Новый, в процессе открытия. */
  ACCOUNT_STATUS_NEW = 1,
  /** ACCOUNT_STATUS_OPEN - Открытый и активный счeт. */
  ACCOUNT_STATUS_OPEN = 2,
  /** ACCOUNT_STATUS_CLOSED - Закрытый счeт. */
  ACCOUNT_STATUS_CLOSED = 3,
  /** ACCOUNT_STATUS_ALL - Все счета. */
  ACCOUNT_STATUS_ALL = 4,
  UNRECOGNIZED = -1,
}

export function accountStatusFromJSON(object: any): AccountStatus {
  switch (object) {
    case 0:
    case "ACCOUNT_STATUS_UNSPECIFIED":
      return AccountStatus.ACCOUNT_STATUS_UNSPECIFIED;
    case 1:
    case "ACCOUNT_STATUS_NEW":
      return AccountStatus.ACCOUNT_STATUS_NEW;
    case 2:
    case "ACCOUNT_STATUS_OPEN":
      return AccountStatus.ACCOUNT_STATUS_OPEN;
    case 3:
    case "ACCOUNT_STATUS_CLOSED":
      return AccountStatus.ACCOUNT_STATUS_CLOSED;
    case 4:
    case "ACCOUNT_STATUS_ALL":
      return AccountStatus.ACCOUNT_STATUS_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccountStatus.UNRECOGNIZED;
  }
}

export function accountStatusToJSON(object: AccountStatus): string {
  switch (object) {
    case AccountStatus.ACCOUNT_STATUS_UNSPECIFIED:
      return "ACCOUNT_STATUS_UNSPECIFIED";
    case AccountStatus.ACCOUNT_STATUS_NEW:
      return "ACCOUNT_STATUS_NEW";
    case AccountStatus.ACCOUNT_STATUS_OPEN:
      return "ACCOUNT_STATUS_OPEN";
    case AccountStatus.ACCOUNT_STATUS_CLOSED:
      return "ACCOUNT_STATUS_CLOSED";
    case AccountStatus.ACCOUNT_STATUS_ALL:
      return "ACCOUNT_STATUS_ALL";
    case AccountStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Уровень доступа к счeту. */
export enum AccessLevel {
  /** ACCOUNT_ACCESS_LEVEL_UNSPECIFIED - Уровень доступа не определeн. */
  ACCOUNT_ACCESS_LEVEL_UNSPECIFIED = 0,
  /** ACCOUNT_ACCESS_LEVEL_FULL_ACCESS - Полный доступ к счeту. */
  ACCOUNT_ACCESS_LEVEL_FULL_ACCESS = 1,
  /** ACCOUNT_ACCESS_LEVEL_READ_ONLY - Доступ с уровнем прав «только чтение». */
  ACCOUNT_ACCESS_LEVEL_READ_ONLY = 2,
  /** ACCOUNT_ACCESS_LEVEL_NO_ACCESS - Доступа нет. */
  ACCOUNT_ACCESS_LEVEL_NO_ACCESS = 3,
  UNRECOGNIZED = -1,
}

export function accessLevelFromJSON(object: any): AccessLevel {
  switch (object) {
    case 0:
    case "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED":
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED;
    case 1:
    case "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS":
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS;
    case 2:
    case "ACCOUNT_ACCESS_LEVEL_READ_ONLY":
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY;
    case 3:
    case "ACCOUNT_ACCESS_LEVEL_NO_ACCESS":
      return AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessLevel.UNRECOGNIZED;
  }
}

export function accessLevelToJSON(object: AccessLevel): string {
  switch (object) {
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_UNSPECIFIED:
      return "ACCOUNT_ACCESS_LEVEL_UNSPECIFIED";
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_FULL_ACCESS:
      return "ACCOUNT_ACCESS_LEVEL_FULL_ACCESS";
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_READ_ONLY:
      return "ACCOUNT_ACCESS_LEVEL_READ_ONLY";
    case AccessLevel.ACCOUNT_ACCESS_LEVEL_NO_ACCESS:
      return "ACCOUNT_ACCESS_LEVEL_NO_ACCESS";
    case AccessLevel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос получения счетов пользователя. */
export interface GetAccountsRequest {
  /** Статус счета. */
  status?: AccountStatus | undefined;
}

/** Список счетов пользователя. */
export interface GetAccountsResponse {
  /** Массив счетов клиента. */
  accounts: Account[];
}

/** Информация о счeте. */
export interface Account {
  /** Идентификатор счeта. */
  id: string;
  /** Тип счeта. */
  type: AccountType;
  /** Название счeта. */
  name: string;
  /** Статус счeта. */
  status: AccountStatus;
  /** Дата открытия счeта в часовом поясе UTC. */
  openedDate?:
    | Date
    | undefined;
  /** Дата закрытия счeта в часовом поясе UTC. */
  closedDate?:
    | Date
    | undefined;
  /** Уровень доступа к текущему счeту (определяется токеном). */
  accessLevel: AccessLevel;
}

/** Запрос маржинальных показателей по счeту. */
export interface GetMarginAttributesRequest {
  /** Идентификатор счeта пользователя. */
  accountId: string;
}

/** Маржинальные показатели по счeту. */
export interface GetMarginAttributesResponse {
  /** Ликвидная стоимость портфеля. [Подробнее про ликвидный портфель](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q4). */
  liquidPortfolio?:
    | MoneyValue
    | undefined;
  /** Начальная маржа — начальное обеспечение для совершения новой сделки. [Подробнее про начальную и минимальную маржу](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q6). */
  startingMargin?:
    | MoneyValue
    | undefined;
  /** Минимальная маржа — это минимальное обеспечение для поддержания позиции, которую вы уже открыли. [Подробнее про начальную и минимальную маржу](https://www.tbank.ru/invest/help/brokerage/account/margin/about/#q6). */
  minimalMargin?:
    | MoneyValue
    | undefined;
  /** Уровень достаточности средств. Соотношение стоимости ликвидного портфеля к начальной марже. */
  fundsSufficiencyLevel?:
    | Quotation
    | undefined;
  /** Объем недостающих средств. Разница между стартовой маржой и ликвидной стоимости портфеля. */
  amountOfMissingFunds?:
    | MoneyValue
    | undefined;
  /** Скорректированная маржа. Начальная маржа, в которой плановые позиции рассчитываются с учeтом активных заявок на покупку позиций лонг или продажу позиций шорт. */
  correctedMargin?: MoneyValue | undefined;
}

/** Запрос текущих лимитов пользователя. */
export interface GetUserTariffRequest {
}

/** Текущие лимиты пользователя. */
export interface GetUserTariffResponse {
  /** Массив лимитов пользователя по unary-запросам. */
  unaryLimits: UnaryLimit[];
  /** Массив лимитов пользователей для stream-соединений. */
  streamLimits: StreamLimit[];
}

/** Лимит unary-методов. */
export interface UnaryLimit {
  /** Количество unary-запросов в минуту. */
  limitPerMinute: number;
  /** Названия методов. */
  methods: string[];
  /** Количество unary-запросов в секунду. */
  limitPerSecond?: number | undefined;
}

/** Лимит stream-соединений. */
export interface StreamLimit {
  /** Максимальное количество stream-соединений. */
  limit: number;
  /** Названия stream-методов. */
  streams: string[];
  /** Текущее количество открытых stream-соединений. */
  open: number;
}

/** Запрос информации о пользователе. */
export interface GetInfoRequest {
}

/** Информация о пользователе. */
export interface GetInfoResponse {
  /** Признак премиум клиента. */
  premStatus: boolean;
  /** Признак квалифицированного инвестора. */
  qualStatus: boolean;
  /** Набор требующих тестирования инструментов и возможностей, с которыми может работать пользователь. [Подробнее](/invest/services/accounts/faq_users). */
  qualifiedForWorkWith: string[];
  /** Наименование тарифа пользователя. */
  tariff: string;
  /** Идентификатор пользователя. */
  userId: string;
  /** Категория риска. */
  riskLevelCode: string;
}

/** Запрос списка банковских счетов пользователя. */
export interface GetBankAccountsRequest {
}

/** Список банковских счетов пользователя. */
export interface GetBankAccountsResponse {
  /** Массив банковских счетов. */
  bankAccounts: BankAccount[];
}

/** Банковский счeт. */
export interface BankAccount {
  /** Идентификатор счeта. */
  id: string;
  /** Название счeта. */
  name: string;
  /** Список валютных позиций на счeте. */
  money: MoneyValue[];
  /** Дата открытия счeта в часовом поясе UTC. */
  openedDate?:
    | Date
    | undefined;
  /** Тип счeта. */
  type: AccountType;
}

export interface CurrencyTransferRequest {
  /** Номер счета списания. */
  fromAccountId: string;
  /** Номер счета зачисления. */
  toAccountId: string;
  /** Сумма перевода с указанием валюты. */
  amount?:
    | MoneyValue
    | undefined;
  /** Идентификатор запроса выставления поручения для целей идемпотентности в формате UUID. */
  transactionId: string;
}

export interface CurrencyTransferResponse {
}

function createBaseGetAccountsRequest(): GetAccountsRequest {
  return { status: undefined };
}

export const GetAccountsRequest = {
  encode(message: GetAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== undefined) {
      writer.uint32(8).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccountsRequest {
    return { status: isSet(object.status) ? accountStatusFromJSON(object.status) : undefined };
  },

  toJSON(message: GetAccountsRequest): unknown {
    const obj: any = {};
    if (message.status !== undefined) {
      obj.status = accountStatusToJSON(message.status);
    }
    return obj;
  },
};

function createBaseGetAccountsResponse(): GetAccountsResponse {
  return { accounts: [] };
}

export const GetAccountsResponse = {
  encode(message: GetAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      Account.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(Account.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccountsResponse {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => Account.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts.map((e) => Account.toJSON(e));
    }
    return obj;
  },
};

function createBaseAccount(): Account {
  return { id: "", type: 0, name: "", status: 0, openedDate: undefined, closedDate: undefined, accessLevel: 0 };
}

export const Account = {
  encode(message: Account, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.openedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.openedDate), writer.uint32(42).fork()).ldelim();
    }
    if (message.closedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.closedDate), writer.uint32(50).fork()).ldelim();
    }
    if (message.accessLevel !== 0) {
      writer.uint32(56).int32(message.accessLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Account {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.openedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.closedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.accessLevel = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Account {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      status: isSet(object.status) ? accountStatusFromJSON(object.status) : 0,
      openedDate: isSet(object.openedDate) ? fromJsonTimestamp(object.openedDate) : undefined,
      closedDate: isSet(object.closedDate) ? fromJsonTimestamp(object.closedDate) : undefined,
      accessLevel: isSet(object.accessLevel) ? accessLevelFromJSON(object.accessLevel) : 0,
    };
  },

  toJSON(message: Account): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== 0) {
      obj.type = accountTypeToJSON(message.type);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.status !== 0) {
      obj.status = accountStatusToJSON(message.status);
    }
    if (message.openedDate !== undefined) {
      obj.openedDate = message.openedDate.toISOString();
    }
    if (message.closedDate !== undefined) {
      obj.closedDate = message.closedDate.toISOString();
    }
    if (message.accessLevel !== 0) {
      obj.accessLevel = accessLevelToJSON(message.accessLevel);
    }
    return obj;
  },
};

function createBaseGetMarginAttributesRequest(): GetMarginAttributesRequest {
  return { accountId: "" };
}

export const GetMarginAttributesRequest = {
  encode(message: GetMarginAttributesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMarginAttributesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarginAttributesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMarginAttributesRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: GetMarginAttributesRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseGetMarginAttributesResponse(): GetMarginAttributesResponse {
  return {
    liquidPortfolio: undefined,
    startingMargin: undefined,
    minimalMargin: undefined,
    fundsSufficiencyLevel: undefined,
    amountOfMissingFunds: undefined,
    correctedMargin: undefined,
  };
}

export const GetMarginAttributesResponse = {
  encode(message: GetMarginAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.liquidPortfolio !== undefined) {
      MoneyValue.encode(message.liquidPortfolio, writer.uint32(10).fork()).ldelim();
    }
    if (message.startingMargin !== undefined) {
      MoneyValue.encode(message.startingMargin, writer.uint32(18).fork()).ldelim();
    }
    if (message.minimalMargin !== undefined) {
      MoneyValue.encode(message.minimalMargin, writer.uint32(26).fork()).ldelim();
    }
    if (message.fundsSufficiencyLevel !== undefined) {
      Quotation.encode(message.fundsSufficiencyLevel, writer.uint32(34).fork()).ldelim();
    }
    if (message.amountOfMissingFunds !== undefined) {
      MoneyValue.encode(message.amountOfMissingFunds, writer.uint32(42).fork()).ldelim();
    }
    if (message.correctedMargin !== undefined) {
      MoneyValue.encode(message.correctedMargin, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMarginAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMarginAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.liquidPortfolio = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.startingMargin = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minimalMargin = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.fundsSufficiencyLevel = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.amountOfMissingFunds = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.correctedMargin = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMarginAttributesResponse {
    return {
      liquidPortfolio: isSet(object.liquidPortfolio) ? MoneyValue.fromJSON(object.liquidPortfolio) : undefined,
      startingMargin: isSet(object.startingMargin) ? MoneyValue.fromJSON(object.startingMargin) : undefined,
      minimalMargin: isSet(object.minimalMargin) ? MoneyValue.fromJSON(object.minimalMargin) : undefined,
      fundsSufficiencyLevel: isSet(object.fundsSufficiencyLevel)
        ? Quotation.fromJSON(object.fundsSufficiencyLevel)
        : undefined,
      amountOfMissingFunds: isSet(object.amountOfMissingFunds)
        ? MoneyValue.fromJSON(object.amountOfMissingFunds)
        : undefined,
      correctedMargin: isSet(object.correctedMargin) ? MoneyValue.fromJSON(object.correctedMargin) : undefined,
    };
  },

  toJSON(message: GetMarginAttributesResponse): unknown {
    const obj: any = {};
    if (message.liquidPortfolio !== undefined) {
      obj.liquidPortfolio = MoneyValue.toJSON(message.liquidPortfolio);
    }
    if (message.startingMargin !== undefined) {
      obj.startingMargin = MoneyValue.toJSON(message.startingMargin);
    }
    if (message.minimalMargin !== undefined) {
      obj.minimalMargin = MoneyValue.toJSON(message.minimalMargin);
    }
    if (message.fundsSufficiencyLevel !== undefined) {
      obj.fundsSufficiencyLevel = Quotation.toJSON(message.fundsSufficiencyLevel);
    }
    if (message.amountOfMissingFunds !== undefined) {
      obj.amountOfMissingFunds = MoneyValue.toJSON(message.amountOfMissingFunds);
    }
    if (message.correctedMargin !== undefined) {
      obj.correctedMargin = MoneyValue.toJSON(message.correctedMargin);
    }
    return obj;
  },
};

function createBaseGetUserTariffRequest(): GetUserTariffRequest {
  return {};
}

export const GetUserTariffRequest = {
  encode(_: GetUserTariffRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTariffRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTariffRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetUserTariffRequest {
    return {};
  },

  toJSON(_: GetUserTariffRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetUserTariffResponse(): GetUserTariffResponse {
  return { unaryLimits: [], streamLimits: [] };
}

export const GetUserTariffResponse = {
  encode(message: GetUserTariffResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.unaryLimits) {
      UnaryLimit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.streamLimits) {
      StreamLimit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserTariffResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserTariffResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unaryLimits.push(UnaryLimit.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streamLimits.push(StreamLimit.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserTariffResponse {
    return {
      unaryLimits: globalThis.Array.isArray(object?.unaryLimits)
        ? object.unaryLimits.map((e: any) => UnaryLimit.fromJSON(e))
        : [],
      streamLimits: globalThis.Array.isArray(object?.streamLimits)
        ? object.streamLimits.map((e: any) => StreamLimit.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUserTariffResponse): unknown {
    const obj: any = {};
    if (message.unaryLimits?.length) {
      obj.unaryLimits = message.unaryLimits.map((e) => UnaryLimit.toJSON(e));
    }
    if (message.streamLimits?.length) {
      obj.streamLimits = message.streamLimits.map((e) => StreamLimit.toJSON(e));
    }
    return obj;
  },
};

function createBaseUnaryLimit(): UnaryLimit {
  return { limitPerMinute: 0, methods: [], limitPerSecond: undefined };
}

export const UnaryLimit = {
  encode(message: UnaryLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limitPerMinute !== 0) {
      writer.uint32(8).int32(message.limitPerMinute);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    if (message.limitPerSecond !== undefined) {
      writer.uint32(24).int32(message.limitPerSecond);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnaryLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnaryLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limitPerMinute = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.methods.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limitPerSecond = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UnaryLimit {
    return {
      limitPerMinute: isSet(object.limitPerMinute) ? globalThis.Number(object.limitPerMinute) : 0,
      methods: globalThis.Array.isArray(object?.methods) ? object.methods.map((e: any) => globalThis.String(e)) : [],
      limitPerSecond: isSet(object.limitPerSecond) ? globalThis.Number(object.limitPerSecond) : undefined,
    };
  },

  toJSON(message: UnaryLimit): unknown {
    const obj: any = {};
    if (message.limitPerMinute !== 0) {
      obj.limitPerMinute = Math.round(message.limitPerMinute);
    }
    if (message.methods?.length) {
      obj.methods = message.methods;
    }
    if (message.limitPerSecond !== undefined) {
      obj.limitPerSecond = Math.round(message.limitPerSecond);
    }
    return obj;
  },
};

function createBaseStreamLimit(): StreamLimit {
  return { limit: 0, streams: [], open: 0 };
}

export const StreamLimit = {
  encode(message: StreamLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    for (const v of message.streams) {
      writer.uint32(18).string(v!);
    }
    if (message.open !== 0) {
      writer.uint32(24).int32(message.open);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StreamLimit {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStreamLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.limit = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streams.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.open = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StreamLimit {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      streams: globalThis.Array.isArray(object?.streams) ? object.streams.map((e: any) => globalThis.String(e)) : [],
      open: isSet(object.open) ? globalThis.Number(object.open) : 0,
    };
  },

  toJSON(message: StreamLimit): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.streams?.length) {
      obj.streams = message.streams;
    }
    if (message.open !== 0) {
      obj.open = Math.round(message.open);
    }
    return obj;
  },
};

function createBaseGetInfoRequest(): GetInfoRequest {
  return {};
}

export const GetInfoRequest = {
  encode(_: GetInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetInfoRequest {
    return {};
  },

  toJSON(_: GetInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetInfoResponse(): GetInfoResponse {
  return { premStatus: false, qualStatus: false, qualifiedForWorkWith: [], tariff: "", userId: "", riskLevelCode: "" };
}

export const GetInfoResponse = {
  encode(message: GetInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.premStatus === true) {
      writer.uint32(8).bool(message.premStatus);
    }
    if (message.qualStatus === true) {
      writer.uint32(16).bool(message.qualStatus);
    }
    for (const v of message.qualifiedForWorkWith) {
      writer.uint32(26).string(v!);
    }
    if (message.tariff !== "") {
      writer.uint32(34).string(message.tariff);
    }
    if (message.userId !== "") {
      writer.uint32(74).string(message.userId);
    }
    if (message.riskLevelCode !== "") {
      writer.uint32(98).string(message.riskLevelCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.premStatus = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.qualStatus = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.qualifiedForWorkWith.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tariff = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.userId = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.riskLevelCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetInfoResponse {
    return {
      premStatus: isSet(object.premStatus) ? globalThis.Boolean(object.premStatus) : false,
      qualStatus: isSet(object.qualStatus) ? globalThis.Boolean(object.qualStatus) : false,
      qualifiedForWorkWith: globalThis.Array.isArray(object?.qualifiedForWorkWith)
        ? object.qualifiedForWorkWith.map((e: any) => globalThis.String(e))
        : [],
      tariff: isSet(object.tariff) ? globalThis.String(object.tariff) : "",
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      riskLevelCode: isSet(object.riskLevelCode) ? globalThis.String(object.riskLevelCode) : "",
    };
  },

  toJSON(message: GetInfoResponse): unknown {
    const obj: any = {};
    if (message.premStatus === true) {
      obj.premStatus = message.premStatus;
    }
    if (message.qualStatus === true) {
      obj.qualStatus = message.qualStatus;
    }
    if (message.qualifiedForWorkWith?.length) {
      obj.qualifiedForWorkWith = message.qualifiedForWorkWith;
    }
    if (message.tariff !== "") {
      obj.tariff = message.tariff;
    }
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.riskLevelCode !== "") {
      obj.riskLevelCode = message.riskLevelCode;
    }
    return obj;
  },
};

function createBaseGetBankAccountsRequest(): GetBankAccountsRequest {
  return {};
}

export const GetBankAccountsRequest = {
  encode(_: GetBankAccountsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBankAccountsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBankAccountsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetBankAccountsRequest {
    return {};
  },

  toJSON(_: GetBankAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetBankAccountsResponse(): GetBankAccountsResponse {
  return { bankAccounts: [] };
}

export const GetBankAccountsResponse = {
  encode(message: GetBankAccountsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.bankAccounts) {
      BankAccount.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBankAccountsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBankAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.bankAccounts.push(BankAccount.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBankAccountsResponse {
    return {
      bankAccounts: globalThis.Array.isArray(object?.bankAccounts)
        ? object.bankAccounts.map((e: any) => BankAccount.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetBankAccountsResponse): unknown {
    const obj: any = {};
    if (message.bankAccounts?.length) {
      obj.bankAccounts = message.bankAccounts.map((e) => BankAccount.toJSON(e));
    }
    return obj;
  },
};

function createBaseBankAccount(): BankAccount {
  return { id: "", name: "", money: [], openedDate: undefined, type: 0 };
}

export const BankAccount = {
  encode(message: BankAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.money) {
      MoneyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.openedDate !== undefined) {
      Timestamp.encode(toTimestamp(message.openedDate), writer.uint32(34).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BankAccount {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBankAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.money.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.openedDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BankAccount {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      money: globalThis.Array.isArray(object?.money) ? object.money.map((e: any) => MoneyValue.fromJSON(e)) : [],
      openedDate: isSet(object.openedDate) ? fromJsonTimestamp(object.openedDate) : undefined,
      type: isSet(object.type) ? accountTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: BankAccount): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.money?.length) {
      obj.money = message.money.map((e) => MoneyValue.toJSON(e));
    }
    if (message.openedDate !== undefined) {
      obj.openedDate = message.openedDate.toISOString();
    }
    if (message.type !== 0) {
      obj.type = accountTypeToJSON(message.type);
    }
    return obj;
  },
};

function createBaseCurrencyTransferRequest(): CurrencyTransferRequest {
  return { fromAccountId: "", toAccountId: "", amount: undefined, transactionId: "" };
}

export const CurrencyTransferRequest = {
  encode(message: CurrencyTransferRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.fromAccountId !== "") {
      writer.uint32(10).string(message.fromAccountId);
    }
    if (message.toAccountId !== "") {
      writer.uint32(18).string(message.toAccountId);
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.transactionId !== "") {
      writer.uint32(34).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyTransferRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fromAccountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.toAccountId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.amount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.transactionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CurrencyTransferRequest {
    return {
      fromAccountId: isSet(object.fromAccountId) ? globalThis.String(object.fromAccountId) : "",
      toAccountId: isSet(object.toAccountId) ? globalThis.String(object.toAccountId) : "",
      amount: isSet(object.amount) ? MoneyValue.fromJSON(object.amount) : undefined,
      transactionId: isSet(object.transactionId) ? globalThis.String(object.transactionId) : "",
    };
  },

  toJSON(message: CurrencyTransferRequest): unknown {
    const obj: any = {};
    if (message.fromAccountId !== "") {
      obj.fromAccountId = message.fromAccountId;
    }
    if (message.toAccountId !== "") {
      obj.toAccountId = message.toAccountId;
    }
    if (message.amount !== undefined) {
      obj.amount = MoneyValue.toJSON(message.amount);
    }
    if (message.transactionId !== "") {
      obj.transactionId = message.transactionId;
    }
    return obj;
  },
};

function createBaseCurrencyTransferResponse(): CurrencyTransferResponse {
  return {};
}

export const CurrencyTransferResponse = {
  encode(_: CurrencyTransferResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyTransferResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): CurrencyTransferResponse {
    return {};
  },

  toJSON(_: CurrencyTransferResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

/**
 * С помощью сервиса можно получить: <br/> 1.
 * список счетов пользователя; <br/> 2. маржинальные показатели по счeту.
 */
export type UsersServiceDefinition = typeof UsersServiceDefinition;
export const UsersServiceDefinition = {
  name: "UsersService",
  fullName: "tinkoff.public.invest.api.contract.v1.UsersService",
  methods: {
    /**
     * GetAccounts — счета пользователя
     * Получить список счетов.
     */
    getAccounts: {
      name: "GetAccounts",
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetMarginAttributes — маржинальные показатели по счeту
     * Метод позволяет получить маржинальные показатели и ликвидность по заданному счeту.
     */
    getMarginAttributes: {
      name: "GetMarginAttributes",
      requestType: GetMarginAttributesRequest,
      requestStream: false,
      responseType: GetMarginAttributesResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetUserTariff — тариф пользователя
     * Получить информацию о текущих лимитах на подклчение, согласно текущему тарифу пользователя.
     */
    getUserTariff: {
      name: "GetUserTariff",
      requestType: GetUserTariffRequest,
      requestStream: false,
      responseType: GetUserTariffResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetInfo — информация о пользователе
     * Получить информацию о пользователе: тариф, признак квалификации, пройденные тесты и др.
     */
    getInfo: {
      name: "GetInfo",
      requestType: GetInfoRequest,
      requestStream: false,
      responseType: GetInfoResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetBankAccounts — банковские счета пользователя
     * Получить список счетов пользователя, в том числе и банковских.
     */
    getBankAccounts: {
      name: "GetBankAccounts",
      requestType: GetBankAccountsRequest,
      requestStream: false,
      responseType: GetBankAccountsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * CurrencyTransfer — перевод денежных средств между счетами
     * Перевести денежные средства между брокерскими счетами
     */
    currencyTransfer: {
      name: "CurrencyTransfer",
      requestType: CurrencyTransferRequest,
      requestStream: false,
      responseType: CurrencyTransferResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface UsersServiceImplementation<CallContextExt = {}> {
  /**
   * GetAccounts — счета пользователя
   * Получить список счетов.
   */
  getAccounts(request: GetAccountsRequest, context: CallContext & CallContextExt): Promise<GetAccountsResponse>;
  /**
   * GetMarginAttributes — маржинальные показатели по счeту
   * Метод позволяет получить маржинальные показатели и ликвидность по заданному счeту.
   */
  getMarginAttributes(
    request: GetMarginAttributesRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetMarginAttributesResponse>;
  /**
   * GetUserTariff — тариф пользователя
   * Получить информацию о текущих лимитах на подклчение, согласно текущему тарифу пользователя.
   */
  getUserTariff(request: GetUserTariffRequest, context: CallContext & CallContextExt): Promise<GetUserTariffResponse>;
  /**
   * GetInfo — информация о пользователе
   * Получить информацию о пользователе: тариф, признак квалификации, пройденные тесты и др.
   */
  getInfo(request: GetInfoRequest, context: CallContext & CallContextExt): Promise<GetInfoResponse>;
  /**
   * GetBankAccounts — банковские счета пользователя
   * Получить список счетов пользователя, в том числе и банковских.
   */
  getBankAccounts(
    request: GetBankAccountsRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetBankAccountsResponse>;
  /**
   * CurrencyTransfer — перевод денежных средств между счетами
   * Перевести денежные средства между брокерскими счетами
   */
  currencyTransfer(
    request: CurrencyTransferRequest,
    context: CallContext & CallContextExt,
  ): Promise<CurrencyTransferResponse>;
}

export interface UsersServiceClient<CallOptionsExt = {}> {
  /**
   * GetAccounts — счета пользователя
   * Получить список счетов.
   */
  getAccounts(request: GetAccountsRequest, options?: CallOptions & CallOptionsExt): Promise<GetAccountsResponse>;
  /**
   * GetMarginAttributes — маржинальные показатели по счeту
   * Метод позволяет получить маржинальные показатели и ликвидность по заданному счeту.
   */
  getMarginAttributes(
    request: GetMarginAttributesRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetMarginAttributesResponse>;
  /**
   * GetUserTariff — тариф пользователя
   * Получить информацию о текущих лимитах на подклчение, согласно текущему тарифу пользователя.
   */
  getUserTariff(request: GetUserTariffRequest, options?: CallOptions & CallOptionsExt): Promise<GetUserTariffResponse>;
  /**
   * GetInfo — информация о пользователе
   * Получить информацию о пользователе: тариф, признак квалификации, пройденные тесты и др.
   */
  getInfo(request: GetInfoRequest, options?: CallOptions & CallOptionsExt): Promise<GetInfoResponse>;
  /**
   * GetBankAccounts — банковские счета пользователя
   * Получить список счетов пользователя, в том числе и банковских.
   */
  getBankAccounts(
    request: GetBankAccountsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetBankAccountsResponse>;
  /**
   * CurrencyTransfer — перевод денежных средств между счетами
   * Перевести денежные средства между брокерскими счетами
   */
  currencyTransfer(
    request: CurrencyTransferRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CurrencyTransferResponse>;
}

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
