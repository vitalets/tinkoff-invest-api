/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { MoneyValue, PriceType, priceTypeFromJSON, priceTypeToJSON, Quotation, ResponseMetadata } from "./common.js";
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
  /** STOP_ORDER_TYPE_TAKE_PROFIT - `Take-profit`-заявка. */
  STOP_ORDER_TYPE_TAKE_PROFIT = 1,
  /** STOP_ORDER_TYPE_STOP_LOSS - `Stop-loss`-заявка. */
  STOP_ORDER_TYPE_STOP_LOSS = 2,
  /** STOP_ORDER_TYPE_STOP_LIMIT - `Stop-limit`-заявка. */
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

/** Статус стоп-заяки. */
export enum StopOrderStatusOption {
  /** STOP_ORDER_STATUS_UNSPECIFIED - Значение не указано. */
  STOP_ORDER_STATUS_UNSPECIFIED = 0,
  /** STOP_ORDER_STATUS_ALL - Все заявки. */
  STOP_ORDER_STATUS_ALL = 1,
  /** STOP_ORDER_STATUS_ACTIVE - Активные заявки. */
  STOP_ORDER_STATUS_ACTIVE = 2,
  /** STOP_ORDER_STATUS_EXECUTED - Исполненные заявки. */
  STOP_ORDER_STATUS_EXECUTED = 3,
  /** STOP_ORDER_STATUS_CANCELED - Отменённые заявки. */
  STOP_ORDER_STATUS_CANCELED = 4,
  /** STOP_ORDER_STATUS_EXPIRED - Истёкшие заявки. */
  STOP_ORDER_STATUS_EXPIRED = 5,
  UNRECOGNIZED = -1,
}

export function stopOrderStatusOptionFromJSON(object: any): StopOrderStatusOption {
  switch (object) {
    case 0:
    case "STOP_ORDER_STATUS_UNSPECIFIED":
      return StopOrderStatusOption.STOP_ORDER_STATUS_UNSPECIFIED;
    case 1:
    case "STOP_ORDER_STATUS_ALL":
      return StopOrderStatusOption.STOP_ORDER_STATUS_ALL;
    case 2:
    case "STOP_ORDER_STATUS_ACTIVE":
      return StopOrderStatusOption.STOP_ORDER_STATUS_ACTIVE;
    case 3:
    case "STOP_ORDER_STATUS_EXECUTED":
      return StopOrderStatusOption.STOP_ORDER_STATUS_EXECUTED;
    case 4:
    case "STOP_ORDER_STATUS_CANCELED":
      return StopOrderStatusOption.STOP_ORDER_STATUS_CANCELED;
    case 5:
    case "STOP_ORDER_STATUS_EXPIRED":
      return StopOrderStatusOption.STOP_ORDER_STATUS_EXPIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StopOrderStatusOption.UNRECOGNIZED;
  }
}

export function stopOrderStatusOptionToJSON(object: StopOrderStatusOption): string {
  switch (object) {
    case StopOrderStatusOption.STOP_ORDER_STATUS_UNSPECIFIED:
      return "STOP_ORDER_STATUS_UNSPECIFIED";
    case StopOrderStatusOption.STOP_ORDER_STATUS_ALL:
      return "STOP_ORDER_STATUS_ALL";
    case StopOrderStatusOption.STOP_ORDER_STATUS_ACTIVE:
      return "STOP_ORDER_STATUS_ACTIVE";
    case StopOrderStatusOption.STOP_ORDER_STATUS_EXECUTED:
      return "STOP_ORDER_STATUS_EXECUTED";
    case StopOrderStatusOption.STOP_ORDER_STATUS_CANCELED:
      return "STOP_ORDER_STATUS_CANCELED";
    case StopOrderStatusOption.STOP_ORDER_STATUS_EXPIRED:
      return "STOP_ORDER_STATUS_EXPIRED";
    case StopOrderStatusOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип выставляемой заявки. */
export enum ExchangeOrderType {
  /** EXCHANGE_ORDER_TYPE_UNSPECIFIED - Значение не указано. */
  EXCHANGE_ORDER_TYPE_UNSPECIFIED = 0,
  /** EXCHANGE_ORDER_TYPE_MARKET - Заявка по рыночной цене. */
  EXCHANGE_ORDER_TYPE_MARKET = 1,
  /** EXCHANGE_ORDER_TYPE_LIMIT - Лимитная заявка. */
  EXCHANGE_ORDER_TYPE_LIMIT = 2,
  UNRECOGNIZED = -1,
}

export function exchangeOrderTypeFromJSON(object: any): ExchangeOrderType {
  switch (object) {
    case 0:
    case "EXCHANGE_ORDER_TYPE_UNSPECIFIED":
      return ExchangeOrderType.EXCHANGE_ORDER_TYPE_UNSPECIFIED;
    case 1:
    case "EXCHANGE_ORDER_TYPE_MARKET":
      return ExchangeOrderType.EXCHANGE_ORDER_TYPE_MARKET;
    case 2:
    case "EXCHANGE_ORDER_TYPE_LIMIT":
      return ExchangeOrderType.EXCHANGE_ORDER_TYPE_LIMIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ExchangeOrderType.UNRECOGNIZED;
  }
}

export function exchangeOrderTypeToJSON(object: ExchangeOrderType): string {
  switch (object) {
    case ExchangeOrderType.EXCHANGE_ORDER_TYPE_UNSPECIFIED:
      return "EXCHANGE_ORDER_TYPE_UNSPECIFIED";
    case ExchangeOrderType.EXCHANGE_ORDER_TYPE_MARKET:
      return "EXCHANGE_ORDER_TYPE_MARKET";
    case ExchangeOrderType.EXCHANGE_ORDER_TYPE_LIMIT:
      return "EXCHANGE_ORDER_TYPE_LIMIT";
    case ExchangeOrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип TakeProfit-заявки. */
export enum TakeProfitType {
  /** TAKE_PROFIT_TYPE_UNSPECIFIED - Значение не указано. */
  TAKE_PROFIT_TYPE_UNSPECIFIED = 0,
  /** TAKE_PROFIT_TYPE_REGULAR - Обычная заявка, значение по умолчанию. */
  TAKE_PROFIT_TYPE_REGULAR = 1,
  /** TAKE_PROFIT_TYPE_TRAILING - Трейлинг-стоп. */
  TAKE_PROFIT_TYPE_TRAILING = 2,
  UNRECOGNIZED = -1,
}

export function takeProfitTypeFromJSON(object: any): TakeProfitType {
  switch (object) {
    case 0:
    case "TAKE_PROFIT_TYPE_UNSPECIFIED":
      return TakeProfitType.TAKE_PROFIT_TYPE_UNSPECIFIED;
    case 1:
    case "TAKE_PROFIT_TYPE_REGULAR":
      return TakeProfitType.TAKE_PROFIT_TYPE_REGULAR;
    case 2:
    case "TAKE_PROFIT_TYPE_TRAILING":
      return TakeProfitType.TAKE_PROFIT_TYPE_TRAILING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TakeProfitType.UNRECOGNIZED;
  }
}

export function takeProfitTypeToJSON(object: TakeProfitType): string {
  switch (object) {
    case TakeProfitType.TAKE_PROFIT_TYPE_UNSPECIFIED:
      return "TAKE_PROFIT_TYPE_UNSPECIFIED";
    case TakeProfitType.TAKE_PROFIT_TYPE_REGULAR:
      return "TAKE_PROFIT_TYPE_REGULAR";
    case TakeProfitType.TAKE_PROFIT_TYPE_TRAILING:
      return "TAKE_PROFIT_TYPE_TRAILING";
    case TakeProfitType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип параметров значений трейлинг-стопа. */
export enum TrailingValueType {
  /** TRAILING_VALUE_UNSPECIFIED - Значение не указано. */
  TRAILING_VALUE_UNSPECIFIED = 0,
  /** TRAILING_VALUE_ABSOLUTE - Абсолютное значение в единицах цены. */
  TRAILING_VALUE_ABSOLUTE = 1,
  /** TRAILING_VALUE_RELATIVE - Относительное значение в процентах. */
  TRAILING_VALUE_RELATIVE = 2,
  UNRECOGNIZED = -1,
}

export function trailingValueTypeFromJSON(object: any): TrailingValueType {
  switch (object) {
    case 0:
    case "TRAILING_VALUE_UNSPECIFIED":
      return TrailingValueType.TRAILING_VALUE_UNSPECIFIED;
    case 1:
    case "TRAILING_VALUE_ABSOLUTE":
      return TrailingValueType.TRAILING_VALUE_ABSOLUTE;
    case 2:
    case "TRAILING_VALUE_RELATIVE":
      return TrailingValueType.TRAILING_VALUE_RELATIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrailingValueType.UNRECOGNIZED;
  }
}

export function trailingValueTypeToJSON(object: TrailingValueType): string {
  switch (object) {
    case TrailingValueType.TRAILING_VALUE_UNSPECIFIED:
      return "TRAILING_VALUE_UNSPECIFIED";
    case TrailingValueType.TRAILING_VALUE_ABSOLUTE:
      return "TRAILING_VALUE_ABSOLUTE";
    case TrailingValueType.TRAILING_VALUE_RELATIVE:
      return "TRAILING_VALUE_RELATIVE";
    case TrailingValueType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Статус трейлинг-стопа. */
export enum TrailingStopStatus {
  /** TRAILING_STOP_UNSPECIFIED - Значение не указано. */
  TRAILING_STOP_UNSPECIFIED = 0,
  /** TRAILING_STOP_ACTIVE - Активный. */
  TRAILING_STOP_ACTIVE = 1,
  /** TRAILING_STOP_ACTIVATED - Активированный. */
  TRAILING_STOP_ACTIVATED = 2,
  UNRECOGNIZED = -1,
}

export function trailingStopStatusFromJSON(object: any): TrailingStopStatus {
  switch (object) {
    case 0:
    case "TRAILING_STOP_UNSPECIFIED":
      return TrailingStopStatus.TRAILING_STOP_UNSPECIFIED;
    case 1:
    case "TRAILING_STOP_ACTIVE":
      return TrailingStopStatus.TRAILING_STOP_ACTIVE;
    case 2:
    case "TRAILING_STOP_ACTIVATED":
      return TrailingStopStatus.TRAILING_STOP_ACTIVATED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrailingStopStatus.UNRECOGNIZED;
  }
}

export function trailingStopStatusToJSON(object: TrailingStopStatus): string {
  switch (object) {
    case TrailingStopStatus.TRAILING_STOP_UNSPECIFIED:
      return "TRAILING_STOP_UNSPECIFIED";
    case TrailingStopStatus.TRAILING_STOP_ACTIVE:
      return "TRAILING_STOP_ACTIVE";
    case TrailingStopStatus.TRAILING_STOP_ACTIVATED:
      return "TRAILING_STOP_ACTIVATED";
    case TrailingStopStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос выставления стоп-заявки. */
export interface PostStopOrderRequest {
  /**
   * Deprecated FIGI-идентификатор инструмента. Используйте `instrument_id`.
   *
   * @deprecated
   */
  figi?:
    | string
    | undefined;
  /** Количество лотов. */
  quantity: number;
  /** Цена за 1 инструмент биржевой заявки, которая будет выставлена при срабатывании по достижению `stop_price`. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  price?:
    | Quotation
    | undefined;
  /** Стоп-цена заявки за 1 инструмент. При достижении стоп-цены происходит активация стоп-заявки, в результате чего выставляется биржевая заявка. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
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
  /** Дата и время окончания действия стоп-заявки по UTC. Для `ExpirationType = GoodTillDate` заполнение обязательно, для `GoodTillCancel` игнорируется. */
  expireDate?:
    | Date
    | undefined;
  /** Идентификатор инструмента. Принимает значение `figi` или `instrument_uid`. */
  instrumentId: string;
  /** Тип дочерней биржевой заявки для тейкпрофита. */
  exchangeOrderType: ExchangeOrderType;
  /** Подтип стоп-заявки — `TakeProfit`. */
  takeProfitType: TakeProfitType;
  /** Массив с параметрами трейлинг-стопа. */
  trailingData?:
    | PostStopOrderRequest_TrailingData
    | undefined;
  /** Тип цены. */
  priceType: PriceType;
  /** Идентификатор запроса выставления поручения для целей идемпотентности в формате `UID`. Максимальная длина — 36 символов. */
  orderId: string;
}

export interface PostStopOrderRequest_TrailingData {
  /** Отступ. */
  indent?:
    | Quotation
    | undefined;
  /** Тип величины отступа. */
  indentType: TrailingValueType;
  /** Размер защитного спреда. */
  spread?:
    | Quotation
    | undefined;
  /** Тип величины защитного спреда. */
  spreadType: TrailingValueType;
}

/** Результат выставления стоп-заявки. */
export interface PostStopOrderResponse {
  /** Уникальный идентификатор стоп-заявки. */
  stopOrderId: string;
  /** Идентификатор ключа идемпотентности, переданный клиентом, в формате `UID`. Максимальная длина 36 — символов. */
  orderRequestId: string;
  /** Метадата. */
  responseMetadata?: ResponseMetadata | undefined;
}

/** Запрос получения списка активных стоп-заявок. */
export interface GetStopOrdersRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Статус заявок. */
  status: StopOrderStatusOption;
  /** Левая граница. */
  from?:
    | Date
    | undefined;
  /** Правая граница. */
  to?: Date | undefined;
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
  /** Время отмены заявки по UTC. */
  time?: Date | undefined;
}

/** Информация о стоп-заявке. */
export interface StopOrder {
  /** Уникальный идентификатор стоп-заявки. */
  stopOrderId: string;
  /** Запрошено лотов. */
  lotsRequested: number;
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Направление операции. */
  direction: StopOrderDirection;
  /** Валюта стоп-заявки. */
  currency: string;
  /** Тип стоп-заявки. */
  orderType: StopOrderType;
  /** Дата и время выставления заявки по UTC. */
  createDate?:
    | Date
    | undefined;
  /** Дата и время конвертации стоп-заявки в биржевую по UTC. */
  activationDateTime?:
    | Date
    | undefined;
  /** Дата и время снятия заявки по UTC. */
  expirationTime?:
    | Date
    | undefined;
  /** Цена заявки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  price?:
    | MoneyValue
    | undefined;
  /** Цена активации стоп-заявки за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  stopPrice?:
    | MoneyValue
    | undefined;
  /** `instrument_uid`-идентификатор инструмента. */
  instrumentUid: string;
  /** Подтип стоп-заявки — `TakeProfit`. */
  takeProfitType: TakeProfitType;
  /** Параметры трейлинг-стопа. */
  trailingData?:
    | StopOrder_TrailingData
    | undefined;
  /** Статус заявки. */
  status: StopOrderStatusOption;
  /** Тип дочерней биржевой заявки для тейкпрофита. */
  exchangeOrderType: ExchangeOrderType;
  /** Идентификатор биржевой заявки. */
  exchangeOrderId?: string | undefined;
}

export interface StopOrder_TrailingData {
  /** Отступ. */
  indent?:
    | Quotation
    | undefined;
  /** Тип величины отступа. */
  indentType: TrailingValueType;
  /** Размер защитного спреда. */
  spread?:
    | Quotation
    | undefined;
  /** Тип величины защитного спреда. */
  spreadType: TrailingValueType;
  /** Статус трейлинг-стопа. */
  status: TrailingStopStatus;
  /** Цена исполнения. */
  price?:
    | Quotation
    | undefined;
  /** Локальный экстремум. */
  extr?: Quotation | undefined;
}

function createBasePostStopOrderRequest(): PostStopOrderRequest {
  return {
    figi: undefined,
    quantity: 0,
    price: undefined,
    stopPrice: undefined,
    direction: 0,
    accountId: "",
    expirationType: 0,
    stopOrderType: 0,
    expireDate: undefined,
    instrumentId: "",
    exchangeOrderType: 0,
    takeProfitType: 0,
    trailingData: undefined,
    priceType: 0,
    orderId: "",
  };
}

export const PostStopOrderRequest = {
  encode(message: PostStopOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== undefined) {
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
    if (message.exchangeOrderType !== 0) {
      writer.uint32(88).int32(message.exchangeOrderType);
    }
    if (message.takeProfitType !== 0) {
      writer.uint32(96).int32(message.takeProfitType);
    }
    if (message.trailingData !== undefined) {
      PostStopOrderRequest_TrailingData.encode(message.trailingData, writer.uint32(106).fork()).ldelim();
    }
    if (message.priceType !== 0) {
      writer.uint32(112).int32(message.priceType);
    }
    if (message.orderId !== "") {
      writer.uint32(122).string(message.orderId);
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
        case 11:
          if (tag !== 88) {
            break;
          }

          message.exchangeOrderType = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.takeProfitType = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.trailingData = PostStopOrderRequest_TrailingData.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.priceType = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 122) {
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

  fromJSON(object: any): PostStopOrderRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      stopPrice: isSet(object.stopPrice) ? Quotation.fromJSON(object.stopPrice) : undefined,
      direction: isSet(object.direction) ? stopOrderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      expirationType: isSet(object.expirationType) ? stopOrderExpirationTypeFromJSON(object.expirationType) : 0,
      stopOrderType: isSet(object.stopOrderType) ? stopOrderTypeFromJSON(object.stopOrderType) : 0,
      expireDate: isSet(object.expireDate) ? fromJsonTimestamp(object.expireDate) : undefined,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
      exchangeOrderType: isSet(object.exchangeOrderType) ? exchangeOrderTypeFromJSON(object.exchangeOrderType) : 0,
      takeProfitType: isSet(object.takeProfitType) ? takeProfitTypeFromJSON(object.takeProfitType) : 0,
      trailingData: isSet(object.trailingData)
        ? PostStopOrderRequest_TrailingData.fromJSON(object.trailingData)
        : undefined,
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : 0,
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
    };
  },

  toJSON(message: PostStopOrderRequest): unknown {
    const obj: any = {};
    if (message.figi !== undefined) {
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
    if (message.exchangeOrderType !== 0) {
      obj.exchangeOrderType = exchangeOrderTypeToJSON(message.exchangeOrderType);
    }
    if (message.takeProfitType !== 0) {
      obj.takeProfitType = takeProfitTypeToJSON(message.takeProfitType);
    }
    if (message.trailingData !== undefined) {
      obj.trailingData = PostStopOrderRequest_TrailingData.toJSON(message.trailingData);
    }
    if (message.priceType !== 0) {
      obj.priceType = priceTypeToJSON(message.priceType);
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },
};

function createBasePostStopOrderRequest_TrailingData(): PostStopOrderRequest_TrailingData {
  return { indent: undefined, indentType: 0, spread: undefined, spreadType: 0 };
}

export const PostStopOrderRequest_TrailingData = {
  encode(message: PostStopOrderRequest_TrailingData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indent !== undefined) {
      Quotation.encode(message.indent, writer.uint32(10).fork()).ldelim();
    }
    if (message.indentType !== 0) {
      writer.uint32(16).int32(message.indentType);
    }
    if (message.spread !== undefined) {
      Quotation.encode(message.spread, writer.uint32(26).fork()).ldelim();
    }
    if (message.spreadType !== 0) {
      writer.uint32(32).int32(message.spreadType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostStopOrderRequest_TrailingData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostStopOrderRequest_TrailingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indent = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.indentType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spread = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.spreadType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostStopOrderRequest_TrailingData {
    return {
      indent: isSet(object.indent) ? Quotation.fromJSON(object.indent) : undefined,
      indentType: isSet(object.indentType) ? trailingValueTypeFromJSON(object.indentType) : 0,
      spread: isSet(object.spread) ? Quotation.fromJSON(object.spread) : undefined,
      spreadType: isSet(object.spreadType) ? trailingValueTypeFromJSON(object.spreadType) : 0,
    };
  },

  toJSON(message: PostStopOrderRequest_TrailingData): unknown {
    const obj: any = {};
    if (message.indent !== undefined) {
      obj.indent = Quotation.toJSON(message.indent);
    }
    if (message.indentType !== 0) {
      obj.indentType = trailingValueTypeToJSON(message.indentType);
    }
    if (message.spread !== undefined) {
      obj.spread = Quotation.toJSON(message.spread);
    }
    if (message.spreadType !== 0) {
      obj.spreadType = trailingValueTypeToJSON(message.spreadType);
    }
    return obj;
  },
};

function createBasePostStopOrderResponse(): PostStopOrderResponse {
  return { stopOrderId: "", orderRequestId: "", responseMetadata: undefined };
}

export const PostStopOrderResponse = {
  encode(message: PostStopOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stopOrderId !== "") {
      writer.uint32(10).string(message.stopOrderId);
    }
    if (message.orderRequestId !== "") {
      writer.uint32(18).string(message.orderRequestId);
    }
    if (message.responseMetadata !== undefined) {
      ResponseMetadata.encode(message.responseMetadata, writer.uint32(2034).fork()).ldelim();
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
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderRequestId = reader.string();
          continue;
        case 254:
          if (tag !== 2034) {
            break;
          }

          message.responseMetadata = ResponseMetadata.decode(reader, reader.uint32());
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
    return {
      stopOrderId: isSet(object.stopOrderId) ? globalThis.String(object.stopOrderId) : "",
      orderRequestId: isSet(object.orderRequestId) ? globalThis.String(object.orderRequestId) : "",
      responseMetadata: isSet(object.responseMetadata) ? ResponseMetadata.fromJSON(object.responseMetadata) : undefined,
    };
  },

  toJSON(message: PostStopOrderResponse): unknown {
    const obj: any = {};
    if (message.stopOrderId !== "") {
      obj.stopOrderId = message.stopOrderId;
    }
    if (message.orderRequestId !== "") {
      obj.orderRequestId = message.orderRequestId;
    }
    if (message.responseMetadata !== undefined) {
      obj.responseMetadata = ResponseMetadata.toJSON(message.responseMetadata);
    }
    return obj;
  },
};

function createBaseGetStopOrdersRequest(): GetStopOrdersRequest {
  return { accountId: "", status: 0, from: undefined, to: undefined };
}

export const GetStopOrdersRequest = {
  encode(message: GetStopOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(26).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(34).fork()).ldelim();
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
        case 2:
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      status: isSet(object.status) ? stopOrderStatusOptionFromJSON(object.status) : 0,
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetStopOrdersRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.status !== 0) {
      obj.status = stopOrderStatusOptionToJSON(message.status);
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
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
    takeProfitType: 0,
    trailingData: undefined,
    status: 0,
    exchangeOrderType: 0,
    exchangeOrderId: undefined,
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
    if (message.takeProfitType !== 0) {
      writer.uint32(104).int32(message.takeProfitType);
    }
    if (message.trailingData !== undefined) {
      StopOrder_TrailingData.encode(message.trailingData, writer.uint32(114).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(120).int32(message.status);
    }
    if (message.exchangeOrderType !== 0) {
      writer.uint32(128).int32(message.exchangeOrderType);
    }
    if (message.exchangeOrderId !== undefined) {
      writer.uint32(138).string(message.exchangeOrderId);
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
        case 13:
          if (tag !== 104) {
            break;
          }

          message.takeProfitType = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.trailingData = StopOrder_TrailingData.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.exchangeOrderType = reader.int32() as any;
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.exchangeOrderId = reader.string();
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
      takeProfitType: isSet(object.takeProfitType) ? takeProfitTypeFromJSON(object.takeProfitType) : 0,
      trailingData: isSet(object.trailingData) ? StopOrder_TrailingData.fromJSON(object.trailingData) : undefined,
      status: isSet(object.status) ? stopOrderStatusOptionFromJSON(object.status) : 0,
      exchangeOrderType: isSet(object.exchangeOrderType) ? exchangeOrderTypeFromJSON(object.exchangeOrderType) : 0,
      exchangeOrderId: isSet(object.exchangeOrderId) ? globalThis.String(object.exchangeOrderId) : undefined,
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
    if (message.takeProfitType !== 0) {
      obj.takeProfitType = takeProfitTypeToJSON(message.takeProfitType);
    }
    if (message.trailingData !== undefined) {
      obj.trailingData = StopOrder_TrailingData.toJSON(message.trailingData);
    }
    if (message.status !== 0) {
      obj.status = stopOrderStatusOptionToJSON(message.status);
    }
    if (message.exchangeOrderType !== 0) {
      obj.exchangeOrderType = exchangeOrderTypeToJSON(message.exchangeOrderType);
    }
    if (message.exchangeOrderId !== undefined) {
      obj.exchangeOrderId = message.exchangeOrderId;
    }
    return obj;
  },
};

function createBaseStopOrder_TrailingData(): StopOrder_TrailingData {
  return {
    indent: undefined,
    indentType: 0,
    spread: undefined,
    spreadType: 0,
    status: 0,
    price: undefined,
    extr: undefined,
  };
}

export const StopOrder_TrailingData = {
  encode(message: StopOrder_TrailingData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.indent !== undefined) {
      Quotation.encode(message.indent, writer.uint32(10).fork()).ldelim();
    }
    if (message.indentType !== 0) {
      writer.uint32(16).int32(message.indentType);
    }
    if (message.spread !== undefined) {
      Quotation.encode(message.spread, writer.uint32(26).fork()).ldelim();
    }
    if (message.spreadType !== 0) {
      writer.uint32(32).int32(message.spreadType);
    }
    if (message.status !== 0) {
      writer.uint32(40).int32(message.status);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(58).fork()).ldelim();
    }
    if (message.extr !== undefined) {
      Quotation.encode(message.extr, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StopOrder_TrailingData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStopOrder_TrailingData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.indent = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.indentType = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.spread = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.spreadType = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.extr = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StopOrder_TrailingData {
    return {
      indent: isSet(object.indent) ? Quotation.fromJSON(object.indent) : undefined,
      indentType: isSet(object.indentType) ? trailingValueTypeFromJSON(object.indentType) : 0,
      spread: isSet(object.spread) ? Quotation.fromJSON(object.spread) : undefined,
      spreadType: isSet(object.spreadType) ? trailingValueTypeFromJSON(object.spreadType) : 0,
      status: isSet(object.status) ? trailingStopStatusFromJSON(object.status) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      extr: isSet(object.extr) ? Quotation.fromJSON(object.extr) : undefined,
    };
  },

  toJSON(message: StopOrder_TrailingData): unknown {
    const obj: any = {};
    if (message.indent !== undefined) {
      obj.indent = Quotation.toJSON(message.indent);
    }
    if (message.indentType !== 0) {
      obj.indentType = trailingValueTypeToJSON(message.indentType);
    }
    if (message.spread !== undefined) {
      obj.spread = Quotation.toJSON(message.spread);
    }
    if (message.spreadType !== 0) {
      obj.spreadType = trailingValueTypeToJSON(message.spreadType);
    }
    if (message.status !== 0) {
      obj.status = trailingStopStatusToJSON(message.status);
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.extr !== undefined) {
      obj.extr = Quotation.toJSON(message.extr);
    }
    return obj;
  },
};

/** Сервис для работы со стоп-заявками: выставление, отмена, получение списка стоп-заявок. */
export type StopOrdersServiceDefinition = typeof StopOrdersServiceDefinition;
export const StopOrdersServiceDefinition = {
  name: "StopOrdersService",
  fullName: "tinkoff.public.invest.api.contract.v1.StopOrdersService",
  methods: {
    /** Выставить стоп-заявку. */
    postStopOrder: {
      name: "PostStopOrder",
      requestType: PostStopOrderRequest,
      requestStream: false,
      responseType: PostStopOrderResponse,
      responseStream: false,
      options: {},
    },
    /** Получить список активных стоп-заявок по счёту. */
    getStopOrders: {
      name: "GetStopOrders",
      requestType: GetStopOrdersRequest,
      requestStream: false,
      responseType: GetStopOrdersResponse,
      responseStream: false,
      options: {},
    },
    /** Отменить стоп-заявку. */
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
  /** Выставить стоп-заявку. */
  postStopOrder(request: PostStopOrderRequest, context: CallContext & CallContextExt): Promise<PostStopOrderResponse>;
  /** Получить список активных стоп-заявок по счёту. */
  getStopOrders(request: GetStopOrdersRequest, context: CallContext & CallContextExt): Promise<GetStopOrdersResponse>;
  /** Отменить стоп-заявку. */
  cancelStopOrder(
    request: CancelStopOrderRequest,
    context: CallContext & CallContextExt,
  ): Promise<CancelStopOrderResponse>;
}

export interface StopOrdersServiceClient<CallOptionsExt = {}> {
  /** Выставить стоп-заявку. */
  postStopOrder(request: PostStopOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostStopOrderResponse>;
  /** Получить список активных стоп-заявок по счёту. */
  getStopOrders(request: GetStopOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetStopOrdersResponse>;
  /** Отменить стоп-заявку. */
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
