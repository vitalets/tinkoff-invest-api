/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue, Quotation } from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Направление сделки стоп-заявки. */
export enum StopOrderDirection {
  /** STOP_ORDER_DIRECTION_UNSPECIFIED - Значение не указано. */
  STOP_ORDER_DIRECTION_UNSPECIFIED = 0,
  /** STOP_ORDER_DIRECTION_BUY - Покупка. */
  STOP_ORDER_DIRECTION_BUY = 1,
  /** STOP_ORDER_DIRECTION_SELL - Продажа. */
  STOP_ORDER_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function stopOrderDirectionFromJSON(object: any): StopOrderDirection {
  switch (object) {
    case 0:
    case "STOP_ORDER_DIRECTION_UNSPECIFIED":
      return StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED;
    case 1:
    case "STOP_ORDER_DIRECTION_BUY":
      return StopOrderDirection.STOP_ORDER_DIRECTION_BUY;
    case 2:
    case "STOP_ORDER_DIRECTION_SELL":
      return StopOrderDirection.STOP_ORDER_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StopOrderDirection.UNRECOGNIZED;
  }
}

export function stopOrderDirectionToJSON(object: StopOrderDirection): string {
  switch (object) {
    case StopOrderDirection.STOP_ORDER_DIRECTION_UNSPECIFIED:
      return "STOP_ORDER_DIRECTION_UNSPECIFIED";
    case StopOrderDirection.STOP_ORDER_DIRECTION_BUY:
      return "STOP_ORDER_DIRECTION_BUY";
    case StopOrderDirection.STOP_ORDER_DIRECTION_SELL:
      return "STOP_ORDER_DIRECTION_SELL";
    case StopOrderDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип экспирации стоп-заявке. */
export enum StopOrderExpirationType {
  /** STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED - Значение не указано. */
  STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED = 0,
  /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL - Действительно до отмены. */
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL = 1,
  /** STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE - Действительно до даты снятия. */
  STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE = 2,
  UNRECOGNIZED = -1,
}

export function stopOrderExpirationTypeFromJSON(object: any): StopOrderExpirationType {
  switch (object) {
    case 0:
    case "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED":
      return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED;
    case 1:
    case "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL":
      return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL;
    case 2:
    case "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE":
      return StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StopOrderExpirationType.UNRECOGNIZED;
  }
}

export function stopOrderExpirationTypeToJSON(object: StopOrderExpirationType): string {
  switch (object) {
    case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED:
      return "STOP_ORDER_EXPIRATION_TYPE_UNSPECIFIED";
    case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL:
      return "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_CANCEL";
    case StopOrderExpirationType.STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE:
      return "STOP_ORDER_EXPIRATION_TYPE_GOOD_TILL_DATE";
    case StopOrderExpirationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип стоп-заявки. */
export enum StopOrderType {
  /** STOP_ORDER_TYPE_UNSPECIFIED - Значение не указано. */
  STOP_ORDER_TYPE_UNSPECIFIED = 0,
  /** STOP_ORDER_TYPE_TAKE_PROFIT - Take-profit заявка. */
  STOP_ORDER_TYPE_TAKE_PROFIT = 1,
  /** STOP_ORDER_TYPE_STOP_LOSS - Stop-loss заявка. */
  STOP_ORDER_TYPE_STOP_LOSS = 2,
  /** STOP_ORDER_TYPE_STOP_LIMIT - Stop-limit заявка. */
  STOP_ORDER_TYPE_STOP_LIMIT = 3,
  UNRECOGNIZED = -1,
}

export function stopOrderTypeFromJSON(object: any): StopOrderType {
  switch (object) {
    case 0:
    case "STOP_ORDER_TYPE_UNSPECIFIED":
      return StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED;
    case 1:
    case "STOP_ORDER_TYPE_TAKE_PROFIT":
      return StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT;
    case 2:
    case "STOP_ORDER_TYPE_STOP_LOSS":
      return StopOrderType.STOP_ORDER_TYPE_STOP_LOSS;
    case 3:
    case "STOP_ORDER_TYPE_STOP_LIMIT":
      return StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StopOrderType.UNRECOGNIZED;
  }
}

export function stopOrderTypeToJSON(object: StopOrderType): string {
  switch (object) {
    case StopOrderType.STOP_ORDER_TYPE_UNSPECIFIED:
      return "STOP_ORDER_TYPE_UNSPECIFIED";
    case StopOrderType.STOP_ORDER_TYPE_TAKE_PROFIT:
      return "STOP_ORDER_TYPE_TAKE_PROFIT";
    case StopOrderType.STOP_ORDER_TYPE_STOP_LOSS:
      return "STOP_ORDER_TYPE_STOP_LOSS";
    case StopOrderType.STOP_ORDER_TYPE_STOP_LIMIT:
      return "STOP_ORDER_TYPE_STOP_LIMIT";
    case StopOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос выставления стоп-заявки. */
export interface PostStopOrderRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Количество лотов. */
  quantity: number;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?:
    | Quotation
    | undefined;
  /** Стоп-цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  stopPrice?:
    | Quotation
    | undefined;
  /** Направление операции. */
  direction: StopOrderDirection;
  /** Номер счёта. */
  accountId: string;
  /** Тип экспирации заявки. */
  expirationType: StopOrderExpirationType;
  /** Тип заявки. */
  stopOrderType: StopOrderType;
  /** Дата и время окончания действия стоп-заявки в часовом поясе UTC. **Для ExpirationType = GoodTillDate заполнение обязательно**. */
  expireDate?:
    | Date
    | undefined;
  /** Идентификатор инструмента, принимает значения Figi или instrument_uid. */
  instrumentId: string;
}

/** Результат выставления стоп-заявки. */
export interface PostStopOrderResponse {
  /** Уникальный идентификатор стоп-заявки. */
  stopOrderId: string;
}

/** Запрос получения списка активных стоп-заявок. */
export interface GetStopOrdersRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
}

/** Список активных стоп-заявок. */
export interface GetStopOrdersResponse {
  /** Массив стоп-заявок по счёту. */
  stopOrders: StopOrder[];
}

/** Запрос отмены выставленной стоп-заявки. */
export interface CancelStopOrderRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Уникальный идентификатор стоп-заявки. */
  stopOrderId: string;
}

/** Результат отмены выставленной стоп-заявки. */
export interface CancelStopOrderResponse {
  /** Время отмены заявки в часовом поясе UTC. */
  time?: Date | undefined;
}

/** Информация о стоп-заявке. */
export interface StopOrder {
  /** Идентификатор-идентификатор стоп-заявки. */
  stopOrderId: string;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление операции. */
  direction: StopOrderDirection;
  /** Валюта стоп-заявки. */
  currency: string;
  /** Тип стоп-заявки. */
  orderType: StopOrderType;
  /** Дата и время выставления заявки в часовом поясе UTC. */
  createDate?:
    | Date
    | undefined;
  /** Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC. */
  activationDateTime?:
    | Date
    | undefined;
  /** Дата и время снятия заявки в часовом поясе UTC. */
  expirationTime?:
    | Date
    | undefined;
  /** Цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?:
    | MoneyValue
    | undefined;
  /** Цена активации стоп-заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  stopPrice?:
    | MoneyValue
    | undefined;
  /** instrument_uid идентификатор инструмента. */
  instrumentUid: string;
}

function createBasePostStopOrderRequest(): PostStopOrderRequest {
  return {
    figi: "",
    quantity: 0,
    price: undefined,
    stopPrice: undefined,
    direction: 0,
    accountId: "",
    expirationType: 0,
    stopOrderType: 0,
    expireDate: undefined,
    instrumentId: "",
  };
}

export const PostStopOrderRequest = {
  encode(message: PostStopOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.stopPrice !== undefined) {
      Quotation.encode(message.stopPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(40).int32(message.direction);
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    if (message.expirationType !== 0) {
      writer.uint32(56).int32(message.expirationType);
    }
    if (message.stopOrderType !== 0) {
      writer.uint32(64).int32(message.stopOrderType);
    }
    if (message.expireDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expireDate), writer.uint32(74).fork()).ldelim();
    }
    if (message.instrumentId !== "") {
      writer.uint32(82).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostStopOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.stopPrice = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.expirationType = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.stopOrderType = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.expireDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.instrumentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostStopOrderRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      stopPrice: isSet(object.stopPrice) ? Quotation.fromJSON(object.stopPrice) : undefined,
      direction: isSet(object.direction) ? stopOrderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      expirationType: isSet(object.expirationType) ? stopOrderExpirationTypeFromJSON(object.expirationType) : 0,
      stopOrderType: isSet(object.stopOrderType) ? stopOrderTypeFromJSON(object.stopOrderType) : 0,
      expireDate: isSet(object.expireDate) ? fromJsonTimestamp(object.expireDate) : undefined,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: PostStopOrderRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.stopPrice !== undefined) {
      obj.stopPrice = Quotation.toJSON(message.stopPrice);
    }
    if (message.direction !== 0) {
      obj.direction = stopOrderDirectionToJSON(message.direction);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.expirationType !== 0) {
      obj.expirationType = stopOrderExpirationTypeToJSON(message.expirationType);
    }
    if (message.stopOrderType !== 0) {
      obj.stopOrderType = stopOrderTypeToJSON(message.stopOrderType);
    }
    if (message.expireDate !== undefined) {
      obj.expireDate = message.expireDate.toISOString();
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBasePostStopOrderResponse(): PostStopOrderResponse {
  return { stopOrderId: "" };
}

export const PostStopOrderResponse = {
  encode(message: PostStopOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stopOrderId !== "") {
      writer.uint32(10).string(message.stopOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostStopOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stopOrderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostStopOrderResponse {
    return { stopOrderId: isSet(object.stopOrderId) ? globalThis.String(object.stopOrderId) : "" };
  },

  toJSON(message: PostStopOrderResponse): unknown {
    const obj: any = {};
    if (message.stopOrderId !== "") {
      obj.stopOrderId = message.stopOrderId;
    }
    return obj;
  },
};

function createBaseGetStopOrdersRequest(): GetStopOrdersRequest {
  return { accountId: "" };
}

export const GetStopOrdersRequest = {
  encode(message: GetStopOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStopOrdersRequest();
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

  fromJSON(object: any): GetStopOrdersRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: GetStopOrdersRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseGetStopOrdersResponse(): GetStopOrdersResponse {
  return { stopOrders: [] };
}

export const GetStopOrdersResponse = {
  encode(message: GetStopOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.stopOrders) {
      StopOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetStopOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStopOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stopOrders.push(StopOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetStopOrdersResponse {
    return {
      stopOrders: globalThis.Array.isArray(object?.stopOrders)
        ? object.stopOrders.map((e: any) => StopOrder.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStopOrdersResponse): unknown {
    const obj: any = {};
    if (message.stopOrders?.length) {
      obj.stopOrders = message.stopOrders.map((e) => StopOrder.toJSON(e));
    }
    return obj;
  },
};

function createBaseCancelStopOrderRequest(): CancelStopOrderRequest {
  return { accountId: "", stopOrderId: "" };
}

export const CancelStopOrderRequest = {
  encode(message: CancelStopOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.stopOrderId !== "") {
      writer.uint32(18).string(message.stopOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelStopOrderRequest();
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

          message.stopOrderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelStopOrderRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      stopOrderId: isSet(object.stopOrderId) ? globalThis.String(object.stopOrderId) : "",
    };
  },

  toJSON(message: CancelStopOrderRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.stopOrderId !== "") {
      obj.stopOrderId = message.stopOrderId;
    }
    return obj;
  },
};

function createBaseCancelStopOrderResponse(): CancelStopOrderResponse {
  return { time: undefined };
}

export const CancelStopOrderResponse = {
  encode(message: CancelStopOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelStopOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelStopOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelStopOrderResponse {
    return { time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined };
  },

  toJSON(message: CancelStopOrderResponse): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    return obj;
  },
};

function createBaseStopOrder(): StopOrder {
  return {
    stopOrderId: "",
    lotsRequested: 0,
    figi: "",
    direction: 0,
    currency: "",
    orderType: 0,
    createDate: undefined,
    activationDateTime: undefined,
    expirationTime: undefined,
    price: undefined,
    stopPrice: undefined,
    instrumentUid: "",
  };
}

export const StopOrder = {
  encode(message: StopOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stopOrderId !== "") {
      writer.uint32(10).string(message.stopOrderId);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(16).int64(message.lotsRequested);
    }
    if (message.figi !== "") {
      writer.uint32(26).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.currency !== "") {
      writer.uint32(42).string(message.currency);
    }
    if (message.orderType !== 0) {
      writer.uint32(48).int32(message.orderType);
    }
    if (message.createDate !== undefined) {
      Timestamp.encode(toTimestamp(message.createDate), writer.uint32(58).fork()).ldelim();
    }
    if (message.activationDateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.activationDateTime), writer.uint32(66).fork()).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(toTimestamp(message.expirationTime), writer.uint32(74).fork()).ldelim();
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(82).fork()).ldelim();
    }
    if (message.stopPrice !== undefined) {
      MoneyValue.encode(message.stopPrice, writer.uint32(90).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(98).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.stopOrderId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.lotsRequested = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.createDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.activationDateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.expirationTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.stopPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopOrder {
    return {
      stopOrderId: isSet(object.stopOrderId) ? globalThis.String(object.stopOrderId) : "",
      lotsRequested: isSet(object.lotsRequested) ? globalThis.Number(object.lotsRequested) : 0,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      direction: isSet(object.direction) ? stopOrderDirectionFromJSON(object.direction) : 0,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      orderType: isSet(object.orderType) ? stopOrderTypeFromJSON(object.orderType) : 0,
      createDate: isSet(object.createDate) ? fromJsonTimestamp(object.createDate) : undefined,
      activationDateTime: isSet(object.activationDateTime) ? fromJsonTimestamp(object.activationDateTime) : undefined,
      expirationTime: isSet(object.expirationTime) ? fromJsonTimestamp(object.expirationTime) : undefined,
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      stopPrice: isSet(object.stopPrice) ? MoneyValue.fromJSON(object.stopPrice) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: StopOrder): unknown {
    const obj: any = {};
    if (message.stopOrderId !== "") {
      obj.stopOrderId = message.stopOrderId;
    }
    if (message.lotsRequested !== 0) {
      obj.lotsRequested = Math.round(message.lotsRequested);
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.direction !== 0) {
      obj.direction = stopOrderDirectionToJSON(message.direction);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.orderType !== 0) {
      obj.orderType = stopOrderTypeToJSON(message.orderType);
    }
    if (message.createDate !== undefined) {
      obj.createDate = message.createDate.toISOString();
    }
    if (message.activationDateTime !== undefined) {
      obj.activationDateTime = message.activationDateTime.toISOString();
    }
    if (message.expirationTime !== undefined) {
      obj.expirationTime = message.expirationTime.toISOString();
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.stopPrice !== undefined) {
      obj.stopPrice = MoneyValue.toJSON(message.stopPrice);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

/**
 * Сервис предназначен для работы со стоп-заявками:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение списка стоп-заявок.
 */
export type StopOrdersServiceDefinition = typeof StopOrdersServiceDefinition;
export const StopOrdersServiceDefinition = {
  name: "StopOrdersService",
  fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService",
  methods: {
    /** Метод выставления стоп-заявки. */
    postStopOrder: {
      name: "PostStopOrder",
      requestType: PostStopOrderRequest,
      requestStream: false,
      responseType: PostStopOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активных стоп заявок по счёту. */
    getStopOrders: {
      name: "GetStopOrders",
      requestType: GetStopOrdersRequest,
      requestStream: false,
      responseType: GetStopOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Метод отмены стоп-заявки. */
    cancelStopOrder: {
      name: "CancelStopOrder",
      requestType: CancelStopOrderRequest,
      requestStream: false,
      responseType: CancelStopOrderResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface StopOrdersServiceImplementation<CallContextExt = {}> {
  /** Метод выставления стоп-заявки. */
  postStopOrder(request: PostStopOrderRequest, context: CallContext & CallContextExt): Promise<PostStopOrderResponse>;
  /** Метод получения списка активных стоп заявок по счёту. */
  getStopOrders(request: GetStopOrdersRequest, context: CallContext & CallContextExt): Promise<GetStopOrdersResponse>;
  /** Метод отмены стоп-заявки. */
  cancelStopOrder(
    request: CancelStopOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<CancelStopOrderResponse>;
}

export interface StopOrdersServiceClient<CallOptionsExt = {}> {
  /** Метод выставления стоп-заявки. */
  postStopOrder(request: PostStopOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostStopOrderResponse>;
  /** Метод получения списка активных стоп заявок по счёту. */
  getStopOrders(request: GetStopOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetStopOrdersResponse>;
  /** Метод отмены стоп-заявки. */
  cancelStopOrder(
    request: CancelStopOrderRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CancelStopOrderResponse>;
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
