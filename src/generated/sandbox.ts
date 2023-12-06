/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";
import {
  PostOrderRequest,
  PostOrderResponse,
  ReplaceOrderRequest,
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
  GetOperationsByCursorRequest,
  GetOperationsByCursorResponse,
  PortfolioRequest,
  PortfolioResponse,
  WithdrawLimitsRequest,
  WithdrawLimitsResponse,
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
  amount?: MoneyValue;
}

/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счёта */
  balance?: MoneyValue;
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
};

/** Сервис для работы с песочницей TINKOFF INVEST API */
export type SandboxServiceDefinition = typeof SandboxServiceDefinition;
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
    /** Метод изменения выставленной заявки. */
    replaceSandboxOrder: {
      name: "ReplaceSandboxOrder",
      requestType: ReplaceOrderRequest,
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
    /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
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
    /** Метод получения операций в песочнице по номеру счета с пагинацией. */
    getSandboxOperationsByCursor: {
      name: "GetSandboxOperationsByCursor",
      requestType: GetOperationsByCursorRequest,
      requestStream: false,
      responseType: GetOperationsByCursorResponse,
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
    /** Метод получения доступного остатка для вывода средств в песочнице. */
    getSandboxWithdrawLimits: {
      name: "GetSandboxWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SandboxServiceServiceImplementation<CallContextExt = {}> {
  /** Метод регистрации счёта в песочнице. */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    context: CallContext & CallContextExt
  ): Promise<OpenSandboxAccountResponse>;
  /** Метод получения счетов в песочнице. */
  getSandboxAccounts(
    request: GetAccountsRequest,
    context: CallContext & CallContextExt
  ): Promise<GetAccountsResponse>;
  /** Метод закрытия счёта в песочнице. */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    context: CallContext & CallContextExt
  ): Promise<CloseSandboxAccountResponse>;
  /** Метод выставления торгового поручения в песочнице. */
  postSandboxOrder(
    request: PostOrderRequest,
    context: CallContext & CallContextExt
  ): Promise<PostOrderResponse>;
  /** Метод изменения выставленной заявки. */
  replaceSandboxOrder(
    request: ReplaceOrderRequest,
    context: CallContext & CallContextExt
  ): Promise<PostOrderResponse>;
  /** Метод получения списка активных заявок по счёту в песочнице. */
  getSandboxOrders(
    request: GetOrdersRequest,
    context: CallContext & CallContextExt
  ): Promise<GetOrdersResponse>;
  /** Метод отмены торгового поручения в песочнице. */
  cancelSandboxOrder(
    request: CancelOrderRequest,
    context: CallContext & CallContextExt
  ): Promise<CancelOrderResponse>;
  /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(
    request: GetOrderStateRequest,
    context: CallContext & CallContextExt
  ): Promise<OrderState>;
  /** Метод получения позиций по виртуальному счёту песочницы. */
  getSandboxPositions(
    request: PositionsRequest,
    context: CallContext & CallContextExt
  ): Promise<PositionsResponse>;
  /** Метод получения операций в песочнице по номеру счёта. */
  getSandboxOperations(
    request: OperationsRequest,
    context: CallContext & CallContextExt
  ): Promise<OperationsResponse>;
  /** Метод получения операций в песочнице по номеру счета с пагинацией. */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt
  ): Promise<GetOperationsByCursorResponse>;
  /** Метод получения портфолио в песочнице. */
  getSandboxPortfolio(
    request: PortfolioRequest,
    context: CallContext & CallContextExt
  ): Promise<PortfolioResponse>;
  /** Метод пополнения счёта в песочнице. */
  sandboxPayIn(
    request: SandboxPayInRequest,
    context: CallContext & CallContextExt
  ): Promise<SandboxPayInResponse>;
  /** Метод получения доступного остатка для вывода средств в песочнице. */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt
  ): Promise<WithdrawLimitsResponse>;
}

export interface SandboxServiceClient<CallOptionsExt = {}> {
  /** Метод регистрации счёта в песочнице. */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<OpenSandboxAccountResponse>;
  /** Метод получения счетов в песочнице. */
  getSandboxAccounts(
    request: GetAccountsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetAccountsResponse>;
  /** Метод закрытия счёта в песочнице. */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<CloseSandboxAccountResponse>;
  /** Метод выставления торгового поручения в песочнице. */
  postSandboxOrder(
    request: PostOrderRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PostOrderResponse>;
  /** Метод изменения выставленной заявки. */
  replaceSandboxOrder(
    request: ReplaceOrderRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PostOrderResponse>;
  /** Метод получения списка активных заявок по счёту в песочнице. */
  getSandboxOrders(
    request: GetOrdersRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetOrdersResponse>;
  /** Метод отмены торгового поручения в песочнице. */
  cancelSandboxOrder(
    request: CancelOrderRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<CancelOrderResponse>;
  /** Метод получения статуса заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(
    request: GetOrderStateRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<OrderState>;
  /** Метод получения позиций по виртуальному счёту песочницы. */
  getSandboxPositions(
    request: PositionsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PositionsResponse>;
  /** Метод получения операций в песочнице по номеру счёта. */
  getSandboxOperations(
    request: OperationsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationsResponse>;
  /** Метод получения операций в песочнице по номеру счета с пагинацией. */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetOperationsByCursorResponse>;
  /** Метод получения портфолио в песочнице. */
  getSandboxPortfolio(
    request: PortfolioRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PortfolioResponse>;
  /** Метод пополнения счёта в песочнице. */
  sandboxPayIn(
    request: SandboxPayInRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<SandboxPayInResponse>;
  /** Метод получения доступного остатка для вывода средств в песочнице. */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<WithdrawLimitsResponse>;
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
