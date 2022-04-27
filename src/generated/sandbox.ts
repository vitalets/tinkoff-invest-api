/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue } from "./common.js";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";
import {
  PostOrderRequest,
  PostOrderResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  CancelOrderRequest,
  CancelOrderResponse,
  GetOrderStateRequest,
  OrderState,
} from "./orders.js";
import {
  PositionsRequest,
  PositionsResponse,
  OperationsRequest,
  OperationsResponse,
  PortfolioRequest,
  PortfolioResponse,
} from "./operations.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Запрос открытия счёта в песочнице. */
export interface OpenSandboxAccountRequest {}

/** Номер открытого счёта в песочнице. */
export interface OpenSandboxAccountResponse {
  /** Номер счёта */
  accountId: string;
}

/** Запрос закрытия счёта в песочнице. */
export interface CloseSandboxAccountRequest {
  /** Номер счёта */
  accountId: string;
}

/** Результат закрытия счёта в песочнице. */
export interface CloseSandboxAccountResponse {}

/** Запрос пополнения счёта в песочнице. */
export interface SandboxPayInRequest {
  /** Номер счёта */
  accountId: string;
  /** Сумма пополнения счёта в рублях */
  amount: MoneyValue | undefined;
}

/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счёта */
  balance: MoneyValue | undefined;
}

function createBaseOpenSandboxAccountRequest(): OpenSandboxAccountRequest {
  return {};
}

export const OpenSandboxAccountRequest = {
  encode(
    _: OpenSandboxAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): OpenSandboxAccountRequest {
    return {};
  },

  toJSON(_: OpenSandboxAccountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<OpenSandboxAccountRequest>
  ): OpenSandboxAccountRequest {
    const message = createBaseOpenSandboxAccountRequest();
    return message;
  },
};

function createBaseOpenSandboxAccountResponse(): OpenSandboxAccountResponse {
  return { accountId: "" };
}

export const OpenSandboxAccountResponse = {
  encode(
    message: OpenSandboxAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OpenSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OpenSandboxAccountResponse {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: OpenSandboxAccountResponse): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OpenSandboxAccountResponse>
  ): OpenSandboxAccountResponse {
    const message = createBaseOpenSandboxAccountResponse();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountRequest(): CloseSandboxAccountRequest {
  return { accountId: "" };
}

export const CloseSandboxAccountRequest = {
  encode(
    message: CloseSandboxAccountRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CloseSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CloseSandboxAccountRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: CloseSandboxAccountRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<CloseSandboxAccountRequest>
  ): CloseSandboxAccountRequest {
    const message = createBaseCloseSandboxAccountRequest();
    message.accountId = object.accountId ?? "";
    return message;
  },
};

function createBaseCloseSandboxAccountResponse(): CloseSandboxAccountResponse {
  return {};
}

export const CloseSandboxAccountResponse = {
  encode(
    _: CloseSandboxAccountResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CloseSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CloseSandboxAccountResponse {
    return {};
  },

  toJSON(_: CloseSandboxAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<CloseSandboxAccountResponse>
  ): CloseSandboxAccountResponse {
    const message = createBaseCloseSandboxAccountResponse();
    return message;
  },
};

function createBaseSandboxPayInRequest(): SandboxPayInRequest {
  return { accountId: "", amount: undefined };
}

export const SandboxPayInRequest = {
  encode(
    message: SandboxPayInRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.amount = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      amount: isSet(object.amount)
        ? MoneyValue.fromJSON(object.amount)
        : undefined,
    };
  },

  toJSON(message: SandboxPayInRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.amount !== undefined &&
      (obj.amount = message.amount
        ? MoneyValue.toJSON(message.amount)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SandboxPayInRequest>): SandboxPayInRequest {
    const message = createBaseSandboxPayInRequest();
    message.accountId = object.accountId ?? "";
    message.amount =
      object.amount !== undefined && object.amount !== null
        ? MoneyValue.fromPartial(object.amount)
        : undefined;
    return message;
  },
};

function createBaseSandboxPayInResponse(): SandboxPayInResponse {
  return { balance: undefined };
}

export const SandboxPayInResponse = {
  encode(
    message: SandboxPayInResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== undefined) {
      MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SandboxPayInResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInResponse {
    return {
      balance: isSet(object.balance)
        ? MoneyValue.fromJSON(object.balance)
        : undefined,
    };
  },

  toJSON(message: SandboxPayInResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = message.balance
        ? MoneyValue.toJSON(message.balance)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<SandboxPayInResponse>): SandboxPayInResponse {
    const message = createBaseSandboxPayInResponse();
    message.balance =
      object.balance !== undefined && object.balance !== null
        ? MoneyValue.fromPartial(object.balance)
        : undefined;
    return message;
  },
};

/** Сервис для работы с песочницей TINKOFF INVEST API */
export const SandboxServiceDefinition = {
  name: "SandboxService",
  fullName: "tinkoff.public.invest.api.contract.v1.SandboxService",
  methods: {
    /** Метод регистрации счёта в песочнице. */
    openSandboxAccount: {
      name: "OpenSandboxAccount",
      requestType: OpenSandboxAccountRequest,
      requestStream: false,
      responseType: OpenSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения счетов в песочнице. */
    getSandboxAccounts: {
      name: "GetSandboxAccounts",
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод закрытия счёта в песочнице. */
    closeSandboxAccount: {
      name: "CloseSandboxAccount",
      requestType: CloseSandboxAccountRequest,
      requestStream: false,
      responseType: CloseSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Метод выставления торгового поручения в песочнице. */
    postSandboxOrder: {
      name: "PostSandboxOrder",
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активных заявок по счёту в песочнице. */
    getSandboxOrders: {
      name: "GetSandboxOrders",
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Метод отмены торгового поручения в песочнице. */
    cancelSandboxOrder: {
      name: "CancelSandboxOrder",
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения статуса заявки в песочнице. */
    getSandboxOrderState: {
      name: "GetSandboxOrderState",
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** Метод получения позиций по виртуальному счёту песочницы. */
    getSandboxPositions: {
      name: "GetSandboxPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения операций в песочнице по номеру счёта. */
    getSandboxOperations: {
      name: "GetSandboxOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения портфолио в песочнице. */
    getSandboxPortfolio: {
      name: "GetSandboxPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** Метод пополнения счёта в песочнице. */
    sandboxPayIn: {
      name: "SandboxPayIn",
      requestType: SandboxPayInRequest,
      requestStream: false,
      responseType: SandboxPayInResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
