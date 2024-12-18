/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue } from "./common.js";
import {
  GetOperationsByCursorRequest,
  GetOperationsByCursorResponse,
  OperationsRequest,
  OperationsResponse,
  PortfolioRequest,
  PortfolioResponse,
  PositionsRequest,
  PositionsResponse,
  WithdrawLimitsRequest,
  WithdrawLimitsResponse,
} from "./operations.js";
import {
  CancelOrderRequest,
  CancelOrderResponse,
  GetMaxLotsRequest,
  GetMaxLotsResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrderStateRequest,
  OrderState,
  PostOrderRequest,
  PostOrderResponse,
  ReplaceOrderRequest,
} from "./orders.js";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Запрос открытия счёта в песочнице. */
export interface OpenSandboxAccountRequest {
  /** Название счёта */
  name?: string | undefined;
}

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
export interface CloseSandboxAccountResponse {
}

/** Запрос пополнения счёта в песочнице. */
export interface SandboxPayInRequest {
  /** Номер счёта */
  accountId: string;
  /** Сумма пополнения счёта в рублях */
  amount?: MoneyValue | undefined;
}

/** Результат пополнения счёта, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счёта */
  balance?: MoneyValue | undefined;
}

function createBaseOpenSandboxAccountRequest(): OpenSandboxAccountRequest {
  return { name: undefined };
}

export const OpenSandboxAccountRequest = {
  encode(message: OpenSandboxAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== undefined) {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenSandboxAccountRequest {
    return { name: isSet(object.name) ? globalThis.String(object.name) : undefined };
  },

  toJSON(message: OpenSandboxAccountRequest): unknown {
    const obj: any = {};
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    return obj;
  },
};

function createBaseOpenSandboxAccountResponse(): OpenSandboxAccountResponse {
  return { accountId: "" };
}

export const OpenSandboxAccountResponse = {
  encode(message: OpenSandboxAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OpenSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenSandboxAccountResponse();
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

  fromJSON(object: any): OpenSandboxAccountResponse {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: OpenSandboxAccountResponse): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseCloseSandboxAccountRequest(): CloseSandboxAccountRequest {
  return { accountId: "" };
}

export const CloseSandboxAccountRequest = {
  encode(message: CloseSandboxAccountRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountRequest();
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

  fromJSON(object: any): CloseSandboxAccountRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: CloseSandboxAccountRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseCloseSandboxAccountResponse(): CloseSandboxAccountResponse {
  return {};
}

export const CloseSandboxAccountResponse = {
  encode(_: CloseSandboxAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CloseSandboxAccountResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCloseSandboxAccountResponse();
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
  encode(message: SandboxPayInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.amount = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      amount: isSet(object.amount) ? MoneyValue.fromJSON(object.amount) : undefined,
    };
  },

  toJSON(message: SandboxPayInRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.amount !== undefined) {
      obj.amount = MoneyValue.toJSON(message.amount);
    }
    return obj;
  },
};

function createBaseSandboxPayInResponse(): SandboxPayInResponse {
  return { balance: undefined };
}

export const SandboxPayInResponse = {
  encode(message: SandboxPayInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.balance !== undefined) {
      MoneyValue.encode(message.balance, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SandboxPayInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSandboxPayInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.balance = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SandboxPayInResponse {
    return { balance: isSet(object.balance) ? MoneyValue.fromJSON(object.balance) : undefined };
  },

  toJSON(message: SandboxPayInResponse): unknown {
    const obj: any = {};
    if (message.balance !== undefined) {
      obj.balance = MoneyValue.toJSON(message.balance);
    }
    return obj;
  },
};

/** Методы для работы с песочницей T-Invest API */
export type SandboxServiceDefinition = typeof SandboxServiceDefinition;
export const SandboxServiceDefinition = {
  name: "SandboxService",
  fullName: "tinkoff.public.invest.api.contract.v1.SandboxService",
  methods: {
    /** Зарегистрировать счёт. */
    openSandboxAccount: {
      name: "OpenSandboxAccount",
      requestType: OpenSandboxAccountRequest,
      requestStream: false,
      responseType: OpenSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Получить счета. */
    getSandboxAccounts: {
      name: "GetSandboxAccounts",
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /** Закрыть счёт. */
    closeSandboxAccount: {
      name: "CloseSandboxAccount",
      requestType: CloseSandboxAccountRequest,
      requestStream: false,
      responseType: CloseSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** Выставить торговое поручение. */
    postSandboxOrder: {
      name: "PostSandboxOrder",
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Изменить выставленную заявку. */
    replaceSandboxOrder: {
      name: "ReplaceSandboxOrder",
      requestType: ReplaceOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Получить список активных заявок по счёту. */
    getSandboxOrders: {
      name: "GetSandboxOrders",
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Отменить торговое поручение. */
    cancelSandboxOrder: {
      name: "CancelSandboxOrder",
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
    getSandboxOrderState: {
      name: "GetSandboxOrderState",
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** Получить позиции по виртуальному счёту. */
    getSandboxPositions: {
      name: "GetSandboxPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить операции по номеру счёта. */
    getSandboxOperations: {
      name: "GetSandboxOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить операции по номеру счёта с пагинацией. */
    getSandboxOperationsByCursor: {
      name: "GetSandboxOperationsByCursor",
      requestType: GetOperationsByCursorRequest,
      requestStream: false,
      responseType: GetOperationsByCursorResponse,
      responseStream: false,
      options: {},
    },
    /** Получить портфель. */
    getSandboxPortfolio: {
      name: "GetSandboxPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** Пополнить счёт. */
    sandboxPayIn: {
      name: "SandboxPayIn",
      requestType: SandboxPayInRequest,
      requestStream: false,
      responseType: SandboxPayInResponse,
      responseStream: false,
      options: {},
    },
    /** Получить доступный остаток для вывода средств. */
    getSandboxWithdrawLimits: {
      name: "GetSandboxWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
    /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
    getSandboxMaxLots: {
      name: "GetSandboxMaxLots",
      requestType: GetMaxLotsRequest,
      requestStream: false,
      responseType: GetMaxLotsResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SandboxServiceImplementation<CallContextExt = {}> {
  /** Зарегистрировать счёт. */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<OpenSandboxAccountResponse>;
  /** Получить счета. */
  getSandboxAccounts(request: GetAccountsRequest, context: CallContext & CallContextExt): Promise<GetAccountsResponse>;
  /** Закрыть счёт. */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<CloseSandboxAccountResponse>;
  /** Выставить торговое поручение. */
  postSandboxOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** Изменить выставленную заявку. */
  replaceSandboxOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** Получить список активных заявок по счёту. */
  getSandboxOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
  /** Отменить торговое поручение. */
  cancelSandboxOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
  /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
  /** Получить позиции по виртуальному счёту. */
  getSandboxPositions(request: PositionsRequest, context: CallContext & CallContextExt): Promise<PositionsResponse>;
  /** Получить операции по номеру счёта. */
  getSandboxOperations(request: OperationsRequest, context: CallContext & CallContextExt): Promise<OperationsResponse>;
  /** Получить операции по номеру счёта с пагинацией. */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetOperationsByCursorResponse>;
  /** Получить портфель. */
  getSandboxPortfolio(request: PortfolioRequest, context: CallContext & CallContextExt): Promise<PortfolioResponse>;
  /** Пополнить счёт. */
  sandboxPayIn(request: SandboxPayInRequest, context: CallContext & CallContextExt): Promise<SandboxPayInResponse>;
  /** Получить доступный остаток для вывода средств. */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt,
  ): Promise<WithdrawLimitsResponse>;
  /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
  getSandboxMaxLots(request: GetMaxLotsRequest, context: CallContext & CallContextExt): Promise<GetMaxLotsResponse>;
}

export interface SandboxServiceClient<CallOptionsExt = {}> {
  /** Зарегистрировать счёт. */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OpenSandboxAccountResponse>;
  /** Получить счета. */
  getSandboxAccounts(request: GetAccountsRequest, options?: CallOptions & CallOptionsExt): Promise<GetAccountsResponse>;
  /** Закрыть счёт. */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CloseSandboxAccountResponse>;
  /** Выставить торговое поручение. */
  postSandboxOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** Изменить выставленную заявку. */
  replaceSandboxOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** Получить список активных заявок по счёту. */
  getSandboxOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
  /** Отменить торговое поручение. */
  cancelSandboxOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
  /** Поулчить статус заявки в песочнице. Заявки хранятся в таблице 7 дней. */
  getSandboxOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
  /** Получить позиции по виртуальному счёту. */
  getSandboxPositions(request: PositionsRequest, options?: CallOptions & CallOptionsExt): Promise<PositionsResponse>;
  /** Получить операции по номеру счёта. */
  getSandboxOperations(request: OperationsRequest, options?: CallOptions & CallOptionsExt): Promise<OperationsResponse>;
  /** Получить операции по номеру счёта с пагинацией. */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOperationsByCursorResponse>;
  /** Получить портфель. */
  getSandboxPortfolio(request: PortfolioRequest, options?: CallOptions & CallOptionsExt): Promise<PortfolioResponse>;
  /** Пополнить счёт. */
  sandboxPayIn(request: SandboxPayInRequest, options?: CallOptions & CallOptionsExt): Promise<SandboxPayInResponse>;
  /** Получить доступный остаток для вывода средств. */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<WithdrawLimitsResponse>;
  /** Расчёт количества доступных для покупки/продажи лотов в песочнице. */
  getSandboxMaxLots(request: GetMaxLotsRequest, options?: CallOptions & CallOptionsExt): Promise<GetMaxLotsResponse>;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
