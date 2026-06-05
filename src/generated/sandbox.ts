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
  GetOrderPriceRequest,
  GetOrderPriceResponse,
  GetOrdersRequest,
  GetOrdersResponse,
  GetOrderStateRequest,
  OrderState,
  PostOrderAsyncRequest,
  PostOrderAsyncResponse,
  PostOrderRequest,
  PostOrderResponse,
  ReplaceOrderRequest,
} from "./orders.js";
import {
  CancelStopOrderRequest,
  CancelStopOrderResponse,
  GetStopOrdersRequest,
  GetStopOrdersResponse,
  PostStopOrderRequest,
  PostStopOrderResponse,
} from "./stoporders.js";
import { GetAccountsRequest, GetAccountsResponse } from "./users.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Запрос открытия счета в песочнице. */
export interface OpenSandboxAccountRequest {
  /** Название счета */
  name?: string | undefined;
}

/** Номер открытого счета в песочнице. */
export interface OpenSandboxAccountResponse {
  /** Номер счета */
  accountId: string;
}

/** Запрос закрытия счета в песочнице. */
export interface CloseSandboxAccountRequest {
  /** Номер счета */
  accountId: string;
}

/** Результат закрытия счета в песочнице. */
export interface CloseSandboxAccountResponse {
}

/** Запрос пополнения счета в песочнице. */
export interface SandboxPayInRequest {
  /** Номер счета */
  accountId: string;
  /** Сумма пополнения счета в рублях */
  amount?: MoneyValue | undefined;
}

/** Результат пополнения счета, текущий баланс. */
export interface SandboxPayInResponse {
  /** Текущий баланс счета */
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
    /** OpenSandboxAccount — зарегистрировать счет */
    openSandboxAccount: {
      name: "OpenSandboxAccount",
      requestType: OpenSandboxAccountRequest,
      requestStream: false,
      responseType: OpenSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxAccounts — счета пользователя */
    getSandboxAccounts: {
      name: "GetSandboxAccounts",
      requestType: GetAccountsRequest,
      requestStream: false,
      responseType: GetAccountsResponse,
      responseStream: false,
      options: {},
    },
    /** CloseSandboxAccount — закрыть счет */
    closeSandboxAccount: {
      name: "CloseSandboxAccount",
      requestType: CloseSandboxAccountRequest,
      requestStream: false,
      responseType: CloseSandboxAccountResponse,
      responseStream: false,
      options: {},
    },
    /** PostSandboxOrder — выставить заявку */
    postSandboxOrder: {
      name: "PostSandboxOrder",
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /**
     * PostSandboxOrderAsync — выставить заявку асинхронным методом
     * Особенности работы приведены в [статье](/invest/services/orders/async).
     */
    postSandboxOrderAsync: {
      name: "PostSandboxOrderAsync",
      requestType: PostOrderAsyncRequest,
      requestStream: false,
      responseType: PostOrderAsyncResponse,
      responseStream: false,
      options: {},
    },
    /** ReplaceSandboxOrder — изменить выставленную заявку */
    replaceSandboxOrder: {
      name: "ReplaceSandboxOrder",
      requestType: ReplaceOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxOrders — получить список активных заявок по счету */
    getSandboxOrders: {
      name: "GetSandboxOrders",
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** CancelSandboxOrder — отменить заявку */
    cancelSandboxOrder: {
      name: "CancelSandboxOrder",
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxOrderState — получить статус торгового поручения */
    getSandboxOrderState: {
      name: "GetSandboxOrderState",
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** GetSandboxOrderPrice — получить предварительную стоимость для лимитной заявки */
    getSandboxOrderPrice: {
      name: "GetSandboxOrderPrice",
      requestType: GetOrderPriceRequest,
      requestStream: false,
      responseType: GetOrderPriceResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxPositions — список позиций по счету */
    getSandboxPositions: {
      name: "GetSandboxPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetSandboxOperations — список операций по счету
     * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
     */
    getSandboxOperations: {
      name: "GetSandboxOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /**
     * GetSandboxOperationsByCursor — список операций по счету с пагинацией
     * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
     */
    getSandboxOperationsByCursor: {
      name: "GetSandboxOperationsByCursor",
      requestType: GetOperationsByCursorRequest,
      requestStream: false,
      responseType: GetOperationsByCursorResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxPortfolio — портфель по счету */
    getSandboxPortfolio: {
      name: "GetSandboxPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** SandboxPayIn — пополнить счет. */
    sandboxPayIn: {
      name: "SandboxPayIn",
      requestType: SandboxPayInRequest,
      requestStream: false,
      responseType: SandboxPayInResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxWithdrawLimits — доступный остаток для вывода средств */
    getSandboxWithdrawLimits: {
      name: "GetSandboxWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxMaxLots — расчет количества доступных для покупки/продажи лотов */
    getSandboxMaxLots: {
      name: "GetSandboxMaxLots",
      requestType: GetMaxLotsRequest,
      requestStream: false,
      responseType: GetMaxLotsResponse,
      responseStream: false,
      options: {},
    },
    /** PostSandboxStopOrder — выставить стоп-заявку */
    postSandboxStopOrder: {
      name: "PostSandboxStopOrder",
      requestType: PostStopOrderRequest,
      requestStream: false,
      responseType: PostStopOrderResponse,
      responseStream: false,
      options: {},
    },
    /** GetSandboxStopOrders — получить список активных стоп-заявок по счету */
    getSandboxStopOrders: {
      name: "GetSandboxStopOrders",
      requestType: GetStopOrdersRequest,
      requestStream: false,
      responseType: GetStopOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** CancelSandboxStopOrder — отменить стоп-заявку */
    cancelSandboxStopOrder: {
      name: "CancelSandboxStopOrder",
      requestType: CancelStopOrderRequest,
      requestStream: false,
      responseType: CancelStopOrderResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface SandboxServiceImplementation<CallContextExt = {}> {
  /** OpenSandboxAccount — зарегистрировать счет */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<OpenSandboxAccountResponse>;
  /** GetSandboxAccounts — счета пользователя */
  getSandboxAccounts(request: GetAccountsRequest, context: CallContext & CallContextExt): Promise<GetAccountsResponse>;
  /** CloseSandboxAccount — закрыть счет */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    context: CallContext & CallContextExt,
  ): Promise<CloseSandboxAccountResponse>;
  /** PostSandboxOrder — выставить заявку */
  postSandboxOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /**
   * PostSandboxOrderAsync — выставить заявку асинхронным методом
   * Особенности работы приведены в [статье](/invest/services/orders/async).
   */
  postSandboxOrderAsync(
    request: PostOrderAsyncRequest,
    context: CallContext & CallContextExt,
  ): Promise<PostOrderAsyncResponse>;
  /** ReplaceSandboxOrder — изменить выставленную заявку */
  replaceSandboxOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** GetSandboxOrders — получить список активных заявок по счету */
  getSandboxOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
  /** CancelSandboxOrder — отменить заявку */
  cancelSandboxOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
  /** GetSandboxOrderState — получить статус торгового поручения */
  getSandboxOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
  /** GetSandboxOrderPrice — получить предварительную стоимость для лимитной заявки */
  getSandboxOrderPrice(
    request: GetOrderPriceRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetOrderPriceResponse>;
  /** GetSandboxPositions — список позиций по счету */
  getSandboxPositions(request: PositionsRequest, context: CallContext & CallContextExt): Promise<PositionsResponse>;
  /**
   * GetSandboxOperations — список операций по счету
   * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
   */
  getSandboxOperations(request: OperationsRequest, context: CallContext & CallContextExt): Promise<OperationsResponse>;
  /**
   * GetSandboxOperationsByCursor — список операций по счету с пагинацией
   * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
   */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetOperationsByCursorResponse>;
  /** GetSandboxPortfolio — портфель по счету */
  getSandboxPortfolio(request: PortfolioRequest, context: CallContext & CallContextExt): Promise<PortfolioResponse>;
  /** SandboxPayIn — пополнить счет. */
  sandboxPayIn(request: SandboxPayInRequest, context: CallContext & CallContextExt): Promise<SandboxPayInResponse>;
  /** GetSandboxWithdrawLimits — доступный остаток для вывода средств */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt,
  ): Promise<WithdrawLimitsResponse>;
  /** GetSandboxMaxLots — расчет количества доступных для покупки/продажи лотов */
  getSandboxMaxLots(request: GetMaxLotsRequest, context: CallContext & CallContextExt): Promise<GetMaxLotsResponse>;
  /** PostSandboxStopOrder — выставить стоп-заявку */
  postSandboxStopOrder(
    request: PostStopOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<PostStopOrderResponse>;
  /** GetSandboxStopOrders — получить список активных стоп-заявок по счету */
  getSandboxStopOrders(
    request: GetStopOrdersRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetStopOrdersResponse>;
  /** CancelSandboxStopOrder — отменить стоп-заявку */
  cancelSandboxStopOrder(
    request: CancelStopOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<CancelStopOrderResponse>;
}

export interface SandboxServiceClient<CallOptionsExt = {}> {
  /** OpenSandboxAccount — зарегистрировать счет */
  openSandboxAccount(
    request: OpenSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<OpenSandboxAccountResponse>;
  /** GetSandboxAccounts — счета пользователя */
  getSandboxAccounts(request: GetAccountsRequest, options?: CallOptions & CallOptionsExt): Promise<GetAccountsResponse>;
  /** CloseSandboxAccount — закрыть счет */
  closeSandboxAccount(
    request: CloseSandboxAccountRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CloseSandboxAccountResponse>;
  /** PostSandboxOrder — выставить заявку */
  postSandboxOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /**
   * PostSandboxOrderAsync — выставить заявку асинхронным методом
   * Особенности работы приведены в [статье](/invest/services/orders/async).
   */
  postSandboxOrderAsync(
    request: PostOrderAsyncRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PostOrderAsyncResponse>;
  /** ReplaceSandboxOrder — изменить выставленную заявку */
  replaceSandboxOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** GetSandboxOrders — получить список активных заявок по счету */
  getSandboxOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
  /** CancelSandboxOrder — отменить заявку */
  cancelSandboxOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
  /** GetSandboxOrderState — получить статус торгового поручения */
  getSandboxOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
  /** GetSandboxOrderPrice — получить предварительную стоимость для лимитной заявки */
  getSandboxOrderPrice(
    request: GetOrderPriceRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOrderPriceResponse>;
  /** GetSandboxPositions — список позиций по счету */
  getSandboxPositions(request: PositionsRequest, options?: CallOptions & CallOptionsExt): Promise<PositionsResponse>;
  /**
   * GetSandboxOperations — список операций по счету
   * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
   */
  getSandboxOperations(request: OperationsRequest, options?: CallOptions & CallOptionsExt): Promise<OperationsResponse>;
  /**
   * GetSandboxOperationsByCursor — список операций по счету с пагинацией
   * При работе с методом учитывайте [особенности взаимодействия](/invest/services/operations/operations_problems).
   */
  getSandboxOperationsByCursor(
    request: GetOperationsByCursorRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOperationsByCursorResponse>;
  /** GetSandboxPortfolio — портфель по счету */
  getSandboxPortfolio(request: PortfolioRequest, options?: CallOptions & CallOptionsExt): Promise<PortfolioResponse>;
  /** SandboxPayIn — пополнить счет. */
  sandboxPayIn(request: SandboxPayInRequest, options?: CallOptions & CallOptionsExt): Promise<SandboxPayInResponse>;
  /** GetSandboxWithdrawLimits — доступный остаток для вывода средств */
  getSandboxWithdrawLimits(
    request: WithdrawLimitsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<WithdrawLimitsResponse>;
  /** GetSandboxMaxLots — расчет количества доступных для покупки/продажи лотов */
  getSandboxMaxLots(request: GetMaxLotsRequest, options?: CallOptions & CallOptionsExt): Promise<GetMaxLotsResponse>;
  /** PostSandboxStopOrder — выставить стоп-заявку */
  postSandboxStopOrder(
    request: PostStopOrderRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PostStopOrderResponse>;
  /** GetSandboxStopOrders — получить список активных стоп-заявок по счету */
  getSandboxStopOrders(
    request: GetStopOrdersRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetStopOrdersResponse>;
  /** CancelSandboxStopOrder — отменить стоп-заявку */
  cancelSandboxStopOrder(
    request: CancelStopOrderRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CancelStopOrderResponse>;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
