/* eslint-disable */
import Long from "long";
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import {
  InstrumentType,
  instrumentTypeFromJSON,
  instrumentTypeToJSON,
  MoneyValue,
  Ping,
  PingDelaySettings,
  Quotation,
} from "./common.js";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Статус запрашиваемых операций. */
export enum OperationState {
  /** OPERATION_STATE_UNSPECIFIED - Статус операции не определён. */
  OPERATION_STATE_UNSPECIFIED = 0,
  /** OPERATION_STATE_EXECUTED - Исполнена частично или полностью. */
  OPERATION_STATE_EXECUTED = 1,
  /** OPERATION_STATE_CANCELED - Отменена. */
  OPERATION_STATE_CANCELED = 2,
  /** OPERATION_STATE_PROGRESS - Исполняется. */
  OPERATION_STATE_PROGRESS = 3,
  UNRECOGNIZED = -1,
}

export function operationStateFromJSON(object: any): OperationState {
  switch (object) {
    case 0:
    case "OPERATION_STATE_UNSPECIFIED":
      return OperationState.OPERATION_STATE_UNSPECIFIED;
    case 1:
    case "OPERATION_STATE_EXECUTED":
      return OperationState.OPERATION_STATE_EXECUTED;
    case 2:
    case "OPERATION_STATE_CANCELED":
      return OperationState.OPERATION_STATE_CANCELED;
    case 3:
    case "OPERATION_STATE_PROGRESS":
      return OperationState.OPERATION_STATE_PROGRESS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationState.UNRECOGNIZED;
  }
}

export function operationStateToJSON(object: OperationState): string {
  switch (object) {
    case OperationState.OPERATION_STATE_UNSPECIFIED:
      return "OPERATION_STATE_UNSPECIFIED";
    case OperationState.OPERATION_STATE_EXECUTED:
      return "OPERATION_STATE_EXECUTED";
    case OperationState.OPERATION_STATE_CANCELED:
      return "OPERATION_STATE_CANCELED";
    case OperationState.OPERATION_STATE_PROGRESS:
      return "OPERATION_STATE_PROGRESS";
    case OperationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Тип операции. */
export enum OperationType {
  /** OPERATION_TYPE_UNSPECIFIED - Тип операции не определён. */
  OPERATION_TYPE_UNSPECIFIED = 0,
  /** OPERATION_TYPE_INPUT - Пополнение брокерского счёта. */
  OPERATION_TYPE_INPUT = 1,
  /** OPERATION_TYPE_BOND_TAX - Удержание НДФЛ по купонам. */
  OPERATION_TYPE_BOND_TAX = 2,
  /** OPERATION_TYPE_OUTPUT_SECURITIES - Вывод ЦБ. */
  OPERATION_TYPE_OUTPUT_SECURITIES = 3,
  /** OPERATION_TYPE_OVERNIGHT - Доход по сделке РЕПО овернайт. */
  OPERATION_TYPE_OVERNIGHT = 4,
  /** OPERATION_TYPE_TAX - Удержание налога. */
  OPERATION_TYPE_TAX = 5,
  /** OPERATION_TYPE_BOND_REPAYMENT_FULL - Полное погашение облигаций. */
  OPERATION_TYPE_BOND_REPAYMENT_FULL = 6,
  /** OPERATION_TYPE_SELL_CARD - Продажа ЦБ с карты. */
  OPERATION_TYPE_SELL_CARD = 7,
  /** OPERATION_TYPE_DIVIDEND_TAX - Удержание налога по дивидендам. */
  OPERATION_TYPE_DIVIDEND_TAX = 8,
  /** OPERATION_TYPE_OUTPUT - Вывод денежных средств. */
  OPERATION_TYPE_OUTPUT = 9,
  /** OPERATION_TYPE_BOND_REPAYMENT - Частичное погашение облигаций. */
  OPERATION_TYPE_BOND_REPAYMENT = 10,
  /** OPERATION_TYPE_TAX_CORRECTION - Корректировка налога. */
  OPERATION_TYPE_TAX_CORRECTION = 11,
  /** OPERATION_TYPE_SERVICE_FEE - Удержание комиссии за обслуживание брокерского счёта. */
  OPERATION_TYPE_SERVICE_FEE = 12,
  /** OPERATION_TYPE_BENEFIT_TAX - Удержание налога за материальную выгоду. */
  OPERATION_TYPE_BENEFIT_TAX = 13,
  /** OPERATION_TYPE_MARGIN_FEE - Удержание комиссии за непокрытую позицию. */
  OPERATION_TYPE_MARGIN_FEE = 14,
  /** OPERATION_TYPE_BUY - Покупка ЦБ. */
  OPERATION_TYPE_BUY = 15,
  /** OPERATION_TYPE_BUY_CARD - Покупка ЦБ с карты. */
  OPERATION_TYPE_BUY_CARD = 16,
  /** OPERATION_TYPE_INPUT_SECURITIES - Перевод ценных бумаг из другого депозитария. */
  OPERATION_TYPE_INPUT_SECURITIES = 17,
  /** OPERATION_TYPE_SELL_MARGIN - Продажа в результате Margin-call. */
  OPERATION_TYPE_SELL_MARGIN = 18,
  /** OPERATION_TYPE_BROKER_FEE - Удержание комиссии за операцию. */
  OPERATION_TYPE_BROKER_FEE = 19,
  /** OPERATION_TYPE_BUY_MARGIN - Покупка в результате Margin-call. */
  OPERATION_TYPE_BUY_MARGIN = 20,
  /** OPERATION_TYPE_DIVIDEND - Выплата дивидендов. */
  OPERATION_TYPE_DIVIDEND = 21,
  /** OPERATION_TYPE_SELL - Продажа ЦБ. */
  OPERATION_TYPE_SELL = 22,
  /** OPERATION_TYPE_COUPON - Выплата купонов. */
  OPERATION_TYPE_COUPON = 23,
  /** OPERATION_TYPE_SUCCESS_FEE - Удержание комиссии SuccessFee. */
  OPERATION_TYPE_SUCCESS_FEE = 24,
  /** OPERATION_TYPE_DIVIDEND_TRANSFER - Передача дивидендного дохода. */
  OPERATION_TYPE_DIVIDEND_TRANSFER = 25,
  /** OPERATION_TYPE_ACCRUING_VARMARGIN - Зачисление вариационной маржи. */
  OPERATION_TYPE_ACCRUING_VARMARGIN = 26,
  /** OPERATION_TYPE_WRITING_OFF_VARMARGIN - Списание вариационной маржи. */
  OPERATION_TYPE_WRITING_OFF_VARMARGIN = 27,
  /** OPERATION_TYPE_DELIVERY_BUY - Покупка в рамках экспирации фьючерсного контракта. */
  OPERATION_TYPE_DELIVERY_BUY = 28,
  /** OPERATION_TYPE_DELIVERY_SELL - Продажа в рамках экспирации фьючерсного контракта. */
  OPERATION_TYPE_DELIVERY_SELL = 29,
  /** OPERATION_TYPE_TRACK_MFEE - Комиссия за управление по счёту автоследования. */
  OPERATION_TYPE_TRACK_MFEE = 30,
  /** OPERATION_TYPE_TRACK_PFEE - Комиссия за результат по счёту автоследования. */
  OPERATION_TYPE_TRACK_PFEE = 31,
  /** OPERATION_TYPE_TAX_PROGRESSIVE - Удержание налога по ставке 15%. */
  OPERATION_TYPE_TAX_PROGRESSIVE = 32,
  /** OPERATION_TYPE_BOND_TAX_PROGRESSIVE - Удержание налога по купонам по ставке 15%. */
  OPERATION_TYPE_BOND_TAX_PROGRESSIVE = 33,
  /** OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE - Удержание налога по дивидендам по ставке 15%. */
  OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE = 34,
  /** OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE - Удержание налога за материальную выгоду по ставке 15%. */
  OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE = 35,
  /** OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE - Корректировка налога по ставке 15%. */
  OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE = 36,
  /** OPERATION_TYPE_TAX_REPO_PROGRESSIVE - Удержание налога за возмещение по сделкам РЕПО по ставке 15%. */
  OPERATION_TYPE_TAX_REPO_PROGRESSIVE = 37,
  /** OPERATION_TYPE_TAX_REPO - Удержание налога за возмещение по сделкам РЕПО. */
  OPERATION_TYPE_TAX_REPO = 38,
  /** OPERATION_TYPE_TAX_REPO_HOLD - Удержание налога по сделкам РЕПО. */
  OPERATION_TYPE_TAX_REPO_HOLD = 39,
  /** OPERATION_TYPE_TAX_REPO_REFUND - Возврат налога по сделкам РЕПО. */
  OPERATION_TYPE_TAX_REPO_REFUND = 40,
  /** OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE - Удержание налога по сделкам РЕПО по ставке 15%. */
  OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE = 41,
  /** OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE - Возврат налога по сделкам РЕПО по ставке 15%. */
  OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE = 42,
  /** OPERATION_TYPE_DIV_EXT - Выплата дивидендов на карту. */
  OPERATION_TYPE_DIV_EXT = 43,
  /** OPERATION_TYPE_TAX_CORRECTION_COUPON - Корректировка налога по купонам. */
  OPERATION_TYPE_TAX_CORRECTION_COUPON = 44,
  /** OPERATION_TYPE_CASH_FEE - Комиссия за валютный остаток. */
  OPERATION_TYPE_CASH_FEE = 45,
  /** OPERATION_TYPE_OUT_FEE - Комиссия за вывод валюты с брокерского счёта. */
  OPERATION_TYPE_OUT_FEE = 46,
  /** OPERATION_TYPE_OUT_STAMP_DUTY - Гербовый сбор. */
  OPERATION_TYPE_OUT_STAMP_DUTY = 47,
  /** OPERATION_TYPE_OUTPUT_SWIFT - SWIFT-перевод. */
  OPERATION_TYPE_OUTPUT_SWIFT = 50,
  /** OPERATION_TYPE_INPUT_SWIFT - SWIFT-перевод. */
  OPERATION_TYPE_INPUT_SWIFT = 51,
  /** OPERATION_TYPE_OUTPUT_ACQUIRING - Перевод на карту. */
  OPERATION_TYPE_OUTPUT_ACQUIRING = 53,
  /** OPERATION_TYPE_INPUT_ACQUIRING - Перевод с карты. */
  OPERATION_TYPE_INPUT_ACQUIRING = 54,
  /** OPERATION_TYPE_OUTPUT_PENALTY - Комиссия за вывод средств. */
  OPERATION_TYPE_OUTPUT_PENALTY = 55,
  /** OPERATION_TYPE_ADVICE_FEE - Списание оплаты за сервис Советов. */
  OPERATION_TYPE_ADVICE_FEE = 56,
  /** OPERATION_TYPE_TRANS_IIS_BS - Перевод ценных бумаг с ИИС на брокерский счёт. */
  OPERATION_TYPE_TRANS_IIS_BS = 57,
  /** OPERATION_TYPE_TRANS_BS_BS - Перевод ценных бумаг с одного брокерского счёта на другой. */
  OPERATION_TYPE_TRANS_BS_BS = 58,
  /** OPERATION_TYPE_OUT_MULTI - Вывод денежных средств со счёта. */
  OPERATION_TYPE_OUT_MULTI = 59,
  /** OPERATION_TYPE_INP_MULTI - Пополнение денежных средств со счёта. */
  OPERATION_TYPE_INP_MULTI = 60,
  /** OPERATION_TYPE_OVER_PLACEMENT - Размещение биржевого овернайта. */
  OPERATION_TYPE_OVER_PLACEMENT = 61,
  /** OPERATION_TYPE_OVER_COM - Списание комиссии. */
  OPERATION_TYPE_OVER_COM = 62,
  /** OPERATION_TYPE_OVER_INCOME - Доход от оверанайта. */
  OPERATION_TYPE_OVER_INCOME = 63,
  /** OPERATION_TYPE_OPTION_EXPIRATION - Экспирация опциона. */
  OPERATION_TYPE_OPTION_EXPIRATION = 64,
  /** OPERATION_TYPE_FUTURE_EXPIRATION - Экспирация фьючерса. */
  OPERATION_TYPE_FUTURE_EXPIRATION = 65,
  UNRECOGNIZED = -1,
}

export function operationTypeFromJSON(object: any): OperationType {
  switch (object) {
    case 0:
    case "OPERATION_TYPE_UNSPECIFIED":
      return OperationType.OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "OPERATION_TYPE_INPUT":
      return OperationType.OPERATION_TYPE_INPUT;
    case 2:
    case "OPERATION_TYPE_BOND_TAX":
      return OperationType.OPERATION_TYPE_BOND_TAX;
    case 3:
    case "OPERATION_TYPE_OUTPUT_SECURITIES":
      return OperationType.OPERATION_TYPE_OUTPUT_SECURITIES;
    case 4:
    case "OPERATION_TYPE_OVERNIGHT":
      return OperationType.OPERATION_TYPE_OVERNIGHT;
    case 5:
    case "OPERATION_TYPE_TAX":
      return OperationType.OPERATION_TYPE_TAX;
    case 6:
    case "OPERATION_TYPE_BOND_REPAYMENT_FULL":
      return OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL;
    case 7:
    case "OPERATION_TYPE_SELL_CARD":
      return OperationType.OPERATION_TYPE_SELL_CARD;
    case 8:
    case "OPERATION_TYPE_DIVIDEND_TAX":
      return OperationType.OPERATION_TYPE_DIVIDEND_TAX;
    case 9:
    case "OPERATION_TYPE_OUTPUT":
      return OperationType.OPERATION_TYPE_OUTPUT;
    case 10:
    case "OPERATION_TYPE_BOND_REPAYMENT":
      return OperationType.OPERATION_TYPE_BOND_REPAYMENT;
    case 11:
    case "OPERATION_TYPE_TAX_CORRECTION":
      return OperationType.OPERATION_TYPE_TAX_CORRECTION;
    case 12:
    case "OPERATION_TYPE_SERVICE_FEE":
      return OperationType.OPERATION_TYPE_SERVICE_FEE;
    case 13:
    case "OPERATION_TYPE_BENEFIT_TAX":
      return OperationType.OPERATION_TYPE_BENEFIT_TAX;
    case 14:
    case "OPERATION_TYPE_MARGIN_FEE":
      return OperationType.OPERATION_TYPE_MARGIN_FEE;
    case 15:
    case "OPERATION_TYPE_BUY":
      return OperationType.OPERATION_TYPE_BUY;
    case 16:
    case "OPERATION_TYPE_BUY_CARD":
      return OperationType.OPERATION_TYPE_BUY_CARD;
    case 17:
    case "OPERATION_TYPE_INPUT_SECURITIES":
      return OperationType.OPERATION_TYPE_INPUT_SECURITIES;
    case 18:
    case "OPERATION_TYPE_SELL_MARGIN":
      return OperationType.OPERATION_TYPE_SELL_MARGIN;
    case 19:
    case "OPERATION_TYPE_BROKER_FEE":
      return OperationType.OPERATION_TYPE_BROKER_FEE;
    case 20:
    case "OPERATION_TYPE_BUY_MARGIN":
      return OperationType.OPERATION_TYPE_BUY_MARGIN;
    case 21:
    case "OPERATION_TYPE_DIVIDEND":
      return OperationType.OPERATION_TYPE_DIVIDEND;
    case 22:
    case "OPERATION_TYPE_SELL":
      return OperationType.OPERATION_TYPE_SELL;
    case 23:
    case "OPERATION_TYPE_COUPON":
      return OperationType.OPERATION_TYPE_COUPON;
    case 24:
    case "OPERATION_TYPE_SUCCESS_FEE":
      return OperationType.OPERATION_TYPE_SUCCESS_FEE;
    case 25:
    case "OPERATION_TYPE_DIVIDEND_TRANSFER":
      return OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER;
    case 26:
    case "OPERATION_TYPE_ACCRUING_VARMARGIN":
      return OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN;
    case 27:
    case "OPERATION_TYPE_WRITING_OFF_VARMARGIN":
      return OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN;
    case 28:
    case "OPERATION_TYPE_DELIVERY_BUY":
      return OperationType.OPERATION_TYPE_DELIVERY_BUY;
    case 29:
    case "OPERATION_TYPE_DELIVERY_SELL":
      return OperationType.OPERATION_TYPE_DELIVERY_SELL;
    case 30:
    case "OPERATION_TYPE_TRACK_MFEE":
      return OperationType.OPERATION_TYPE_TRACK_MFEE;
    case 31:
    case "OPERATION_TYPE_TRACK_PFEE":
      return OperationType.OPERATION_TYPE_TRACK_PFEE;
    case 32:
    case "OPERATION_TYPE_TAX_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_TAX_PROGRESSIVE;
    case 33:
    case "OPERATION_TYPE_BOND_TAX_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE;
    case 34:
    case "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE;
    case 35:
    case "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE;
    case 36:
    case "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE;
    case 37:
    case "OPERATION_TYPE_TAX_REPO_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE;
    case 38:
    case "OPERATION_TYPE_TAX_REPO":
      return OperationType.OPERATION_TYPE_TAX_REPO;
    case 39:
    case "OPERATION_TYPE_TAX_REPO_HOLD":
      return OperationType.OPERATION_TYPE_TAX_REPO_HOLD;
    case 40:
    case "OPERATION_TYPE_TAX_REPO_REFUND":
      return OperationType.OPERATION_TYPE_TAX_REPO_REFUND;
    case 41:
    case "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE;
    case 42:
    case "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE":
      return OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE;
    case 43:
    case "OPERATION_TYPE_DIV_EXT":
      return OperationType.OPERATION_TYPE_DIV_EXT;
    case 44:
    case "OPERATION_TYPE_TAX_CORRECTION_COUPON":
      return OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON;
    case 45:
    case "OPERATION_TYPE_CASH_FEE":
      return OperationType.OPERATION_TYPE_CASH_FEE;
    case 46:
    case "OPERATION_TYPE_OUT_FEE":
      return OperationType.OPERATION_TYPE_OUT_FEE;
    case 47:
    case "OPERATION_TYPE_OUT_STAMP_DUTY":
      return OperationType.OPERATION_TYPE_OUT_STAMP_DUTY;
    case 50:
    case "OPERATION_TYPE_OUTPUT_SWIFT":
      return OperationType.OPERATION_TYPE_OUTPUT_SWIFT;
    case 51:
    case "OPERATION_TYPE_INPUT_SWIFT":
      return OperationType.OPERATION_TYPE_INPUT_SWIFT;
    case 53:
    case "OPERATION_TYPE_OUTPUT_ACQUIRING":
      return OperationType.OPERATION_TYPE_OUTPUT_ACQUIRING;
    case 54:
    case "OPERATION_TYPE_INPUT_ACQUIRING":
      return OperationType.OPERATION_TYPE_INPUT_ACQUIRING;
    case 55:
    case "OPERATION_TYPE_OUTPUT_PENALTY":
      return OperationType.OPERATION_TYPE_OUTPUT_PENALTY;
    case 56:
    case "OPERATION_TYPE_ADVICE_FEE":
      return OperationType.OPERATION_TYPE_ADVICE_FEE;
    case 57:
    case "OPERATION_TYPE_TRANS_IIS_BS":
      return OperationType.OPERATION_TYPE_TRANS_IIS_BS;
    case 58:
    case "OPERATION_TYPE_TRANS_BS_BS":
      return OperationType.OPERATION_TYPE_TRANS_BS_BS;
    case 59:
    case "OPERATION_TYPE_OUT_MULTI":
      return OperationType.OPERATION_TYPE_OUT_MULTI;
    case 60:
    case "OPERATION_TYPE_INP_MULTI":
      return OperationType.OPERATION_TYPE_INP_MULTI;
    case 61:
    case "OPERATION_TYPE_OVER_PLACEMENT":
      return OperationType.OPERATION_TYPE_OVER_PLACEMENT;
    case 62:
    case "OPERATION_TYPE_OVER_COM":
      return OperationType.OPERATION_TYPE_OVER_COM;
    case 63:
    case "OPERATION_TYPE_OVER_INCOME":
      return OperationType.OPERATION_TYPE_OVER_INCOME;
    case 64:
    case "OPERATION_TYPE_OPTION_EXPIRATION":
      return OperationType.OPERATION_TYPE_OPTION_EXPIRATION;
    case 65:
    case "OPERATION_TYPE_FUTURE_EXPIRATION":
      return OperationType.OPERATION_TYPE_FUTURE_EXPIRATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OperationType.UNRECOGNIZED;
  }
}

export function operationTypeToJSON(object: OperationType): string {
  switch (object) {
    case OperationType.OPERATION_TYPE_UNSPECIFIED:
      return "OPERATION_TYPE_UNSPECIFIED";
    case OperationType.OPERATION_TYPE_INPUT:
      return "OPERATION_TYPE_INPUT";
    case OperationType.OPERATION_TYPE_BOND_TAX:
      return "OPERATION_TYPE_BOND_TAX";
    case OperationType.OPERATION_TYPE_OUTPUT_SECURITIES:
      return "OPERATION_TYPE_OUTPUT_SECURITIES";
    case OperationType.OPERATION_TYPE_OVERNIGHT:
      return "OPERATION_TYPE_OVERNIGHT";
    case OperationType.OPERATION_TYPE_TAX:
      return "OPERATION_TYPE_TAX";
    case OperationType.OPERATION_TYPE_BOND_REPAYMENT_FULL:
      return "OPERATION_TYPE_BOND_REPAYMENT_FULL";
    case OperationType.OPERATION_TYPE_SELL_CARD:
      return "OPERATION_TYPE_SELL_CARD";
    case OperationType.OPERATION_TYPE_DIVIDEND_TAX:
      return "OPERATION_TYPE_DIVIDEND_TAX";
    case OperationType.OPERATION_TYPE_OUTPUT:
      return "OPERATION_TYPE_OUTPUT";
    case OperationType.OPERATION_TYPE_BOND_REPAYMENT:
      return "OPERATION_TYPE_BOND_REPAYMENT";
    case OperationType.OPERATION_TYPE_TAX_CORRECTION:
      return "OPERATION_TYPE_TAX_CORRECTION";
    case OperationType.OPERATION_TYPE_SERVICE_FEE:
      return "OPERATION_TYPE_SERVICE_FEE";
    case OperationType.OPERATION_TYPE_BENEFIT_TAX:
      return "OPERATION_TYPE_BENEFIT_TAX";
    case OperationType.OPERATION_TYPE_MARGIN_FEE:
      return "OPERATION_TYPE_MARGIN_FEE";
    case OperationType.OPERATION_TYPE_BUY:
      return "OPERATION_TYPE_BUY";
    case OperationType.OPERATION_TYPE_BUY_CARD:
      return "OPERATION_TYPE_BUY_CARD";
    case OperationType.OPERATION_TYPE_INPUT_SECURITIES:
      return "OPERATION_TYPE_INPUT_SECURITIES";
    case OperationType.OPERATION_TYPE_SELL_MARGIN:
      return "OPERATION_TYPE_SELL_MARGIN";
    case OperationType.OPERATION_TYPE_BROKER_FEE:
      return "OPERATION_TYPE_BROKER_FEE";
    case OperationType.OPERATION_TYPE_BUY_MARGIN:
      return "OPERATION_TYPE_BUY_MARGIN";
    case OperationType.OPERATION_TYPE_DIVIDEND:
      return "OPERATION_TYPE_DIVIDEND";
    case OperationType.OPERATION_TYPE_SELL:
      return "OPERATION_TYPE_SELL";
    case OperationType.OPERATION_TYPE_COUPON:
      return "OPERATION_TYPE_COUPON";
    case OperationType.OPERATION_TYPE_SUCCESS_FEE:
      return "OPERATION_TYPE_SUCCESS_FEE";
    case OperationType.OPERATION_TYPE_DIVIDEND_TRANSFER:
      return "OPERATION_TYPE_DIVIDEND_TRANSFER";
    case OperationType.OPERATION_TYPE_ACCRUING_VARMARGIN:
      return "OPERATION_TYPE_ACCRUING_VARMARGIN";
    case OperationType.OPERATION_TYPE_WRITING_OFF_VARMARGIN:
      return "OPERATION_TYPE_WRITING_OFF_VARMARGIN";
    case OperationType.OPERATION_TYPE_DELIVERY_BUY:
      return "OPERATION_TYPE_DELIVERY_BUY";
    case OperationType.OPERATION_TYPE_DELIVERY_SELL:
      return "OPERATION_TYPE_DELIVERY_SELL";
    case OperationType.OPERATION_TYPE_TRACK_MFEE:
      return "OPERATION_TYPE_TRACK_MFEE";
    case OperationType.OPERATION_TYPE_TRACK_PFEE:
      return "OPERATION_TYPE_TRACK_PFEE";
    case OperationType.OPERATION_TYPE_TAX_PROGRESSIVE:
      return "OPERATION_TYPE_TAX_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_BOND_TAX_PROGRESSIVE:
      return "OPERATION_TYPE_BOND_TAX_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE:
      return "OPERATION_TYPE_DIVIDEND_TAX_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE:
      return "OPERATION_TYPE_BENEFIT_TAX_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE:
      return "OPERATION_TYPE_TAX_CORRECTION_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_TAX_REPO_PROGRESSIVE:
      return "OPERATION_TYPE_TAX_REPO_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_TAX_REPO:
      return "OPERATION_TYPE_TAX_REPO";
    case OperationType.OPERATION_TYPE_TAX_REPO_HOLD:
      return "OPERATION_TYPE_TAX_REPO_HOLD";
    case OperationType.OPERATION_TYPE_TAX_REPO_REFUND:
      return "OPERATION_TYPE_TAX_REPO_REFUND";
    case OperationType.OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE:
      return "OPERATION_TYPE_TAX_REPO_HOLD_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE:
      return "OPERATION_TYPE_TAX_REPO_REFUND_PROGRESSIVE";
    case OperationType.OPERATION_TYPE_DIV_EXT:
      return "OPERATION_TYPE_DIV_EXT";
    case OperationType.OPERATION_TYPE_TAX_CORRECTION_COUPON:
      return "OPERATION_TYPE_TAX_CORRECTION_COUPON";
    case OperationType.OPERATION_TYPE_CASH_FEE:
      return "OPERATION_TYPE_CASH_FEE";
    case OperationType.OPERATION_TYPE_OUT_FEE:
      return "OPERATION_TYPE_OUT_FEE";
    case OperationType.OPERATION_TYPE_OUT_STAMP_DUTY:
      return "OPERATION_TYPE_OUT_STAMP_DUTY";
    case OperationType.OPERATION_TYPE_OUTPUT_SWIFT:
      return "OPERATION_TYPE_OUTPUT_SWIFT";
    case OperationType.OPERATION_TYPE_INPUT_SWIFT:
      return "OPERATION_TYPE_INPUT_SWIFT";
    case OperationType.OPERATION_TYPE_OUTPUT_ACQUIRING:
      return "OPERATION_TYPE_OUTPUT_ACQUIRING";
    case OperationType.OPERATION_TYPE_INPUT_ACQUIRING:
      return "OPERATION_TYPE_INPUT_ACQUIRING";
    case OperationType.OPERATION_TYPE_OUTPUT_PENALTY:
      return "OPERATION_TYPE_OUTPUT_PENALTY";
    case OperationType.OPERATION_TYPE_ADVICE_FEE:
      return "OPERATION_TYPE_ADVICE_FEE";
    case OperationType.OPERATION_TYPE_TRANS_IIS_BS:
      return "OPERATION_TYPE_TRANS_IIS_BS";
    case OperationType.OPERATION_TYPE_TRANS_BS_BS:
      return "OPERATION_TYPE_TRANS_BS_BS";
    case OperationType.OPERATION_TYPE_OUT_MULTI:
      return "OPERATION_TYPE_OUT_MULTI";
    case OperationType.OPERATION_TYPE_INP_MULTI:
      return "OPERATION_TYPE_INP_MULTI";
    case OperationType.OPERATION_TYPE_OVER_PLACEMENT:
      return "OPERATION_TYPE_OVER_PLACEMENT";
    case OperationType.OPERATION_TYPE_OVER_COM:
      return "OPERATION_TYPE_OVER_COM";
    case OperationType.OPERATION_TYPE_OVER_INCOME:
      return "OPERATION_TYPE_OVER_INCOME";
    case OperationType.OPERATION_TYPE_OPTION_EXPIRATION:
      return "OPERATION_TYPE_OPTION_EXPIRATION";
    case OperationType.OPERATION_TYPE_FUTURE_EXPIRATION:
      return "OPERATION_TYPE_FUTURE_EXPIRATION";
    case OperationType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Результат подписки. */
export enum PortfolioSubscriptionStatus {
  /** PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED - Тип не определён. */
  PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
  PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS = 1,
  /** PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND - Счёт не найден или недостаточно прав. */
  PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
  /** PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR - Произошла ошибка. */
  PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
  UNRECOGNIZED = -1,
}

export function portfolioSubscriptionStatusFromJSON(object: any): PortfolioSubscriptionStatus {
  switch (object) {
    case 0:
    case "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED":
      return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS":
      return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS;
    case 2:
    case "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND":
      return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND;
    case 3:
    case "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR":
      return PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PortfolioSubscriptionStatus.UNRECOGNIZED;
  }
}

export function portfolioSubscriptionStatusToJSON(object: PortfolioSubscriptionStatus): string {
  switch (object) {
    case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "PORTFOLIO_SUBSCRIPTION_STATUS_UNSPECIFIED";
    case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS:
      return "PORTFOLIO_SUBSCRIPTION_STATUS_SUCCESS";
    case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND:
      return "PORTFOLIO_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
    case PortfolioSubscriptionStatus.PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR:
      return "PORTFOLIO_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    case PortfolioSubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Результат подписки. */
export enum PositionsAccountSubscriptionStatus {
  /** POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED - Тип не определён. */
  POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED = 0,
  /** POSITIONS_SUBSCRIPTION_STATUS_SUCCESS - Успешно. */
  POSITIONS_SUBSCRIPTION_STATUS_SUCCESS = 1,
  /** POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND - Счёт не найден или недостаточно прав. */
  POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND = 2,
  /** POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR - Произошла ошибка. */
  POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR = 3,
  UNRECOGNIZED = -1,
}

export function positionsAccountSubscriptionStatusFromJSON(object: any): PositionsAccountSubscriptionStatus {
  switch (object) {
    case 0:
    case "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED":
      return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED;
    case 1:
    case "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS":
      return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_SUCCESS;
    case 2:
    case "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND":
      return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND;
    case 3:
    case "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR":
      return PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PositionsAccountSubscriptionStatus.UNRECOGNIZED;
  }
}

export function positionsAccountSubscriptionStatusToJSON(object: PositionsAccountSubscriptionStatus): string {
  switch (object) {
    case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED:
      return "POSITIONS_SUBSCRIPTION_STATUS_UNSPECIFIED";
    case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_SUCCESS:
      return "POSITIONS_SUBSCRIPTION_STATUS_SUCCESS";
    case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND:
      return "POSITIONS_SUBSCRIPTION_STATUS_ACCOUNT_NOT_FOUND";
    case PositionsAccountSubscriptionStatus.POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR:
      return "POSITIONS_SUBSCRIPTION_STATUS_INTERNAL_ERROR";
    case PositionsAccountSubscriptionStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Запрос получения списка операций по счёту. */
export interface OperationsRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода по UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание периода по UTC. */
  to?:
    | Date
    | undefined;
  /** Статус запрашиваемых операций. */
  state?:
    | OperationState
    | undefined;
  /** FIGI-идентификатор инструмента для фильтрации. */
  figi?: string | undefined;
}

/** Список операций. */
export interface OperationsResponse {
  /** Массив операций. */
  operations: Operation[];
}

/** Данные по операции. */
export interface Operation {
  /** Идентификатор операции. */
  id: string;
  /** Идентификатор родительской операции. */
  parentOperationId: string;
  /** Валюта операции. */
  currency: string;
  /** Сумма операции. */
  payment?:
    | MoneyValue
    | undefined;
  /** Цена операции за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  price?:
    | MoneyValue
    | undefined;
  /** Статус операции. */
  state: OperationState;
  /** Количество единиц инструмента. */
  quantity: number;
  /** Неисполненный остаток по сделке. */
  quantityRest: number;
  /** FIGI-идентификатор инструмента, связанного с операцией. */
  figi: string;
  /** Тип инструмента. Возможные значения: </br></br>`bond` — облигация; </br>`share` — акция; </br>`currency` — валюта; </br>`etf` — фонд; </br>`futures` — фьючерс. */
  instrumentType: string;
  /** Дата и время операции в формате часовом поясе UTC. */
  date?:
    | Date
    | undefined;
  /** Текстовое описание типа операции. */
  type: string;
  /** Тип операции. */
  operationType: OperationType;
  /** Массив сделок. */
  trades: OperationTrade[];
  /** Идентификатор актива */
  assetUid: string;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** Массив дочерних операций. */
  childOperations: ChildOperationItem[];
}

/** Сделка по операции. */
export interface OperationTrade {
  /** Идентификатор сделки. */
  tradeId: string;
  /** Дата и время сделки по UTC. */
  dateTime?:
    | Date
    | undefined;
  /** Количество инструментов. */
  quantity: number;
  /** Цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  price?: MoneyValue | undefined;
}

/** Запрос получения текущего портфеля по счёту. */
export interface PortfolioRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
  /** Валюта, в которой нужно рассчитать портфель. */
  currency?: PortfolioRequest_CurrencyRequest | undefined;
}

export enum PortfolioRequest_CurrencyRequest {
  /** RUB - Рубли */
  RUB = 0,
  /** USD - Доллары */
  USD = 1,
  /** EUR - Евро */
  EUR = 2,
  UNRECOGNIZED = -1,
}

export function portfolioRequest_CurrencyRequestFromJSON(object: any): PortfolioRequest_CurrencyRequest {
  switch (object) {
    case 0:
    case "RUB":
      return PortfolioRequest_CurrencyRequest.RUB;
    case 1:
    case "USD":
      return PortfolioRequest_CurrencyRequest.USD;
    case 2:
    case "EUR":
      return PortfolioRequest_CurrencyRequest.EUR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PortfolioRequest_CurrencyRequest.UNRECOGNIZED;
  }
}

export function portfolioRequest_CurrencyRequestToJSON(object: PortfolioRequest_CurrencyRequest): string {
  switch (object) {
    case PortfolioRequest_CurrencyRequest.RUB:
      return "RUB";
    case PortfolioRequest_CurrencyRequest.USD:
      return "USD";
    case PortfolioRequest_CurrencyRequest.EUR:
      return "EUR";
    case PortfolioRequest_CurrencyRequest.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Текущий портфель по счёту. */
export interface PortfolioResponse {
  /** Общая стоимость акций в портфеле. */
  totalAmountShares?:
    | MoneyValue
    | undefined;
  /** Общая стоимость облигаций в портфеле. */
  totalAmountBonds?:
    | MoneyValue
    | undefined;
  /** Общая стоимость фондов в портфеле. */
  totalAmountEtf?:
    | MoneyValue
    | undefined;
  /** Общая стоимость валют в портфеле. */
  totalAmountCurrencies?:
    | MoneyValue
    | undefined;
  /** Общая стоимость фьючерсов в портфеле. */
  totalAmountFutures?:
    | MoneyValue
    | undefined;
  /** Текущая относительная доходность портфеля в %. */
  expectedYield?:
    | Quotation
    | undefined;
  /** Список позиций портфеля. */
  positions: PortfolioPosition[];
  /** Идентификатор счёта пользователя. */
  accountId: string;
  /** Общая стоимость опционов в портфеле. */
  totalAmountOptions?:
    | MoneyValue
    | undefined;
  /** Общая стоимость структурных нот в портфеле. */
  totalAmountSp?:
    | MoneyValue
    | undefined;
  /** Общая стоимость портфеля. */
  totalAmountPortfolio?:
    | MoneyValue
    | undefined;
  /** Массив виртуальных позиций портфеля. */
  virtualPositions: VirtualPortfolioPosition[];
  /** Рассчитанная доходность портфеля за день в рублях */
  dailyYield?:
    | MoneyValue
    | undefined;
  /** Относительная доходность в день в % */
  dailyYieldRelative?: Quotation | undefined;
}

/** Запрос позиций портфеля по счёту. */
export interface PositionsRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Список позиций по счёту. */
export interface PositionsResponse {
  /** Массив валютных позиций портфеля. */
  money: MoneyValue[];
  /** Массив заблокированных валютных позиций портфеля. */
  blocked: MoneyValue[];
  /** Список ценно-бумажных позиций портфеля. */
  securities: PositionsSecurities[];
  /** Признак идущей выгрузки лимитов в данный момент. */
  limitsLoadingInProgress: boolean;
  /** Список фьючерсов портфеля. */
  futures: PositionsFutures[];
  /** Список опционов портфеля. */
  options: PositionsOptions[];
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Запрос доступного остатка для вывода. */
export interface WithdrawLimitsRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Доступный остаток для вывода. */
export interface WithdrawLimitsResponse {
  /** Массив валютных позиций портфеля. */
  money: MoneyValue[];
  /** Массив заблокированных валютных позиций портфеля. */
  blocked: MoneyValue[];
  /** Заблокировано под гарантийное обеспечение фьючерсов. */
  blockedGuarantee: MoneyValue[];
}

/** Позиции портфеля. */
export interface PortfolioPosition {
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Количество инструмента в портфеле в штуках. */
  quantity?:
    | Quotation
    | undefined;
  /** Средневзвешенная цена позиции. Для пересчёта возможна задержка до одной секунды. */
  averagePositionPrice?:
    | MoneyValue
    | undefined;
  /** Текущая рассчитанная доходность позиции. */
  expectedYield?:
    | Quotation
    | undefined;
  /** Текущий НКД. */
  currentNkd?:
    | MoneyValue
    | undefined;
  /**
   * Deprecated Средняя цена позиции в пунктах (для фьючерсов). Для пересчёта возможна задержка до одной секунды.
   *
   * @deprecated
   */
  averagePositionPricePt?:
    | Quotation
    | undefined;
  /** Текущая цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  currentPrice?:
    | MoneyValue
    | undefined;
  /** Средняя цена позиции по методу FIFO. Для пересчёта возможна задержка до одной секунды. */
  averagePositionPriceFifo?:
    | MoneyValue
    | undefined;
  /**
   * Deprecated Количество лотов в портфеле.
   *
   * @deprecated
   */
  quantityLots?:
    | Quotation
    | undefined;
  /** Заблокировано на бирже. */
  blocked: boolean;
  /** Количество бумаг, заблокированных выставленными заявками. */
  blockedLots?:
    | Quotation
    | undefined;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** Вариационная маржа. */
  varMargin?:
    | MoneyValue
    | undefined;
  /** Текущая рассчитанная доходность позиции. */
  expectedYieldFifo?:
    | Quotation
    | undefined;
  /** Рассчитанная доходность портфеля за день */
  dailyYield?: MoneyValue | undefined;
}

export interface VirtualPortfolioPosition {
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** FIGI-идентификатор инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Количество инструмента в портфеле в штуках. */
  quantity?:
    | Quotation
    | undefined;
  /** Средневзвешенная цена позиции. Для пересчёта возможна задержка до одной секунды. */
  averagePositionPrice?:
    | MoneyValue
    | undefined;
  /** Текущая рассчитанная доходность позиции. */
  expectedYield?:
    | Quotation
    | undefined;
  /** Текущая рассчитанная доходность позиции. */
  expectedYieldFifo?:
    | Quotation
    | undefined;
  /** Дата, до которой нужно продать виртуальные бумаги. После этой даты виртуальная позиция «сгораетт». */
  expireDate?:
    | Date
    | undefined;
  /** Текущая цена за 1 инструмент. Чтобы получить стоимость лота, нужно умножить на лотность инструмента. */
  currentPrice?:
    | MoneyValue
    | undefined;
  /** Средняя цена позиции по методу FIFO. Для пересчёта возможна задержка до одной секунды. */
  averagePositionPriceFifo?:
    | MoneyValue
    | undefined;
  /** Рассчитанная доходность портфеля за день */
  dailyYield?: MoneyValue | undefined;
}

/** Баланс позиции ценной бумаги. */
export interface PositionsSecurities {
  /** FIGI-идентификатор бумаги. */
  figi: string;
  /** Количество бумаг, заблокированных выставленными заявками. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** Заблокировано на бирже. */
  exchangeBlocked: boolean;
  /** Тип инструмента. */
  instrumentType: string;
}

/** Баланс фьючерса. */
export interface PositionsFutures {
  /** FIGI-идентификатор фьючерса. */
  figi: string;
  /** Количество бумаг, заблокированных выставленными заявками. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор  инструмента. */
  instrumentUid: string;
}

/** Баланс опциона. */
export interface PositionsOptions {
  /** Уникальный идентификатор позиции опциона. */
  positionUid: string;
  /** Уникальный идентификатор  инструмента. */
  instrumentUid: string;
  /** Количество бумаг, заблокированных выставленными заявками. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
}

export interface BrokerReportRequest {
  generateBrokerReportRequest?: GenerateBrokerReportRequest | undefined;
  getBrokerReportRequest?: GetBrokerReportRequest | undefined;
}

export interface BrokerReportResponse {
  generateBrokerReportResponse?: GenerateBrokerReportResponse | undefined;
  getBrokerReportResponse?: GetBrokerReportResponse | undefined;
}

export interface GenerateBrokerReportRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода по UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание периода по UTC. */
  to?: Date | undefined;
}

export interface GenerateBrokerReportResponse {
  /** Идентификатор задачи формирования брокерского отчёта. */
  taskId: string;
}

export interface GetBrokerReportRequest {
  /** Идентификатор задачи формирования брокерского отчёта. */
  taskId: string;
  /** Номер страницы отчёта, начинается с 1. Значение по умолчанию — 0. */
  page?: number | undefined;
}

export interface GetBrokerReportResponse {
  brokerReport: BrokerReport[];
  /** Количество записей в отчёте. */
  itemsCount: number;
  /** Количество страниц с данными отчёта, начинается с 0. */
  pagesCount: number;
  /** Текущая страница, начинается с 0. */
  page: number;
}

export interface BrokerReport {
  /** Номер сделки. */
  tradeId: string;
  /** Номер поручения. */
  orderId: string;
  /** FIGI-идентификаторинструмента. */
  figi: string;
  /** Признак исполнения. */
  executeSign: string;
  /** Дата и время заключения по UTC. */
  tradeDatetime?:
    | Date
    | undefined;
  /** Торговая площадка. */
  exchange: string;
  /** Режим торгов. */
  classCode: string;
  /** Вид сделки. */
  direction: string;
  /** Сокращённое наименование актива. */
  name: string;
  /** Код актива. */
  ticker: string;
  /** Цена за единицу. */
  price?:
    | MoneyValue
    | undefined;
  /** Количество. */
  quantity: number;
  /** Сумма без НКД. */
  orderAmount?:
    | MoneyValue
    | undefined;
  /** НКД. */
  aciValue?:
    | Quotation
    | undefined;
  /** Сумма сделки. */
  totalOrderAmount?:
    | MoneyValue
    | undefined;
  /** Комиссия брокера. */
  brokerCommission?:
    | MoneyValue
    | undefined;
  /** Комиссия биржи. */
  exchangeCommission?:
    | MoneyValue
    | undefined;
  /** Комиссия клирингового центра. */
  exchangeClearingCommission?:
    | MoneyValue
    | undefined;
  /** Ставка РЕПО, %. */
  repoRate?:
    | Quotation
    | undefined;
  /** Контрагент или брокерарокер. */
  party: string;
  /** Дата расчётов по UTC. */
  clearValueDate?:
    | Date
    | undefined;
  /** Дата поставки по UTC. */
  secValueDate?:
    | Date
    | undefined;
  /** Статус брокера. */
  brokerStatus: string;
  /** Тип договора. */
  separateAgreementType: string;
  /** Номер договора. */
  separateAgreementNumber: string;
  /** Дата договора. */
  separateAgreementDate: string;
  /** Тип расчёта по сделке. */
  deliveryType: string;
}

export interface GetDividendsForeignIssuerRequest {
  /** Объект запроса формирования отчёта. */
  generateDivForeignIssuerReport?:
    | GenerateDividendsForeignIssuerReportRequest
    | undefined;
  /** Объект запроса сформированного отчёта. */
  getDivForeignIssuerReport?: GetDividendsForeignIssuerReportRequest | undefined;
}

export interface GetDividendsForeignIssuerResponse {
  /** Объект результата задачи запуска формирования отчёта. */
  generateDivForeignIssuerReportResponse?:
    | GenerateDividendsForeignIssuerReportResponse
    | undefined;
  /** Отчёт «Справка о доходах за пределами РФ». */
  divForeignIssuerReport?: GetDividendsForeignIssuerReportResponse | undefined;
}

/** Объект запроса формирования отчёта «Справка о доходах за пределами РФ». */
export interface GenerateDividendsForeignIssuerReportRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода по UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание периода по UTC. Как правило, можно сформировать отчёт по дату на несколько дней меньше текущей. Начало и окончание периода должны быть в рамках одного календарного года. */
  to?: Date | undefined;
}

/** Объект запроса сформированного отчёта «Справка о доходах за пределами РФ». */
export interface GetDividendsForeignIssuerReportRequest {
  /** Идентификатор задачи формирования отчёта. */
  taskId: string;
  /** Номер страницы отчета (начинается с 0), значение по умолчанию: 0. */
  page?: number | undefined;
}

/** Объект результата задачи запуска формирования отчёта «Справка о доходах за пределами РФ». */
export interface GenerateDividendsForeignIssuerReportResponse {
  /** Идентификатор задачи формирования отчёта. */
  taskId: string;
}

export interface GetDividendsForeignIssuerReportResponse {
  dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
  /** Количество записей в отчёте. */
  itemsCount: number;
  /** Количество страниц с данными отчёта, начинается с 0. */
  pagesCount: number;
  /** Текущая страница, начинается с 0. */
  page: number;
}

/** Отчёт «Справка о доходах за пределами РФ». */
export interface DividendsForeignIssuerReport {
  /** Дата фиксации реестра. */
  recordDate?:
    | Date
    | undefined;
  /** Дата выплаты. */
  paymentDate?:
    | Date
    | undefined;
  /** Наименование ценной бумаги. */
  securityName: string;
  /** ISIN-идентификатор ценной бумаги. */
  isin: string;
  /** Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива. */
  issuerCountry: string;
  /** Количество ценных бумаг. */
  quantity: number;
  /** Выплаты на одну бумагу */
  dividend?:
    | Quotation
    | undefined;
  /** Комиссия внешних платёжных агентов. */
  externalCommission?:
    | Quotation
    | undefined;
  /** Сумма до удержания налога. */
  dividendGross?:
    | Quotation
    | undefined;
  /** Сумма налога, удержанного агентом. */
  tax?:
    | Quotation
    | undefined;
  /** Итоговая сумма выплаты. */
  dividendAmount?:
    | Quotation
    | undefined;
  /** Валюта. */
  currency: string;
}

/** Запрос установки stream-соединения. */
export interface PortfolioStreamRequest {
  /** Массив идентификаторов счётов пользователя. */
  accounts: string[];
  /** Запрос настройки пинга. */
  pingSettings?: PingDelaySettings | undefined;
}

/** Информация по позициям и доходностям портфелей. */
export interface PortfolioStreamResponse {
  /** Объект результата подписки. */
  subscriptions?:
    | PortfolioSubscriptionResult
    | undefined;
  /** Объект стриминга портфеля. */
  portfolio?:
    | PortfolioResponse
    | undefined;
  /** Проверка активности стрима. */
  ping?: Ping | undefined;
}

/** Объект результата подписки. */
export interface PortfolioSubscriptionResult {
  /** Массив счетов клиента. */
  accounts: AccountSubscriptionStatus[];
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Идентификатор открытого соединения */
  streamId: string;
}

/** Счёт клиента. */
export interface AccountSubscriptionStatus {
  /** Идентификатор счёта. */
  accountId: string;
  /** Результат подписки. */
  subscriptionStatus: PortfolioSubscriptionStatus;
}

/** Запрос списка операций по счёту с пагинацией. */
export interface GetOperationsByCursorRequest {
  /** Идентификатор счёта клиента, обязательный параметр. Остальные параметры опциональны. */
  accountId: string;
  /** Идентификатор инструмента — FIGI или UID инструмента. */
  instrumentId?:
    | string
    | undefined;
  /** Начало периода по UTC. */
  from?:
    | Date
    | undefined;
  /** Окончание периода по UTC. */
  to?:
    | Date
    | undefined;
  /** Идентификатор элемента, с которого начать формировать ответ. */
  cursor?:
    | string
    | undefined;
  /** Лимит количества операций. По умолчанию — `100`, максимальное значение — `1000`. */
  limit?:
    | number
    | undefined;
  /** Тип операции. Принимает значение из списка `OperationType`. */
  operationTypes: OperationType[];
  /** Статус запрашиваемых операций. Возможные значения указаны в `OperationState`. */
  state?:
    | OperationState
    | undefined;
  /** Флаг возврата комиссии. По умолчанию — `false`. */
  withoutCommissions?:
    | boolean
    | undefined;
  /** Флаг получения ответа без массива сделок. */
  withoutTrades?:
    | boolean
    | undefined;
  /** Флаг показа overnight операций. */
  withoutOvernights?: boolean | undefined;
}

/** Список операций по счёту с пагинацией. */
export interface GetOperationsByCursorResponse {
  /** Признак, есть ли следующий элемент. */
  hasNext: boolean;
  /** Следующий курсор. */
  nextCursor: string;
  /** Список операций. */
  items: OperationItem[];
}

/** Данные об операции. */
export interface OperationItem {
  /** Курсор. */
  cursor: string;
  /** Номер счёта клиента. */
  brokerAccountId: string;
  /** Идентификатор операции, может меняться с течением времени. */
  id: string;
  /** Идентификатор родительской операции. Может измениться, если изменился ID родительской операции. */
  parentOperationId: string;
  /** Название операции. */
  name: string;
  /** Дата поручения. */
  date?:
    | Date
    | undefined;
  /** Тип операции. */
  type: OperationType;
  /** Описание операции. */
  description: string;
  /** Статус поручения. */
  state: OperationState;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** FIGI. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Сумма операции. */
  payment?:
    | MoneyValue
    | undefined;
  /** Цена операции за 1 инструмент. */
  price?:
    | MoneyValue
    | undefined;
  /** Комиссия. */
  commission?:
    | MoneyValue
    | undefined;
  /** Доходность. */
  yield?:
    | MoneyValue
    | undefined;
  /** Относительная доходность. */
  yieldRelative?:
    | Quotation
    | undefined;
  /** Накопленный купонный доход. */
  accruedInt?:
    | MoneyValue
    | undefined;
  /** Количество единиц инструмента. */
  quantity: number;
  /** Неисполненный остаток по сделке. */
  quantityRest: number;
  /** Исполненный остаток. */
  quantityDone: number;
  /** Дата и время снятия заявки. */
  cancelDateTime?:
    | Date
    | undefined;
  /** Причина отмены операции. */
  cancelReason: string;
  /** Массив сделок. */
  tradesInfo?:
    | OperationItemTrades
    | undefined;
  /** Идентификатор актива. */
  assetUid: string;
  /** Массив дочерних операций. */
  childOperations: ChildOperationItem[];
}

/** Массив с информацией о сделках. */
export interface OperationItemTrades {
  trades: OperationItemTrade[];
}

/** Сделка по операции. */
export interface OperationItemTrade {
  /** Номер сделки. */
  num: string;
  /** Дата сделки. */
  date?:
    | Date
    | undefined;
  /** Количество в единицах. */
  quantity: number;
  /** Цена. */
  price?:
    | MoneyValue
    | undefined;
  /** Доходность. */
  yield?:
    | MoneyValue
    | undefined;
  /** Относительная доходность. */
  yieldRelative?: Quotation | undefined;
}

/** Запрос установки stream-соединения позиций. */
export interface PositionsStreamRequest {
  /** Массив идентификаторов счётов пользователя. */
  accounts: string[];
  /** Получение состояния позиций на момент подключения. */
  withInitialPositions: boolean;
  /** Запрос настройки пинга. */
  pingSettings?: PingDelaySettings | undefined;
}

/** Информация по изменению позиций портфеля. */
export interface PositionsStreamResponse {
  /** Объект результата подписки. */
  subscriptions?:
    | PositionsSubscriptionResult
    | undefined;
  /** Объект стриминга позиций. */
  position?:
    | PositionData
    | undefined;
  /** Проверка активности стрима. */
  ping?:
    | Ping
    | undefined;
  /** Текущие позиции. */
  initialPositions?: PositionsResponse | undefined;
}

/** Объект результата подписки. */
export interface PositionsSubscriptionResult {
  /** Массив счетов клиента. */
  accounts: PositionsSubscriptionStatus[];
  /** Уникальный идентификатор запроса, подробнее: [tracking_id](https://russianinvestments.github.io/investAPI/grpc#tracking-id). */
  trackingId: string;
  /** Идентификатор открытого соединения */
  streamId: string;
}

/** Счёт клиента. */
export interface PositionsSubscriptionStatus {
  /** Идентификатор счёта. */
  accountId: string;
  /** Результат подписки. */
  subscriptionStatus: PositionsAccountSubscriptionStatus;
}

/** Данные о позиции портфеля. */
export interface PositionData {
  /** Идентификатор счёта. */
  accountId: string;
  /** Массив валютных позиций портфеля. */
  money: PositionsMoney[];
  /** Список ценно-бумажных позиций портфеля. */
  securities: PositionsSecurities[];
  /** Список фьючерсов портфеля. */
  futures: PositionsFutures[];
  /** Список опционов портфеля. */
  options: PositionsOptions[];
  /** Дата и время операции в формате UTC. */
  date?: Date | undefined;
}

/** Валютная позиция портфеля. */
export interface PositionsMoney {
  /** Доступное количество валютный позиций. */
  availableValue?:
    | MoneyValue
    | undefined;
  /** Заблокированное количество валютных позиций. */
  blockedValue?: MoneyValue | undefined;
}

export interface ChildOperationItem {
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** Сумма операции. */
  payment?: MoneyValue | undefined;
}

function createBaseOperationsRequest(): OperationsRequest {
  return { accountId: "", from: undefined, to: undefined, state: undefined, figi: undefined };
}

export const OperationsRequest = {
  encode(message: OperationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    if (message.state !== undefined) {
      writer.uint32(32).int32(message.state);
    }
    if (message.figi !== undefined) {
      writer.uint32(42).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationsRequest();
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

          message.state = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.figi = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationsRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : undefined,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : undefined,
    };
  },

  toJSON(message: OperationsRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    if (message.state !== undefined) {
      obj.state = operationStateToJSON(message.state);
    }
    if (message.figi !== undefined) {
      obj.figi = message.figi;
    }
    return obj;
  },
};

function createBaseOperationsResponse(): OperationsResponse {
  return { operations: [] };
}

export const OperationsResponse = {
  encode(message: OperationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.operations.push(Operation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationsResponse {
    return {
      operations: globalThis.Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationsResponse): unknown {
    const obj: any = {};
    if (message.operations?.length) {
      obj.operations = message.operations.map((e) => Operation.toJSON(e));
    }
    return obj;
  },
};

function createBaseOperation(): Operation {
  return {
    id: "",
    parentOperationId: "",
    currency: "",
    payment: undefined,
    price: undefined,
    state: 0,
    quantity: 0,
    quantityRest: 0,
    figi: "",
    instrumentType: "",
    date: undefined,
    type: "",
    operationType: 0,
    trades: [],
    assetUid: "",
    positionUid: "",
    instrumentUid: "",
    childOperations: [],
  };
}

export const Operation = {
  encode(message: Operation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.parentOperationId !== "") {
      writer.uint32(18).string(message.parentOperationId);
    }
    if (message.currency !== "") {
      writer.uint32(26).string(message.currency);
    }
    if (message.payment !== undefined) {
      MoneyValue.encode(message.payment, writer.uint32(34).fork()).ldelim();
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(42).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    if (message.quantity !== 0) {
      writer.uint32(56).int64(message.quantity);
    }
    if (message.quantityRest !== 0) {
      writer.uint32(64).int64(message.quantityRest);
    }
    if (message.figi !== "") {
      writer.uint32(74).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(82).string(message.instrumentType);
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(90).fork()).ldelim();
    }
    if (message.type !== "") {
      writer.uint32(98).string(message.type);
    }
    if (message.operationType !== 0) {
      writer.uint32(104).int32(message.operationType);
    }
    for (const v of message.trades) {
      OperationTrade.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    if (message.assetUid !== "") {
      writer.uint32(130).string(message.assetUid);
    }
    if (message.positionUid !== "") {
      writer.uint32(138).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(146).string(message.instrumentUid);
    }
    for (const v of message.childOperations) {
      ChildOperationItem.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.parentOperationId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.currency = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.payment = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.quantityRest = longToNumber(reader.int64() as Long);
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.type = reader.string();
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.operationType = reader.int32() as any;
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.trades.push(OperationTrade.decode(reader, reader.uint32()));
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.assetUid = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.childOperations.push(ChildOperationItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      parentOperationId: isSet(object.parentOperationId) ? globalThis.String(object.parentOperationId) : "",
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
      payment: isSet(object.payment) ? MoneyValue.fromJSON(object.payment) : undefined,
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      quantityRest: isSet(object.quantityRest) ? globalThis.Number(object.quantityRest) : 0,
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      operationType: isSet(object.operationType) ? operationTypeFromJSON(object.operationType) : 0,
      trades: globalThis.Array.isArray(object?.trades) ? object.trades.map((e: any) => OperationTrade.fromJSON(e)) : [],
      assetUid: isSet(object.assetUid) ? globalThis.String(object.assetUid) : "",
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      childOperations: globalThis.Array.isArray(object?.childOperations)
        ? object.childOperations.map((e: any) => ChildOperationItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.parentOperationId !== "") {
      obj.parentOperationId = message.parentOperationId;
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    if (message.payment !== undefined) {
      obj.payment = MoneyValue.toJSON(message.payment);
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.state !== 0) {
      obj.state = operationStateToJSON(message.state);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.quantityRest !== 0) {
      obj.quantityRest = Math.round(message.quantityRest);
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.operationType !== 0) {
      obj.operationType = operationTypeToJSON(message.operationType);
    }
    if (message.trades?.length) {
      obj.trades = message.trades.map((e) => OperationTrade.toJSON(e));
    }
    if (message.assetUid !== "") {
      obj.assetUid = message.assetUid;
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.childOperations?.length) {
      obj.childOperations = message.childOperations.map((e) => ChildOperationItem.toJSON(e));
    }
    return obj;
  },
};

function createBaseOperationTrade(): OperationTrade {
  return { tradeId: "", dateTime: undefined, quantity: 0, price: undefined };
}

export const OperationTrade = {
  encode(message: OperationTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.dateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.dateTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(24).int64(message.quantity);
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationTrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.dateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationTrade {
    return {
      tradeId: isSet(object.tradeId) ? globalThis.String(object.tradeId) : "",
      dateTime: isSet(object.dateTime) ? fromJsonTimestamp(object.dateTime) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
    };
  },

  toJSON(message: OperationTrade): unknown {
    const obj: any = {};
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    if (message.dateTime !== undefined) {
      obj.dateTime = message.dateTime.toISOString();
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    return obj;
  },
};

function createBasePortfolioRequest(): PortfolioRequest {
  return { accountId: "", currency: undefined };
}

export const PortfolioRequest = {
  encode(message: PortfolioRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.currency !== undefined) {
      writer.uint32(16).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioRequest();
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

          message.currency = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PortfolioRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      currency: isSet(object.currency) ? portfolioRequest_CurrencyRequestFromJSON(object.currency) : undefined,
    };
  },

  toJSON(message: PortfolioRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.currency !== undefined) {
      obj.currency = portfolioRequest_CurrencyRequestToJSON(message.currency);
    }
    return obj;
  },
};

function createBasePortfolioResponse(): PortfolioResponse {
  return {
    totalAmountShares: undefined,
    totalAmountBonds: undefined,
    totalAmountEtf: undefined,
    totalAmountCurrencies: undefined,
    totalAmountFutures: undefined,
    expectedYield: undefined,
    positions: [],
    accountId: "",
    totalAmountOptions: undefined,
    totalAmountSp: undefined,
    totalAmountPortfolio: undefined,
    virtualPositions: [],
    dailyYield: undefined,
    dailyYieldRelative: undefined,
  };
}

export const PortfolioResponse = {
  encode(message: PortfolioResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalAmountShares !== undefined) {
      MoneyValue.encode(message.totalAmountShares, writer.uint32(10).fork()).ldelim();
    }
    if (message.totalAmountBonds !== undefined) {
      MoneyValue.encode(message.totalAmountBonds, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalAmountEtf !== undefined) {
      MoneyValue.encode(message.totalAmountEtf, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalAmountCurrencies !== undefined) {
      MoneyValue.encode(message.totalAmountCurrencies, writer.uint32(34).fork()).ldelim();
    }
    if (message.totalAmountFutures !== undefined) {
      MoneyValue.encode(message.totalAmountFutures, writer.uint32(42).fork()).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(message.expectedYield, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.positions) {
      PortfolioPosition.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(66).string(message.accountId);
    }
    if (message.totalAmountOptions !== undefined) {
      MoneyValue.encode(message.totalAmountOptions, writer.uint32(74).fork()).ldelim();
    }
    if (message.totalAmountSp !== undefined) {
      MoneyValue.encode(message.totalAmountSp, writer.uint32(82).fork()).ldelim();
    }
    if (message.totalAmountPortfolio !== undefined) {
      MoneyValue.encode(message.totalAmountPortfolio, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.virtualPositions) {
      VirtualPortfolioPosition.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.dailyYield !== undefined) {
      MoneyValue.encode(message.dailyYield, writer.uint32(122).fork()).ldelim();
    }
    if (message.dailyYieldRelative !== undefined) {
      Quotation.encode(message.dailyYieldRelative, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.totalAmountShares = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.totalAmountBonds = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.totalAmountEtf = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.totalAmountCurrencies = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.totalAmountFutures = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.expectedYield = Quotation.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.positions.push(PortfolioPosition.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.accountId = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.totalAmountOptions = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.totalAmountSp = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.totalAmountPortfolio = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.virtualPositions.push(VirtualPortfolioPosition.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.dailyYield = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.dailyYieldRelative = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PortfolioResponse {
    return {
      totalAmountShares: isSet(object.totalAmountShares) ? MoneyValue.fromJSON(object.totalAmountShares) : undefined,
      totalAmountBonds: isSet(object.totalAmountBonds) ? MoneyValue.fromJSON(object.totalAmountBonds) : undefined,
      totalAmountEtf: isSet(object.totalAmountEtf) ? MoneyValue.fromJSON(object.totalAmountEtf) : undefined,
      totalAmountCurrencies: isSet(object.totalAmountCurrencies)
        ? MoneyValue.fromJSON(object.totalAmountCurrencies)
        : undefined,
      totalAmountFutures: isSet(object.totalAmountFutures) ? MoneyValue.fromJSON(object.totalAmountFutures) : undefined,
      expectedYield: isSet(object.expectedYield) ? Quotation.fromJSON(object.expectedYield) : undefined,
      positions: globalThis.Array.isArray(object?.positions)
        ? object.positions.map((e: any) => PortfolioPosition.fromJSON(e))
        : [],
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      totalAmountOptions: isSet(object.totalAmountOptions) ? MoneyValue.fromJSON(object.totalAmountOptions) : undefined,
      totalAmountSp: isSet(object.totalAmountSp) ? MoneyValue.fromJSON(object.totalAmountSp) : undefined,
      totalAmountPortfolio: isSet(object.totalAmountPortfolio)
        ? MoneyValue.fromJSON(object.totalAmountPortfolio)
        : undefined,
      virtualPositions: globalThis.Array.isArray(object?.virtualPositions)
        ? object.virtualPositions.map((e: any) => VirtualPortfolioPosition.fromJSON(e))
        : [],
      dailyYield: isSet(object.dailyYield) ? MoneyValue.fromJSON(object.dailyYield) : undefined,
      dailyYieldRelative: isSet(object.dailyYieldRelative) ? Quotation.fromJSON(object.dailyYieldRelative) : undefined,
    };
  },

  toJSON(message: PortfolioResponse): unknown {
    const obj: any = {};
    if (message.totalAmountShares !== undefined) {
      obj.totalAmountShares = MoneyValue.toJSON(message.totalAmountShares);
    }
    if (message.totalAmountBonds !== undefined) {
      obj.totalAmountBonds = MoneyValue.toJSON(message.totalAmountBonds);
    }
    if (message.totalAmountEtf !== undefined) {
      obj.totalAmountEtf = MoneyValue.toJSON(message.totalAmountEtf);
    }
    if (message.totalAmountCurrencies !== undefined) {
      obj.totalAmountCurrencies = MoneyValue.toJSON(message.totalAmountCurrencies);
    }
    if (message.totalAmountFutures !== undefined) {
      obj.totalAmountFutures = MoneyValue.toJSON(message.totalAmountFutures);
    }
    if (message.expectedYield !== undefined) {
      obj.expectedYield = Quotation.toJSON(message.expectedYield);
    }
    if (message.positions?.length) {
      obj.positions = message.positions.map((e) => PortfolioPosition.toJSON(e));
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.totalAmountOptions !== undefined) {
      obj.totalAmountOptions = MoneyValue.toJSON(message.totalAmountOptions);
    }
    if (message.totalAmountSp !== undefined) {
      obj.totalAmountSp = MoneyValue.toJSON(message.totalAmountSp);
    }
    if (message.totalAmountPortfolio !== undefined) {
      obj.totalAmountPortfolio = MoneyValue.toJSON(message.totalAmountPortfolio);
    }
    if (message.virtualPositions?.length) {
      obj.virtualPositions = message.virtualPositions.map((e) => VirtualPortfolioPosition.toJSON(e));
    }
    if (message.dailyYield !== undefined) {
      obj.dailyYield = MoneyValue.toJSON(message.dailyYield);
    }
    if (message.dailyYieldRelative !== undefined) {
      obj.dailyYieldRelative = Quotation.toJSON(message.dailyYieldRelative);
    }
    return obj;
  },
};

function createBasePositionsRequest(): PositionsRequest {
  return { accountId: "" };
}

export const PositionsRequest = {
  encode(message: PositionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
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

  fromJSON(object: any): PositionsRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: PositionsRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBasePositionsResponse(): PositionsResponse {
  return {
    money: [],
    blocked: [],
    securities: [],
    limitsLoadingInProgress: false,
    futures: [],
    options: [],
    accountId: "",
  };
}

export const PositionsResponse = {
  encode(message: PositionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.money) {
      MoneyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.blocked) {
      MoneyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securities) {
      PositionsSecurities.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.limitsLoadingInProgress === true) {
      writer.uint32(32).bool(message.limitsLoadingInProgress);
    }
    for (const v of message.futures) {
      PositionsFutures.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.options) {
      PositionsOptions.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(122).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.money.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blocked.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securities.push(PositionsSecurities.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.limitsLoadingInProgress = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.futures.push(PositionsFutures.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.options.push(PositionsOptions.decode(reader, reader.uint32()));
          continue;
        case 15:
          if (tag !== 122) {
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

  fromJSON(object: any): PositionsResponse {
    return {
      money: globalThis.Array.isArray(object?.money) ? object.money.map((e: any) => MoneyValue.fromJSON(e)) : [],
      blocked: globalThis.Array.isArray(object?.blocked) ? object.blocked.map((e: any) => MoneyValue.fromJSON(e)) : [],
      securities: globalThis.Array.isArray(object?.securities)
        ? object.securities.map((e: any) => PositionsSecurities.fromJSON(e))
        : [],
      limitsLoadingInProgress: isSet(object.limitsLoadingInProgress)
        ? globalThis.Boolean(object.limitsLoadingInProgress)
        : false,
      futures: globalThis.Array.isArray(object?.futures)
        ? object.futures.map((e: any) => PositionsFutures.fromJSON(e))
        : [],
      options: globalThis.Array.isArray(object?.options)
        ? object.options.map((e: any) => PositionsOptions.fromJSON(e))
        : [],
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
    };
  },

  toJSON(message: PositionsResponse): unknown {
    const obj: any = {};
    if (message.money?.length) {
      obj.money = message.money.map((e) => MoneyValue.toJSON(e));
    }
    if (message.blocked?.length) {
      obj.blocked = message.blocked.map((e) => MoneyValue.toJSON(e));
    }
    if (message.securities?.length) {
      obj.securities = message.securities.map((e) => PositionsSecurities.toJSON(e));
    }
    if (message.limitsLoadingInProgress === true) {
      obj.limitsLoadingInProgress = message.limitsLoadingInProgress;
    }
    if (message.futures?.length) {
      obj.futures = message.futures.map((e) => PositionsFutures.toJSON(e));
    }
    if (message.options?.length) {
      obj.options = message.options.map((e) => PositionsOptions.toJSON(e));
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseWithdrawLimitsRequest(): WithdrawLimitsRequest {
  return { accountId: "" };
}

export const WithdrawLimitsRequest = {
  encode(message: WithdrawLimitsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawLimitsRequest();
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

  fromJSON(object: any): WithdrawLimitsRequest {
    return { accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "" };
  },

  toJSON(message: WithdrawLimitsRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },
};

function createBaseWithdrawLimitsResponse(): WithdrawLimitsResponse {
  return { money: [], blocked: [], blockedGuarantee: [] };
}

export const WithdrawLimitsResponse = {
  encode(message: WithdrawLimitsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.money) {
      MoneyValue.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.blocked) {
      MoneyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.blockedGuarantee) {
      MoneyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): WithdrawLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.money.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blocked.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.blockedGuarantee.push(MoneyValue.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WithdrawLimitsResponse {
    return {
      money: globalThis.Array.isArray(object?.money) ? object.money.map((e: any) => MoneyValue.fromJSON(e)) : [],
      blocked: globalThis.Array.isArray(object?.blocked) ? object.blocked.map((e: any) => MoneyValue.fromJSON(e)) : [],
      blockedGuarantee: globalThis.Array.isArray(object?.blockedGuarantee)
        ? object.blockedGuarantee.map((e: any) => MoneyValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WithdrawLimitsResponse): unknown {
    const obj: any = {};
    if (message.money?.length) {
      obj.money = message.money.map((e) => MoneyValue.toJSON(e));
    }
    if (message.blocked?.length) {
      obj.blocked = message.blocked.map((e) => MoneyValue.toJSON(e));
    }
    if (message.blockedGuarantee?.length) {
      obj.blockedGuarantee = message.blockedGuarantee.map((e) => MoneyValue.toJSON(e));
    }
    return obj;
  },
};

function createBasePortfolioPosition(): PortfolioPosition {
  return {
    figi: "",
    instrumentType: "",
    quantity: undefined,
    averagePositionPrice: undefined,
    expectedYield: undefined,
    currentNkd: undefined,
    averagePositionPricePt: undefined,
    currentPrice: undefined,
    averagePositionPriceFifo: undefined,
    quantityLots: undefined,
    blocked: false,
    blockedLots: undefined,
    positionUid: "",
    instrumentUid: "",
    varMargin: undefined,
    expectedYieldFifo: undefined,
    dailyYield: undefined,
  };
}

export const PortfolioPosition = {
  encode(message: PortfolioPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(18).string(message.instrumentType);
    }
    if (message.quantity !== undefined) {
      Quotation.encode(message.quantity, writer.uint32(26).fork()).ldelim();
    }
    if (message.averagePositionPrice !== undefined) {
      MoneyValue.encode(message.averagePositionPrice, writer.uint32(34).fork()).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(message.expectedYield, writer.uint32(42).fork()).ldelim();
    }
    if (message.currentNkd !== undefined) {
      MoneyValue.encode(message.currentNkd, writer.uint32(50).fork()).ldelim();
    }
    if (message.averagePositionPricePt !== undefined) {
      Quotation.encode(message.averagePositionPricePt, writer.uint32(58).fork()).ldelim();
    }
    if (message.currentPrice !== undefined) {
      MoneyValue.encode(message.currentPrice, writer.uint32(66).fork()).ldelim();
    }
    if (message.averagePositionPriceFifo !== undefined) {
      MoneyValue.encode(message.averagePositionPriceFifo, writer.uint32(74).fork()).ldelim();
    }
    if (message.quantityLots !== undefined) {
      Quotation.encode(message.quantityLots, writer.uint32(82).fork()).ldelim();
    }
    if (message.blocked === true) {
      writer.uint32(168).bool(message.blocked);
    }
    if (message.blockedLots !== undefined) {
      Quotation.encode(message.blockedLots, writer.uint32(178).fork()).ldelim();
    }
    if (message.positionUid !== "") {
      writer.uint32(194).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(202).string(message.instrumentUid);
    }
    if (message.varMargin !== undefined) {
      MoneyValue.encode(message.varMargin, writer.uint32(210).fork()).ldelim();
    }
    if (message.expectedYieldFifo !== undefined) {
      Quotation.encode(message.expectedYieldFifo, writer.uint32(218).fork()).ldelim();
    }
    if (message.dailyYield !== undefined) {
      MoneyValue.encode(message.dailyYield, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioPosition();
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

          message.instrumentType = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.quantity = Quotation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.averagePositionPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.expectedYield = Quotation.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.currentNkd = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.averagePositionPricePt = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.currentPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.averagePositionPriceFifo = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.quantityLots = Quotation.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.blocked = reader.bool();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.blockedLots = Quotation.decode(reader, reader.uint32());
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.varMargin = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.expectedYieldFifo = Quotation.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.dailyYield = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PortfolioPosition {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      quantity: isSet(object.quantity) ? Quotation.fromJSON(object.quantity) : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      expectedYield: isSet(object.expectedYield) ? Quotation.fromJSON(object.expectedYield) : undefined,
      currentNkd: isSet(object.currentNkd) ? MoneyValue.fromJSON(object.currentNkd) : undefined,
      averagePositionPricePt: isSet(object.averagePositionPricePt)
        ? Quotation.fromJSON(object.averagePositionPricePt)
        : undefined,
      currentPrice: isSet(object.currentPrice) ? MoneyValue.fromJSON(object.currentPrice) : undefined,
      averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
        ? MoneyValue.fromJSON(object.averagePositionPriceFifo)
        : undefined,
      quantityLots: isSet(object.quantityLots) ? Quotation.fromJSON(object.quantityLots) : undefined,
      blocked: isSet(object.blocked) ? globalThis.Boolean(object.blocked) : false,
      blockedLots: isSet(object.blockedLots) ? Quotation.fromJSON(object.blockedLots) : undefined,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      varMargin: isSet(object.varMargin) ? MoneyValue.fromJSON(object.varMargin) : undefined,
      expectedYieldFifo: isSet(object.expectedYieldFifo) ? Quotation.fromJSON(object.expectedYieldFifo) : undefined,
      dailyYield: isSet(object.dailyYield) ? MoneyValue.fromJSON(object.dailyYield) : undefined,
    };
  },

  toJSON(message: PortfolioPosition): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.quantity !== undefined) {
      obj.quantity = Quotation.toJSON(message.quantity);
    }
    if (message.averagePositionPrice !== undefined) {
      obj.averagePositionPrice = MoneyValue.toJSON(message.averagePositionPrice);
    }
    if (message.expectedYield !== undefined) {
      obj.expectedYield = Quotation.toJSON(message.expectedYield);
    }
    if (message.currentNkd !== undefined) {
      obj.currentNkd = MoneyValue.toJSON(message.currentNkd);
    }
    if (message.averagePositionPricePt !== undefined) {
      obj.averagePositionPricePt = Quotation.toJSON(message.averagePositionPricePt);
    }
    if (message.currentPrice !== undefined) {
      obj.currentPrice = MoneyValue.toJSON(message.currentPrice);
    }
    if (message.averagePositionPriceFifo !== undefined) {
      obj.averagePositionPriceFifo = MoneyValue.toJSON(message.averagePositionPriceFifo);
    }
    if (message.quantityLots !== undefined) {
      obj.quantityLots = Quotation.toJSON(message.quantityLots);
    }
    if (message.blocked === true) {
      obj.blocked = message.blocked;
    }
    if (message.blockedLots !== undefined) {
      obj.blockedLots = Quotation.toJSON(message.blockedLots);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.varMargin !== undefined) {
      obj.varMargin = MoneyValue.toJSON(message.varMargin);
    }
    if (message.expectedYieldFifo !== undefined) {
      obj.expectedYieldFifo = Quotation.toJSON(message.expectedYieldFifo);
    }
    if (message.dailyYield !== undefined) {
      obj.dailyYield = MoneyValue.toJSON(message.dailyYield);
    }
    return obj;
  },
};

function createBaseVirtualPortfolioPosition(): VirtualPortfolioPosition {
  return {
    positionUid: "",
    instrumentUid: "",
    figi: "",
    instrumentType: "",
    quantity: undefined,
    averagePositionPrice: undefined,
    expectedYield: undefined,
    expectedYieldFifo: undefined,
    expireDate: undefined,
    currentPrice: undefined,
    averagePositionPriceFifo: undefined,
    dailyYield: undefined,
  };
}

export const VirtualPortfolioPosition = {
  encode(message: VirtualPortfolioPosition, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionUid !== "") {
      writer.uint32(10).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    if (message.figi !== "") {
      writer.uint32(26).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(34).string(message.instrumentType);
    }
    if (message.quantity !== undefined) {
      Quotation.encode(message.quantity, writer.uint32(42).fork()).ldelim();
    }
    if (message.averagePositionPrice !== undefined) {
      MoneyValue.encode(message.averagePositionPrice, writer.uint32(50).fork()).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(message.expectedYield, writer.uint32(58).fork()).ldelim();
    }
    if (message.expectedYieldFifo !== undefined) {
      Quotation.encode(message.expectedYieldFifo, writer.uint32(66).fork()).ldelim();
    }
    if (message.expireDate !== undefined) {
      Timestamp.encode(toTimestamp(message.expireDate), writer.uint32(74).fork()).ldelim();
    }
    if (message.currentPrice !== undefined) {
      MoneyValue.encode(message.currentPrice, writer.uint32(82).fork()).ldelim();
    }
    if (message.averagePositionPriceFifo !== undefined) {
      MoneyValue.encode(message.averagePositionPriceFifo, writer.uint32(90).fork()).ldelim();
    }
    if (message.dailyYield !== undefined) {
      MoneyValue.encode(message.dailyYield, writer.uint32(250).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VirtualPortfolioPosition {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualPortfolioPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.quantity = Quotation.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.averagePositionPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.expectedYield = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.expectedYieldFifo = Quotation.decode(reader, reader.uint32());
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

          message.currentPrice = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.averagePositionPriceFifo = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.dailyYield = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VirtualPortfolioPosition {
    return {
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      quantity: isSet(object.quantity) ? Quotation.fromJSON(object.quantity) : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      expectedYield: isSet(object.expectedYield) ? Quotation.fromJSON(object.expectedYield) : undefined,
      expectedYieldFifo: isSet(object.expectedYieldFifo) ? Quotation.fromJSON(object.expectedYieldFifo) : undefined,
      expireDate: isSet(object.expireDate) ? fromJsonTimestamp(object.expireDate) : undefined,
      currentPrice: isSet(object.currentPrice) ? MoneyValue.fromJSON(object.currentPrice) : undefined,
      averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
        ? MoneyValue.fromJSON(object.averagePositionPriceFifo)
        : undefined,
      dailyYield: isSet(object.dailyYield) ? MoneyValue.fromJSON(object.dailyYield) : undefined,
    };
  },

  toJSON(message: VirtualPortfolioPosition): unknown {
    const obj: any = {};
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.quantity !== undefined) {
      obj.quantity = Quotation.toJSON(message.quantity);
    }
    if (message.averagePositionPrice !== undefined) {
      obj.averagePositionPrice = MoneyValue.toJSON(message.averagePositionPrice);
    }
    if (message.expectedYield !== undefined) {
      obj.expectedYield = Quotation.toJSON(message.expectedYield);
    }
    if (message.expectedYieldFifo !== undefined) {
      obj.expectedYieldFifo = Quotation.toJSON(message.expectedYieldFifo);
    }
    if (message.expireDate !== undefined) {
      obj.expireDate = message.expireDate.toISOString();
    }
    if (message.currentPrice !== undefined) {
      obj.currentPrice = MoneyValue.toJSON(message.currentPrice);
    }
    if (message.averagePositionPriceFifo !== undefined) {
      obj.averagePositionPriceFifo = MoneyValue.toJSON(message.averagePositionPriceFifo);
    }
    if (message.dailyYield !== undefined) {
      obj.dailyYield = MoneyValue.toJSON(message.dailyYield);
    }
    return obj;
  },
};

function createBasePositionsSecurities(): PositionsSecurities {
  return {
    figi: "",
    blocked: 0,
    balance: 0,
    positionUid: "",
    instrumentUid: "",
    exchangeBlocked: false,
    instrumentType: "",
  };
}

export const PositionsSecurities = {
  encode(message: PositionsSecurities, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.blocked !== 0) {
      writer.uint32(16).int64(message.blocked);
    }
    if (message.balance !== 0) {
      writer.uint32(24).int64(message.balance);
    }
    if (message.positionUid !== "") {
      writer.uint32(34).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(42).string(message.instrumentUid);
    }
    if (message.exchangeBlocked === true) {
      writer.uint32(88).bool(message.exchangeBlocked);
    }
    if (message.instrumentType !== "") {
      writer.uint32(130).string(message.instrumentType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsSecurities {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSecurities();
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

          message.blocked = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.exchangeBlocked = reader.bool();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsSecurities {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      blocked: isSet(object.blocked) ? globalThis.Number(object.blocked) : 0,
      balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      exchangeBlocked: isSet(object.exchangeBlocked) ? globalThis.Boolean(object.exchangeBlocked) : false,
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
    };
  },

  toJSON(message: PositionsSecurities): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.blocked !== 0) {
      obj.blocked = Math.round(message.blocked);
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.exchangeBlocked === true) {
      obj.exchangeBlocked = message.exchangeBlocked;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    return obj;
  },
};

function createBasePositionsFutures(): PositionsFutures {
  return { figi: "", blocked: 0, balance: 0, positionUid: "", instrumentUid: "" };
}

export const PositionsFutures = {
  encode(message: PositionsFutures, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.figi !== "") {
      writer.uint32(10).string(message.figi);
    }
    if (message.blocked !== 0) {
      writer.uint32(16).int64(message.blocked);
    }
    if (message.balance !== 0) {
      writer.uint32(24).int64(message.balance);
    }
    if (message.positionUid !== "") {
      writer.uint32(34).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(42).string(message.instrumentUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsFutures {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsFutures();
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

          message.blocked = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): PositionsFutures {
    return {
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      blocked: isSet(object.blocked) ? globalThis.Number(object.blocked) : 0,
      balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
    };
  },

  toJSON(message: PositionsFutures): unknown {
    const obj: any = {};
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.blocked !== 0) {
      obj.blocked = Math.round(message.blocked);
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    return obj;
  },
};

function createBasePositionsOptions(): PositionsOptions {
  return { positionUid: "", instrumentUid: "", blocked: 0, balance: 0 };
}

export const PositionsOptions = {
  encode(message: PositionsOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.positionUid !== "") {
      writer.uint32(10).string(message.positionUid);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(18).string(message.instrumentUid);
    }
    if (message.blocked !== 0) {
      writer.uint32(88).int64(message.blocked);
    }
    if (message.balance !== 0) {
      writer.uint32(168).int64(message.balance);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsOptions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.blocked = longToNumber(reader.int64() as Long);
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.balance = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsOptions {
    return {
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      blocked: isSet(object.blocked) ? globalThis.Number(object.blocked) : 0,
      balance: isSet(object.balance) ? globalThis.Number(object.balance) : 0,
    };
  },

  toJSON(message: PositionsOptions): unknown {
    const obj: any = {};
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.blocked !== 0) {
      obj.blocked = Math.round(message.blocked);
    }
    if (message.balance !== 0) {
      obj.balance = Math.round(message.balance);
    }
    return obj;
  },
};

function createBaseBrokerReportRequest(): BrokerReportRequest {
  return { generateBrokerReportRequest: undefined, getBrokerReportRequest: undefined };
}

export const BrokerReportRequest = {
  encode(message: BrokerReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generateBrokerReportRequest !== undefined) {
      GenerateBrokerReportRequest.encode(message.generateBrokerReportRequest, writer.uint32(10).fork()).ldelim();
    }
    if (message.getBrokerReportRequest !== undefined) {
      GetBrokerReportRequest.encode(message.getBrokerReportRequest, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generateBrokerReportRequest = GenerateBrokerReportRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getBrokerReportRequest = GetBrokerReportRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrokerReportRequest {
    return {
      generateBrokerReportRequest: isSet(object.generateBrokerReportRequest)
        ? GenerateBrokerReportRequest.fromJSON(object.generateBrokerReportRequest)
        : undefined,
      getBrokerReportRequest: isSet(object.getBrokerReportRequest)
        ? GetBrokerReportRequest.fromJSON(object.getBrokerReportRequest)
        : undefined,
    };
  },

  toJSON(message: BrokerReportRequest): unknown {
    const obj: any = {};
    if (message.generateBrokerReportRequest !== undefined) {
      obj.generateBrokerReportRequest = GenerateBrokerReportRequest.toJSON(message.generateBrokerReportRequest);
    }
    if (message.getBrokerReportRequest !== undefined) {
      obj.getBrokerReportRequest = GetBrokerReportRequest.toJSON(message.getBrokerReportRequest);
    }
    return obj;
  },
};

function createBaseBrokerReportResponse(): BrokerReportResponse {
  return { generateBrokerReportResponse: undefined, getBrokerReportResponse: undefined };
}

export const BrokerReportResponse = {
  encode(message: BrokerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generateBrokerReportResponse !== undefined) {
      GenerateBrokerReportResponse.encode(message.generateBrokerReportResponse, writer.uint32(10).fork()).ldelim();
    }
    if (message.getBrokerReportResponse !== undefined) {
      GetBrokerReportResponse.encode(message.getBrokerReportResponse, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generateBrokerReportResponse = GenerateBrokerReportResponse.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getBrokerReportResponse = GetBrokerReportResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrokerReportResponse {
    return {
      generateBrokerReportResponse: isSet(object.generateBrokerReportResponse)
        ? GenerateBrokerReportResponse.fromJSON(object.generateBrokerReportResponse)
        : undefined,
      getBrokerReportResponse: isSet(object.getBrokerReportResponse)
        ? GetBrokerReportResponse.fromJSON(object.getBrokerReportResponse)
        : undefined,
    };
  },

  toJSON(message: BrokerReportResponse): unknown {
    const obj: any = {};
    if (message.generateBrokerReportResponse !== undefined) {
      obj.generateBrokerReportResponse = GenerateBrokerReportResponse.toJSON(message.generateBrokerReportResponse);
    }
    if (message.getBrokerReportResponse !== undefined) {
      obj.getBrokerReportResponse = GetBrokerReportResponse.toJSON(message.getBrokerReportResponse);
    }
    return obj;
  },
};

function createBaseGenerateBrokerReportRequest(): GenerateBrokerReportRequest {
  return { accountId: "", from: undefined, to: undefined };
}

export const GenerateBrokerReportRequest = {
  encode(message: GenerateBrokerReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBrokerReportRequest();
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

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): GenerateBrokerReportRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GenerateBrokerReportRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
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

function createBaseGenerateBrokerReportResponse(): GenerateBrokerReportResponse {
  return { taskId: "" };
}

export const GenerateBrokerReportResponse = {
  encode(message: GenerateBrokerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateBrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateBrokerReportResponse {
    return { taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "" };
  },

  toJSON(message: GenerateBrokerReportResponse): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    return obj;
  },
};

function createBaseGetBrokerReportRequest(): GetBrokerReportRequest {
  return { taskId: "", page: undefined };
}

export const GetBrokerReportRequest = {
  encode(message: GetBrokerReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.page !== undefined) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrokerReportRequest {
    return {
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      page: isSet(object.page) ? globalThis.Number(object.page) : undefined,
    };
  },

  toJSON(message: GetBrokerReportRequest): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.page !== undefined) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },
};

function createBaseGetBrokerReportResponse(): GetBrokerReportResponse {
  return { brokerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}

export const GetBrokerReportResponse = {
  encode(message: GetBrokerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.brokerReport) {
      BrokerReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.itemsCount !== 0) {
      writer.uint32(16).int32(message.itemsCount);
    }
    if (message.pagesCount !== 0) {
      writer.uint32(24).int32(message.pagesCount);
    }
    if (message.page !== 0) {
      writer.uint32(32).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetBrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.brokerReport.push(BrokerReport.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.itemsCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pagesCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetBrokerReportResponse {
    return {
      brokerReport: globalThis.Array.isArray(object?.brokerReport)
        ? object.brokerReport.map((e: any) => BrokerReport.fromJSON(e))
        : [],
      itemsCount: isSet(object.itemsCount) ? globalThis.Number(object.itemsCount) : 0,
      pagesCount: isSet(object.pagesCount) ? globalThis.Number(object.pagesCount) : 0,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
    };
  },

  toJSON(message: GetBrokerReportResponse): unknown {
    const obj: any = {};
    if (message.brokerReport?.length) {
      obj.brokerReport = message.brokerReport.map((e) => BrokerReport.toJSON(e));
    }
    if (message.itemsCount !== 0) {
      obj.itemsCount = Math.round(message.itemsCount);
    }
    if (message.pagesCount !== 0) {
      obj.pagesCount = Math.round(message.pagesCount);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },
};

function createBaseBrokerReport(): BrokerReport {
  return {
    tradeId: "",
    orderId: "",
    figi: "",
    executeSign: "",
    tradeDatetime: undefined,
    exchange: "",
    classCode: "",
    direction: "",
    name: "",
    ticker: "",
    price: undefined,
    quantity: 0,
    orderAmount: undefined,
    aciValue: undefined,
    totalOrderAmount: undefined,
    brokerCommission: undefined,
    exchangeCommission: undefined,
    exchangeClearingCommission: undefined,
    repoRate: undefined,
    party: "",
    clearValueDate: undefined,
    secValueDate: undefined,
    brokerStatus: "",
    separateAgreementType: "",
    separateAgreementNumber: "",
    separateAgreementDate: "",
    deliveryType: "",
  };
}

export const BrokerReport = {
  encode(message: BrokerReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.figi !== "") {
      writer.uint32(26).string(message.figi);
    }
    if (message.executeSign !== "") {
      writer.uint32(34).string(message.executeSign);
    }
    if (message.tradeDatetime !== undefined) {
      Timestamp.encode(toTimestamp(message.tradeDatetime), writer.uint32(42).fork()).ldelim();
    }
    if (message.exchange !== "") {
      writer.uint32(50).string(message.exchange);
    }
    if (message.classCode !== "") {
      writer.uint32(58).string(message.classCode);
    }
    if (message.direction !== "") {
      writer.uint32(66).string(message.direction);
    }
    if (message.name !== "") {
      writer.uint32(74).string(message.name);
    }
    if (message.ticker !== "") {
      writer.uint32(82).string(message.ticker);
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(90).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(96).int64(message.quantity);
    }
    if (message.orderAmount !== undefined) {
      MoneyValue.encode(message.orderAmount, writer.uint32(106).fork()).ldelim();
    }
    if (message.aciValue !== undefined) {
      Quotation.encode(message.aciValue, writer.uint32(114).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(message.totalOrderAmount, writer.uint32(122).fork()).ldelim();
    }
    if (message.brokerCommission !== undefined) {
      MoneyValue.encode(message.brokerCommission, writer.uint32(130).fork()).ldelim();
    }
    if (message.exchangeCommission !== undefined) {
      MoneyValue.encode(message.exchangeCommission, writer.uint32(138).fork()).ldelim();
    }
    if (message.exchangeClearingCommission !== undefined) {
      MoneyValue.encode(message.exchangeClearingCommission, writer.uint32(146).fork()).ldelim();
    }
    if (message.repoRate !== undefined) {
      Quotation.encode(message.repoRate, writer.uint32(154).fork()).ldelim();
    }
    if (message.party !== "") {
      writer.uint32(162).string(message.party);
    }
    if (message.clearValueDate !== undefined) {
      Timestamp.encode(toTimestamp(message.clearValueDate), writer.uint32(170).fork()).ldelim();
    }
    if (message.secValueDate !== undefined) {
      Timestamp.encode(toTimestamp(message.secValueDate), writer.uint32(178).fork()).ldelim();
    }
    if (message.brokerStatus !== "") {
      writer.uint32(186).string(message.brokerStatus);
    }
    if (message.separateAgreementType !== "") {
      writer.uint32(194).string(message.separateAgreementType);
    }
    if (message.separateAgreementNumber !== "") {
      writer.uint32(202).string(message.separateAgreementNumber);
    }
    if (message.separateAgreementDate !== "") {
      writer.uint32(210).string(message.separateAgreementDate);
    }
    if (message.deliveryType !== "") {
      writer.uint32(218).string(message.deliveryType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tradeId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.executeSign = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.tradeDatetime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.exchange = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.classCode = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.direction = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.name = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.ticker = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.orderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.aciValue = Quotation.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.brokerCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.exchangeCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.exchangeClearingCommission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.repoRate = Quotation.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.party = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.clearValueDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.secValueDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.brokerStatus = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.separateAgreementType = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.separateAgreementNumber = reader.string();
          continue;
        case 26:
          if (tag !== 210) {
            break;
          }

          message.separateAgreementDate = reader.string();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.deliveryType = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BrokerReport {
    return {
      tradeId: isSet(object.tradeId) ? globalThis.String(object.tradeId) : "",
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      executeSign: isSet(object.executeSign) ? globalThis.String(object.executeSign) : "",
      tradeDatetime: isSet(object.tradeDatetime) ? fromJsonTimestamp(object.tradeDatetime) : undefined,
      exchange: isSet(object.exchange) ? globalThis.String(object.exchange) : "",
      classCode: isSet(object.classCode) ? globalThis.String(object.classCode) : "",
      direction: isSet(object.direction) ? globalThis.String(object.direction) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      ticker: isSet(object.ticker) ? globalThis.String(object.ticker) : "",
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      orderAmount: isSet(object.orderAmount) ? MoneyValue.fromJSON(object.orderAmount) : undefined,
      aciValue: isSet(object.aciValue) ? Quotation.fromJSON(object.aciValue) : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount) ? MoneyValue.fromJSON(object.totalOrderAmount) : undefined,
      brokerCommission: isSet(object.brokerCommission) ? MoneyValue.fromJSON(object.brokerCommission) : undefined,
      exchangeCommission: isSet(object.exchangeCommission) ? MoneyValue.fromJSON(object.exchangeCommission) : undefined,
      exchangeClearingCommission: isSet(object.exchangeClearingCommission)
        ? MoneyValue.fromJSON(object.exchangeClearingCommission)
        : undefined,
      repoRate: isSet(object.repoRate) ? Quotation.fromJSON(object.repoRate) : undefined,
      party: isSet(object.party) ? globalThis.String(object.party) : "",
      clearValueDate: isSet(object.clearValueDate) ? fromJsonTimestamp(object.clearValueDate) : undefined,
      secValueDate: isSet(object.secValueDate) ? fromJsonTimestamp(object.secValueDate) : undefined,
      brokerStatus: isSet(object.brokerStatus) ? globalThis.String(object.brokerStatus) : "",
      separateAgreementType: isSet(object.separateAgreementType) ? globalThis.String(object.separateAgreementType) : "",
      separateAgreementNumber: isSet(object.separateAgreementNumber)
        ? globalThis.String(object.separateAgreementNumber)
        : "",
      separateAgreementDate: isSet(object.separateAgreementDate) ? globalThis.String(object.separateAgreementDate) : "",
      deliveryType: isSet(object.deliveryType) ? globalThis.String(object.deliveryType) : "",
    };
  },

  toJSON(message: BrokerReport): unknown {
    const obj: any = {};
    if (message.tradeId !== "") {
      obj.tradeId = message.tradeId;
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.executeSign !== "") {
      obj.executeSign = message.executeSign;
    }
    if (message.tradeDatetime !== undefined) {
      obj.tradeDatetime = message.tradeDatetime.toISOString();
    }
    if (message.exchange !== "") {
      obj.exchange = message.exchange;
    }
    if (message.classCode !== "") {
      obj.classCode = message.classCode;
    }
    if (message.direction !== "") {
      obj.direction = message.direction;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.ticker !== "") {
      obj.ticker = message.ticker;
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.orderAmount !== undefined) {
      obj.orderAmount = MoneyValue.toJSON(message.orderAmount);
    }
    if (message.aciValue !== undefined) {
      obj.aciValue = Quotation.toJSON(message.aciValue);
    }
    if (message.totalOrderAmount !== undefined) {
      obj.totalOrderAmount = MoneyValue.toJSON(message.totalOrderAmount);
    }
    if (message.brokerCommission !== undefined) {
      obj.brokerCommission = MoneyValue.toJSON(message.brokerCommission);
    }
    if (message.exchangeCommission !== undefined) {
      obj.exchangeCommission = MoneyValue.toJSON(message.exchangeCommission);
    }
    if (message.exchangeClearingCommission !== undefined) {
      obj.exchangeClearingCommission = MoneyValue.toJSON(message.exchangeClearingCommission);
    }
    if (message.repoRate !== undefined) {
      obj.repoRate = Quotation.toJSON(message.repoRate);
    }
    if (message.party !== "") {
      obj.party = message.party;
    }
    if (message.clearValueDate !== undefined) {
      obj.clearValueDate = message.clearValueDate.toISOString();
    }
    if (message.secValueDate !== undefined) {
      obj.secValueDate = message.secValueDate.toISOString();
    }
    if (message.brokerStatus !== "") {
      obj.brokerStatus = message.brokerStatus;
    }
    if (message.separateAgreementType !== "") {
      obj.separateAgreementType = message.separateAgreementType;
    }
    if (message.separateAgreementNumber !== "") {
      obj.separateAgreementNumber = message.separateAgreementNumber;
    }
    if (message.separateAgreementDate !== "") {
      obj.separateAgreementDate = message.separateAgreementDate;
    }
    if (message.deliveryType !== "") {
      obj.deliveryType = message.deliveryType;
    }
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerRequest(): GetDividendsForeignIssuerRequest {
  return { generateDivForeignIssuerReport: undefined, getDivForeignIssuerReport: undefined };
}

export const GetDividendsForeignIssuerRequest = {
  encode(message: GetDividendsForeignIssuerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generateDivForeignIssuerReport !== undefined) {
      GenerateDividendsForeignIssuerReportRequest.encode(
        message.generateDivForeignIssuerReport,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.getDivForeignIssuerReport !== undefined) {
      GetDividendsForeignIssuerReportRequest.encode(message.getDivForeignIssuerReport, writer.uint32(18).fork())
        .ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsForeignIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generateDivForeignIssuerReport = GenerateDividendsForeignIssuerReportRequest.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.getDivForeignIssuerReport = GetDividendsForeignIssuerReportRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerRequest {
    return {
      generateDivForeignIssuerReport: isSet(object.generateDivForeignIssuerReport)
        ? GenerateDividendsForeignIssuerReportRequest.fromJSON(object.generateDivForeignIssuerReport)
        : undefined,
      getDivForeignIssuerReport: isSet(object.getDivForeignIssuerReport)
        ? GetDividendsForeignIssuerReportRequest.fromJSON(object.getDivForeignIssuerReport)
        : undefined,
    };
  },

  toJSON(message: GetDividendsForeignIssuerRequest): unknown {
    const obj: any = {};
    if (message.generateDivForeignIssuerReport !== undefined) {
      obj.generateDivForeignIssuerReport = GenerateDividendsForeignIssuerReportRequest.toJSON(
        message.generateDivForeignIssuerReport,
      );
    }
    if (message.getDivForeignIssuerReport !== undefined) {
      obj.getDivForeignIssuerReport = GetDividendsForeignIssuerReportRequest.toJSON(message.getDivForeignIssuerReport);
    }
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerResponse(): GetDividendsForeignIssuerResponse {
  return { generateDivForeignIssuerReportResponse: undefined, divForeignIssuerReport: undefined };
}

export const GetDividendsForeignIssuerResponse = {
  encode(message: GetDividendsForeignIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.generateDivForeignIssuerReportResponse !== undefined) {
      GenerateDividendsForeignIssuerReportResponse.encode(
        message.generateDivForeignIssuerReportResponse,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.divForeignIssuerReport !== undefined) {
      GetDividendsForeignIssuerReportResponse.encode(message.divForeignIssuerReport, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsForeignIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.generateDivForeignIssuerReportResponse = GenerateDividendsForeignIssuerReportResponse.decode(
            reader,
            reader.uint32(),
          );
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.divForeignIssuerReport = GetDividendsForeignIssuerReportResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerResponse {
    return {
      generateDivForeignIssuerReportResponse: isSet(object.generateDivForeignIssuerReportResponse)
        ? GenerateDividendsForeignIssuerReportResponse.fromJSON(object.generateDivForeignIssuerReportResponse)
        : undefined,
      divForeignIssuerReport: isSet(object.divForeignIssuerReport)
        ? GetDividendsForeignIssuerReportResponse.fromJSON(object.divForeignIssuerReport)
        : undefined,
    };
  },

  toJSON(message: GetDividendsForeignIssuerResponse): unknown {
    const obj: any = {};
    if (message.generateDivForeignIssuerReportResponse !== undefined) {
      obj.generateDivForeignIssuerReportResponse = GenerateDividendsForeignIssuerReportResponse.toJSON(
        message.generateDivForeignIssuerReportResponse,
      );
    }
    if (message.divForeignIssuerReport !== undefined) {
      obj.divForeignIssuerReport = GetDividendsForeignIssuerReportResponse.toJSON(message.divForeignIssuerReport);
    }
    return obj;
  },
};

function createBaseGenerateDividendsForeignIssuerReportRequest(): GenerateDividendsForeignIssuerReportRequest {
  return { accountId: "", from: undefined, to: undefined };
}

export const GenerateDividendsForeignIssuerReportRequest = {
  encode(message: GenerateDividendsForeignIssuerReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(18).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDividendsForeignIssuerReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDividendsForeignIssuerReportRequest();
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

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): GenerateDividendsForeignIssuerReportRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GenerateDividendsForeignIssuerReportRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
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

function createBaseGetDividendsForeignIssuerReportRequest(): GetDividendsForeignIssuerReportRequest {
  return { taskId: "", page: undefined };
}

export const GetDividendsForeignIssuerReportRequest = {
  encode(message: GetDividendsForeignIssuerReportRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.page !== undefined) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsForeignIssuerReportRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerReportRequest {
    return {
      taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
      page: isSet(object.page) ? globalThis.Number(object.page) : undefined,
    };
  },

  toJSON(message: GetDividendsForeignIssuerReportRequest): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    if (message.page !== undefined) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },
};

function createBaseGenerateDividendsForeignIssuerReportResponse(): GenerateDividendsForeignIssuerReportResponse {
  return { taskId: "" };
}

export const GenerateDividendsForeignIssuerReportResponse = {
  encode(message: GenerateDividendsForeignIssuerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenerateDividendsForeignIssuerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDividendsForeignIssuerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.taskId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenerateDividendsForeignIssuerReportResponse {
    return { taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "" };
  },

  toJSON(message: GenerateDividendsForeignIssuerReportResponse): unknown {
    const obj: any = {};
    if (message.taskId !== "") {
      obj.taskId = message.taskId;
    }
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerReportResponse(): GetDividendsForeignIssuerReportResponse {
  return { dividendsForeignIssuerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}

export const GetDividendsForeignIssuerReportResponse = {
  encode(message: GetDividendsForeignIssuerReportResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.dividendsForeignIssuerReport) {
      DividendsForeignIssuerReport.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.itemsCount !== 0) {
      writer.uint32(16).int32(message.itemsCount);
    }
    if (message.pagesCount !== 0) {
      writer.uint32(24).int32(message.pagesCount);
    }
    if (message.page !== 0) {
      writer.uint32(32).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetDividendsForeignIssuerReportResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.dividendsForeignIssuerReport.push(DividendsForeignIssuerReport.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.itemsCount = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.pagesCount = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.page = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerReportResponse {
    return {
      dividendsForeignIssuerReport: globalThis.Array.isArray(object?.dividendsForeignIssuerReport)
        ? object.dividendsForeignIssuerReport.map((e: any) => DividendsForeignIssuerReport.fromJSON(e))
        : [],
      itemsCount: isSet(object.itemsCount) ? globalThis.Number(object.itemsCount) : 0,
      pagesCount: isSet(object.pagesCount) ? globalThis.Number(object.pagesCount) : 0,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
    };
  },

  toJSON(message: GetDividendsForeignIssuerReportResponse): unknown {
    const obj: any = {};
    if (message.dividendsForeignIssuerReport?.length) {
      obj.dividendsForeignIssuerReport = message.dividendsForeignIssuerReport.map((e) =>
        DividendsForeignIssuerReport.toJSON(e)
      );
    }
    if (message.itemsCount !== 0) {
      obj.itemsCount = Math.round(message.itemsCount);
    }
    if (message.pagesCount !== 0) {
      obj.pagesCount = Math.round(message.pagesCount);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },
};

function createBaseDividendsForeignIssuerReport(): DividendsForeignIssuerReport {
  return {
    recordDate: undefined,
    paymentDate: undefined,
    securityName: "",
    isin: "",
    issuerCountry: "",
    quantity: 0,
    dividend: undefined,
    externalCommission: undefined,
    dividendGross: undefined,
    tax: undefined,
    dividendAmount: undefined,
    currency: "",
  };
}

export const DividendsForeignIssuerReport = {
  encode(message: DividendsForeignIssuerReport, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recordDate !== undefined) {
      Timestamp.encode(toTimestamp(message.recordDate), writer.uint32(10).fork()).ldelim();
    }
    if (message.paymentDate !== undefined) {
      Timestamp.encode(toTimestamp(message.paymentDate), writer.uint32(18).fork()).ldelim();
    }
    if (message.securityName !== "") {
      writer.uint32(26).string(message.securityName);
    }
    if (message.isin !== "") {
      writer.uint32(34).string(message.isin);
    }
    if (message.issuerCountry !== "") {
      writer.uint32(42).string(message.issuerCountry);
    }
    if (message.quantity !== 0) {
      writer.uint32(48).int64(message.quantity);
    }
    if (message.dividend !== undefined) {
      Quotation.encode(message.dividend, writer.uint32(58).fork()).ldelim();
    }
    if (message.externalCommission !== undefined) {
      Quotation.encode(message.externalCommission, writer.uint32(66).fork()).ldelim();
    }
    if (message.dividendGross !== undefined) {
      Quotation.encode(message.dividendGross, writer.uint32(74).fork()).ldelim();
    }
    if (message.tax !== undefined) {
      Quotation.encode(message.tax, writer.uint32(82).fork()).ldelim();
    }
    if (message.dividendAmount !== undefined) {
      Quotation.encode(message.dividendAmount, writer.uint32(90).fork()).ldelim();
    }
    if (message.currency !== "") {
      writer.uint32(98).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DividendsForeignIssuerReport {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDividendsForeignIssuerReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.recordDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.paymentDate = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securityName = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.isin = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.issuerCountry = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dividend = Quotation.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.externalCommission = Quotation.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.dividendGross = Quotation.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.tax = Quotation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.dividendAmount = Quotation.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.currency = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DividendsForeignIssuerReport {
    return {
      recordDate: isSet(object.recordDate) ? fromJsonTimestamp(object.recordDate) : undefined,
      paymentDate: isSet(object.paymentDate) ? fromJsonTimestamp(object.paymentDate) : undefined,
      securityName: isSet(object.securityName) ? globalThis.String(object.securityName) : "",
      isin: isSet(object.isin) ? globalThis.String(object.isin) : "",
      issuerCountry: isSet(object.issuerCountry) ? globalThis.String(object.issuerCountry) : "",
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      dividend: isSet(object.dividend) ? Quotation.fromJSON(object.dividend) : undefined,
      externalCommission: isSet(object.externalCommission) ? Quotation.fromJSON(object.externalCommission) : undefined,
      dividendGross: isSet(object.dividendGross) ? Quotation.fromJSON(object.dividendGross) : undefined,
      tax: isSet(object.tax) ? Quotation.fromJSON(object.tax) : undefined,
      dividendAmount: isSet(object.dividendAmount) ? Quotation.fromJSON(object.dividendAmount) : undefined,
      currency: isSet(object.currency) ? globalThis.String(object.currency) : "",
    };
  },

  toJSON(message: DividendsForeignIssuerReport): unknown {
    const obj: any = {};
    if (message.recordDate !== undefined) {
      obj.recordDate = message.recordDate.toISOString();
    }
    if (message.paymentDate !== undefined) {
      obj.paymentDate = message.paymentDate.toISOString();
    }
    if (message.securityName !== "") {
      obj.securityName = message.securityName;
    }
    if (message.isin !== "") {
      obj.isin = message.isin;
    }
    if (message.issuerCountry !== "") {
      obj.issuerCountry = message.issuerCountry;
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.dividend !== undefined) {
      obj.dividend = Quotation.toJSON(message.dividend);
    }
    if (message.externalCommission !== undefined) {
      obj.externalCommission = Quotation.toJSON(message.externalCommission);
    }
    if (message.dividendGross !== undefined) {
      obj.dividendGross = Quotation.toJSON(message.dividendGross);
    }
    if (message.tax !== undefined) {
      obj.tax = Quotation.toJSON(message.tax);
    }
    if (message.dividendAmount !== undefined) {
      obj.dividendAmount = Quotation.toJSON(message.dividendAmount);
    }
    if (message.currency !== "") {
      obj.currency = message.currency;
    }
    return obj;
  },
};

function createBasePortfolioStreamRequest(): PortfolioStreamRequest {
  return { accounts: [], pingSettings: undefined };
}

export const PortfolioStreamRequest = {
  encode(message: PortfolioStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.pingSettings !== undefined) {
      PingDelaySettings.encode(message.pingSettings, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioStreamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStreamRequest();
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
          if (tag !== 122) {
            break;
          }

          message.pingSettings = PingDelaySettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PortfolioStreamRequest {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      pingSettings: isSet(object.pingSettings) ? PingDelaySettings.fromJSON(object.pingSettings) : undefined,
    };
  },

  toJSON(message: PortfolioStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.pingSettings !== undefined) {
      obj.pingSettings = PingDelaySettings.toJSON(message.pingSettings);
    }
    return obj;
  },
};

function createBasePortfolioStreamResponse(): PortfolioStreamResponse {
  return { subscriptions: undefined, portfolio: undefined, ping: undefined };
}

export const PortfolioStreamResponse = {
  encode(message: PortfolioStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptions !== undefined) {
      PortfolioSubscriptionResult.encode(message.subscriptions, writer.uint32(10).fork()).ldelim();
    }
    if (message.portfolio !== undefined) {
      PortfolioResponse.encode(message.portfolio, writer.uint32(18).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioStreamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions = PortfolioSubscriptionResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.portfolio = PortfolioResponse.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): PortfolioStreamResponse {
    return {
      subscriptions: isSet(object.subscriptions)
        ? PortfolioSubscriptionResult.fromJSON(object.subscriptions)
        : undefined,
      portfolio: isSet(object.portfolio) ? PortfolioResponse.fromJSON(object.portfolio) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
    };
  },

  toJSON(message: PortfolioStreamResponse): unknown {
    const obj: any = {};
    if (message.subscriptions !== undefined) {
      obj.subscriptions = PortfolioSubscriptionResult.toJSON(message.subscriptions);
    }
    if (message.portfolio !== undefined) {
      obj.portfolio = PortfolioResponse.toJSON(message.portfolio);
    }
    if (message.ping !== undefined) {
      obj.ping = Ping.toJSON(message.ping);
    }
    return obj;
  },
};

function createBasePortfolioSubscriptionResult(): PortfolioSubscriptionResult {
  return { accounts: [], trackingId: "", streamId: "" };
}

export const PortfolioSubscriptionResult = {
  encode(message: PortfolioSubscriptionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      AccountSubscriptionStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.trackingId !== "") {
      writer.uint32(58).string(message.trackingId);
    }
    if (message.streamId !== "") {
      writer.uint32(66).string(message.streamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioSubscriptionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioSubscriptionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(AccountSubscriptionStatus.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.streamId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PortfolioSubscriptionResult {
    return {
      accounts: globalThis.Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => AccountSubscriptionStatus.fromJSON(e))
        : [],
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      streamId: isSet(object.streamId) ? globalThis.String(object.streamId) : "",
    };
  },

  toJSON(message: PortfolioSubscriptionResult): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts.map((e) => AccountSubscriptionStatus.toJSON(e));
    }
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.streamId !== "") {
      obj.streamId = message.streamId;
    }
    return obj;
  },
};

function createBaseAccountSubscriptionStatus(): AccountSubscriptionStatus {
  return { accountId: "", subscriptionStatus: 0 };
}

export const AccountSubscriptionStatus = {
  encode(message: AccountSubscriptionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(48).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountSubscriptionStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountSubscriptionStatus();
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
          if (tag !== 48) {
            break;
          }

          message.subscriptionStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountSubscriptionStatus {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? portfolioSubscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
    };
  },

  toJSON(message: AccountSubscriptionStatus): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = portfolioSubscriptionStatusToJSON(message.subscriptionStatus);
    }
    return obj;
  },
};

function createBaseGetOperationsByCursorRequest(): GetOperationsByCursorRequest {
  return {
    accountId: "",
    instrumentId: undefined,
    from: undefined,
    to: undefined,
    cursor: undefined,
    limit: undefined,
    operationTypes: [],
    state: undefined,
    withoutCommissions: undefined,
    withoutTrades: undefined,
    withoutOvernights: undefined,
  };
}

export const GetOperationsByCursorRequest = {
  encode(message: GetOperationsByCursorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.instrumentId !== undefined) {
      writer.uint32(18).string(message.instrumentId);
    }
    if (message.from !== undefined) {
      Timestamp.encode(toTimestamp(message.from), writer.uint32(50).fork()).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(toTimestamp(message.to), writer.uint32(58).fork()).ldelim();
    }
    if (message.cursor !== undefined) {
      writer.uint32(90).string(message.cursor);
    }
    if (message.limit !== undefined) {
      writer.uint32(96).int32(message.limit);
    }
    writer.uint32(106).fork();
    for (const v of message.operationTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.state !== undefined) {
      writer.uint32(112).int32(message.state);
    }
    if (message.withoutCommissions !== undefined) {
      writer.uint32(120).bool(message.withoutCommissions);
    }
    if (message.withoutTrades !== undefined) {
      writer.uint32(128).bool(message.withoutTrades);
    }
    if (message.withoutOvernights !== undefined) {
      writer.uint32(136).bool(message.withoutOvernights);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationsByCursorRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsByCursorRequest();
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
        case 6:
          if (tag !== 50) {
            break;
          }

          message.from = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.cursor = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.limit = reader.int32();
          continue;
        case 13:
          if (tag === 104) {
            message.operationTypes.push(reader.int32() as any);

            continue;
          }

          if (tag === 106) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operationTypes.push(reader.int32() as any);
            }

            continue;
          }

          break;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.withoutCommissions = reader.bool();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.withoutTrades = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.withoutOvernights = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationsByCursorRequest {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      instrumentId: isSet(object.instrumentId) ? globalThis.String(object.instrumentId) : undefined,
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      cursor: isSet(object.cursor) ? globalThis.String(object.cursor) : undefined,
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : undefined,
      operationTypes: globalThis.Array.isArray(object?.operationTypes)
        ? object.operationTypes.map((e: any) => operationTypeFromJSON(e))
        : [],
      state: isSet(object.state) ? operationStateFromJSON(object.state) : undefined,
      withoutCommissions: isSet(object.withoutCommissions) ? globalThis.Boolean(object.withoutCommissions) : undefined,
      withoutTrades: isSet(object.withoutTrades) ? globalThis.Boolean(object.withoutTrades) : undefined,
      withoutOvernights: isSet(object.withoutOvernights) ? globalThis.Boolean(object.withoutOvernights) : undefined,
    };
  },

  toJSON(message: GetOperationsByCursorRequest): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.instrumentId !== undefined) {
      obj.instrumentId = message.instrumentId;
    }
    if (message.from !== undefined) {
      obj.from = message.from.toISOString();
    }
    if (message.to !== undefined) {
      obj.to = message.to.toISOString();
    }
    if (message.cursor !== undefined) {
      obj.cursor = message.cursor;
    }
    if (message.limit !== undefined) {
      obj.limit = Math.round(message.limit);
    }
    if (message.operationTypes?.length) {
      obj.operationTypes = message.operationTypes.map((e) => operationTypeToJSON(e));
    }
    if (message.state !== undefined) {
      obj.state = operationStateToJSON(message.state);
    }
    if (message.withoutCommissions !== undefined) {
      obj.withoutCommissions = message.withoutCommissions;
    }
    if (message.withoutTrades !== undefined) {
      obj.withoutTrades = message.withoutTrades;
    }
    if (message.withoutOvernights !== undefined) {
      obj.withoutOvernights = message.withoutOvernights;
    }
    return obj;
  },
};

function createBaseGetOperationsByCursorResponse(): GetOperationsByCursorResponse {
  return { hasNext: false, nextCursor: "", items: [] };
}

export const GetOperationsByCursorResponse = {
  encode(message: GetOperationsByCursorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hasNext === true) {
      writer.uint32(8).bool(message.hasNext);
    }
    if (message.nextCursor !== "") {
      writer.uint32(18).string(message.nextCursor);
    }
    for (const v of message.items) {
      OperationItem.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetOperationsByCursorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsByCursorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.hasNext = reader.bool();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.nextCursor = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.items.push(OperationItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetOperationsByCursorResponse {
    return {
      hasNext: isSet(object.hasNext) ? globalThis.Boolean(object.hasNext) : false,
      nextCursor: isSet(object.nextCursor) ? globalThis.String(object.nextCursor) : "",
      items: globalThis.Array.isArray(object?.items) ? object.items.map((e: any) => OperationItem.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetOperationsByCursorResponse): unknown {
    const obj: any = {};
    if (message.hasNext === true) {
      obj.hasNext = message.hasNext;
    }
    if (message.nextCursor !== "") {
      obj.nextCursor = message.nextCursor;
    }
    if (message.items?.length) {
      obj.items = message.items.map((e) => OperationItem.toJSON(e));
    }
    return obj;
  },
};

function createBaseOperationItem(): OperationItem {
  return {
    cursor: "",
    brokerAccountId: "",
    id: "",
    parentOperationId: "",
    name: "",
    date: undefined,
    type: 0,
    description: "",
    state: 0,
    instrumentUid: "",
    figi: "",
    instrumentType: "",
    instrumentKind: 0,
    positionUid: "",
    payment: undefined,
    price: undefined,
    commission: undefined,
    yield: undefined,
    yieldRelative: undefined,
    accruedInt: undefined,
    quantity: 0,
    quantityRest: 0,
    quantityDone: 0,
    cancelDateTime: undefined,
    cancelReason: "",
    tradesInfo: undefined,
    assetUid: "",
    childOperations: [],
  };
}

export const OperationItem = {
  encode(message: OperationItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cursor !== "") {
      writer.uint32(10).string(message.cursor);
    }
    if (message.brokerAccountId !== "") {
      writer.uint32(50).string(message.brokerAccountId);
    }
    if (message.id !== "") {
      writer.uint32(130).string(message.id);
    }
    if (message.parentOperationId !== "") {
      writer.uint32(138).string(message.parentOperationId);
    }
    if (message.name !== "") {
      writer.uint32(146).string(message.name);
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(170).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(176).int32(message.type);
    }
    if (message.description !== "") {
      writer.uint32(186).string(message.description);
    }
    if (message.state !== 0) {
      writer.uint32(192).int32(message.state);
    }
    if (message.instrumentUid !== "") {
      writer.uint32(250).string(message.instrumentUid);
    }
    if (message.figi !== "") {
      writer.uint32(258).string(message.figi);
    }
    if (message.instrumentType !== "") {
      writer.uint32(266).string(message.instrumentType);
    }
    if (message.instrumentKind !== 0) {
      writer.uint32(272).int32(message.instrumentKind);
    }
    if (message.positionUid !== "") {
      writer.uint32(282).string(message.positionUid);
    }
    if (message.payment !== undefined) {
      MoneyValue.encode(message.payment, writer.uint32(330).fork()).ldelim();
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(338).fork()).ldelim();
    }
    if (message.commission !== undefined) {
      MoneyValue.encode(message.commission, writer.uint32(346).fork()).ldelim();
    }
    if (message.yield !== undefined) {
      MoneyValue.encode(message.yield, writer.uint32(354).fork()).ldelim();
    }
    if (message.yieldRelative !== undefined) {
      Quotation.encode(message.yieldRelative, writer.uint32(362).fork()).ldelim();
    }
    if (message.accruedInt !== undefined) {
      MoneyValue.encode(message.accruedInt, writer.uint32(370).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(408).int64(message.quantity);
    }
    if (message.quantityRest !== 0) {
      writer.uint32(416).int64(message.quantityRest);
    }
    if (message.quantityDone !== 0) {
      writer.uint32(424).int64(message.quantityDone);
    }
    if (message.cancelDateTime !== undefined) {
      Timestamp.encode(toTimestamp(message.cancelDateTime), writer.uint32(450).fork()).ldelim();
    }
    if (message.cancelReason !== "") {
      writer.uint32(458).string(message.cancelReason);
    }
    if (message.tradesInfo !== undefined) {
      OperationItemTrades.encode(message.tradesInfo, writer.uint32(490).fork()).ldelim();
    }
    if (message.assetUid !== "") {
      writer.uint32(514).string(message.assetUid);
    }
    for (const v of message.childOperations) {
      ChildOperationItem.encode(v!, writer.uint32(522).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.cursor = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.brokerAccountId = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.id = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.parentOperationId = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.name = reader.string();
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 22:
          if (tag !== 176) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.description = reader.string();
          continue;
        case 24:
          if (tag !== 192) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.figi = reader.string();
          continue;
        case 33:
          if (tag !== 266) {
            break;
          }

          message.instrumentType = reader.string();
          continue;
        case 34:
          if (tag !== 272) {
            break;
          }

          message.instrumentKind = reader.int32() as any;
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.positionUid = reader.string();
          continue;
        case 41:
          if (tag !== 330) {
            break;
          }

          message.payment = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 42:
          if (tag !== 338) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 43:
          if (tag !== 346) {
            break;
          }

          message.commission = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 44:
          if (tag !== 354) {
            break;
          }

          message.yield = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 45:
          if (tag !== 362) {
            break;
          }

          message.yieldRelative = Quotation.decode(reader, reader.uint32());
          continue;
        case 46:
          if (tag !== 370) {
            break;
          }

          message.accruedInt = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 51:
          if (tag !== 408) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 52:
          if (tag !== 416) {
            break;
          }

          message.quantityRest = longToNumber(reader.int64() as Long);
          continue;
        case 53:
          if (tag !== 424) {
            break;
          }

          message.quantityDone = longToNumber(reader.int64() as Long);
          continue;
        case 56:
          if (tag !== 450) {
            break;
          }

          message.cancelDateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 57:
          if (tag !== 458) {
            break;
          }

          message.cancelReason = reader.string();
          continue;
        case 61:
          if (tag !== 490) {
            break;
          }

          message.tradesInfo = OperationItemTrades.decode(reader, reader.uint32());
          continue;
        case 64:
          if (tag !== 514) {
            break;
          }

          message.assetUid = reader.string();
          continue;
        case 65:
          if (tag !== 522) {
            break;
          }

          message.childOperations.push(ChildOperationItem.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationItem {
    return {
      cursor: isSet(object.cursor) ? globalThis.String(object.cursor) : "",
      brokerAccountId: isSet(object.brokerAccountId) ? globalThis.String(object.brokerAccountId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      parentOperationId: isSet(object.parentOperationId) ? globalThis.String(object.parentOperationId) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      type: isSet(object.type) ? operationTypeFromJSON(object.type) : 0,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      figi: isSet(object.figi) ? globalThis.String(object.figi) : "",
      instrumentType: isSet(object.instrumentType) ? globalThis.String(object.instrumentType) : "",
      instrumentKind: isSet(object.instrumentKind) ? instrumentTypeFromJSON(object.instrumentKind) : 0,
      positionUid: isSet(object.positionUid) ? globalThis.String(object.positionUid) : "",
      payment: isSet(object.payment) ? MoneyValue.fromJSON(object.payment) : undefined,
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      commission: isSet(object.commission) ? MoneyValue.fromJSON(object.commission) : undefined,
      yield: isSet(object.yield) ? MoneyValue.fromJSON(object.yield) : undefined,
      yieldRelative: isSet(object.yieldRelative) ? Quotation.fromJSON(object.yieldRelative) : undefined,
      accruedInt: isSet(object.accruedInt) ? MoneyValue.fromJSON(object.accruedInt) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      quantityRest: isSet(object.quantityRest) ? globalThis.Number(object.quantityRest) : 0,
      quantityDone: isSet(object.quantityDone) ? globalThis.Number(object.quantityDone) : 0,
      cancelDateTime: isSet(object.cancelDateTime) ? fromJsonTimestamp(object.cancelDateTime) : undefined,
      cancelReason: isSet(object.cancelReason) ? globalThis.String(object.cancelReason) : "",
      tradesInfo: isSet(object.tradesInfo) ? OperationItemTrades.fromJSON(object.tradesInfo) : undefined,
      assetUid: isSet(object.assetUid) ? globalThis.String(object.assetUid) : "",
      childOperations: globalThis.Array.isArray(object?.childOperations)
        ? object.childOperations.map((e: any) => ChildOperationItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationItem): unknown {
    const obj: any = {};
    if (message.cursor !== "") {
      obj.cursor = message.cursor;
    }
    if (message.brokerAccountId !== "") {
      obj.brokerAccountId = message.brokerAccountId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.parentOperationId !== "") {
      obj.parentOperationId = message.parentOperationId;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.type !== 0) {
      obj.type = operationTypeToJSON(message.type);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.state !== 0) {
      obj.state = operationStateToJSON(message.state);
    }
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.figi !== "") {
      obj.figi = message.figi;
    }
    if (message.instrumentType !== "") {
      obj.instrumentType = message.instrumentType;
    }
    if (message.instrumentKind !== 0) {
      obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind);
    }
    if (message.positionUid !== "") {
      obj.positionUid = message.positionUid;
    }
    if (message.payment !== undefined) {
      obj.payment = MoneyValue.toJSON(message.payment);
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.commission !== undefined) {
      obj.commission = MoneyValue.toJSON(message.commission);
    }
    if (message.yield !== undefined) {
      obj.yield = MoneyValue.toJSON(message.yield);
    }
    if (message.yieldRelative !== undefined) {
      obj.yieldRelative = Quotation.toJSON(message.yieldRelative);
    }
    if (message.accruedInt !== undefined) {
      obj.accruedInt = MoneyValue.toJSON(message.accruedInt);
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.quantityRest !== 0) {
      obj.quantityRest = Math.round(message.quantityRest);
    }
    if (message.quantityDone !== 0) {
      obj.quantityDone = Math.round(message.quantityDone);
    }
    if (message.cancelDateTime !== undefined) {
      obj.cancelDateTime = message.cancelDateTime.toISOString();
    }
    if (message.cancelReason !== "") {
      obj.cancelReason = message.cancelReason;
    }
    if (message.tradesInfo !== undefined) {
      obj.tradesInfo = OperationItemTrades.toJSON(message.tradesInfo);
    }
    if (message.assetUid !== "") {
      obj.assetUid = message.assetUid;
    }
    if (message.childOperations?.length) {
      obj.childOperations = message.childOperations.map((e) => ChildOperationItem.toJSON(e));
    }
    return obj;
  },
};

function createBaseOperationItemTrades(): OperationItemTrades {
  return { trades: [] };
}

export const OperationItemTrades = {
  encode(message: OperationItemTrades, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.trades) {
      OperationItemTrade.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItemTrades {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItemTrades();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.trades.push(OperationItemTrade.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationItemTrades {
    return {
      trades: globalThis.Array.isArray(object?.trades)
        ? object.trades.map((e: any) => OperationItemTrade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationItemTrades): unknown {
    const obj: any = {};
    if (message.trades?.length) {
      obj.trades = message.trades.map((e) => OperationItemTrade.toJSON(e));
    }
    return obj;
  },
};

function createBaseOperationItemTrade(): OperationItemTrade {
  return { num: "", date: undefined, quantity: 0, price: undefined, yield: undefined, yieldRelative: undefined };
}

export const OperationItemTrade = {
  encode(message: OperationItemTrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.num !== "") {
      writer.uint32(10).string(message.num);
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(50).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(88).int64(message.quantity);
    }
    if (message.price !== undefined) {
      MoneyValue.encode(message.price, writer.uint32(130).fork()).ldelim();
    }
    if (message.yield !== undefined) {
      MoneyValue.encode(message.yield, writer.uint32(170).fork()).ldelim();
    }
    if (message.yieldRelative !== undefined) {
      Quotation.encode(message.yieldRelative, writer.uint32(178).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItemTrade {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItemTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.num = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.quantity = longToNumber(reader.int64() as Long);
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.price = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.yield = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.yieldRelative = Quotation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OperationItemTrade {
    return {
      num: isSet(object.num) ? globalThis.String(object.num) : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      quantity: isSet(object.quantity) ? globalThis.Number(object.quantity) : 0,
      price: isSet(object.price) ? MoneyValue.fromJSON(object.price) : undefined,
      yield: isSet(object.yield) ? MoneyValue.fromJSON(object.yield) : undefined,
      yieldRelative: isSet(object.yieldRelative) ? Quotation.fromJSON(object.yieldRelative) : undefined,
    };
  },

  toJSON(message: OperationItemTrade): unknown {
    const obj: any = {};
    if (message.num !== "") {
      obj.num = message.num;
    }
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    if (message.quantity !== 0) {
      obj.quantity = Math.round(message.quantity);
    }
    if (message.price !== undefined) {
      obj.price = MoneyValue.toJSON(message.price);
    }
    if (message.yield !== undefined) {
      obj.yield = MoneyValue.toJSON(message.yield);
    }
    if (message.yieldRelative !== undefined) {
      obj.yieldRelative = Quotation.toJSON(message.yieldRelative);
    }
    return obj;
  },
};

function createBasePositionsStreamRequest(): PositionsStreamRequest {
  return { accounts: [], withInitialPositions: false, pingSettings: undefined };
}

export const PositionsStreamRequest = {
  encode(message: PositionsStreamRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    if (message.withInitialPositions === true) {
      writer.uint32(24).bool(message.withInitialPositions);
    }
    if (message.pingSettings !== undefined) {
      PingDelaySettings.encode(message.pingSettings, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsStreamRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(reader.string());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.withInitialPositions = reader.bool();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.pingSettings = PingDelaySettings.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsStreamRequest {
    return {
      accounts: globalThis.Array.isArray(object?.accounts) ? object.accounts.map((e: any) => globalThis.String(e)) : [],
      withInitialPositions: isSet(object.withInitialPositions)
        ? globalThis.Boolean(object.withInitialPositions)
        : false,
      pingSettings: isSet(object.pingSettings) ? PingDelaySettings.fromJSON(object.pingSettings) : undefined,
    };
  },

  toJSON(message: PositionsStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts;
    }
    if (message.withInitialPositions === true) {
      obj.withInitialPositions = message.withInitialPositions;
    }
    if (message.pingSettings !== undefined) {
      obj.pingSettings = PingDelaySettings.toJSON(message.pingSettings);
    }
    return obj;
  },
};

function createBasePositionsStreamResponse(): PositionsStreamResponse {
  return { subscriptions: undefined, position: undefined, ping: undefined, initialPositions: undefined };
}

export const PositionsStreamResponse = {
  encode(message: PositionsStreamResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subscriptions !== undefined) {
      PositionsSubscriptionResult.encode(message.subscriptions, writer.uint32(10).fork()).ldelim();
    }
    if (message.position !== undefined) {
      PositionData.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
    }
    if (message.initialPositions !== undefined) {
      PositionsResponse.encode(message.initialPositions, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsStreamResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.subscriptions = PositionsSubscriptionResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.position = PositionData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ping = Ping.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.initialPositions = PositionsResponse.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsStreamResponse {
    return {
      subscriptions: isSet(object.subscriptions)
        ? PositionsSubscriptionResult.fromJSON(object.subscriptions)
        : undefined,
      position: isSet(object.position) ? PositionData.fromJSON(object.position) : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
      initialPositions: isSet(object.initialPositions)
        ? PositionsResponse.fromJSON(object.initialPositions)
        : undefined,
    };
  },

  toJSON(message: PositionsStreamResponse): unknown {
    const obj: any = {};
    if (message.subscriptions !== undefined) {
      obj.subscriptions = PositionsSubscriptionResult.toJSON(message.subscriptions);
    }
    if (message.position !== undefined) {
      obj.position = PositionData.toJSON(message.position);
    }
    if (message.ping !== undefined) {
      obj.ping = Ping.toJSON(message.ping);
    }
    if (message.initialPositions !== undefined) {
      obj.initialPositions = PositionsResponse.toJSON(message.initialPositions);
    }
    return obj;
  },
};

function createBasePositionsSubscriptionResult(): PositionsSubscriptionResult {
  return { accounts: [], trackingId: "", streamId: "" };
}

export const PositionsSubscriptionResult = {
  encode(message: PositionsSubscriptionResult, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accounts) {
      PositionsSubscriptionStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.trackingId !== "") {
      writer.uint32(58).string(message.trackingId);
    }
    if (message.streamId !== "") {
      writer.uint32(66).string(message.streamId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsSubscriptionResult {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscriptionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accounts.push(PositionsSubscriptionStatus.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.trackingId = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.streamId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsSubscriptionResult {
    return {
      accounts: globalThis.Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => PositionsSubscriptionStatus.fromJSON(e))
        : [],
      trackingId: isSet(object.trackingId) ? globalThis.String(object.trackingId) : "",
      streamId: isSet(object.streamId) ? globalThis.String(object.streamId) : "",
    };
  },

  toJSON(message: PositionsSubscriptionResult): unknown {
    const obj: any = {};
    if (message.accounts?.length) {
      obj.accounts = message.accounts.map((e) => PositionsSubscriptionStatus.toJSON(e));
    }
    if (message.trackingId !== "") {
      obj.trackingId = message.trackingId;
    }
    if (message.streamId !== "") {
      obj.streamId = message.streamId;
    }
    return obj;
  },
};

function createBasePositionsSubscriptionStatus(): PositionsSubscriptionStatus {
  return { accountId: "", subscriptionStatus: 0 };
}

export const PositionsSubscriptionStatus = {
  encode(message: PositionsSubscriptionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(48).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsSubscriptionStatus {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscriptionStatus();
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
          if (tag !== 48) {
            break;
          }

          message.subscriptionStatus = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsSubscriptionStatus {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? positionsAccountSubscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
    };
  },

  toJSON(message: PositionsSubscriptionStatus): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.subscriptionStatus !== 0) {
      obj.subscriptionStatus = positionsAccountSubscriptionStatusToJSON(message.subscriptionStatus);
    }
    return obj;
  },
};

function createBasePositionData(): PositionData {
  return { accountId: "", money: [], securities: [], futures: [], options: [], date: undefined };
}

export const PositionData = {
  encode(message: PositionData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    for (const v of message.money) {
      PositionsMoney.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.securities) {
      PositionsSecurities.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.futures) {
      PositionsFutures.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.options) {
      PositionsOptions.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.date !== undefined) {
      Timestamp.encode(toTimestamp(message.date), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionData {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionData();
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

          message.money.push(PositionsMoney.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.securities.push(PositionsSecurities.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.futures.push(PositionsFutures.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.options.push(PositionsOptions.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.date = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionData {
    return {
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
      money: globalThis.Array.isArray(object?.money) ? object.money.map((e: any) => PositionsMoney.fromJSON(e)) : [],
      securities: globalThis.Array.isArray(object?.securities)
        ? object.securities.map((e: any) => PositionsSecurities.fromJSON(e))
        : [],
      futures: globalThis.Array.isArray(object?.futures)
        ? object.futures.map((e: any) => PositionsFutures.fromJSON(e))
        : [],
      options: globalThis.Array.isArray(object?.options)
        ? object.options.map((e: any) => PositionsOptions.fromJSON(e))
        : [],
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
    };
  },

  toJSON(message: PositionData): unknown {
    const obj: any = {};
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    if (message.money?.length) {
      obj.money = message.money.map((e) => PositionsMoney.toJSON(e));
    }
    if (message.securities?.length) {
      obj.securities = message.securities.map((e) => PositionsSecurities.toJSON(e));
    }
    if (message.futures?.length) {
      obj.futures = message.futures.map((e) => PositionsFutures.toJSON(e));
    }
    if (message.options?.length) {
      obj.options = message.options.map((e) => PositionsOptions.toJSON(e));
    }
    if (message.date !== undefined) {
      obj.date = message.date.toISOString();
    }
    return obj;
  },
};

function createBasePositionsMoney(): PositionsMoney {
  return { availableValue: undefined, blockedValue: undefined };
}

export const PositionsMoney = {
  encode(message: PositionsMoney, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.availableValue !== undefined) {
      MoneyValue.encode(message.availableValue, writer.uint32(10).fork()).ldelim();
    }
    if (message.blockedValue !== undefined) {
      MoneyValue.encode(message.blockedValue, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsMoney {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.availableValue = MoneyValue.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.blockedValue = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PositionsMoney {
    return {
      availableValue: isSet(object.availableValue) ? MoneyValue.fromJSON(object.availableValue) : undefined,
      blockedValue: isSet(object.blockedValue) ? MoneyValue.fromJSON(object.blockedValue) : undefined,
    };
  },

  toJSON(message: PositionsMoney): unknown {
    const obj: any = {};
    if (message.availableValue !== undefined) {
      obj.availableValue = MoneyValue.toJSON(message.availableValue);
    }
    if (message.blockedValue !== undefined) {
      obj.blockedValue = MoneyValue.toJSON(message.blockedValue);
    }
    return obj;
  },
};

function createBaseChildOperationItem(): ChildOperationItem {
  return { instrumentUid: "", payment: undefined };
}

export const ChildOperationItem = {
  encode(message: ChildOperationItem, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.instrumentUid !== "") {
      writer.uint32(10).string(message.instrumentUid);
    }
    if (message.payment !== undefined) {
      MoneyValue.encode(message.payment, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChildOperationItem {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChildOperationItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.instrumentUid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.payment = MoneyValue.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ChildOperationItem {
    return {
      instrumentUid: isSet(object.instrumentUid) ? globalThis.String(object.instrumentUid) : "",
      payment: isSet(object.payment) ? MoneyValue.fromJSON(object.payment) : undefined,
    };
  },

  toJSON(message: ChildOperationItem): unknown {
    const obj: any = {};
    if (message.instrumentUid !== "") {
      obj.instrumentUid = message.instrumentUid;
    }
    if (message.payment !== undefined) {
      obj.payment = MoneyValue.toJSON(message.payment);
    }
    return obj;
  },
};

/**
 * С помощью методов сервиса можно получить:</br></br> **1**. Список операций по счёту.</br> **2**.
 * Портфель по счёту.</br> **3**. Позиции ценных бумаг на счёте.</br> **4**.
 * Доступный остаток для вывода средств.</br> **5**. Различные отчёты.
 */
export type OperationsServiceDefinition = typeof OperationsServiceDefinition;
export const OperationsServiceDefinition = {
  name: "OperationsService",
  fullName: "tinkoff.public.invest.api.contract.v1.OperationsService",
  methods: {
    /**
     * Получить список операций по счёту. При работе с методом учитывайте
     * [особенности взаимодействия](/investAPI/operations_problems).
     */
    getOperations: {
      name: "GetOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить портфель по счёту. */
    getPortfolio: {
      name: "GetPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** Получить список позиций по счёту. */
    getPositions: {
      name: "GetPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить доступный остаток для вывода средств. */
    getWithdrawLimits: {
      name: "GetWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
    /** Получить брокерский отчёт. */
    getBrokerReport: {
      name: "GetBrokerReport",
      requestType: BrokerReportRequest,
      requestStream: false,
      responseType: BrokerReportResponse,
      responseStream: false,
      options: {},
    },
    /** Получить отчёт «Справка о доходах за пределами РФ». */
    getDividendsForeignIssuer: {
      name: "GetDividendsForeignIssuer",
      requestType: GetDividendsForeignIssuerRequest,
      requestStream: false,
      responseType: GetDividendsForeignIssuerResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Получить список операций по счёту с пагинацией. При работе с методом учитывайте
     * [особенности взаимодействия](/investAPI/operations_problems).
     */
    getOperationsByCursor: {
      name: "GetOperationsByCursor",
      requestType: GetOperationsByCursorRequest,
      requestStream: false,
      responseType: GetOperationsByCursorResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface OperationsServiceImplementation<CallContextExt = {}> {
  /**
   * Получить список операций по счёту. При работе с методом учитывайте
   * [особенности взаимодействия](/investAPI/operations_problems).
   */
  getOperations(request: OperationsRequest, context: CallContext & CallContextExt): Promise<OperationsResponse>;
  /** Получить портфель по счёту. */
  getPortfolio(request: PortfolioRequest, context: CallContext & CallContextExt): Promise<PortfolioResponse>;
  /** Получить список позиций по счёту. */
  getPositions(request: PositionsRequest, context: CallContext & CallContextExt): Promise<PositionsResponse>;
  /** Получить доступный остаток для вывода средств. */
  getWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt,
  ): Promise<WithdrawLimitsResponse>;
  /** Получить брокерский отчёт. */
  getBrokerReport(request: BrokerReportRequest, context: CallContext & CallContextExt): Promise<BrokerReportResponse>;
  /** Получить отчёт «Справка о доходах за пределами РФ». */
  getDividendsForeignIssuer(
    request: GetDividendsForeignIssuerRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetDividendsForeignIssuerResponse>;
  /**
   * Получить список операций по счёту с пагинацией. При работе с методом учитывайте
   * [особенности взаимодействия](/investAPI/operations_problems).
   */
  getOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt,
  ): Promise<GetOperationsByCursorResponse>;
}

export interface OperationsServiceClient<CallOptionsExt = {}> {
  /**
   * Получить список операций по счёту. При работе с методом учитывайте
   * [особенности взаимодействия](/investAPI/operations_problems).
   */
  getOperations(request: OperationsRequest, options?: CallOptions & CallOptionsExt): Promise<OperationsResponse>;
  /** Получить портфель по счёту. */
  getPortfolio(request: PortfolioRequest, options?: CallOptions & CallOptionsExt): Promise<PortfolioResponse>;
  /** Получить список позиций по счёту. */
  getPositions(request: PositionsRequest, options?: CallOptions & CallOptionsExt): Promise<PositionsResponse>;
  /** Получить доступный остаток для вывода средств. */
  getWithdrawLimits(
    request: WithdrawLimitsRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<WithdrawLimitsResponse>;
  /** Получить брокерский отчёт. */
  getBrokerReport(request: BrokerReportRequest, options?: CallOptions & CallOptionsExt): Promise<BrokerReportResponse>;
  /** Получить отчёт «Справка о доходах за пределами РФ». */
  getDividendsForeignIssuer(
    request: GetDividendsForeignIssuerRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetDividendsForeignIssuerResponse>;
  /**
   * Получить список операций по счёту с пагинацией. При работе с методом учитывайте
   * [особенности взаимодействия](/investAPI/operations_problems).
   */
  getOperationsByCursor(
    request: GetOperationsByCursorRequest,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetOperationsByCursorResponse>;
}

export type OperationsStreamServiceDefinition = typeof OperationsStreamServiceDefinition;
export const OperationsStreamServiceDefinition = {
  name: "OperationsStreamService",
  fullName: "tinkoff.public.invest.api.contract.v1.OperationsStreamService",
  methods: {
    /** Server-side stream обновлений портфеля. */
    portfolioStream: {
      name: "PortfolioStream",
      requestType: PortfolioStreamRequest,
      requestStream: false,
      responseType: PortfolioStreamResponse,
      responseStream: true,
      options: {},
    },
    /** Server-side stream обновлений информации по изменению позиций портфеля. */
    positionsStream: {
      name: "PositionsStream",
      requestType: PositionsStreamRequest,
      requestStream: false,
      responseType: PositionsStreamResponse,
      responseStream: true,
      options: {},
    },
  },
} as const;

export interface OperationsStreamServiceImplementation<CallContextExt = {}> {
  /** Server-side stream обновлений портфеля. */
  portfolioStream(
    request: PortfolioStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<PortfolioStreamResponse>;
  /** Server-side stream обновлений информации по изменению позиций портфеля. */
  positionsStream(
    request: PositionsStreamRequest,
    context: CallContext & CallContextExt,
  ): ServerStreamingMethodResult<PositionsStreamResponse>;
}

export interface OperationsStreamServiceClient<CallOptionsExt = {}> {
  /** Server-side stream обновлений портфеля. */
  portfolioStream(
    request: PortfolioStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PortfolioStreamResponse>;
  /** Server-side stream обновлений информации по изменению позиций портфеля. */
  positionsStream(
    request: PositionsStreamRequest,
    options?: CallOptions & CallOptionsExt,
  ): AsyncIterable<PositionsStreamResponse>;
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
