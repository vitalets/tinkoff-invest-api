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
    case InstrumentType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Режим торгов инструмента */
export enum SecurityTradingStatus {
  /** SECURITY_TRADING_STATUS_UNSPECIFIED - Торговый статус не определён */
  SECURITY_TRADING_STATUS_UNSPECIFIED = 0,
  /** SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING - Недоступен для торгов */
  SECURITY_TRADING_STATUS_NOT_AVAILABLE_FOR_TRADING = 1,
  /** SECURITY_TRADING_STATUS_OPENING_PERIOD - Период открытия торгов */
  SECURITY_TRADING_STATUS_OPENING_PERIOD = 2,
  /** SECURITY_TRADING_STATUS_CLOSING_PERIOD - Период закрытия торгов */
  SECURITY_TRADING_STATUS_CLOSING_PERIOD = 3,
  /** SECURITY_TRADING_STATUS_BREAK_IN_TRADING - Перерыв в торговле */
  SECURITY_TRADING_STATUS_BREAK_IN_TRADING = 4,
  /** SECURITY_TRADING_STATUS_NORMAL_TRADING - Нормальная торговля */
  SECURITY_TRADING_STATUS_NORMAL_TRADING = 5,
  /** SECURITY_TRADING_STATUS_CLOSING_AUCTION - Аукцион закрытия */
  SECURITY_TRADING_STATUS_CLOSING_AUCTION = 6,
  /** SECURITY_TRADING_STATUS_DARK_POOL_AUCTION - Аукцион крупных пакетов */
  SECURITY_TRADING_STATUS_DARK_POOL_AUCTION = 7,
  /** SECURITY_TRADING_STATUS_DISCRETE_AUCTION - Дискретный аукцион */
  SECURITY_TRADING_STATUS_DISCRETE_AUCTION = 8,
  /** SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD - Аукцион открытия */
  SECURITY_TRADING_STATUS_OPENING_AUCTION_PERIOD = 9,
  /** SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE - Период торгов по цене аукциона закрытия */
  SECURITY_TRADING_STATUS_TRADING_AT_CLOSING_AUCTION_PRICE = 10,
  /** SECURITY_TRADING_STATUS_SESSION_ASSIGNED - Сессия назначена */
  SECURITY_TRADING_STATUS_SESSION_ASSIGNED = 11,
  /** SECURITY_TRADING_STATUS_SESSION_CLOSE - Сессия закрыта */
  SECURITY_TRADING_STATUS_SESSION_CLOSE = 12,
  /** SECURITY_TRADING_STATUS_SESSION_OPEN - Сессия открыта */
  SECURITY_TRADING_STATUS_SESSION_OPEN = 13,
  /** SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING - Доступна торговля в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_NORMAL_TRADING = 14,
  /** SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING - Перерыв торговли в режиме внутренней ликвидности брокера */
  SECURITY_TRADING_STATUS_DEALER_BREAK_IN_TRADING = 15,
  /** SECURITY_TRADING_STATUS_DEALER_NOT_AVAILABLE_FOR_TRADING - Недоступна торговля в режиме внутренней ликвидности брокера */
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

/** Денежная сумма в определенной валюте */
export interface MoneyValue {
  /** строковый ISO-код валюты */
  currency: string;
  /** целая часть суммы, может быть отрицательным числом */
  units: number;
  /** дробная часть суммы, может быть отрицательным числом */
  nano: number;
}

/** Котировка — денежная сумма без указания валюты */
export interface Quotation {
  /** целая часть суммы, может быть отрицательным числом */
  units: number;
  /** дробная часть суммы, может быть отрицательным числом */
  nano: number;
}

/** Проверка активности стрима. */
export interface Ping {
  /** Время проверки. */
  time?: Date | undefined;
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

function createBasePing(): Ping {
  return { time: undefined };
}

export const Ping = {
  encode(message: Ping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ping {
    return { time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined };
  },

  toJSON(message: Ping): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
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
