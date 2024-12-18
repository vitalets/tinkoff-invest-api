/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import {
  ErrorDetail,
  MoneyValue,
  Ping,
  PriceType,
  priceTypeFromJSON,
  priceTypeToJSON,
  Quotation,
  ResponseMetadata,
  ResultSubscriptionStatus,
  resultSubscriptionStatusFromJSON,
  resultSubscriptionStatusToJSON,
} from "./common.js";
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

/** Алгоритм исполнения заявки */
export enum TimeInForceType {
  /** TIME_IN_FORCE_UNSPECIFIED - Значение не определено см. TIME_IN_FORCE_DAY */
  TIME_IN_FORCE_UNSPECIFIED = 0,
  /** TIME_IN_FORCE_DAY - Заявка действует до конца торгового дня. Значение по умолчанию */
  TIME_IN_FORCE_DAY = 1,
  /** TIME_IN_FORCE_FILL_AND_KILL - Если в момент выставления возможно исполнение заявки(в т.ч. частичное), заявка будет исполнена или отменена сразу после выставления */
  TIME_IN_FORCE_FILL_AND_KILL = 2,
  /** TIME_IN_FORCE_FILL_OR_KILL - Если в момент выставления возможно полное исполнение заявки, заявка будет исполнена или отменена сразу после выставления, недоступно для срочного рынка и торговли по выходным */
  TIME_IN_FORCE_FILL_OR_KILL = 3,
  UNRECOGNIZED = -1,
}

export function timeInForceTypeFromJSON(object: any): TimeInForceType {
  switch (object) {
    case 0:
    case "TIME_IN_FORCE_UNSPECIFIED":
      return TimeInForceType.TIME_IN_FORCE_UNSPECIFIED;
    case 1:
    case "TIME_IN_FORCE_DAY":
      return TimeInForceType.TIME_IN_FORCE_DAY;
    case 2:
    case "TIME_IN_FORCE_FILL_AND_KILL":
      return TimeInForceType.TIME_IN_FORCE_FILL_AND_KILL;
    case 3:
    case "TIME_IN_FORCE_FILL_OR_KILL":
      return TimeInForceType.TIME_IN_FORCE_FILL_OR_KILL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TimeInForceType.UNRECOGNIZED;
  }
}

export function timeInForceTypeToJSON(object: TimeInForceType): string {
  switch (object) {
    case TimeInForceType.TIME_IN_FORCE_UNSPECIFIED:
      return "TIME_IN_FORCE_UNSPECIFIED";
    case TimeInForceType.TIME_IN_FORCE_DAY:
      return "TIME_IN_FORCE_DAY";
    case TimeInForceType.TIME_IN_FORCE_FILL_AND_KILL:
      return "TIME_IN_FORCE_FILL_AND_KILL";
    case TimeInForceType.TIME_IN_FORCE_FILL_OR_KILL:
      return "TIME_IN_FORCE_FILL_OR_KILL";
    case TimeInForceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип идентификатора заявки */
export enum OrderIdType {
  /** ORDER_ID_TYPE_UNSPECIFIED - Тип идентификатора не указан. */
  ORDER_ID_TYPE_UNSPECIFIED = 0,
  /** ORDER_ID_TYPE_EXCHANGE - Биржевой идентификатор */
  ORDER_ID_TYPE_EXCHANGE = 1,
  /** ORDER_ID_TYPE_REQUEST - Ключ идемпотентности, переданный клиентом */
  ORDER_ID_TYPE_REQUEST = 2,
  UNRECOGNIZED = -1,
}

export function orderIdTypeFromJSON(object: any): OrderIdType {
  switch (object) {
    case 0:
    case "ORDER_ID_TYPE_UNSPECIFIED":
      return OrderIdType.ORDER_ID_TYPE_UNSPECIFIED;
    case 1:
    case "ORDER_ID_TYPE_EXCHANGE":
      return OrderIdType.ORDER_ID_TYPE_EXCHANGE;
    case 2:
    case "ORDER_ID_TYPE_REQUEST":
      return OrderIdType.ORDER_ID_TYPE_REQUEST;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderIdType.UNRECOGNIZED;
  }
}

export function orderIdTypeToJSON(object: OrderIdType): string {
  switch (object) {
    case OrderIdType.ORDER_ID_TYPE_UNSPECIFIED:
      return "ORDER_ID_TYPE_UNSPECIFIED";
    case OrderIdType.ORDER_ID_TYPE_EXCHANGE:
      return "ORDER_ID_TYPE_EXCHANGE";
    case OrderIdType.ORDER_ID_TYPE_REQUEST:
      return "ORDER_ID_TYPE_REQUEST";
    case OrderIdType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос установки соединения. */
export interface TradesStreamRequest {
  /** Идентификаторы счетов. */
  accounts: string[];
  /** Задержка пинг сообщений milliseconds 5000-180000, default 120000 */
  pingDelayMs?: number | undefined;
}

/** Информация о торговых поручениях. */
export interface TradesStreamResponse {
  /** Информация об исполнении торгового поручения. */
  orderTrades?:
    | OrderTrades
    | undefined;
  /** Проверка активности стрима. */
  ping?:
    | Ping
    | undefined;
  /** Ответ на запрос на подписку. */
  subscription?: SubscriptionResponse | undefined;
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
  figi?:
    | string
    | undefined;
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
  /** Алгоритм исполнения поручения, применяется только к лимитной заявке. */
  timeInForce: TimeInForceType;
  /** Тип цены. */
  priceType: PriceType;
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
  /** Значение НКД (накопленного купонного дохода) на дату. Подробнее: [НКД при выставлении торговых поручений](https://russianinvestments.github.io/investAPI/head-orders#coupon) */
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
  /** Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. */
  orderRequestId: string;
  /** Метадата */
  responseMetadata?: ResponseMetadata | undefined;
}

/** Запрос выставления асинхронного торгового поручения. */
export interface PostOrderAsyncRequest {
  /** Идентификатор инструмента, принимает значения Figi или Instrument_uid. */
  instrumentId: string;
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
  /** Алгоритм исполнения поручения, применяется только к лимитной заявке. */
  timeInForce?:
    | TimeInForceType
    | undefined;
  /** Тип цены. */
  priceType?: PriceType | undefined;
}

/** Результат выставления асинхронного торгового поручения. */
export interface PostOrderAsyncResponse {
  /** Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. */
  orderRequestId: string;
  /** Текущий статус заявки. */
  executionReportStatus: OrderExecutionReportStatus;
  /** Идентификатор торгового поручения. */
  tradeIntentId?: string | undefined;
}

/** Запрос отмены торгового поручения. */
export interface CancelOrderRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
  /** Тип идентификатора заявки. */
  orderIdType?: OrderIdType | undefined;
}

/** Результат отмены торгового поручения. */
export interface CancelOrderResponse {
  /** Дата и время отмены заявки в часовом поясе UTC. */
  time?:
    | Date
    | undefined;
  /** Метадата */
  responseMetadata?: ResponseMetadata | undefined;
}

/** Запрос получения статуса торгового поручения. */
export interface GetOrderStateRequest {
  /** Номер счёта. */
  accountId: string;
  /** Идентификатор заявки. */
  orderId: string;
  /** Тип цены. */
  priceType: PriceType;
  /** Тип идентификатора заявки. */
  orderIdType?: OrderIdType | undefined;
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
  /** Время исполнения сделки */
  executionTime?: Date | undefined;
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
  priceType?: PriceType | undefined;
}

/** Запрос на расчет количества доступных для покупки/продажи лотов. Если не указывать цену инструмента, то расчет произведется по текущум ценам в стакане: по лучшему предложению для покупки и по лучшему спросу для продажи. */
export interface GetMaxLotsRequest {
  /** Номер счета */
  accountId: string;
  /** Идентификатор инструмента, принимает значения Figi или instrument_uid */
  instrumentId: string;
  /** Цена инструмента */
  price?: Quotation | undefined;
}

/** Результат количество доступных для покупки/продажи лотов */
export interface GetMaxLotsResponse {
  /** Валюта инструмента */
  currency: string;
  /** Лимиты для покупок на собственные деньги */
  buyLimits?:
    | GetMaxLotsResponse_BuyLimitsView
    | undefined;
  /** Лимиты для покупок с учетом маржинального кредитования */
  buyMarginLimits?:
    | GetMaxLotsResponse_BuyLimitsView
    | undefined;
  /** Лимиты для продаж по собственной позиции */
  sellLimits?:
    | GetMaxLotsResponse_SellLimitsView
    | undefined;
  /** Лимиты для продаж с учетом маржинального кредитования */
  sellMarginLimits?: GetMaxLotsResponse_SellLimitsView | undefined;
}

export interface GetMaxLotsResponse_BuyLimitsView {
  /** Количество доступной валюты для покупки */
  buyMoneyAmount?:
    | Quotation
    | undefined;
  /** Максимальное доступное количество лотов для покупки */
  buyMaxLots: number;
  /** Максимальное доступное количество лотов для покупки для заявки по рыночной цене на текущий момент */
  buyMaxMarketLots: number;
}

export interface GetMaxLotsResponse_SellLimitsView {
  /** Максимальное доступное количество лотов для продажи */
  sellMaxLots: number;
}

/** Запрос получения предварительной стоимости заявки */
export interface GetOrderPriceRequest {
  /** Номер счета */
  accountId: string;
  /** Идентификатор инструмента, принимает значения Figi или instrument_uid */
  instrumentId: string;
  /** Цена инструмента */
  price?:
    | Quotation
    | undefined;
  /** Направление заявки */
  direction: OrderDirection;
  /** Количество лотов */
  quantity: number;
}

/** Предварительная стоимость заявки */
export interface GetOrderPriceResponse {
  /** Итоговая стоимость заявки */
  totalOrderAmount?:
    | MoneyValue
    | undefined;
  /** Стоимость заявки без комиссий, НКД, ГО (для фьючерсов — стоимость контрактов) */
  initialOrderAmount?:
    | MoneyValue
    | undefined;
  /** Запрошено лотов */
  lotsRequested: number;
  /** Общая комиссия */
  executedCommission?:
    | MoneyValue
    | undefined;
  /** Общая комиссия в рублях */
  executedCommissionRub?:
    | MoneyValue
    | undefined;
  /** Сервисная комиссия */
  serviceCommission?:
    | MoneyValue
    | undefined;
  /** Комиссия за проведение сделки */
  dealCommission?:
    | MoneyValue
    | undefined;
  /** Дополнительная информация по облигациям */
  extraBond?:
    | GetOrderPriceResponse_ExtraBond
    | undefined;
  /** Дополнительная информация по фьючерсам */
  extraFuture?: GetOrderPriceResponse_ExtraFuture | undefined;
}

export interface GetOrderPriceResponse_ExtraBond {
  /** Значение НКД (накопленного купонного дохода) на дату */
  aciValue?:
    | MoneyValue
    | undefined;
  /** Курс конвертации для замещающих облигаций */
  nominalConversionRate?: Quotation | undefined;
}

export interface GetOrderPriceResponse_ExtraFuture {
  /** Гарантийное обеспечение для фьючерса */
  initialMargin?: MoneyValue | undefined;
}

/** Запрос установки стрим-соединения торговых поручений */
export interface OrderStateStreamRequest {
  /** Идентификаторы счетов. */
  accounts: string[];
  /** Задержка пинг сообщений milliseconds 5000-180000, default 120000 */
  pingDelayMs?: number | undefined;
}

/** Информация по подпискам */
export interface SubscriptionResponse {
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Статус подписки. */
  status: ResultSubscriptionStatus;
  /** Идентификатор открытого соединения */
  streamId: string;
  /** Идентификаторы счетов. */
  accounts: string[];
  error?: ErrorDetail | undefined;
}

/** Информация по заявкам */
export interface OrderStateStreamResponse {
  /** Информация об исполнении торгового поручения. */
  orderState?:
    | OrderStateStreamResponse_OrderState
    | undefined;
  /** Проверка активности стрима. */
  ping?:
    | Ping
    | undefined;
  /** Ответ на запрос на подписку. */
  subscription?: SubscriptionResponse | undefined;
}

/** Маркер */
export enum OrderStateStreamResponse_MarkerType {
  /** MARKER_UNKNOWN - не определено */
  MARKER_UNKNOWN = 0,
  /** MARKER_BROKER - сделки брокера */
  MARKER_BROKER = 1,
  /** MARKER_CHAT - исполнение поручение, полученного от клиента через каналы связи */
  MARKER_CHAT = 2,
  /** MARKER_PAPER - исполнение поручение, полученного от клиента в бумажной форме */
  MARKER_PAPER = 3,
  /** MARKER_MARGIN - принудительное закрытие позиций */
  MARKER_MARGIN = 4,
  /** MARKER_TKBNM - сделки по управлению ликвидностью */
  MARKER_TKBNM = 5,
  /** MARKER_SHORT - сделки РЕПО по привлечению у клиентов бумаг */
  MARKER_SHORT = 6,
  /** MARKER_SPECMM - перенос временно непокрытых позиций */
  MARKER_SPECMM = 7,
  MARKER_PO = 8,
  UNRECOGNIZED = -1,
}

export function orderStateStreamResponse_MarkerTypeFromJSON(object: any): OrderStateStreamResponse_MarkerType {
  switch (object) {
    case 0:
    case "MARKER_UNKNOWN":
      return OrderStateStreamResponse_MarkerType.MARKER_UNKNOWN;
    case 1:
    case "MARKER_BROKER":
      return OrderStateStreamResponse_MarkerType.MARKER_BROKER;
    case 2:
    case "MARKER_CHAT":
      return OrderStateStreamResponse_MarkerType.MARKER_CHAT;
    case 3:
    case "MARKER_PAPER":
      return OrderStateStreamResponse_MarkerType.MARKER_PAPER;
    case 4:
    case "MARKER_MARGIN":
      return OrderStateStreamResponse_MarkerType.MARKER_MARGIN;
    case 5:
    case "MARKER_TKBNM":
      return OrderStateStreamResponse_MarkerType.MARKER_TKBNM;
    case 6:
    case "MARKER_SHORT":
      return OrderStateStreamResponse_MarkerType.MARKER_SHORT;
    case 7:
    case "MARKER_SPECMM":
      return OrderStateStreamResponse_MarkerType.MARKER_SPECMM;
    case 8:
    case "MARKER_PO":
      return OrderStateStreamResponse_MarkerType.MARKER_PO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStateStreamResponse_MarkerType.UNRECOGNIZED;
  }
}

export function orderStateStreamResponse_MarkerTypeToJSON(object: OrderStateStreamResponse_MarkerType): string {
  switch (object) {
    case OrderStateStreamResponse_MarkerType.MARKER_UNKNOWN:
      return "MARKER_UNKNOWN";
    case OrderStateStreamResponse_MarkerType.MARKER_BROKER:
      return "MARKER_BROKER";
    case OrderStateStreamResponse_MarkerType.MARKER_CHAT:
      return "MARKER_CHAT";
    case OrderStateStreamResponse_MarkerType.MARKER_PAPER:
      return "MARKER_PAPER";
    case OrderStateStreamResponse_MarkerType.MARKER_MARGIN:
      return "MARKER_MARGIN";
    case OrderStateStreamResponse_MarkerType.MARKER_TKBNM:
      return "MARKER_TKBNM";
    case OrderStateStreamResponse_MarkerType.MARKER_SHORT:
      return "MARKER_SHORT";
    case OrderStateStreamResponse_MarkerType.MARKER_SPECMM:
      return "MARKER_SPECMM";
    case OrderStateStreamResponse_MarkerType.MARKER_PO:
      return "MARKER_PO";
    case OrderStateStreamResponse_MarkerType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Дополнительная информация по статусу заявки */
export enum OrderStateStreamResponse_StatusCauseInfo {
  /** CAUSE_UNSPECIFIED - Не определено */
  CAUSE_UNSPECIFIED = 0,
  /** CAUSE_CANCELLED_BY_CLIENT - Отменено клиентом */
  CAUSE_CANCELLED_BY_CLIENT = 15,
  /** CAUSE_CANCELLED_BY_EXCHANGE - Отменено биржей */
  CAUSE_CANCELLED_BY_EXCHANGE = 1,
  /** CAUSE_CANCELLED_NOT_ENOUGH_POSITION - Заявка не выставлена из-за нехватки средств */
  CAUSE_CANCELLED_NOT_ENOUGH_POSITION = 2,
  /** CAUSE_CANCELLED_BY_CLIENT_BLOCK - Отменено из-за блокировки клиента */
  CAUSE_CANCELLED_BY_CLIENT_BLOCK = 3,
  /** CAUSE_REJECTED_BY_BROKER - Отклонено брокером */
  CAUSE_REJECTED_BY_BROKER = 4,
  /** CAUSE_REJECTED_BY_EXCHANGE - Отклонено биржей */
  CAUSE_REJECTED_BY_EXCHANGE = 5,
  /** CAUSE_CANCELLED_BY_BROKER - Отменено брокером */
  CAUSE_CANCELLED_BY_BROKER = 6,
  UNRECOGNIZED = -1,
}

export function orderStateStreamResponse_StatusCauseInfoFromJSON(
  object: any,
): OrderStateStreamResponse_StatusCauseInfo {
  switch (object) {
    case 0:
    case "CAUSE_UNSPECIFIED":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_UNSPECIFIED;
    case 15:
    case "CAUSE_CANCELLED_BY_CLIENT":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_CLIENT;
    case 1:
    case "CAUSE_CANCELLED_BY_EXCHANGE":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_EXCHANGE;
    case 2:
    case "CAUSE_CANCELLED_NOT_ENOUGH_POSITION":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_NOT_ENOUGH_POSITION;
    case 3:
    case "CAUSE_CANCELLED_BY_CLIENT_BLOCK":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_CLIENT_BLOCK;
    case 4:
    case "CAUSE_REJECTED_BY_BROKER":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_REJECTED_BY_BROKER;
    case 5:
    case "CAUSE_REJECTED_BY_EXCHANGE":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_REJECTED_BY_EXCHANGE;
    case 6:
    case "CAUSE_CANCELLED_BY_BROKER":
      return OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_BROKER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStateStreamResponse_StatusCauseInfo.UNRECOGNIZED;
  }
}

export function orderStateStreamResponse_StatusCauseInfoToJSON(
  object: OrderStateStreamResponse_StatusCauseInfo,
): string {
  switch (object) {
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_UNSPECIFIED:
      return "CAUSE_UNSPECIFIED";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_CLIENT:
      return "CAUSE_CANCELLED_BY_CLIENT";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_EXCHANGE:
      return "CAUSE_CANCELLED_BY_EXCHANGE";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_NOT_ENOUGH_POSITION:
      return "CAUSE_CANCELLED_NOT_ENOUGH_POSITION";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_CLIENT_BLOCK:
      return "CAUSE_CANCELLED_BY_CLIENT_BLOCK";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_REJECTED_BY_BROKER:
      return "CAUSE_REJECTED_BY_BROKER";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_REJECTED_BY_EXCHANGE:
      return "CAUSE_REJECTED_BY_EXCHANGE";
    case OrderStateStreamResponse_StatusCauseInfo.CAUSE_CANCELLED_BY_BROKER:
      return "CAUSE_CANCELLED_BY_BROKER";
    case OrderStateStreamResponse_StatusCauseInfo.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Заявка */
export interface OrderStateStreamResponse_OrderState {
  /** Биржевой идентификатор заявки */
  orderId: string;
  /** Идентификатор ключа идемпотентности, переданный клиентом, в формате UID. Максимальная длина 36 символов. */
  orderRequestId?:
    | string
    | undefined;
  /** Код клиента на бирже */
  clientCode: string;
  /** Дата создания заявки */
  createdAt?:
    | Date
    | undefined;
  /** Статус заявки */
  executionReportStatus: OrderExecutionReportStatus;
  /** Дополнительная информация по статусу */
  statusInfo?:
    | OrderStateStreamResponse_StatusCauseInfo
    | undefined;
  /** Тикер инструмента */
  ticker: string;
  /** Класс-код (секция торгов) */
  classCode: string;
  /** Лотность инструмента заявки */
  lotSize: number;
  /** Направление заявки */
  direction: OrderDirection;
  /** Алгоритм исполнения поручения */
  timeInForce: TimeInForceType;
  /** Тип заявки */
  orderType: OrderType;
  /** Номер счета */
  accountId: string;
  /** Начальная цена заявки */
  initialOrderPrice?:
    | MoneyValue
    | undefined;
  /** Цена выставления заявки */
  orderPrice?:
    | MoneyValue
    | undefined;
  /** Предрассчитанная стоимость полной заявки */
  amount?:
    | MoneyValue
    | undefined;
  /** Исполненная средняя цена одного инструмента в заявке */
  executedOrderPrice?:
    | MoneyValue
    | undefined;
  /** Валюта исполнения */
  currency: string;
  /** Запрошено лотов */
  lotsRequested: number;
  /** Исполнено лотов */
  lotsExecuted: number;
  /** Число неисполненных лотов по заявке */
  lotsLeft: number;
  /** Отмененные лоты */
  lotsCancelled: number;
  /** Спецсимвол */
  marker?:
    | OrderStateStreamResponse_MarkerType
    | undefined;
  /** Список сделок */
  trades: OrderTrade[];
  /** Время исполнения заявки */
  completionTime?:
    | Date
    | undefined;
  /** Код биржи */
  exchange: string;
  /** UID идентификатор инструмента */
  instrumentUid: string;
}

function createBaseTradesStreamRequest(): TradesStreamRequest {
  return { accounts: [], pingDelayMs: undefined };
}

export const TradesStreamRequest = {
  encode(message: TradesStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pingDelayMs !== undefined) {
      writer.uint32(120).int32(message.pingDelayMs);
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

  fromJSON(object: any): TradesStreamRequest {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      pingDelayMs: isSet(object.pingDelayMs) ? globalThis.Number(object.pingDelayMs) : undefined,
    };
  },

  toJSON(message: TradesStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.pingDelayMs !== undefined) {
      obj.pingDelayMs = Math.round(message.pingDelayMs);
    }
    return obj;
  },
};

function createBaseTradesStreamResponse(): TradesStreamResponse {
  return { orderTrades: undefined, ping: undefined, subscription: undefined };
}

export const TradesStreamResponse = {
  encode(message: TradesStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderTrades !== undefined) {
      OrderTrades.encode(message.orderTrades, writer.uint32(10).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      SubscriptionResponse.encode(message.subscription, writer.uint32(26).fork()).ldelim();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subscription = SubscriptionResponse.decode(reader, reader.uint32());
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
      subscription: isSet(object.subscription) ? SubscriptionResponse.fromJSON(object.subscription) : undefined,
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
    if (message.subscription !== undefined) {
      obj.subscription = SubscriptionResponse.toJSON(message.subscription);
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
    figi: undefined,
    quantity: 0,
    price: undefined,
    direction: 0,
    accountId: "",
    orderType: 0,
    orderId: "",
    instrumentId: "",
    timeInForce: 0,
    priceType: 0,
  };
}

export const PostOrderRequest = {
  encode(message: PostOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== undefined) {
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
    if (message.timeInForce !== 0) {
      writer.uint32(72).int32(message.timeInForce);
    }
    if (message.priceType !== 0) {
      writer.uint32(80).int32(message.priceType);
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
        case 9:
          if (tag !== 72) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 80) {
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

  fromJSON(object: any): PostOrderRequest {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceTypeFromJSON(object.timeInForce) : 0,
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : 0,
    };
  },

  toJSON(message: PostOrderRequest): unknown {
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
    if (message.timeInForce !== 0) {
      obj.timeInForce = timeInForceTypeToJSON(message.timeInForce);
    }
    if (message.priceType !== 0) {
      obj.priceType = priceTypeToJSON(message.priceType);
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
    orderRequestId: "",
    responseMetadata: undefined,
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
    if (message.orderRequestId !== "") {
      writer.uint32(162).string(message.orderRequestId);
    }
    if (message.responseMetadata !== undefined) {
      ResponseMetadata.encode(message.responseMetadata, writer.uint32(2034).fork()).ldelim();
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
        case 20:
          if (tag !== 162) {
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
      orderRequestId: isSet(object.orderRequestId) ? globalThis.String(object.orderRequestId) : "",
      responseMetadata: isSet(object.responseMetadata) ? ResponseMetadata.fromJSON(object.responseMetadata) : undefined,
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
    if (message.orderRequestId !== "") {
      obj.orderRequestId = message.orderRequestId;
    }
    if (message.responseMetadata !== undefined) {
      obj.responseMetadata = ResponseMetadata.toJSON(message.responseMetadata);
    }
    return obj;
  },
};

function createBasePostOrderAsyncRequest(): PostOrderAsyncRequest {
  return {
    instrumentId: "",
    quantity: 0,
    price: undefined,
    direction: 0,
    accountId: "",
    orderType: 0,
    orderId: "",
    timeInForce: undefined,
    priceType: undefined,
  };
}

export const PostOrderAsyncRequest = {
  encode(message: PostOrderAsyncRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrumentId !== "") {
      writer.uint32(10).string(message.instrumentId);
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
    if (message.timeInForce !== undefined) {
      writer.uint32(64).int32(message.timeInForce);
    }
    if (message.priceType !== undefined) {
      writer.uint32(72).int32(message.priceType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderAsyncRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderAsyncRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrumentId = reader.string();
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
          if (tag !== 64) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 9:
          if (tag !== 72) {
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

  fromJSON(object: any): PostOrderAsyncRequest {
    return {
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      timeInForce: isSet(object.timeInForce) ? timeInForceTypeFromJSON(object.timeInForce) : undefined,
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : undefined,
    };
  },

  toJSON(message: PostOrderAsyncRequest): unknown {
    const obj: any = {};
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
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
    if (message.timeInForce !== undefined) {
      obj.timeInForce = timeInForceTypeToJSON(message.timeInForce);
    }
    if (message.priceType !== undefined) {
      obj.priceType = priceTypeToJSON(message.priceType);
    }
    return obj;
  },
};

function createBasePostOrderAsyncResponse(): PostOrderAsyncResponse {
  return { orderRequestId: "", executionReportStatus: 0, tradeIntentId: undefined };
}

export const PostOrderAsyncResponse = {
  encode(message: PostOrderAsyncResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderRequestId !== "") {
      writer.uint32(10).string(message.orderRequestId);
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(16).int32(message.executionReportStatus);
    }
    if (message.tradeIntentId !== undefined) {
      writer.uint32(26).string(message.tradeIntentId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PostOrderAsyncResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePostOrderAsyncResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderRequestId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.executionReportStatus = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.tradeIntentId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PostOrderAsyncResponse {
    return {
      orderRequestId: isSet(object.orderRequestId) ? globalThis.String(object.orderRequestId) : "",
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      tradeIntentId: isSet(object.tradeIntentId) ? globalThis.String(object.tradeIntentId) : undefined,
    };
  },

  toJSON(message: PostOrderAsyncResponse): unknown {
    const obj: any = {};
    if (message.orderRequestId !== "") {
      obj.orderRequestId = message.orderRequestId;
    }
    if (message.executionReportStatus !== 0) {
      obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus);
    }
    if (message.tradeIntentId !== undefined) {
      obj.tradeIntentId = message.tradeIntentId;
    }
    return obj;
  },
};

function createBaseCancelOrderRequest(): CancelOrderRequest {
  return { accountId: "", orderId: "", orderIdType: undefined };
}

export const CancelOrderRequest = {
  encode(message: CancelOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.orderIdType !== undefined) {
      writer.uint32(24).int32(message.orderIdType);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.orderIdType = reader.int32() as any;
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
      orderIdType: isSet(object.orderIdType) ? orderIdTypeFromJSON(object.orderIdType) : undefined,
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
    if (message.orderIdType !== undefined) {
      obj.orderIdType = orderIdTypeToJSON(message.orderIdType);
    }
    return obj;
  },
};

function createBaseCancelOrderResponse(): CancelOrderResponse {
  return { time: undefined, responseMetadata: undefined };
}

export const CancelOrderResponse = {
  encode(message: CancelOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(10).fork()).ldelim();
    }
    if (message.responseMetadata !== undefined) {
      ResponseMetadata.encode(message.responseMetadata, writer.uint32(2034).fork()).ldelim();
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

  fromJSON(object: any): CancelOrderResponse {
    return {
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      responseMetadata: isSet(object.responseMetadata) ? ResponseMetadata.fromJSON(object.responseMetadata) : undefined,
    };
  },

  toJSON(message: CancelOrderResponse): unknown {
    const obj: any = {};
    if (message.time !== undefined) {
      obj.time = message.time.toISOString();
    }
    if (message.responseMetadata !== undefined) {
      obj.responseMetadata = ResponseMetadata.toJSON(message.responseMetadata);
    }
    return obj;
  },
};

function createBaseGetOrderStateRequest(): GetOrderStateRequest {
  return { accountId: "", orderId: "", priceType: 0, orderIdType: undefined };
}

export const GetOrderStateRequest = {
  encode(message: GetOrderStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.priceType !== 0) {
      writer.uint32(24).int32(message.priceType);
    }
    if (message.orderIdType !== undefined) {
      writer.uint32(32).int32(message.orderIdType);
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
        case 3:
          if (tag !== 24) {
            break;
          }

          message.priceType = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.orderIdType = reader.int32() as any;
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
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : 0,
      orderIdType: isSet(object.orderIdType) ? orderIdTypeFromJSON(object.orderIdType) : undefined,
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
    if (message.priceType !== 0) {
      obj.priceType = priceTypeToJSON(message.priceType);
    }
    if (message.orderIdType !== undefined) {
      obj.orderIdType = orderIdTypeToJSON(message.orderIdType);
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
  return { price: undefined, quantity: 0, tradeId: "", executionTime: undefined };
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
    if (message.executionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.executionTime), writer.uint32(42).fork()).ldelim();
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
        case 5:
          if (tag !== 42) {
            break;
          }

          message.executionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
      executionTime: isSet(object.executionTime) ? fromJsonTimestamp(object.executionTime) : undefined,
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
    if (message.executionTime !== undefined) {
      obj.executionTime = message.executionTime.toISOString();
    }
    return obj;
  },
};

function createBaseReplaceOrderRequest(): ReplaceOrderRequest {
  return { accountId: "", orderId: "", idempotencyKey: "", quantity: 0, price: undefined, priceType: undefined };
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
    if (message.priceType !== undefined) {
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
      priceType: isSet(object.priceType) ? priceTypeFromJSON(object.priceType) : undefined,
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
    if (message.priceType !== undefined) {
      obj.priceType = priceTypeToJSON(message.priceType);
    }
    return obj;
  },
};

function createBaseGetMaxLotsRequest(): GetMaxLotsRequest {
  return { accountId: "", instrumentId: "", price: undefined };
}

export const GetMaxLotsRequest = {
  encode(message: GetMaxLotsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMaxLotsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMaxLotsRequest();
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

          message.instrumentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMaxLotsRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: GetMaxLotsRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    return obj;
  },
};

function createBaseGetMaxLotsResponse(): GetMaxLotsResponse {
  return {
    currency: "",
    buyLimits: undefined,
    buyMarginLimits: undefined,
    sellLimits: undefined,
    sellMarginLimits: undefined,
  };
}

export const GetMaxLotsResponse = {
  encode(message: GetMaxLotsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.currency !== "") {
      writer.uint32(10).string(message.currency);
    }
    if (message.buyLimits !== undefined) {
      GetMaxLotsResponse_BuyLimitsView.encode(message.buyLimits, writer.uint32(18).fork()).ldelim();
    }
    if (message.buyMarginLimits !== undefined) {
      GetMaxLotsResponse_BuyLimitsView.encode(message.buyMarginLimits, writer.uint32(26).fork()).ldelim();
    }
    if (message.sellLimits !== undefined) {
      GetMaxLotsResponse_SellLimitsView.encode(message.sellLimits, writer.uint32(34).fork()).ldelim();
    }
    if (message.sellMarginLimits !== undefined) {
      GetMaxLotsResponse_SellLimitsView.encode(message.sellMarginLimits, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMaxLotsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMaxLotsResponse();
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
          if (tag !== 18) {
            break;
          }

          message.buyLimits = GetMaxLotsResponse_BuyLimitsView.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.buyMarginLimits = GetMaxLotsResponse_BuyLimitsView.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.sellLimits = GetMaxLotsResponse_SellLimitsView.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sellMarginLimits = GetMaxLotsResponse_SellLimitsView.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMaxLotsResponse {
    return {
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      buyLimits: isSet(object.buyLimits) ? GetMaxLotsResponse_BuyLimitsView.fromJSON(object.buyLimits) : undefined,
      buyMarginLimits: isSet(object.buyMarginLimits)
        ? GetMaxLotsResponse_BuyLimitsView.fromJSON(object.buyMarginLimits)
        : undefined,
      sellLimits: isSet(object.sellLimits) ? GetMaxLotsResponse_SellLimitsView.fromJSON(object.sellLimits) : undefined,
      sellMarginLimits: isSet(object.sellMarginLimits)
        ? GetMaxLotsResponse_SellLimitsView.fromJSON(object.sellMarginLimits)
        : undefined,
    };
  },

  toJSON(message: GetMaxLotsResponse): unknown {
    const obj: any = {};
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.buyLimits !== undefined) {
      obj.buyLimits = GetMaxLotsResponse_BuyLimitsView.toJSON(message.buyLimits);
    }
    if (message.buyMarginLimits !== undefined) {
      obj.buyMarginLimits = GetMaxLotsResponse_BuyLimitsView.toJSON(message.buyMarginLimits);
    }
    if (message.sellLimits !== undefined) {
      obj.sellLimits = GetMaxLotsResponse_SellLimitsView.toJSON(message.sellLimits);
    }
    if (message.sellMarginLimits !== undefined) {
      obj.sellMarginLimits = GetMaxLotsResponse_SellLimitsView.toJSON(message.sellMarginLimits);
    }
    return obj;
  },
};

function createBaseGetMaxLotsResponse_BuyLimitsView(): GetMaxLotsResponse_BuyLimitsView {
  return { buyMoneyAmount: undefined, buyMaxLots: 0, buyMaxMarketLots: 0 };
}

export const GetMaxLotsResponse_BuyLimitsView = {
  encode(message: GetMaxLotsResponse_BuyLimitsView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.buyMoneyAmount !== undefined) {
      Quotation.encode(message.buyMoneyAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.buyMaxLots !== 0) {
      writer.uint32(16).int64(message.buyMaxLots);
    }
    if (message.buyMaxMarketLots !== 0) {
      writer.uint32(24).int64(message.buyMaxMarketLots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMaxLotsResponse_BuyLimitsView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMaxLotsResponse_BuyLimitsView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.buyMoneyAmount = Quotation.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.buyMaxLots = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.buyMaxMarketLots = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMaxLotsResponse_BuyLimitsView {
    return {
      buyMoneyAmount: isSet(object.buyMoneyAmount) ? Quotation.fromJSON(object.buyMoneyAmount) : undefined,
      buyMaxLots: isSet(object.buyMaxLots) ? globalThis.Number(object.buyMaxLots) : 0,
      buyMaxMarketLots: isSet(object.buyMaxMarketLots) ? globalThis.Number(object.buyMaxMarketLots) : 0,
    };
  },

  toJSON(message: GetMaxLotsResponse_BuyLimitsView): unknown {
    const obj: any = {};
    if (message.buyMoneyAmount !== undefined) {
      obj.buyMoneyAmount = Quotation.toJSON(message.buyMoneyAmount);
    }
    if (message.buyMaxLots !== 0) {
      obj.buyMaxLots = Math.round(message.buyMaxLots);
    }
    if (message.buyMaxMarketLots !== 0) {
      obj.buyMaxMarketLots = Math.round(message.buyMaxMarketLots);
    }
    return obj;
  },
};

function createBaseGetMaxLotsResponse_SellLimitsView(): GetMaxLotsResponse_SellLimitsView {
  return { sellMaxLots: 0 };
}

export const GetMaxLotsResponse_SellLimitsView = {
  encode(message: GetMaxLotsResponse_SellLimitsView, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellMaxLots !== 0) {
      writer.uint32(8).int64(message.sellMaxLots);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetMaxLotsResponse_SellLimitsView {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetMaxLotsResponse_SellLimitsView();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sellMaxLots = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetMaxLotsResponse_SellLimitsView {
    return { sellMaxLots: isSet(object.sellMaxLots) ? globalThis.Number(object.sellMaxLots) : 0 };
  },

  toJSON(message: GetMaxLotsResponse_SellLimitsView): unknown {
    const obj: any = {};
    if (message.sellMaxLots !== 0) {
      obj.sellMaxLots = Math.round(message.sellMaxLots);
    }
    return obj;
  },
};

function createBaseGetOrderPriceRequest(): GetOrderPriceRequest {
  return { accountId: "", instrumentId: "", price: undefined, direction: 0, quantity: 0 };
}

export const GetOrderPriceRequest = {
  encode(message: GetOrderPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    if (message.price !== undefined) {
      Quotation.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.direction !== 0) {
      writer.uint32(96).int32(message.direction);
    }
    if (message.quantity !== 0) {
      writer.uint32(104).int64(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderPriceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderPriceRequest();
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

          message.instrumentId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.price = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 104) {
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

  fromJSON(object: any): GetOrderPriceRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : "",
      price: isSet(object.price) ? Quotation.fromJSON(object.price) : undefined,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
    };
  },

  toJSON(message: GetOrderPriceRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.instrumentId !== "") {
      obj.instrumentId = message.instrumentId;
    }
    if (message.price !== undefined) {
      obj.price = Quotation.toJSON(message.price);
    }
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    return obj;
  },
};

function createBaseGetOrderPriceResponse(): GetOrderPriceResponse {
  return {
    totalOrderAmount: undefined,
    initialOrderAmount: undefined,
    lotsRequested: 0,
    executedCommission: undefined,
    executedCommissionRub: undefined,
    serviceCommission: undefined,
    dealCommission: undefined,
    extraBond: undefined,
    extraFuture: undefined,
  };
}

export const GetOrderPriceResponse = {
  encode(message: GetOrderPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(10).fork()).ldelim();
    }
    if (message.initialOrderAmount !== undefined) {
      MoneyValue.encode(message.initialOrderAmount, writer.uint32(42).fork()).ldelim();
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(24).int64(message.lotsRequested);
    }
    if (message.executedCommission !== undefined) {
      MoneyValue.encode(message.executedCommission, writer.uint32(58).fork()).ldelim();
    }
    if (message.executedCommissionRub !== undefined) {
      MoneyValue.encode(message.executedCommissionRub, writer.uint32(66).fork()).ldelim();
    }
    if (message.serviceCommission !== undefined) {
      MoneyValue.encode(message.serviceCommission, writer.uint32(74).fork()).ldelim();
    }
    if (message.dealCommission !== undefined) {
      MoneyValue.encode(message.dealCommission, writer.uint32(82).fork()).ldelim();
    }
    if (message.extraBond !== undefined) {
      GetOrderPriceResponse_ExtraBond.encode(message.extraBond, writer.uint32(98).fork()).ldelim();
    }
    if (message.extraFuture !== undefined) {
      GetOrderPriceResponse_ExtraFuture.encode(message.extraFuture, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderPriceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialOrderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.lotsRequested = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.executedCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.executedCommissionRub = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.serviceCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.dealCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.extraBond = GetOrderPriceResponse_ExtraBond.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.extraFuture = GetOrderPriceResponse_ExtraFuture.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderPriceResponse {
    return {
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      initialOrderAmount: isSet(object.initialOrderAmount) ? MoneyValue.fromJSON(object.initialOrderAmount) : undefined,
      lotsRequested: isSet(object.lotsRequested) ? globalThis.Number(object.lotsRequested) : 0,
      executedCommission: isSet(object.executedCommission) ? MoneyValue.fromJSON(object.executedCommission) : undefined,
      executedCommissionRub: isSet(object.executedCommissionRub)
        ? MoneyValue.fromJSON(object.executedCommissionRub)
        : undefined,
      serviceCommission: isSet(object.serviceCommission) ? MoneyValue.fromJSON(object.serviceCommission) : undefined,
      dealCommission: isSet(object.dealCommission) ? MoneyValue.fromJSON(object.dealCommission) : undefined,
      extraBond: isSet(object.extraBond) ? GetOrderPriceResponse_ExtraBond.fromJSON(object.extraBond) : undefined,
      extraFuture: isSet(object.extraFuture)
        ? GetOrderPriceResponse_ExtraFuture.fromJSON(object.extraFuture)
        : undefined,
    };
  },

  toJSON(message: GetOrderPriceResponse): unknown {
    const obj: any = {};
    if (message.totalOrderAmount !== undefined) {
      obj.totalOrderAmount = MoneyValue.toJSON(message.totalOrderAmount);
    }
    if (message.initialOrderAmount !== undefined) {
      obj.initialOrderAmount = MoneyValue.toJSON(message.initialOrderAmount);
    }
    if (message.lotsRequested !== 0) {
      obj.lotsRequested = Math.round(message.lotsRequested);
    }
    if (message.executedCommission !== undefined) {
      obj.executedCommission = MoneyValue.toJSON(message.executedCommission);
    }
    if (message.executedCommissionRub !== undefined) {
      obj.executedCommissionRub = MoneyValue.toJSON(message.executedCommissionRub);
    }
    if (message.serviceCommission !== undefined) {
      obj.serviceCommission = MoneyValue.toJSON(message.serviceCommission);
    }
    if (message.dealCommission !== undefined) {
      obj.dealCommission = MoneyValue.toJSON(message.dealCommission);
    }
    if (message.extraBond !== undefined) {
      obj.extraBond = GetOrderPriceResponse_ExtraBond.toJSON(message.extraBond);
    }
    if (message.extraFuture !== undefined) {
      obj.extraFuture = GetOrderPriceResponse_ExtraFuture.toJSON(message.extraFuture);
    }
    return obj;
  },
};

function createBaseGetOrderPriceResponse_ExtraBond(): GetOrderPriceResponse_ExtraBond {
  return { aciValue: undefined, nominalConversionRate: undefined };
}

export const GetOrderPriceResponse_ExtraBond = {
  encode(message: GetOrderPriceResponse_ExtraBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.aciValue !== undefined) {
      MoneyValue.encode(message.aciValue, writer.uint32(18).fork()).ldelim();
    }
    if (message.nominalConversionRate !== undefined) {
      Quotation.encode(message.nominalConversionRate, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderPriceResponse_ExtraBond {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderPriceResponse_ExtraBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aciValue = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nominalConversionRate = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderPriceResponse_ExtraBond {
    return {
      aciValue: isSet(object.aciValue) ? MoneyValue.fromJSON(object.aciValue) : undefined,
      nominalConversionRate: isSet(object.nominalConversionRate)
        ? Quotation.fromJSON(object.nominalConversionRate)
        : undefined,
    };
  },

  toJSON(message: GetOrderPriceResponse_ExtraBond): unknown {
    const obj: any = {};
    if (message.aciValue !== undefined) {
      obj.aciValue = MoneyValue.toJSON(message.aciValue);
    }
    if (message.nominalConversionRate !== undefined) {
      obj.nominalConversionRate = Quotation.toJSON(message.nominalConversionRate);
    }
    return obj;
  },
};

function createBaseGetOrderPriceResponse_ExtraFuture(): GetOrderPriceResponse_ExtraFuture {
  return { initialMargin: undefined };
}

export const GetOrderPriceResponse_ExtraFuture = {
  encode(message: GetOrderPriceResponse_ExtraFuture, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.initialMargin !== undefined) {
      MoneyValue.encode(message.initialMargin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOrderPriceResponse_ExtraFuture {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOrderPriceResponse_ExtraFuture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.initialMargin = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOrderPriceResponse_ExtraFuture {
    return { initialMargin: isSet(object.initialMargin) ? MoneyValue.fromJSON(object.initialMargin) : undefined };
  },

  toJSON(message: GetOrderPriceResponse_ExtraFuture): unknown {
    const obj: any = {};
    if (message.initialMargin !== undefined) {
      obj.initialMargin = MoneyValue.toJSON(message.initialMargin);
    }
    return obj;
  },
};

function createBaseOrderStateStreamRequest(): OrderStateStreamRequest {
  return { accounts: [], pingDelayMs: undefined };
}

export const OrderStateStreamRequest = {
  encode(message: OrderStateStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pingDelayMs !== undefined) {
      writer.uint32(120).int32(message.pingDelayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStateStreamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStateStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(reader.string());
          continue;
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

  fromJSON(object: any): OrderStateStreamRequest {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      pingDelayMs: isSet(object.pingDelayMs) ? globalThis.Number(object.pingDelayMs) : undefined,
    };
  },

  toJSON(message: OrderStateStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.pingDelayMs !== undefined) {
      obj.pingDelayMs = Math.round(message.pingDelayMs);
    }
    return obj;
  },
};

function createBaseSubscriptionResponse(): SubscriptionResponse {
  return { trackingId: "", status: 0, streamId: "", accounts: [], error: undefined };
}

export const SubscriptionResponse = {
  encode(message: SubscriptionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.trackingId !== "") {
      writer.uint32(10).string(message.trackingId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.streamId !== "") {
      writer.uint32(34).string(message.streamId);
    }
    for (const v of message.accounts) {
      writer.uint32(42).string(v!);
    }
    if (message.error !== undefined) {
      ErrorDetail.encode(message.error, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubscriptionResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubscriptionResponse();
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
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.streamId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.accounts.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.error = ErrorDetail.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubscriptionResponse {
    return {
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      status: isSet(object.status) ? resultSubscriptionStatusFromJSON(object.status) : 0,
      streamId: isSet(object.streamId) ? globalThis.String(object.streamId) : "",
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      error: isSet(object.error) ? ErrorDetail.fromJSON(object.error) : undefined,
    };
  },

  toJSON(message: SubscriptionResponse): unknown {
    const obj: any = {};
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.status !== 0) {
      obj.status = resultSubscriptionStatusToJSON(message.status);
    }
    if (message.streamId !== "") {
      obj.streamId = message.streamId;
    }
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.error !== undefined) {
      obj.error = ErrorDetail.toJSON(message.error);
    }
    return obj;
  },
};

function createBaseOrderStateStreamResponse(): OrderStateStreamResponse {
  return { orderState: undefined, ping: undefined, subscription: undefined };
}

export const OrderStateStreamResponse = {
  encode(message: OrderStateStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderState !== undefined) {
      OrderStateStreamResponse_OrderState.encode(message.orderState, writer.uint32(10).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(18).fork()).ldelim();
    }
    if (message.subscription !== undefined) {
      SubscriptionResponse.encode(message.subscription, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStateStreamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStateStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderState = OrderStateStreamResponse_OrderState.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ping = Ping.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.subscription = SubscriptionResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderStateStreamResponse {
    return {
      orderState: isSet(object.orderState)
        ? OrderStateStreamResponse_OrderState.fromJSON(object.orderState)
        : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
      subscription: isSet(object.subscription) ? SubscriptionResponse.fromJSON(object.subscription) : undefined,
    };
  },

  toJSON(message: OrderStateStreamResponse): unknown {
    const obj: any = {};
    if (message.orderState !== undefined) {
      obj.orderState = OrderStateStreamResponse_OrderState.toJSON(message.orderState);
    }
    if (message.ping !== undefined) {
      obj.ping = Ping.toJSON(message.ping);
    }
    if (message.subscription !== undefined) {
      obj.subscription = SubscriptionResponse.toJSON(message.subscription);
    }
    return obj;
  },
};

function createBaseOrderStateStreamResponse_OrderState(): OrderStateStreamResponse_OrderState {
  return {
    orderId: "",
    orderRequestId: undefined,
    clientCode: "",
    createdAt: undefined,
    executionReportStatus: 0,
    statusInfo: undefined,
    ticker: "",
    classCode: "",
    lotSize: 0,
    direction: 0,
    timeInForce: 0,
    orderType: 0,
    accountId: "",
    initialOrderPrice: undefined,
    orderPrice: undefined,
    amount: undefined,
    executedOrderPrice: undefined,
    currency: "",
    lotsRequested: 0,
    lotsExecuted: 0,
    lotsLeft: 0,
    lotsCancelled: 0,
    marker: undefined,
    trades: [],
    completionTime: undefined,
    exchange: "",
    instrumentUid: "",
  };
}

export const OrderStateStreamResponse_OrderState = {
  encode(message: OrderStateStreamResponse_OrderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.orderRequestId !== undefined) {
      writer.uint32(18).string(message.orderRequestId);
    }
    if (message.clientCode !== "") {
      writer.uint32(26).string(message.clientCode);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.executionReportStatus !== 0) {
      writer.uint32(40).int32(message.executionReportStatus);
    }
    if (message.statusInfo !== undefined) {
      writer.uint32(48).int32(message.statusInfo);
    }
    if (message.ticker !== "") {
      writer.uint32(58).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(66).string(message.classCode);
    }
    if (message.lotSize !== 0) {
      writer.uint32(72).int32(message.lotSize);
    }
    if (message.direction !== 0) {
      writer.uint32(80).int32(message.direction);
    }
    if (message.timeInForce !== 0) {
      writer.uint32(88).int32(message.timeInForce);
    }
    if (message.orderType !== 0) {
      writer.uint32(96).int32(message.orderType);
    }
    if (message.accountId !== "") {
      writer.uint32(106).string(message.accountId);
    }
    if (message.initialOrderPrice !== undefined) {
      MoneyValue.encode(message.initialOrderPrice, writer.uint32(178).fork()).ldelim();
    }
    if (message.orderPrice !== undefined) {
      MoneyValue.encode(message.orderPrice, writer.uint32(186).fork()).ldelim();
    }
    if (message.amount !== undefined) {
      MoneyValue.encode(message.amount, writer.uint32(194).fork()).ldelim();
    }
    if (message.executedOrderPrice !== undefined) {
      MoneyValue.encode(message.executedOrderPrice, writer.uint32(202).fork()).ldelim();
    }
    if (message.currency !== "") {
      writer.uint32(210).string(message.currency);
    }
    if (message.lotsRequested !== 0) {
      writer.uint32(216).int64(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      writer.uint32(224).int64(message.lotsExecuted);
    }
    if (message.lotsLeft !== 0) {
      writer.uint32(232).int64(message.lotsLeft);
    }
    if (message.lotsCancelled !== 0) {
      writer.uint32(240).int64(message.lotsCancelled);
    }
    if (message.marker !== undefined) {
      writer.uint32(248).int32(message.marker);
    }
    for (const v of message.trades) {
      OrderTrade.encode(v!, writer.uint32(266).fork()).ldelim();
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(282).fork()).ldelim();
    }
    if (message.exchange !== "") {
      writer.uint32(290).string(message.exchange);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(330).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderStateStreamResponse_OrderState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderStateStreamResponse_OrderState();
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

          message.orderRequestId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientCode = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.executionReportStatus = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.statusInfo = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.lotSize = reader.int32();
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.timeInForce = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.orderType = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.initialOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.orderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.amount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.executedOrderPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 27:
          if (tag !== 216) {
            break;
          }

          message.lotsRequested = longToNumber(reader.int64() as Long);
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.lotsExecuted = longToNumber(reader.int64() as Long);
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.lotsLeft = longToNumber(reader.int64() as Long);
          continue;
        case 30:
          if (tag !== 240) {
            break;
          }

          message.lotsCancelled = longToNumber(reader.int64() as Long);
          continue;
        case 31:
          if (tag !== 248) {
            break;
          }

          message.marker = reader.int32() as any;
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.trades.push(OrderTrade.decode(reader, reader.uint32()));
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 41:
          if (tag !== 330) {
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

  fromJSON(object: any): OrderStateStreamResponse_OrderState {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      orderRequestId: isSet(object.orderRequestId) ? globalThis.String(object.orderRequestId) : undefined,
      clientCode: isSet(object.clientCode) ? globalThis.String(object.clientCode) : "",
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      executionReportStatus: isSet(object.executionReportStatus)
        ? orderExecutionReportStatusFromJSON(object.executionReportStatus)
        : 0,
      statusInfo: isSet(object.statusInfo)
        ? orderStateStreamResponse_StatusCauseInfoFromJSON(object.statusInfo)
        : undefined,
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      lotSize: isSet(object.lotSize) ? globalThis.Number(object.lotSize) : 0,
      direction: isSet(object.direction) ? orderDirectionFromJSON(object.direction) : 0,
      timeInForce: isSet(object.timeInForce) ? timeInForceTypeFromJSON(object.timeInForce) : 0,
      orderType: isSet(object.orderType) ? orderTypeFromJSON(object.orderType) : 0,
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      initialOrderPrice: isSet(object.initialOrderPrice) ? MoneyValue.fromJSON(object.initialOrderPrice) : undefined,
      orderPrice: isSet(object.orderPrice) ? MoneyValue.fromJSON(object.orderPrice) : undefined,
      amount: isSet(object.amount) ? MoneyValue.fromJSON(object.amount) : undefined,
      executedOrderPrice: isSet(object.executedOrderPrice) ? MoneyValue.fromJSON(object.executedOrderPrice) : undefined,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      lotsRequested: isSet(object.lotsRequested) ? globalThis.Number(object.lotsRequested) : 0,
      lotsExecuted: isSet(object.lotsExecuted) ? globalThis.Number(object.lotsExecuted) : 0,
      lotsLeft: isSet(object.lotsLeft) ? globalThis.Number(object.lotsLeft) : 0,
      lotsCancelled: isSet(object.lotsCancelled) ? globalThis.Number(object.lotsCancelled) : 0,
      marker: isSet(object.marker) ? orderStateStreamResponse_MarkerTypeFromJSON(object.marker) : undefined,
      trades: globalThis.Array.isArray(object?.trades) ? object.trades.map((e: any) => OrderTrade.fromJSON(e)) : [],
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: OrderStateStreamResponse_OrderState): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.orderRequestId !== undefined) {
      obj.orderRequestId = message.orderRequestId;
    }
    if (message.clientCode !== "") {
      obj.clientCode = message.clientCode;
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.executionReportStatus !== 0) {
      obj.executionReportStatus = orderExecutionReportStatusToJSON(message.executionReportStatus);
    }
    if (message.statusInfo !== undefined) {
      obj.statusInfo = orderStateStreamResponse_StatusCauseInfoToJSON(message.statusInfo);
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.lotSize !== 0) {
      obj.lotSize = Math.round(message.lotSize);
    }
    if (message.direction !== 0) {
      obj.direction = orderDirectionToJSON(message.direction);
    }
    if (message.timeInForce !== 0) {
      obj.timeInForce = timeInForceTypeToJSON(message.timeInForce);
    }
    if (message.orderType !== 0) {
      obj.orderType = orderTypeToJSON(message.orderType);
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.initialOrderPrice !== undefined) {
      obj.initialOrderPrice = MoneyValue.toJSON(message.initialOrderPrice);
    }
    if (message.orderPrice !== undefined) {
      obj.orderPrice = MoneyValue.toJSON(message.orderPrice);
    }
    if (message.amount !== undefined) {
      obj.amount = MoneyValue.toJSON(message.amount);
    }
    if (message.executedOrderPrice !== undefined) {
      obj.executedOrderPrice = MoneyValue.toJSON(message.executedOrderPrice);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.lotsRequested !== 0) {
      obj.lotsRequested = Math.round(message.lotsRequested);
    }
    if (message.lotsExecuted !== 0) {
      obj.lotsExecuted = Math.round(message.lotsExecuted);
    }
    if (message.lotsLeft !== 0) {
      obj.lotsLeft = Math.round(message.lotsLeft);
    }
    if (message.lotsCancelled !== 0) {
      obj.lotsCancelled = Math.round(message.lotsCancelled);
    }
    if (message.marker !== undefined) {
      obj.marker = orderStateStreamResponse_MarkerTypeToJSON(message.marker);
    }
    if (message.trades?.length) {
      obj.trades = message.trades.map((e) => OrderTrade.toJSON(e));
    }
    if (message.completionTime !== undefined) {
      obj.completionTime = message.completionTime.toISOString();
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
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
    /** Stream поручений пользователя. Перед работой прочитайте [статью](https://russianinvestments.github.io/investAPI/orders_state_stream/). */
    orderStateStream: {
      name: "OrderStateStream",
      requestType: OrderStateStreamRequest,
      requestStream: false,
      responseType: OrderStateStreamResponse,
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
  /** Stream поручений пользователя. Перед работой прочитайте [статью](https://russianinvestments.github.io/investAPI/orders_state_stream/). */
  orderStateStream(
    request: OrderStateStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<OrderStateStreamResponse>;
}

export interface OrdersStreamServiceClient<CallOptionsExt = {}> {
  /** Stream сделок пользователя */
  tradesStream(
    request: TradesStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<TradesStreamResponse>;
  /** Stream поручений пользователя. Перед работой прочитайте [статью](https://russianinvestments.github.io/investAPI/orders_state_stream/). */
  orderStateStream(
    request: OrderStateStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<OrderStateStreamResponse>;
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
    /** Асинхронный метод выставления заявки. */
    postOrderAsync: {
      name: "PostOrderAsync",
      requestType: PostOrderAsyncRequest,
      requestStream: false,
      responseType: PostOrderAsyncResponse,
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
    /** расчет количества доступных для покупки/продажи лотов */
    getMaxLots: {
      name: "GetMaxLots",
      requestType: GetMaxLotsRequest,
      requestStream: false,
      responseType: GetMaxLotsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения предварительной стоимости для лимитной заявки */
    getOrderPrice: {
      name: "GetOrderPrice",
      requestType: GetOrderPriceRequest,
      requestStream: false,
      responseType: GetOrderPriceResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OrdersServiceImplementation<CallContextExt = {}> {
  /** Метод выставления заявки. */
  postOrder(request: PostOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** Асинхронный метод выставления заявки. */
  postOrderAsync(
    request: PostOrderAsyncRequest,
    context: CallContext & CallContextExt,
  ): Promise<PostOrderAsyncResponse>;
  /** Метод отмены биржевой заявки. */
  cancelOrder(request: CancelOrderRequest, context: CallContext & CallContextExt): Promise<CancelOrderResponse>;
  /** Метод получения статуса торгового поручения. */
  getOrderState(request: GetOrderStateRequest, context: CallContext & CallContextExt): Promise<OrderState>;
  /** Метод получения списка активных заявок по счёту. */
  getOrders(request: GetOrdersRequest, context: CallContext & CallContextExt): Promise<GetOrdersResponse>;
  /** Метод изменения выставленной заявки. */
  replaceOrder(request: ReplaceOrderRequest, context: CallContext & CallContextExt): Promise<PostOrderResponse>;
  /** расчет количества доступных для покупки/продажи лотов */
  getMaxLots(request: GetMaxLotsRequest, context: CallContext & CallContextExt): Promise<GetMaxLotsResponse>;
  /** Метод получения предварительной стоимости для лимитной заявки */
  getOrderPrice(request: GetOrderPriceRequest, context: CallContext & CallContextExt): Promise<GetOrderPriceResponse>;
}

export interface OrdersServiceClient<CallOptionsExt = {}> {
  /** Метод выставления заявки. */
  postOrder(request: PostOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** Асинхронный метод выставления заявки. */
  postOrderAsync(
    request: PostOrderAsyncRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PostOrderAsyncResponse>;
  /** Метод отмены биржевой заявки. */
  cancelOrder(request: CancelOrderRequest, options?: CallOptions & CallOptionsExt): Promise<CancelOrderResponse>;
  /** Метод получения статуса торгового поручения. */
  getOrderState(request: GetOrderStateRequest, options?: CallOptions & CallOptionsExt): Promise<OrderState>;
  /** Метод получения списка активных заявок по счёту. */
  getOrders(request: GetOrdersRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrdersResponse>;
  /** Метод изменения выставленной заявки. */
  replaceOrder(request: ReplaceOrderRequest, options?: CallOptions & CallOptionsExt): Promise<PostOrderResponse>;
  /** расчет количества доступных для покупки/продажи лотов */
  getMaxLots(request: GetMaxLotsRequest, options?: CallOptions & CallOptionsExt): Promise<GetMaxLotsResponse>;
  /** Метод получения предварительной стоимости для лимитной заявки */
  getOrderPrice(request: GetOrderPriceRequest, options?: CallOptions & CallOptionsExt): Promise<GetOrderPriceResponse>;
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
