/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue, Ping, Quotation } from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Направление операции. */
export enum OrderDirection {
  /** ORDER_DIRECTION_UNSPECIFIED - Значение не указано */
  ORDER_DIRECTION_UNSPECIFIED = 0,
  /** ORDER_DIRECTION_BUY - Покупка */
  ORDER_DIRECTION_BUY = 1,
  /** ORDER_DIRECTION_SELL - Продажа */
  ORDER_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function orderDirectionFromJSON(object: any): OrderDirection {
  switch (object) {
    case 0:
    case "ORDER_DIRECTION_UNSPECIFIED":
      return OrderDirection.ORDER_DIRECTION_UNSPECIFIED;
    case 1:
    case "ORDER_DIRECTION_BUY":
      return OrderDirection.ORDER_DIRECTION_BUY;
    case 2:
    case "ORDER_DIRECTION_SELL":
      return OrderDirection.ORDER_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderDirection.UNRECOGNIZED;
  }
}

export function orderDirectionToJSON(object: OrderDirection): string {
  switch (object) {
    case OrderDirection.ORDER_DIRECTION_UNSPECIFIED:
      return "ORDER_DIRECTION_UNSPECIFIED";
    case OrderDirection.ORDER_DIRECTION_BUY:
      return "ORDER_DIRECTION_BUY";
    case OrderDirection.ORDER_DIRECTION_SELL:
      return "ORDER_DIRECTION_SELL";
    case OrderDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип заявки. */
export enum OrderType {
  /** ORDER_TYPE_UNSPECIFIED - Значение не указано */
  ORDER_TYPE_UNSPECIFIED = 0,
  /** ORDER_TYPE_LIMIT - Лимитная */
  ORDER_TYPE_LIMIT = 1,
  /** ORDER_TYPE_MARKET - Рыночная */
  ORDER_TYPE_MARKET = 2,
  /** ORDER_TYPE_BESTPRICE - Лучшая цена */
  ORDER_TYPE_BESTPRICE = 3,
  UNRECOGNIZED = -1,
}

export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "ORDER_TYPE_UNSPECIFIED":
      return OrderType.ORDER_TYPE_UNSPECIFIED;
    case 1:
    case "ORDER_TYPE_LIMIT":
      return OrderType.ORDER_TYPE_LIMIT;
    case 2:
    case "ORDER_TYPE_MARKET":
      return OrderType.ORDER_TYPE_MARKET;
    case 3:
    case "ORDER_TYPE_BESTPRICE":
      return OrderType.ORDER_TYPE_BESTPRICE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}

export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.ORDER_TYPE_UNSPECIFIED:
      return "ORDER_TYPE_UNSPECIFIED";
    case OrderType.ORDER_TYPE_LIMIT:
      return "ORDER_TYPE_LIMIT";
    case OrderType.ORDER_TYPE_MARKET:
      return "ORDER_TYPE_MARKET";
    case OrderType.ORDER_TYPE_BESTPRICE:
      return "ORDER_TYPE_BESTPRICE";
    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Текущий статус заявки (поручения) */
export enum OrderExecutionReportStatus {
  EXECUTION_REPORT_STATUS_UNSPECIFIED = 0,
  /** EXECUTION_REPORT_STATUS_FILL - Исполнена */
  EXECUTION_REPORT_STATUS_FILL = 1,
  /** EXECUTION_REPORT_STATUS_REJECTED - Отклонена */
  EXECUTION_REPORT_STATUS_REJECTED = 2,
  /** EXECUTION_REPORT_STATUS_CANCELLED - Отменена пользователем */
  EXECUTION_REPORT_STATUS_CANCELLED = 3,
  /** EXECUTION_REPORT_STATUS_NEW - Новая */
  EXECUTION_REPORT_STATUS_NEW = 4,
  /** EXECUTION_REPORT_STATUS_PARTIALLYFILL - Частично исполнена */
  EXECUTION_REPORT_STATUS_PARTIALLYFILL = 5,
  UNRECOGNIZED = -1,
}

export function orderExecutionReportStatusFromJSON(object: any): OrderExecutionReportStatus {
  switch (object) {
    case 0:
    case "EXECUTION_REPORT_STATUS_UNSPECIFIED":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED;
    case 1:
    case "EXECUTION_REPORT_STATUS_FILL":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL;
    case 2:
    case "EXECUTION_REPORT_STATUS_REJECTED":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED;
    case 3:
    case "EXECUTION_REPORT_STATUS_CANCELLED":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED;
    case 4:
    case "EXECUTION_REPORT_STATUS_NEW":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW;
    case 5:
    case "EXECUTION_REPORT_STATUS_PARTIALLYFILL":
      return OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderExecutionReportStatus.UNRECOGNIZED;
  }
}

export function orderExecutionReportStatusToJSON(object: OrderExecutionReportStatus): string {
  switch (object) {
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_UNSPECIFIED:
      return "EXECUTION_REPORT_STATUS_UNSPECIFIED";
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL:
      return "EXECUTION_REPORT_STATUS_FILL";
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_REJECTED:
      return "EXECUTION_REPORT_STATUS_REJECTED";
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_CANCELLED:
      return "EXECUTION_REPORT_STATUS_CANCELLED";
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW:
      return "EXECUTION_REPORT_STATUS_NEW";
    case OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_PARTIALLYFILL:
      return "EXECUTION_REPORT_STATUS_PARTIALLYFILL";
    case OrderExecutionReportStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип цены. */
export enum PriceType {
  /** PRICE_TYPE_UNSPECIFIED - Значение не определено. */
  PRICE_TYPE_UNSPECIFIED = 0,
  /** PRICE_TYPE_POINT - Цена в пунктах (только для фьючерсов и облигаций). */
  PRICE_TYPE_POINT = 1,
  /** PRICE_TYPE_CURRENCY - Цена в валюте расчётов по инструменту. */
  PRICE_TYPE_CURRENCY = 2,
  UNRECOGNIZED = -1,
}

export function priceTypeFromJSON(object: any): PriceType {
  switch (object) {
    case 0:
    case "PRICE_TYPE_UNSPECIFIED":
      return PriceType.PRICE_TYPE_UNSPECIFIED;
    case 1:
    case "PRICE_TYPE_POINT":
      return PriceType.PRICE_TYPE_POINT;
    case 2:
    case "PRICE_TYPE_CURRENCY":
      return PriceType.PRICE_TYPE_CURRENCY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PriceType.UNRECOGNIZED;
  }
}

export function priceTypeToJSON(object: PriceType): string {
  switch (object) {
    case PriceType.PRICE_TYPE_UNSPECIFIED:
      return "PRICE_TYPE_UNSPECIFIED";
    case PriceType.PRICE_TYPE_POINT:
      return "PRICE_TYPE_POINT";
    case PriceType.PRICE_TYPE_CURRENCY:
      return "PRICE_TYPE_CURRENCY";
    case PriceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос установки соединения. */
export interface TradesStreamRequest {
  /** Идентификаторы счетов. */
  accounts: string[];
}

/** Информация о торговых поручениях. */
export interface TradesStreamResponse {
  /** Информация об исполнении торгового поручения. */
  orderTrades?:
    | OrderTrades
    | undefined;
  /** Проверка активности стрима. */
  ping?: Ping | undefined;
}

/** Информация об исполнении торгового поручения. */
export interface OrderTrades {
  /** Идентификатор торгового поручения. */
  orderId: string;
  /** Дата и время создания сообщения в часовом поясе UTC. */
  createdAt?:
    | Date
    | undefined;
  /** Направление сделки. */
  direction: OrderDirection;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Массив сделок. */
  trades: OrderTrade[];
  /** Идентификатор счёта. */
  accountId: string;
  /** UID идентификатор инструмента. */
  instrumentUid: string;
}

/** Информация о сделке. */
export interface OrderTrade {
  /** Дата и время совершения сделки в часовом поясе UTC. */
  dateTime?:
    | Date
    | undefined;
  /** Цена за 1 инструмент, по которой совершена сделка. */
  price?:
    | Quotation
    | undefined;
  /** Количество штук в сделке. */
  quantity: number;
  /** Идентификатор сделки. */
  tradeId: string;
}

/** Запрос выставления торгового поручения. */
export interface PostOrderRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Количество лотов. */
  quantity: number;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Игнорируется для рыночных поручений. */
  price?:
    | Quotation
    | undefined;
  /** Направление операции. */
  direction: OrderDirection;
  /** Номер счёта. */
  accountId: string;
  /** Тип заявки. */
  orderType: OrderType;
  /** Идентификатор запроса выставления поручения для целей идемпотентности в формате UID. Максимальная длина 36 символов. */
  orderId: string;
  /** Идентификатор инструмента, принимает значения Figi или Instrument_uid. */
  instrumentId: string;
}

/** Информация о выставлении поручения. */
export interface PostOrderResponse {
  /** Биржевой идентификатор заявки. */
  orderId: string;
  /** Текущий статус заявки. */
  executionReportStatus: OrderExecutionReportStatus;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** Исполнено лотов. */
  lotsExecuted: number;
  /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
  initialOrderPrice?:
    | MoneyValue
    | undefined;
  /** Исполненная средняя цена одного инструмента в заявке. */
  executedOrderPrice?:
    | MoneyValue
    | undefined;
  /** Итоговая стоимость заявки, включающая все комиссии. */
  totalOrderAmount?:
    | MoneyValue
    | undefined;
  /** Начальная комиссия. Комиссия рассчитанная при выставлении заявки. */
  initialCommission?:
    | MoneyValue
    | undefined;
  /** Фактическая комиссия по итогам исполнения заявки. */
  executedCommission?:
    | MoneyValue
    | undefined;
  /** Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://tinkoff.github.io/investAPI/head-orders#coupon) */
  aciValue?:
    | MoneyValue
    | undefined;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление сделки. */
  direction: OrderDirection;
  /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  initialSecurityPrice?:
    | MoneyValue
    | undefined;
  /** Тип заявки. */
  orderType: OrderType;
  /** Дополнительные данные об исполнении заявки. */
  message: string;
  /** Начальная цена заявки в пунктах (для фьючерсов). */
  initialOrderPricePt?:
    | Quotation
    | undefined;
  /** UID идентификатор инструмента. */
  instrumentUid: string;
}

/** Запрос отмены торгового поручения. */
export interface CancelOrderRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
}

/** Результат отмены торгового поручения. */
export interface CancelOrderResponse {
  /** Дата и время отмены заявки в часовом поясе UTC. */
  time?: Date | undefined;
}

/** Запрос получения статуса торгового поручения. */
export interface GetOrderStateRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
}

/** Запрос получения списка активных торговых поручений. */
export interface GetOrdersRequest {
  /** Номер счёта. */
  accountId: string;
}

/** Список активных торговых поручений. */
export interface GetOrdersResponse {
  /** Массив активных заявок. */
  orders: OrderState[];
}

/** Информация о торговом поручении. */
export interface OrderState {
  /** Биржевой идентификатор заявки. */
  orderId: string;
  /** Текущий статус заявки. */
  executionReportStatus: OrderExecutionReportStatus;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** Исполнено лотов. */
  lotsExecuted: number;
  /** Начальная цена заявки. Произведение количества запрошенных лотов на цену. */
  initialOrderPrice?:
    | MoneyValue
    | undefined;
  /** Исполненная цена заявки. Произведение средней цены покупки на количество лотов. */
  executedOrderPrice?:
    | MoneyValue
    | undefined;
  /** Итоговая стоимость заявки, включающая все комиссии. */
  totalOrderAmount?:
    | MoneyValue
    | undefined;
  /** Средняя цена позиции по сделке. */
  averagePositionPrice?:
    | MoneyValue
    | undefined;
  /** Начальная комиссия. Комиссия, рассчитанная на момент подачи заявки. */
  initialCommission?:
    | MoneyValue
    | undefined;
  /** Фактическая комиссия по итогам исполнения заявки. */
  executedCommission?:
    | MoneyValue
    | undefined;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление заявки. */
  direction: OrderDirection;
  /** Начальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  initialSecurityPrice?:
    | MoneyValue
    | undefined;
  /** Стадии выполнения заявки. */
  stages: OrderStage[];
  /** Сервисная комиссия. */
  serviceCommission?:
    | MoneyValue
    | undefined;
  /** Валюта заявки. */
  currency: string;
  /** Тип заявки. */
  orderType: OrderType;
  /** Дата и время выставления заявки в часовом поясе UTC. */
  orderDate?:
    | Date
    | undefined;
  /** UID идентификатор инструмента. */
  instrumentUid: string;
  /** Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. */
  orderRequestId: string;
}

/** Сделки в рамках торгового поручения. */
export interface OrderStage {
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?:
    | MoneyValue
    | undefined;
  /** Количество лотов. */
  quantity: number;
  /** Идентификатор сделки. */
  tradeId: string;
}

/** Запрос изменения выставленной заявки. */
export interface ReplaceOrderRequest {
  /** Номер счета. */
  accountId: string;
  /** Идентификатор заявки на бирже. */
  orderId: string;
  /** Новый идентификатор запроса выставления поручения для целей идемпотентности. Максимальная длина 36 символов. Перезатирает старый ключ. */
  idempotencyKey: string;
  /** Количество лотов. */
  quantity: number;
  /** Цена за 1 инструмент. */
  price?:
    | Quotation
    | undefined;
  /** Тип цены. */
  priceType: PriceType;
}

function createBaseTradesStreamRequest(): TradesStreamRequest {
  return { accounts: [] };
}

export const TradesStreamRequest = {
  encode(message: TradesStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradesStreamRequest {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: TradesStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    return obj;
  },
};

function createBaseTradesStreamResponse(): TradesStreamResponse {
  return { orderTrades: undefined, ping: undefined };
}

export const TradesStreamResponse = {
  encode(message: TradesStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderTrades !== undefined) {
      OrderTrades.encode(message.orderTrades, writer.uint32(10).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradesStreamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradesStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderTrades = OrderTrades.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ping = Ping.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TradesStreamResponse {
    return {
      orderTrades: isSet(object.orderTrades) ? OrderTrades.fromJSON(object.orderTrades) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
    };
  },

  toJSON(message: TradesStreamResponse): unknown {
    const obj: any = {};
    if (message.orderTrades !== undefined) {
      obj.orderTrades = OrderTrades.toJSON(message.orderTrades);
    }
    if (message.ping !== undefined) {
      obj.ping = Ping.toJSON(message.ping);
    }
    return obj;
  },
};

function createBaseOrderTrades(): OrderTrades {
  return { orderId: "", createdAt: undefined, direction: 0, figi: "", trades: [], accountId: "", instrumentUid: "" };
}

export const OrderTrades = {
  encode(message: OrderTrades, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(24).int32(message.direction);
    }
    if (message.figi !== "") {
      writer.uint32(34).string(message.figi);
    }
    for (const v of message.trades) {
      OrderTrade.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(50).string(message.accountId);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(58).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrades {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderTrades();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.trades.push(OrderTrade.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): OrderTrades {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      trades: globalThis.Array.isArray(object?.trades) ? object.trades.map((e: any) => OrderTrade.fromJSON(e)) : [],
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: OrderTrades): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.trades?.length) {
      obj.trades = message.trades.map((e) => OrderTrade.toJSON(e));
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseOrderTrade(): OrderTrade {
  return { dateTime: undefined, price: undefined, quantity: 0, tradeId: "" };
}

export const OrderTrade = {
  encode(message: OrderTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(10).fork()).ldelim();
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int64(message.quantity);
    }
    if (message.tradeId !== "") {
      writer.uint32(34).string(message.tradeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderTrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.tradeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderTrade {
    return {
      dateTime: isSet(object.dateTime) ? fromJsonTimestamp(object.dateTime) : undefined,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      tradeId: isSet(object.tradeId) ? globalThis.String(object.tradeId) : "",
    };
  },

  toJSON(message: OrderTrade): unknown {
    const obj: any = {};
    if (message.dateTime !== undefined) {
      obj.dateTime = message.dateTime.toISOString();
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    return obj;
  },
};

function createBasePostOrderRequest(): PostOrderRequest {
  return {
    figi: "",
    quantity: 0,
    price: undefined,
    direction: 0,
    accountId: "",
    orderType: 0,
    orderId: "",
    instrumentId: "",
  };
}

export const PostOrderRequest = {
  encode(message: PostOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.accountId !== "") {
      writer.uint32(42).string(message.accountId);
    }
    if (message.orderType !== 0) {
      writer.uint32(48).int32(message.orderType);
    }
    if (message.orderId !== "") {
      writer.uint32(58).string(message.orderId);
    }
    if (message.instrumentId !== "") {
      writer.uint32(66).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderRequest();
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
          if (tag !== 32) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accountId = reader.string();
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

          message.orderId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): PostOrderRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: PostOrderRequest): unknown {
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
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.orderType !== 0) {
      obj.orderType = orderTypeToJSON(message.orderType);
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBasePostOrderResponse(): PostOrderResponse {
  return {
    orderId: "",
    executionReportStatus: 0,
    lotsRequested: 0,
    lotsExecuted: 0,
    initialOrderPrice: undefined,
    executedOrderPrice: undefined,
    totalOrderAmount: undefined,
    initialCommission: undefined,
    executedCommission: undefined,
    aciValue: undefined,
    figi: "",
    direction: 0,
    initialSecurityPrice: undefined,
    orderType: 0,
    message: "",
    initialOrderPricePt: undefined,
    instrumentUid: "",
  };
}

export const PostOrderResponse = {
  encode(message: PostOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(16).int32(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(24).int64(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      writer.uint32(32).int64(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.executedOrderPrice !== undefined) {
      MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
    }
    if (message.initialCommission !== undefined) {
      MoneyValue.encode(message.initialCommission, writer.uint32(66).fork()).ldelim();
    }
    if (message.executedCommission !== undefined) {
      MoneyValue.encode(message.executedCommission, writer.uint32(74).fork()).ldelim();
    }
    if (message.aciValue !== undefined) {
      MoneyValue.encode(message.aciValue, writer.uint32(82).fork()).ldelim();
    }
    if (message.figi !== "") {
      writer.uint32(90).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
    }
    if (message.orderType !== 0) {
      writer.uint32(112).int32(message.orderType);
    }
    if (message.message !== "") {
      writer.uint32(122).string(message.message);
    }
    if (message.initialOrderPricePt !== undefined) {
      Quotation.encode(message.initialOrderPricePt, writer.uint32(130).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(138).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.executionReportStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lotsRequested = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lotsExecuted = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.executedOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.initialCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.executedCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.aciValue = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.initialSecurityPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.message = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.initialOrderPricePt = Quotation.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
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

  fromJSON(object: any): PostOrderResponse {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      lotsRequested: isSet(object.lotsRequested) ? globalThis.Number(object.lotsRequested) : 0,
      lotsExecuted: isSet(object.lotsExecuted) ? globalThis.Number(object.lotsExecuted) : 0,
      initialOrderPrice: isSet(object.initialOrderPrice) ? MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
      executedOrderPrice: isSet(object.executedOrderPrice) ? MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      initialCommission: isSet(object.initialCommission) ? MoneyValue.fromJSON(object.initialCommission) : undefined,
      executedCommission: isSet(object.executedCommission) ? MoneyValue.fromJSON(object.executedCommission) : undefined,
      aciValue: isSet(object.aciValue) ? MoneyValue.fromJSON(object.aciValue) : undefined,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      initialSecurityPrice: isSet(object.initialSecurityPrice)
        ? MoneyValue.fromJSON(object.initialSecurityPrice)
        : undefined,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      initialOrderPricePt: isSet(object.initialOrderPricePt)
        ? Quotation.fromJSON(object.initialOrderPricePt)
        : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: PostOrderResponse): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.executionReportStatus !== 0) {
      obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      obj.lotsRequested = Math.round(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      obj.lotsExecuted = Math.round(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      obj.initialOrderPrice = MoneyValue.toJSON(message.initialOrderPrice);
    }
    if (message.executedOrderPrice !== undefined) {
      obj.executedOrderPrice = MoneyValue.toJSON(message.executedOrderPrice);
    }
    if (message.totalOrderAmount !== undefined) {
      obj.totalOrderAmount = MoneyValue.toJSON(message.totalOrderAmount);
    }
    if (message.initialCommission !== undefined) {
      obj.initialCommission = MoneyValue.toJSON(message.initialCommission);
    }
    if (message.executedCommission !== undefined) {
      obj.executedCommission = MoneyValue.toJSON(message.executedCommission);
    }
    if (message.aciValue !== undefined) {
      obj.aciValue = MoneyValue.toJSON(message.aciValue);
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      obj.initialSecurityPrice = MoneyValue.toJSON(message.initialSecurityPrice);
    }
    if (message.orderType !== 0) {
      obj.orderType = orderTypeToJSON(message.orderType);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.initialOrderPricePt !== undefined) {
      obj.initialOrderPricePt = Quotation.toJSON(message.initialOrderPricePt);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseCancelOrderRequest(): CancelOrderRequest {
  return { accountId: "", orderId: "" };
}

export const CancelOrderRequest = {
  encode(message: CancelOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderRequest();
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

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CancelOrderRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
    };
  },

  toJSON(message: CancelOrderRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },
};

function createBaseCancelOrderResponse(): CancelOrderResponse {
  return { time: undefined };
}

export const CancelOrderResponse = {
  encode(message: CancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CancelOrderResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelOrderResponse();
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

  fromJSON(object: any): CancelOrderResponse {
    return { time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined };
  },

  toJSON(message: CancelOrderResponse): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    return obj;
  },
};

function createBaseGetOrderStateRequest(): GetOrderStateRequest {
  return { accountId: "", orderId: "" };
}

export const GetOrderStateRequest = {
  encode(message: GetOrderStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderStateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderStateRequest();
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

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderStateRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
    };
  },

  toJSON(message: GetOrderStateRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },
};

function createBaseGetOrdersRequest(): GetOrdersRequest {
  return { accountId: "" };
}

export const GetOrdersRequest = {
  encode(message: GetOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersRequest();
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

  fromJSON(object: any): GetOrdersRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: GetOrdersRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseGetOrdersResponse(): GetOrdersResponse {
  return { orders: [] };
}

export const GetOrdersResponse = {
  encode(message: GetOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.orders) {
      OrderState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orders.push(OrderState.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrdersResponse {
    return {
      orders: globalThis.Array.isArray(object?.orders) ? object.orders.map((e: any) => OrderState.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetOrdersResponse): unknown {
    const obj: any = {};
    if (message.orders?.length) {
      obj.orders = message.orders.map((e) => OrderState.toJSON(e));
    }
    return obj;
  },
};

function createBaseOrderState(): OrderState {
  return {
    orderId: "",
    executionReportStatus: 0,
    lotsRequested: 0,
    lotsExecuted: 0,
    initialOrderPrice: undefined,
    executedOrderPrice: undefined,
    totalOrderAmount: undefined,
    averagePositionPrice: undefined,
    initialCommission: undefined,
    executedCommission: undefined,
    figi: "",
    direction: 0,
    initialSecurityPrice: undefined,
    stages: [],
    serviceCommission: undefined,
    currency: "",
    orderType: 0,
    orderDate: undefined,
    instrumentUid: "",
    orderRequestId: "",
  };
}

export const OrderState = {
  encode(message: OrderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(16).int32(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(24).int64(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      writer.uint32(32).int64(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      MoneyValue.encode(message.initialOrderPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.executedOrderPrice !== undefined) {
      MoneyValue.encode(message.executedOrderPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(58).fork()).ldelim();
    }
    if (message.averagePositionPrice !== undefined) {
      MoneyValue.encode(message.averagePositionPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.initialCommission !== undefined) {
      MoneyValue.encode(message.initialCommission, writer.uint32(74).fork()).ldelim();
    }
    if (message.executedCommission !== undefined) {
      MoneyValue.encode(message.executedCommission, writer.uint32(82).fork()).ldelim();
    }
    if (message.figi !== "") {
      writer.uint32(90).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      MoneyValue.encode(message.initialSecurityPrice, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.stages) {
      OrderStage.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.serviceCommission !== undefined) {
      MoneyValue.encode(message.serviceCommission, writer.uint32(122).fork()).ldelim();
    }
    if (message.currency !== "") {
      writer.uint32(130).string(message.currency);
    }
    if (message.orderType !== 0) {
      writer.uint32(136).int32(message.orderType);
    }
    if (message.orderDate !== undefined) {
      Timestamp.encode(toTimestamp(message.orderDate), writer.uint32(146).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(154).string(message.instrumentUid);
    }
    if (message.orderRequestId !== "") {
      writer.uint32(162).string(message.orderRequestId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.executionReportStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lotsRequested = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.lotsExecuted = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.executedOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.averagePositionPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.initialCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.executedCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.initialSecurityPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.stages.push(OrderStage.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.serviceCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.orderDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.orderRequestId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderState {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      lotsRequested: isSet(object.lotsRequested) ? globalThis.Number(object.lotsRequested) : 0,
      lotsExecuted: isSet(object.lotsExecuted) ? globalThis.Number(object.lotsExecuted) : 0,
      initialOrderPrice: isSet(object.initialOrderPrice) ? MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
      executedOrderPrice: isSet(object.executedOrderPrice) ? MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      initialCommission: isSet(object.initialCommission) ? MoneyValue.fromJSON(object.initialCommission) : undefined,
      executedCommission: isSet(object.executedCommission) ? MoneyValue.fromJSON(object.executedCommission) : undefined,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      initialSecurityPrice: isSet(object.initialSecurityPrice)
        ? MoneyValue.fromJSON(object.initialSecurityPrice)
        : undefined,
      stages: globalThis.Array.isArray(object?.stages) ? object.stages.map((e: any) => OrderStage.fromJSON(e)) : [],
      serviceCommission: isSet(object.serviceCommission) ? MoneyValue.fromJSON(object.serviceCommission) : undefined,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderDate: isSet(object.orderDate) ? fromJsonTimestamp(object.orderDate) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      orderRequestId: isSet(object.orderRequestId) ? globalThis.String(object.orderRequestId) : "",
    };
  },

  toJSON(message: OrderState): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.executionReportStatus !== 0) {
      obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus);
    }
    if (message.lotsRequested !== 0) {
      obj.lotsRequested = Math.round(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      obj.lotsExecuted = Math.round(message.lotsExecuted);
    }
    if (message.initialOrderPrice !== undefined) {
      obj.initialOrderPrice = MoneyValue.toJSON(message.initialOrderPrice);
    }
    if (message.executedOrderPrice !== undefined) {
      obj.executedOrderPrice = MoneyValue.toJSON(message.executedOrderPrice);
    }
    if (message.totalOrderAmount !== undefined) {
      obj.totalOrderAmount = MoneyValue.toJSON(message.totalOrderAmount);
    }
    if (message.averagePositionPrice !== undefined) {
      obj.averagePositionPrice = MoneyValue.toJSON(message.averagePositionPrice);
    }
    if (message.initialCommission !== undefined) {
      obj.initialCommission = MoneyValue.toJSON(message.initialCommission);
    }
    if (message.executedCommission !== undefined) {
      obj.executedCommission = MoneyValue.toJSON(message.executedCommission);
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.initialSecurityPrice !== undefined) {
      obj.initialSecurityPrice = MoneyValue.toJSON(message.initialSecurityPrice);
    }
    if (message.stages?.length) {
      obj.stages = message.stages.map((e) => OrderStage.toJSON(e));
    }
    if (message.serviceCommission !== undefined) {
      obj.serviceCommission = MoneyValue.toJSON(message.serviceCommission);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.orderType !== 0) {
      obj.orderType = orderTypeToJSON(message.orderType);
    }
    if (message.orderDate !== undefined) {
      obj.orderDate = message.orderDate.toISOString();
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.orderRequestId !== "") {
      obj.orderRequestId = message.orderRequestId;
    }
    return obj;
  },
};

function createBaseOrderStage(): OrderStage {
  return { price: undefined, quantity: 0, tradeId: "" };
}

export const OrderStage = {
  encode(message: OrderStage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    if (message.tradeId !== "") {
      writer.uint32(26).string(message.tradeId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
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

          message.tradeId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderStage {
    return {
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      tradeId: isSet(object.tradeId) ? globalThis.String(object.tradeId) : "",
    };
  },

  toJSON(message: OrderStage): unknown {
    const obj: any = {};
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    return obj;
  },
};

function createBaseReplaceOrderRequest(): ReplaceOrderRequest {
  return { accountId: "", orderId: "", idempotencyKey: "", quantity: 0, price: undefined, priceType: 0 };
}

export const ReplaceOrderRequest = {
  encode(message: ReplaceOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== "") {
      writer.uint32(50).string(message.orderId);
    }
    if (message.idempotencyKey !== "") {
      writer.uint32(58).string(message.idempotencyKey);
    }
    if (message.quantity !== 0) {
      writer.uint32(88).int64(message.quantity);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(98).fork()).ldelim();
    }
    if (message.priceType !== 0) {
      writer.uint32(104).int32(message.priceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ReplaceOrderRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReplaceOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.idempotencyKey = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.priceType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ReplaceOrderRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      idempotencyKey: isSet(object.idempotencyKey) ? globalThis.String(object.idempotencyKey) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : 0,
    };
  },

  toJSON(message: ReplaceOrderRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.idempotencyKey !== "") {
      obj.idempotencyKey = message.idempotencyKey;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.priceType !== 0) {
      obj.priceType = priceTypeToJSON(message.priceType);
    }
    return obj;
  },
};

export type OrdersStreamServiceDefinition = typeof OrdersStreamServiceDefinition;
export const OrdersStreamServiceDefinition = {
  name: "OrdersStreamService",
  fullName: "tinkoff.public.invest.api.contract.v1.OrdersStreamService",
  methods: {
    /** Stream сделок пользователя */
    tradesStream: {
      name: "TradesStream",
      requestType: TradesStreamRequest,
      requestStream: false,
      responseType: TradesStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface OrdersStreamServiceImplementation<CallContextExt = {}> {
  /** Stream сделок пользователя */
  tradesStream(
    request: TradesStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<TradesStreamResponse>;
}

export interface OrdersStreamServiceClient<CallOptionsExt = {}> {
  /** Stream сделок пользователя */
  tradesStream(
    request: TradesStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<TradesStreamResponse>;
}

/**
 * Сервис предназначен для работы с торговыми поручениями:</br> **1**.
 * выставление;</br> **2**. отмена;</br> **3**. получение статуса;</br> **4**.
 * расчёт полной стоимости;</br> **5**. получение списка заявок.
 */
export type OrdersServiceDefinition = typeof OrdersServiceDefinition;
export const OrdersServiceDefinition = {
  name: "OrdersService",
  fullName: "tinkoff.public.invest.api.contract.v1.OrdersService",
  methods: {
    /** Метод выставления заявки. */
    postOrder: {
      name: "PostOrder",
      requestType: PostOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод отмены биржевой заявки. */
    cancelOrder: {
      name: "CancelOrder",
      requestType: CancelOrderRequest,
      requestStream: false,
      responseType: CancelOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения статуса торгового поручения. */
    getOrderState: {
      name: "GetOrderState",
      requestType: GetOrderStateRequest,
      requestStream: false,
      responseType: OrderState,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активных заявок по счёту. */
    getOrders: {
      name: "GetOrders",
      requestType: GetOrdersRequest,
      requestStream: false,
      responseType: GetOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Метод изменения выставленной заявки. */
    replaceOrder: {
      name: "ReplaceOrder",
      requestType: ReplaceOrderRequest,
      requestStream: false,
      responseType: PostOrderResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrdersServiceImplementation<CallContextExt = {}> {
  /** Метод выставления заявки. */
  postOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** Метод отмены биржевой заявки. */
  cancelOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
  /** Метод получения статуса торгового поручения. */
  getOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
  /** Метод получения списка активных заявок по счёту. */
  getOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
  /** Метод изменения выставленной заявки. */
  replaceOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
}

export interface OrdersServiceClient<CallOptionsExt = {}> {
  /** Метод выставления заявки. */
  postOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** Метод отмены биржевой заявки. */
  cancelOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
  /** Метод получения статуса торгового поручения. */
  getOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
  /** Метод получения списка активных заявок по счёту. */
  getOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
  /** Метод изменения выставленной заявки. */
  replaceOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
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

export type ServerStreamingMethodResult<Response> = { [Symbol.asyncIterator](): AsyncIterator<Response, void> };
