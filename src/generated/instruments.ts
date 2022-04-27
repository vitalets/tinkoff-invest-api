/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import {
  SecurityTradingStatus,
  MoneyValue,
  Quotation,
  securityTradingStatusFromJSON,
  securityTradingStatusToJSON,
} from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Тип купонов. */
export enum CouponType {
  /** COUPON_TYPE_UNSPECIFIED - Неопределенное значение */
  COUPON_TYPE_UNSPECIFIED = 0,
  /** COUPON_TYPE_CONSTANT - Постоянный */
  COUPON_TYPE_CONSTANT = 1,
  /** COUPON_TYPE_FLOATING - Плавающий */
  COUPON_TYPE_FLOATING = 2,
  /** COUPON_TYPE_DISCOUNT - Дисконт */
  COUPON_TYPE_DISCOUNT = 3,
  /** COUPON_TYPE_MORTGAGE - Ипотечный */
  COUPON_TYPE_MORTGAGE = 4,
  /** COUPON_TYPE_FIX - Фиксированный */
  COUPON_TYPE_FIX = 5,
  /** COUPON_TYPE_VARIABLE - Переменный */
  COUPON_TYPE_VARIABLE = 6,
  /** COUPON_TYPE_OTHER - Прочее */
  COUPON_TYPE_OTHER = 7,
  UNRECOGNIZED = -1,
}

export function couponTypeFromJSON(object: any): CouponType {
  switch (object) {
    case 0:
    case "COUPON_TYPE_UNSPECIFIED":
      return CouponType.COUPON_TYPE_UNSPECIFIED;
    case 1:
    case "COUPON_TYPE_CONSTANT":
      return CouponType.COUPON_TYPE_CONSTANT;
    case 2:
    case "COUPON_TYPE_FLOATING":
      return CouponType.COUPON_TYPE_FLOATING;
    case 3:
    case "COUPON_TYPE_DISCOUNT":
      return CouponType.COUPON_TYPE_DISCOUNT;
    case 4:
    case "COUPON_TYPE_MORTGAGE":
      return CouponType.COUPON_TYPE_MORTGAGE;
    case 5:
    case "COUPON_TYPE_FIX":
      return CouponType.COUPON_TYPE_FIX;
    case 6:
    case "COUPON_TYPE_VARIABLE":
      return CouponType.COUPON_TYPE_VARIABLE;
    case 7:
    case "COUPON_TYPE_OTHER":
      return CouponType.COUPON_TYPE_OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CouponType.UNRECOGNIZED;
  }
}

export function couponTypeToJSON(object: CouponType): string {
  switch (object) {
    case CouponType.COUPON_TYPE_UNSPECIFIED:
      return "COUPON_TYPE_UNSPECIFIED";
    case CouponType.COUPON_TYPE_CONSTANT:
      return "COUPON_TYPE_CONSTANT";
    case CouponType.COUPON_TYPE_FLOATING:
      return "COUPON_TYPE_FLOATING";
    case CouponType.COUPON_TYPE_DISCOUNT:
      return "COUPON_TYPE_DISCOUNT";
    case CouponType.COUPON_TYPE_MORTGAGE:
      return "COUPON_TYPE_MORTGAGE";
    case CouponType.COUPON_TYPE_FIX:
      return "COUPON_TYPE_FIX";
    case CouponType.COUPON_TYPE_VARIABLE:
      return "COUPON_TYPE_VARIABLE";
    case CouponType.COUPON_TYPE_OTHER:
      return "COUPON_TYPE_OTHER";
    default:
      return "UNKNOWN";
  }
}

/** Тип идентификатора инструмента. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
export enum InstrumentIdType {
  /** INSTRUMENT_ID_UNSPECIFIED - Значение не определено. */
  INSTRUMENT_ID_UNSPECIFIED = 0,
  /** INSTRUMENT_ID_TYPE_FIGI - Figi. */
  INSTRUMENT_ID_TYPE_FIGI = 1,
  /** INSTRUMENT_ID_TYPE_TICKER - Ticker. */
  INSTRUMENT_ID_TYPE_TICKER = 2,
  /** INSTRUMENT_ID_TYPE_UID - Уникальный идентификатор. */
  INSTRUMENT_ID_TYPE_UID = 3,
  UNRECOGNIZED = -1,
}

export function instrumentIdTypeFromJSON(object: any): InstrumentIdType {
  switch (object) {
    case 0:
    case "INSTRUMENT_ID_UNSPECIFIED":
      return InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED;
    case 1:
    case "INSTRUMENT_ID_TYPE_FIGI":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI;
    case 2:
    case "INSTRUMENT_ID_TYPE_TICKER":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER;
    case 3:
    case "INSTRUMENT_ID_TYPE_UID":
      return InstrumentIdType.INSTRUMENT_ID_TYPE_UID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return InstrumentIdType.UNRECOGNIZED;
  }
}

export function instrumentIdTypeToJSON(object: InstrumentIdType): string {
  switch (object) {
    case InstrumentIdType.INSTRUMENT_ID_UNSPECIFIED:
      return "INSTRUMENT_ID_UNSPECIFIED";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI:
      return "INSTRUMENT_ID_TYPE_FIGI";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_TICKER:
      return "INSTRUMENT_ID_TYPE_TICKER";
    case InstrumentIdType.INSTRUMENT_ID_TYPE_UID:
      return "INSTRUMENT_ID_TYPE_UID";
    default:
      return "UNKNOWN";
  }
}

/** Статус запрашиваемых инструментов. */
export enum InstrumentStatus {
  /** INSTRUMENT_STATUS_UNSPECIFIED - Значение не определено. */
  INSTRUMENT_STATUS_UNSPECIFIED = 0,
  /** INSTRUMENT_STATUS_BASE - Базовый список инструментов (по умолчанию). Инструменты доступные для торговли через TINKOFF INVEST API. */
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
    default:
      return "UNKNOWN";
  }
}

/** Тип акций. */
export enum ShareType {
  /** SHARE_TYPE_UNSPECIFIED - Значение не определено. */
  SHARE_TYPE_UNSPECIFIED = 0,
  /** SHARE_TYPE_COMMON - Обыкновенная */
  SHARE_TYPE_COMMON = 1,
  /** SHARE_TYPE_PREFERRED - Привилегированная */
  SHARE_TYPE_PREFERRED = 2,
  /** SHARE_TYPE_ADR - Американские депозитарные расписки */
  SHARE_TYPE_ADR = 3,
  /** SHARE_TYPE_GDR - Глобальные депозитарные расписки */
  SHARE_TYPE_GDR = 4,
  /** SHARE_TYPE_MLP - Товарищество с ограниченной ответственностью */
  SHARE_TYPE_MLP = 5,
  /** SHARE_TYPE_NY_REG_SHRS - Акции из реестра Нью-Йорка */
  SHARE_TYPE_NY_REG_SHRS = 6,
  /** SHARE_TYPE_CLOSED_END_FUND - Закрытый инвестиционный фонд */
  SHARE_TYPE_CLOSED_END_FUND = 7,
  /** SHARE_TYPE_REIT - Траст недвижимости */
  SHARE_TYPE_REIT = 8,
  UNRECOGNIZED = -1,
}

export function shareTypeFromJSON(object: any): ShareType {
  switch (object) {
    case 0:
    case "SHARE_TYPE_UNSPECIFIED":
      return ShareType.SHARE_TYPE_UNSPECIFIED;
    case 1:
    case "SHARE_TYPE_COMMON":
      return ShareType.SHARE_TYPE_COMMON;
    case 2:
    case "SHARE_TYPE_PREFERRED":
      return ShareType.SHARE_TYPE_PREFERRED;
    case 3:
    case "SHARE_TYPE_ADR":
      return ShareType.SHARE_TYPE_ADR;
    case 4:
    case "SHARE_TYPE_GDR":
      return ShareType.SHARE_TYPE_GDR;
    case 5:
    case "SHARE_TYPE_MLP":
      return ShareType.SHARE_TYPE_MLP;
    case 6:
    case "SHARE_TYPE_NY_REG_SHRS":
      return ShareType.SHARE_TYPE_NY_REG_SHRS;
    case 7:
    case "SHARE_TYPE_CLOSED_END_FUND":
      return ShareType.SHARE_TYPE_CLOSED_END_FUND;
    case 8:
    case "SHARE_TYPE_REIT":
      return ShareType.SHARE_TYPE_REIT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ShareType.UNRECOGNIZED;
  }
}

export function shareTypeToJSON(object: ShareType): string {
  switch (object) {
    case ShareType.SHARE_TYPE_UNSPECIFIED:
      return "SHARE_TYPE_UNSPECIFIED";
    case ShareType.SHARE_TYPE_COMMON:
      return "SHARE_TYPE_COMMON";
    case ShareType.SHARE_TYPE_PREFERRED:
      return "SHARE_TYPE_PREFERRED";
    case ShareType.SHARE_TYPE_ADR:
      return "SHARE_TYPE_ADR";
    case ShareType.SHARE_TYPE_GDR:
      return "SHARE_TYPE_GDR";
    case ShareType.SHARE_TYPE_MLP:
      return "SHARE_TYPE_MLP";
    case ShareType.SHARE_TYPE_NY_REG_SHRS:
      return "SHARE_TYPE_NY_REG_SHRS";
    case ShareType.SHARE_TYPE_CLOSED_END_FUND:
      return "SHARE_TYPE_CLOSED_END_FUND";
    case ShareType.SHARE_TYPE_REIT:
      return "SHARE_TYPE_REIT";
    default:
      return "UNKNOWN";
  }
}

/** Тип актива. */
export enum AssetType {
  /** ASSET_TYPE_UNSPECIFIED - Тип не определён. */
  ASSET_TYPE_UNSPECIFIED = 0,
  /** ASSET_TYPE_CURRENCY - Валюта. */
  ASSET_TYPE_CURRENCY = 1,
  /** ASSET_TYPE_COMMODITY - Товар. */
  ASSET_TYPE_COMMODITY = 2,
  /** ASSET_TYPE_INDEX - Индекс. */
  ASSET_TYPE_INDEX = 3,
  /** ASSET_TYPE_SECURITY - Ценная бумага. */
  ASSET_TYPE_SECURITY = 4,
  UNRECOGNIZED = -1,
}

export function assetTypeFromJSON(object: any): AssetType {
  switch (object) {
    case 0:
    case "ASSET_TYPE_UNSPECIFIED":
      return AssetType.ASSET_TYPE_UNSPECIFIED;
    case 1:
    case "ASSET_TYPE_CURRENCY":
      return AssetType.ASSET_TYPE_CURRENCY;
    case 2:
    case "ASSET_TYPE_COMMODITY":
      return AssetType.ASSET_TYPE_COMMODITY;
    case 3:
    case "ASSET_TYPE_INDEX":
      return AssetType.ASSET_TYPE_INDEX;
    case 4:
    case "ASSET_TYPE_SECURITY":
      return AssetType.ASSET_TYPE_SECURITY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AssetType.UNRECOGNIZED;
  }
}

export function assetTypeToJSON(object: AssetType): string {
  switch (object) {
    case AssetType.ASSET_TYPE_UNSPECIFIED:
      return "ASSET_TYPE_UNSPECIFIED";
    case AssetType.ASSET_TYPE_CURRENCY:
      return "ASSET_TYPE_CURRENCY";
    case AssetType.ASSET_TYPE_COMMODITY:
      return "ASSET_TYPE_COMMODITY";
    case AssetType.ASSET_TYPE_INDEX:
      return "ASSET_TYPE_INDEX";
    case AssetType.ASSET_TYPE_SECURITY:
      return "ASSET_TYPE_SECURITY";
    default:
      return "UNKNOWN";
  }
}

/** Тип структурной ноты. */
export enum StructuredProductType {
  /** SP_TYPE_UNSPECIFIED - Тип не определён. */
  SP_TYPE_UNSPECIFIED = 0,
  /** SP_TYPE_DELIVERABLE - Поставочный. */
  SP_TYPE_DELIVERABLE = 1,
  /** SP_TYPE_NON_DELIVERABLE - Беспоставочный. */
  SP_TYPE_NON_DELIVERABLE = 2,
  UNRECOGNIZED = -1,
}

export function structuredProductTypeFromJSON(
  object: any
): StructuredProductType {
  switch (object) {
    case 0:
    case "SP_TYPE_UNSPECIFIED":
      return StructuredProductType.SP_TYPE_UNSPECIFIED;
    case 1:
    case "SP_TYPE_DELIVERABLE":
      return StructuredProductType.SP_TYPE_DELIVERABLE;
    case 2:
    case "SP_TYPE_NON_DELIVERABLE":
      return StructuredProductType.SP_TYPE_NON_DELIVERABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StructuredProductType.UNRECOGNIZED;
  }
}

export function structuredProductTypeToJSON(
  object: StructuredProductType
): string {
  switch (object) {
    case StructuredProductType.SP_TYPE_UNSPECIFIED:
      return "SP_TYPE_UNSPECIFIED";
    case StructuredProductType.SP_TYPE_DELIVERABLE:
      return "SP_TYPE_DELIVERABLE";
    case StructuredProductType.SP_TYPE_NON_DELIVERABLE:
      return "SP_TYPE_NON_DELIVERABLE";
    default:
      return "UNKNOWN";
  }
}

/** Тип действия со списком избранных инструментов. */
export enum EditFavoritesActionType {
  /** EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED - Тип не определён. */
  EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED = 0,
  /** EDIT_FAVORITES_ACTION_TYPE_ADD - Добавить в список. */
  EDIT_FAVORITES_ACTION_TYPE_ADD = 1,
  /** EDIT_FAVORITES_ACTION_TYPE_DEL - Удалить из списка. */
  EDIT_FAVORITES_ACTION_TYPE_DEL = 2,
  UNRECOGNIZED = -1,
}

export function editFavoritesActionTypeFromJSON(
  object: any
): EditFavoritesActionType {
  switch (object) {
    case 0:
    case "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED;
    case 1:
    case "EDIT_FAVORITES_ACTION_TYPE_ADD":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD;
    case 2:
    case "EDIT_FAVORITES_ACTION_TYPE_DEL":
      return EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EditFavoritesActionType.UNRECOGNIZED;
  }
}

export function editFavoritesActionTypeToJSON(
  object: EditFavoritesActionType
): string {
  switch (object) {
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED:
      return "EDIT_FAVORITES_ACTION_TYPE_UNSPECIFIED";
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_ADD:
      return "EDIT_FAVORITES_ACTION_TYPE_ADD";
    case EditFavoritesActionType.EDIT_FAVORITES_ACTION_TYPE_DEL:
      return "EDIT_FAVORITES_ACTION_TYPE_DEL";
    default:
      return "UNKNOWN";
  }
}

/** Реальная площадка исполнения расчётов. */
export enum RealExchange {
  /** REAL_EXCHANGE_UNSPECIFIED - Тип не определён. */
  REAL_EXCHANGE_UNSPECIFIED = 0,
  /** REAL_EXCHANGE_MOEX - Московская биржа. */
  REAL_EXCHANGE_MOEX = 1,
  /** REAL_EXCHANGE_RTS - Санкт-Петербургская биржа. */
  REAL_EXCHANGE_RTS = 2,
  /** REAL_EXCHANGE_OTC - Внебиржевой инструмент. */
  REAL_EXCHANGE_OTC = 3,
  UNRECOGNIZED = -1,
}

export function realExchangeFromJSON(object: any): RealExchange {
  switch (object) {
    case 0:
    case "REAL_EXCHANGE_UNSPECIFIED":
      return RealExchange.REAL_EXCHANGE_UNSPECIFIED;
    case 1:
    case "REAL_EXCHANGE_MOEX":
      return RealExchange.REAL_EXCHANGE_MOEX;
    case 2:
    case "REAL_EXCHANGE_RTS":
      return RealExchange.REAL_EXCHANGE_RTS;
    case 3:
    case "REAL_EXCHANGE_OTC":
      return RealExchange.REAL_EXCHANGE_OTC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RealExchange.UNRECOGNIZED;
  }
}

export function realExchangeToJSON(object: RealExchange): string {
  switch (object) {
    case RealExchange.REAL_EXCHANGE_UNSPECIFIED:
      return "REAL_EXCHANGE_UNSPECIFIED";
    case RealExchange.REAL_EXCHANGE_MOEX:
      return "REAL_EXCHANGE_MOEX";
    case RealExchange.REAL_EXCHANGE_RTS:
      return "REAL_EXCHANGE_RTS";
    case RealExchange.REAL_EXCHANGE_OTC:
      return "REAL_EXCHANGE_OTC";
    default:
      return "UNKNOWN";
  }
}

/** Запрос расписания торгов */
export interface TradingSchedulesRequest {
  /** Наименование биржи или расчетного календаря. </br>Если не передаётся, возвращается информация по всем доступным торговым площадкам. */
  exchange: string;
  /** Начало периода по часовому поясу UTC. */
  from: Date | undefined;
  /** Окончание периода по часовому поясу UTC. */
  to: Date | undefined;
}

/** Список торговых площадок */
export interface TradingSchedulesResponse {
  /** Список торговых площадок и режимов торгов. */
  exchanges: TradingSchedule[];
}

/** Данные по торговой площадке. */
export interface TradingSchedule {
  /** Наименование торговой площадки. */
  exchange: string;
  /** Массив с торговыми и неторговыми днями. */
  days: TradingDay[];
}

/** Информация о времени торгов. */
export interface TradingDay {
  /** Дата. */
  date: Date | undefined;
  /** Признак торгового дня на бирже. */
  isTradingDay: boolean;
  /** Время начала торгов по часовому поясу UTC. */
  startTime: Date | undefined;
  /** Время окончания торгов по часовому поясу UTC. */
  endTime: Date | undefined;
  /** Время начала аукциона открытия в часовом поясе UTC. */
  openingAuctionStartTime: Date | undefined;
  /** Время окончания аукциона закрытия в часовом поясе UTC. */
  closingAuctionEndTime: Date | undefined;
  /** Время начала аукциона открытия вечерней сессии в часовом поясе UTC. */
  eveningOpeningAuctionStartTime: Date | undefined;
  /** Время начала вечерней сессии в часовом поясе UTC. */
  eveningStartTime: Date | undefined;
  /** Время окончания вечерней сессии в часовом поясе UTC. */
  eveningEndTime: Date | undefined;
  /** Время начала основного клиринга в часовом поясе UTC. */
  clearingStartTime: Date | undefined;
  /** Время окончания основного клиринга в часовом поясе UTC. */
  clearingEndTime: Date | undefined;
  /** Время начала премаркета в часовом поясе UTC. */
  premarketStartTime: Date | undefined;
  /** Время окончания премаркета в часовом поясе UTC. */
  premarketEndTime: Date | undefined;
}

/** Запрос получения инструмента по идентификатору. */
export interface InstrumentRequest {
  /** Тип идентификатора инструмента. Возможные значения: figi, ticker. Подробнее об идентификации инструментов: [Идентификация инструментов](https://tinkoff.github.io/investAPI/faq_identification/) */
  idType: InstrumentIdType;
  /** Идентификатор class_code. Обязателен при id_type = ticker. */
  classCode: string;
  /** Идентификатор запрашиваемого инструмента. */
  id: string;
}

/** Запрос получения инструментов. */
export interface InstrumentsRequest {
  /** Статус запрашиваемых инструментов. Возможные значения: [InstrumentStatus](#instrumentstatus) */
  instrumentStatus: InstrumentStatus;
}

/** Информация об облигации. */
export interface BondResponse {
  /** Информация об облигации. */
  instrument: Bond | undefined;
}

/** Список облигаций. */
export interface BondsResponse {
  /** Массив облигаций. */
  instruments: Bond[];
}

/** Запрос купонов по облигации. */
export interface GetBondCouponsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
  from: Date | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация по coupon_date (дата выплаты купона) */
  to: Date | undefined;
}

/** Купоны по облигации. */
export interface GetBondCouponsResponse {
  events: Coupon[];
}

/** Объект передачи информации о купоне облигации. */
export interface Coupon {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Дата выплаты купона */
  couponDate: Date | undefined;
  /** Номер купона */
  couponNumber: number;
  /** (Опционально) Дата фиксации реестра для выплаты купона */
  fixDate: Date | undefined;
  /** Выплата на одну облигацию */
  payOneBond: MoneyValue | undefined;
  /** Тип купона */
  couponType: CouponType;
  /** Начало купонного периода. */
  couponStartDate: Date | undefined;
  /** Окончание купонного периода. */
  couponEndDate: Date | undefined;
  /** Купонный период в днях. */
  couponPeriod: number;
}

/** Данные по валюте. */
export interface CurrencyResponse {
  /** Информация о валюте. */
  instrument: Currency | undefined;
}

/** Данные по валютам. */
export interface CurrenciesResponse {
  /** Массив валют. */
  instruments: Currency[];
}

/** Данные по фонду. */
export interface EtfResponse {
  /** Информация о фонде. */
  instrument: Etf | undefined;
}

/** Данные по фондам. */
export interface EtfsResponse {
  /** Массив фондов. */
  instruments: Etf[];
}

/** Данные по фьючерсу. */
export interface FutureResponse {
  /** Информация о фьючерсу. */
  instrument: Future | undefined;
}

/** Данные по фьючерсам. */
export interface FuturesResponse {
  /** Массив фьючерсов. */
  instruments: Future[];
}

/** Данные по акции. */
export interface ShareResponse {
  /** Информация об акции. */
  instrument: Share | undefined;
}

/** Данные по акциям. */
export interface SharesResponse {
  /** Массив акций. */
  instruments: Share[];
}

/** Объект передачи информации об облигации. */
export interface Bond {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Количество выплат по купонам в год. */
  couponQuantityPerYear: number;
  /** Дата погашения облигации в часовом поясе UTC. */
  maturityDate: Date | undefined;
  /** Номинал облигации. */
  nominal: MoneyValue | undefined;
  /** Дата выпуска облигации в часовом поясе UTC. */
  stateRegDate: Date | undefined;
  /** Дата размещения в часовом поясе UTC. */
  placementDate: Date | undefined;
  /** Цена размещения. */
  placementPrice: MoneyValue | undefined;
  /** Значение НКД (накопленного купонного дохода) на дату. */
  aciValue: MoneyValue | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Форма выпуска. Возможные значения: </br>**documentary** — документарная; </br>**non_documentary** — бездокументарная. */
  issueKind: string;
  /** Размер выпуска. */
  issueSize: number;
  /** Плановый размер выпуска. */
  issueSizePlan: number;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Признак облигации с плавающим купоном. */
  floatingCouponFlag: boolean;
  /** Признак бессрочной облигации. */
  perpetualFlag: boolean;
  /** Признак облигации с амортизацией долга. */
  amortizationFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Объект передачи информации о валюте. */
export interface Currency {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Номинал. */
  nominal: MoneyValue | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Строковый ISO-код валюты. */
  isoCurrencyName: string;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Объект передачи информации об инвестиционном фонде. */
export interface Etf {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Размер фиксированной комиссии фонда. */
  fixedCommission: Quotation | undefined;
  /** Возможные значения: </br>**equity** — акции;</br>**fixed_income** — облигации;</br>**mixed_allocation** — смешанный;</br>**money_market** — денежный рынок;</br>**real_estate** — недвижимость;</br>**commodity** — товары;</br>**specialty** — специальный;</br>**private_equity** — private equity;</br>**alternative_investment** — альтернативные инвестиции. */
  focusType: string;
  /** Дата выпуска в часовом поясе UTC. */
  releasedDate: Date | undefined;
  /** Количество акций фонда в обращении. */
  numShares: Quotation | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Частота ребалансировки. */
  rebalancingFreq: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Объект передачи информации о фьючерсе. */
export interface Future {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по клиенту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по клиенту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Дата начала обращения контракта в часовом поясе UTC. */
  firstTradeDate: Date | undefined;
  /** Дата в часовом поясе UTC, до которой возможно проведение операций с фьючерсом. */
  lastTradeDate: Date | undefined;
  /** Тип фьючерса. Возможные значения: </br>**physical_delivery** — физические поставки; </br>**cash_settlement** — денежный эквивалент. */
  futuresType: string;
  /** Тип актива. Возможные значения: </br>**commodity** — товар; </br>**currency** — валюта; </br>**security** — ценная бумага; </br>**index** — индекс. */
  assetType: string;
  /** Основной актив. */
  basicAsset: string;
  /** Размер основного актива. */
  basicAssetSize: Quotation | undefined;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Дата истечения срока в часов поясе UTC. */
  expirationDate: Date | undefined;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Объект передачи информации об акции. */
export interface Share {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Дата IPO акции в часовом поясе UTC. */
  ipoDate: Date | undefined;
  /** Размер выпуска. */
  issueSize: number;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Сектор экономики. */
  sector: string;
  /** Плановый размер выпуска. */
  issueSizePlan: number;
  /** Номинал. */
  nominal: MoneyValue | undefined;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Тип акции. Возможные значения: [ShareType](https://tinkoff.github.io/investAPI/instruments#sharetype) */
  shareType: ShareType;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Запрос НКД по облигации */
export interface GetAccruedInterestsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. */
  from: Date | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. */
  to: Date | undefined;
}

/** НКД облигации */
export interface GetAccruedInterestsResponse {
  /** Массив операций начисления купонов. */
  accruedInterests: AccruedInterest[];
}

/** Операция начисления купонов. */
export interface AccruedInterest {
  /** Дата и время выплаты в часовом поясе UTC. */
  date: Date | undefined;
  /** Величина выплаты. */
  value: Quotation | undefined;
  /** Величина выплаты в процентах от номинала. */
  valuePercent: Quotation | undefined;
  /** Номинал облигации. */
  nominal: Quotation | undefined;
}

/** Запрос информации о фьючерсе */
export interface GetFuturesMarginRequest {
  /** Идентификатор инструмента. */
  figi: string;
}

/** Данные по фьючерсу */
export interface GetFuturesMarginResponse {
  /** Гарантийное обеспечение при покупке. */
  initialMarginOnBuy: MoneyValue | undefined;
  /** Гарантийное обеспечение при продаже. */
  initialMarginOnSell: MoneyValue | undefined;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Стоимость шага цены. */
  minPriceIncrementAmount: Quotation | undefined;
}

/** Данные по инструменту. */
export interface InstrumentResponse {
  /** Основная информация об инструменте. */
  instrument: Instrument | undefined;
}

/** Объект передачи основной информации об инструменте. */
export interface Instrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код инструмента. */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Лотность инструмента. Возможно совершение операций только на количества ценной бумаги, кратные параметру *lot*. Подробнее: [лот](https://tinkoff.github.io/investAPI/glossary#lot) */
  lot: number;
  /** Валюта расчётов. */
  currency: string;
  /** Коэффициент ставки риска длинной позиции по инструменту. */
  klong: Quotation | undefined;
  /** Коэффициент ставки риска короткой позиции по инструменту. */
  kshort: Quotation | undefined;
  /** Ставка риска минимальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlong: Quotation | undefined;
  /** Ставка риска минимальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshort: Quotation | undefined;
  /** Ставка риска начальной маржи в лонг. Подробнее: [ставка риска в лонг](https://help.tinkoff.ru/margin-trade/long/risk-rate/) */
  dlongMin: Quotation | undefined;
  /** Ставка риска начальной маржи в шорт. Подробнее: [ставка риска в шорт](https://help.tinkoff.ru/margin-trade/short/risk-rate/) */
  dshortMin: Quotation | undefined;
  /** Признак доступности для операций в шорт. */
  shortEnabledFlag: boolean;
  /** Название инструмента. */
  name: string;
  /** Торговая площадка. */
  exchange: string;
  /** Код страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRisk: string;
  /** Наименование страны риска, т.е. страны, в которой компания ведёт основной бизнес. */
  countryOfRiskName: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Текущий режим торгов инструмента. */
  tradingStatus: SecurityTradingStatus;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности для покупки. */
  buyAvailableFlag: boolean;
  /** Признак доступности для продажи. */
  sellAvailableFlag: boolean;
  /** Шаг цены. */
  minPriceIncrement: Quotation | undefined;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Реальная площадка исполнения расчётов. */
  realExchange: RealExchange;
}

/** Запрос дивидендов. */
export interface GetDividendsRequest {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Начало запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
  from: Date | undefined;
  /** Окончание запрашиваемого периода в часовом поясе UTC. Фильтрация происходит по параметру *record_date* (дата фиксации реестра). */
  to: Date | undefined;
}

/** Дивиденды. */
export interface GetDividendsResponse {
  dividends: Dividend[];
}

/** Информация о выплате. */
export interface Dividend {
  /** Величина дивиденда на 1 ценную бумагу (включая валюту). */
  dividendNet: MoneyValue | undefined;
  /** Дата фактических выплат в часовом поясе UTC. */
  paymentDate: Date | undefined;
  /** Дата объявления дивидендов в часовом поясе UTC. */
  declaredDate: Date | undefined;
  /** Последний день (включительно) покупки для получения выплаты в часовом поясе UTC. */
  lastBuyDate: Date | undefined;
  /** Тип выплаты. Возможные значения: Regular Cash – регулярные выплаты, Cancelled – выплата отменена, Daily Accrual – ежедневное начисление, Return of Capital – возврат капитала, прочие типы выплат. */
  dividendType: string;
  /** Дата фиксации реестра в часовом поясе UTC. */
  recordDate: Date | undefined;
  /** Регулярность выплаты. Возможные значения: Annual – ежегодная, Semi-Anl – каждые полгода, прочие типы выплат. */
  regularity: string;
  /** Цена закрытия инструмента на момент ex_dividend_date. */
  closePrice: MoneyValue | undefined;
  /** Величина доходности. */
  yieldValue: Quotation | undefined;
  /** Дата и время создания записи в часовом поясе UTC. */
  createdAt: Date | undefined;
}

/** Запрос актива по идентификатору. */
export interface AssetRequest {
  /** uid-идентификатор актива. */
  id: string;
}

/** Данные по активу. */
export interface AssetResponse {
  /** Актив. */
  asset: AssetFull | undefined;
}

/** Запрос списка активов. */
export interface AssetsRequest {}

/** Список активов. */
export interface AssetsResponse {
  /** Активы. */
  assets: Asset[];
}

export interface AssetFull {
  /** Уникальный идентификатор актива. */
  uid: string;
  /** Тип актива. */
  type: AssetType;
  /** Наименование актива. */
  name: string;
  /** Короткое наименование актива. */
  nameBrief: string;
  /** Описание актива. */
  description: string;
  /** Дата и время удаления актива. */
  deletedAt: Date | undefined;
  /** Тестирование клиентов. */
  requiredTests: string[];
  /** Валюта. Обязательно и заполняется только для type = "ASSET_TYPE_CURRENCY". */
  currency: AssetCurrency | undefined;
  /** Ценная бумага. Обязательно и заполняется только для type = "ASSET_TYPE_SECURITY". */
  security: AssetSecurity | undefined;
  /** Номер государственной регистрации. */
  gosRegCode: string;
  /** Код CFI. */
  cfi: string;
  /** Код НРД инструмента. */
  codeNsd: string;
  /** Статус актива. */
  status: string;
  /** Бренд. */
  brand: Brand | undefined;
  /** Дата и время последнего обновления записи. */
  updatedAt: Date | undefined;
  /** Код типа ц.б. по классификации Банка России. */
  brCode: string;
  /** Наименование кода типа ц.б. по классификации Банка России. */
  brCodeName: string;
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[];
}

/** Информация об активе. */
export interface Asset {
  /** Уникальный идентификатор актива. */
  uid: string;
  /** Тип актива. */
  type: AssetType;
  /** Наименование актива. */
  name: string;
  /** Массив идентификаторов инструментов. */
  instruments: AssetInstrument[];
}

/** Валюта. */
export interface AssetCurrency {
  /** ISO-код валюты. */
  baseCurrency: string;
}

/** Ценная бумага. */
export interface AssetSecurity {
  /** ISIN-идентификатор ценной бумаги. */
  isin: string;
  /** Тип ценной бумаги. */
  type: string;
  /** Акция. Заполняется только для акций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = share). */
  share: AssetShare | undefined;
  /** Облигация. Заполняется только для облигаций (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = bond). */
  bond: AssetBond | undefined;
  /** Структурная нота. Заполняется только для структурных продуктов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = sp). */
  sp: AssetStructuredProduct | undefined;
  /** Фонд. Заполняется только для фондов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = etf). */
  etf: AssetEtf | undefined;
  /** Клиринговый сертификат участия. Заполняется только для клиринговых сертификатов (тип актива asset.type = "ASSET_TYPE_SECURITY" и security.type = clearing_certificate). */
  clearingCertificate: AssetClearingCertificate | undefined;
}

/** Акция. */
export interface AssetShare {
  /** Тип акции. */
  type: ShareType;
  /** Объем выпуска (шт.). */
  issueSize: Quotation | undefined;
  /** Номинал. */
  nominal: Quotation | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Индекс (Bloomberg). */
  primaryIndex: string;
  /** Ставка дивиденда (для привилегированных акций). */
  dividendRate: Quotation | undefined;
  /** Тип привилегированных акций. */
  preferredShareType: string;
  /** Дата IPO. */
  ipoDate: Date | undefined;
  /** Дата регистрации. */
  registryDate: Date | undefined;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Форма выпуска ФИ. */
  issueKind: string;
  /** Дата размещения акции. */
  placementDate: Date | undefined;
  /** ISIN базового актива. */
  represIsin: string;
  /** Объявленное количество шт. */
  issueSizePlan: Quotation | undefined;
  /** Количество акций в свободном обращении. */
  totalFloat: Quotation | undefined;
}

/** Облигация. */
export interface AssetBond {
  /** Текущий номинал. */
  currentNominal: Quotation | undefined;
  /** Наименование заемщика. */
  borrowName: string;
  /** Объем эмиссии облигации (стоимость). */
  issueSize: Quotation | undefined;
  /** Номинал облигации. */
  nominal: Quotation | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Форма выпуска облигации. */
  issueKind: string;
  /** Форма дохода облигации. */
  interestKind: string;
  /** Количество выплат в год. */
  couponQuantityPerYear: number;
  /** Признак облигации с индексируемым номиналом. */
  indexedNominalFlag: boolean;
  /** Признак субординированной облигации. */
  subordinatedFlag: boolean;
  /** Признак обеспеченной облигации. */
  collateralFlag: boolean;
  /** Признак показывает, что купоны облигации не облагаются налогом (для mass market). */
  taxFreeFlag: boolean;
  /** Признак облигации с амортизацией долга. */
  amortizationFlag: boolean;
  /** Признак облигации с плавающим купоном. */
  floatingCouponFlag: boolean;
  /** Признак бессрочной облигации. */
  perpetualFlag: boolean;
  /** Дата погашения облигации. */
  maturityDate: Date | undefined;
  /** Описание и условия получения дополнительного дохода. */
  returnCondition: string;
  /** Дата выпуска облигации. */
  stateRegDate: Date | undefined;
  /** Дата размещения облигации. */
  placementDate: Date | undefined;
  /** Цена размещения облигации. */
  placementPrice: Quotation | undefined;
  /** Объявленное количество шт. */
  issueSizePlan: Quotation | undefined;
}

/** Структурная нота. */
export interface AssetStructuredProduct {
  /** Наименование заемщика. */
  borrowName: string;
  /** Номинал. */
  nominal: Quotation | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
  /** Тип структурной ноты. */
  type: StructuredProductType;
  /** Стратегия портфеля. */
  logicPortfolio: string;
  /** Тип базового актива. */
  assetType: AssetType;
  /** Вид базового актива в зависимости от типа базового актива. */
  basicAsset: string;
  /** Барьер сохранности (в процентах). */
  safetyBarrier: Quotation | undefined;
  /** Дата погашения. */
  maturityDate: Date | undefined;
  /** Объявленное количество шт. */
  issueSizePlan: Quotation | undefined;
  /** Объем размещения. */
  issueSize: Quotation | undefined;
  /** Дата размещения ноты. */
  placementDate: Date | undefined;
  /** Форма выпуска. */
  issueKind: string;
}

/** Фонд. */
export interface AssetEtf {
  /** Суммарные расходы фонда (в %). */
  totalExpense: Quotation | undefined;
  /** Барьерная ставка доходности после которой фонд имеет право на perfomance fee (в процентах). */
  hurdleRate: Quotation | undefined;
  /** Комиссия за успешные результаты фонда (в процентах). */
  performanceFee: Quotation | undefined;
  /** Фиксированная комиссия за управление (в процентах). */
  fixedCommission: Quotation | undefined;
  /** Тип распределения доходов от выплат по бумагам. */
  paymentType: string;
  /** Признак необходимости выхода фонда в плюс для получения комиссии. */
  watermarkFlag: boolean;
  /** Премия (надбавка к цене) при покупке доли в фонде (в процентах). */
  buyPremium: Quotation | undefined;
  /** Ставка дисконта (вычет из цены) при продаже доли в фонде (в процентах). */
  sellDiscount: Quotation | undefined;
  /** Признак ребалансируемости портфеля фонда. */
  rebalancingFlag: boolean;
  /** Периодичность ребалансировки. */
  rebalancingFreq: string;
  /** Тип управления. */
  managementType: string;
  /** Индекс, который реплицирует (старается копировать) фонд. */
  primaryIndex: string;
  /** База ETF. */
  focusType: string;
  /** Признак использования заемных активов (плечо). */
  leveragedFlag: boolean;
  /** Количество акций в обращении. */
  numShare: Quotation | undefined;
  /** Признак обязательства по отчетности перед регулятором. */
  ucitsFlag: boolean;
  /** Дата выпуска. */
  releasedDate: Date | undefined;
  /** Описание фонда. */
  description: string;
  /** Описание индекса, за которым следует фонд. */
  primaryIndexDescription: string;
  /** Основные компании, в которые вкладывается фонд. */
  primaryIndexCompany: string;
  /** Срок восстановления индекса (после просадки). */
  indexRecoveryPeriod: Quotation | undefined;
  /** IVAV-код. */
  inavCode: string;
  /** Признак наличия дивидендной доходности. */
  divYieldFlag: boolean;
  /** Комиссия на покрытие расходов фонда (в процентах). */
  expenseCommission: Quotation | undefined;
  /** Ошибка следования за индексом (в процентах). */
  primaryIndexTrackingError: Quotation | undefined;
  /** Плановая ребалансировка портфеля. */
  rebalancingPlan: string;
  /** Ставки налогообложения дивидендов и купонов. */
  taxRate: string;
  /** Даты ребалансировок. */
  rebalancingDates: Date[];
  /** Форма выпуска. */
  issueKind: string;
  /** Номинал. */
  nominal: Quotation | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
}

/** Клиринговый сертификат участия. */
export interface AssetClearingCertificate {
  /** Номинал. */
  nominal: Quotation | undefined;
  /** Валюта номинала. */
  nominalCurrency: string;
}

/** Бренд. */
export interface Brand {
  /** uid идентификатор бренда. */
  uid: string;
  /** Наименование бренда. */
  name: string;
  /** Описание. */
  description: string;
  /** Информация о бренде. */
  info: string;
  /** Компания. */
  company: string;
  /** Сектор. */
  sector: string;
  /** Код страны риска. */
  countryOfRisk: string;
  /** Наименование страны риска. */
  countryOfRiskName: string;
}

/** Идентификаторы инструмента. */
export interface AssetInstrument {
  /** uid идентификатор инструмента. */
  uid: string;
  /** figi идентификатор инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код (секция торгов). */
  classCode: string;
  /** Массив связанных инструментов. */
  links: InstrumentLink[];
}

/** Связь с другим инструментом. */
export interface InstrumentLink {
  /** Тип связи. */
  type: string;
  /** uid идентификатор связанного инструмента. */
  instrumentUid: string;
}

/** Запрос избранных инструментов. */
export interface GetFavoritesRequest {}

/** Ответ избранных инструментов. */
export interface GetFavoritesResponse {
  /** Массив инструментов */
  favoriteInstruments: FavoriteInstrument[];
}

/** Избранный инструмент. */
export interface FavoriteInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Тикер инструмента. */
  ticker: string;
  /** Класс-код инструмента. */
  classCode: string;
  /** Isin-идентификатор инструмента. */
  isin: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Признак внебиржевой ценной бумаги. */
  otcFlag: boolean;
  /** Признак доступности торгов через API. */
  apiTradeAvailableFlag: boolean;
}

/** Запрос редактирования избранных инструментов. */
export interface EditFavoritesRequest {
  /** Массив инструментов. */
  instruments: EditFavoritesRequestInstrument[];
  /** Тип действия со списком. */
  actionType: EditFavoritesActionType;
}

/** Избранный инструмент для редактирования. */
export interface EditFavoritesRequestInstrument {
  /** Figi-идентификатор инструмента. */
  figi: string;
}

/** Результат редактирования избранных инструментов. */
export interface EditFavoritesResponse {
  /** Массив инструментов */
  favoriteInstruments: FavoriteInstrument[];
}

function createBaseTradingSchedulesRequest(): TradingSchedulesRequest {
  return { exchange: "", from: undefined, to: undefined };
}

export const TradingSchedulesRequest = {
  encode(
    message: TradingSchedulesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exchange !== "") {
      writer.uint32(10).string(message.exchange);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradingSchedulesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchange = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingSchedulesRequest {
    return {
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: TradingSchedulesRequest): unknown {
    const obj: any = {};
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<TradingSchedulesRequest>
  ): TradingSchedulesRequest {
    const message = createBaseTradingSchedulesRequest();
    message.exchange = object.exchange ?? "";
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseTradingSchedulesResponse(): TradingSchedulesResponse {
  return { exchanges: [] };
}

export const TradingSchedulesResponse = {
  encode(
    message: TradingSchedulesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.exchanges) {
      TradingSchedule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TradingSchedulesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchanges.push(
            TradingSchedule.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingSchedulesResponse {
    return {
      exchanges: Array.isArray(object?.exchanges)
        ? object.exchanges.map((e: any) => TradingSchedule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradingSchedulesResponse): unknown {
    const obj: any = {};
    if (message.exchanges) {
      obj.exchanges = message.exchanges.map((e) =>
        e ? TradingSchedule.toJSON(e) : undefined
      );
    } else {
      obj.exchanges = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<TradingSchedulesResponse>
  ): TradingSchedulesResponse {
    const message = createBaseTradingSchedulesResponse();
    message.exchanges =
      object.exchanges?.map((e) => TradingSchedule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradingSchedule(): TradingSchedule {
  return { exchange: "", days: [] };
}

export const TradingSchedule = {
  encode(
    message: TradingSchedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.exchange !== "") {
      writer.uint32(10).string(message.exchange);
    }
    for (const v of message.days) {
      TradingDay.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchange = reader.string();
          break;
        case 2:
          message.days.push(TradingDay.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TradingSchedule {
    return {
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      days: Array.isArray(object?.days)
        ? object.days.map((e: any) => TradingDay.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TradingSchedule): unknown {
    const obj: any = {};
    message.exchange !== undefined && (obj.exchange = message.exchange);
    if (message.days) {
      obj.days = message.days.map((e) =>
        e ? TradingDay.toJSON(e) : undefined
      );
    } else {
      obj.days = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TradingSchedule>): TradingSchedule {
    const message = createBaseTradingSchedule();
    message.exchange = object.exchange ?? "";
    message.days = object.days?.map((e) => TradingDay.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTradingDay(): TradingDay {
  return {
    date: undefined,
    isTradingDay: false,
    startTime: undefined,
    endTime: undefined,
    openingAuctionStartTime: undefined,
    closingAuctionEndTime: undefined,
    eveningOpeningAuctionStartTime: undefined,
    eveningStartTime: undefined,
    eveningEndTime: undefined,
    clearingStartTime: undefined,
    clearingEndTime: undefined,
    premarketStartTime: undefined,
    premarketEndTime: undefined,
  };
}

export const TradingDay = {
  encode(
    message: TradingDay,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.isTradingDay === true) {
      writer.uint32(16).bool(message.isTradingDay);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.startTime),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.endTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.endTime),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.openingAuctionStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.openingAuctionStartTime),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.closingAuctionEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.closingAuctionEndTime),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.eveningOpeningAuctionStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.eveningOpeningAuctionStartTime),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.eveningStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.eveningStartTime),
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.eveningEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.eveningEndTime),
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.clearingStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.clearingStartTime),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.clearingEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.clearingEndTime),
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.premarketStartTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.premarketStartTime),
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.premarketEndTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.premarketEndTime),
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TradingDay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTradingDay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.isTradingDay = reader.bool();
          break;
        case 3:
          message.startTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.endTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.openingAuctionStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.closingAuctionEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.eveningOpeningAuctionStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.eveningStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.eveningEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.clearingStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.clearingEndTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.premarketStartTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.premarketEndTime = fromTimestamp(
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

  fromJSON(object: any): TradingDay {
    return {
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      isTradingDay: isSet(object.isTradingDay)
        ? Boolean(object.isTradingDay)
        : false,
      startTime: isSet(object.startTime)
        ? fromJsonTimestamp(object.startTime)
        : undefined,
      endTime: isSet(object.endTime)
        ? fromJsonTimestamp(object.endTime)
        : undefined,
      openingAuctionStartTime: isSet(object.openingAuctionStartTime)
        ? fromJsonTimestamp(object.openingAuctionStartTime)
        : undefined,
      closingAuctionEndTime: isSet(object.closingAuctionEndTime)
        ? fromJsonTimestamp(object.closingAuctionEndTime)
        : undefined,
      eveningOpeningAuctionStartTime: isSet(
        object.eveningOpeningAuctionStartTime
      )
        ? fromJsonTimestamp(object.eveningOpeningAuctionStartTime)
        : undefined,
      eveningStartTime: isSet(object.eveningStartTime)
        ? fromJsonTimestamp(object.eveningStartTime)
        : undefined,
      eveningEndTime: isSet(object.eveningEndTime)
        ? fromJsonTimestamp(object.eveningEndTime)
        : undefined,
      clearingStartTime: isSet(object.clearingStartTime)
        ? fromJsonTimestamp(object.clearingStartTime)
        : undefined,
      clearingEndTime: isSet(object.clearingEndTime)
        ? fromJsonTimestamp(object.clearingEndTime)
        : undefined,
      premarketStartTime: isSet(object.premarketStartTime)
        ? fromJsonTimestamp(object.premarketStartTime)
        : undefined,
      premarketEndTime: isSet(object.premarketEndTime)
        ? fromJsonTimestamp(object.premarketEndTime)
        : undefined,
    };
  },

  toJSON(message: TradingDay): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.isTradingDay !== undefined &&
      (obj.isTradingDay = message.isTradingDay);
    message.startTime !== undefined &&
      (obj.startTime = message.startTime.toISOString());
    message.endTime !== undefined &&
      (obj.endTime = message.endTime.toISOString());
    message.openingAuctionStartTime !== undefined &&
      (obj.openingAuctionStartTime =
        message.openingAuctionStartTime.toISOString());
    message.closingAuctionEndTime !== undefined &&
      (obj.closingAuctionEndTime = message.closingAuctionEndTime.toISOString());
    message.eveningOpeningAuctionStartTime !== undefined &&
      (obj.eveningOpeningAuctionStartTime =
        message.eveningOpeningAuctionStartTime.toISOString());
    message.eveningStartTime !== undefined &&
      (obj.eveningStartTime = message.eveningStartTime.toISOString());
    message.eveningEndTime !== undefined &&
      (obj.eveningEndTime = message.eveningEndTime.toISOString());
    message.clearingStartTime !== undefined &&
      (obj.clearingStartTime = message.clearingStartTime.toISOString());
    message.clearingEndTime !== undefined &&
      (obj.clearingEndTime = message.clearingEndTime.toISOString());
    message.premarketStartTime !== undefined &&
      (obj.premarketStartTime = message.premarketStartTime.toISOString());
    message.premarketEndTime !== undefined &&
      (obj.premarketEndTime = message.premarketEndTime.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<TradingDay>): TradingDay {
    const message = createBaseTradingDay();
    message.date = object.date ?? undefined;
    message.isTradingDay = object.isTradingDay ?? false;
    message.startTime = object.startTime ?? undefined;
    message.endTime = object.endTime ?? undefined;
    message.openingAuctionStartTime =
      object.openingAuctionStartTime ?? undefined;
    message.closingAuctionEndTime = object.closingAuctionEndTime ?? undefined;
    message.eveningOpeningAuctionStartTime =
      object.eveningOpeningAuctionStartTime ?? undefined;
    message.eveningStartTime = object.eveningStartTime ?? undefined;
    message.eveningEndTime = object.eveningEndTime ?? undefined;
    message.clearingStartTime = object.clearingStartTime ?? undefined;
    message.clearingEndTime = object.clearingEndTime ?? undefined;
    message.premarketStartTime = object.premarketStartTime ?? undefined;
    message.premarketEndTime = object.premarketEndTime ?? undefined;
    return message;
  },
};

function createBaseInstrumentRequest(): InstrumentRequest {
  return { idType: 0, classCode: "", id: "" };
}

export const InstrumentRequest = {
  encode(
    message: InstrumentRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.idType !== 0) {
      writer.uint32(8).int32(message.idType);
    }
    if (message.classCode !== "") {
      writer.uint32(18).string(message.classCode);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idType = reader.int32() as any;
          break;
        case 2:
          message.classCode = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentRequest {
    return {
      idType: isSet(object.idType)
        ? instrumentIdTypeFromJSON(object.idType)
        : 0,
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: InstrumentRequest): unknown {
    const obj: any = {};
    message.idType !== undefined &&
      (obj.idType = instrumentIdTypeToJSON(message.idType));
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<InstrumentRequest>): InstrumentRequest {
    const message = createBaseInstrumentRequest();
    message.idType = object.idType ?? 0;
    message.classCode = object.classCode ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseInstrumentsRequest(): InstrumentsRequest {
  return { instrumentStatus: 0 };
}

export const InstrumentsRequest = {
  encode(
    message: InstrumentsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrumentStatus !== 0) {
      writer.uint32(8).int32(message.instrumentStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrumentStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentsRequest {
    return {
      instrumentStatus: isSet(object.instrumentStatus)
        ? instrumentStatusFromJSON(object.instrumentStatus)
        : 0,
    };
  },

  toJSON(message: InstrumentsRequest): unknown {
    const obj: any = {};
    message.instrumentStatus !== undefined &&
      (obj.instrumentStatus = instrumentStatusToJSON(message.instrumentStatus));
    return obj;
  },

  fromPartial(object: DeepPartial<InstrumentsRequest>): InstrumentsRequest {
    const message = createBaseInstrumentsRequest();
    message.instrumentStatus = object.instrumentStatus ?? 0;
    return message;
  },
};

function createBaseBondResponse(): BondResponse {
  return { instrument: undefined };
}

export const BondResponse = {
  encode(
    message: BondResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Bond.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Bond.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondResponse {
    return {
      instrument: isSet(object.instrument)
        ? Bond.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: BondResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Bond.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<BondResponse>): BondResponse {
    const message = createBaseBondResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Bond.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseBondsResponse(): BondsResponse {
  return { instruments: [] };
}

export const BondsResponse = {
  encode(
    message: BondsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      Bond.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BondsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBondsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(Bond.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BondsResponse {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Bond.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BondsResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? Bond.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<BondsResponse>): BondsResponse {
    const message = createBaseBondsResponse();
    message.instruments =
      object.instruments?.map((e) => Bond.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGetBondCouponsRequest(): GetBondCouponsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetBondCouponsRequest = {
  encode(
    message: GetBondCouponsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBondCouponsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBondCouponsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBondCouponsRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetBondCouponsRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBondCouponsRequest>
  ): GetBondCouponsRequest {
    const message = createBaseGetBondCouponsRequest();
    message.figi = object.figi ?? "";
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseGetBondCouponsResponse(): GetBondCouponsResponse {
  return { events: [] };
}

export const GetBondCouponsResponse = {
  encode(
    message: GetBondCouponsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.events) {
      Coupon.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBondCouponsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBondCouponsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.events.push(Coupon.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBondCouponsResponse {
    return {
      events: Array.isArray(object?.events)
        ? object.events.map((e: any) => Coupon.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetBondCouponsResponse): unknown {
    const obj: any = {};
    if (message.events) {
      obj.events = message.events.map((e) =>
        e ? Coupon.toJSON(e) : undefined
      );
    } else {
      obj.events = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetBondCouponsResponse>
  ): GetBondCouponsResponse {
    const message = createBaseGetBondCouponsResponse();
    message.events = object.events?.map((e) => Coupon.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCoupon(): Coupon {
  return {
    figi: "",
    couponDate: undefined,
    couponNumber: 0,
    fixDate: undefined,
    payOneBond: undefined,
    couponType: 0,
    couponStartDate: undefined,
    couponEndDate: undefined,
    couponPeriod: 0,
  };
}

export const Coupon = {
  encode(
    message: Coupon,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.couponDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.couponDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.couponNumber !== 0) {
      writer.uint32(24).int64(message.couponNumber);
    }
    if (message.fixDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.fixDate),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.payOneBond !== undefined) {
      MoneyValue.encode(message.payOneBond, writer.uint32(42).fork()).ldelim();
    }
    if (message.couponType !== 0) {
      writer.uint32(48).int32(message.couponType);
    }
    if (message.couponStartDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.couponStartDate),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.couponEndDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.couponEndDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.couponPeriod !== 0) {
      writer.uint32(72).int32(message.couponPeriod);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coupon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoupon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.couponDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.couponNumber = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.fixDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.payOneBond = MoneyValue.decode(reader, reader.uint32());
          break;
        case 6:
          message.couponType = reader.int32() as any;
          break;
        case 7:
          message.couponStartDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.couponEndDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.couponPeriod = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Coupon {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      couponDate: isSet(object.couponDate)
        ? fromJsonTimestamp(object.couponDate)
        : undefined,
      couponNumber: isSet(object.couponNumber)
        ? Number(object.couponNumber)
        : 0,
      fixDate: isSet(object.fixDate)
        ? fromJsonTimestamp(object.fixDate)
        : undefined,
      payOneBond: isSet(object.payOneBond)
        ? MoneyValue.fromJSON(object.payOneBond)
        : undefined,
      couponType: isSet(object.couponType)
        ? couponTypeFromJSON(object.couponType)
        : 0,
      couponStartDate: isSet(object.couponStartDate)
        ? fromJsonTimestamp(object.couponStartDate)
        : undefined,
      couponEndDate: isSet(object.couponEndDate)
        ? fromJsonTimestamp(object.couponEndDate)
        : undefined,
      couponPeriod: isSet(object.couponPeriod)
        ? Number(object.couponPeriod)
        : 0,
    };
  },

  toJSON(message: Coupon): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.couponDate !== undefined &&
      (obj.couponDate = message.couponDate.toISOString());
    message.couponNumber !== undefined &&
      (obj.couponNumber = Math.round(message.couponNumber));
    message.fixDate !== undefined &&
      (obj.fixDate = message.fixDate.toISOString());
    message.payOneBond !== undefined &&
      (obj.payOneBond = message.payOneBond
        ? MoneyValue.toJSON(message.payOneBond)
        : undefined);
    message.couponType !== undefined &&
      (obj.couponType = couponTypeToJSON(message.couponType));
    message.couponStartDate !== undefined &&
      (obj.couponStartDate = message.couponStartDate.toISOString());
    message.couponEndDate !== undefined &&
      (obj.couponEndDate = message.couponEndDate.toISOString());
    message.couponPeriod !== undefined &&
      (obj.couponPeriod = Math.round(message.couponPeriod));
    return obj;
  },

  fromPartial(object: DeepPartial<Coupon>): Coupon {
    const message = createBaseCoupon();
    message.figi = object.figi ?? "";
    message.couponDate = object.couponDate ?? undefined;
    message.couponNumber = object.couponNumber ?? 0;
    message.fixDate = object.fixDate ?? undefined;
    message.payOneBond =
      object.payOneBond !== undefined && object.payOneBond !== null
        ? MoneyValue.fromPartial(object.payOneBond)
        : undefined;
    message.couponType = object.couponType ?? 0;
    message.couponStartDate = object.couponStartDate ?? undefined;
    message.couponEndDate = object.couponEndDate ?? undefined;
    message.couponPeriod = object.couponPeriod ?? 0;
    return message;
  },
};

function createBaseCurrencyResponse(): CurrencyResponse {
  return { instrument: undefined };
}

export const CurrencyResponse = {
  encode(
    message: CurrencyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Currency.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrencyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrencyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Currency.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrencyResponse {
    return {
      instrument: isSet(object.instrument)
        ? Currency.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: CurrencyResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Currency.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<CurrencyResponse>): CurrencyResponse {
    const message = createBaseCurrencyResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Currency.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseCurrenciesResponse(): CurrenciesResponse {
  return { instruments: [] };
}

export const CurrenciesResponse = {
  encode(
    message: CurrenciesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      Currency.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CurrenciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrenciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(Currency.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CurrenciesResponse {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Currency.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CurrenciesResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? Currency.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CurrenciesResponse>): CurrenciesResponse {
    const message = createBaseCurrenciesResponse();
    message.instruments =
      object.instruments?.map((e) => Currency.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEtfResponse(): EtfResponse {
  return { instrument: undefined };
}

export const EtfResponse = {
  encode(
    message: EtfResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Etf.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EtfResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtfResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Etf.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EtfResponse {
    return {
      instrument: isSet(object.instrument)
        ? Etf.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: EtfResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Etf.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EtfResponse>): EtfResponse {
    const message = createBaseEtfResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Etf.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseEtfsResponse(): EtfsResponse {
  return { instruments: [] };
}

export const EtfsResponse = {
  encode(
    message: EtfsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      Etf.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EtfsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtfsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(Etf.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EtfsResponse {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Etf.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EtfsResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? Etf.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<EtfsResponse>): EtfsResponse {
    const message = createBaseEtfsResponse();
    message.instruments =
      object.instruments?.map((e) => Etf.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFutureResponse(): FutureResponse {
  return { instrument: undefined };
}

export const FutureResponse = {
  encode(
    message: FutureResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Future.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FutureResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFutureResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Future.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FutureResponse {
    return {
      instrument: isSet(object.instrument)
        ? Future.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: FutureResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Future.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<FutureResponse>): FutureResponse {
    const message = createBaseFutureResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Future.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseFuturesResponse(): FuturesResponse {
  return { instruments: [] };
}

export const FuturesResponse = {
  encode(
    message: FuturesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      Future.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FuturesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuturesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(Future.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FuturesResponse {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Future.fromJSON(e))
        : [],
    };
  },

  toJSON(message: FuturesResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? Future.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<FuturesResponse>): FuturesResponse {
    const message = createBaseFuturesResponse();
    message.instruments =
      object.instruments?.map((e) => Future.fromPartial(e)) || [];
    return message;
  },
};

function createBaseShareResponse(): ShareResponse {
  return { instrument: undefined };
}

export const ShareResponse = {
  encode(
    message: ShareResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Share.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShareResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Share.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ShareResponse {
    return {
      instrument: isSet(object.instrument)
        ? Share.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: ShareResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Share.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ShareResponse>): ShareResponse {
    const message = createBaseShareResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Share.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseSharesResponse(): SharesResponse {
  return { instruments: [] };
}

export const SharesResponse = {
  encode(
    message: SharesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      Share.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SharesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(Share.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SharesResponse {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => Share.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SharesResponse): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? Share.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<SharesResponse>): SharesResponse {
    const message = createBaseSharesResponse();
    message.instruments =
      object.instruments?.map((e) => Share.fromPartial(e)) || [];
    return message;
  },
};

function createBaseBond(): Bond {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    couponQuantityPerYear: 0,
    maturityDate: undefined,
    nominal: undefined,
    stateRegDate: undefined,
    placementDate: undefined,
    placementPrice: undefined,
    aciValue: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    issueKind: "",
    issueSize: 0,
    issueSizePlan: 0,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    floatingCouponFlag: false,
    perpetualFlag: false,
    amortizationFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Bond = {
  encode(message: Bond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.couponQuantityPerYear !== 0) {
      writer.uint32(136).int32(message.couponQuantityPerYear);
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.maturityDate),
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(154).fork()).ldelim();
    }
    if (message.stateRegDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.stateRegDate),
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.placementDate),
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.placementPrice !== undefined) {
      MoneyValue.encode(
        message.placementPrice,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.aciValue !== undefined) {
      MoneyValue.encode(message.aciValue, writer.uint32(194).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(202).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(210).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(218).string(message.sector);
    }
    if (message.issueKind !== "") {
      writer.uint32(226).string(message.issueKind);
    }
    if (message.issueSize !== 0) {
      writer.uint32(232).int64(message.issueSize);
    }
    if (message.issueSizePlan !== 0) {
      writer.uint32(240).int64(message.issueSizePlan);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(248).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(256).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(264).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(272).bool(message.sellAvailableFlag);
    }
    if (message.floatingCouponFlag === true) {
      writer.uint32(280).bool(message.floatingCouponFlag);
    }
    if (message.perpetualFlag === true) {
      writer.uint32(288).bool(message.perpetualFlag);
    }
    if (message.amortizationFlag === true) {
      writer.uint32(296).bool(message.amortizationFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(312).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(322).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(328).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Bond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.lot = reader.int32();
          break;
        case 6:
          message.currency = reader.string();
          break;
        case 7:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 13:
          message.shortEnabledFlag = reader.bool();
          break;
        case 15:
          message.name = reader.string();
          break;
        case 16:
          message.exchange = reader.string();
          break;
        case 17:
          message.couponQuantityPerYear = reader.int32();
          break;
        case 18:
          message.maturityDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 19:
          message.nominal = MoneyValue.decode(reader, reader.uint32());
          break;
        case 21:
          message.stateRegDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.placementDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 23:
          message.placementPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 24:
          message.aciValue = MoneyValue.decode(reader, reader.uint32());
          break;
        case 25:
          message.countryOfRisk = reader.string();
          break;
        case 26:
          message.countryOfRiskName = reader.string();
          break;
        case 27:
          message.sector = reader.string();
          break;
        case 28:
          message.issueKind = reader.string();
          break;
        case 29:
          message.issueSize = longToNumber(reader.int64() as Long);
          break;
        case 30:
          message.issueSizePlan = longToNumber(reader.int64() as Long);
          break;
        case 31:
          message.tradingStatus = reader.int32() as any;
          break;
        case 32:
          message.otcFlag = reader.bool();
          break;
        case 33:
          message.buyAvailableFlag = reader.bool();
          break;
        case 34:
          message.sellAvailableFlag = reader.bool();
          break;
        case 35:
          message.floatingCouponFlag = reader.bool();
          break;
        case 36:
          message.perpetualFlag = reader.bool();
          break;
        case 37:
          message.amortizationFlag = reader.bool();
          break;
        case 38:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 39:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 40:
          message.uid = reader.string();
          break;
        case 41:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Bond {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      couponQuantityPerYear: isSet(object.couponQuantityPerYear)
        ? Number(object.couponQuantityPerYear)
        : 0,
      maturityDate: isSet(object.maturityDate)
        ? fromJsonTimestamp(object.maturityDate)
        : undefined,
      nominal: isSet(object.nominal)
        ? MoneyValue.fromJSON(object.nominal)
        : undefined,
      stateRegDate: isSet(object.stateRegDate)
        ? fromJsonTimestamp(object.stateRegDate)
        : undefined,
      placementDate: isSet(object.placementDate)
        ? fromJsonTimestamp(object.placementDate)
        : undefined,
      placementPrice: isSet(object.placementPrice)
        ? MoneyValue.fromJSON(object.placementPrice)
        : undefined,
      aciValue: isSet(object.aciValue)
        ? MoneyValue.fromJSON(object.aciValue)
        : undefined,
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      sector: isSet(object.sector) ? String(object.sector) : "",
      issueKind: isSet(object.issueKind) ? String(object.issueKind) : "",
      issueSize: isSet(object.issueSize) ? Number(object.issueSize) : 0,
      issueSizePlan: isSet(object.issueSizePlan)
        ? Number(object.issueSizePlan)
        : 0,
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      floatingCouponFlag: isSet(object.floatingCouponFlag)
        ? Boolean(object.floatingCouponFlag)
        : false,
      perpetualFlag: isSet(object.perpetualFlag)
        ? Boolean(object.perpetualFlag)
        : false,
      amortizationFlag: isSet(object.amortizationFlag)
        ? Boolean(object.amortizationFlag)
        : false,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Bond): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.couponQuantityPerYear !== undefined &&
      (obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear));
    message.maturityDate !== undefined &&
      (obj.maturityDate = message.maturityDate.toISOString());
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? MoneyValue.toJSON(message.nominal)
        : undefined);
    message.stateRegDate !== undefined &&
      (obj.stateRegDate = message.stateRegDate.toISOString());
    message.placementDate !== undefined &&
      (obj.placementDate = message.placementDate.toISOString());
    message.placementPrice !== undefined &&
      (obj.placementPrice = message.placementPrice
        ? MoneyValue.toJSON(message.placementPrice)
        : undefined);
    message.aciValue !== undefined &&
      (obj.aciValue = message.aciValue
        ? MoneyValue.toJSON(message.aciValue)
        : undefined);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.sector !== undefined && (obj.sector = message.sector);
    message.issueKind !== undefined && (obj.issueKind = message.issueKind);
    message.issueSize !== undefined &&
      (obj.issueSize = Math.round(message.issueSize));
    message.issueSizePlan !== undefined &&
      (obj.issueSizePlan = Math.round(message.issueSizePlan));
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.floatingCouponFlag !== undefined &&
      (obj.floatingCouponFlag = message.floatingCouponFlag);
    message.perpetualFlag !== undefined &&
      (obj.perpetualFlag = message.perpetualFlag);
    message.amortizationFlag !== undefined &&
      (obj.amortizationFlag = message.amortizationFlag);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Bond>): Bond {
    const message = createBaseBond();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.couponQuantityPerYear = object.couponQuantityPerYear ?? 0;
    message.maturityDate = object.maturityDate ?? undefined;
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? MoneyValue.fromPartial(object.nominal)
        : undefined;
    message.stateRegDate = object.stateRegDate ?? undefined;
    message.placementDate = object.placementDate ?? undefined;
    message.placementPrice =
      object.placementPrice !== undefined && object.placementPrice !== null
        ? MoneyValue.fromPartial(object.placementPrice)
        : undefined;
    message.aciValue =
      object.aciValue !== undefined && object.aciValue !== null
        ? MoneyValue.fromPartial(object.aciValue)
        : undefined;
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.sector = object.sector ?? "";
    message.issueKind = object.issueKind ?? "";
    message.issueSize = object.issueSize ?? 0;
    message.issueSizePlan = object.issueSizePlan ?? 0;
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.floatingCouponFlag = object.floatingCouponFlag ?? false;
    message.perpetualFlag = object.perpetualFlag ?? false;
    message.amortizationFlag = object.amortizationFlag ?? false;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseCurrency(): Currency {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    nominal: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    isoCurrencyName: "",
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Currency = {
  encode(
    message: Currency,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(138).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(146).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(154).string(message.countryOfRiskName);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(160).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(168).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(176).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(184).bool(message.sellAvailableFlag);
    }
    if (message.isoCurrencyName !== "") {
      writer.uint32(194).string(message.isoCurrencyName);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(208).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(218).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(224).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Currency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.lot = reader.int32();
          break;
        case 6:
          message.currency = reader.string();
          break;
        case 7:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 13:
          message.shortEnabledFlag = reader.bool();
          break;
        case 15:
          message.name = reader.string();
          break;
        case 16:
          message.exchange = reader.string();
          break;
        case 17:
          message.nominal = MoneyValue.decode(reader, reader.uint32());
          break;
        case 18:
          message.countryOfRisk = reader.string();
          break;
        case 19:
          message.countryOfRiskName = reader.string();
          break;
        case 20:
          message.tradingStatus = reader.int32() as any;
          break;
        case 21:
          message.otcFlag = reader.bool();
          break;
        case 22:
          message.buyAvailableFlag = reader.bool();
          break;
        case 23:
          message.sellAvailableFlag = reader.bool();
          break;
        case 24:
          message.isoCurrencyName = reader.string();
          break;
        case 25:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 26:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 27:
          message.uid = reader.string();
          break;
        case 28:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Currency {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      nominal: isSet(object.nominal)
        ? MoneyValue.fromJSON(object.nominal)
        : undefined,
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      isoCurrencyName: isSet(object.isoCurrencyName)
        ? String(object.isoCurrencyName)
        : "",
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Currency): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? MoneyValue.toJSON(message.nominal)
        : undefined);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.isoCurrencyName !== undefined &&
      (obj.isoCurrencyName = message.isoCurrencyName);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Currency>): Currency {
    const message = createBaseCurrency();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? MoneyValue.fromPartial(object.nominal)
        : undefined;
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.isoCurrencyName = object.isoCurrencyName ?? "";
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseEtf(): Etf {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    fixedCommission: undefined,
    focusType: "",
    releasedDate: undefined,
    numShares: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    rebalancingFreq: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Etf = {
  encode(message: Etf, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.fixedCommission !== undefined) {
      Quotation.encode(
        message.fixedCommission,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.focusType !== "") {
      writer.uint32(146).string(message.focusType);
    }
    if (message.releasedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.releasedDate),
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.numShares !== undefined) {
      Quotation.encode(message.numShares, writer.uint32(162).fork()).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(170).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(178).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(186).string(message.sector);
    }
    if (message.rebalancingFreq !== "") {
      writer.uint32(194).string(message.rebalancingFreq);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(240).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(250).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(256).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Etf {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEtf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.lot = reader.int32();
          break;
        case 6:
          message.currency = reader.string();
          break;
        case 7:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 13:
          message.shortEnabledFlag = reader.bool();
          break;
        case 15:
          message.name = reader.string();
          break;
        case 16:
          message.exchange = reader.string();
          break;
        case 17:
          message.fixedCommission = Quotation.decode(reader, reader.uint32());
          break;
        case 18:
          message.focusType = reader.string();
          break;
        case 19:
          message.releasedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.numShares = Quotation.decode(reader, reader.uint32());
          break;
        case 21:
          message.countryOfRisk = reader.string();
          break;
        case 22:
          message.countryOfRiskName = reader.string();
          break;
        case 23:
          message.sector = reader.string();
          break;
        case 24:
          message.rebalancingFreq = reader.string();
          break;
        case 25:
          message.tradingStatus = reader.int32() as any;
          break;
        case 26:
          message.otcFlag = reader.bool();
          break;
        case 27:
          message.buyAvailableFlag = reader.bool();
          break;
        case 28:
          message.sellAvailableFlag = reader.bool();
          break;
        case 29:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 30:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 31:
          message.uid = reader.string();
          break;
        case 32:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Etf {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      fixedCommission: isSet(object.fixedCommission)
        ? Quotation.fromJSON(object.fixedCommission)
        : undefined,
      focusType: isSet(object.focusType) ? String(object.focusType) : "",
      releasedDate: isSet(object.releasedDate)
        ? fromJsonTimestamp(object.releasedDate)
        : undefined,
      numShares: isSet(object.numShares)
        ? Quotation.fromJSON(object.numShares)
        : undefined,
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      sector: isSet(object.sector) ? String(object.sector) : "",
      rebalancingFreq: isSet(object.rebalancingFreq)
        ? String(object.rebalancingFreq)
        : "",
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Etf): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.fixedCommission !== undefined &&
      (obj.fixedCommission = message.fixedCommission
        ? Quotation.toJSON(message.fixedCommission)
        : undefined);
    message.focusType !== undefined && (obj.focusType = message.focusType);
    message.releasedDate !== undefined &&
      (obj.releasedDate = message.releasedDate.toISOString());
    message.numShares !== undefined &&
      (obj.numShares = message.numShares
        ? Quotation.toJSON(message.numShares)
        : undefined);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.sector !== undefined && (obj.sector = message.sector);
    message.rebalancingFreq !== undefined &&
      (obj.rebalancingFreq = message.rebalancingFreq);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Etf>): Etf {
    const message = createBaseEtf();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.fixedCommission =
      object.fixedCommission !== undefined && object.fixedCommission !== null
        ? Quotation.fromPartial(object.fixedCommission)
        : undefined;
    message.focusType = object.focusType ?? "";
    message.releasedDate = object.releasedDate ?? undefined;
    message.numShares =
      object.numShares !== undefined && object.numShares !== null
        ? Quotation.fromPartial(object.numShares)
        : undefined;
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.sector = object.sector ?? "";
    message.rebalancingFreq = object.rebalancingFreq ?? "";
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseFuture(): Future {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    firstTradeDate: undefined,
    lastTradeDate: undefined,
    futuresType: "",
    assetType: "",
    basicAsset: "",
    basicAssetSize: undefined,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    expirationDate: undefined,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Future = {
  encode(
    message: Future,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.lot !== 0) {
      writer.uint32(32).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(42).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(50).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(58).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(66).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(74).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(82).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(96).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(114).string(message.exchange);
    }
    if (message.firstTradeDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.firstTradeDate),
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.lastTradeDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastTradeDate),
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.futuresType !== "") {
      writer.uint32(138).string(message.futuresType);
    }
    if (message.assetType !== "") {
      writer.uint32(146).string(message.assetType);
    }
    if (message.basicAsset !== "") {
      writer.uint32(154).string(message.basicAsset);
    }
    if (message.basicAssetSize !== undefined) {
      Quotation.encode(
        message.basicAssetSize,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(170).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(178).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(186).string(message.sector);
    }
    if (message.expirationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expirationDate),
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(240).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(250).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(256).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Future {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFuture();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.lot = reader.int32();
          break;
        case 5:
          message.currency = reader.string();
          break;
        case 6:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.shortEnabledFlag = reader.bool();
          break;
        case 13:
          message.name = reader.string();
          break;
        case 14:
          message.exchange = reader.string();
          break;
        case 15:
          message.firstTradeDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.lastTradeDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.futuresType = reader.string();
          break;
        case 18:
          message.assetType = reader.string();
          break;
        case 19:
          message.basicAsset = reader.string();
          break;
        case 20:
          message.basicAssetSize = Quotation.decode(reader, reader.uint32());
          break;
        case 21:
          message.countryOfRisk = reader.string();
          break;
        case 22:
          message.countryOfRiskName = reader.string();
          break;
        case 23:
          message.sector = reader.string();
          break;
        case 24:
          message.expirationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 25:
          message.tradingStatus = reader.int32() as any;
          break;
        case 26:
          message.otcFlag = reader.bool();
          break;
        case 27:
          message.buyAvailableFlag = reader.bool();
          break;
        case 28:
          message.sellAvailableFlag = reader.bool();
          break;
        case 29:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 30:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 31:
          message.uid = reader.string();
          break;
        case 32:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Future {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      firstTradeDate: isSet(object.firstTradeDate)
        ? fromJsonTimestamp(object.firstTradeDate)
        : undefined,
      lastTradeDate: isSet(object.lastTradeDate)
        ? fromJsonTimestamp(object.lastTradeDate)
        : undefined,
      futuresType: isSet(object.futuresType) ? String(object.futuresType) : "",
      assetType: isSet(object.assetType) ? String(object.assetType) : "",
      basicAsset: isSet(object.basicAsset) ? String(object.basicAsset) : "",
      basicAssetSize: isSet(object.basicAssetSize)
        ? Quotation.fromJSON(object.basicAssetSize)
        : undefined,
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      sector: isSet(object.sector) ? String(object.sector) : "",
      expirationDate: isSet(object.expirationDate)
        ? fromJsonTimestamp(object.expirationDate)
        : undefined,
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Future): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.firstTradeDate !== undefined &&
      (obj.firstTradeDate = message.firstTradeDate.toISOString());
    message.lastTradeDate !== undefined &&
      (obj.lastTradeDate = message.lastTradeDate.toISOString());
    message.futuresType !== undefined &&
      (obj.futuresType = message.futuresType);
    message.assetType !== undefined && (obj.assetType = message.assetType);
    message.basicAsset !== undefined && (obj.basicAsset = message.basicAsset);
    message.basicAssetSize !== undefined &&
      (obj.basicAssetSize = message.basicAssetSize
        ? Quotation.toJSON(message.basicAssetSize)
        : undefined);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.sector !== undefined && (obj.sector = message.sector);
    message.expirationDate !== undefined &&
      (obj.expirationDate = message.expirationDate.toISOString());
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Future>): Future {
    const message = createBaseFuture();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.firstTradeDate = object.firstTradeDate ?? undefined;
    message.lastTradeDate = object.lastTradeDate ?? undefined;
    message.futuresType = object.futuresType ?? "";
    message.assetType = object.assetType ?? "";
    message.basicAsset = object.basicAsset ?? "";
    message.basicAssetSize =
      object.basicAssetSize !== undefined && object.basicAssetSize !== null
        ? Quotation.fromPartial(object.basicAssetSize)
        : undefined;
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.sector = object.sector ?? "";
    message.expirationDate = object.expirationDate ?? undefined;
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseShare(): Share {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    ipoDate: undefined,
    issueSize: 0,
    countryOfRisk: "",
    countryOfRiskName: "",
    sector: "",
    issueSizePlan: 0,
    nominal: undefined,
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    divYieldFlag: false,
    shareType: 0,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Share = {
  encode(message: Share, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(122).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(130).string(message.exchange);
    }
    if (message.ipoDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.ipoDate),
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.issueSize !== 0) {
      writer.uint32(144).int64(message.issueSize);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(154).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(162).string(message.countryOfRiskName);
    }
    if (message.sector !== "") {
      writer.uint32(170).string(message.sector);
    }
    if (message.issueSizePlan !== 0) {
      writer.uint32(176).int64(message.issueSizePlan);
    }
    if (message.nominal !== undefined) {
      MoneyValue.encode(message.nominal, writer.uint32(186).fork()).ldelim();
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(200).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(208).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(216).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(224).bool(message.sellAvailableFlag);
    }
    if (message.divYieldFlag === true) {
      writer.uint32(232).bool(message.divYieldFlag);
    }
    if (message.shareType !== 0) {
      writer.uint32(240).int32(message.shareType);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(256).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(266).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(272).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Share {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.lot = reader.int32();
          break;
        case 6:
          message.currency = reader.string();
          break;
        case 7:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 13:
          message.shortEnabledFlag = reader.bool();
          break;
        case 15:
          message.name = reader.string();
          break;
        case 16:
          message.exchange = reader.string();
          break;
        case 17:
          message.ipoDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.issueSize = longToNumber(reader.int64() as Long);
          break;
        case 19:
          message.countryOfRisk = reader.string();
          break;
        case 20:
          message.countryOfRiskName = reader.string();
          break;
        case 21:
          message.sector = reader.string();
          break;
        case 22:
          message.issueSizePlan = longToNumber(reader.int64() as Long);
          break;
        case 23:
          message.nominal = MoneyValue.decode(reader, reader.uint32());
          break;
        case 25:
          message.tradingStatus = reader.int32() as any;
          break;
        case 26:
          message.otcFlag = reader.bool();
          break;
        case 27:
          message.buyAvailableFlag = reader.bool();
          break;
        case 28:
          message.sellAvailableFlag = reader.bool();
          break;
        case 29:
          message.divYieldFlag = reader.bool();
          break;
        case 30:
          message.shareType = reader.int32() as any;
          break;
        case 31:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 32:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 33:
          message.uid = reader.string();
          break;
        case 34:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Share {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      ipoDate: isSet(object.ipoDate)
        ? fromJsonTimestamp(object.ipoDate)
        : undefined,
      issueSize: isSet(object.issueSize) ? Number(object.issueSize) : 0,
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      sector: isSet(object.sector) ? String(object.sector) : "",
      issueSizePlan: isSet(object.issueSizePlan)
        ? Number(object.issueSizePlan)
        : 0,
      nominal: isSet(object.nominal)
        ? MoneyValue.fromJSON(object.nominal)
        : undefined,
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      divYieldFlag: isSet(object.divYieldFlag)
        ? Boolean(object.divYieldFlag)
        : false,
      shareType: isSet(object.shareType)
        ? shareTypeFromJSON(object.shareType)
        : 0,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Share): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.ipoDate !== undefined &&
      (obj.ipoDate = message.ipoDate.toISOString());
    message.issueSize !== undefined &&
      (obj.issueSize = Math.round(message.issueSize));
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.sector !== undefined && (obj.sector = message.sector);
    message.issueSizePlan !== undefined &&
      (obj.issueSizePlan = Math.round(message.issueSizePlan));
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? MoneyValue.toJSON(message.nominal)
        : undefined);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.divYieldFlag !== undefined &&
      (obj.divYieldFlag = message.divYieldFlag);
    message.shareType !== undefined &&
      (obj.shareType = shareTypeToJSON(message.shareType));
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Share>): Share {
    const message = createBaseShare();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.ipoDate = object.ipoDate ?? undefined;
    message.issueSize = object.issueSize ?? 0;
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.sector = object.sector ?? "";
    message.issueSizePlan = object.issueSizePlan ?? 0;
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? MoneyValue.fromPartial(object.nominal)
        : undefined;
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.divYieldFlag = object.divYieldFlag ?? false;
    message.shareType = object.shareType ?? 0;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseGetAccruedInterestsRequest(): GetAccruedInterestsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetAccruedInterestsRequest = {
  encode(
    message: GetAccruedInterestsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAccruedInterestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccruedInterestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccruedInterestsRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetAccruedInterestsRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAccruedInterestsRequest>
  ): GetAccruedInterestsRequest {
    const message = createBaseGetAccruedInterestsRequest();
    message.figi = object.figi ?? "";
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseGetAccruedInterestsResponse(): GetAccruedInterestsResponse {
  return { accruedInterests: [] };
}

export const GetAccruedInterestsResponse = {
  encode(
    message: GetAccruedInterestsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accruedInterests) {
      AccruedInterest.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetAccruedInterestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccruedInterestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accruedInterests.push(
            AccruedInterest.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetAccruedInterestsResponse {
    return {
      accruedInterests: Array.isArray(object?.accruedInterests)
        ? object.accruedInterests.map((e: any) => AccruedInterest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetAccruedInterestsResponse): unknown {
    const obj: any = {};
    if (message.accruedInterests) {
      obj.accruedInterests = message.accruedInterests.map((e) =>
        e ? AccruedInterest.toJSON(e) : undefined
      );
    } else {
      obj.accruedInterests = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetAccruedInterestsResponse>
  ): GetAccruedInterestsResponse {
    const message = createBaseGetAccruedInterestsResponse();
    message.accruedInterests =
      object.accruedInterests?.map((e) => AccruedInterest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAccruedInterest(): AccruedInterest {
  return {
    date: undefined,
    value: undefined,
    valuePercent: undefined,
    nominal: undefined,
  };
}

export const AccruedInterest = {
  encode(
    message: AccruedInterest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.value !== undefined) {
      Quotation.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    if (message.valuePercent !== undefined) {
      Quotation.encode(message.valuePercent, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccruedInterest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccruedInterest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.value = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.valuePercent = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccruedInterest {
    return {
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      value: isSet(object.value) ? Quotation.fromJSON(object.value) : undefined,
      valuePercent: isSet(object.valuePercent)
        ? Quotation.fromJSON(object.valuePercent)
        : undefined,
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
    };
  },

  toJSON(message: AccruedInterest): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.value !== undefined &&
      (obj.value = message.value ? Quotation.toJSON(message.value) : undefined);
    message.valuePercent !== undefined &&
      (obj.valuePercent = message.valuePercent
        ? Quotation.toJSON(message.valuePercent)
        : undefined);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AccruedInterest>): AccruedInterest {
    const message = createBaseAccruedInterest();
    message.date = object.date ?? undefined;
    message.value =
      object.value !== undefined && object.value !== null
        ? Quotation.fromPartial(object.value)
        : undefined;
    message.valuePercent =
      object.valuePercent !== undefined && object.valuePercent !== null
        ? Quotation.fromPartial(object.valuePercent)
        : undefined;
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    return message;
  },
};

function createBaseGetFuturesMarginRequest(): GetFuturesMarginRequest {
  return { figi: "" };
}

export const GetFuturesMarginRequest = {
  encode(
    message: GetFuturesMarginRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFuturesMarginRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFuturesMarginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFuturesMarginRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
    };
  },

  toJSON(message: GetFuturesMarginRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetFuturesMarginRequest>
  ): GetFuturesMarginRequest {
    const message = createBaseGetFuturesMarginRequest();
    message.figi = object.figi ?? "";
    return message;
  },
};

function createBaseGetFuturesMarginResponse(): GetFuturesMarginResponse {
  return {
    initialMarginOnBuy: undefined,
    initialMarginOnSell: undefined,
    minPriceIncrement: undefined,
    minPriceIncrementAmount: undefined,
  };
}

export const GetFuturesMarginResponse = {
  encode(
    message: GetFuturesMarginResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.initialMarginOnBuy !== undefined) {
      MoneyValue.encode(
        message.initialMarginOnBuy,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.initialMarginOnSell !== undefined) {
      MoneyValue.encode(
        message.initialMarginOnSell,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.minPriceIncrementAmount !== undefined) {
      Quotation.encode(
        message.minPriceIncrementAmount,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFuturesMarginResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFuturesMarginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.initialMarginOnBuy = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.initialMarginOnSell = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.minPriceIncrementAmount = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFuturesMarginResponse {
    return {
      initialMarginOnBuy: isSet(object.initialMarginOnBuy)
        ? MoneyValue.fromJSON(object.initialMarginOnBuy)
        : undefined,
      initialMarginOnSell: isSet(object.initialMarginOnSell)
        ? MoneyValue.fromJSON(object.initialMarginOnSell)
        : undefined,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      minPriceIncrementAmount: isSet(object.minPriceIncrementAmount)
        ? Quotation.fromJSON(object.minPriceIncrementAmount)
        : undefined,
    };
  },

  toJSON(message: GetFuturesMarginResponse): unknown {
    const obj: any = {};
    message.initialMarginOnBuy !== undefined &&
      (obj.initialMarginOnBuy = message.initialMarginOnBuy
        ? MoneyValue.toJSON(message.initialMarginOnBuy)
        : undefined);
    message.initialMarginOnSell !== undefined &&
      (obj.initialMarginOnSell = message.initialMarginOnSell
        ? MoneyValue.toJSON(message.initialMarginOnSell)
        : undefined);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.minPriceIncrementAmount !== undefined &&
      (obj.minPriceIncrementAmount = message.minPriceIncrementAmount
        ? Quotation.toJSON(message.minPriceIncrementAmount)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<GetFuturesMarginResponse>
  ): GetFuturesMarginResponse {
    const message = createBaseGetFuturesMarginResponse();
    message.initialMarginOnBuy =
      object.initialMarginOnBuy !== undefined &&
      object.initialMarginOnBuy !== null
        ? MoneyValue.fromPartial(object.initialMarginOnBuy)
        : undefined;
    message.initialMarginOnSell =
      object.initialMarginOnSell !== undefined &&
      object.initialMarginOnSell !== null
        ? MoneyValue.fromPartial(object.initialMarginOnSell)
        : undefined;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.minPriceIncrementAmount =
      object.minPriceIncrementAmount !== undefined &&
      object.minPriceIncrementAmount !== null
        ? Quotation.fromPartial(object.minPriceIncrementAmount)
        : undefined;
    return message;
  },
};

function createBaseInstrumentResponse(): InstrumentResponse {
  return { instrument: undefined };
}

export const InstrumentResponse = {
  encode(
    message: InstrumentResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.instrument !== undefined) {
      Instrument.encode(message.instrument, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instrument = Instrument.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentResponse {
    return {
      instrument: isSet(object.instrument)
        ? Instrument.fromJSON(object.instrument)
        : undefined,
    };
  },

  toJSON(message: InstrumentResponse): unknown {
    const obj: any = {};
    message.instrument !== undefined &&
      (obj.instrument = message.instrument
        ? Instrument.toJSON(message.instrument)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<InstrumentResponse>): InstrumentResponse {
    const message = createBaseInstrumentResponse();
    message.instrument =
      object.instrument !== undefined && object.instrument !== null
        ? Instrument.fromPartial(object.instrument)
        : undefined;
    return message;
  },
};

function createBaseInstrument(): Instrument {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    lot: 0,
    currency: "",
    klong: undefined,
    kshort: undefined,
    dlong: undefined,
    dshort: undefined,
    dlongMin: undefined,
    dshortMin: undefined,
    shortEnabledFlag: false,
    name: "",
    exchange: "",
    countryOfRisk: "",
    countryOfRiskName: "",
    instrumentType: "",
    tradingStatus: 0,
    otcFlag: false,
    buyAvailableFlag: false,
    sellAvailableFlag: false,
    minPriceIncrement: undefined,
    apiTradeAvailableFlag: false,
    uid: "",
    realExchange: 0,
  };
}

export const Instrument = {
  encode(
    message: Instrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.lot !== 0) {
      writer.uint32(40).int32(message.lot);
    }
    if (message.currency !== "") {
      writer.uint32(50).string(message.currency);
    }
    if (message.klong !== undefined) {
      Quotation.encode(message.klong, writer.uint32(58).fork()).ldelim();
    }
    if (message.kshort !== undefined) {
      Quotation.encode(message.kshort, writer.uint32(66).fork()).ldelim();
    }
    if (message.dlong !== undefined) {
      Quotation.encode(message.dlong, writer.uint32(74).fork()).ldelim();
    }
    if (message.dshort !== undefined) {
      Quotation.encode(message.dshort, writer.uint32(82).fork()).ldelim();
    }
    if (message.dlongMin !== undefined) {
      Quotation.encode(message.dlongMin, writer.uint32(90).fork()).ldelim();
    }
    if (message.dshortMin !== undefined) {
      Quotation.encode(message.dshortMin, writer.uint32(98).fork()).ldelim();
    }
    if (message.shortEnabledFlag === true) {
      writer.uint32(104).bool(message.shortEnabledFlag);
    }
    if (message.name !== "") {
      writer.uint32(114).string(message.name);
    }
    if (message.exchange !== "") {
      writer.uint32(122).string(message.exchange);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(130).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(138).string(message.countryOfRiskName);
    }
    if (message.instrumentType !== "") {
      writer.uint32(146).string(message.instrumentType);
    }
    if (message.tradingStatus !== 0) {
      writer.uint32(152).int32(message.tradingStatus);
    }
    if (message.otcFlag === true) {
      writer.uint32(160).bool(message.otcFlag);
    }
    if (message.buyAvailableFlag === true) {
      writer.uint32(168).bool(message.buyAvailableFlag);
    }
    if (message.sellAvailableFlag === true) {
      writer.uint32(176).bool(message.sellAvailableFlag);
    }
    if (message.minPriceIncrement !== undefined) {
      Quotation.encode(
        message.minPriceIncrement,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(192).bool(message.apiTradeAvailableFlag);
    }
    if (message.uid !== "") {
      writer.uint32(202).string(message.uid);
    }
    if (message.realExchange !== 0) {
      writer.uint32(208).int32(message.realExchange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.lot = reader.int32();
          break;
        case 6:
          message.currency = reader.string();
          break;
        case 7:
          message.klong = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.kshort = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.dlong = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.dshort = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dlongMin = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.dshortMin = Quotation.decode(reader, reader.uint32());
          break;
        case 13:
          message.shortEnabledFlag = reader.bool();
          break;
        case 14:
          message.name = reader.string();
          break;
        case 15:
          message.exchange = reader.string();
          break;
        case 16:
          message.countryOfRisk = reader.string();
          break;
        case 17:
          message.countryOfRiskName = reader.string();
          break;
        case 18:
          message.instrumentType = reader.string();
          break;
        case 19:
          message.tradingStatus = reader.int32() as any;
          break;
        case 20:
          message.otcFlag = reader.bool();
          break;
        case 21:
          message.buyAvailableFlag = reader.bool();
          break;
        case 22:
          message.sellAvailableFlag = reader.bool();
          break;
        case 23:
          message.minPriceIncrement = Quotation.decode(reader, reader.uint32());
          break;
        case 24:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        case 25:
          message.uid = reader.string();
          break;
        case 26:
          message.realExchange = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Instrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      lot: isSet(object.lot) ? Number(object.lot) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      klong: isSet(object.klong) ? Quotation.fromJSON(object.klong) : undefined,
      kshort: isSet(object.kshort)
        ? Quotation.fromJSON(object.kshort)
        : undefined,
      dlong: isSet(object.dlong) ? Quotation.fromJSON(object.dlong) : undefined,
      dshort: isSet(object.dshort)
        ? Quotation.fromJSON(object.dshort)
        : undefined,
      dlongMin: isSet(object.dlongMin)
        ? Quotation.fromJSON(object.dlongMin)
        : undefined,
      dshortMin: isSet(object.dshortMin)
        ? Quotation.fromJSON(object.dshortMin)
        : undefined,
      shortEnabledFlag: isSet(object.shortEnabledFlag)
        ? Boolean(object.shortEnabledFlag)
        : false,
      name: isSet(object.name) ? String(object.name) : "",
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      tradingStatus: isSet(object.tradingStatus)
        ? securityTradingStatusFromJSON(object.tradingStatus)
        : 0,
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      buyAvailableFlag: isSet(object.buyAvailableFlag)
        ? Boolean(object.buyAvailableFlag)
        : false,
      sellAvailableFlag: isSet(object.sellAvailableFlag)
        ? Boolean(object.sellAvailableFlag)
        : false,
      minPriceIncrement: isSet(object.minPriceIncrement)
        ? Quotation.fromJSON(object.minPriceIncrement)
        : undefined,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
      uid: isSet(object.uid) ? String(object.uid) : "",
      realExchange: isSet(object.realExchange)
        ? realExchangeFromJSON(object.realExchange)
        : 0,
    };
  },

  toJSON(message: Instrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.lot !== undefined && (obj.lot = Math.round(message.lot));
    message.currency !== undefined && (obj.currency = message.currency);
    message.klong !== undefined &&
      (obj.klong = message.klong ? Quotation.toJSON(message.klong) : undefined);
    message.kshort !== undefined &&
      (obj.kshort = message.kshort
        ? Quotation.toJSON(message.kshort)
        : undefined);
    message.dlong !== undefined &&
      (obj.dlong = message.dlong ? Quotation.toJSON(message.dlong) : undefined);
    message.dshort !== undefined &&
      (obj.dshort = message.dshort
        ? Quotation.toJSON(message.dshort)
        : undefined);
    message.dlongMin !== undefined &&
      (obj.dlongMin = message.dlongMin
        ? Quotation.toJSON(message.dlongMin)
        : undefined);
    message.dshortMin !== undefined &&
      (obj.dshortMin = message.dshortMin
        ? Quotation.toJSON(message.dshortMin)
        : undefined);
    message.shortEnabledFlag !== undefined &&
      (obj.shortEnabledFlag = message.shortEnabledFlag);
    message.name !== undefined && (obj.name = message.name);
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.tradingStatus !== undefined &&
      (obj.tradingStatus = securityTradingStatusToJSON(message.tradingStatus));
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.buyAvailableFlag !== undefined &&
      (obj.buyAvailableFlag = message.buyAvailableFlag);
    message.sellAvailableFlag !== undefined &&
      (obj.sellAvailableFlag = message.sellAvailableFlag);
    message.minPriceIncrement !== undefined &&
      (obj.minPriceIncrement = message.minPriceIncrement
        ? Quotation.toJSON(message.minPriceIncrement)
        : undefined);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    message.uid !== undefined && (obj.uid = message.uid);
    message.realExchange !== undefined &&
      (obj.realExchange = realExchangeToJSON(message.realExchange));
    return obj;
  },

  fromPartial(object: DeepPartial<Instrument>): Instrument {
    const message = createBaseInstrument();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.lot = object.lot ?? 0;
    message.currency = object.currency ?? "";
    message.klong =
      object.klong !== undefined && object.klong !== null
        ? Quotation.fromPartial(object.klong)
        : undefined;
    message.kshort =
      object.kshort !== undefined && object.kshort !== null
        ? Quotation.fromPartial(object.kshort)
        : undefined;
    message.dlong =
      object.dlong !== undefined && object.dlong !== null
        ? Quotation.fromPartial(object.dlong)
        : undefined;
    message.dshort =
      object.dshort !== undefined && object.dshort !== null
        ? Quotation.fromPartial(object.dshort)
        : undefined;
    message.dlongMin =
      object.dlongMin !== undefined && object.dlongMin !== null
        ? Quotation.fromPartial(object.dlongMin)
        : undefined;
    message.dshortMin =
      object.dshortMin !== undefined && object.dshortMin !== null
        ? Quotation.fromPartial(object.dshortMin)
        : undefined;
    message.shortEnabledFlag = object.shortEnabledFlag ?? false;
    message.name = object.name ?? "";
    message.exchange = object.exchange ?? "";
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    message.instrumentType = object.instrumentType ?? "";
    message.tradingStatus = object.tradingStatus ?? 0;
    message.otcFlag = object.otcFlag ?? false;
    message.buyAvailableFlag = object.buyAvailableFlag ?? false;
    message.sellAvailableFlag = object.sellAvailableFlag ?? false;
    message.minPriceIncrement =
      object.minPriceIncrement !== undefined &&
      object.minPriceIncrement !== null
        ? Quotation.fromPartial(object.minPriceIncrement)
        : undefined;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    message.uid = object.uid ?? "";
    message.realExchange = object.realExchange ?? 0;
    return message;
  },
};

function createBaseGetDividendsRequest(): GetDividendsRequest {
  return { figi: "", from: undefined, to: undefined };
}

export const GetDividendsRequest = {
  encode(
    message: GetDividendsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDividendsRequest {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GetDividendsRequest): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<GetDividendsRequest>): GetDividendsRequest {
    const message = createBaseGetDividendsRequest();
    message.figi = object.figi ?? "";
    message.from = object.from ?? undefined;
    message.to = object.to ?? undefined;
    return message;
  },
};

function createBaseGetDividendsResponse(): GetDividendsResponse {
  return { dividends: [] };
}

export const GetDividendsResponse = {
  encode(
    message: GetDividendsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dividends) {
      Dividend.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDividendsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dividends.push(Dividend.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDividendsResponse {
    return {
      dividends: Array.isArray(object?.dividends)
        ? object.dividends.map((e: any) => Dividend.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetDividendsResponse): unknown {
    const obj: any = {};
    if (message.dividends) {
      obj.dividends = message.dividends.map((e) =>
        e ? Dividend.toJSON(e) : undefined
      );
    } else {
      obj.dividends = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetDividendsResponse>): GetDividendsResponse {
    const message = createBaseGetDividendsResponse();
    message.dividends =
      object.dividends?.map((e) => Dividend.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDividend(): Dividend {
  return {
    dividendNet: undefined,
    paymentDate: undefined,
    declaredDate: undefined,
    lastBuyDate: undefined,
    dividendType: "",
    recordDate: undefined,
    regularity: "",
    closePrice: undefined,
    yieldValue: undefined,
    createdAt: undefined,
  };
}

export const Dividend = {
  encode(
    message: Dividend,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.dividendNet !== undefined) {
      MoneyValue.encode(message.dividendNet, writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.paymentDate),
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.declaredDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.declaredDate),
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.lastBuyDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastBuyDate),
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.dividendType !== "") {
      writer.uint32(42).string(message.dividendType);
    }
    if (message.recordDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.recordDate),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.regularity !== "") {
      writer.uint32(58).string(message.regularity);
    }
    if (message.closePrice !== undefined) {
      MoneyValue.encode(message.closePrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.yieldValue !== undefined) {
      Quotation.encode(message.yieldValue, writer.uint32(74).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.createdAt),
        writer.uint32(82).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Dividend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDividend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dividendNet = MoneyValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.paymentDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.declaredDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.lastBuyDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.dividendType = reader.string();
          break;
        case 6:
          message.recordDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.regularity = reader.string();
          break;
        case 8:
          message.closePrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 9:
          message.yieldValue = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.createdAt = fromTimestamp(
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

  fromJSON(object: any): Dividend {
    return {
      dividendNet: isSet(object.dividendNet)
        ? MoneyValue.fromJSON(object.dividendNet)
        : undefined,
      paymentDate: isSet(object.paymentDate)
        ? fromJsonTimestamp(object.paymentDate)
        : undefined,
      declaredDate: isSet(object.declaredDate)
        ? fromJsonTimestamp(object.declaredDate)
        : undefined,
      lastBuyDate: isSet(object.lastBuyDate)
        ? fromJsonTimestamp(object.lastBuyDate)
        : undefined,
      dividendType: isSet(object.dividendType)
        ? String(object.dividendType)
        : "",
      recordDate: isSet(object.recordDate)
        ? fromJsonTimestamp(object.recordDate)
        : undefined,
      regularity: isSet(object.regularity) ? String(object.regularity) : "",
      closePrice: isSet(object.closePrice)
        ? MoneyValue.fromJSON(object.closePrice)
        : undefined,
      yieldValue: isSet(object.yieldValue)
        ? Quotation.fromJSON(object.yieldValue)
        : undefined,
      createdAt: isSet(object.createdAt)
        ? fromJsonTimestamp(object.createdAt)
        : undefined,
    };
  },

  toJSON(message: Dividend): unknown {
    const obj: any = {};
    message.dividendNet !== undefined &&
      (obj.dividendNet = message.dividendNet
        ? MoneyValue.toJSON(message.dividendNet)
        : undefined);
    message.paymentDate !== undefined &&
      (obj.paymentDate = message.paymentDate.toISOString());
    message.declaredDate !== undefined &&
      (obj.declaredDate = message.declaredDate.toISOString());
    message.lastBuyDate !== undefined &&
      (obj.lastBuyDate = message.lastBuyDate.toISOString());
    message.dividendType !== undefined &&
      (obj.dividendType = message.dividendType);
    message.recordDate !== undefined &&
      (obj.recordDate = message.recordDate.toISOString());
    message.regularity !== undefined && (obj.regularity = message.regularity);
    message.closePrice !== undefined &&
      (obj.closePrice = message.closePrice
        ? MoneyValue.toJSON(message.closePrice)
        : undefined);
    message.yieldValue !== undefined &&
      (obj.yieldValue = message.yieldValue
        ? Quotation.toJSON(message.yieldValue)
        : undefined);
    message.createdAt !== undefined &&
      (obj.createdAt = message.createdAt.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<Dividend>): Dividend {
    const message = createBaseDividend();
    message.dividendNet =
      object.dividendNet !== undefined && object.dividendNet !== null
        ? MoneyValue.fromPartial(object.dividendNet)
        : undefined;
    message.paymentDate = object.paymentDate ?? undefined;
    message.declaredDate = object.declaredDate ?? undefined;
    message.lastBuyDate = object.lastBuyDate ?? undefined;
    message.dividendType = object.dividendType ?? "";
    message.recordDate = object.recordDate ?? undefined;
    message.regularity = object.regularity ?? "";
    message.closePrice =
      object.closePrice !== undefined && object.closePrice !== null
        ? MoneyValue.fromPartial(object.closePrice)
        : undefined;
    message.yieldValue =
      object.yieldValue !== undefined && object.yieldValue !== null
        ? Quotation.fromPartial(object.yieldValue)
        : undefined;
    message.createdAt = object.createdAt ?? undefined;
    return message;
  },
};

function createBaseAssetRequest(): AssetRequest {
  return { id: "" };
}

export const AssetRequest = {
  encode(
    message: AssetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: AssetRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetRequest>): AssetRequest {
    const message = createBaseAssetRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseAssetResponse(): AssetResponse {
  return { asset: undefined };
}

export const AssetResponse = {
  encode(
    message: AssetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.asset !== undefined) {
      AssetFull.encode(message.asset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.asset = AssetFull.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetResponse {
    return {
      asset: isSet(object.asset) ? AssetFull.fromJSON(object.asset) : undefined,
    };
  },

  toJSON(message: AssetResponse): unknown {
    const obj: any = {};
    message.asset !== undefined &&
      (obj.asset = message.asset ? AssetFull.toJSON(message.asset) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetResponse>): AssetResponse {
    const message = createBaseAssetResponse();
    message.asset =
      object.asset !== undefined && object.asset !== null
        ? AssetFull.fromPartial(object.asset)
        : undefined;
    return message;
  },
};

function createBaseAssetsRequest(): AssetsRequest {
  return {};
}

export const AssetsRequest = {
  encode(
    _: AssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): AssetsRequest {
    return {};
  },

  toJSON(_: AssetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AssetsRequest>): AssetsRequest {
    const message = createBaseAssetsRequest();
    return message;
  },
};

function createBaseAssetsResponse(): AssetsResponse {
  return { assets: [] };
}

export const AssetsResponse = {
  encode(
    message: AssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.assets) {
      Asset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assets.push(Asset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetsResponse {
    return {
      assets: Array.isArray(object?.assets)
        ? object.assets.map((e: any) => Asset.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetsResponse): unknown {
    const obj: any = {};
    if (message.assets) {
      obj.assets = message.assets.map((e) => (e ? Asset.toJSON(e) : undefined));
    } else {
      obj.assets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AssetsResponse>): AssetsResponse {
    const message = createBaseAssetsResponse();
    message.assets = object.assets?.map((e) => Asset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetFull(): AssetFull {
  return {
    uid: "",
    type: 0,
    name: "",
    nameBrief: "",
    description: "",
    deletedAt: undefined,
    requiredTests: [],
    currency: undefined,
    security: undefined,
    gosRegCode: "",
    cfi: "",
    codeNsd: "",
    status: "",
    brand: undefined,
    updatedAt: undefined,
    brCode: "",
    brCodeName: "",
    instruments: [],
  };
}

export const AssetFull = {
  encode(
    message: AssetFull,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.nameBrief !== "") {
      writer.uint32(34).string(message.nameBrief);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.deletedAt),
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.requiredTests) {
      writer.uint32(58).string(v!);
    }
    if (message.currency !== undefined) {
      AssetCurrency.encode(message.currency, writer.uint32(66).fork()).ldelim();
    }
    if (message.security !== undefined) {
      AssetSecurity.encode(message.security, writer.uint32(74).fork()).ldelim();
    }
    if (message.gosRegCode !== "") {
      writer.uint32(82).string(message.gosRegCode);
    }
    if (message.cfi !== "") {
      writer.uint32(90).string(message.cfi);
    }
    if (message.codeNsd !== "") {
      writer.uint32(98).string(message.codeNsd);
    }
    if (message.status !== "") {
      writer.uint32(106).string(message.status);
    }
    if (message.brand !== undefined) {
      Brand.encode(message.brand, writer.uint32(114).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(
        toTimestamp(message.updatedAt),
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.brCode !== "") {
      writer.uint32(130).string(message.brCode);
    }
    if (message.brCodeName !== "") {
      writer.uint32(138).string(message.brCodeName);
    }
    for (const v of message.instruments) {
      AssetInstrument.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetFull {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetFull();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.nameBrief = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.deletedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.requiredTests.push(reader.string());
          break;
        case 8:
          message.currency = AssetCurrency.decode(reader, reader.uint32());
          break;
        case 9:
          message.security = AssetSecurity.decode(reader, reader.uint32());
          break;
        case 10:
          message.gosRegCode = reader.string();
          break;
        case 11:
          message.cfi = reader.string();
          break;
        case 12:
          message.codeNsd = reader.string();
          break;
        case 13:
          message.status = reader.string();
          break;
        case 14:
          message.brand = Brand.decode(reader, reader.uint32());
          break;
        case 15:
          message.updatedAt = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 16:
          message.brCode = reader.string();
          break;
        case 17:
          message.brCodeName = reader.string();
          break;
        case 18:
          message.instruments.push(
            AssetInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetFull {
    return {
      uid: isSet(object.uid) ? String(object.uid) : "",
      type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      nameBrief: isSet(object.nameBrief) ? String(object.nameBrief) : "",
      description: isSet(object.description) ? String(object.description) : "",
      deletedAt: isSet(object.deletedAt)
        ? fromJsonTimestamp(object.deletedAt)
        : undefined,
      requiredTests: Array.isArray(object?.requiredTests)
        ? object.requiredTests.map((e: any) => String(e))
        : [],
      currency: isSet(object.currency)
        ? AssetCurrency.fromJSON(object.currency)
        : undefined,
      security: isSet(object.security)
        ? AssetSecurity.fromJSON(object.security)
        : undefined,
      gosRegCode: isSet(object.gosRegCode) ? String(object.gosRegCode) : "",
      cfi: isSet(object.cfi) ? String(object.cfi) : "",
      codeNsd: isSet(object.codeNsd) ? String(object.codeNsd) : "",
      status: isSet(object.status) ? String(object.status) : "",
      brand: isSet(object.brand) ? Brand.fromJSON(object.brand) : undefined,
      updatedAt: isSet(object.updatedAt)
        ? fromJsonTimestamp(object.updatedAt)
        : undefined,
      brCode: isSet(object.brCode) ? String(object.brCode) : "",
      brCodeName: isSet(object.brCodeName) ? String(object.brCodeName) : "",
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => AssetInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetFull): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.type !== undefined && (obj.type = assetTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    message.nameBrief !== undefined && (obj.nameBrief = message.nameBrief);
    message.description !== undefined &&
      (obj.description = message.description);
    message.deletedAt !== undefined &&
      (obj.deletedAt = message.deletedAt.toISOString());
    if (message.requiredTests) {
      obj.requiredTests = message.requiredTests.map((e) => e);
    } else {
      obj.requiredTests = [];
    }
    message.currency !== undefined &&
      (obj.currency = message.currency
        ? AssetCurrency.toJSON(message.currency)
        : undefined);
    message.security !== undefined &&
      (obj.security = message.security
        ? AssetSecurity.toJSON(message.security)
        : undefined);
    message.gosRegCode !== undefined && (obj.gosRegCode = message.gosRegCode);
    message.cfi !== undefined && (obj.cfi = message.cfi);
    message.codeNsd !== undefined && (obj.codeNsd = message.codeNsd);
    message.status !== undefined && (obj.status = message.status);
    message.brand !== undefined &&
      (obj.brand = message.brand ? Brand.toJSON(message.brand) : undefined);
    message.updatedAt !== undefined &&
      (obj.updatedAt = message.updatedAt.toISOString());
    message.brCode !== undefined && (obj.brCode = message.brCode);
    message.brCodeName !== undefined && (obj.brCodeName = message.brCodeName);
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? AssetInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AssetFull>): AssetFull {
    const message = createBaseAssetFull();
    message.uid = object.uid ?? "";
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.nameBrief = object.nameBrief ?? "";
    message.description = object.description ?? "";
    message.deletedAt = object.deletedAt ?? undefined;
    message.requiredTests = object.requiredTests?.map((e) => e) || [];
    message.currency =
      object.currency !== undefined && object.currency !== null
        ? AssetCurrency.fromPartial(object.currency)
        : undefined;
    message.security =
      object.security !== undefined && object.security !== null
        ? AssetSecurity.fromPartial(object.security)
        : undefined;
    message.gosRegCode = object.gosRegCode ?? "";
    message.cfi = object.cfi ?? "";
    message.codeNsd = object.codeNsd ?? "";
    message.status = object.status ?? "";
    message.brand =
      object.brand !== undefined && object.brand !== null
        ? Brand.fromPartial(object.brand)
        : undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.brCode = object.brCode ?? "";
    message.brCodeName = object.brCodeName ?? "";
    message.instruments =
      object.instruments?.map((e) => AssetInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAsset(): Asset {
  return { uid: "", type: 0, name: "", instruments: [] };
}

export const Asset = {
  encode(message: Asset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    for (const v of message.instruments) {
      AssetInstrument.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Asset {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAsset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.instruments.push(
            AssetInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Asset {
    return {
      uid: isSet(object.uid) ? String(object.uid) : "",
      type: isSet(object.type) ? assetTypeFromJSON(object.type) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) => AssetInstrument.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Asset): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.type !== undefined && (obj.type = assetTypeToJSON(message.type));
    message.name !== undefined && (obj.name = message.name);
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? AssetInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Asset>): Asset {
    const message = createBaseAsset();
    message.uid = object.uid ?? "";
    message.type = object.type ?? 0;
    message.name = object.name ?? "";
    message.instruments =
      object.instruments?.map((e) => AssetInstrument.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAssetCurrency(): AssetCurrency {
  return { baseCurrency: "" };
}

export const AssetCurrency = {
  encode(
    message: AssetCurrency,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseCurrency !== "") {
      writer.uint32(10).string(message.baseCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetCurrency {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetCurrency();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseCurrency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetCurrency {
    return {
      baseCurrency: isSet(object.baseCurrency)
        ? String(object.baseCurrency)
        : "",
    };
  },

  toJSON(message: AssetCurrency): unknown {
    const obj: any = {};
    message.baseCurrency !== undefined &&
      (obj.baseCurrency = message.baseCurrency);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetCurrency>): AssetCurrency {
    const message = createBaseAssetCurrency();
    message.baseCurrency = object.baseCurrency ?? "";
    return message;
  },
};

function createBaseAssetSecurity(): AssetSecurity {
  return {
    isin: "",
    type: "",
    share: undefined,
    bond: undefined,
    sp: undefined,
    etf: undefined,
    clearingCertificate: undefined,
  };
}

export const AssetSecurity = {
  encode(
    message: AssetSecurity,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isin !== "") {
      writer.uint32(10).string(message.isin);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.share !== undefined) {
      AssetShare.encode(message.share, writer.uint32(26).fork()).ldelim();
    }
    if (message.bond !== undefined) {
      AssetBond.encode(message.bond, writer.uint32(34).fork()).ldelim();
    }
    if (message.sp !== undefined) {
      AssetStructuredProduct.encode(
        message.sp,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.etf !== undefined) {
      AssetEtf.encode(message.etf, writer.uint32(50).fork()).ldelim();
    }
    if (message.clearingCertificate !== undefined) {
      AssetClearingCertificate.encode(
        message.clearingCertificate,
        writer.uint32(58).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetSecurity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetSecurity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isin = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.share = AssetShare.decode(reader, reader.uint32());
          break;
        case 4:
          message.bond = AssetBond.decode(reader, reader.uint32());
          break;
        case 5:
          message.sp = AssetStructuredProduct.decode(reader, reader.uint32());
          break;
        case 6:
          message.etf = AssetEtf.decode(reader, reader.uint32());
          break;
        case 7:
          message.clearingCertificate = AssetClearingCertificate.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetSecurity {
    return {
      isin: isSet(object.isin) ? String(object.isin) : "",
      type: isSet(object.type) ? String(object.type) : "",
      share: isSet(object.share)
        ? AssetShare.fromJSON(object.share)
        : undefined,
      bond: isSet(object.bond) ? AssetBond.fromJSON(object.bond) : undefined,
      sp: isSet(object.sp)
        ? AssetStructuredProduct.fromJSON(object.sp)
        : undefined,
      etf: isSet(object.etf) ? AssetEtf.fromJSON(object.etf) : undefined,
      clearingCertificate: isSet(object.clearingCertificate)
        ? AssetClearingCertificate.fromJSON(object.clearingCertificate)
        : undefined,
    };
  },

  toJSON(message: AssetSecurity): unknown {
    const obj: any = {};
    message.isin !== undefined && (obj.isin = message.isin);
    message.type !== undefined && (obj.type = message.type);
    message.share !== undefined &&
      (obj.share = message.share
        ? AssetShare.toJSON(message.share)
        : undefined);
    message.bond !== undefined &&
      (obj.bond = message.bond ? AssetBond.toJSON(message.bond) : undefined);
    message.sp !== undefined &&
      (obj.sp = message.sp
        ? AssetStructuredProduct.toJSON(message.sp)
        : undefined);
    message.etf !== undefined &&
      (obj.etf = message.etf ? AssetEtf.toJSON(message.etf) : undefined);
    message.clearingCertificate !== undefined &&
      (obj.clearingCertificate = message.clearingCertificate
        ? AssetClearingCertificate.toJSON(message.clearingCertificate)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetSecurity>): AssetSecurity {
    const message = createBaseAssetSecurity();
    message.isin = object.isin ?? "";
    message.type = object.type ?? "";
    message.share =
      object.share !== undefined && object.share !== null
        ? AssetShare.fromPartial(object.share)
        : undefined;
    message.bond =
      object.bond !== undefined && object.bond !== null
        ? AssetBond.fromPartial(object.bond)
        : undefined;
    message.sp =
      object.sp !== undefined && object.sp !== null
        ? AssetStructuredProduct.fromPartial(object.sp)
        : undefined;
    message.etf =
      object.etf !== undefined && object.etf !== null
        ? AssetEtf.fromPartial(object.etf)
        : undefined;
    message.clearingCertificate =
      object.clearingCertificate !== undefined &&
      object.clearingCertificate !== null
        ? AssetClearingCertificate.fromPartial(object.clearingCertificate)
        : undefined;
    return message;
  },
};

function createBaseAssetShare(): AssetShare {
  return {
    type: 0,
    issueSize: undefined,
    nominal: undefined,
    nominalCurrency: "",
    primaryIndex: "",
    dividendRate: undefined,
    preferredShareType: "",
    ipoDate: undefined,
    registryDate: undefined,
    divYieldFlag: false,
    issueKind: "",
    placementDate: undefined,
    represIsin: "",
    issueSizePlan: undefined,
    totalFloat: undefined,
  };
}

export const AssetShare = {
  encode(
    message: AssetShare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(18).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(34).string(message.nominalCurrency);
    }
    if (message.primaryIndex !== "") {
      writer.uint32(42).string(message.primaryIndex);
    }
    if (message.dividendRate !== undefined) {
      Quotation.encode(message.dividendRate, writer.uint32(50).fork()).ldelim();
    }
    if (message.preferredShareType !== "") {
      writer.uint32(58).string(message.preferredShareType);
    }
    if (message.ipoDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.ipoDate),
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.registryDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.registryDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.divYieldFlag === true) {
      writer.uint32(80).bool(message.divYieldFlag);
    }
    if (message.issueKind !== "") {
      writer.uint32(90).string(message.issueKind);
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.placementDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.represIsin !== "") {
      writer.uint32(106).string(message.represIsin);
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(
        message.issueSizePlan,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.totalFloat !== undefined) {
      Quotation.encode(message.totalFloat, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetShare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetShare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.issueSize = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.nominalCurrency = reader.string();
          break;
        case 5:
          message.primaryIndex = reader.string();
          break;
        case 6:
          message.dividendRate = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.preferredShareType = reader.string();
          break;
        case 8:
          message.ipoDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.registryDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.divYieldFlag = reader.bool();
          break;
        case 11:
          message.issueKind = reader.string();
          break;
        case 12:
          message.placementDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.represIsin = reader.string();
          break;
        case 14:
          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          break;
        case 15:
          message.totalFloat = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetShare {
    return {
      type: isSet(object.type) ? shareTypeFromJSON(object.type) : 0,
      issueSize: isSet(object.issueSize)
        ? Quotation.fromJSON(object.issueSize)
        : undefined,
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
      nominalCurrency: isSet(object.nominalCurrency)
        ? String(object.nominalCurrency)
        : "",
      primaryIndex: isSet(object.primaryIndex)
        ? String(object.primaryIndex)
        : "",
      dividendRate: isSet(object.dividendRate)
        ? Quotation.fromJSON(object.dividendRate)
        : undefined,
      preferredShareType: isSet(object.preferredShareType)
        ? String(object.preferredShareType)
        : "",
      ipoDate: isSet(object.ipoDate)
        ? fromJsonTimestamp(object.ipoDate)
        : undefined,
      registryDate: isSet(object.registryDate)
        ? fromJsonTimestamp(object.registryDate)
        : undefined,
      divYieldFlag: isSet(object.divYieldFlag)
        ? Boolean(object.divYieldFlag)
        : false,
      issueKind: isSet(object.issueKind) ? String(object.issueKind) : "",
      placementDate: isSet(object.placementDate)
        ? fromJsonTimestamp(object.placementDate)
        : undefined,
      represIsin: isSet(object.represIsin) ? String(object.represIsin) : "",
      issueSizePlan: isSet(object.issueSizePlan)
        ? Quotation.fromJSON(object.issueSizePlan)
        : undefined,
      totalFloat: isSet(object.totalFloat)
        ? Quotation.fromJSON(object.totalFloat)
        : undefined,
    };
  },

  toJSON(message: AssetShare): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = shareTypeToJSON(message.type));
    message.issueSize !== undefined &&
      (obj.issueSize = message.issueSize
        ? Quotation.toJSON(message.issueSize)
        : undefined);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    message.nominalCurrency !== undefined &&
      (obj.nominalCurrency = message.nominalCurrency);
    message.primaryIndex !== undefined &&
      (obj.primaryIndex = message.primaryIndex);
    message.dividendRate !== undefined &&
      (obj.dividendRate = message.dividendRate
        ? Quotation.toJSON(message.dividendRate)
        : undefined);
    message.preferredShareType !== undefined &&
      (obj.preferredShareType = message.preferredShareType);
    message.ipoDate !== undefined &&
      (obj.ipoDate = message.ipoDate.toISOString());
    message.registryDate !== undefined &&
      (obj.registryDate = message.registryDate.toISOString());
    message.divYieldFlag !== undefined &&
      (obj.divYieldFlag = message.divYieldFlag);
    message.issueKind !== undefined && (obj.issueKind = message.issueKind);
    message.placementDate !== undefined &&
      (obj.placementDate = message.placementDate.toISOString());
    message.represIsin !== undefined && (obj.represIsin = message.represIsin);
    message.issueSizePlan !== undefined &&
      (obj.issueSizePlan = message.issueSizePlan
        ? Quotation.toJSON(message.issueSizePlan)
        : undefined);
    message.totalFloat !== undefined &&
      (obj.totalFloat = message.totalFloat
        ? Quotation.toJSON(message.totalFloat)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetShare>): AssetShare {
    const message = createBaseAssetShare();
    message.type = object.type ?? 0;
    message.issueSize =
      object.issueSize !== undefined && object.issueSize !== null
        ? Quotation.fromPartial(object.issueSize)
        : undefined;
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    message.nominalCurrency = object.nominalCurrency ?? "";
    message.primaryIndex = object.primaryIndex ?? "";
    message.dividendRate =
      object.dividendRate !== undefined && object.dividendRate !== null
        ? Quotation.fromPartial(object.dividendRate)
        : undefined;
    message.preferredShareType = object.preferredShareType ?? "";
    message.ipoDate = object.ipoDate ?? undefined;
    message.registryDate = object.registryDate ?? undefined;
    message.divYieldFlag = object.divYieldFlag ?? false;
    message.issueKind = object.issueKind ?? "";
    message.placementDate = object.placementDate ?? undefined;
    message.represIsin = object.represIsin ?? "";
    message.issueSizePlan =
      object.issueSizePlan !== undefined && object.issueSizePlan !== null
        ? Quotation.fromPartial(object.issueSizePlan)
        : undefined;
    message.totalFloat =
      object.totalFloat !== undefined && object.totalFloat !== null
        ? Quotation.fromPartial(object.totalFloat)
        : undefined;
    return message;
  },
};

function createBaseAssetBond(): AssetBond {
  return {
    currentNominal: undefined,
    borrowName: "",
    issueSize: undefined,
    nominal: undefined,
    nominalCurrency: "",
    issueKind: "",
    interestKind: "",
    couponQuantityPerYear: 0,
    indexedNominalFlag: false,
    subordinatedFlag: false,
    collateralFlag: false,
    taxFreeFlag: false,
    amortizationFlag: false,
    floatingCouponFlag: false,
    perpetualFlag: false,
    maturityDate: undefined,
    returnCondition: "",
    stateRegDate: undefined,
    placementDate: undefined,
    placementPrice: undefined,
    issueSizePlan: undefined,
  };
}

export const AssetBond = {
  encode(
    message: AssetBond,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentNominal !== undefined) {
      Quotation.encode(
        message.currentNominal,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.borrowName !== "") {
      writer.uint32(18).string(message.borrowName);
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(26).fork()).ldelim();
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(34).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(42).string(message.nominalCurrency);
    }
    if (message.issueKind !== "") {
      writer.uint32(50).string(message.issueKind);
    }
    if (message.interestKind !== "") {
      writer.uint32(58).string(message.interestKind);
    }
    if (message.couponQuantityPerYear !== 0) {
      writer.uint32(64).int32(message.couponQuantityPerYear);
    }
    if (message.indexedNominalFlag === true) {
      writer.uint32(72).bool(message.indexedNominalFlag);
    }
    if (message.subordinatedFlag === true) {
      writer.uint32(80).bool(message.subordinatedFlag);
    }
    if (message.collateralFlag === true) {
      writer.uint32(88).bool(message.collateralFlag);
    }
    if (message.taxFreeFlag === true) {
      writer.uint32(96).bool(message.taxFreeFlag);
    }
    if (message.amortizationFlag === true) {
      writer.uint32(104).bool(message.amortizationFlag);
    }
    if (message.floatingCouponFlag === true) {
      writer.uint32(112).bool(message.floatingCouponFlag);
    }
    if (message.perpetualFlag === true) {
      writer.uint32(120).bool(message.perpetualFlag);
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.maturityDate),
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.returnCondition !== "") {
      writer.uint32(138).string(message.returnCondition);
    }
    if (message.stateRegDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.stateRegDate),
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.placementDate),
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.placementPrice !== undefined) {
      Quotation.encode(
        message.placementPrice,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(
        message.issueSizePlan,
        writer.uint32(170).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetBond {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetBond();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentNominal = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.borrowName = reader.string();
          break;
        case 3:
          message.issueSize = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.nominalCurrency = reader.string();
          break;
        case 6:
          message.issueKind = reader.string();
          break;
        case 7:
          message.interestKind = reader.string();
          break;
        case 8:
          message.couponQuantityPerYear = reader.int32();
          break;
        case 9:
          message.indexedNominalFlag = reader.bool();
          break;
        case 10:
          message.subordinatedFlag = reader.bool();
          break;
        case 11:
          message.collateralFlag = reader.bool();
          break;
        case 12:
          message.taxFreeFlag = reader.bool();
          break;
        case 13:
          message.amortizationFlag = reader.bool();
          break;
        case 14:
          message.floatingCouponFlag = reader.bool();
          break;
        case 15:
          message.perpetualFlag = reader.bool();
          break;
        case 16:
          message.maturityDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 17:
          message.returnCondition = reader.string();
          break;
        case 18:
          message.stateRegDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 19:
          message.placementDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.placementPrice = Quotation.decode(reader, reader.uint32());
          break;
        case 21:
          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetBond {
    return {
      currentNominal: isSet(object.currentNominal)
        ? Quotation.fromJSON(object.currentNominal)
        : undefined,
      borrowName: isSet(object.borrowName) ? String(object.borrowName) : "",
      issueSize: isSet(object.issueSize)
        ? Quotation.fromJSON(object.issueSize)
        : undefined,
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
      nominalCurrency: isSet(object.nominalCurrency)
        ? String(object.nominalCurrency)
        : "",
      issueKind: isSet(object.issueKind) ? String(object.issueKind) : "",
      interestKind: isSet(object.interestKind)
        ? String(object.interestKind)
        : "",
      couponQuantityPerYear: isSet(object.couponQuantityPerYear)
        ? Number(object.couponQuantityPerYear)
        : 0,
      indexedNominalFlag: isSet(object.indexedNominalFlag)
        ? Boolean(object.indexedNominalFlag)
        : false,
      subordinatedFlag: isSet(object.subordinatedFlag)
        ? Boolean(object.subordinatedFlag)
        : false,
      collateralFlag: isSet(object.collateralFlag)
        ? Boolean(object.collateralFlag)
        : false,
      taxFreeFlag: isSet(object.taxFreeFlag)
        ? Boolean(object.taxFreeFlag)
        : false,
      amortizationFlag: isSet(object.amortizationFlag)
        ? Boolean(object.amortizationFlag)
        : false,
      floatingCouponFlag: isSet(object.floatingCouponFlag)
        ? Boolean(object.floatingCouponFlag)
        : false,
      perpetualFlag: isSet(object.perpetualFlag)
        ? Boolean(object.perpetualFlag)
        : false,
      maturityDate: isSet(object.maturityDate)
        ? fromJsonTimestamp(object.maturityDate)
        : undefined,
      returnCondition: isSet(object.returnCondition)
        ? String(object.returnCondition)
        : "",
      stateRegDate: isSet(object.stateRegDate)
        ? fromJsonTimestamp(object.stateRegDate)
        : undefined,
      placementDate: isSet(object.placementDate)
        ? fromJsonTimestamp(object.placementDate)
        : undefined,
      placementPrice: isSet(object.placementPrice)
        ? Quotation.fromJSON(object.placementPrice)
        : undefined,
      issueSizePlan: isSet(object.issueSizePlan)
        ? Quotation.fromJSON(object.issueSizePlan)
        : undefined,
    };
  },

  toJSON(message: AssetBond): unknown {
    const obj: any = {};
    message.currentNominal !== undefined &&
      (obj.currentNominal = message.currentNominal
        ? Quotation.toJSON(message.currentNominal)
        : undefined);
    message.borrowName !== undefined && (obj.borrowName = message.borrowName);
    message.issueSize !== undefined &&
      (obj.issueSize = message.issueSize
        ? Quotation.toJSON(message.issueSize)
        : undefined);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    message.nominalCurrency !== undefined &&
      (obj.nominalCurrency = message.nominalCurrency);
    message.issueKind !== undefined && (obj.issueKind = message.issueKind);
    message.interestKind !== undefined &&
      (obj.interestKind = message.interestKind);
    message.couponQuantityPerYear !== undefined &&
      (obj.couponQuantityPerYear = Math.round(message.couponQuantityPerYear));
    message.indexedNominalFlag !== undefined &&
      (obj.indexedNominalFlag = message.indexedNominalFlag);
    message.subordinatedFlag !== undefined &&
      (obj.subordinatedFlag = message.subordinatedFlag);
    message.collateralFlag !== undefined &&
      (obj.collateralFlag = message.collateralFlag);
    message.taxFreeFlag !== undefined &&
      (obj.taxFreeFlag = message.taxFreeFlag);
    message.amortizationFlag !== undefined &&
      (obj.amortizationFlag = message.amortizationFlag);
    message.floatingCouponFlag !== undefined &&
      (obj.floatingCouponFlag = message.floatingCouponFlag);
    message.perpetualFlag !== undefined &&
      (obj.perpetualFlag = message.perpetualFlag);
    message.maturityDate !== undefined &&
      (obj.maturityDate = message.maturityDate.toISOString());
    message.returnCondition !== undefined &&
      (obj.returnCondition = message.returnCondition);
    message.stateRegDate !== undefined &&
      (obj.stateRegDate = message.stateRegDate.toISOString());
    message.placementDate !== undefined &&
      (obj.placementDate = message.placementDate.toISOString());
    message.placementPrice !== undefined &&
      (obj.placementPrice = message.placementPrice
        ? Quotation.toJSON(message.placementPrice)
        : undefined);
    message.issueSizePlan !== undefined &&
      (obj.issueSizePlan = message.issueSizePlan
        ? Quotation.toJSON(message.issueSizePlan)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetBond>): AssetBond {
    const message = createBaseAssetBond();
    message.currentNominal =
      object.currentNominal !== undefined && object.currentNominal !== null
        ? Quotation.fromPartial(object.currentNominal)
        : undefined;
    message.borrowName = object.borrowName ?? "";
    message.issueSize =
      object.issueSize !== undefined && object.issueSize !== null
        ? Quotation.fromPartial(object.issueSize)
        : undefined;
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    message.nominalCurrency = object.nominalCurrency ?? "";
    message.issueKind = object.issueKind ?? "";
    message.interestKind = object.interestKind ?? "";
    message.couponQuantityPerYear = object.couponQuantityPerYear ?? 0;
    message.indexedNominalFlag = object.indexedNominalFlag ?? false;
    message.subordinatedFlag = object.subordinatedFlag ?? false;
    message.collateralFlag = object.collateralFlag ?? false;
    message.taxFreeFlag = object.taxFreeFlag ?? false;
    message.amortizationFlag = object.amortizationFlag ?? false;
    message.floatingCouponFlag = object.floatingCouponFlag ?? false;
    message.perpetualFlag = object.perpetualFlag ?? false;
    message.maturityDate = object.maturityDate ?? undefined;
    message.returnCondition = object.returnCondition ?? "";
    message.stateRegDate = object.stateRegDate ?? undefined;
    message.placementDate = object.placementDate ?? undefined;
    message.placementPrice =
      object.placementPrice !== undefined && object.placementPrice !== null
        ? Quotation.fromPartial(object.placementPrice)
        : undefined;
    message.issueSizePlan =
      object.issueSizePlan !== undefined && object.issueSizePlan !== null
        ? Quotation.fromPartial(object.issueSizePlan)
        : undefined;
    return message;
  },
};

function createBaseAssetStructuredProduct(): AssetStructuredProduct {
  return {
    borrowName: "",
    nominal: undefined,
    nominalCurrency: "",
    type: 0,
    logicPortfolio: "",
    assetType: 0,
    basicAsset: "",
    safetyBarrier: undefined,
    maturityDate: undefined,
    issueSizePlan: undefined,
    issueSize: undefined,
    placementDate: undefined,
    issueKind: "",
  };
}

export const AssetStructuredProduct = {
  encode(
    message: AssetStructuredProduct,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.borrowName !== "") {
      writer.uint32(10).string(message.borrowName);
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(18).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(26).string(message.nominalCurrency);
    }
    if (message.type !== 0) {
      writer.uint32(32).int32(message.type);
    }
    if (message.logicPortfolio !== "") {
      writer.uint32(42).string(message.logicPortfolio);
    }
    if (message.assetType !== 0) {
      writer.uint32(48).int32(message.assetType);
    }
    if (message.basicAsset !== "") {
      writer.uint32(58).string(message.basicAsset);
    }
    if (message.safetyBarrier !== undefined) {
      Quotation.encode(
        message.safetyBarrier,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.maturityDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.maturityDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.issueSizePlan !== undefined) {
      Quotation.encode(
        message.issueSizePlan,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.issueSize !== undefined) {
      Quotation.encode(message.issueSize, writer.uint32(90).fork()).ldelim();
    }
    if (message.placementDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.placementDate),
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.issueKind !== "") {
      writer.uint32(106).string(message.issueKind);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetStructuredProduct {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetStructuredProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.borrowName = reader.string();
          break;
        case 2:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.nominalCurrency = reader.string();
          break;
        case 4:
          message.type = reader.int32() as any;
          break;
        case 5:
          message.logicPortfolio = reader.string();
          break;
        case 6:
          message.assetType = reader.int32() as any;
          break;
        case 7:
          message.basicAsset = reader.string();
          break;
        case 8:
          message.safetyBarrier = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.maturityDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.issueSizePlan = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.issueSize = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.placementDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.issueKind = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetStructuredProduct {
    return {
      borrowName: isSet(object.borrowName) ? String(object.borrowName) : "",
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
      nominalCurrency: isSet(object.nominalCurrency)
        ? String(object.nominalCurrency)
        : "",
      type: isSet(object.type) ? structuredProductTypeFromJSON(object.type) : 0,
      logicPortfolio: isSet(object.logicPortfolio)
        ? String(object.logicPortfolio)
        : "",
      assetType: isSet(object.assetType)
        ? assetTypeFromJSON(object.assetType)
        : 0,
      basicAsset: isSet(object.basicAsset) ? String(object.basicAsset) : "",
      safetyBarrier: isSet(object.safetyBarrier)
        ? Quotation.fromJSON(object.safetyBarrier)
        : undefined,
      maturityDate: isSet(object.maturityDate)
        ? fromJsonTimestamp(object.maturityDate)
        : undefined,
      issueSizePlan: isSet(object.issueSizePlan)
        ? Quotation.fromJSON(object.issueSizePlan)
        : undefined,
      issueSize: isSet(object.issueSize)
        ? Quotation.fromJSON(object.issueSize)
        : undefined,
      placementDate: isSet(object.placementDate)
        ? fromJsonTimestamp(object.placementDate)
        : undefined,
      issueKind: isSet(object.issueKind) ? String(object.issueKind) : "",
    };
  },

  toJSON(message: AssetStructuredProduct): unknown {
    const obj: any = {};
    message.borrowName !== undefined && (obj.borrowName = message.borrowName);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    message.nominalCurrency !== undefined &&
      (obj.nominalCurrency = message.nominalCurrency);
    message.type !== undefined &&
      (obj.type = structuredProductTypeToJSON(message.type));
    message.logicPortfolio !== undefined &&
      (obj.logicPortfolio = message.logicPortfolio);
    message.assetType !== undefined &&
      (obj.assetType = assetTypeToJSON(message.assetType));
    message.basicAsset !== undefined && (obj.basicAsset = message.basicAsset);
    message.safetyBarrier !== undefined &&
      (obj.safetyBarrier = message.safetyBarrier
        ? Quotation.toJSON(message.safetyBarrier)
        : undefined);
    message.maturityDate !== undefined &&
      (obj.maturityDate = message.maturityDate.toISOString());
    message.issueSizePlan !== undefined &&
      (obj.issueSizePlan = message.issueSizePlan
        ? Quotation.toJSON(message.issueSizePlan)
        : undefined);
    message.issueSize !== undefined &&
      (obj.issueSize = message.issueSize
        ? Quotation.toJSON(message.issueSize)
        : undefined);
    message.placementDate !== undefined &&
      (obj.placementDate = message.placementDate.toISOString());
    message.issueKind !== undefined && (obj.issueKind = message.issueKind);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssetStructuredProduct>
  ): AssetStructuredProduct {
    const message = createBaseAssetStructuredProduct();
    message.borrowName = object.borrowName ?? "";
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    message.nominalCurrency = object.nominalCurrency ?? "";
    message.type = object.type ?? 0;
    message.logicPortfolio = object.logicPortfolio ?? "";
    message.assetType = object.assetType ?? 0;
    message.basicAsset = object.basicAsset ?? "";
    message.safetyBarrier =
      object.safetyBarrier !== undefined && object.safetyBarrier !== null
        ? Quotation.fromPartial(object.safetyBarrier)
        : undefined;
    message.maturityDate = object.maturityDate ?? undefined;
    message.issueSizePlan =
      object.issueSizePlan !== undefined && object.issueSizePlan !== null
        ? Quotation.fromPartial(object.issueSizePlan)
        : undefined;
    message.issueSize =
      object.issueSize !== undefined && object.issueSize !== null
        ? Quotation.fromPartial(object.issueSize)
        : undefined;
    message.placementDate = object.placementDate ?? undefined;
    message.issueKind = object.issueKind ?? "";
    return message;
  },
};

function createBaseAssetEtf(): AssetEtf {
  return {
    totalExpense: undefined,
    hurdleRate: undefined,
    performanceFee: undefined,
    fixedCommission: undefined,
    paymentType: "",
    watermarkFlag: false,
    buyPremium: undefined,
    sellDiscount: undefined,
    rebalancingFlag: false,
    rebalancingFreq: "",
    managementType: "",
    primaryIndex: "",
    focusType: "",
    leveragedFlag: false,
    numShare: undefined,
    ucitsFlag: false,
    releasedDate: undefined,
    description: "",
    primaryIndexDescription: "",
    primaryIndexCompany: "",
    indexRecoveryPeriod: undefined,
    inavCode: "",
    divYieldFlag: false,
    expenseCommission: undefined,
    primaryIndexTrackingError: undefined,
    rebalancingPlan: "",
    taxRate: "",
    rebalancingDates: [],
    issueKind: "",
    nominal: undefined,
    nominalCurrency: "",
  };
}

export const AssetEtf = {
  encode(
    message: AssetEtf,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalExpense !== undefined) {
      Quotation.encode(message.totalExpense, writer.uint32(10).fork()).ldelim();
    }
    if (message.hurdleRate !== undefined) {
      Quotation.encode(message.hurdleRate, writer.uint32(18).fork()).ldelim();
    }
    if (message.performanceFee !== undefined) {
      Quotation.encode(
        message.performanceFee,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.fixedCommission !== undefined) {
      Quotation.encode(
        message.fixedCommission,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.paymentType !== "") {
      writer.uint32(42).string(message.paymentType);
    }
    if (message.watermarkFlag === true) {
      writer.uint32(48).bool(message.watermarkFlag);
    }
    if (message.buyPremium !== undefined) {
      Quotation.encode(message.buyPremium, writer.uint32(58).fork()).ldelim();
    }
    if (message.sellDiscount !== undefined) {
      Quotation.encode(message.sellDiscount, writer.uint32(66).fork()).ldelim();
    }
    if (message.rebalancingFlag === true) {
      writer.uint32(72).bool(message.rebalancingFlag);
    }
    if (message.rebalancingFreq !== "") {
      writer.uint32(82).string(message.rebalancingFreq);
    }
    if (message.managementType !== "") {
      writer.uint32(90).string(message.managementType);
    }
    if (message.primaryIndex !== "") {
      writer.uint32(98).string(message.primaryIndex);
    }
    if (message.focusType !== "") {
      writer.uint32(106).string(message.focusType);
    }
    if (message.leveragedFlag === true) {
      writer.uint32(112).bool(message.leveragedFlag);
    }
    if (message.numShare !== undefined) {
      Quotation.encode(message.numShare, writer.uint32(122).fork()).ldelim();
    }
    if (message.ucitsFlag === true) {
      writer.uint32(128).bool(message.ucitsFlag);
    }
    if (message.releasedDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.releasedDate),
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(146).string(message.description);
    }
    if (message.primaryIndexDescription !== "") {
      writer.uint32(154).string(message.primaryIndexDescription);
    }
    if (message.primaryIndexCompany !== "") {
      writer.uint32(162).string(message.primaryIndexCompany);
    }
    if (message.indexRecoveryPeriod !== undefined) {
      Quotation.encode(
        message.indexRecoveryPeriod,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.inavCode !== "") {
      writer.uint32(178).string(message.inavCode);
    }
    if (message.divYieldFlag === true) {
      writer.uint32(184).bool(message.divYieldFlag);
    }
    if (message.expenseCommission !== undefined) {
      Quotation.encode(
        message.expenseCommission,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.primaryIndexTrackingError !== undefined) {
      Quotation.encode(
        message.primaryIndexTrackingError,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.rebalancingPlan !== "") {
      writer.uint32(210).string(message.rebalancingPlan);
    }
    if (message.taxRate !== "") {
      writer.uint32(218).string(message.taxRate);
    }
    for (const v of message.rebalancingDates) {
      Timestamp.encode(toTimestamp(v!), writer.uint32(226).fork()).ldelim();
    }
    if (message.issueKind !== "") {
      writer.uint32(234).string(message.issueKind);
    }
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(242).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(250).string(message.nominalCurrency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetEtf {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetEtf();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalExpense = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.hurdleRate = Quotation.decode(reader, reader.uint32());
          break;
        case 3:
          message.performanceFee = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.fixedCommission = Quotation.decode(reader, reader.uint32());
          break;
        case 5:
          message.paymentType = reader.string();
          break;
        case 6:
          message.watermarkFlag = reader.bool();
          break;
        case 7:
          message.buyPremium = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.sellDiscount = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.rebalancingFlag = reader.bool();
          break;
        case 10:
          message.rebalancingFreq = reader.string();
          break;
        case 11:
          message.managementType = reader.string();
          break;
        case 12:
          message.primaryIndex = reader.string();
          break;
        case 13:
          message.focusType = reader.string();
          break;
        case 14:
          message.leveragedFlag = reader.bool();
          break;
        case 15:
          message.numShare = Quotation.decode(reader, reader.uint32());
          break;
        case 16:
          message.ucitsFlag = reader.bool();
          break;
        case 17:
          message.releasedDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.description = reader.string();
          break;
        case 19:
          message.primaryIndexDescription = reader.string();
          break;
        case 20:
          message.primaryIndexCompany = reader.string();
          break;
        case 21:
          message.indexRecoveryPeriod = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.inavCode = reader.string();
          break;
        case 23:
          message.divYieldFlag = reader.bool();
          break;
        case 24:
          message.expenseCommission = Quotation.decode(reader, reader.uint32());
          break;
        case 25:
          message.primaryIndexTrackingError = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.rebalancingPlan = reader.string();
          break;
        case 27:
          message.taxRate = reader.string();
          break;
        case 28:
          message.rebalancingDates.push(
            fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          );
          break;
        case 29:
          message.issueKind = reader.string();
          break;
        case 30:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        case 31:
          message.nominalCurrency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetEtf {
    return {
      totalExpense: isSet(object.totalExpense)
        ? Quotation.fromJSON(object.totalExpense)
        : undefined,
      hurdleRate: isSet(object.hurdleRate)
        ? Quotation.fromJSON(object.hurdleRate)
        : undefined,
      performanceFee: isSet(object.performanceFee)
        ? Quotation.fromJSON(object.performanceFee)
        : undefined,
      fixedCommission: isSet(object.fixedCommission)
        ? Quotation.fromJSON(object.fixedCommission)
        : undefined,
      paymentType: isSet(object.paymentType) ? String(object.paymentType) : "",
      watermarkFlag: isSet(object.watermarkFlag)
        ? Boolean(object.watermarkFlag)
        : false,
      buyPremium: isSet(object.buyPremium)
        ? Quotation.fromJSON(object.buyPremium)
        : undefined,
      sellDiscount: isSet(object.sellDiscount)
        ? Quotation.fromJSON(object.sellDiscount)
        : undefined,
      rebalancingFlag: isSet(object.rebalancingFlag)
        ? Boolean(object.rebalancingFlag)
        : false,
      rebalancingFreq: isSet(object.rebalancingFreq)
        ? String(object.rebalancingFreq)
        : "",
      managementType: isSet(object.managementType)
        ? String(object.managementType)
        : "",
      primaryIndex: isSet(object.primaryIndex)
        ? String(object.primaryIndex)
        : "",
      focusType: isSet(object.focusType) ? String(object.focusType) : "",
      leveragedFlag: isSet(object.leveragedFlag)
        ? Boolean(object.leveragedFlag)
        : false,
      numShare: isSet(object.numShare)
        ? Quotation.fromJSON(object.numShare)
        : undefined,
      ucitsFlag: isSet(object.ucitsFlag) ? Boolean(object.ucitsFlag) : false,
      releasedDate: isSet(object.releasedDate)
        ? fromJsonTimestamp(object.releasedDate)
        : undefined,
      description: isSet(object.description) ? String(object.description) : "",
      primaryIndexDescription: isSet(object.primaryIndexDescription)
        ? String(object.primaryIndexDescription)
        : "",
      primaryIndexCompany: isSet(object.primaryIndexCompany)
        ? String(object.primaryIndexCompany)
        : "",
      indexRecoveryPeriod: isSet(object.indexRecoveryPeriod)
        ? Quotation.fromJSON(object.indexRecoveryPeriod)
        : undefined,
      inavCode: isSet(object.inavCode) ? String(object.inavCode) : "",
      divYieldFlag: isSet(object.divYieldFlag)
        ? Boolean(object.divYieldFlag)
        : false,
      expenseCommission: isSet(object.expenseCommission)
        ? Quotation.fromJSON(object.expenseCommission)
        : undefined,
      primaryIndexTrackingError: isSet(object.primaryIndexTrackingError)
        ? Quotation.fromJSON(object.primaryIndexTrackingError)
        : undefined,
      rebalancingPlan: isSet(object.rebalancingPlan)
        ? String(object.rebalancingPlan)
        : "",
      taxRate: isSet(object.taxRate) ? String(object.taxRate) : "",
      rebalancingDates: Array.isArray(object?.rebalancingDates)
        ? object.rebalancingDates.map((e: any) => fromJsonTimestamp(e))
        : [],
      issueKind: isSet(object.issueKind) ? String(object.issueKind) : "",
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
      nominalCurrency: isSet(object.nominalCurrency)
        ? String(object.nominalCurrency)
        : "",
    };
  },

  toJSON(message: AssetEtf): unknown {
    const obj: any = {};
    message.totalExpense !== undefined &&
      (obj.totalExpense = message.totalExpense
        ? Quotation.toJSON(message.totalExpense)
        : undefined);
    message.hurdleRate !== undefined &&
      (obj.hurdleRate = message.hurdleRate
        ? Quotation.toJSON(message.hurdleRate)
        : undefined);
    message.performanceFee !== undefined &&
      (obj.performanceFee = message.performanceFee
        ? Quotation.toJSON(message.performanceFee)
        : undefined);
    message.fixedCommission !== undefined &&
      (obj.fixedCommission = message.fixedCommission
        ? Quotation.toJSON(message.fixedCommission)
        : undefined);
    message.paymentType !== undefined &&
      (obj.paymentType = message.paymentType);
    message.watermarkFlag !== undefined &&
      (obj.watermarkFlag = message.watermarkFlag);
    message.buyPremium !== undefined &&
      (obj.buyPremium = message.buyPremium
        ? Quotation.toJSON(message.buyPremium)
        : undefined);
    message.sellDiscount !== undefined &&
      (obj.sellDiscount = message.sellDiscount
        ? Quotation.toJSON(message.sellDiscount)
        : undefined);
    message.rebalancingFlag !== undefined &&
      (obj.rebalancingFlag = message.rebalancingFlag);
    message.rebalancingFreq !== undefined &&
      (obj.rebalancingFreq = message.rebalancingFreq);
    message.managementType !== undefined &&
      (obj.managementType = message.managementType);
    message.primaryIndex !== undefined &&
      (obj.primaryIndex = message.primaryIndex);
    message.focusType !== undefined && (obj.focusType = message.focusType);
    message.leveragedFlag !== undefined &&
      (obj.leveragedFlag = message.leveragedFlag);
    message.numShare !== undefined &&
      (obj.numShare = message.numShare
        ? Quotation.toJSON(message.numShare)
        : undefined);
    message.ucitsFlag !== undefined && (obj.ucitsFlag = message.ucitsFlag);
    message.releasedDate !== undefined &&
      (obj.releasedDate = message.releasedDate.toISOString());
    message.description !== undefined &&
      (obj.description = message.description);
    message.primaryIndexDescription !== undefined &&
      (obj.primaryIndexDescription = message.primaryIndexDescription);
    message.primaryIndexCompany !== undefined &&
      (obj.primaryIndexCompany = message.primaryIndexCompany);
    message.indexRecoveryPeriod !== undefined &&
      (obj.indexRecoveryPeriod = message.indexRecoveryPeriod
        ? Quotation.toJSON(message.indexRecoveryPeriod)
        : undefined);
    message.inavCode !== undefined && (obj.inavCode = message.inavCode);
    message.divYieldFlag !== undefined &&
      (obj.divYieldFlag = message.divYieldFlag);
    message.expenseCommission !== undefined &&
      (obj.expenseCommission = message.expenseCommission
        ? Quotation.toJSON(message.expenseCommission)
        : undefined);
    message.primaryIndexTrackingError !== undefined &&
      (obj.primaryIndexTrackingError = message.primaryIndexTrackingError
        ? Quotation.toJSON(message.primaryIndexTrackingError)
        : undefined);
    message.rebalancingPlan !== undefined &&
      (obj.rebalancingPlan = message.rebalancingPlan);
    message.taxRate !== undefined && (obj.taxRate = message.taxRate);
    if (message.rebalancingDates) {
      obj.rebalancingDates = message.rebalancingDates.map((e) =>
        e.toISOString()
      );
    } else {
      obj.rebalancingDates = [];
    }
    message.issueKind !== undefined && (obj.issueKind = message.issueKind);
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    message.nominalCurrency !== undefined &&
      (obj.nominalCurrency = message.nominalCurrency);
    return obj;
  },

  fromPartial(object: DeepPartial<AssetEtf>): AssetEtf {
    const message = createBaseAssetEtf();
    message.totalExpense =
      object.totalExpense !== undefined && object.totalExpense !== null
        ? Quotation.fromPartial(object.totalExpense)
        : undefined;
    message.hurdleRate =
      object.hurdleRate !== undefined && object.hurdleRate !== null
        ? Quotation.fromPartial(object.hurdleRate)
        : undefined;
    message.performanceFee =
      object.performanceFee !== undefined && object.performanceFee !== null
        ? Quotation.fromPartial(object.performanceFee)
        : undefined;
    message.fixedCommission =
      object.fixedCommission !== undefined && object.fixedCommission !== null
        ? Quotation.fromPartial(object.fixedCommission)
        : undefined;
    message.paymentType = object.paymentType ?? "";
    message.watermarkFlag = object.watermarkFlag ?? false;
    message.buyPremium =
      object.buyPremium !== undefined && object.buyPremium !== null
        ? Quotation.fromPartial(object.buyPremium)
        : undefined;
    message.sellDiscount =
      object.sellDiscount !== undefined && object.sellDiscount !== null
        ? Quotation.fromPartial(object.sellDiscount)
        : undefined;
    message.rebalancingFlag = object.rebalancingFlag ?? false;
    message.rebalancingFreq = object.rebalancingFreq ?? "";
    message.managementType = object.managementType ?? "";
    message.primaryIndex = object.primaryIndex ?? "";
    message.focusType = object.focusType ?? "";
    message.leveragedFlag = object.leveragedFlag ?? false;
    message.numShare =
      object.numShare !== undefined && object.numShare !== null
        ? Quotation.fromPartial(object.numShare)
        : undefined;
    message.ucitsFlag = object.ucitsFlag ?? false;
    message.releasedDate = object.releasedDate ?? undefined;
    message.description = object.description ?? "";
    message.primaryIndexDescription = object.primaryIndexDescription ?? "";
    message.primaryIndexCompany = object.primaryIndexCompany ?? "";
    message.indexRecoveryPeriod =
      object.indexRecoveryPeriod !== undefined &&
      object.indexRecoveryPeriod !== null
        ? Quotation.fromPartial(object.indexRecoveryPeriod)
        : undefined;
    message.inavCode = object.inavCode ?? "";
    message.divYieldFlag = object.divYieldFlag ?? false;
    message.expenseCommission =
      object.expenseCommission !== undefined &&
      object.expenseCommission !== null
        ? Quotation.fromPartial(object.expenseCommission)
        : undefined;
    message.primaryIndexTrackingError =
      object.primaryIndexTrackingError !== undefined &&
      object.primaryIndexTrackingError !== null
        ? Quotation.fromPartial(object.primaryIndexTrackingError)
        : undefined;
    message.rebalancingPlan = object.rebalancingPlan ?? "";
    message.taxRate = object.taxRate ?? "";
    message.rebalancingDates = object.rebalancingDates?.map((e) => e) || [];
    message.issueKind = object.issueKind ?? "";
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    message.nominalCurrency = object.nominalCurrency ?? "";
    return message;
  },
};

function createBaseAssetClearingCertificate(): AssetClearingCertificate {
  return { nominal: undefined, nominalCurrency: "" };
}

export const AssetClearingCertificate = {
  encode(
    message: AssetClearingCertificate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nominal !== undefined) {
      Quotation.encode(message.nominal, writer.uint32(10).fork()).ldelim();
    }
    if (message.nominalCurrency !== "") {
      writer.uint32(18).string(message.nominalCurrency);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AssetClearingCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetClearingCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nominal = Quotation.decode(reader, reader.uint32());
          break;
        case 2:
          message.nominalCurrency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetClearingCertificate {
    return {
      nominal: isSet(object.nominal)
        ? Quotation.fromJSON(object.nominal)
        : undefined,
      nominalCurrency: isSet(object.nominalCurrency)
        ? String(object.nominalCurrency)
        : "",
    };
  },

  toJSON(message: AssetClearingCertificate): unknown {
    const obj: any = {};
    message.nominal !== undefined &&
      (obj.nominal = message.nominal
        ? Quotation.toJSON(message.nominal)
        : undefined);
    message.nominalCurrency !== undefined &&
      (obj.nominalCurrency = message.nominalCurrency);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AssetClearingCertificate>
  ): AssetClearingCertificate {
    const message = createBaseAssetClearingCertificate();
    message.nominal =
      object.nominal !== undefined && object.nominal !== null
        ? Quotation.fromPartial(object.nominal)
        : undefined;
    message.nominalCurrency = object.nominalCurrency ?? "";
    return message;
  },
};

function createBaseBrand(): Brand {
  return {
    uid: "",
    name: "",
    description: "",
    info: "",
    company: "",
    sector: "",
    countryOfRisk: "",
    countryOfRiskName: "",
  };
}

export const Brand = {
  encode(message: Brand, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.company !== "") {
      writer.uint32(42).string(message.company);
    }
    if (message.sector !== "") {
      writer.uint32(50).string(message.sector);
    }
    if (message.countryOfRisk !== "") {
      writer.uint32(58).string(message.countryOfRisk);
    }
    if (message.countryOfRiskName !== "") {
      writer.uint32(66).string(message.countryOfRiskName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Brand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.info = reader.string();
          break;
        case 5:
          message.company = reader.string();
          break;
        case 6:
          message.sector = reader.string();
          break;
        case 7:
          message.countryOfRisk = reader.string();
          break;
        case 8:
          message.countryOfRiskName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Brand {
    return {
      uid: isSet(object.uid) ? String(object.uid) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      info: isSet(object.info) ? String(object.info) : "",
      company: isSet(object.company) ? String(object.company) : "",
      sector: isSet(object.sector) ? String(object.sector) : "",
      countryOfRisk: isSet(object.countryOfRisk)
        ? String(object.countryOfRisk)
        : "",
      countryOfRiskName: isSet(object.countryOfRiskName)
        ? String(object.countryOfRiskName)
        : "",
    };
  },

  toJSON(message: Brand): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.info !== undefined && (obj.info = message.info);
    message.company !== undefined && (obj.company = message.company);
    message.sector !== undefined && (obj.sector = message.sector);
    message.countryOfRisk !== undefined &&
      (obj.countryOfRisk = message.countryOfRisk);
    message.countryOfRiskName !== undefined &&
      (obj.countryOfRiskName = message.countryOfRiskName);
    return obj;
  },

  fromPartial(object: DeepPartial<Brand>): Brand {
    const message = createBaseBrand();
    message.uid = object.uid ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.info = object.info ?? "";
    message.company = object.company ?? "";
    message.sector = object.sector ?? "";
    message.countryOfRisk = object.countryOfRisk ?? "";
    message.countryOfRiskName = object.countryOfRiskName ?? "";
    return message;
  },
};

function createBaseAssetInstrument(): AssetInstrument {
  return {
    uid: "",
    figi: "",
    instrumentType: "",
    ticker: "",
    classCode: "",
    links: [],
  };
}

export const AssetInstrument = {
  encode(
    message: AssetInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.figi !== "") {
      writer.uint32(18).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(26).string(message.instrumentType);
    }
    if (message.ticker !== "") {
      writer.uint32(34).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(42).string(message.classCode);
    }
    for (const v of message.links) {
      InstrumentLink.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AssetInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uid = reader.string();
          break;
        case 2:
          message.figi = reader.string();
          break;
        case 3:
          message.instrumentType = reader.string();
          break;
        case 4:
          message.ticker = reader.string();
          break;
        case 5:
          message.classCode = reader.string();
          break;
        case 6:
          message.links.push(InstrumentLink.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AssetInstrument {
    return {
      uid: isSet(object.uid) ? String(object.uid) : "",
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      links: Array.isArray(object?.links)
        ? object.links.map((e: any) => InstrumentLink.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AssetInstrument): unknown {
    const obj: any = {};
    message.uid !== undefined && (obj.uid = message.uid);
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    if (message.links) {
      obj.links = message.links.map((e) =>
        e ? InstrumentLink.toJSON(e) : undefined
      );
    } else {
      obj.links = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<AssetInstrument>): AssetInstrument {
    const message = createBaseAssetInstrument();
    message.uid = object.uid ?? "";
    message.figi = object.figi ?? "";
    message.instrumentType = object.instrumentType ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.links =
      object.links?.map((e) => InstrumentLink.fromPartial(e)) || [];
    return message;
  },
};

function createBaseInstrumentLink(): InstrumentLink {
  return { type: "", instrumentUid: "" };
}

export const InstrumentLink = {
  encode(
    message: InstrumentLink,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InstrumentLink {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstrumentLink();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.instrumentUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InstrumentLink {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
    };
  },

  toJSON(message: InstrumentLink): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    return obj;
  },

  fromPartial(object: DeepPartial<InstrumentLink>): InstrumentLink {
    const message = createBaseInstrumentLink();
    message.type = object.type ?? "";
    message.instrumentUid = object.instrumentUid ?? "";
    return message;
  },
};

function createBaseGetFavoritesRequest(): GetFavoritesRequest {
  return {};
}

export const GetFavoritesRequest = {
  encode(
    _: GetFavoritesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFavoritesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFavoritesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetFavoritesRequest {
    return {};
  },

  toJSON(_: GetFavoritesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<GetFavoritesRequest>): GetFavoritesRequest {
    const message = createBaseGetFavoritesRequest();
    return message;
  },
};

function createBaseGetFavoritesResponse(): GetFavoritesResponse {
  return { favoriteInstruments: [] };
}

export const GetFavoritesResponse = {
  encode(
    message: GetFavoritesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.favoriteInstruments) {
      FavoriteInstrument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.favoriteInstruments.push(
            FavoriteInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetFavoritesResponse {
    return {
      favoriteInstruments: Array.isArray(object?.favoriteInstruments)
        ? object.favoriteInstruments.map((e: any) =>
            FavoriteInstrument.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GetFavoritesResponse): unknown {
    const obj: any = {};
    if (message.favoriteInstruments) {
      obj.favoriteInstruments = message.favoriteInstruments.map((e) =>
        e ? FavoriteInstrument.toJSON(e) : undefined
      );
    } else {
      obj.favoriteInstruments = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GetFavoritesResponse>): GetFavoritesResponse {
    const message = createBaseGetFavoritesResponse();
    message.favoriteInstruments =
      object.favoriteInstruments?.map((e) =>
        FavoriteInstrument.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseFavoriteInstrument(): FavoriteInstrument {
  return {
    figi: "",
    ticker: "",
    classCode: "",
    isin: "",
    instrumentType: "",
    otcFlag: false,
    apiTradeAvailableFlag: false,
  };
}

export const FavoriteInstrument = {
  encode(
    message: FavoriteInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.ticker !== "") {
      writer.uint32(18).string(message.ticker);
    }
    if (message.classCode !== "") {
      writer.uint32(26).string(message.classCode);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.instrumentType !== "") {
      writer.uint32(90).string(message.instrumentType);
    }
    if (message.otcFlag === true) {
      writer.uint32(128).bool(message.otcFlag);
    }
    if (message.apiTradeAvailableFlag === true) {
      writer.uint32(136).bool(message.apiTradeAvailableFlag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FavoriteInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFavoriteInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.ticker = reader.string();
          break;
        case 3:
          message.classCode = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 11:
          message.instrumentType = reader.string();
          break;
        case 16:
          message.otcFlag = reader.bool();
          break;
        case 17:
          message.apiTradeAvailableFlag = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FavoriteInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      otcFlag: isSet(object.otcFlag) ? Boolean(object.otcFlag) : false,
      apiTradeAvailableFlag: isSet(object.apiTradeAvailableFlag)
        ? Boolean(object.apiTradeAvailableFlag)
        : false,
    };
  },

  toJSON(message: FavoriteInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.isin !== undefined && (obj.isin = message.isin);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.otcFlag !== undefined && (obj.otcFlag = message.otcFlag);
    message.apiTradeAvailableFlag !== undefined &&
      (obj.apiTradeAvailableFlag = message.apiTradeAvailableFlag);
    return obj;
  },

  fromPartial(object: DeepPartial<FavoriteInstrument>): FavoriteInstrument {
    const message = createBaseFavoriteInstrument();
    message.figi = object.figi ?? "";
    message.ticker = object.ticker ?? "";
    message.classCode = object.classCode ?? "";
    message.isin = object.isin ?? "";
    message.instrumentType = object.instrumentType ?? "";
    message.otcFlag = object.otcFlag ?? false;
    message.apiTradeAvailableFlag = object.apiTradeAvailableFlag ?? false;
    return message;
  },
};

function createBaseEditFavoritesRequest(): EditFavoritesRequest {
  return { instruments: [], actionType: 0 };
}

export const EditFavoritesRequest = {
  encode(
    message: EditFavoritesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.instruments) {
      EditFavoritesRequestInstrument.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.actionType !== 0) {
      writer.uint32(48).int32(message.actionType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditFavoritesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.instruments.push(
            EditFavoritesRequestInstrument.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.actionType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesRequest {
    return {
      instruments: Array.isArray(object?.instruments)
        ? object.instruments.map((e: any) =>
            EditFavoritesRequestInstrument.fromJSON(e)
          )
        : [],
      actionType: isSet(object.actionType)
        ? editFavoritesActionTypeFromJSON(object.actionType)
        : 0,
    };
  },

  toJSON(message: EditFavoritesRequest): unknown {
    const obj: any = {};
    if (message.instruments) {
      obj.instruments = message.instruments.map((e) =>
        e ? EditFavoritesRequestInstrument.toJSON(e) : undefined
      );
    } else {
      obj.instruments = [];
    }
    message.actionType !== undefined &&
      (obj.actionType = editFavoritesActionTypeToJSON(message.actionType));
    return obj;
  },

  fromPartial(object: DeepPartial<EditFavoritesRequest>): EditFavoritesRequest {
    const message = createBaseEditFavoritesRequest();
    message.instruments =
      object.instruments?.map((e) =>
        EditFavoritesRequestInstrument.fromPartial(e)
      ) || [];
    message.actionType = object.actionType ?? 0;
    return message;
  },
};

function createBaseEditFavoritesRequestInstrument(): EditFavoritesRequestInstrument {
  return { figi: "" };
}

export const EditFavoritesRequestInstrument = {
  encode(
    message: EditFavoritesRequestInstrument,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditFavoritesRequestInstrument {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesRequestInstrument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesRequestInstrument {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
    };
  },

  toJSON(message: EditFavoritesRequestInstrument): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditFavoritesRequestInstrument>
  ): EditFavoritesRequestInstrument {
    const message = createBaseEditFavoritesRequestInstrument();
    message.figi = object.figi ?? "";
    return message;
  },
};

function createBaseEditFavoritesResponse(): EditFavoritesResponse {
  return { favoriteInstruments: [] };
}

export const EditFavoritesResponse = {
  encode(
    message: EditFavoritesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.favoriteInstruments) {
      FavoriteInstrument.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EditFavoritesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEditFavoritesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.favoriteInstruments.push(
            FavoriteInstrument.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EditFavoritesResponse {
    return {
      favoriteInstruments: Array.isArray(object?.favoriteInstruments)
        ? object.favoriteInstruments.map((e: any) =>
            FavoriteInstrument.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: EditFavoritesResponse): unknown {
    const obj: any = {};
    if (message.favoriteInstruments) {
      obj.favoriteInstruments = message.favoriteInstruments.map((e) =>
        e ? FavoriteInstrument.toJSON(e) : undefined
      );
    } else {
      obj.favoriteInstruments = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<EditFavoritesResponse>
  ): EditFavoritesResponse {
    const message = createBaseEditFavoritesResponse();
    message.favoriteInstruments =
      object.favoriteInstruments?.map((e) =>
        FavoriteInstrument.fromPartial(e)
      ) || [];
    return message;
  },
};

/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 */
export const InstrumentsServiceDefinition = {
  name: "InstrumentsService",
  fullName: "tinkoff.public.invest.api.contract.v1.InstrumentsService",
  methods: {
    /** Метод получения расписания торгов торговых площадок. */
    tradingSchedules: {
      name: "TradingSchedules",
      requestType: TradingSchedulesRequest,
      requestStream: false,
      responseType: TradingSchedulesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения облигации по её идентификатору. */
    bondBy: {
      name: "BondBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: BondResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка облигаций. */
    bonds: {
      name: "Bonds",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: BondsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения графика выплат купонов по облигации */
    getBondCoupons: {
      name: "GetBondCoupons",
      requestType: GetBondCouponsRequest,
      requestStream: false,
      responseType: GetBondCouponsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения валюты по её идентификатору. */
    currencyBy: {
      name: "CurrencyBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: CurrencyResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка валют. */
    currencies: {
      name: "Currencies",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: CurrenciesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения инвестиционного фонда по его идентификатору. */
    etfBy: {
      name: "EtfBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: EtfResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка инвестиционных фондов. */
    etfs: {
      name: "Etfs",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: EtfsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения фьючерса по его идентификатору. */
    futureBy: {
      name: "FutureBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: FutureResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка фьючерсов. */
    futures: {
      name: "Futures",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: FuturesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения акции по её идентификатору. */
    shareBy: {
      name: "ShareBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: ShareResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка акций. */
    shares: {
      name: "Shares",
      requestType: InstrumentsRequest,
      requestStream: false,
      responseType: SharesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения накопленного купонного дохода по облигации. */
    getAccruedInterests: {
      name: "GetAccruedInterests",
      requestType: GetAccruedInterestsRequest,
      requestStream: false,
      responseType: GetAccruedInterestsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения размера гарантийного обеспечения по фьючерсам. */
    getFuturesMargin: {
      name: "GetFuturesMargin",
      requestType: GetFuturesMarginRequest,
      requestStream: false,
      responseType: GetFuturesMarginResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения основной информации об инструменте. */
    getInstrumentBy: {
      name: "GetInstrumentBy",
      requestType: InstrumentRequest,
      requestStream: false,
      responseType: InstrumentResponse,
      responseStream: false,
      options: {},
    },
    /** Метод для получения событий выплаты дивидендов по инструменту. */
    getDividends: {
      name: "GetDividends",
      requestType: GetDividendsRequest,
      requestStream: false,
      responseType: GetDividendsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения актива по его идентификатору. */
    getAssetBy: {
      name: "GetAssetBy",
      requestType: AssetRequest,
      requestStream: false,
      responseType: AssetResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка активов. */
    getAssets: {
      name: "GetAssets",
      requestType: AssetsRequest,
      requestStream: false,
      responseType: AssetsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения избранных инструментов. */
    getFavorites: {
      name: "GetFavorites",
      requestType: GetFavoritesRequest,
      requestStream: false,
      responseType: GetFavoritesResponse,
      responseStream: false,
      options: {},
    },
    /** Метод редактирования избранных инструментов. */
    editFavorites: {
      name: "EditFavorites",
      requestType: EditFavoritesRequest,
      requestStream: false,
      responseType: EditFavoritesResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

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

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

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
