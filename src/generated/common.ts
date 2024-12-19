/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип инструмента. */
export enum InstrumentType {
  INSTRUMENT_TYPE_UNSPECIFIED = 0,
  /** INSTRUMENT_TYPE_BOND - Облигация. */
  INSTRUMENT_TYPE_BOND = 1,
  /** INSTRUMENT_TYPE_SHARE - Акция. */
  INSTRUMENT_TYPE_SHARE = 2,
  /** INSTRUMENT_TYPE_CURRENCY - Валюта. */
  INSTRUMENT_TYPE_CURRENCY = 3,
  /** INSTRUMENT_TYPE_ETF - Exchange-traded fund. Фонд. */
  INSTRUMENT_TYPE_ETF = 4,
  /** INSTRUMENT_TYPE_FUTURES - Фьючерс. */
  INSTRUMENT_TYPE_FUTURES = 5,
  /** INSTRUMENT_TYPE_SP - Структурная нота. */
  INSTRUMENT_TYPE_SP = 6,
  /** INSTRUMENT_TYPE_OPTION - Опцион. */
  INSTRUMENT_TYPE_OPTION = 7,
  /** INSTRUMENT_TYPE_CLEARING_CERTIFICATE - Clearing certificate. */
  INSTRUMENT_TYPE_CLEARING_CERTIFICATE = 8,
  /** INSTRUMENT_TYPE_INDEX - Индекс. */
  INSTRUMENT_TYPE_INDEX = 9,
  /** INSTRUMENT_TYPE_COMMODITY - Товар. */
  INSTRUMENT_TYPE_COMMODITY = 10,
  UNRECOGNIZED = -1,
}

export function instrumentTypeFromJSON(object: any): InstrumentType {
  switch (object) {
    case 0:
    case "INSTRUMENT_TYPE_UNSPECIFIED":
      return InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED;
    case 1:
    case "INSTRUMENT_TYPE_BOND":
      return InstrumentType.INSTRUMENT_TYPE_BOND;
    case 2:
    case "INSTRUMENT_TYPE_SHARE":
      return InstrumentType.INSTRUMENT_TYPE_SHARE;
    case 3:
    case "INSTRUMENT_TYPE_CURRENCY":
      return InstrumentType.INSTRUMENT_TYPE_CURRENCY;
    case 4:
    case "INSTRUMENT_TYPE_ETF":
      return InstrumentType.INSTRUMENT_TYPE_ETF;
    case 5:
    case "INSTRUMENT_TYPE_FUTURES":
      return InstrumentType.INSTRUMENT_TYPE_FUTURES;
    case 6:
    case "INSTRUMENT_TYPE_SP":
      return InstrumentType.INSTRUMENT_TYPE_SP;
    case 7:
    case "INSTRUMENT_TYPE_OPTION":
      return InstrumentType.INSTRUMENT_TYPE_OPTION;
    case 8:
    case "INSTRUMENT_TYPE_CLEARING_CERTIFICATE":
      return InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE;
    case 9:
    case "INSTRUMENT_TYPE_INDEX":
      return InstrumentType.INSTRUMENT_TYPE_INDEX;
    case 10:
    case "INSTRUMENT_TYPE_COMMODITY":
      return InstrumentType.INSTRUMENT_TYPE_COMMODITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstrumentType.UNRECOGNIZED;
  }
}

export function instrumentTypeToJSON(object: InstrumentType): string {
  switch (object) {
    case InstrumentType.INSTRUMENT_TYPE_UNSPECIFIED:
      return "INSTRUMENT_TYPE_UNSPECIFIED";
    case InstrumentType.INSTRUMENT_TYPE_BOND:
      return "INSTRUMENT_TYPE_BOND";
    case InstrumentType.INSTRUMENT_TYPE_SHARE:
      return "INSTRUMENT_TYPE_SHARE";
    case InstrumentType.INSTRUMENT_TYPE_CURRENCY:
      return "INSTRUMENT_TYPE_CURRENCY";
    case InstrumentType.INSTRUMENT_TYPE_ETF:
      return "INSTRUMENT_TYPE_ETF";
    case InstrumentType.INSTRUMENT_TYPE_FUTURES:
      return "INSTRUMENT_TYPE_FUTURES";
    case InstrumentType.INSTRUMENT_TYPE_SP:
      return "INSTRUMENT_TYPE_SP";
    case InstrumentType.INSTRUMENT_TYPE_OPTION:
      return "INSTRUMENT_TYPE_OPTION";
    case InstrumentType.INSTRUMENT_TYPE_CLEARING_CERTIFICATE:
      return "INSTRUMENT_TYPE_CLEARING_CERTIFICATE";
    case InstrumentType.INSTRUMENT_TYPE_INDEX:
      return "INSTRUMENT_TYPE_INDEX";
    case InstrumentType.INSTRUMENT_TYPE_COMMODITY:
      return "INSTRUMENT_TYPE_COMMODITY";
    case InstrumentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Статус запрашиваемых инструментов. */
export enum InstrumentStatus {
  /** INSTRUMENT_STATUS_UNSPECIFIED - Значение не определено. */
  INSTRUMENT_STATUS_UNSPECIFIED = 0,
  /** INSTRUMENT_STATUS_BASE - Базовый список инструментов (по умолчанию). Инструменты, доступные для торговли через T-Invest API. Cейчас списки бумаг, которые доступны из API и других интерфейсах совпадают — кроме внебиржевых бумаг. Но в будущем возможны ситуации, когда списки инструментов будут отличаться. */
  INSTRUMENT_STATUS_BASE = 1,
  /** INSTRUMENT_STATUS_ALL - Список всех инструментов. */
  INSTRUMENT_STATUS_ALL = 2,
  UNRECOGNIZED = -1,
}

export function instrumentStatusFromJSON(object: any): InstrumentStatus {
  switch (object) {
    case 0:
    case "INSTRUMENT_STATUS_UNSPECIFIED":
      return InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED;
    case 1:
    case "INSTRUMENT_STATUS_BASE":
      return InstrumentStatus.INSTRUMENT_STATUS_BASE;
    case 2:
    case "INSTRUMENT_STATUS_ALL":
      return InstrumentStatus.INSTRUMENT_STATUS_ALL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstrumentStatus.UNRECOGNIZED;
  }
}

export function instrumentStatusToJSON(object: InstrumentStatus): string {
  switch (object) {
    case InstrumentStatus.INSTRUMENT_STATUS_UNSPECIFIED:
      return "INSTRUMENT_STATUS_UNSPECIFIED";
    case InstrumentStatus.INSTRUMENT_STATUS_BASE:
      return "INSTRUMENT_STATUS_BASE";
    case InstrumentStatus.INSTRUMENT_STATUS_ALL:
      return "INSTRUMENT_STATUS_ALL";
    case InstrumentStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Режим торгов инструмента */
export enum SecurityTradingStatus {
  /** SECURITY_TRADING_STATUS_UNSPECIFIED - Торговый статус не определён. */
  SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
  /** SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING - Недоступен для торгов. */
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
  /** SECURITY_TRADING_STATUS_OPENING_PERIOD - Период открытия торгов. */
  SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
  /** SECURITY_TRADING_STATUS_CLOSING_PERIOD - Период закрытия торгов. */
  SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
  /** SECURITY_TRADING_STATUS_BREAK_IN_TRADING - Перерыв в торговле. */
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
  /** SECURITY_TRADING_STATUS_NORMAL_TRADING - Нормальная торговля. */
  SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
  /** SECURITY_TRADING_STATUS_CLOSING_AUCTION - Аукцион закрытия. */
  SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
  /** SECURITY_TRADING_STATUS_DARK_POOL_AUCTION - Аукцион крупных пакетов. */
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
  /** SECURITY_TRADING_STATUS_DISCRETE_AUCTION - Дискретный аукцион. */
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
  /** SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD - Аукцион открытия. */
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
  /** SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE - Период торгов по цене аукциона закрытия. */
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
  /** SECURITY_TRADING_STATUS_SESSION_ASSIGNED - Сессия назначена. */
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
  /** SECURITY_TRADING_STATUS_SESSION_CLOSE - Сессия закрыта. */
  SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
  /** SECURITY_TRADING_STATUS_SESSION_OPEN - Сессия открыта. */
  SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
  /** SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING - Доступна торговля в режиме внутренней ликвидности брокера. */
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
  /** SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING - Перерыв торговли в режиме внутренней ликвидности брокера. */
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
  /** SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING - Недоступна торговля в режиме внутренней ликвидности брокера. */
  SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING = 16,
  UNRECOGNIZED = -1,
}

export function securityTradingStatusFromJSON(object: any): SecurityTradingStatus {
  switch (object) {
    case 0:
    case "SECURITY_TRADING_STATUS_UNSPECIFIED":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED;
    case 1:
    case "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING;
    case 2:
    case "SECURITY_TRADING_STATUS_OPENING_PERIOD":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD;
    case 3:
    case "SECURITY_TRADING_STATUS_CLOSING_PERIOD":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD;
    case 4:
    case "SECURITY_TRADING_STATUS_BREAK_IN_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING;
    case 5:
    case "SECURITY_TRADING_STATUS_NORMAL_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING;
    case 6:
    case "SECURITY_TRADING_STATUS_CLOSING_AUCTION":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION;
    case 7:
    case "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION;
    case 8:
    case "SECURITY_TRADING_STATUS_DISCRETE_AUCTION":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION;
    case 9:
    case "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD;
    case 10:
    case "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE;
    case 11:
    case "SECURITY_TRADING_STATUS_SESSION_ASSIGNED":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED;
    case 12:
    case "SECURITY_TRADING_STATUS_SESSION_CLOSE":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE;
    case 13:
    case "SECURITY_TRADING_STATUS_SESSION_OPEN":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN;
    case 14:
    case "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING;
    case 15:
    case "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING;
    case 16:
    case "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING":
      return SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SecurityTradingStatus.UNRECOGNIZED;
  }
}

export function securityTradingStatusToJSON(object: SecurityTradingStatus): string {
  switch (object) {
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_UNSPECIFIED:
      return "SECURITY_TRADING_STATUS_UNSPECIFIED";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING:
      return "SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_PERIOD:
      return "SECURITY_TRADING_STATUS_OPENING_PERIOD";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_PERIOD:
      return "SECURITY_TRADING_STATUS_CLOSING_PERIOD";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_BREAK_IN_TRADING:
      return "SECURITY_TRADING_STATUS_BREAK_IN_TRADING";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING:
      return "SECURITY_TRADING_STATUS_NORMAL_TRADING";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_CLOSING_AUCTION:
      return "SECURITY_TRADING_STATUS_CLOSING_AUCTION";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_DARK_POOL_AUCTION:
      return "SECURITY_TRADING_STATUS_DARK_POOL_AUCTION";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_DISCRETE_AUCTION:
      return "SECURITY_TRADING_STATUS_DISCRETE_AUCTION";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD:
      return "SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE:
      return "SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_ASSIGNED:
      return "SECURITY_TRADING_STATUS_SESSION_ASSIGNED";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_CLOSE:
      return "SECURITY_TRADING_STATUS_SESSION_CLOSE";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_SESSION_OPEN:
      return "SECURITY_TRADING_STATUS_SESSION_OPEN";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING:
      return "SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING:
      return "SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING";
    case SecurityTradingStatus.SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING:
      return "SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING";
    case SecurityTradingStatus.UNRECOGNIZED:
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

export enum ResultSubscriptionStatus {
  /** RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определен. */
  RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** RESULT_SUBSCRIPTION_STATUS_OK - Подписка успешно установлена. */
  RESULT_SUBSCRIPTION_STATUS_OK = 1,
  /** RESULT_SUBSCRIPTION_STATUS_ERROR - Ошибка подписки */
  RESULT_SUBSCRIPTION_STATUS_ERROR = 13,
  UNRECOGNIZED = -1,
}

export function resultSubscriptionStatusFromJSON(object: any): ResultSubscriptionStatus {
  switch (object) {
    case 0:
    case "RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED":
      return ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "RESULT_SUBSCRIPTION_STATUS_OK":
      return ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_OK;
    case 13:
    case "RESULT_SUBSCRIPTION_STATUS_ERROR":
      return ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResultSubscriptionStatus.UNRECOGNIZED;
  }
}

export function resultSubscriptionStatusToJSON(object: ResultSubscriptionStatus): string {
  switch (object) {
    case ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "RESULT_SUBSCRIPTION_STATUS_UNSPECIFIED";
    case ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_OK:
      return "RESULT_SUBSCRIPTION_STATUS_OK";
    case ResultSubscriptionStatus.RESULT_SUBSCRIPTION_STATUS_ERROR:
      return "RESULT_SUBSCRIPTION_STATUS_ERROR";
    case ResultSubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Денежная сумма в определённой валюте. */
export interface MoneyValue {
  /** Строковый ISO-код валюты. */
  currency: string;
  /** Целая часть суммы, может быть отрицательным числом. */
  units: number;
  /** Дробная часть суммы, может быть отрицательным числом. */
  nano: number;
}

/** Котировка — денежная сумма без указания валюты. */
export interface Quotation {
  /** Целая часть суммы, может быть отрицательным числом. */
  units: number;
  /** Дробная часть суммы, может быть отрицательным числом. */
  nano: number;
}

export interface PingRequest {
  /** Время формирования запроса */
  time?: Date | undefined;
}

export interface PingDelaySettings {
  /** Задержка пинг сообщений milliseconds 5000-180000, default 120000 */
  pingDelayMs?: number | undefined;
}

/** Проверка активности стрима. */
export interface Ping {
  /** Время проверки. */
  time?:
    | Date
    | undefined;
  /** Идентификатор соединения. */
  streamId: string;
  /** Время формирования запроса */
  pingRequestTime?: Date | undefined;
}

export interface Page {
  /** Максимальное число возвращаемых записей. */
  limit: number;
  /** Порядковый номер страницы, начиная с 0. */
  pageNumber: number;
}

export interface PageResponse {
  /** Максимальное число возвращаемых записей. */
  limit: number;
  /** Порядковый номер страницы, начиная с 0. */
  pageNumber: number;
  /** Общее количество записей. */
  totalCount: number;
}

export interface ResponseMetadata {
  /** Идентификатор трекинга. */
  trackingId: string;
  /** Серверное время. */
  serverTime?: Date | undefined;
}

export interface BrandData {
  /** Логотип инструмента. Имя файла для получения логотипа. */
  logoName: string;
  /** Цвет бренда. */
  logoBaseColor: string;
  /** Цвет текста для цвета логотипа бренда. */
  textColor: string;
}

export interface ErrorDetail {
  /** Код ошибки. */
  code: string;
  /** Описание ошибки. */
  message: string;
}

function createBaseMoneyValue(): MoneyValue {
  return { currency: "", units: 0, nano: 0 };
}

export const MoneyValue = {
  encode(message: MoneyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== "") {
      writer.uint32(10).string(message.currency);
    }
    if (message.units !== 0) {
      writer.uint32(16).int64(message.units);
    }
    if (message.nano !== 0) {
      writer.uint32(24).int32(message.nano);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MoneyValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoneyValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.units = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.nano = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MoneyValue {
    return {
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      units: isSet(object.units) ? globalThis.Number(object.units) : 0,
      nano: isSet(object.nano) ? globalThis.Number(object.nano) : 0,
    };
  },

  toJSON(message: MoneyValue): unknown {
    const obj: any = {};
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.units !== 0) {
      obj.units = Math.round(message.units);
    }
    if (message.nano !== 0) {
      obj.nano = Math.round(message.nano);
    }
    return obj;
  },
};

function createBaseQuotation(): Quotation {
  return { units: 0, nano: 0 };
}

export const Quotation = {
  encode(message: Quotation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== 0) {
      writer.uint32(8).int64(message.units);
    }
    if (message.nano !== 0) {
      writer.uint32(16).int32(message.nano);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quotation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.units = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nano = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Quotation {
    return {
      units: isSet(object.units) ? globalThis.Number(object.units) : 0,
      nano: isSet(object.nano) ? globalThis.Number(object.nano) : 0,
    };
  },

  toJSON(message: Quotation): unknown {
    const obj: any = {};
    if (message.units !== 0) {
      obj.units = Math.round(message.units);
    }
    if (message.nano !== 0) {
      obj.nano = Math.round(message.nano);
    }
    return obj;
  },
};

function createBasePingRequest(): PingRequest {
  return { time: undefined };
}

export const PingRequest = {
  encode(message: PingRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
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

  fromJSON(object: any): PingRequest {
    return { time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined };
  },

  toJSON(message: PingRequest): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    return obj;
  },
};

function createBasePingDelaySettings(): PingDelaySettings {
  return { pingDelayMs: undefined };
}

export const PingDelaySettings = {
  encode(message: PingDelaySettings, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pingDelayMs !== undefined) {
      writer.uint32(120).int32(message.pingDelayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingDelaySettings {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingDelaySettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 15:
          if (tag !== 120) {
            break;
          }

          message.pingDelayMs = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PingDelaySettings {
    return { pingDelayMs: isSet(object.pingDelayMs) ? globalThis.Number(object.pingDelayMs) : undefined };
  },

  toJSON(message: PingDelaySettings): unknown {
    const obj: any = {};
    if (message.pingDelayMs !== undefined) {
      obj.pingDelayMs = Math.round(message.pingDelayMs);
    }
    return obj;
  },
};

function createBasePing(): Ping {
  return { time: undefined, streamId: "", pingRequestTime: undefined };
}

export const Ping = {
  encode(message: Ping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.streamId !== "") {
      writer.uint32(18).string(message.streamId);
    }
    if (message.pingRequestTime !== undefined) {
      Timestamp.encode(toTimestamp(message.pingRequestTime), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.streamId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pingRequestTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ping {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      streamId: isSet(object.streamId) ? globalThis.String(object.streamId) : "",
      pingRequestTime: isSet(object.pingRequestTime) ? fromJsonTimestamp(object.pingRequestTime) : undefined,
    };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.streamId !== "") {
      obj.streamId = message.streamId;
    }
    if (message.pingRequestTime !== undefined) {
      obj.pingRequestTime = message.pingRequestTime.toISOString();
    }
    return obj;
  },
};

function createBasePage(): Page {
  return { limit: 0, pageNumber: 0 };
}

export const Page = {
  encode(message: Page, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    if (message.pageNumber !== 0) {
      writer.uint32(16).int32(message.pageNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Page {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePage();
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
          if (tag !== 16) {
            break;
          }

          message.pageNumber = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Page {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      pageNumber: isSet(object.pageNumber) ? globalThis.Number(object.pageNumber) : 0,
    };
  },

  toJSON(message: Page): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.pageNumber !== 0) {
      obj.pageNumber = Math.round(message.pageNumber);
    }
    return obj;
  },
};

function createBasePageResponse(): PageResponse {
  return { limit: 0, pageNumber: 0, totalCount: 0 };
}

export const PageResponse = {
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).int32(message.limit);
    }
    if (message.pageNumber !== 0) {
      writer.uint32(16).int32(message.pageNumber);
    }
    if (message.totalCount !== 0) {
      writer.uint32(24).int32(message.totalCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
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
          if (tag !== 16) {
            break;
          }

          message.pageNumber = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.totalCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageResponse {
    return {
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      pageNumber: isSet(object.pageNumber) ? globalThis.Number(object.pageNumber) : 0,
      totalCount: isSet(object.totalCount) ? globalThis.Number(object.totalCount) : 0,
    };
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.pageNumber !== 0) {
      obj.pageNumber = Math.round(message.pageNumber);
    }
    if (message.totalCount !== 0) {
      obj.totalCount = Math.round(message.totalCount);
    }
    return obj;
  },
};

function createBaseResponseMetadata(): ResponseMetadata {
  return { trackingId: "", serverTime: undefined };
}

export const ResponseMetadata = {
  encode(message: ResponseMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(338).string(message.trackingId);
    }
    if (message.serverTime !== undefined) {
      Timestamp.encode(toTimestamp(message.serverTime), writer.uint32(346).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseMetadata {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 42:
          if (tag !== 338) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.serverTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseMetadata {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      serverTime: isSet(object.serverTime) ? fromJsonTimestamp(object.serverTime) : undefined,
    };
  },

  toJSON(message: ResponseMetadata): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.serverTime !== undefined) {
      obj.serverTime = message.serverTime.toISOString();
    }
    return obj;
  },
};

function createBaseBrandData(): BrandData {
  return { logoName: "", logoBaseColor: "", textColor: "" };
}

export const BrandData = {
  encode(message: BrandData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.logoName !== "") {
      writer.uint32(10).string(message.logoName);
    }
    if (message.logoBaseColor !== "") {
      writer.uint32(18).string(message.logoBaseColor);
    }
    if (message.textColor !== "") {
      writer.uint32(26).string(message.textColor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrandData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrandData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.logoName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.logoBaseColor = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.textColor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrandData {
    return {
      logoName: isSet(object.logoName) ? globalThis.String(object.logoName) : "",
      logoBaseColor: isSet(object.logoBaseColor) ? globalThis.String(object.logoBaseColor) : "",
      textColor: isSet(object.textColor) ? globalThis.String(object.textColor) : "",
    };
  },

  toJSON(message: BrandData): unknown {
    const obj: any = {};
    if (message.logoName !== "") {
      obj.logoName = message.logoName;
    }
    if (message.logoBaseColor !== "") {
      obj.logoBaseColor = message.logoBaseColor;
    }
    if (message.textColor !== "") {
      obj.textColor = message.textColor;
    }
    return obj;
  },
};

function createBaseErrorDetail(): ErrorDetail {
  return { code: "", message: "" };
}

export const ErrorDetail = {
  encode(message: ErrorDetail, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorDetail {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorDetail();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ErrorDetail {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: ErrorDetail): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },
};

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
