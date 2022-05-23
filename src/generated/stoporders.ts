/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Quotation, MoneyValue } from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
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

export function stopOrderExpirationTypeFromJSON(
  object: any
): StopOrderExpirationType {
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

export function stopOrderExpirationTypeToJSON(
  object: StopOrderExpirationType
): string {
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
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Количество лотов. */
  quantity: number;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?: Quotation;
  /** Стоп-цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  stopPrice?: Quotation;
  /** Направление операции. */
  direction: StopOrderDirection;
  /** Номер счёта. */
  accountId: string;
  /** Тип экспирации заявки. */
  expirationType: StopOrderExpirationType;
  /** Тип заявки. */
  stopOrderType: StopOrderType;
  /** Дата и время окончания действия стоп-заявки в часовом поясе UTC. **Для ExpirationType = GoodTillDate заполнение обязательно**. */
  expireDate?: Date;
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
  time?: Date;
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
  createDate?: Date;
  /** Дата и время конвертации стоп-заявки в биржевую в часовом поясе UTC. */
  activationDateTime?: Date;
  /** Дата и время снятия заявки в часовом поясе UTC. */
  expirationTime?: Date;
  /** Цена заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?: MoneyValue;
  /** Цена активации стоп-заявки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  stopPrice?: MoneyValue;
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
  };
}

export const PostStopOrderRequest = {
  encode(
    message: PostStopOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.expireDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PostStopOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostStopOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.price = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.stopPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.direction = reader.int32() as any;
          break;
        case 6:
          message.accountId = reader.string();
          break;
        case 7:
          message.expirationType = reader.int32() as any;
          break;
        case 8:
          message.stopOrderType = reader.int32() as any;
          break;
        case 9:
          message.expireDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostStopOrderRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      stopPrice: isSet(object.stopPrice)
        ? Quotation.fromJSON(object.stopPrice)
        : undefined,
      direction: isSet(object.direction)
        ? stopOrderDirectionFromJSON(object.direction)
        : 0,
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      expirationType: isSet(object.expirationType)
        ? stopOrderExpirationTypeFromJSON(object.expirationType)
        : 0,
      stopOrderType: isSet(object.stopOrderType)
        ? stopOrderTypeFromJSON(object.stopOrderType)
        : 0,
      expireDate: isSet(object.expireDate)
        ? fromJsonTimestamp(object.expireDate)
        : undefined,
    };
  },

  toJSON(message: PostStopOrderRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.price !== undefined &&
      (obj.price = message.price ? Quotation.toJSON(message.price) : undefined);
    message.stopPrice !== undefined &&
      (obj.stopPrice = message.stopPrice
        ? Quotation.toJSON(message.stopPrice)
        : undefined);
    message.direction !== undefined &&
      (obj.direction = stopOrderDirectionToJSON(message.direction));
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.expirationType !== undefined &&
      (obj.expirationType = stopOrderExpirationTypeToJSON(
        message.expirationType
      ));
    message.stopOrderType !== undefined &&
      (obj.stopOrderType = stopOrderTypeToJSON(message.stopOrderType));
    message.expireDate !== undefined &&
      (obj.expireDate = message.expireDate.toISOString());
    return obj;
  },
};

function createBasePostStopOrderResponse(): PostStopOrderResponse {
  return { stopOrderId: "" };
}

export const PostStopOrderResponse = {
  encode(
    message: PostStopOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stopOrderId !== "") {
      writer.uint32(10).string(message.stopOrderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PostStopOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostStopOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stopOrderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PostStopOrderResponse {
    return {
      stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
    };
  },

  toJSON(message: PostStopOrderResponse): unknown {
    const obj: any = {};
    message.stopOrderId !== undefined &&
      (obj.stopOrderId = message.stopOrderId);
    return obj;
  },
};

function createBaseGetStopOrdersRequest(): GetStopOrdersRequest {
  return { accountId: "" };
}

export const GetStopOrdersRequest = {
  encode(
    message: GetStopOrdersRequest,
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
  ): GetStopOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStopOrdersRequest();
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

  fromJSON(object: any): GetStopOrdersRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: GetStopOrdersRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },
};

function createBaseGetStopOrdersResponse(): GetStopOrdersResponse {
  return { stopOrders: [] };
}

export const GetStopOrdersResponse = {
  encode(
    message: GetStopOrdersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stopOrders) {
      StopOrder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetStopOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetStopOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stopOrders.push(StopOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetStopOrdersResponse {
    return {
      stopOrders: Array.isArray(object?.stopOrders)
        ? object.stopOrders.map((e: any) => StopOrder.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetStopOrdersResponse): unknown {
    const obj: any = {};
    if (message.stopOrders) {
      obj.stopOrders = message.stopOrders.map((e) =>
        e ? StopOrder.toJSON(e) : undefined
      );
    } else {
      obj.stopOrders = [];
    }
    return obj;
  },
};

function createBaseCancelStopOrderRequest(): CancelStopOrderRequest {
  return { accountId: "", stopOrderId: "" };
}

export const CancelStopOrderRequest = {
  encode(
    message: CancelStopOrderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.stopOrderId !== "") {
      writer.uint32(18).string(message.stopOrderId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelStopOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelStopOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.stopOrderId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelStopOrderRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
    };
  },

  toJSON(message: CancelStopOrderRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.stopOrderId !== undefined &&
      (obj.stopOrderId = message.stopOrderId);
    return obj;
  },
};

function createBaseCancelStopOrderResponse(): CancelStopOrderResponse {
  return { time: undefined };
}

export const CancelStopOrderResponse = {
  encode(
    message: CancelStopOrderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelStopOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelStopOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelStopOrderResponse {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: CancelStopOrderResponse): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = message.time.toISOString());
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
  };
}

export const StopOrder = {
  encode(
    message: StopOrder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.createDate),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.activationDateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.activationDateTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.expirationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expirationTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(82).fork()).ldelim();
    }
    if (message.stopPrice !== undefined) {
      MoneyValue.encode(message.stopPrice, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stopOrderId = reader.string();
          break;
        case 2:
          message.lotsRequested = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.figi = reader.string();
          break;
        case 4:
          message.direction = reader.int32() as any;
          break;
        case 5:
          message.currency = reader.string();
          break;
        case 6:
          message.orderType = reader.int32() as any;
          break;
        case 7:
          message.createDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.activationDateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.expirationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 11:
          message.stopPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StopOrder {
    return {
      stopOrderId: isSet(object.stopOrderId) ? String(object.stopOrderId) : "",
      lotsRequested: isSet(object.lotsRequested)
        ? Number(object.lotsRequested)
        : 0,
      figi: isSet(object.figi) ? String(object.figi) : "",
      direction: isSet(object.direction)
        ? stopOrderDirectionFromJSON(object.direction)
        : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      orderType: isSet(object.orderType)
        ? stopOrderTypeFromJSON(object.orderType)
        : 0,
      createDate: isSet(object.createDate)
        ? fromJsonTimestamp(object.createDate)
        : undefined,
      activationDateTime: isSet(object.activationDateTime)
        ? fromJsonTimestamp(object.activationDateTime)
        : undefined,
      expirationTime: isSet(object.expirationTime)
        ? fromJsonTimestamp(object.expirationTime)
        : undefined,
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
      stopPrice: isSet(object.stopPrice)
        ? MoneyValue.fromJSON(object.stopPrice)
        : undefined,
    };
  },

  toJSON(message: StopOrder): unknown {
    const obj: any = {};
    message.stopOrderId !== undefined &&
      (obj.stopOrderId = message.stopOrderId);
    message.lotsRequested !== undefined &&
      (obj.lotsRequested = Math.round(message.lotsRequested));
    message.figi !== undefined && (obj.figi = message.figi);
    message.direction !== undefined &&
      (obj.direction = stopOrderDirectionToJSON(message.direction));
    message.currency !== undefined && (obj.currency = message.currency);
    message.orderType !== undefined &&
      (obj.orderType = stopOrderTypeToJSON(message.orderType));
    message.createDate !== undefined &&
      (obj.createDate = message.createDate.toISOString());
    message.activationDateTime !== undefined &&
      (obj.activationDateTime = message.activationDateTime.toISOString());
    message.expirationTime !== undefined &&
      (obj.expirationTime = message.expirationTime.toISOString());
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    message.stopPrice !== undefined &&
      (obj.stopPrice = message.stopPrice
        ? MoneyValue.toJSON(message.stopPrice)
        : undefined);
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

export interface StopOrdersServiceServiceImplementation<CallContextExt = {}> {
  /** Метод выставления стоп-заявки. */
  postStopOrder(
    request: PostStopOrderRequest,
    context: CallContext & CallContextExt
  ): Promise<PostStopOrderResponse>;
  /** Метод получения списка активных стоп заявок по счёту. */
  getStopOrders(
    request: GetStopOrdersRequest,
    context: CallContext & CallContextExt
  ): Promise<GetStopOrdersResponse>;
  /** Метод отмены стоп-заявки. */
  cancelStopOrder(
    request: CancelStopOrderRequest,
    context: CallContext & CallContextExt
  ): Promise<CancelStopOrderResponse>;
}

export interface StopOrdersServiceClient<CallOptionsExt = {}> {
  /** Метод выставления стоп-заявки. */
  postStopOrder(
    request: PostStopOrderRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PostStopOrderResponse>;
  /** Метод получения списка активных стоп заявок по счёту. */
  getStopOrders(
    request: GetStopOrdersRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetStopOrdersResponse>;
  /** Метод отмены стоп-заявки. */
  cancelStopOrder(
    request: CancelStopOrderRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<CancelStopOrderResponse>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
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
