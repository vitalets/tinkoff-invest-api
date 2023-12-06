/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import {
  Ping,
  Quotation,
  SecurityTradingStatus,
  securityTradingStatusFromJSON,
  securityTradingStatusToJSON,
} from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип операции со списком подписок. */
export enum SubscriptionAction {
  /** SUBSCRIPTION_ACTION_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_ACTION_UNSPECIFIED = 0,
  /** SUBSCRIPTION_ACTION_SUBSCRIBE - Подписаться. */
  SUBSCRIPTION_ACTION_SUBSCRIBE = 1,
  /** SUBSCRIPTION_ACTION_UNSUBSCRIBE - Отписаться. */
  SUBSCRIPTION_ACTION_UNSUBSCRIBE = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionActionFromJSON(object: any): SubscriptionAction {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_ACTION_UNSPECIFIED":
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_ACTION_SUBSCRIBE":
      return SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE;
    case 2:
    case "SUBSCRIPTION_ACTION_UNSUBSCRIBE":
      return SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionAction.UNRECOGNIZED;
  }
}

export function subscriptionActionToJSON(object: SubscriptionAction): string {
  switch (object) {
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSPECIFIED:
      return "SUBSCRIPTION_ACTION_UNSPECIFIED";
    case SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE:
      return "SUBSCRIPTION_ACTION_SUBSCRIBE";
    case SubscriptionAction.SUBSCRIPTION_ACTION_UNSUBSCRIBE:
      return "SUBSCRIPTION_ACTION_UNSUBSCRIBE";
    case SubscriptionAction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Интервал свечи. */
export enum SubscriptionInterval {
  /** SUBSCRIPTION_INTERVAL_UNSPECIFIED - Интервал свечи не определён. */
  SUBSCRIPTION_INTERVAL_UNSPECIFIED = 0,
  /** SUBSCRIPTION_INTERVAL_ONE_MINUTE - Минутные свечи. */
  SUBSCRIPTION_INTERVAL_ONE_MINUTE = 1,
  /** SUBSCRIPTION_INTERVAL_FIVE_MINUTES - Пятиминутные свечи. */
  SUBSCRIPTION_INTERVAL_FIVE_MINUTES = 2,
  UNRECOGNIZED = -1,
}

export function subscriptionIntervalFromJSON(object: any): SubscriptionInterval {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_INTERVAL_UNSPECIFIED":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_INTERVAL_ONE_MINUTE":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;
    case 2:
    case "SUBSCRIPTION_INTERVAL_FIVE_MINUTES":
      return SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionInterval.UNRECOGNIZED;
  }
}

export function subscriptionIntervalToJSON(object: SubscriptionInterval): string {
  switch (object) {
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_UNSPECIFIED:
      return "SUBSCRIPTION_INTERVAL_UNSPECIFIED";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE:
      return "SUBSCRIPTION_INTERVAL_ONE_MINUTE";
    case SubscriptionInterval.SUBSCRIPTION_INTERVAL_FIVE_MINUTES:
      return "SUBSCRIPTION_INTERVAL_FIVE_MINUTES";
    case SubscriptionInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Результат подписки. */
export enum SubscriptionStatus {
  /** SUBSCRIPTION_STATUS_UNSPECIFIED - Статус подписки не определён. */
  SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
  SUBSCRIPTION_STATUS_SUCCESS = 1,
  /** SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND - Инструмент не найден. */
  SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND = 2,
  /** SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID - Некорректный статус подписки, список возможных значений: [SubscriptionAction](https://tinkoff.github.io/investAPI/marketdata#subscriptionaction). */
  SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID = 3,
  /** SUBSCRIPTION_STATUS_DEPTH_IS_INVALID - Некорректная глубина стакана, доступные значения: 1, 10, 20, 30, 40, 50. */
  SUBSCRIPTION_STATUS_DEPTH_IS_INVALID = 4,
  /** SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID - Некорректный интервал свечей, список возможных значений: [SubscriptionInterval](https://tinkoff.github.io/investAPI/marketdata#subscriptioninterval). */
  SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID = 5,
  /** SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED - Превышен лимит на общее количество подписок в рамках стрима, подробнее: [Лимитная политика](https://tinkoff.github.io/investAPI/limits/). */
  SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED = 6,
  /** SUBSCRIPTION_STATUS_INTERNAL_ERROR - Внутренняя ошибка сервиса. */
  SUBSCRIPTION_STATUS_INTERNAL_ERROR = 7,
  /** SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS - Превышен лимит на количество запросов на подписки в течение установленного отрезка времени */
  SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS = 8,
  /** SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND - Активная подписка не найдена. Ошибка может возникнуть только при отписке от не существующей отписки */
  SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND = 9,
  UNRECOGNIZED = -1,
}

export function subscriptionStatusFromJSON(object: any): SubscriptionStatus {
  switch (object) {
    case 0:
    case "SUBSCRIPTION_STATUS_UNSPECIFIED":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "SUBSCRIPTION_STATUS_SUCCESS":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS;
    case 2:
    case "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND;
    case 3:
    case "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID;
    case 4:
    case "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID;
    case 5:
    case "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID;
    case 6:
    case "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED;
    case 7:
    case "SUBSCRIPTION_STATUS_INTERNAL_ERROR":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR;
    case 8:
    case "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS;
    case 9:
    case "SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND":
      return SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubscriptionStatus.UNRECOGNIZED;
  }
}

export function subscriptionStatusToJSON(object: SubscriptionStatus): string {
  switch (object) {
    case SubscriptionStatus.SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "SUBSCRIPTION_STATUS_UNSPECIFIED";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS:
      return "SUBSCRIPTION_STATUS_SUCCESS";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND:
      return "SUBSCRIPTION_STATUS_INSTRUMENT_NOT_FOUND";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID:
      return "SUBSCRIPTION_STATUS_SUBSCRIPTION_ACTION_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_DEPTH_IS_INVALID:
      return "SUBSCRIPTION_STATUS_DEPTH_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID:
      return "SUBSCRIPTION_STATUS_INTERVAL_IS_INVALID";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED:
      return "SUBSCRIPTION_STATUS_LIMIT_IS_EXCEEDED";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_INTERNAL_ERROR:
      return "SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS:
      return "SUBSCRIPTION_STATUS_TOO_MANY_REQUESTS";
    case SubscriptionStatus.SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND:
      return "SUBSCRIPTION_STATUS_SUBSCRIPTION_NOT_FOUND";
    case SubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Направление сделки. */
export enum TradeDirection {
  /** TRADE_DIRECTION_UNSPECIFIED - Направление сделки не определено. */
  TRADE_DIRECTION_UNSPECIFIED = 0,
  /** TRADE_DIRECTION_BUY - Покупка. */
  TRADE_DIRECTION_BUY = 1,
  /** TRADE_DIRECTION_SELL - Продажа. */
  TRADE_DIRECTION_SELL = 2,
  UNRECOGNIZED = -1,
}

export function tradeDirectionFromJSON(object: any): TradeDirection {
  switch (object) {
    case 0:
    case "TRADE_DIRECTION_UNSPECIFIED":
      return TradeDirection.TRADE_DIRECTION_UNSPECIFIED;
    case 1:
    case "TRADE_DIRECTION_BUY":
      return TradeDirection.TRADE_DIRECTION_BUY;
    case 2:
    case "TRADE_DIRECTION_SELL":
      return TradeDirection.TRADE_DIRECTION_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TradeDirection.UNRECOGNIZED;
  }
}

export function tradeDirectionToJSON(object: TradeDirection): string {
  switch (object) {
    case TradeDirection.TRADE_DIRECTION_UNSPECIFIED:
      return "TRADE_DIRECTION_UNSPECIFIED";
    case TradeDirection.TRADE_DIRECTION_BUY:
      return "TRADE_DIRECTION_BUY";
    case TradeDirection.TRADE_DIRECTION_SELL:
      return "TRADE_DIRECTION_SELL";
    case TradeDirection.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Интервал свечей. */
export enum CandleInterval {
  /** CANDLE_INTERVAL_UNSPECIFIED - Интервал не определён. */
  CANDLE_INTERVAL_UNSPECIFIED = 0,
  /** CANDLE_INTERVAL_1_MIN - от 1 минуты до 1 дня. */
  CANDLE_INTERVAL_1_MIN = 1,
  /** CANDLE_INTERVAL_5_MIN - от 5 минут до 1 дня. */
  CANDLE_INTERVAL_5_MIN = 2,
  /** CANDLE_INTERVAL_15_MIN - от 15 минут до 1 дня. */
  CANDLE_INTERVAL_15_MIN = 3,
  /** CANDLE_INTERVAL_HOUR - от 1 часа до 1 недели. */
  CANDLE_INTERVAL_HOUR = 4,
  /** CANDLE_INTERVAL_DAY - от 1 дня до 1 года. */
  CANDLE_INTERVAL_DAY = 5,
  /** CANDLE_INTERVAL_2_MIN - от 2 минут до 1 дня. */
  CANDLE_INTERVAL_2_MIN = 6,
  /** CANDLE_INTERVAL_3_MIN - от 3 минут до 1 дня. */
  CANDLE_INTERVAL_3_MIN = 7,
  /** CANDLE_INTERVAL_10_MIN - от 10 минут до 1 дня. */
  CANDLE_INTERVAL_10_MIN = 8,
  /** CANDLE_INTERVAL_30_MIN - от 30 минут до 2 дней. */
  CANDLE_INTERVAL_30_MIN = 9,
  /** CANDLE_INTERVAL_2_HOUR - от 2 часов до 1 месяца. */
  CANDLE_INTERVAL_2_HOUR = 10,
  /** CANDLE_INTERVAL_4_HOUR - от 4 часов до 1 месяца. */
  CANDLE_INTERVAL_4_HOUR = 11,
  /** CANDLE_INTERVAL_WEEK - от 1 недели до 2 лет. */
  CANDLE_INTERVAL_WEEK = 12,
  /** CANDLE_INTERVAL_MONTH - от 1 месяца до 10 лет. */
  CANDLE_INTERVAL_MONTH = 13,
  UNRECOGNIZED = -1,
}

export function candleIntervalFromJSON(object: any): CandleInterval {
  switch (object) {
    case 0:
    case "CANDLE_INTERVAL_UNSPECIFIED":
      return CandleInterval.CANDLE_INTERVAL_UNSPECIFIED;
    case 1:
    case "CANDLE_INTERVAL_1_MIN":
      return CandleInterval.CANDLE_INTERVAL_1_MIN;
    case 2:
    case "CANDLE_INTERVAL_5_MIN":
      return CandleInterval.CANDLE_INTERVAL_5_MIN;
    case 3:
    case "CANDLE_INTERVAL_15_MIN":
      return CandleInterval.CANDLE_INTERVAL_15_MIN;
    case 4:
    case "CANDLE_INTERVAL_HOUR":
      return CandleInterval.CANDLE_INTERVAL_HOUR;
    case 5:
    case "CANDLE_INTERVAL_DAY":
      return CandleInterval.CANDLE_INTERVAL_DAY;
    case 6:
    case "CANDLE_INTERVAL_2_MIN":
      return CandleInterval.CANDLE_INTERVAL_2_MIN;
    case 7:
    case "CANDLE_INTERVAL_3_MIN":
      return CandleInterval.CANDLE_INTERVAL_3_MIN;
    case 8:
    case "CANDLE_INTERVAL_10_MIN":
      return CandleInterval.CANDLE_INTERVAL_10_MIN;
    case 9:
    case "CANDLE_INTERVAL_30_MIN":
      return CandleInterval.CANDLE_INTERVAL_30_MIN;
    case 10:
    case "CANDLE_INTERVAL_2_HOUR":
      return CandleInterval.CANDLE_INTERVAL_2_HOUR;
    case 11:
    case "CANDLE_INTERVAL_4_HOUR":
      return CandleInterval.CANDLE_INTERVAL_4_HOUR;
    case 12:
    case "CANDLE_INTERVAL_WEEK":
      return CandleInterval.CANDLE_INTERVAL_WEEK;
    case 13:
    case "CANDLE_INTERVAL_MONTH":
      return CandleInterval.CANDLE_INTERVAL_MONTH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CandleInterval.UNRECOGNIZED;
  }
}

export function candleIntervalToJSON(object: CandleInterval): string {
  switch (object) {
    case CandleInterval.CANDLE_INTERVAL_UNSPECIFIED:
      return "CANDLE_INTERVAL_UNSPECIFIED";
    case CandleInterval.CANDLE_INTERVAL_1_MIN:
      return "CANDLE_INTERVAL_1_MIN";
    case CandleInterval.CANDLE_INTERVAL_5_MIN:
      return "CANDLE_INTERVAL_5_MIN";
    case CandleInterval.CANDLE_INTERVAL_15_MIN:
      return "CANDLE_INTERVAL_15_MIN";
    case CandleInterval.CANDLE_INTERVAL_HOUR:
      return "CANDLE_INTERVAL_HOUR";
    case CandleInterval.CANDLE_INTERVAL_DAY:
      return "CANDLE_INTERVAL_DAY";
    case CandleInterval.CANDLE_INTERVAL_2_MIN:
      return "CANDLE_INTERVAL_2_MIN";
    case CandleInterval.CANDLE_INTERVAL_3_MIN:
      return "CANDLE_INTERVAL_3_MIN";
    case CandleInterval.CANDLE_INTERVAL_10_MIN:
      return "CANDLE_INTERVAL_10_MIN";
    case CandleInterval.CANDLE_INTERVAL_30_MIN:
      return "CANDLE_INTERVAL_30_MIN";
    case CandleInterval.CANDLE_INTERVAL_2_HOUR:
      return "CANDLE_INTERVAL_2_HOUR";
    case CandleInterval.CANDLE_INTERVAL_4_HOUR:
      return "CANDLE_INTERVAL_4_HOUR";
    case CandleInterval.CANDLE_INTERVAL_WEEK:
      return "CANDLE_INTERVAL_WEEK";
    case CandleInterval.CANDLE_INTERVAL_MONTH:
      return "CANDLE_INTERVAL_MONTH";
    case CandleInterval.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос подписки или отписки на определённые биржевые данные. */
export interface MarketDataRequest {
  /** Запрос подписки на свечи. */
  subscribeCandlesRequest?:
    | SubscribeCandlesRequest
    | undefined;
  /** Запрос подписки на стаканы. */
  subscribeOrderBookRequest?:
    | SubscribeOrderBookRequest
    | undefined;
  /** Запрос подписки на ленту обезличенных сделок. */
  subscribeTradesRequest?:
    | SubscribeTradesRequest
    | undefined;
  /** Запрос подписки на торговые статусы инструментов. */
  subscribeInfoRequest?:
    | SubscribeInfoRequest
    | undefined;
  /** Запрос подписки на цены последних сделок. */
  subscribeLastPriceRequest?:
    | SubscribeLastPriceRequest
    | undefined;
  /** Запрос своих подписок. */
  getMySubscriptions?: GetMySubscriptions | undefined;
}

export interface MarketDataServerSideStreamRequest {
  /** Запрос подписки на свечи. */
  subscribeCandlesRequest?:
    | SubscribeCandlesRequest
    | undefined;
  /** Запрос подписки на стаканы. */
  subscribeOrderBookRequest?:
    | SubscribeOrderBookRequest
    | undefined;
  /** Запрос подписки на ленту обезличенных сделок. */
  subscribeTradesRequest?:
    | SubscribeTradesRequest
    | undefined;
  /** Запрос подписки на торговые статусы инструментов. */
  subscribeInfoRequest?:
    | SubscribeInfoRequest
    | undefined;
  /** Запрос подписки на цены последних сделок. */
  subscribeLastPriceRequest?: SubscribeLastPriceRequest | undefined;
}

/** Пакет биржевой информации по подписке. */
export interface MarketDataResponse {
  /** Результат подписки на свечи. */
  subscribeCandlesResponse?:
    | SubscribeCandlesResponse
    | undefined;
  /** Результат подписки на стаканы. */
  subscribeOrderBookResponse?:
    | SubscribeOrderBookResponse
    | undefined;
  /** Результат подписки на поток обезличенных сделок. */
  subscribeTradesResponse?:
    | SubscribeTradesResponse
    | undefined;
  /** Результат подписки на торговые статусы инструментов. */
  subscribeInfoResponse?:
    | SubscribeInfoResponse
    | undefined;
  /** Свеча. */
  candle?:
    | Candle
    | undefined;
  /** Сделки. */
  trade?:
    | Trade
    | undefined;
  /** Стакан. */
  orderbook?:
    | OrderBook
    | undefined;
  /** Торговый статус. */
  tradingStatus?:
    | TradingStatus
    | undefined;
  /** Проверка активности стрима. */
  ping?:
    | Ping
    | undefined;
  /** Результат подписки на цены последние сделок по инструментам. */
  subscribeLastPriceResponse?:
    | SubscribeLastPriceResponse
    | undefined;
  /** Цена последней сделки. */
  lastPrice?: LastPrice | undefined;
}

/** subscribeCandles | Изменения статуса подписки на свечи. */
export interface SubscribeCandlesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на свечи. */
  instruments: CandleInstrument[];
  /** Флаг ожидания закрытия временного интервала для отправки свечи, применяется только для минутных свечей. */
  waitingClose: boolean;
}

/** Запрос изменения статус подписки на свечи. */
export interface CandleInstrument {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Интервал свечей. */
  interval: SubscriptionInterval;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string;
}

/** Результат изменения статус подписки на свечи. */
export interface SubscribeCandlesResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на свечи. */
  candlesSubscriptions: CandleSubscription[];
}

/** Статус подписки на свечи. */
export interface CandleSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Интервал свечей. */
  interval: SubscriptionInterval;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Запрос на изменение статуса подписки на стаканы. */
export interface SubscribeOrderBookRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на стаканы. */
  instruments: OrderBookInstrument[];
}

/** Запрос подписки на стаканы. */
export interface OrderBookInstrument {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string;
}

/** Результат изменения статуса подписки на стаканы. */
export interface SubscribeOrderBookResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на стаканы. */
  orderBookSubscriptions: OrderBookSubscription[];
}

/** Статус подписки. */
export interface OrderBookSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Изменение статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на поток обезличенных сделок. */
  instruments: TradeInstrument[];
}

/** Запрос подписки на поток обезличенных сделок. */
export interface TradeInstrument {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string;
}

/** Результат изменения статуса подписки на поток обезличенных сделок. */
export interface SubscribeTradesResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на поток сделок. */
  tradeSubscriptions: TradeSubscription[];
}

/** Статус подписки. */
export interface TradeSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Изменение статуса подписки на торговый статус инструмента. */
export interface SubscribeInfoRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на торговый статус. */
  instruments: InfoInstrument[];
}

/** Запрос подписки на торговый статус. */
export interface InfoInstrument {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string;
}

/** Результат изменения статуса подписки на торговый статус. */
export interface SubscribeInfoResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на торговый статус. */
  infoSubscriptions: InfoSubscription[];
}

/** Статус подписки. */
export interface InfoSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Изменение статуса подписки на цену последней сделки по инструменту. */
export interface SubscribeLastPriceRequest {
  /** Изменение статуса подписки. */
  subscriptionAction: SubscriptionAction;
  /** Массив инструментов для подписки на цену последней сделки. */
  instruments: LastPriceInstrument[];
}

/** Запрос подписки на последнюю цену. */
export interface LastPriceInstrument {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string;
}

/** Результат изменения статуса подписки на цену последней сделки. */
export interface SubscribeLastPriceResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://tinkoff.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Массив статусов подписки на цену последней сделки. */
  lastPriceSubscriptions: LastPriceSubscription[];
}

/** Статус подписки на цену последней сделки. */
export interface LastPriceSubscription {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус подписки. */
  subscriptionStatus: SubscriptionStatus;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Пакет свечей в рамках стрима. */
export interface Candle {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Интервал свечи. */
  interval: SubscriptionInterval;
  /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  open?:
    | Quotation
    | undefined;
  /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  high?:
    | Quotation
    | undefined;
  /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  low?:
    | Quotation
    | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  close?:
    | Quotation
    | undefined;
  /** Объём сделок в лотах. */
  volume: number;
  /** Время начала интервала свечи в часовом поясе UTC. */
  time?:
    | Date
    | undefined;
  /** Время последней сделки, вошедшей в свечу в часовом поясе UTC. */
  lastTradeTs?:
    | Date
    | undefined;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Пакет стаканов в рамках стрима. */
export interface OrderBook {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Флаг консистентности стакана. **false** значит не все заявки попали в стакан по причинам сетевых задержек или нарушения порядка доставки. */
  isConsistent: boolean;
  /** Массив предложений. */
  bids: Order[];
  /** Массив спроса. */
  asks: Order[];
  /** Время формирования стакана в часовом поясе UTC по времени биржи. */
  time?:
    | Date
    | undefined;
  /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  limitUp?:
    | Quotation
    | undefined;
  /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  limitDown?:
    | Quotation
    | undefined;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Массив предложений/спроса. */
export interface Order {
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  price?:
    | Quotation
    | undefined;
  /** Количество в лотах. */
  quantity: number;
}

/** Информация о сделке. */
export interface Trade {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Направление сделки. */
  direction: TradeDirection;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  price?:
    | Quotation
    | undefined;
  /** Количество лотов. */
  quantity: number;
  /** Время сделки в часовом поясе UTC по времени биржи. */
  time?:
    | Date
    | undefined;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Пакет изменения торгового статуса. */
export interface TradingStatus {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Время изменения торгового статуса в часовом поясе UTC. */
  time?:
    | Date
    | undefined;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Запрос исторических свечей. */
export interface GetCandlesRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to?:
    | Date
    | undefined;
  /** Интервал запрошенных свечей. */
  interval: CandleInterval;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
  instrumentId: string;
}

/** Список свечей. */
export interface GetCandlesResponse {
  /** Массив свечей. */
  candles: HistoricCandle[];
}

/** Информация о свече. */
export interface HistoricCandle {
  /** Цена открытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  open?:
    | Quotation
    | undefined;
  /** Максимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  high?:
    | Quotation
    | undefined;
  /** Минимальная цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  low?:
    | Quotation
    | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  close?:
    | Quotation
    | undefined;
  /** Объём торгов в лотах. */
  volume: number;
  /** Время свечи в часовом поясе UTC. */
  time?:
    | Date
    | undefined;
  /** Признак завершённости свечи. **false** значит, свеча за текущие интервал ещё сформирована не полностью. */
  isComplete: boolean;
}

/** Запрос получения цен последних сделок. */
export interface GetLastPricesRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string[];
  /** Массив идентификаторов инструмента, принимает значения figi или instrument_uid. */
  instrumentId: string[];
}

/** Список цен последних сделок. */
export interface GetLastPricesResponse {
  /** Массив цен последних сделок. */
  lastPrices: LastPrice[];
}

/** Информация о цене последней сделки. */
export interface LastPrice {
  /** Figi инструмента. */
  figi: string;
  /** Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  price?:
    | Quotation
    | undefined;
  /** Время получения последней цены в часовом поясе UTC по времени биржи. */
  time?:
    | Date
    | undefined;
  /** Uid инструмента */
  instrumentUid: string;
}

/** Запрос стакана. */
export interface GetOrderBookRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
  instrumentId: string;
}

/** Информация о стакане. */
export interface GetOrderBookResponse {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Глубина стакана. */
  depth: number;
  /** Множество пар значений на покупку. */
  bids: Order[];
  /** Множество пар значений на продажу. */
  asks: Order[];
  /** Цена последней сделки за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  lastPrice?:
    | Quotation
    | undefined;
  /** Цена закрытия за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  closePrice?:
    | Quotation
    | undefined;
  /** Верхний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  limitUp?:
    | Quotation
    | undefined;
  /** Нижний лимит цены за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. Для перевод цен в валюту рекомендуем использовать [информацию со страницы](https://tinkoff.github.io/investAPI/faq_marketdata/) */
  limitDown?:
    | Quotation
    | undefined;
  /** Время получения цены последней сделки. */
  lastPriceTs?:
    | Date
    | undefined;
  /** Время получения цены закрытия. */
  closePriceTs?:
    | Date
    | undefined;
  /** Время формирования стакана на бирже. */
  orderbookTs?:
    | Date
    | undefined;
  /** Uid инструмента. */
  instrumentUid: string;
}

/** Запрос получения торгового статуса. */
export interface GetTradingStatusRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
  instrumentId: string;
}

/** Запрос получения торгового статуса. */
export interface GetTradingStatusesRequest {
  /** Идентификатор инструмента, принимает значение figi или instrument_uid */
  instrumentId: string[];
}

/** Информация о торговом статусе. */
export interface GetTradingStatusesResponse {
  /** Массив информации о торговых статусах */
  tradingStatuses: GetTradingStatusResponse[];
}

/** Информация о торговом статусе. */
export interface GetTradingStatusResponse {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Статус торговли инструментом. */
  tradingStatus: SecurityTradingStatus;
  /** Признак доступности выставления лимитной заявки по инструменту. */
  limitOrderAvailableFlag: boolean;
  /** Признак доступности выставления рыночной заявки по инструменту. */
  marketOrderAvailableFlag: boolean;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Uid инструмента. */
  instrumentUid: string;
}

/** Запрос обезличенных сделок за последний час. */
export interface GetLastTradesRequest {
  /**
   * Deprecated Figi-идентификатор инструмента. Необходимо использовать instrument_id.
   *
   * @deprecated
   */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to?:
    | Date
    | undefined;
  /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
  instrumentId: string;
}

/** Обезличенных сделок за последний час. */
export interface GetLastTradesResponse {
  /** Массив сделок. */
  trades: Trade[];
}

/** Запрос активных подписок. */
export interface GetMySubscriptions {
}

/** Запрос цен закрытия торговой сессии по инструментам. */
export interface GetClosePricesRequest {
  /** Массив по инструментам. */
  instruments: InstrumentClosePriceRequest[];
}

/** Запрос цен закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceRequest {
  /** Идентификатор инструмента, принимает значение figi или instrument_uid. */
  instrumentId: string;
}

/** Цены закрытия торговой сессии по инструментам. */
export interface GetClosePricesResponse {
  /** Массив по инструментам. */
  closePrices: InstrumentClosePriceResponse[];
}

/** Цена закрытия торговой сессии по инструменту. */
export interface InstrumentClosePriceResponse {
  /** Figi инструмента. */
  figi: string;
  /** Uid инструмента. */
  instrumentUid: string;
  /** Цена закрытия торговой сессии. */
  price?:
    | Quotation
    | undefined;
  /** Дата совершения торгов. */
  time?: Date | undefined;
}

function createBaseMarketDataRequest(): MarketDataRequest {
  return {
    subscribeCandlesRequest: undefined,
    subscribeOrderBookRequest: undefined,
    subscribeTradesRequest: undefined,
    subscribeInfoRequest: undefined,
    subscribeLastPriceRequest: undefined,
    getMySubscriptions: undefined,
  };
}

export const MarketDataRequest = {
  encode(message: MarketDataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeCandlesRequest !== undefined) {
      SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscribeTradesRequest !== undefined) {
      SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribeInfoRequest !== undefined) {
      SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
    }
    if (message.getMySubscriptions !== undefined) {
      GetMySubscriptions.encode(message.getMySubscriptions, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscribeCandlesRequest = SubscribeCandlesRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscribeOrderBookRequest = SubscribeOrderBookRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subscribeTradesRequest = SubscribeTradesRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subscribeInfoRequest = SubscribeInfoRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subscribeLastPriceRequest = SubscribeLastPriceRequest.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.getMySubscriptions = GetMySubscriptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketDataRequest {
    return {
      subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
        ? SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
        : undefined,
      subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
        ? SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
        : undefined,
      subscribeTradesRequest: isSet(object.subscribeTradesRequest)
        ? SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
        : undefined,
      subscribeInfoRequest: isSet(object.subscribeInfoRequest)
        ? SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
        : undefined,
      subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
        ? SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
        : undefined,
      getMySubscriptions: isSet(object.getMySubscriptions)
        ? GetMySubscriptions.fromJSON(object.getMySubscriptions)
        : undefined,
    };
  },

  toJSON(message: MarketDataRequest): unknown {
    const obj: any = {};
    if (message.subscribeCandlesRequest !== undefined) {
      obj.subscribeCandlesRequest = SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest);
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      obj.subscribeOrderBookRequest = SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest);
    }
    if (message.subscribeTradesRequest !== undefined) {
      obj.subscribeTradesRequest = SubscribeTradesRequest.toJSON(message.subscribeTradesRequest);
    }
    if (message.subscribeInfoRequest !== undefined) {
      obj.subscribeInfoRequest = SubscribeInfoRequest.toJSON(message.subscribeInfoRequest);
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      obj.subscribeLastPriceRequest = SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest);
    }
    if (message.getMySubscriptions !== undefined) {
      obj.getMySubscriptions = GetMySubscriptions.toJSON(message.getMySubscriptions);
    }
    return obj;
  },
};

function createBaseMarketDataServerSideStreamRequest(): MarketDataServerSideStreamRequest {
  return {
    subscribeCandlesRequest: undefined,
    subscribeOrderBookRequest: undefined,
    subscribeTradesRequest: undefined,
    subscribeInfoRequest: undefined,
    subscribeLastPriceRequest: undefined,
  };
}

export const MarketDataServerSideStreamRequest = {
  encode(message: MarketDataServerSideStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeCandlesRequest !== undefined) {
      SubscribeCandlesRequest.encode(message.subscribeCandlesRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      SubscribeOrderBookRequest.encode(message.subscribeOrderBookRequest, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscribeTradesRequest !== undefined) {
      SubscribeTradesRequest.encode(message.subscribeTradesRequest, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribeInfoRequest !== undefined) {
      SubscribeInfoRequest.encode(message.subscribeInfoRequest, writer.uint32(34).fork()).ldelim();
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      SubscribeLastPriceRequest.encode(message.subscribeLastPriceRequest, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataServerSideStreamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataServerSideStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscribeCandlesRequest = SubscribeCandlesRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscribeOrderBookRequest = SubscribeOrderBookRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subscribeTradesRequest = SubscribeTradesRequest.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subscribeInfoRequest = SubscribeInfoRequest.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.subscribeLastPriceRequest = SubscribeLastPriceRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketDataServerSideStreamRequest {
    return {
      subscribeCandlesRequest: isSet(object.subscribeCandlesRequest)
        ? SubscribeCandlesRequest.fromJSON(object.subscribeCandlesRequest)
        : undefined,
      subscribeOrderBookRequest: isSet(object.subscribeOrderBookRequest)
        ? SubscribeOrderBookRequest.fromJSON(object.subscribeOrderBookRequest)
        : undefined,
      subscribeTradesRequest: isSet(object.subscribeTradesRequest)
        ? SubscribeTradesRequest.fromJSON(object.subscribeTradesRequest)
        : undefined,
      subscribeInfoRequest: isSet(object.subscribeInfoRequest)
        ? SubscribeInfoRequest.fromJSON(object.subscribeInfoRequest)
        : undefined,
      subscribeLastPriceRequest: isSet(object.subscribeLastPriceRequest)
        ? SubscribeLastPriceRequest.fromJSON(object.subscribeLastPriceRequest)
        : undefined,
    };
  },

  toJSON(message: MarketDataServerSideStreamRequest): unknown {
    const obj: any = {};
    if (message.subscribeCandlesRequest !== undefined) {
      obj.subscribeCandlesRequest = SubscribeCandlesRequest.toJSON(message.subscribeCandlesRequest);
    }
    if (message.subscribeOrderBookRequest !== undefined) {
      obj.subscribeOrderBookRequest = SubscribeOrderBookRequest.toJSON(message.subscribeOrderBookRequest);
    }
    if (message.subscribeTradesRequest !== undefined) {
      obj.subscribeTradesRequest = SubscribeTradesRequest.toJSON(message.subscribeTradesRequest);
    }
    if (message.subscribeInfoRequest !== undefined) {
      obj.subscribeInfoRequest = SubscribeInfoRequest.toJSON(message.subscribeInfoRequest);
    }
    if (message.subscribeLastPriceRequest !== undefined) {
      obj.subscribeLastPriceRequest = SubscribeLastPriceRequest.toJSON(message.subscribeLastPriceRequest);
    }
    return obj;
  },
};

function createBaseMarketDataResponse(): MarketDataResponse {
  return {
    subscribeCandlesResponse: undefined,
    subscribeOrderBookResponse: undefined,
    subscribeTradesResponse: undefined,
    subscribeInfoResponse: undefined,
    candle: undefined,
    trade: undefined,
    orderbook: undefined,
    tradingStatus: undefined,
    ping: undefined,
    subscribeLastPriceResponse: undefined,
    lastPrice: undefined,
  };
}

export const MarketDataResponse = {
  encode(message: MarketDataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscribeCandlesResponse !== undefined) {
      SubscribeCandlesResponse.encode(message.subscribeCandlesResponse, writer.uint32(10).fork()).ldelim();
    }
    if (message.subscribeOrderBookResponse !== undefined) {
      SubscribeOrderBookResponse.encode(message.subscribeOrderBookResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscribeTradesResponse !== undefined) {
      SubscribeTradesResponse.encode(message.subscribeTradesResponse, writer.uint32(26).fork()).ldelim();
    }
    if (message.subscribeInfoResponse !== undefined) {
      SubscribeInfoResponse.encode(message.subscribeInfoResponse, writer.uint32(34).fork()).ldelim();
    }
    if (message.candle !== undefined) {
      Candle.encode(message.candle, writer.uint32(42).fork()).ldelim();
    }
    if (message.trade !== undefined) {
      Trade.encode(message.trade, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderbook !== undefined) {
      OrderBook.encode(message.orderbook, writer.uint32(58).fork()).ldelim();
    }
    if (message.tradingStatus !== undefined) {
      TradingStatus.encode(message.tradingStatus, writer.uint32(66).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(74).fork()).ldelim();
    }
    if (message.subscribeLastPriceResponse !== undefined) {
      SubscribeLastPriceResponse.encode(message.subscribeLastPriceResponse, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastPrice !== undefined) {
      LastPrice.encode(message.lastPrice, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketDataResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscribeCandlesResponse = SubscribeCandlesResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subscribeOrderBookResponse = SubscribeOrderBookResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subscribeTradesResponse = SubscribeTradesResponse.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.subscribeInfoResponse = SubscribeInfoResponse.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.candle = Candle.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.trade = Trade.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.orderbook = OrderBook.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.tradingStatus = TradingStatus.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ping = Ping.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.subscribeLastPriceResponse = SubscribeLastPriceResponse.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.lastPrice = LastPrice.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MarketDataResponse {
    return {
      subscribeCandlesResponse: isSet(object.subscribeCandlesResponse)
        ? SubscribeCandlesResponse.fromJSON(object.subscribeCandlesResponse)
        : undefined,
      subscribeOrderBookResponse: isSet(object.subscribeOrderBookResponse)
        ? SubscribeOrderBookResponse.fromJSON(object.subscribeOrderBookResponse)
        : undefined,
      subscribeTradesResponse: isSet(object.subscribeTradesResponse)
        ? SubscribeTradesResponse.fromJSON(object.subscribeTradesResponse)
        : undefined,
      subscribeInfoResponse: isSet(object.subscribeInfoResponse)
        ? SubscribeInfoResponse.fromJSON(object.subscribeInfoResponse)
        : undefined,
      candle: isSet(object.candle) ? Candle.fromJSON(object.candle) : undefined,
      trade: isSet(object.trade) ? Trade.fromJSON(object.trade) : undefined,
      orderbook: isSet(object.orderbook) ? OrderBook.fromJSON(object.orderbook) : undefined,
      tradingStatus: isSet(object.tradingStatus) ? TradingStatus.fromJSON(object.tradingStatus) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
      subscribeLastPriceResponse: isSet(object.subscribeLastPriceResponse)
        ? SubscribeLastPriceResponse.fromJSON(object.subscribeLastPriceResponse)
        : undefined,
      lastPrice: isSet(object.lastPrice) ? LastPrice.fromJSON(object.lastPrice) : undefined,
    };
  },

  toJSON(message: MarketDataResponse): unknown {
    const obj: any = {};
    if (message.subscribeCandlesResponse !== undefined) {
      obj.subscribeCandlesResponse = SubscribeCandlesResponse.toJSON(message.subscribeCandlesResponse);
    }
    if (message.subscribeOrderBookResponse !== undefined) {
      obj.subscribeOrderBookResponse = SubscribeOrderBookResponse.toJSON(message.subscribeOrderBookResponse);
    }
    if (message.subscribeTradesResponse !== undefined) {
      obj.subscribeTradesResponse = SubscribeTradesResponse.toJSON(message.subscribeTradesResponse);
    }
    if (message.subscribeInfoResponse !== undefined) {
      obj.subscribeInfoResponse = SubscribeInfoResponse.toJSON(message.subscribeInfoResponse);
    }
    if (message.candle !== undefined) {
      obj.candle = Candle.toJSON(message.candle);
    }
    if (message.trade !== undefined) {
      obj.trade = Trade.toJSON(message.trade);
    }
    if (message.orderbook !== undefined) {
      obj.orderbook = OrderBook.toJSON(message.orderbook);
    }
    if (message.tradingStatus !== undefined) {
      obj.tradingStatus = TradingStatus.toJSON(message.tradingStatus);
    }
    if (message.ping !== undefined) {
      obj.ping = Ping.toJSON(message.ping);
    }
    if (message.subscribeLastPriceResponse !== undefined) {
      obj.subscribeLastPriceResponse = SubscribeLastPriceResponse.toJSON(message.subscribeLastPriceResponse);
    }
    if (message.lastPrice !== undefined) {
      obj.lastPrice = LastPrice.toJSON(message.lastPrice);
    }
    return obj;
  },
};

function createBaseSubscribeCandlesRequest(): SubscribeCandlesRequest {
  return { subscriptionAction: 0, instruments: [], waitingClose: false };
}

export const SubscribeCandlesRequest = {
  encode(message: SubscribeCandlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      CandleInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.waitingClose === true) {
      writer.uint32(24).bool(message.waitingClose);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionAction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instruments.push(CandleInstrument.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.waitingClose = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => CandleInstrument.fromJSON(e))
        : [],
      waitingClose: isSet(object.waitingClose) ? globalThis.Boolean(object.waitingClose) : false,
    };
  },

  toJSON(message: SubscribeCandlesRequest): unknown {
    const obj: any = {};
    if (message.subscriptionAction !== 0) {
      obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction);
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => CandleInstrument.toJSON(e));
    }
    if (message.waitingClose === true) {
      obj.waitingClose = message.waitingClose;
    }
    return obj;
  },
};

function createBaseCandleInstrument(): CandleInstrument {
  return { figi: "", interval: 0, instrumentId: "" };
}

export const CandleInstrument = {
  encode(message: CandleInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.instrumentId !== "") {
      writer.uint32(26).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleInstrument();
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

          message.interval = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): CandleInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: CandleInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.interval !== 0) {
      obj.interval = subscriptionIntervalToJSON(message.interval);
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseSubscribeCandlesResponse(): SubscribeCandlesResponse {
  return { trackingId: "", candlesSubscriptions: [] };
}

export const SubscribeCandlesResponse = {
  encode(message: SubscribeCandlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.candlesSubscriptions) {
      CandleSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.candlesSubscriptions.push(CandleSubscription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeCandlesResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      candlesSubscriptions: globalThis.Array.isArray(object?.candlesSubscriptions)
        ? object.candlesSubscriptions.map((e: any) => CandleSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeCandlesResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.candlesSubscriptions?.length) {
      obj.candlesSubscriptions = message.candlesSubscriptions.map((e) => CandleSubscription.toJSON(e));
    }
    return obj;
  },
};

function createBaseCandleSubscription(): CandleSubscription {
  return { figi: "", interval: 0, subscriptionStatus: 0, instrumentUid: "" };
}

export const CandleSubscription = {
  encode(message: CandleSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(34).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CandleSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandleSubscription();
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

          message.interval = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscriptionStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): CandleSubscription {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: CandleSubscription): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.interval !== 0) {
      obj.interval = subscriptionIntervalToJSON(message.interval);
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseSubscribeOrderBookRequest(): SubscribeOrderBookRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeOrderBookRequest = {
  encode(message: SubscribeOrderBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      OrderBookInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionAction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instruments.push(OrderBookInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => OrderBookInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookRequest): unknown {
    const obj: any = {};
    if (message.subscriptionAction !== 0) {
      obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction);
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => OrderBookInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseOrderBookInstrument(): OrderBookInstrument {
  return { figi: "", depth: 0, instrumentId: "" };
}

export const OrderBookInstrument = {
  encode(message: OrderBookInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.instrumentId !== "") {
      writer.uint32(26).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookInstrument();
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

          message.depth = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): OrderBookInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: OrderBookInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseSubscribeOrderBookResponse(): SubscribeOrderBookResponse {
  return { trackingId: "", orderBookSubscriptions: [] };
}

export const SubscribeOrderBookResponse = {
  encode(message: SubscribeOrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.orderBookSubscriptions) {
      OrderBookSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeOrderBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderBookSubscriptions.push(OrderBookSubscription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeOrderBookResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      orderBookSubscriptions: globalThis.Array.isArray(object?.orderBookSubscriptions)
        ? object.orderBookSubscriptions.map((e: any) => OrderBookSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeOrderBookResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.orderBookSubscriptions?.length) {
      obj.orderBookSubscriptions = message.orderBookSubscriptions.map((e) => OrderBookSubscription.toJSON(e));
    }
    return obj;
  },
};

function createBaseOrderBookSubscription(): OrderBookSubscription {
  return { figi: "", depth: 0, subscriptionStatus: 0, instrumentUid: "" };
}

export const OrderBookSubscription = {
  encode(message: OrderBookSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(24).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(34).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBookSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBookSubscription();
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

          message.depth = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.subscriptionStatus = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): OrderBookSubscription {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0,
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: OrderBookSubscription): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseSubscribeTradesRequest(): SubscribeTradesRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeTradesRequest = {
  encode(message: SubscribeTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      TradeInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionAction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instruments.push(TradeInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => TradeInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeTradesRequest): unknown {
    const obj: any = {};
    if (message.subscriptionAction !== 0) {
      obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction);
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => TradeInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseTradeInstrument(): TradeInstrument {
  return { figi: "", instrumentId: "" };
}

export const TradeInstrument = {
  encode(message: TradeInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeInstrument();
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
          if (tag !== 18) {
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

  fromJSON(object: any): TradeInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: TradeInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseSubscribeTradesResponse(): SubscribeTradesResponse {
  return { trackingId: "", tradeSubscriptions: [] };
}

export const SubscribeTradesResponse = {
  encode(message: SubscribeTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.tradeSubscriptions) {
      TradeSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeTradesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tradeSubscriptions.push(TradeSubscription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeTradesResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      tradeSubscriptions: globalThis.Array.isArray(object?.tradeSubscriptions)
        ? object.tradeSubscriptions.map((e: any) => TradeSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeTradesResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.tradeSubscriptions?.length) {
      obj.tradeSubscriptions = message.tradeSubscriptions.map((e) => TradeSubscription.toJSON(e));
    }
    return obj;
  },
};

function createBaseTradeSubscription(): TradeSubscription {
  return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}

export const TradeSubscription = {
  encode(message: TradeSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradeSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradeSubscription();
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

          message.subscriptionStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): TradeSubscription {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: TradeSubscription): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseSubscribeInfoRequest(): SubscribeInfoRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeInfoRequest = {
  encode(message: SubscribeInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      InfoInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionAction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instruments.push(InfoInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => InfoInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoRequest): unknown {
    const obj: any = {};
    if (message.subscriptionAction !== 0) {
      obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction);
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => InfoInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseInfoInstrument(): InfoInstrument {
  return { figi: "", instrumentId: "" };
}

export const InfoInstrument = {
  encode(message: InfoInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoInstrument();
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
          if (tag !== 18) {
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

  fromJSON(object: any): InfoInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: InfoInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseSubscribeInfoResponse(): SubscribeInfoResponse {
  return { trackingId: "", infoSubscriptions: [] };
}

export const SubscribeInfoResponse = {
  encode(message: SubscribeInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.infoSubscriptions) {
      InfoSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.infoSubscriptions.push(InfoSubscription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeInfoResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      infoSubscriptions: globalThis.Array.isArray(object?.infoSubscriptions)
        ? object.infoSubscriptions.map((e: any) => InfoSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeInfoResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.infoSubscriptions?.length) {
      obj.infoSubscriptions = message.infoSubscriptions.map((e) => InfoSubscription.toJSON(e));
    }
    return obj;
  },
};

function createBaseInfoSubscription(): InfoSubscription {
  return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}

export const InfoSubscription = {
  encode(message: InfoSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InfoSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInfoSubscription();
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

          message.subscriptionStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): InfoSubscription {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: InfoSubscription): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseSubscribeLastPriceRequest(): SubscribeLastPriceRequest {
  return { subscriptionAction: 0, instruments: [] };
}

export const SubscribeLastPriceRequest = {
  encode(message: SubscribeLastPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptionAction !== 0) {
      writer.uint32(8).int32(message.subscriptionAction);
    }
    for (const v of message.instruments) {
      LastPriceInstrument.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.subscriptionAction = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instruments.push(LastPriceInstrument.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceRequest {
    return {
      subscriptionAction: isSet(object.subscriptionAction) ? subscriptionActionFromJSON(object.subscriptionAction) : 0,
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => LastPriceInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceRequest): unknown {
    const obj: any = {};
    if (message.subscriptionAction !== 0) {
      obj.subscriptionAction = subscriptionActionToJSON(message.subscriptionAction);
    }
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => LastPriceInstrument.toJSON(e));
    }
    return obj;
  },
};

function createBaseLastPriceInstrument(): LastPriceInstrument {
  return { figi: "", instrumentId: "" };
}

export const LastPriceInstrument = {
  encode(message: LastPriceInstrument, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceInstrument {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceInstrument();
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
          if (tag !== 18) {
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

  fromJSON(object: any): LastPriceInstrument {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: LastPriceInstrument): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseSubscribeLastPriceResponse(): SubscribeLastPriceResponse {
  return { trackingId: "", lastPriceSubscriptions: [] };
}

export const SubscribeLastPriceResponse = {
  encode(message: SubscribeLastPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    for (const v of message.lastPriceSubscriptions) {
      LastPriceSubscription.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscribeLastPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscribeLastPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.lastPriceSubscriptions.push(LastPriceSubscription.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscribeLastPriceResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      lastPriceSubscriptions: globalThis.Array.isArray(object?.lastPriceSubscriptions)
        ? object.lastPriceSubscriptions.map((e: any) => LastPriceSubscription.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubscribeLastPriceResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.lastPriceSubscriptions?.length) {
      obj.lastPriceSubscriptions = message.lastPriceSubscriptions.map((e) => LastPriceSubscription.toJSON(e));
    }
    return obj;
  },
};

function createBaseLastPriceSubscription(): LastPriceSubscription {
  return { figi: "", subscriptionStatus: 0, instrumentUid: "" };
}

export const LastPriceSubscription = {
  encode(message: LastPriceSubscription, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(16).int32(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(26).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPriceSubscription {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPriceSubscription();
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

          message.subscriptionStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): LastPriceSubscription {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      subscriptionStatus: isSet(object.subscriptionStatus) ? subscriptionStatusFromJSON(object.subscriptionStatus) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: LastPriceSubscription): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = subscriptionStatusToJSON(message.subscriptionStatus);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseCandle(): Candle {
  return {
    figi: "",
    interval: 0,
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    lastTradeTs: undefined,
    instrumentUid: "",
  };
}

export const Candle = {
  encode(message: Candle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.interval !== 0) {
      writer.uint32(16).int32(message.interval);
    }
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(26).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(34).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(42).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(50).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(56).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(66).fork()).ldelim();
    }
    if (message.lastTradeTs !== undefined) {
      Timestamp.encode(toTimestamp(message.lastTradeTs), writer.uint32(74).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(82).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Candle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCandle();
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

          message.interval = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.open = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.high = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.low = Quotation.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.close = Quotation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.volume = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.lastTradeTs = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
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

  fromJSON(object: any): Candle {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      interval: isSet(object.interval) ? subscriptionIntervalFromJSON(object.interval) : 0,
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      lastTradeTs: isSet(object.lastTradeTs) ? fromJsonTimestamp(object.lastTradeTs) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: Candle): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.interval !== 0) {
      obj.interval = subscriptionIntervalToJSON(message.interval);
    }
    if (message.open !== undefined) {
      obj.open = Quotation.toJSON(message.open);
    }
    if (message.high !== undefined) {
      obj.high = Quotation.toJSON(message.high);
    }
    if (message.low !== undefined) {
      obj.low = Quotation.toJSON(message.low);
    }
    if (message.close !== undefined) {
      obj.close = Quotation.toJSON(message.close);
    }
    if (message.volume !== 0) {
      obj.volume = Math.round(message.volume);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.lastTradeTs !== undefined) {
      obj.lastTradeTs = message.lastTradeTs.toISOString();
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseOrderBook(): OrderBook {
  return {
    figi: "",
    depth: 0,
    isConsistent: false,
    bids: [],
    asks: [],
    time: undefined,
    limitUp: undefined,
    limitDown: undefined,
    instrumentUid: "",
  };
}

export const OrderBook = {
  encode(message: OrderBook, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.isConsistent === true) {
      writer.uint32(24).bool(message.isConsistent);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(74).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBook {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBook();
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

          message.depth = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.isConsistent = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.bids.push(Order.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.asks.push(Order.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.limitUp = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.limitDown = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): OrderBook {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0,
      isConsistent: isSet(object.isConsistent) ? globalThis.Boolean(object.isConsistent) : false,
      bids: globalThis.Array.isArray(object?.bids) ? object.bids.map((e: any) => Order.fromJSON(e)) : [],
      asks: globalThis.Array.isArray(object?.asks) ? object.asks.map((e: any) => Order.fromJSON(e)) : [],
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitUp: isSet(object.limitUp) ? Quotation.fromJSON(object.limitUp) : undefined,
      limitDown: isSet(object.limitDown) ? Quotation.fromJSON(object.limitDown) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: OrderBook): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.isConsistent === true) {
      obj.isConsistent = message.isConsistent;
    }
    if (message.bids?.length) {
      obj.bids = message.bids.map((e) => Order.toJSON(e));
    }
    if (message.asks?.length) {
      obj.asks = message.asks.map((e) => Order.toJSON(e));
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.limitUp !== undefined) {
      obj.limitUp = Quotation.toJSON(message.limitUp);
    }
    if (message.limitDown !== undefined) {
      obj.limitDown = Quotation.toJSON(message.limitDown);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseOrder(): Order {
  return { price: undefined, quantity: 0 };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int64(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    return obj;
  },
};

function createBaseTrade(): Trade {
  return { figi: "", direction: 0, price: undefined, quantity: 0, time: undefined, instrumentUid: "" };
}

export const Trade = {
  encode(message: Trade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.direction !== 0) {
      writer.uint32(16).int32(message.direction);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(32).int64(message.quantity);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(42).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Trade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrade();
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

          message.direction = reader.int32() as any;
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

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): Trade {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      direction: isSet(object.direction) ? tradeDirectionFromJSON(object.direction) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: Trade): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.direction !== 0) {
      obj.direction = tradeDirectionToJSON(message.direction);
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseTradingStatus(): TradingStatus {
  return {
    figi: "",
    tradingStatus: 0,
    time: undefined,
    limitOrderAvailableFlag: false,
    marketOrderAvailableFlag: false,
    instrumentUid: "",
  };
}

export const TradingStatus = {
  encode(message: TradingStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(40).bool(message.marketOrderAvailableFlag);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingStatus();
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

          message.tradingStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limitOrderAvailableFlag = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.marketOrderAvailableFlag = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): TradingStatus {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag)
        ? globalThis.Boolean(object.limitOrderAvailableFlag)
        : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? globalThis.Boolean(object.marketOrderAvailableFlag)
        : false,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: TradingStatus): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.limitOrderAvailableFlag === true) {
      obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag;
    }
    if (message.marketOrderAvailableFlag === true) {
      obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseGetCandlesRequest(): GetCandlesRequest {
  return { figi: "", from: undefined, to: undefined, interval: 0, instrumentId: "" };
}

export const GetCandlesRequest = {
  encode(message: GetCandlesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    if (message.interval !== 0) {
      writer.uint32(32).int32(message.interval);
    }
    if (message.instrumentId !== "") {
      writer.uint32(42).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesRequest();
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
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.interval = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): GetCandlesRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      interval: isSet(object.interval) ? candleIntervalFromJSON(object.interval) : 0,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: GetCandlesRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    if (message.interval !== 0) {
      obj.interval = candleIntervalToJSON(message.interval);
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetCandlesResponse(): GetCandlesResponse {
  return { candles: [] };
}

export const GetCandlesResponse = {
  encode(message: GetCandlesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.candles) {
      HistoricCandle.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetCandlesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetCandlesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.candles.push(HistoricCandle.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetCandlesResponse {
    return {
      candles: globalThis.Array.isArray(object?.candles)
        ? object.candles.map((e: any) => HistoricCandle.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetCandlesResponse): unknown {
    const obj: any = {};
    if (message.candles?.length) {
      obj.candles = message.candles.map((e) => HistoricCandle.toJSON(e));
    }
    return obj;
  },
};

function createBaseHistoricCandle(): HistoricCandle {
  return {
    open: undefined,
    high: undefined,
    low: undefined,
    close: undefined,
    volume: 0,
    time: undefined,
    isComplete: false,
  };
}

export const HistoricCandle = {
  encode(message: HistoricCandle, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.open !== undefined) {
      Quotation.encode(message.open, writer.uint32(10).fork()).ldelim();
    }
    if (message.high !== undefined) {
      Quotation.encode(message.high, writer.uint32(18).fork()).ldelim();
    }
    if (message.low !== undefined) {
      Quotation.encode(message.low, writer.uint32(26).fork()).ldelim();
    }
    if (message.close !== undefined) {
      Quotation.encode(message.close, writer.uint32(34).fork()).ldelim();
    }
    if (message.volume !== 0) {
      writer.uint32(40).int64(message.volume);
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(50).fork()).ldelim();
    }
    if (message.isComplete === true) {
      writer.uint32(56).bool(message.isComplete);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricCandle {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricCandle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.open = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.high = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.low = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.close = Quotation.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.volume = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.isComplete = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HistoricCandle {
    return {
      open: isSet(object.open) ? Quotation.fromJSON(object.open) : undefined,
      high: isSet(object.high) ? Quotation.fromJSON(object.high) : undefined,
      low: isSet(object.low) ? Quotation.fromJSON(object.low) : undefined,
      close: isSet(object.close) ? Quotation.fromJSON(object.close) : undefined,
      volume: isSet(object.volume) ? globalThis.Number(object.volume) : 0,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      isComplete: isSet(object.isComplete) ? globalThis.Boolean(object.isComplete) : false,
    };
  },

  toJSON(message: HistoricCandle): unknown {
    const obj: any = {};
    if (message.open !== undefined) {
      obj.open = Quotation.toJSON(message.open);
    }
    if (message.high !== undefined) {
      obj.high = Quotation.toJSON(message.high);
    }
    if (message.low !== undefined) {
      obj.low = Quotation.toJSON(message.low);
    }
    if (message.close !== undefined) {
      obj.close = Quotation.toJSON(message.close);
    }
    if (message.volume !== 0) {
      obj.volume = Math.round(message.volume);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.isComplete === true) {
      obj.isComplete = message.isComplete;
    }
    return obj;
  },
};

function createBaseGetLastPricesRequest(): GetLastPricesRequest {
  return { figi: [], instrumentId: [] };
}

export const GetLastPricesRequest = {
  encode(message: GetLastPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.figi) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.instrumentId) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.figi.push(reader.string());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instrumentId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesRequest {
    return {
      figi: globalThis.Array.isArray(object?.figi) ? object.figi.map((e: any) => globalThis.String(e)) : [],
      instrumentId: globalThis.Array.isArray(object?.instrumentId)
        ? object.instrumentId.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetLastPricesRequest): unknown {
    const obj: any = {};
    if (message.figi?.length) {
      obj.figi = message.figi;
    }
    if (message.instrumentId?.length) {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetLastPricesResponse(): GetLastPricesResponse {
  return { lastPrices: [] };
}

export const GetLastPricesResponse = {
  encode(message: GetLastPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lastPrices) {
      LastPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastPricesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.lastPrices.push(LastPrice.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLastPricesResponse {
    return {
      lastPrices: globalThis.Array.isArray(object?.lastPrices)
        ? object.lastPrices.map((e: any) => LastPrice.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetLastPricesResponse): unknown {
    const obj: any = {};
    if (message.lastPrices?.length) {
      obj.lastPrices = message.lastPrices.map((e) => LastPrice.toJSON(e));
    }
    return obj;
  },
};

function createBaseLastPrice(): LastPrice {
  return { figi: "", price: undefined, time: undefined, instrumentUid: "" };
}

export const LastPrice = {
  encode(message: LastPrice, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(18).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(26).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(90).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastPrice {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastPrice();
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
          if (tag !== 18) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
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

  fromJSON(object: any): LastPrice {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: LastPrice): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseGetOrderBookRequest(): GetOrderBookRequest {
  return { figi: "", depth: 0, instrumentId: "" };
}

export const GetOrderBookRequest = {
  encode(message: GetOrderBookRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    if (message.instrumentId !== "") {
      writer.uint32(26).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookRequest();
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

          message.depth = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): GetOrderBookRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: GetOrderBookRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetOrderBookResponse(): GetOrderBookResponse {
  return {
    figi: "",
    depth: 0,
    bids: [],
    asks: [],
    lastPrice: undefined,
    closePrice: undefined,
    limitUp: undefined,
    limitDown: undefined,
    lastPriceTs: undefined,
    closePriceTs: undefined,
    orderbookTs: undefined,
    instrumentUid: "",
  };
}

export const GetOrderBookResponse = {
  encode(message: GetOrderBookResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.depth !== 0) {
      writer.uint32(16).int32(message.depth);
    }
    for (const v of message.bids) {
      Order.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.asks) {
      Order.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.lastPrice !== undefined) {
      Quotation.encode(message.lastPrice, writer.uint32(42).fork()).ldelim();
    }
    if (message.closePrice !== undefined) {
      Quotation.encode(message.closePrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.limitUp !== undefined) {
      Quotation.encode(message.limitUp, writer.uint32(58).fork()).ldelim();
    }
    if (message.limitDown !== undefined) {
      Quotation.encode(message.limitDown, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastPriceTs !== undefined) {
      Timestamp.encode(toTimestamp(message.lastPriceTs), writer.uint32(170).fork()).ldelim();
    }
    if (message.closePriceTs !== undefined) {
      Timestamp.encode(toTimestamp(message.closePriceTs), writer.uint32(178).fork()).ldelim();
    }
    if (message.orderbookTs !== undefined) {
      Timestamp.encode(toTimestamp(message.orderbookTs), writer.uint32(186).fork()).ldelim();
    }
    if (message.instrumentUid !== "") {
      writer.uint32(74).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderBookResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderBookResponse();
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

          message.depth = reader.int32();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.bids.push(Order.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.asks.push(Order.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lastPrice = Quotation.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.closePrice = Quotation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.limitUp = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.limitDown = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.lastPriceTs = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.closePriceTs = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.orderbookTs = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
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

  fromJSON(object: any): GetOrderBookResponse {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      depth: isSet(object.depth) ? globalThis.Number(object.depth) : 0,
      bids: globalThis.Array.isArray(object?.bids) ? object.bids.map((e: any) => Order.fromJSON(e)) : [],
      asks: globalThis.Array.isArray(object?.asks) ? object.asks.map((e: any) => Order.fromJSON(e)) : [],
      lastPrice: isSet(object.lastPrice) ? Quotation.fromJSON(object.lastPrice) : undefined,
      closePrice: isSet(object.closePrice) ? Quotation.fromJSON(object.closePrice) : undefined,
      limitUp: isSet(object.limitUp) ? Quotation.fromJSON(object.limitUp) : undefined,
      limitDown: isSet(object.limitDown) ? Quotation.fromJSON(object.limitDown) : undefined,
      lastPriceTs: isSet(object.lastPriceTs) ? fromJsonTimestamp(object.lastPriceTs) : undefined,
      closePriceTs: isSet(object.closePriceTs) ? fromJsonTimestamp(object.closePriceTs) : undefined,
      orderbookTs: isSet(object.orderbookTs) ? fromJsonTimestamp(object.orderbookTs) : undefined,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: GetOrderBookResponse): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.depth !== 0) {
      obj.depth = Math.round(message.depth);
    }
    if (message.bids?.length) {
      obj.bids = message.bids.map((e) => Order.toJSON(e));
    }
    if (message.asks?.length) {
      obj.asks = message.asks.map((e) => Order.toJSON(e));
    }
    if (message.lastPrice !== undefined) {
      obj.lastPrice = Quotation.toJSON(message.lastPrice);
    }
    if (message.closePrice !== undefined) {
      obj.closePrice = Quotation.toJSON(message.closePrice);
    }
    if (message.limitUp !== undefined) {
      obj.limitUp = Quotation.toJSON(message.limitUp);
    }
    if (message.limitDown !== undefined) {
      obj.limitDown = Quotation.toJSON(message.limitDown);
    }
    if (message.lastPriceTs !== undefined) {
      obj.lastPriceTs = message.lastPriceTs.toISOString();
    }
    if (message.closePriceTs !== undefined) {
      obj.closePriceTs = message.closePriceTs.toISOString();
    }
    if (message.orderbookTs !== undefined) {
      obj.orderbookTs = message.orderbookTs.toISOString();
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseGetTradingStatusRequest(): GetTradingStatusRequest {
  return { figi: "", instrumentId: "" };
}

export const GetTradingStatusRequest = {
  encode(message: GetTradingStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusRequest();
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
          if (tag !== 18) {
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

  fromJSON(object: any): GetTradingStatusRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: GetTradingStatusRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetTradingStatusesRequest(): GetTradingStatusesRequest {
  return { instrumentId: [] };
}

export const GetTradingStatusesRequest = {
  encode(message: GetTradingStatusesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instrumentId) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrumentId.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusesRequest {
    return {
      instrumentId: globalThis.Array.isArray(object?.instrumentId)
        ? object.instrumentId.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: GetTradingStatusesRequest): unknown {
    const obj: any = {};
    if (message.instrumentId?.length) {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetTradingStatusesResponse(): GetTradingStatusesResponse {
  return { tradingStatuses: [] };
}

export const GetTradingStatusesResponse = {
  encode(message: GetTradingStatusesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.tradingStatuses) {
      GetTradingStatusResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradingStatuses.push(GetTradingStatusResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetTradingStatusesResponse {
    return {
      tradingStatuses: globalThis.Array.isArray(object?.tradingStatuses)
        ? object.tradingStatuses.map((e: any) => GetTradingStatusResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetTradingStatusesResponse): unknown {
    const obj: any = {};
    if (message.tradingStatuses?.length) {
      obj.tradingStatuses = message.tradingStatuses.map((e) => GetTradingStatusResponse.toJSON(e));
    }
    return obj;
  },
};

function createBaseGetTradingStatusResponse(): GetTradingStatusResponse {
  return {
    figi: "",
    tradingStatus: 0,
    limitOrderAvailableFlag: false,
    marketOrderAvailableFlag: false,
    apiTradeAvailableFlag: false,
    instrumentUid: "",
  };
}

export const GetTradingStatusResponse = {
  encode(message: GetTradingStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(16).int32(message.tradingStatus);
    }
    if (message.limitOrderAvailableFlag === true) {
      writer.uint32(24).bool(message.limitOrderAvailableFlag);
    }
    if (message.marketOrderAvailableFlag === true) {
      writer.uint32(32).bool(message.marketOrderAvailableFlag);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(40).bool(message.apiTradeAvailableFlag);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(50).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetTradingStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetTradingStatusResponse();
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

          message.tradingStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limitOrderAvailableFlag = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.marketOrderAvailableFlag = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.apiTradeAvailableFlag = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): GetTradingStatusResponse {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      tradingStatus: isSet(object.tradingStatus) ? securityTradingStatusFromJSON(object.tradingStatus) : 0,
      limitOrderAvailableFlag: isSet(object.limitOrderAvailableFlag)
        ? globalThis.Boolean(object.limitOrderAvailableFlag)
        : false,
      marketOrderAvailableFlag: isSet(object.marketOrderAvailableFlag)
        ? globalThis.Boolean(object.marketOrderAvailableFlag)
        : false,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? globalThis.Boolean(object.apiTradeAvailableFlag)
        : false,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: GetTradingStatusResponse): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.tradingStatus !== 0) {
      obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus);
    }
    if (message.limitOrderAvailableFlag === true) {
      obj.limitOrderAvailableFlag = message.limitOrderAvailableFlag;
    }
    if (message.marketOrderAvailableFlag === true) {
      obj.marketOrderAvailableFlag = message.marketOrderAvailableFlag;
    }
    if (message.apiTradeAvailableFlag === true) {
      obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBaseGetLastTradesRequest(): GetLastTradesRequest {
  return { figi: "", from: undefined, to: undefined, instrumentId: "" };
}

export const GetLastTradesRequest = {
  encode(message: GetLastTradesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    if (message.instrumentId !== "") {
      writer.uint32(34).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesRequest();
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
          if (tag !== 18) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): GetLastTradesRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
    };
  },

  toJSON(message: GetLastTradesRequest): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetLastTradesResponse(): GetLastTradesResponse {
  return { trades: [] };
}

export const GetLastTradesResponse = {
  encode(message: GetLastTradesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      Trade.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetLastTradesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetLastTradesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.trades.push(Trade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetLastTradesResponse {
    return { trades: globalThis.Array.isArray(object?.trades) ? object.trades.map((e: any) => Trade.fromJSON(e)) : [] };
  },

  toJSON(message: GetLastTradesResponse): unknown {
    const obj: any = {};
    if (message.trades?.length) {
      obj.trades = message.trades.map((e) => Trade.toJSON(e));
    }
    return obj;
  },
};

function createBaseGetMySubscriptions(): GetMySubscriptions {
  return {};
}

export const GetMySubscriptions = {
  encode(_: GetMySubscriptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMySubscriptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMySubscriptions();
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

  fromJSON(_: any): GetMySubscriptions {
    return {};
  },

  toJSON(_: GetMySubscriptions): unknown {
    const obj: any = {};
    return obj;
  },
};

function createBaseGetClosePricesRequest(): GetClosePricesRequest {
  return { instruments: [] };
}

export const GetClosePricesRequest = {
  encode(message: GetClosePricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.instruments) {
      InstrumentClosePriceRequest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClosePricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instruments.push(InstrumentClosePriceRequest.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetClosePricesRequest {
    return {
      instruments: globalThis.Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => InstrumentClosePriceRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetClosePricesRequest): unknown {
    const obj: any = {};
    if (message.instruments?.length) {
      obj.instruments = message.instruments.map((e) => InstrumentClosePriceRequest.toJSON(e));
    }
    return obj;
  },
};

function createBaseInstrumentClosePriceRequest(): InstrumentClosePriceRequest {
  return { instrumentId: "" };
}

export const InstrumentClosePriceRequest = {
  encode(message: InstrumentClosePriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrumentId !== "") {
      writer.uint32(10).string(message.instrumentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentClosePriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentClosePriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): InstrumentClosePriceRequest {
    return { instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "" };
  },

  toJSON(message: InstrumentClosePriceRequest): unknown {
    const obj: any = {};
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    return obj;
  },
};

function createBaseGetClosePricesResponse(): GetClosePricesResponse {
  return { closePrices: [] };
}

export const GetClosePricesResponse = {
  encode(message: GetClosePricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.closePrices) {
      InstrumentClosePriceResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetClosePricesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetClosePricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.closePrices.push(InstrumentClosePriceResponse.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetClosePricesResponse {
    return {
      closePrices: globalThis.Array.isArray(object?.closePrices)
        ? object.closePrices.map((e: any) => InstrumentClosePriceResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetClosePricesResponse): unknown {
    const obj: any = {};
    if (message.closePrices?.length) {
      obj.closePrices = message.closePrices.map((e) => InstrumentClosePriceResponse.toJSON(e));
    }
    return obj;
  },
};

function createBaseInstrumentClosePriceResponse(): InstrumentClosePriceResponse {
  return { figi: "", instrumentUid: "", price: undefined, time: undefined };
}

export const InstrumentClosePriceResponse = {
  encode(message: InstrumentClosePriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(90).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(170).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentClosePriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentClosePriceResponse();
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
          if (tag !== 18) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
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

  fromJSON(object: any): InstrumentClosePriceResponse {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
    };
  },

  toJSON(message: InstrumentClosePriceResponse): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    return obj;
  },
};

/** Сервис получения биржевой информации:</br> **1**. свечи;</br> **2**. стаканы;</br> **3**. торговые статусы;</br> **4**. лента сделок. */
export type MarketDataServiceDefinition = typeof MarketDataServiceDefinition;
export const MarketDataServiceDefinition = {
  name: "MarketDataService",
  fullName: "tinkoff.public.invest.api.contract.v1.MarketDataService",
  methods: {
    /** Метод запроса исторических свечей по инструменту. */
    getCandles: {
      name: "GetCandles",
      requestType: GetCandlesRequest,
      requestStream: false,
      responseType: GetCandlesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса цен последних сделок по инструментам. */
    getLastPrices: {
      name: "GetLastPrices",
      requestType: GetLastPricesRequest,
      requestStream: false,
      responseType: GetLastPricesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения стакана по инструменту. */
    getOrderBook: {
      name: "GetOrderBook",
      requestType: GetOrderBookRequest,
      requestStream: false,
      responseType: GetOrderBookResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatus: {
      name: "GetTradingStatus",
      requestType: GetTradingStatusRequest,
      requestStream: false,
      responseType: GetTradingStatusResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса статуса торгов по инструментам. */
    getTradingStatuses: {
      name: "GetTradingStatuses",
      requestType: GetTradingStatusesRequest,
      requestStream: false,
      responseType: GetTradingStatusesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса обезличенных сделок за последний час. */
    getLastTrades: {
      name: "GetLastTrades",
      requestType: GetLastTradesRequest,
      requestStream: false,
      responseType: GetLastTradesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод запроса цен закрытия торговой сессии по инструментам. */
    getClosePrices: {
      name: "GetClosePrices",
      requestType: GetClosePricesRequest,
      requestStream: false,
      responseType: GetClosePricesResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MarketDataServiceImplementation<CallContextExt = {}> {
  /** Метод запроса исторических свечей по инструменту. */
  getCandles(request: GetCandlesRequest, context: CallContext & CallContextExt): Promise<GetCandlesResponse>;
  /** Метод запроса цен последних сделок по инструментам. */
  getLastPrices(request: GetLastPricesRequest, context: CallContext & CallContextExt): Promise<GetLastPricesResponse>;
  /** Метод получения стакана по инструменту. */
  getOrderBook(request: GetOrderBookRequest, context: CallContext & CallContextExt): Promise<GetOrderBookResponse>;
  /** Метод запроса статуса торгов по инструментам. */
  getTradingStatus(
    request: GetTradingStatusRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetTradingStatusResponse>;
  /** Метод запроса статуса торгов по инструментам. */
  getTradingStatuses(
    request: GetTradingStatusesRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetTradingStatusesResponse>;
  /** Метод запроса обезличенных сделок за последний час. */
  getLastTrades(request: GetLastTradesRequest, context: CallContext & CallContextExt): Promise<GetLastTradesResponse>;
  /** Метод запроса цен закрытия торговой сессии по инструментам. */
  getClosePrices(
    request: GetClosePricesRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetClosePricesResponse>;
}

export interface MarketDataServiceClient<CallOptionsExt = {}> {
  /** Метод запроса исторических свечей по инструменту. */
  getCandles(request: GetCandlesRequest, options?: CallOptions & CallOptionsExt): Promise<GetCandlesResponse>;
  /** Метод запроса цен последних сделок по инструментам. */
  getLastPrices(request: GetLastPricesRequest, options?: CallOptions & CallOptionsExt): Promise<GetLastPricesResponse>;
  /** Метод получения стакана по инструменту. */
  getOrderBook(request: GetOrderBookRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrderBookResponse>;
  /** Метод запроса статуса торгов по инструментам. */
  getTradingStatus(
    request: GetTradingStatusRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetTradingStatusResponse>;
  /** Метод запроса статуса торгов по инструментам. */
  getTradingStatuses(
    request: GetTradingStatusesRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetTradingStatusesResponse>;
  /** Метод запроса обезличенных сделок за последний час. */
  getLastTrades(request: GetLastTradesRequest, options?: CallOptions & CallOptionsExt): Promise<GetLastTradesResponse>;
  /** Метод запроса цен закрытия торговой сессии по инструментам. */
  getClosePrices(
    request: GetClosePricesRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetClosePricesResponse>;
}

export type MarketDataStreamServiceDefinition = typeof MarketDataStreamServiceDefinition;
export const MarketDataStreamServiceDefinition = {
  name: "MarketDataStreamService",
  fullName: "tinkoff.public.invest.api.contract.v1.MarketDataStreamService",
  methods: {
    /** Bi-directional стрим предоставления биржевой информации. */
    marketDataStream: {
      name: "MarketDataStream",
      requestType: MarketDataRequest,
      requestStream: true,
      responseType: MarketDataResponse,
      responseStream: true,
      options: {},
    },
    /** Server-side стрим предоставления биржевой информации. */
    marketDataServerSideStream: {
      name: "MarketDataServerSideStream",
      requestType: MarketDataServerSideStreamRequest,
      requestStream: false,
      responseType: MarketDataResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface MarketDataStreamServiceImplementation<CallContextExt = {}> {
  /** Bi-directional стрим предоставления биржевой информации. */
  marketDataStream(
    request: AsyncIterable<MarketDataRequest>,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<MarketDataResponse>;
  /** Server-side стрим предоставления биржевой информации. */
  marketDataServerSideStream(
    request: MarketDataServerSideStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<MarketDataResponse>;
}

export interface MarketDataStreamServiceClient<CallOptionsExt = {}> {
  /** Bi-directional стрим предоставления биржевой информации. */
  marketDataStream(
    request: AsyncIterable<MarketDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<MarketDataResponse>;
  /** Server-side стрим предоставления биржевой информации. */
  marketDataServerSideStream(
    request: MarketDataServerSideStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<MarketDataResponse>;
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
