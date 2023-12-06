/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import {
  MoneyValue,
  Quotation,
  InstrumentType,
  Ping,
  instrumentTypeFromJSON,
  instrumentTypeToJSON,
} from "./common.js";
import { CallContext, CallOptions } from "nice-grpc-common";
import { Timestamp } from "./google/protobuf/timestamp.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Статус запрашиваемых операций. */
export enum OperationState {
  /** OPERATION_STATE_UNSPECIFIED - Статус операции не определён */
  OPERATION_STATE_UNSPECIFIED = 0,
  /** OPERATION_STATE_EXECUTED - Исполнена. */
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
  /** OPERATION_TYPE_OUT_FEE - Комиссия за вывод валюты с брокерского счета. */
  OPERATION_TYPE_OUT_FEE = 46,
  /** OPERATION_TYPE_OUT_STAMP_DUTY - Гербовый сбор. */
  OPERATION_TYPE_OUT_STAMP_DUTY = 47,
  /** OPERATION_TYPE_OUTPUT_SWIFT - SWIFT-перевод */
  OPERATION_TYPE_OUTPUT_SWIFT = 50,
  /** OPERATION_TYPE_INPUT_SWIFT - SWIFT-перевод */
  OPERATION_TYPE_INPUT_SWIFT = 51,
  /** OPERATION_TYPE_OUTPUT_ACQUIRING - Перевод на карту */
  OPERATION_TYPE_OUTPUT_ACQUIRING = 53,
  /** OPERATION_TYPE_INPUT_ACQUIRING - Перевод с карты */
  OPERATION_TYPE_INPUT_ACQUIRING = 54,
  /** OPERATION_TYPE_OUTPUT_PENALTY - Комиссия за вывод средств */
  OPERATION_TYPE_OUTPUT_PENALTY = 55,
  /** OPERATION_TYPE_ADVICE_FEE - Списание оплаты за сервис Советов */
  OPERATION_TYPE_ADVICE_FEE = 56,
  /** OPERATION_TYPE_TRANS_IIS_BS - Перевод ценных бумаг с ИИС на Брокерский счет */
  OPERATION_TYPE_TRANS_IIS_BS = 57,
  /** OPERATION_TYPE_TRANS_BS_BS - Перевод ценных бумаг с одного брокерского счета на другой */
  OPERATION_TYPE_TRANS_BS_BS = 58,
  /** OPERATION_TYPE_OUT_MULTI - Вывод денежных средств со счета */
  OPERATION_TYPE_OUT_MULTI = 59,
  /** OPERATION_TYPE_INP_MULTI - Пополнение денежных средств со счета */
  OPERATION_TYPE_INP_MULTI = 60,
  /** OPERATION_TYPE_OVER_PLACEMENT - Размещение биржевого овернайта */
  OPERATION_TYPE_OVER_PLACEMENT = 61,
  /** OPERATION_TYPE_OVER_COM - Списание комиссии */
  OPERATION_TYPE_OVER_COM = 62,
  /** OPERATION_TYPE_OVER_INCOME - Доход от оверанайта */
  OPERATION_TYPE_OVER_INCOME = 63,
  /** OPERATION_TYPE_OPTION_EXPIRATION - Экспирация */
  OPERATION_TYPE_OPTION_EXPIRATION = 64,
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

export function portfolioSubscriptionStatusFromJSON(
  object: any
): PortfolioSubscriptionStatus {
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

export function portfolioSubscriptionStatusToJSON(
  object: PortfolioSubscriptionStatus
): string {
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

export function positionsAccountSubscriptionStatusFromJSON(
  object: any
): PositionsAccountSubscriptionStatus {
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

export function positionsAccountSubscriptionStatusToJSON(
  object: PositionsAccountSubscriptionStatus
): string {
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
  /** Начало периода (по UTC). */
  from?: Date;
  /** Окончание периода (по UTC). */
  to?: Date;
  /** Статус запрашиваемых операций. */
  state: OperationState;
  /** Figi-идентификатор инструмента для фильтрации. */
  figi: string;
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
  payment?: MoneyValue;
  /** Цена операции за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?: MoneyValue;
  /** Статус операции. */
  state: OperationState;
  /** Количество единиц инструмента. */
  quantity: number;
  /** Неисполненный остаток по сделке. */
  quantityRest: number;
  /** Figi-идентификатор инструмента, связанного с операцией. */
  figi: string;
  /** Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**share** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. */
  instrumentType: string;
  /** Дата и время операции в формате часовом поясе UTC. */
  date?: Date;
  /** Текстовое описание типа операции. */
  type: string;
  /** Тип операции. */
  operationType: OperationType;
  /** Массив сделок. */
  trades: OperationTrade[];
  /** Идентификатор актива */
  assetUid: string;
  /** position_uid-идентификатора инструмента. */
  positionUid: string;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
}

/** Сделка по операции. */
export interface OperationTrade {
  /** Идентификатор сделки. */
  tradeId: string;
  /** Дата и время сделки в часовом поясе UTC. */
  dateTime?: Date;
  /** Количество инструментов. */
  quantity: number;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price?: MoneyValue;
}

/** Запрос получения текущего портфеля по счёту. */
export interface PortfolioRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
  /** Валюта, в которой требуется рассчитать портфель */
  currency: PortfolioRequest_CurrencyRequest;
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

export function portfolioRequest_CurrencyRequestFromJSON(
  object: any
): PortfolioRequest_CurrencyRequest {
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

export function portfolioRequest_CurrencyRequestToJSON(
  object: PortfolioRequest_CurrencyRequest
): string {
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
  totalAmountShares?: MoneyValue;
  /** Общая стоимость облигаций в портфеле. */
  totalAmountBonds?: MoneyValue;
  /** Общая стоимость фондов в портфеле. */
  totalAmountEtf?: MoneyValue;
  /** Общая стоимость валют в портфеле. */
  totalAmountCurrencies?: MoneyValue;
  /** Общая стоимость фьючерсов в портфеле. */
  totalAmountFutures?: MoneyValue;
  /** Текущая относительная доходность портфеля, в %. */
  expectedYield?: Quotation;
  /** Список позиций портфеля. */
  positions: PortfolioPosition[];
  /** Идентификатор счёта пользователя. */
  accountId: string;
  /** Общая стоимость опционов в портфеле. */
  totalAmountOptions?: MoneyValue;
  /** Общая стоимость структурных нот в портфеле. */
  totalAmountSp?: MoneyValue;
  /** Общая стоимость портфеля. */
  totalAmountPortfolio?: MoneyValue;
  /** Массив виртуальных позиций портфеля. */
  virtualPositions: VirtualPortfolioPosition[];
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
  /** Признак идущей в данный момент выгрузки лимитов. */
  limitsLoadingInProgress: boolean;
  /** Список фьючерсов портфеля. */
  futures: PositionsFutures[];
  /** Список опционов портфеля. */
  options: PositionsOptions[];
}

/** Запрос доступного для вывода остатка. */
export interface WithdrawLimitsRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Доступный для вывода остаток. */
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
  /** Figi-идентификатора инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Количество инструмента в портфеле в штуках. */
  quantity?: Quotation;
  /** Средневзвешенная цена позиции. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPrice?: MoneyValue;
  /** Текущая рассчитанная доходность позиции. */
  expectedYield?: Quotation;
  /** Текущий НКД. */
  currentNkd?: MoneyValue;
  /**
   * Deprecated Средняя цена позиции в пунктах (для фьючерсов). **Возможна задержка до секунды для пересчёта**.
   *
   * @deprecated
   */
  averagePositionPricePt?: Quotation;
  /** Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  currentPrice?: MoneyValue;
  /** Средняя цена позиции по методу FIFO. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPriceFifo?: MoneyValue;
  /**
   * Deprecated Количество лотов в портфеле.
   *
   * @deprecated
   */
  quantityLots?: Quotation;
  /** Заблокировано на бирже. */
  blocked: boolean;
  /** Количество бумаг, заблокированных выставленными заявками. */
  blockedLots?: Quotation;
  /** position_uid-идентификатора инструмента */
  positionUid: string;
  /** instrument_uid-идентификатора инструмента */
  instrumentUid: string;
  /** Вариационная маржа */
  varMargin?: MoneyValue;
  /** Текущая рассчитанная доходность позиции. */
  expectedYieldFifo?: Quotation;
}

export interface VirtualPortfolioPosition {
  /** position_uid-идентификатора инструмента */
  positionUid: string;
  /** instrument_uid-идентификатора инструмента */
  instrumentUid: string;
  /** Figi-идентификатора инструмента. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Количество инструмента в портфеле в штуках. */
  quantity?: Quotation;
  /** Средневзвешенная цена позиции. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPrice?: MoneyValue;
  /** Текущая рассчитанная доходность позиции. */
  expectedYield?: Quotation;
  /** Текущая рассчитанная доходность позиции. */
  expectedYieldFifo?: Quotation;
  /** Дата до которой нужно продать виртуальные бумаги, после этой даты виртуальная позиция "сгорит" */
  expireDate?: Date;
  /** Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  currentPrice?: MoneyValue;
  /** Средняя цена позиции по методу FIFO. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPriceFifo?: MoneyValue;
}

/** Баланс позиции ценной бумаги. */
export interface PositionsSecurities {
  /** Figi-идентификатор бумаги. */
  figi: string;
  /** Количество бумаг заблокированных выставленными заявками. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
  /** Уникальный идентификатор позиции. */
  positionUid: string;
  /** Уникальный идентификатор  инструмента. */
  instrumentUid: string;
  /** Заблокировано на бирже. */
  exchangeBlocked: boolean;
  /** Тип инструмента. */
  instrumentType: string;
}

/** Баланс фьючерса. */
export interface PositionsFutures {
  /** Figi-идентификатор фьючерса. */
  figi: string;
  /** Количество бумаг заблокированных выставленными заявками. */
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
  /** Количество бумаг заблокированных выставленными заявками. */
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
  /** Начало периода в часовом поясе UTC. */
  from?: Date;
  /** Окончание периода в часовом поясе UTC. */
  to?: Date;
}

export interface GenerateBrokerReportResponse {
  /** Идентификатор задачи формирования брокерского отчёта. */
  taskId: string;
}

export interface GetBrokerReportRequest {
  /** Идентификатор задачи формирования брокерского отчёта. */
  taskId: string;
  /** Номер страницы отчета (начинается с 1), значение по умолчанию: 0. */
  page: number;
}

export interface GetBrokerReportResponse {
  brokerReport: BrokerReport[];
  /** Количество записей в отчете. */
  itemsCount: number;
  /** Количество страниц с данными отчета (начинается с 0). */
  pagesCount: number;
  /** Текущая страница (начинается с 0). */
  page: number;
}

export interface BrokerReport {
  /** Номер сделки. */
  tradeId: string;
  /** Номер поручения. */
  orderId: string;
  /** Figi-идентификатор инструмента. */
  figi: string;
  /** Признак исполнения. */
  executeSign: string;
  /** Дата и время заключения в часовом поясе UTC. */
  tradeDatetime?: Date;
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
  price?: MoneyValue;
  /** Количество. */
  quantity: number;
  /** Сумма (без НКД). */
  orderAmount?: MoneyValue;
  /** НКД. */
  aciValue?: Quotation;
  /** Сумма сделки. */
  totalOrderAmount?: MoneyValue;
  /** Комиссия брокера. */
  brokerCommission?: MoneyValue;
  /** Комиссия биржи. */
  exchangeCommission?: MoneyValue;
  /** Комиссия клир. центра. */
  exchangeClearingCommission?: MoneyValue;
  /** Ставка РЕПО (%). */
  repoRate?: Quotation;
  /** Контрагент/Брокер. */
  party: string;
  /** Дата расчётов в часовом поясе UTC. */
  clearValueDate?: Date;
  /** Дата поставки в часовом поясе UTC. */
  secValueDate?: Date;
  /** Статус брокера. */
  brokerStatus: string;
  /** Тип дог. */
  separateAgreementType: string;
  /** Номер дог. */
  separateAgreementNumber: string;
  /** Дата дог. */
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
  getDivForeignIssuerReport?:
    | GetDividendsForeignIssuerReportRequest
    | undefined;
}

export interface GetDividendsForeignIssuerResponse {
  /** Объект результата задачи запуска формирования отчёта. */
  generateDivForeignIssuerReportResponse?:
    | GenerateDividendsForeignIssuerReportResponse
    | undefined;
  /** Отчёт "Справка о доходах за пределами РФ". */
  divForeignIssuerReport?: GetDividendsForeignIssuerReportResponse | undefined;
}

/** Объект запроса формирования отчёта "Справка о доходах за пределами РФ". */
export interface GenerateDividendsForeignIssuerReportRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода (по UTC). */
  from?: Date;
  /** Окончание периода (по UTC). */
  to?: Date;
}

/** Объект запроса сформированного отчёта "Справка о доходах за пределами РФ". */
export interface GetDividendsForeignIssuerReportRequest {
  /** Идентификатор задачи формирования отчёта. */
  taskId: string;
  /** Номер страницы отчета (начинается с 0), значение по умолчанию: 0. */
  page: number;
}

/** Объект результата задачи запуска формирования отчёта "Справка о доходах за пределами РФ". */
export interface GenerateDividendsForeignIssuerReportResponse {
  /** Идентификатор задачи формирования отчёта. */
  taskId: string;
}

export interface GetDividendsForeignIssuerReportResponse {
  dividendsForeignIssuerReport: DividendsForeignIssuerReport[];
  /** Количество записей в отчете. */
  itemsCount: number;
  /** Количество страниц с данными отчета (начинается с 0). */
  pagesCount: number;
  /** Текущая страница (начинается с 0). */
  page: number;
}

/** Отчёт "Справка о доходах за пределами РФ". */
export interface DividendsForeignIssuerReport {
  /** Дата фиксации реестра. */
  recordDate?: Date;
  /** Дата выплаты. */
  paymentDate?: Date;
  /** Наименование ценной бумаги. */
  securityName: string;
  /** ISIN-идентификатор ценной бумаги. */
  isin: string;
  /** Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива. */
  issuerCountry: string;
  /** Количество ценных бумаг. */
  quantity: number;
  /** Выплаты на одну бумагу */
  dividend?: Quotation;
  /** Комиссия внешних платёжных агентов. */
  externalCommission?: Quotation;
  /** Сумма до удержания налога. */
  dividendGross?: Quotation;
  /** Сумма налога, удержанного агентом. */
  tax?: Quotation;
  /** Итоговая сумма выплаты. */
  dividendAmount?: Quotation;
  /** Валюта. */
  currency: string;
}

/** Запрос установки stream-соединения. */
export interface PortfolioStreamRequest {
  /** Массив идентификаторов счётов пользователя */
  accounts: string[];
}

/** Информация по позициям и доходностям портфелей. */
export interface PortfolioStreamResponse {
  /** Объект результата подписки. */
  subscriptions?: PortfolioSubscriptionResult | undefined;
  /** Объект стриминга портфеля. */
  portfolio?: PortfolioResponse | undefined;
  /** Проверка активности стрима. */
  ping?: Ping | undefined;
}

/** Объект результата подписки. */
export interface PortfolioSubscriptionResult {
  /** Массив счетов клиента. */
  accounts: AccountSubscriptionStatus[];
}

/** Счет клиента. */
export interface AccountSubscriptionStatus {
  /** Идентификатор счёта */
  accountId: string;
  /** Результат подписки. */
  subscriptionStatus: PortfolioSubscriptionStatus;
}

/** Запрос списка операций по счёту с пагинацией. */
export interface GetOperationsByCursorRequest {
  /** Идентификатор счёта клиента. Обязательный параметр для данного метода, остальные параметры опциональны. */
  accountId: string;
  /** Идентификатор инструмента (Figi инструмента или uid инструмента) */
  instrumentId: string;
  /** Начало периода (по UTC). */
  from?: Date;
  /** Окончание периода (по UTC). */
  to?: Date;
  /** Идентификатор элемента, с которого начать формировать ответ. */
  cursor: string;
  /** Лимит количества операций. По умолчанию устанавливается значение **100**, максимальное значение 1000. */
  limit: number;
  /** Тип операции. Принимает значение из списка OperationType. */
  operationTypes: OperationType[];
  /** Статус запрашиваемых операций, возможные значения указаны в OperationState. */
  state: OperationState;
  /** Флаг возвращать ли комиссии, по умолчанию false */
  withoutCommissions: boolean;
  /** Флаг получения ответа без массива сделок. */
  withoutTrades: boolean;
  /** Флаг не показывать overnight операций. */
  withoutOvernights: boolean;
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
  /** Номер счета клиента. */
  brokerAccountId: string;
  /** Идентификатор операции, может меняться с течением времени. */
  id: string;
  /** Идентификатор родительской операции, может измениться, если изменился id родительской операции. */
  parentOperationId: string;
  /** Название операции. */
  name: string;
  /** Дата поручения. */
  date?: Date;
  /** Тип операции. */
  type: OperationType;
  /** Описание операции. */
  description: string;
  /** Статус поручения. */
  state: OperationState;
  /** Уникальный идентификатор инструмента. */
  instrumentUid: string;
  /** Figi. */
  figi: string;
  /** Тип инструмента. */
  instrumentType: string;
  /** Тип инструмента. */
  instrumentKind: InstrumentType;
  /** position_uid-идентификатора инструмента. */
  positionUid: string;
  /** Сумма операции. */
  payment?: MoneyValue;
  /** Цена операции за 1 инструмент. */
  price?: MoneyValue;
  /** Комиссия. */
  commission?: MoneyValue;
  /** Доходность. */
  yield?: MoneyValue;
  /** Относительная доходность. */
  yieldRelative?: Quotation;
  /** Накопленный купонный доход. */
  accruedInt?: MoneyValue;
  /** Количество единиц инструмента. */
  quantity: number;
  /** Неисполненный остаток по сделке. */
  quantityRest: number;
  /** Исполненный остаток. */
  quantityDone: number;
  /** Дата и время снятия заявки. */
  cancelDateTime?: Date;
  /** Причина отмены операции. */
  cancelReason: string;
  /** Массив сделок. */
  tradesInfo?: OperationItemTrades;
  /** Идентификатор актива */
  assetUid: string;
}

/** Массив с информацией о сделках. */
export interface OperationItemTrades {
  trades: OperationItemTrade[];
}

/** Сделка по операции. */
export interface OperationItemTrade {
  /** Номер сделки */
  num: string;
  /** Дата сделки */
  date?: Date;
  /** Количество в единицах. */
  quantity: number;
  /** Цена. */
  price?: MoneyValue;
  /** Доходность. */
  yield?: MoneyValue;
  /** Относительная доходность. */
  yieldRelative?: Quotation;
}

/** Запрос установки stream-соединения позиций. */
export interface PositionsStreamRequest {
  /** Массив идентификаторов счётов пользователя */
  accounts: string[];
}

/** Информация по изменению позиций портфеля. */
export interface PositionsStreamResponse {
  /** Объект результата подписки. */
  subscriptions?: PositionsSubscriptionResult | undefined;
  /** Объект стриминга позиций. */
  position?: PositionData | undefined;
  /** Проверка активности стрима. */
  ping?: Ping | undefined;
}

/** Объект результата подписки. */
export interface PositionsSubscriptionResult {
  /** Массив счетов клиента. */
  accounts: PositionsSubscriptionStatus[];
}

/** Счет клиента. */
export interface PositionsSubscriptionStatus {
  /** Идентификатор счёта */
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
  date?: Date;
}

/** Валютная позиция портфеля. */
export interface PositionsMoney {
  /** Доступное количество валютный позиций. */
  availableValue?: MoneyValue;
  /** Заблокированное количество валютный позиций. */
  blockedValue?: MoneyValue;
}

function createBaseOperationsRequest(): OperationsRequest {
  return { accountId: "", from: undefined, to: undefined, state: 0, figi: "" };
}

export const OperationsRequest = {
  encode(
    message: OperationsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
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
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    if (message.figi !== "") {
      writer.uint32(42).string(message.figi);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 4:
          message.state = reader.int32() as any;
          break;
        case 5:
          message.figi = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationsRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      figi: isSet(object.figi) ? String(object.figi) : "",
    };
  },

  toJSON(message: OperationsRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.state !== undefined &&
      (obj.state = operationStateToJSON(message.state));
    message.figi !== undefined && (obj.figi = message.figi);
    return obj;
  },
};

function createBaseOperationsResponse(): OperationsResponse {
  return { operations: [] };
}

export const OperationsResponse = {
  encode(
    message: OperationsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.operations) {
      Operation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operations.push(Operation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationsResponse {
    return {
      operations: Array.isArray(object?.operations)
        ? object.operations.map((e: any) => Operation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationsResponse): unknown {
    const obj: any = {};
    if (message.operations) {
      obj.operations = message.operations.map((e) =>
        e ? Operation.toJSON(e) : undefined
      );
    } else {
      obj.operations = [];
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
  };
}

export const Operation = {
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(90).fork()
      ).ldelim();
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.parentOperationId = reader.string();
          break;
        case 3:
          message.currency = reader.string();
          break;
        case 4:
          message.payment = MoneyValue.decode(reader, reader.uint32());
          break;
        case 5:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 6:
          message.state = reader.int32() as any;
          break;
        case 7:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.quantityRest = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.figi = reader.string();
          break;
        case 10:
          message.instrumentType = reader.string();
          break;
        case 11:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.type = reader.string();
          break;
        case 13:
          message.operationType = reader.int32() as any;
          break;
        case 14:
          message.trades.push(OperationTrade.decode(reader, reader.uint32()));
          break;
        case 16:
          message.assetUid = reader.string();
          break;
        case 17:
          message.positionUid = reader.string();
          break;
        case 18:
          message.instrumentUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      parentOperationId: isSet(object.parentOperationId)
        ? String(object.parentOperationId)
        : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
      payment: isSet(object.payment)
        ? MoneyValue.fromJSON(object.payment)
        : undefined,
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      quantityRest: isSet(object.quantityRest)
        ? Number(object.quantityRest)
        : 0,
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      type: isSet(object.type) ? String(object.type) : "",
      operationType: isSet(object.operationType)
        ? operationTypeFromJSON(object.operationType)
        : 0,
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => OperationTrade.fromJSON(e))
        : [],
      assetUid: isSet(object.assetUid) ? String(object.assetUid) : "",
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.parentOperationId !== undefined &&
      (obj.parentOperationId = message.parentOperationId);
    message.currency !== undefined && (obj.currency = message.currency);
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? MoneyValue.toJSON(message.payment)
        : undefined);
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    message.state !== undefined &&
      (obj.state = operationStateToJSON(message.state));
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.quantityRest !== undefined &&
      (obj.quantityRest = Math.round(message.quantityRest));
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.type !== undefined && (obj.type = message.type);
    message.operationType !== undefined &&
      (obj.operationType = operationTypeToJSON(message.operationType));
    if (message.trades) {
      obj.trades = message.trades.map((e) =>
        e ? OperationTrade.toJSON(e) : undefined
      );
    } else {
      obj.trades = [];
    }
    message.assetUid !== undefined && (obj.assetUid = message.assetUid);
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    return obj;
  },
};

function createBaseOperationTrade(): OperationTrade {
  return { tradeId: "", dateTime: undefined, quantity: 0, price: undefined };
}

export const OperationTrade = {
  encode(
    message: OperationTrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tradeId !== "") {
      writer.uint32(10).string(message.tradeId);
    }
    if (message.dateTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.dateTime),
        writer.uint32(18).fork()
      ).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeId = reader.string();
          break;
        case 2:
          message.dateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationTrade {
    return {
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
      dateTime: isSet(object.dateTime)
        ? fromJsonTimestamp(object.dateTime)
        : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
    };
  },

  toJSON(message: OperationTrade): unknown {
    const obj: any = {};
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    message.dateTime !== undefined &&
      (obj.dateTime = message.dateTime.toISOString());
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    return obj;
  },
};

function createBasePortfolioRequest(): PortfolioRequest {
  return { accountId: "", currency: 0 };
}

export const PortfolioRequest = {
  encode(
    message: PortfolioRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.currency !== 0) {
      writer.uint32(16).int32(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.currency = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      currency: isSet(object.currency)
        ? portfolioRequest_CurrencyRequestFromJSON(object.currency)
        : 0,
    };
  },

  toJSON(message: PortfolioRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.currency !== undefined &&
      (obj.currency = portfolioRequest_CurrencyRequestToJSON(message.currency));
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
  };
}

export const PortfolioResponse = {
  encode(
    message: PortfolioResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.totalAmountShares !== undefined) {
      MoneyValue.encode(
        message.totalAmountShares,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.totalAmountBonds !== undefined) {
      MoneyValue.encode(
        message.totalAmountBonds,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.totalAmountEtf !== undefined) {
      MoneyValue.encode(
        message.totalAmountEtf,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.totalAmountCurrencies !== undefined) {
      MoneyValue.encode(
        message.totalAmountCurrencies,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.totalAmountFutures !== undefined) {
      MoneyValue.encode(
        message.totalAmountFutures,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(
        message.expectedYield,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.positions) {
      PortfolioPosition.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.accountId !== "") {
      writer.uint32(66).string(message.accountId);
    }
    if (message.totalAmountOptions !== undefined) {
      MoneyValue.encode(
        message.totalAmountOptions,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.totalAmountSp !== undefined) {
      MoneyValue.encode(
        message.totalAmountSp,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.totalAmountPortfolio !== undefined) {
      MoneyValue.encode(
        message.totalAmountPortfolio,
        writer.uint32(90).fork()
      ).ldelim();
    }
    for (const v of message.virtualPositions) {
      VirtualPortfolioPosition.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmountShares = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.totalAmountBonds = MoneyValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalAmountEtf = MoneyValue.decode(reader, reader.uint32());
          break;
        case 4:
          message.totalAmountCurrencies = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.totalAmountFutures = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.expectedYield = Quotation.decode(reader, reader.uint32());
          break;
        case 7:
          message.positions.push(
            PortfolioPosition.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.accountId = reader.string();
          break;
        case 9:
          message.totalAmountOptions = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.totalAmountSp = MoneyValue.decode(reader, reader.uint32());
          break;
        case 11:
          message.totalAmountPortfolio = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.virtualPositions.push(
            VirtualPortfolioPosition.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioResponse {
    return {
      totalAmountShares: isSet(object.totalAmountShares)
        ? MoneyValue.fromJSON(object.totalAmountShares)
        : undefined,
      totalAmountBonds: isSet(object.totalAmountBonds)
        ? MoneyValue.fromJSON(object.totalAmountBonds)
        : undefined,
      totalAmountEtf: isSet(object.totalAmountEtf)
        ? MoneyValue.fromJSON(object.totalAmountEtf)
        : undefined,
      totalAmountCurrencies: isSet(object.totalAmountCurrencies)
        ? MoneyValue.fromJSON(object.totalAmountCurrencies)
        : undefined,
      totalAmountFutures: isSet(object.totalAmountFutures)
        ? MoneyValue.fromJSON(object.totalAmountFutures)
        : undefined,
      expectedYield: isSet(object.expectedYield)
        ? Quotation.fromJSON(object.expectedYield)
        : undefined,
      positions: Array.isArray(object?.positions)
        ? object.positions.map((e: any) => PortfolioPosition.fromJSON(e))
        : [],
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      totalAmountOptions: isSet(object.totalAmountOptions)
        ? MoneyValue.fromJSON(object.totalAmountOptions)
        : undefined,
      totalAmountSp: isSet(object.totalAmountSp)
        ? MoneyValue.fromJSON(object.totalAmountSp)
        : undefined,
      totalAmountPortfolio: isSet(object.totalAmountPortfolio)
        ? MoneyValue.fromJSON(object.totalAmountPortfolio)
        : undefined,
      virtualPositions: Array.isArray(object?.virtualPositions)
        ? object.virtualPositions.map((e: any) =>
            VirtualPortfolioPosition.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PortfolioResponse): unknown {
    const obj: any = {};
    message.totalAmountShares !== undefined &&
      (obj.totalAmountShares = message.totalAmountShares
        ? MoneyValue.toJSON(message.totalAmountShares)
        : undefined);
    message.totalAmountBonds !== undefined &&
      (obj.totalAmountBonds = message.totalAmountBonds
        ? MoneyValue.toJSON(message.totalAmountBonds)
        : undefined);
    message.totalAmountEtf !== undefined &&
      (obj.totalAmountEtf = message.totalAmountEtf
        ? MoneyValue.toJSON(message.totalAmountEtf)
        : undefined);
    message.totalAmountCurrencies !== undefined &&
      (obj.totalAmountCurrencies = message.totalAmountCurrencies
        ? MoneyValue.toJSON(message.totalAmountCurrencies)
        : undefined);
    message.totalAmountFutures !== undefined &&
      (obj.totalAmountFutures = message.totalAmountFutures
        ? MoneyValue.toJSON(message.totalAmountFutures)
        : undefined);
    message.expectedYield !== undefined &&
      (obj.expectedYield = message.expectedYield
        ? Quotation.toJSON(message.expectedYield)
        : undefined);
    if (message.positions) {
      obj.positions = message.positions.map((e) =>
        e ? PortfolioPosition.toJSON(e) : undefined
      );
    } else {
      obj.positions = [];
    }
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.totalAmountOptions !== undefined &&
      (obj.totalAmountOptions = message.totalAmountOptions
        ? MoneyValue.toJSON(message.totalAmountOptions)
        : undefined);
    message.totalAmountSp !== undefined &&
      (obj.totalAmountSp = message.totalAmountSp
        ? MoneyValue.toJSON(message.totalAmountSp)
        : undefined);
    message.totalAmountPortfolio !== undefined &&
      (obj.totalAmountPortfolio = message.totalAmountPortfolio
        ? MoneyValue.toJSON(message.totalAmountPortfolio)
        : undefined);
    if (message.virtualPositions) {
      obj.virtualPositions = message.virtualPositions.map((e) =>
        e ? VirtualPortfolioPosition.toJSON(e) : undefined
      );
    } else {
      obj.virtualPositions = [];
    }
    return obj;
  },
};

function createBasePositionsRequest(): PositionsRequest {
  return { accountId: "" };
}

export const PositionsRequest = {
  encode(
    message: PositionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsRequest();
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

  fromJSON(object: any): PositionsRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: PositionsRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
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
  };
}

export const PositionsResponse = {
  encode(
    message: PositionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.money.push(MoneyValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blocked.push(MoneyValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.securities.push(
            PositionsSecurities.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.limitsLoadingInProgress = reader.bool();
          break;
        case 5:
          message.futures.push(
            PositionsFutures.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.options.push(
            PositionsOptions.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsResponse {
    return {
      money: Array.isArray(object?.money)
        ? object.money.map((e: any) => MoneyValue.fromJSON(e))
        : [],
      blocked: Array.isArray(object?.blocked)
        ? object.blocked.map((e: any) => MoneyValue.fromJSON(e))
        : [],
      securities: Array.isArray(object?.securities)
        ? object.securities.map((e: any) => PositionsSecurities.fromJSON(e))
        : [],
      limitsLoadingInProgress: isSet(object.limitsLoadingInProgress)
        ? Boolean(object.limitsLoadingInProgress)
        : false,
      futures: Array.isArray(object?.futures)
        ? object.futures.map((e: any) => PositionsFutures.fromJSON(e))
        : [],
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => PositionsOptions.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PositionsResponse): unknown {
    const obj: any = {};
    if (message.money) {
      obj.money = message.money.map((e) =>
        e ? MoneyValue.toJSON(e) : undefined
      );
    } else {
      obj.money = [];
    }
    if (message.blocked) {
      obj.blocked = message.blocked.map((e) =>
        e ? MoneyValue.toJSON(e) : undefined
      );
    } else {
      obj.blocked = [];
    }
    if (message.securities) {
      obj.securities = message.securities.map((e) =>
        e ? PositionsSecurities.toJSON(e) : undefined
      );
    } else {
      obj.securities = [];
    }
    message.limitsLoadingInProgress !== undefined &&
      (obj.limitsLoadingInProgress = message.limitsLoadingInProgress);
    if (message.futures) {
      obj.futures = message.futures.map((e) =>
        e ? PositionsFutures.toJSON(e) : undefined
      );
    } else {
      obj.futures = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? PositionsOptions.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    return obj;
  },
};

function createBaseWithdrawLimitsRequest(): WithdrawLimitsRequest {
  return { accountId: "" };
}

export const WithdrawLimitsRequest = {
  encode(
    message: WithdrawLimitsRequest,
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
  ): WithdrawLimitsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawLimitsRequest();
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

  fromJSON(object: any): WithdrawLimitsRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
    };
  },

  toJSON(message: WithdrawLimitsRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    return obj;
  },
};

function createBaseWithdrawLimitsResponse(): WithdrawLimitsResponse {
  return { money: [], blocked: [], blockedGuarantee: [] };
}

export const WithdrawLimitsResponse = {
  encode(
    message: WithdrawLimitsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): WithdrawLimitsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWithdrawLimitsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.money.push(MoneyValue.decode(reader, reader.uint32()));
          break;
        case 2:
          message.blocked.push(MoneyValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.blockedGuarantee.push(
            MoneyValue.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): WithdrawLimitsResponse {
    return {
      money: Array.isArray(object?.money)
        ? object.money.map((e: any) => MoneyValue.fromJSON(e))
        : [],
      blocked: Array.isArray(object?.blocked)
        ? object.blocked.map((e: any) => MoneyValue.fromJSON(e))
        : [],
      blockedGuarantee: Array.isArray(object?.blockedGuarantee)
        ? object.blockedGuarantee.map((e: any) => MoneyValue.fromJSON(e))
        : [],
    };
  },

  toJSON(message: WithdrawLimitsResponse): unknown {
    const obj: any = {};
    if (message.money) {
      obj.money = message.money.map((e) =>
        e ? MoneyValue.toJSON(e) : undefined
      );
    } else {
      obj.money = [];
    }
    if (message.blocked) {
      obj.blocked = message.blocked.map((e) =>
        e ? MoneyValue.toJSON(e) : undefined
      );
    } else {
      obj.blocked = [];
    }
    if (message.blockedGuarantee) {
      obj.blockedGuarantee = message.blockedGuarantee.map((e) =>
        e ? MoneyValue.toJSON(e) : undefined
      );
    } else {
      obj.blockedGuarantee = [];
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
  };
}

export const PortfolioPosition = {
  encode(
    message: PortfolioPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      MoneyValue.encode(
        message.averagePositionPrice,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(
        message.expectedYield,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.currentNkd !== undefined) {
      MoneyValue.encode(message.currentNkd, writer.uint32(50).fork()).ldelim();
    }
    if (message.averagePositionPricePt !== undefined) {
      Quotation.encode(
        message.averagePositionPricePt,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.currentPrice !== undefined) {
      MoneyValue.encode(
        message.currentPrice,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.averagePositionPriceFifo !== undefined) {
      MoneyValue.encode(
        message.averagePositionPriceFifo,
        writer.uint32(74).fork()
      ).ldelim();
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
      Quotation.encode(
        message.expectedYieldFifo,
        writer.uint32(218).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortfolioPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.instrumentType = reader.string();
          break;
        case 3:
          message.quantity = Quotation.decode(reader, reader.uint32());
          break;
        case 4:
          message.averagePositionPrice = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.expectedYield = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.currentNkd = MoneyValue.decode(reader, reader.uint32());
          break;
        case 7:
          message.averagePositionPricePt = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.currentPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 9:
          message.averagePositionPriceFifo = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.quantityLots = Quotation.decode(reader, reader.uint32());
          break;
        case 21:
          message.blocked = reader.bool();
          break;
        case 22:
          message.blockedLots = Quotation.decode(reader, reader.uint32());
          break;
        case 24:
          message.positionUid = reader.string();
          break;
        case 25:
          message.instrumentUid = reader.string();
          break;
        case 26:
          message.varMargin = MoneyValue.decode(reader, reader.uint32());
          break;
        case 27:
          message.expectedYieldFifo = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioPosition {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      quantity: isSet(object.quantity)
        ? Quotation.fromJSON(object.quantity)
        : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      expectedYield: isSet(object.expectedYield)
        ? Quotation.fromJSON(object.expectedYield)
        : undefined,
      currentNkd: isSet(object.currentNkd)
        ? MoneyValue.fromJSON(object.currentNkd)
        : undefined,
      averagePositionPricePt: isSet(object.averagePositionPricePt)
        ? Quotation.fromJSON(object.averagePositionPricePt)
        : undefined,
      currentPrice: isSet(object.currentPrice)
        ? MoneyValue.fromJSON(object.currentPrice)
        : undefined,
      averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
        ? MoneyValue.fromJSON(object.averagePositionPriceFifo)
        : undefined,
      quantityLots: isSet(object.quantityLots)
        ? Quotation.fromJSON(object.quantityLots)
        : undefined,
      blocked: isSet(object.blocked) ? Boolean(object.blocked) : false,
      blockedLots: isSet(object.blockedLots)
        ? Quotation.fromJSON(object.blockedLots)
        : undefined,
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      varMargin: isSet(object.varMargin)
        ? MoneyValue.fromJSON(object.varMargin)
        : undefined,
      expectedYieldFifo: isSet(object.expectedYieldFifo)
        ? Quotation.fromJSON(object.expectedYieldFifo)
        : undefined,
    };
  },

  toJSON(message: PortfolioPosition): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.quantity !== undefined &&
      (obj.quantity = message.quantity
        ? Quotation.toJSON(message.quantity)
        : undefined);
    message.averagePositionPrice !== undefined &&
      (obj.averagePositionPrice = message.averagePositionPrice
        ? MoneyValue.toJSON(message.averagePositionPrice)
        : undefined);
    message.expectedYield !== undefined &&
      (obj.expectedYield = message.expectedYield
        ? Quotation.toJSON(message.expectedYield)
        : undefined);
    message.currentNkd !== undefined &&
      (obj.currentNkd = message.currentNkd
        ? MoneyValue.toJSON(message.currentNkd)
        : undefined);
    message.averagePositionPricePt !== undefined &&
      (obj.averagePositionPricePt = message.averagePositionPricePt
        ? Quotation.toJSON(message.averagePositionPricePt)
        : undefined);
    message.currentPrice !== undefined &&
      (obj.currentPrice = message.currentPrice
        ? MoneyValue.toJSON(message.currentPrice)
        : undefined);
    message.averagePositionPriceFifo !== undefined &&
      (obj.averagePositionPriceFifo = message.averagePositionPriceFifo
        ? MoneyValue.toJSON(message.averagePositionPriceFifo)
        : undefined);
    message.quantityLots !== undefined &&
      (obj.quantityLots = message.quantityLots
        ? Quotation.toJSON(message.quantityLots)
        : undefined);
    message.blocked !== undefined && (obj.blocked = message.blocked);
    message.blockedLots !== undefined &&
      (obj.blockedLots = message.blockedLots
        ? Quotation.toJSON(message.blockedLots)
        : undefined);
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.varMargin !== undefined &&
      (obj.varMargin = message.varMargin
        ? MoneyValue.toJSON(message.varMargin)
        : undefined);
    message.expectedYieldFifo !== undefined &&
      (obj.expectedYieldFifo = message.expectedYieldFifo
        ? Quotation.toJSON(message.expectedYieldFifo)
        : undefined);
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
  };
}

export const VirtualPortfolioPosition = {
  encode(
    message: VirtualPortfolioPosition,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      MoneyValue.encode(
        message.averagePositionPrice,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.expectedYield !== undefined) {
      Quotation.encode(
        message.expectedYield,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.expectedYieldFifo !== undefined) {
      Quotation.encode(
        message.expectedYieldFifo,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.expireDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expireDate),
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.currentPrice !== undefined) {
      MoneyValue.encode(
        message.currentPrice,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.averagePositionPriceFifo !== undefined) {
      MoneyValue.encode(
        message.averagePositionPriceFifo,
        writer.uint32(90).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VirtualPortfolioPosition {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVirtualPortfolioPosition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionUid = reader.string();
          break;
        case 2:
          message.instrumentUid = reader.string();
          break;
        case 3:
          message.figi = reader.string();
          break;
        case 4:
          message.instrumentType = reader.string();
          break;
        case 5:
          message.quantity = Quotation.decode(reader, reader.uint32());
          break;
        case 6:
          message.averagePositionPrice = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.expectedYield = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.expectedYieldFifo = Quotation.decode(reader, reader.uint32());
          break;
        case 9:
          message.expireDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.currentPrice = MoneyValue.decode(reader, reader.uint32());
          break;
        case 11:
          message.averagePositionPriceFifo = MoneyValue.decode(
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

  fromJSON(object: any): VirtualPortfolioPosition {
    return {
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      quantity: isSet(object.quantity)
        ? Quotation.fromJSON(object.quantity)
        : undefined,
      averagePositionPrice: isSet(object.averagePositionPrice)
        ? MoneyValue.fromJSON(object.averagePositionPrice)
        : undefined,
      expectedYield: isSet(object.expectedYield)
        ? Quotation.fromJSON(object.expectedYield)
        : undefined,
      expectedYieldFifo: isSet(object.expectedYieldFifo)
        ? Quotation.fromJSON(object.expectedYieldFifo)
        : undefined,
      expireDate: isSet(object.expireDate)
        ? fromJsonTimestamp(object.expireDate)
        : undefined,
      currentPrice: isSet(object.currentPrice)
        ? MoneyValue.fromJSON(object.currentPrice)
        : undefined,
      averagePositionPriceFifo: isSet(object.averagePositionPriceFifo)
        ? MoneyValue.fromJSON(object.averagePositionPriceFifo)
        : undefined,
    };
  },

  toJSON(message: VirtualPortfolioPosition): unknown {
    const obj: any = {};
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.quantity !== undefined &&
      (obj.quantity = message.quantity
        ? Quotation.toJSON(message.quantity)
        : undefined);
    message.averagePositionPrice !== undefined &&
      (obj.averagePositionPrice = message.averagePositionPrice
        ? MoneyValue.toJSON(message.averagePositionPrice)
        : undefined);
    message.expectedYield !== undefined &&
      (obj.expectedYield = message.expectedYield
        ? Quotation.toJSON(message.expectedYield)
        : undefined);
    message.expectedYieldFifo !== undefined &&
      (obj.expectedYieldFifo = message.expectedYieldFifo
        ? Quotation.toJSON(message.expectedYieldFifo)
        : undefined);
    message.expireDate !== undefined &&
      (obj.expireDate = message.expireDate.toISOString());
    message.currentPrice !== undefined &&
      (obj.currentPrice = message.currentPrice
        ? MoneyValue.toJSON(message.currentPrice)
        : undefined);
    message.averagePositionPriceFifo !== undefined &&
      (obj.averagePositionPriceFifo = message.averagePositionPriceFifo
        ? MoneyValue.toJSON(message.averagePositionPriceFifo)
        : undefined);
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
  encode(
    message: PositionsSecurities,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSecurities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.blocked = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.positionUid = reader.string();
          break;
        case 5:
          message.instrumentUid = reader.string();
          break;
        case 11:
          message.exchangeBlocked = reader.bool();
          break;
        case 16:
          message.instrumentType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsSecurities {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      exchangeBlocked: isSet(object.exchangeBlocked)
        ? Boolean(object.exchangeBlocked)
        : false,
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
    };
  },

  toJSON(message: PositionsSecurities): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.blocked !== undefined &&
      (obj.blocked = Math.round(message.blocked));
    message.balance !== undefined &&
      (obj.balance = Math.round(message.balance));
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.exchangeBlocked !== undefined &&
      (obj.exchangeBlocked = message.exchangeBlocked);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    return obj;
  },
};

function createBasePositionsFutures(): PositionsFutures {
  return {
    figi: "",
    blocked: 0,
    balance: 0,
    positionUid: "",
    instrumentUid: "",
  };
}

export const PositionsFutures = {
  encode(
    message: PositionsFutures,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsFutures();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.figi = reader.string();
          break;
        case 2:
          message.blocked = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.positionUid = reader.string();
          break;
        case 5:
          message.instrumentUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsFutures {
    return {
      figi: isSet(object.figi) ? String(object.figi) : "",
      blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
    };
  },

  toJSON(message: PositionsFutures): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.blocked !== undefined &&
      (obj.blocked = Math.round(message.blocked));
    message.balance !== undefined &&
      (obj.balance = Math.round(message.balance));
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    return obj;
  },
};

function createBasePositionsOptions(): PositionsOptions {
  return { positionUid: "", instrumentUid: "", blocked: 0, balance: 0 };
}

export const PositionsOptions = {
  encode(
    message: PositionsOptions,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.positionUid = reader.string();
          break;
        case 2:
          message.instrumentUid = reader.string();
          break;
        case 11:
          message.blocked = longToNumber(reader.int64() as Long);
          break;
        case 21:
          message.balance = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsOptions {
    return {
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      blocked: isSet(object.blocked) ? Number(object.blocked) : 0,
      balance: isSet(object.balance) ? Number(object.balance) : 0,
    };
  },

  toJSON(message: PositionsOptions): unknown {
    const obj: any = {};
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.blocked !== undefined &&
      (obj.blocked = Math.round(message.blocked));
    message.balance !== undefined &&
      (obj.balance = Math.round(message.balance));
    return obj;
  },
};

function createBaseBrokerReportRequest(): BrokerReportRequest {
  return {
    generateBrokerReportRequest: undefined,
    getBrokerReportRequest: undefined,
  };
}

export const BrokerReportRequest = {
  encode(
    message: BrokerReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.generateBrokerReportRequest !== undefined) {
      GenerateBrokerReportRequest.encode(
        message.generateBrokerReportRequest,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.getBrokerReportRequest !== undefined) {
      GetBrokerReportRequest.encode(
        message.getBrokerReportRequest,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generateBrokerReportRequest =
            GenerateBrokerReportRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.getBrokerReportRequest = GetBrokerReportRequest.decode(
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

  fromJSON(object: any): BrokerReportRequest {
    return {
      generateBrokerReportRequest: isSet(object.generateBrokerReportRequest)
        ? GenerateBrokerReportRequest.fromJSON(
            object.generateBrokerReportRequest
          )
        : undefined,
      getBrokerReportRequest: isSet(object.getBrokerReportRequest)
        ? GetBrokerReportRequest.fromJSON(object.getBrokerReportRequest)
        : undefined,
    };
  },

  toJSON(message: BrokerReportRequest): unknown {
    const obj: any = {};
    message.generateBrokerReportRequest !== undefined &&
      (obj.generateBrokerReportRequest = message.generateBrokerReportRequest
        ? GenerateBrokerReportRequest.toJSON(
            message.generateBrokerReportRequest
          )
        : undefined);
    message.getBrokerReportRequest !== undefined &&
      (obj.getBrokerReportRequest = message.getBrokerReportRequest
        ? GetBrokerReportRequest.toJSON(message.getBrokerReportRequest)
        : undefined);
    return obj;
  },
};

function createBaseBrokerReportResponse(): BrokerReportResponse {
  return {
    generateBrokerReportResponse: undefined,
    getBrokerReportResponse: undefined,
  };
}

export const BrokerReportResponse = {
  encode(
    message: BrokerReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.generateBrokerReportResponse !== undefined) {
      GenerateBrokerReportResponse.encode(
        message.generateBrokerReportResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.getBrokerReportResponse !== undefined) {
      GetBrokerReportResponse.encode(
        message.getBrokerReportResponse,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generateBrokerReportResponse =
            GenerateBrokerReportResponse.decode(reader, reader.uint32());
          break;
        case 2:
          message.getBrokerReportResponse = GetBrokerReportResponse.decode(
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

  fromJSON(object: any): BrokerReportResponse {
    return {
      generateBrokerReportResponse: isSet(object.generateBrokerReportResponse)
        ? GenerateBrokerReportResponse.fromJSON(
            object.generateBrokerReportResponse
          )
        : undefined,
      getBrokerReportResponse: isSet(object.getBrokerReportResponse)
        ? GetBrokerReportResponse.fromJSON(object.getBrokerReportResponse)
        : undefined,
    };
  },

  toJSON(message: BrokerReportResponse): unknown {
    const obj: any = {};
    message.generateBrokerReportResponse !== undefined &&
      (obj.generateBrokerReportResponse = message.generateBrokerReportResponse
        ? GenerateBrokerReportResponse.toJSON(
            message.generateBrokerReportResponse
          )
        : undefined);
    message.getBrokerReportResponse !== undefined &&
      (obj.getBrokerReportResponse = message.getBrokerReportResponse
        ? GetBrokerReportResponse.toJSON(message.getBrokerReportResponse)
        : undefined);
    return obj;
  },
};

function createBaseGenerateBrokerReportRequest(): GenerateBrokerReportRequest {
  return { accountId: "", from: undefined, to: undefined };
}

export const GenerateBrokerReportRequest = {
  encode(
    message: GenerateBrokerReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
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
  ): GenerateBrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBrokerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
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

  fromJSON(object: any): GenerateBrokerReportRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GenerateBrokerReportRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },
};

function createBaseGenerateBrokerReportResponse(): GenerateBrokerReportResponse {
  return { taskId: "" };
}

export const GenerateBrokerReportResponse = {
  encode(
    message: GenerateBrokerReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateBrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateBrokerReportResponse {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
    };
  },

  toJSON(message: GenerateBrokerReportResponse): unknown {
    const obj: any = {};
    message.taskId !== undefined && (obj.taskId = message.taskId);
    return obj;
  },
};

function createBaseGetBrokerReportRequest(): GetBrokerReportRequest {
  return { taskId: "", page: 0 };
}

export const GetBrokerReportRequest = {
  encode(
    message: GetBrokerReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBrokerReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskId = reader.string();
          break;
        case 2:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBrokerReportRequest {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetBrokerReportRequest): unknown {
    const obj: any = {};
    message.taskId !== undefined && (obj.taskId = message.taskId);
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },
};

function createBaseGetBrokerReportResponse(): GetBrokerReportResponse {
  return { brokerReport: [], itemsCount: 0, pagesCount: 0, page: 0 };
}

export const GetBrokerReportResponse = {
  encode(
    message: GetBrokerReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetBrokerReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetBrokerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.brokerReport.push(
            BrokerReport.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.itemsCount = reader.int32();
          break;
        case 3:
          message.pagesCount = reader.int32();
          break;
        case 4:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetBrokerReportResponse {
    return {
      brokerReport: Array.isArray(object?.brokerReport)
        ? object.brokerReport.map((e: any) => BrokerReport.fromJSON(e))
        : [],
      itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
      pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetBrokerReportResponse): unknown {
    const obj: any = {};
    if (message.brokerReport) {
      obj.brokerReport = message.brokerReport.map((e) =>
        e ? BrokerReport.toJSON(e) : undefined
      );
    } else {
      obj.brokerReport = [];
    }
    message.itemsCount !== undefined &&
      (obj.itemsCount = Math.round(message.itemsCount));
    message.pagesCount !== undefined &&
      (obj.pagesCount = Math.round(message.pagesCount));
    message.page !== undefined && (obj.page = Math.round(message.page));
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
  encode(
    message: BrokerReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.tradeDatetime),
        writer.uint32(42).fork()
      ).ldelim();
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
      MoneyValue.encode(
        message.orderAmount,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.aciValue !== undefined) {
      Quotation.encode(message.aciValue, writer.uint32(114).fork()).ldelim();
    }
    if (message.totalOrderAmount !== undefined) {
      MoneyValue.encode(
        message.totalOrderAmount,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.brokerCommission !== undefined) {
      MoneyValue.encode(
        message.brokerCommission,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.exchangeCommission !== undefined) {
      MoneyValue.encode(
        message.exchangeCommission,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.exchangeClearingCommission !== undefined) {
      MoneyValue.encode(
        message.exchangeClearingCommission,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.repoRate !== undefined) {
      Quotation.encode(message.repoRate, writer.uint32(154).fork()).ldelim();
    }
    if (message.party !== "") {
      writer.uint32(162).string(message.party);
    }
    if (message.clearValueDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.clearValueDate),
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.secValueDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.secValueDate),
        writer.uint32(178).fork()
      ).ldelim();
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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBrokerReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tradeId = reader.string();
          break;
        case 2:
          message.orderId = reader.string();
          break;
        case 3:
          message.figi = reader.string();
          break;
        case 4:
          message.executeSign = reader.string();
          break;
        case 5:
          message.tradeDatetime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.exchange = reader.string();
          break;
        case 7:
          message.classCode = reader.string();
          break;
        case 8:
          message.direction = reader.string();
          break;
        case 9:
          message.name = reader.string();
          break;
        case 10:
          message.ticker = reader.string();
          break;
        case 11:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 12:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 13:
          message.orderAmount = MoneyValue.decode(reader, reader.uint32());
          break;
        case 14:
          message.aciValue = Quotation.decode(reader, reader.uint32());
          break;
        case 15:
          message.totalOrderAmount = MoneyValue.decode(reader, reader.uint32());
          break;
        case 16:
          message.brokerCommission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 17:
          message.exchangeCommission = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.exchangeClearingCommission = MoneyValue.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.repoRate = Quotation.decode(reader, reader.uint32());
          break;
        case 20:
          message.party = reader.string();
          break;
        case 21:
          message.clearValueDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.secValueDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 23:
          message.brokerStatus = reader.string();
          break;
        case 24:
          message.separateAgreementType = reader.string();
          break;
        case 25:
          message.separateAgreementNumber = reader.string();
          break;
        case 26:
          message.separateAgreementDate = reader.string();
          break;
        case 27:
          message.deliveryType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BrokerReport {
    return {
      tradeId: isSet(object.tradeId) ? String(object.tradeId) : "",
      orderId: isSet(object.orderId) ? String(object.orderId) : "",
      figi: isSet(object.figi) ? String(object.figi) : "",
      executeSign: isSet(object.executeSign) ? String(object.executeSign) : "",
      tradeDatetime: isSet(object.tradeDatetime)
        ? fromJsonTimestamp(object.tradeDatetime)
        : undefined,
      exchange: isSet(object.exchange) ? String(object.exchange) : "",
      classCode: isSet(object.classCode) ? String(object.classCode) : "",
      direction: isSet(object.direction) ? String(object.direction) : "",
      name: isSet(object.name) ? String(object.name) : "",
      ticker: isSet(object.ticker) ? String(object.ticker) : "",
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      orderAmount: isSet(object.orderAmount)
        ? MoneyValue.fromJSON(object.orderAmount)
        : undefined,
      aciValue: isSet(object.aciValue)
        ? Quotation.fromJSON(object.aciValue)
        : undefined,
      totalOrderAmount: isSet(object.totalOrderAmount)
        ? MoneyValue.fromJSON(object.totalOrderAmount)
        : undefined,
      brokerCommission: isSet(object.brokerCommission)
        ? MoneyValue.fromJSON(object.brokerCommission)
        : undefined,
      exchangeCommission: isSet(object.exchangeCommission)
        ? MoneyValue.fromJSON(object.exchangeCommission)
        : undefined,
      exchangeClearingCommission: isSet(object.exchangeClearingCommission)
        ? MoneyValue.fromJSON(object.exchangeClearingCommission)
        : undefined,
      repoRate: isSet(object.repoRate)
        ? Quotation.fromJSON(object.repoRate)
        : undefined,
      party: isSet(object.party) ? String(object.party) : "",
      clearValueDate: isSet(object.clearValueDate)
        ? fromJsonTimestamp(object.clearValueDate)
        : undefined,
      secValueDate: isSet(object.secValueDate)
        ? fromJsonTimestamp(object.secValueDate)
        : undefined,
      brokerStatus: isSet(object.brokerStatus)
        ? String(object.brokerStatus)
        : "",
      separateAgreementType: isSet(object.separateAgreementType)
        ? String(object.separateAgreementType)
        : "",
      separateAgreementNumber: isSet(object.separateAgreementNumber)
        ? String(object.separateAgreementNumber)
        : "",
      separateAgreementDate: isSet(object.separateAgreementDate)
        ? String(object.separateAgreementDate)
        : "",
      deliveryType: isSet(object.deliveryType)
        ? String(object.deliveryType)
        : "",
    };
  },

  toJSON(message: BrokerReport): unknown {
    const obj: any = {};
    message.tradeId !== undefined && (obj.tradeId = message.tradeId);
    message.orderId !== undefined && (obj.orderId = message.orderId);
    message.figi !== undefined && (obj.figi = message.figi);
    message.executeSign !== undefined &&
      (obj.executeSign = message.executeSign);
    message.tradeDatetime !== undefined &&
      (obj.tradeDatetime = message.tradeDatetime.toISOString());
    message.exchange !== undefined && (obj.exchange = message.exchange);
    message.classCode !== undefined && (obj.classCode = message.classCode);
    message.direction !== undefined && (obj.direction = message.direction);
    message.name !== undefined && (obj.name = message.name);
    message.ticker !== undefined && (obj.ticker = message.ticker);
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.orderAmount !== undefined &&
      (obj.orderAmount = message.orderAmount
        ? MoneyValue.toJSON(message.orderAmount)
        : undefined);
    message.aciValue !== undefined &&
      (obj.aciValue = message.aciValue
        ? Quotation.toJSON(message.aciValue)
        : undefined);
    message.totalOrderAmount !== undefined &&
      (obj.totalOrderAmount = message.totalOrderAmount
        ? MoneyValue.toJSON(message.totalOrderAmount)
        : undefined);
    message.brokerCommission !== undefined &&
      (obj.brokerCommission = message.brokerCommission
        ? MoneyValue.toJSON(message.brokerCommission)
        : undefined);
    message.exchangeCommission !== undefined &&
      (obj.exchangeCommission = message.exchangeCommission
        ? MoneyValue.toJSON(message.exchangeCommission)
        : undefined);
    message.exchangeClearingCommission !== undefined &&
      (obj.exchangeClearingCommission = message.exchangeClearingCommission
        ? MoneyValue.toJSON(message.exchangeClearingCommission)
        : undefined);
    message.repoRate !== undefined &&
      (obj.repoRate = message.repoRate
        ? Quotation.toJSON(message.repoRate)
        : undefined);
    message.party !== undefined && (obj.party = message.party);
    message.clearValueDate !== undefined &&
      (obj.clearValueDate = message.clearValueDate.toISOString());
    message.secValueDate !== undefined &&
      (obj.secValueDate = message.secValueDate.toISOString());
    message.brokerStatus !== undefined &&
      (obj.brokerStatus = message.brokerStatus);
    message.separateAgreementType !== undefined &&
      (obj.separateAgreementType = message.separateAgreementType);
    message.separateAgreementNumber !== undefined &&
      (obj.separateAgreementNumber = message.separateAgreementNumber);
    message.separateAgreementDate !== undefined &&
      (obj.separateAgreementDate = message.separateAgreementDate);
    message.deliveryType !== undefined &&
      (obj.deliveryType = message.deliveryType);
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerRequest(): GetDividendsForeignIssuerRequest {
  return {
    generateDivForeignIssuerReport: undefined,
    getDivForeignIssuerReport: undefined,
  };
}

export const GetDividendsForeignIssuerRequest = {
  encode(
    message: GetDividendsForeignIssuerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.generateDivForeignIssuerReport !== undefined) {
      GenerateDividendsForeignIssuerReportRequest.encode(
        message.generateDivForeignIssuerReport,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.getDivForeignIssuerReport !== undefined) {
      GetDividendsForeignIssuerReportRequest.encode(
        message.getDivForeignIssuerReport,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDividendsForeignIssuerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generateDivForeignIssuerReport =
            GenerateDividendsForeignIssuerReportRequest.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.getDivForeignIssuerReport =
            GetDividendsForeignIssuerReportRequest.decode(
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

  fromJSON(object: any): GetDividendsForeignIssuerRequest {
    return {
      generateDivForeignIssuerReport: isSet(
        object.generateDivForeignIssuerReport
      )
        ? GenerateDividendsForeignIssuerReportRequest.fromJSON(
            object.generateDivForeignIssuerReport
          )
        : undefined,
      getDivForeignIssuerReport: isSet(object.getDivForeignIssuerReport)
        ? GetDividendsForeignIssuerReportRequest.fromJSON(
            object.getDivForeignIssuerReport
          )
        : undefined,
    };
  },

  toJSON(message: GetDividendsForeignIssuerRequest): unknown {
    const obj: any = {};
    message.generateDivForeignIssuerReport !== undefined &&
      (obj.generateDivForeignIssuerReport =
        message.generateDivForeignIssuerReport
          ? GenerateDividendsForeignIssuerReportRequest.toJSON(
              message.generateDivForeignIssuerReport
            )
          : undefined);
    message.getDivForeignIssuerReport !== undefined &&
      (obj.getDivForeignIssuerReport = message.getDivForeignIssuerReport
        ? GetDividendsForeignIssuerReportRequest.toJSON(
            message.getDivForeignIssuerReport
          )
        : undefined);
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerResponse(): GetDividendsForeignIssuerResponse {
  return {
    generateDivForeignIssuerReportResponse: undefined,
    divForeignIssuerReport: undefined,
  };
}

export const GetDividendsForeignIssuerResponse = {
  encode(
    message: GetDividendsForeignIssuerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.generateDivForeignIssuerReportResponse !== undefined) {
      GenerateDividendsForeignIssuerReportResponse.encode(
        message.generateDivForeignIssuerReportResponse,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.divForeignIssuerReport !== undefined) {
      GetDividendsForeignIssuerReportResponse.encode(
        message.divForeignIssuerReport,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDividendsForeignIssuerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.generateDivForeignIssuerReportResponse =
            GenerateDividendsForeignIssuerReportResponse.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.divForeignIssuerReport =
            GetDividendsForeignIssuerReportResponse.decode(
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

  fromJSON(object: any): GetDividendsForeignIssuerResponse {
    return {
      generateDivForeignIssuerReportResponse: isSet(
        object.generateDivForeignIssuerReportResponse
      )
        ? GenerateDividendsForeignIssuerReportResponse.fromJSON(
            object.generateDivForeignIssuerReportResponse
          )
        : undefined,
      divForeignIssuerReport: isSet(object.divForeignIssuerReport)
        ? GetDividendsForeignIssuerReportResponse.fromJSON(
            object.divForeignIssuerReport
          )
        : undefined,
    };
  },

  toJSON(message: GetDividendsForeignIssuerResponse): unknown {
    const obj: any = {};
    message.generateDivForeignIssuerReportResponse !== undefined &&
      (obj.generateDivForeignIssuerReportResponse =
        message.generateDivForeignIssuerReportResponse
          ? GenerateDividendsForeignIssuerReportResponse.toJSON(
              message.generateDivForeignIssuerReportResponse
            )
          : undefined);
    message.divForeignIssuerReport !== undefined &&
      (obj.divForeignIssuerReport = message.divForeignIssuerReport
        ? GetDividendsForeignIssuerReportResponse.toJSON(
            message.divForeignIssuerReport
          )
        : undefined);
    return obj;
  },
};

function createBaseGenerateDividendsForeignIssuerReportRequest(): GenerateDividendsForeignIssuerReportRequest {
  return { accountId: "", from: undefined, to: undefined };
}

export const GenerateDividendsForeignIssuerReportRequest = {
  encode(
    message: GenerateDividendsForeignIssuerReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
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
  ): GenerateDividendsForeignIssuerReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDividendsForeignIssuerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
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

  fromJSON(object: any): GenerateDividendsForeignIssuerReportRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
    };
  },

  toJSON(message: GenerateDividendsForeignIssuerReportRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerReportRequest(): GetDividendsForeignIssuerReportRequest {
  return { taskId: "", page: 0 };
}

export const GetDividendsForeignIssuerReportRequest = {
  encode(
    message: GetDividendsForeignIssuerReportRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    if (message.page !== 0) {
      writer.uint32(16).int32(message.page);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDividendsForeignIssuerReportRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerReportRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskId = reader.string();
          break;
        case 2:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerReportRequest {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetDividendsForeignIssuerReportRequest): unknown {
    const obj: any = {};
    message.taskId !== undefined && (obj.taskId = message.taskId);
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },
};

function createBaseGenerateDividendsForeignIssuerReportResponse(): GenerateDividendsForeignIssuerReportResponse {
  return { taskId: "" };
}

export const GenerateDividendsForeignIssuerReportResponse = {
  encode(
    message: GenerateDividendsForeignIssuerReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.taskId !== "") {
      writer.uint32(10).string(message.taskId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateDividendsForeignIssuerReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateDividendsForeignIssuerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.taskId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateDividendsForeignIssuerReportResponse {
    return {
      taskId: isSet(object.taskId) ? String(object.taskId) : "",
    };
  },

  toJSON(message: GenerateDividendsForeignIssuerReportResponse): unknown {
    const obj: any = {};
    message.taskId !== undefined && (obj.taskId = message.taskId);
    return obj;
  },
};

function createBaseGetDividendsForeignIssuerReportResponse(): GetDividendsForeignIssuerReportResponse {
  return {
    dividendsForeignIssuerReport: [],
    itemsCount: 0,
    pagesCount: 0,
    page: 0,
  };
}

export const GetDividendsForeignIssuerReportResponse = {
  encode(
    message: GetDividendsForeignIssuerReportResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.dividendsForeignIssuerReport) {
      DividendsForeignIssuerReport.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetDividendsForeignIssuerReportResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetDividendsForeignIssuerReportResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dividendsForeignIssuerReport.push(
            DividendsForeignIssuerReport.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.itemsCount = reader.int32();
          break;
        case 3:
          message.pagesCount = reader.int32();
          break;
        case 4:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetDividendsForeignIssuerReportResponse {
    return {
      dividendsForeignIssuerReport: Array.isArray(
        object?.dividendsForeignIssuerReport
      )
        ? object.dividendsForeignIssuerReport.map((e: any) =>
            DividendsForeignIssuerReport.fromJSON(e)
          )
        : [],
      itemsCount: isSet(object.itemsCount) ? Number(object.itemsCount) : 0,
      pagesCount: isSet(object.pagesCount) ? Number(object.pagesCount) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetDividendsForeignIssuerReportResponse): unknown {
    const obj: any = {};
    if (message.dividendsForeignIssuerReport) {
      obj.dividendsForeignIssuerReport =
        message.dividendsForeignIssuerReport.map((e) =>
          e ? DividendsForeignIssuerReport.toJSON(e) : undefined
        );
    } else {
      obj.dividendsForeignIssuerReport = [];
    }
    message.itemsCount !== undefined &&
      (obj.itemsCount = Math.round(message.itemsCount));
    message.pagesCount !== undefined &&
      (obj.pagesCount = Math.round(message.pagesCount));
    message.page !== undefined && (obj.page = Math.round(message.page));
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
  encode(
    message: DividendsForeignIssuerReport,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.recordDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.recordDate),
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.paymentDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.paymentDate),
        writer.uint32(18).fork()
      ).ldelim();
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
      Quotation.encode(
        message.externalCommission,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.dividendGross !== undefined) {
      Quotation.encode(
        message.dividendGross,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.tax !== undefined) {
      Quotation.encode(message.tax, writer.uint32(82).fork()).ldelim();
    }
    if (message.dividendAmount !== undefined) {
      Quotation.encode(
        message.dividendAmount,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.currency !== "") {
      writer.uint32(98).string(message.currency);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DividendsForeignIssuerReport {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDividendsForeignIssuerReport();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recordDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.paymentDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.securityName = reader.string();
          break;
        case 4:
          message.isin = reader.string();
          break;
        case 5:
          message.issuerCountry = reader.string();
          break;
        case 6:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.dividend = Quotation.decode(reader, reader.uint32());
          break;
        case 8:
          message.externalCommission = Quotation.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.dividendGross = Quotation.decode(reader, reader.uint32());
          break;
        case 10:
          message.tax = Quotation.decode(reader, reader.uint32());
          break;
        case 11:
          message.dividendAmount = Quotation.decode(reader, reader.uint32());
          break;
        case 12:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DividendsForeignIssuerReport {
    return {
      recordDate: isSet(object.recordDate)
        ? fromJsonTimestamp(object.recordDate)
        : undefined,
      paymentDate: isSet(object.paymentDate)
        ? fromJsonTimestamp(object.paymentDate)
        : undefined,
      securityName: isSet(object.securityName)
        ? String(object.securityName)
        : "",
      isin: isSet(object.isin) ? String(object.isin) : "",
      issuerCountry: isSet(object.issuerCountry)
        ? String(object.issuerCountry)
        : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      dividend: isSet(object.dividend)
        ? Quotation.fromJSON(object.dividend)
        : undefined,
      externalCommission: isSet(object.externalCommission)
        ? Quotation.fromJSON(object.externalCommission)
        : undefined,
      dividendGross: isSet(object.dividendGross)
        ? Quotation.fromJSON(object.dividendGross)
        : undefined,
      tax: isSet(object.tax) ? Quotation.fromJSON(object.tax) : undefined,
      dividendAmount: isSet(object.dividendAmount)
        ? Quotation.fromJSON(object.dividendAmount)
        : undefined,
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: DividendsForeignIssuerReport): unknown {
    const obj: any = {};
    message.recordDate !== undefined &&
      (obj.recordDate = message.recordDate.toISOString());
    message.paymentDate !== undefined &&
      (obj.paymentDate = message.paymentDate.toISOString());
    message.securityName !== undefined &&
      (obj.securityName = message.securityName);
    message.isin !== undefined && (obj.isin = message.isin);
    message.issuerCountry !== undefined &&
      (obj.issuerCountry = message.issuerCountry);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.dividend !== undefined &&
      (obj.dividend = message.dividend
        ? Quotation.toJSON(message.dividend)
        : undefined);
    message.externalCommission !== undefined &&
      (obj.externalCommission = message.externalCommission
        ? Quotation.toJSON(message.externalCommission)
        : undefined);
    message.dividendGross !== undefined &&
      (obj.dividendGross = message.dividendGross
        ? Quotation.toJSON(message.dividendGross)
        : undefined);
    message.tax !== undefined &&
      (obj.tax = message.tax ? Quotation.toJSON(message.tax) : undefined);
    message.dividendAmount !== undefined &&
      (obj.dividendAmount = message.dividendAmount
        ? Quotation.toJSON(message.dividendAmount)
        : undefined);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },
};

function createBasePortfolioStreamRequest(): PortfolioStreamRequest {
  return { accounts: [] };
}

export const PortfolioStreamRequest = {
  encode(
    message: PortfolioStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PortfolioStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioStreamRequest {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PortfolioStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
};

function createBasePortfolioStreamResponse(): PortfolioStreamResponse {
  return { subscriptions: undefined, portfolio: undefined, ping: undefined };
}

export const PortfolioStreamResponse = {
  encode(
    message: PortfolioStreamResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptions !== undefined) {
      PortfolioSubscriptionResult.encode(
        message.subscriptions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.portfolio !== undefined) {
      PortfolioResponse.encode(
        message.portfolio,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PortfolioStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions = PortfolioSubscriptionResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.portfolio = PortfolioResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioStreamResponse {
    return {
      subscriptions: isSet(object.subscriptions)
        ? PortfolioSubscriptionResult.fromJSON(object.subscriptions)
        : undefined,
      portfolio: isSet(object.portfolio)
        ? PortfolioResponse.fromJSON(object.portfolio)
        : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
    };
  },

  toJSON(message: PortfolioStreamResponse): unknown {
    const obj: any = {};
    message.subscriptions !== undefined &&
      (obj.subscriptions = message.subscriptions
        ? PortfolioSubscriptionResult.toJSON(message.subscriptions)
        : undefined);
    message.portfolio !== undefined &&
      (obj.portfolio = message.portfolio
        ? PortfolioResponse.toJSON(message.portfolio)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    return obj;
  },
};

function createBasePortfolioSubscriptionResult(): PortfolioSubscriptionResult {
  return { accounts: [] };
}

export const PortfolioSubscriptionResult = {
  encode(
    message: PortfolioSubscriptionResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      AccountSubscriptionStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PortfolioSubscriptionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortfolioSubscriptionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            AccountSubscriptionStatus.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortfolioSubscriptionResult {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => AccountSubscriptionStatus.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PortfolioSubscriptionResult): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? AccountSubscriptionStatus.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },
};

function createBaseAccountSubscriptionStatus(): AccountSubscriptionStatus {
  return { accountId: "", subscriptionStatus: 0 };
}

export const AccountSubscriptionStatus = {
  encode(
    message: AccountSubscriptionStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(48).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AccountSubscriptionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountSubscriptionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 6:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountSubscriptionStatus {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? portfolioSubscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
    };
  },

  toJSON(message: AccountSubscriptionStatus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = portfolioSubscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    return obj;
  },
};

function createBaseGetOperationsByCursorRequest(): GetOperationsByCursorRequest {
  return {
    accountId: "",
    instrumentId: "",
    from: undefined,
    to: undefined,
    cursor: "",
    limit: 0,
    operationTypes: [],
    state: 0,
    withoutCommissions: false,
    withoutTrades: false,
    withoutOvernights: false,
  };
}

export const GetOperationsByCursorRequest = {
  encode(
    message: GetOperationsByCursorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.instrumentId !== "") {
      writer.uint32(18).string(message.instrumentId);
    }
    if (message.from !== undefined) {
      Timestamp.encode(
        toTimestamp(message.from),
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.to !== undefined) {
      Timestamp.encode(
        toTimestamp(message.to),
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.cursor !== "") {
      writer.uint32(90).string(message.cursor);
    }
    if (message.limit !== 0) {
      writer.uint32(96).int32(message.limit);
    }
    writer.uint32(106).fork();
    for (const v of message.operationTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.state !== 0) {
      writer.uint32(112).int32(message.state);
    }
    if (message.withoutCommissions === true) {
      writer.uint32(120).bool(message.withoutCommissions);
    }
    if (message.withoutTrades === true) {
      writer.uint32(128).bool(message.withoutTrades);
    }
    if (message.withoutOvernights === true) {
      writer.uint32(136).bool(message.withoutOvernights);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOperationsByCursorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsByCursorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.instrumentId = reader.string();
          break;
        case 6:
          message.from = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.to = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.cursor = reader.string();
          break;
        case 12:
          message.limit = reader.int32();
          break;
        case 13:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operationTypes.push(reader.int32() as any);
            }
          } else {
            message.operationTypes.push(reader.int32() as any);
          }
          break;
        case 14:
          message.state = reader.int32() as any;
          break;
        case 15:
          message.withoutCommissions = reader.bool();
          break;
        case 16:
          message.withoutTrades = reader.bool();
          break;
        case 17:
          message.withoutOvernights = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOperationsByCursorRequest {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      instrumentId: isSet(object.instrumentId)
        ? String(object.instrumentId)
        : "",
      from: isSet(object.from) ? fromJsonTimestamp(object.from) : undefined,
      to: isSet(object.to) ? fromJsonTimestamp(object.to) : undefined,
      cursor: isSet(object.cursor) ? String(object.cursor) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      operationTypes: Array.isArray(object?.operationTypes)
        ? object.operationTypes.map((e: any) => operationTypeFromJSON(e))
        : [],
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      withoutCommissions: isSet(object.withoutCommissions)
        ? Boolean(object.withoutCommissions)
        : false,
      withoutTrades: isSet(object.withoutTrades)
        ? Boolean(object.withoutTrades)
        : false,
      withoutOvernights: isSet(object.withoutOvernights)
        ? Boolean(object.withoutOvernights)
        : false,
    };
  },

  toJSON(message: GetOperationsByCursorRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.instrumentId !== undefined &&
      (obj.instrumentId = message.instrumentId);
    message.from !== undefined && (obj.from = message.from.toISOString());
    message.to !== undefined && (obj.to = message.to.toISOString());
    message.cursor !== undefined && (obj.cursor = message.cursor);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    if (message.operationTypes) {
      obj.operationTypes = message.operationTypes.map((e) =>
        operationTypeToJSON(e)
      );
    } else {
      obj.operationTypes = [];
    }
    message.state !== undefined &&
      (obj.state = operationStateToJSON(message.state));
    message.withoutCommissions !== undefined &&
      (obj.withoutCommissions = message.withoutCommissions);
    message.withoutTrades !== undefined &&
      (obj.withoutTrades = message.withoutTrades);
    message.withoutOvernights !== undefined &&
      (obj.withoutOvernights = message.withoutOvernights);
    return obj;
  },
};

function createBaseGetOperationsByCursorResponse(): GetOperationsByCursorResponse {
  return { hasNext: false, nextCursor: "", items: [] };
}

export const GetOperationsByCursorResponse = {
  encode(
    message: GetOperationsByCursorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetOperationsByCursorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetOperationsByCursorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasNext = reader.bool();
          break;
        case 2:
          message.nextCursor = reader.string();
          break;
        case 6:
          message.items.push(OperationItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetOperationsByCursorResponse {
    return {
      hasNext: isSet(object.hasNext) ? Boolean(object.hasNext) : false,
      nextCursor: isSet(object.nextCursor) ? String(object.nextCursor) : "",
      items: Array.isArray(object?.items)
        ? object.items.map((e: any) => OperationItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetOperationsByCursorResponse): unknown {
    const obj: any = {};
    message.hasNext !== undefined && (obj.hasNext = message.hasNext);
    message.nextCursor !== undefined && (obj.nextCursor = message.nextCursor);
    if (message.items) {
      obj.items = message.items.map((e) =>
        e ? OperationItem.toJSON(e) : undefined
      );
    } else {
      obj.items = [];
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
  };
}

export const OperationItem = {
  encode(
    message: OperationItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(170).fork()
      ).ldelim();
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
      Quotation.encode(
        message.yieldRelative,
        writer.uint32(362).fork()
      ).ldelim();
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
      Timestamp.encode(
        toTimestamp(message.cancelDateTime),
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.cancelReason !== "") {
      writer.uint32(458).string(message.cancelReason);
    }
    if (message.tradesInfo !== undefined) {
      OperationItemTrades.encode(
        message.tradesInfo,
        writer.uint32(490).fork()
      ).ldelim();
    }
    if (message.assetUid !== "") {
      writer.uint32(514).string(message.assetUid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cursor = reader.string();
          break;
        case 6:
          message.brokerAccountId = reader.string();
          break;
        case 16:
          message.id = reader.string();
          break;
        case 17:
          message.parentOperationId = reader.string();
          break;
        case 18:
          message.name = reader.string();
          break;
        case 21:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.type = reader.int32() as any;
          break;
        case 23:
          message.description = reader.string();
          break;
        case 24:
          message.state = reader.int32() as any;
          break;
        case 31:
          message.instrumentUid = reader.string();
          break;
        case 32:
          message.figi = reader.string();
          break;
        case 33:
          message.instrumentType = reader.string();
          break;
        case 34:
          message.instrumentKind = reader.int32() as any;
          break;
        case 35:
          message.positionUid = reader.string();
          break;
        case 41:
          message.payment = MoneyValue.decode(reader, reader.uint32());
          break;
        case 42:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 43:
          message.commission = MoneyValue.decode(reader, reader.uint32());
          break;
        case 44:
          message.yield = MoneyValue.decode(reader, reader.uint32());
          break;
        case 45:
          message.yieldRelative = Quotation.decode(reader, reader.uint32());
          break;
        case 46:
          message.accruedInt = MoneyValue.decode(reader, reader.uint32());
          break;
        case 51:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 52:
          message.quantityRest = longToNumber(reader.int64() as Long);
          break;
        case 53:
          message.quantityDone = longToNumber(reader.int64() as Long);
          break;
        case 56:
          message.cancelDateTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 57:
          message.cancelReason = reader.string();
          break;
        case 61:
          message.tradesInfo = OperationItemTrades.decode(
            reader,
            reader.uint32()
          );
          break;
        case 64:
          message.assetUid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationItem {
    return {
      cursor: isSet(object.cursor) ? String(object.cursor) : "",
      brokerAccountId: isSet(object.brokerAccountId)
        ? String(object.brokerAccountId)
        : "",
      id: isSet(object.id) ? String(object.id) : "",
      parentOperationId: isSet(object.parentOperationId)
        ? String(object.parentOperationId)
        : "",
      name: isSet(object.name) ? String(object.name) : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      type: isSet(object.type) ? operationTypeFromJSON(object.type) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      state: isSet(object.state) ? operationStateFromJSON(object.state) : 0,
      instrumentUid: isSet(object.instrumentUid)
        ? String(object.instrumentUid)
        : "",
      figi: isSet(object.figi) ? String(object.figi) : "",
      instrumentType: isSet(object.instrumentType)
        ? String(object.instrumentType)
        : "",
      instrumentKind: isSet(object.instrumentKind)
        ? instrumentTypeFromJSON(object.instrumentKind)
        : 0,
      positionUid: isSet(object.positionUid) ? String(object.positionUid) : "",
      payment: isSet(object.payment)
        ? MoneyValue.fromJSON(object.payment)
        : undefined,
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
      commission: isSet(object.commission)
        ? MoneyValue.fromJSON(object.commission)
        : undefined,
      yield: isSet(object.yield)
        ? MoneyValue.fromJSON(object.yield)
        : undefined,
      yieldRelative: isSet(object.yieldRelative)
        ? Quotation.fromJSON(object.yieldRelative)
        : undefined,
      accruedInt: isSet(object.accruedInt)
        ? MoneyValue.fromJSON(object.accruedInt)
        : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      quantityRest: isSet(object.quantityRest)
        ? Number(object.quantityRest)
        : 0,
      quantityDone: isSet(object.quantityDone)
        ? Number(object.quantityDone)
        : 0,
      cancelDateTime: isSet(object.cancelDateTime)
        ? fromJsonTimestamp(object.cancelDateTime)
        : undefined,
      cancelReason: isSet(object.cancelReason)
        ? String(object.cancelReason)
        : "",
      tradesInfo: isSet(object.tradesInfo)
        ? OperationItemTrades.fromJSON(object.tradesInfo)
        : undefined,
      assetUid: isSet(object.assetUid) ? String(object.assetUid) : "",
    };
  },

  toJSON(message: OperationItem): unknown {
    const obj: any = {};
    message.cursor !== undefined && (obj.cursor = message.cursor);
    message.brokerAccountId !== undefined &&
      (obj.brokerAccountId = message.brokerAccountId);
    message.id !== undefined && (obj.id = message.id);
    message.parentOperationId !== undefined &&
      (obj.parentOperationId = message.parentOperationId);
    message.name !== undefined && (obj.name = message.name);
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.type !== undefined &&
      (obj.type = operationTypeToJSON(message.type));
    message.description !== undefined &&
      (obj.description = message.description);
    message.state !== undefined &&
      (obj.state = operationStateToJSON(message.state));
    message.instrumentUid !== undefined &&
      (obj.instrumentUid = message.instrumentUid);
    message.figi !== undefined && (obj.figi = message.figi);
    message.instrumentType !== undefined &&
      (obj.instrumentType = message.instrumentType);
    message.instrumentKind !== undefined &&
      (obj.instrumentKind = instrumentTypeToJSON(message.instrumentKind));
    message.positionUid !== undefined &&
      (obj.positionUid = message.positionUid);
    message.payment !== undefined &&
      (obj.payment = message.payment
        ? MoneyValue.toJSON(message.payment)
        : undefined);
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? MoneyValue.toJSON(message.commission)
        : undefined);
    message.yield !== undefined &&
      (obj.yield = message.yield
        ? MoneyValue.toJSON(message.yield)
        : undefined);
    message.yieldRelative !== undefined &&
      (obj.yieldRelative = message.yieldRelative
        ? Quotation.toJSON(message.yieldRelative)
        : undefined);
    message.accruedInt !== undefined &&
      (obj.accruedInt = message.accruedInt
        ? MoneyValue.toJSON(message.accruedInt)
        : undefined);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.quantityRest !== undefined &&
      (obj.quantityRest = Math.round(message.quantityRest));
    message.quantityDone !== undefined &&
      (obj.quantityDone = Math.round(message.quantityDone));
    message.cancelDateTime !== undefined &&
      (obj.cancelDateTime = message.cancelDateTime.toISOString());
    message.cancelReason !== undefined &&
      (obj.cancelReason = message.cancelReason);
    message.tradesInfo !== undefined &&
      (obj.tradesInfo = message.tradesInfo
        ? OperationItemTrades.toJSON(message.tradesInfo)
        : undefined);
    message.assetUid !== undefined && (obj.assetUid = message.assetUid);
    return obj;
  },
};

function createBaseOperationItemTrades(): OperationItemTrades {
  return { trades: [] };
}

export const OperationItemTrades = {
  encode(
    message: OperationItemTrades,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.trades) {
      OperationItemTrade.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItemTrades {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItemTrades();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.trades.push(
            OperationItemTrade.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationItemTrades {
    return {
      trades: Array.isArray(object?.trades)
        ? object.trades.map((e: any) => OperationItemTrade.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OperationItemTrades): unknown {
    const obj: any = {};
    if (message.trades) {
      obj.trades = message.trades.map((e) =>
        e ? OperationItemTrade.toJSON(e) : undefined
      );
    } else {
      obj.trades = [];
    }
    return obj;
  },
};

function createBaseOperationItemTrade(): OperationItemTrade {
  return {
    num: "",
    date: undefined,
    quantity: 0,
    price: undefined,
    yield: undefined,
    yieldRelative: undefined,
  };
}

export const OperationItemTrade = {
  encode(
    message: OperationItemTrade,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.num !== "") {
      writer.uint32(10).string(message.num);
    }
    if (message.date !== undefined) {
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(50).fork()
      ).ldelim();
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
      Quotation.encode(
        message.yieldRelative,
        writer.uint32(178).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationItemTrade {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationItemTrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.num = reader.string();
          break;
        case 6:
          message.date = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.quantity = longToNumber(reader.int64() as Long);
          break;
        case 16:
          message.price = MoneyValue.decode(reader, reader.uint32());
          break;
        case 21:
          message.yield = MoneyValue.decode(reader, reader.uint32());
          break;
        case 22:
          message.yieldRelative = Quotation.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OperationItemTrade {
    return {
      num: isSet(object.num) ? String(object.num) : "",
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      price: isSet(object.price)
        ? MoneyValue.fromJSON(object.price)
        : undefined,
      yield: isSet(object.yield)
        ? MoneyValue.fromJSON(object.yield)
        : undefined,
      yieldRelative: isSet(object.yieldRelative)
        ? Quotation.fromJSON(object.yieldRelative)
        : undefined,
    };
  },

  toJSON(message: OperationItemTrade): unknown {
    const obj: any = {};
    message.num !== undefined && (obj.num = message.num);
    message.date !== undefined && (obj.date = message.date.toISOString());
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    message.price !== undefined &&
      (obj.price = message.price
        ? MoneyValue.toJSON(message.price)
        : undefined);
    message.yield !== undefined &&
      (obj.yield = message.yield
        ? MoneyValue.toJSON(message.yield)
        : undefined);
    message.yieldRelative !== undefined &&
      (obj.yieldRelative = message.yieldRelative
        ? Quotation.toJSON(message.yieldRelative)
        : undefined);
    return obj;
  },
};

function createBasePositionsStreamRequest(): PositionsStreamRequest {
  return { accounts: [] };
}

export const PositionsStreamRequest = {
  encode(
    message: PositionsStreamRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsStreamRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsStreamRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsStreamRequest {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PositionsStreamRequest): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => e);
    } else {
      obj.accounts = [];
    }
    return obj;
  },
};

function createBasePositionsStreamResponse(): PositionsStreamResponse {
  return { subscriptions: undefined, position: undefined, ping: undefined };
}

export const PositionsStreamResponse = {
  encode(
    message: PositionsStreamResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.subscriptions !== undefined) {
      PositionsSubscriptionResult.encode(
        message.subscriptions,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.position !== undefined) {
      PositionData.encode(message.position, writer.uint32(18).fork()).ldelim();
    }
    if (message.ping !== undefined) {
      Ping.encode(message.ping, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsStreamResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsStreamResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subscriptions = PositionsSubscriptionResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.position = PositionData.decode(reader, reader.uint32());
          break;
        case 3:
          message.ping = Ping.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsStreamResponse {
    return {
      subscriptions: isSet(object.subscriptions)
        ? PositionsSubscriptionResult.fromJSON(object.subscriptions)
        : undefined,
      position: isSet(object.position)
        ? PositionData.fromJSON(object.position)
        : undefined,
      ping: isSet(object.ping) ? Ping.fromJSON(object.ping) : undefined,
    };
  },

  toJSON(message: PositionsStreamResponse): unknown {
    const obj: any = {};
    message.subscriptions !== undefined &&
      (obj.subscriptions = message.subscriptions
        ? PositionsSubscriptionResult.toJSON(message.subscriptions)
        : undefined);
    message.position !== undefined &&
      (obj.position = message.position
        ? PositionData.toJSON(message.position)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? Ping.toJSON(message.ping) : undefined);
    return obj;
  },
};

function createBasePositionsSubscriptionResult(): PositionsSubscriptionResult {
  return { accounts: [] };
}

export const PositionsSubscriptionResult = {
  encode(
    message: PositionsSubscriptionResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.accounts) {
      PositionsSubscriptionStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsSubscriptionResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscriptionResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(
            PositionsSubscriptionStatus.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsSubscriptionResult {
    return {
      accounts: Array.isArray(object?.accounts)
        ? object.accounts.map((e: any) =>
            PositionsSubscriptionStatus.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PositionsSubscriptionResult): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) =>
        e ? PositionsSubscriptionStatus.toJSON(e) : undefined
      );
    } else {
      obj.accounts = [];
    }
    return obj;
  },
};

function createBasePositionsSubscriptionStatus(): PositionsSubscriptionStatus {
  return { accountId: "", subscriptionStatus: 0 };
}

export const PositionsSubscriptionStatus = {
  encode(
    message: PositionsSubscriptionStatus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
    }
    if (message.subscriptionStatus !== 0) {
      writer.uint32(48).int32(message.subscriptionStatus);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PositionsSubscriptionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsSubscriptionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 6:
          message.subscriptionStatus = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsSubscriptionStatus {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      subscriptionStatus: isSet(object.subscriptionStatus)
        ? positionsAccountSubscriptionStatusFromJSON(object.subscriptionStatus)
        : 0,
    };
  },

  toJSON(message: PositionsSubscriptionStatus): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    message.subscriptionStatus !== undefined &&
      (obj.subscriptionStatus = positionsAccountSubscriptionStatusToJSON(
        message.subscriptionStatus
      ));
    return obj;
  },
};

function createBasePositionData(): PositionData {
  return {
    accountId: "",
    money: [],
    securities: [],
    futures: [],
    options: [],
    date: undefined,
  };
}

export const PositionData = {
  encode(
    message: PositionData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
      Timestamp.encode(
        toTimestamp(message.date),
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountId = reader.string();
          break;
        case 2:
          message.money.push(PositionsMoney.decode(reader, reader.uint32()));
          break;
        case 3:
          message.securities.push(
            PositionsSecurities.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.futures.push(
            PositionsFutures.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.options.push(
            PositionsOptions.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.date = fromTimestamp(
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

  fromJSON(object: any): PositionData {
    return {
      accountId: isSet(object.accountId) ? String(object.accountId) : "",
      money: Array.isArray(object?.money)
        ? object.money.map((e: any) => PositionsMoney.fromJSON(e))
        : [],
      securities: Array.isArray(object?.securities)
        ? object.securities.map((e: any) => PositionsSecurities.fromJSON(e))
        : [],
      futures: Array.isArray(object?.futures)
        ? object.futures.map((e: any) => PositionsFutures.fromJSON(e))
        : [],
      options: Array.isArray(object?.options)
        ? object.options.map((e: any) => PositionsOptions.fromJSON(e))
        : [],
      date: isSet(object.date) ? fromJsonTimestamp(object.date) : undefined,
    };
  },

  toJSON(message: PositionData): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
    if (message.money) {
      obj.money = message.money.map((e) =>
        e ? PositionsMoney.toJSON(e) : undefined
      );
    } else {
      obj.money = [];
    }
    if (message.securities) {
      obj.securities = message.securities.map((e) =>
        e ? PositionsSecurities.toJSON(e) : undefined
      );
    } else {
      obj.securities = [];
    }
    if (message.futures) {
      obj.futures = message.futures.map((e) =>
        e ? PositionsFutures.toJSON(e) : undefined
      );
    } else {
      obj.futures = [];
    }
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? PositionsOptions.toJSON(e) : undefined
      );
    } else {
      obj.options = [];
    }
    message.date !== undefined && (obj.date = message.date.toISOString());
    return obj;
  },
};

function createBasePositionsMoney(): PositionsMoney {
  return { availableValue: undefined, blockedValue: undefined };
}

export const PositionsMoney = {
  encode(
    message: PositionsMoney,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.availableValue !== undefined) {
      MoneyValue.encode(
        message.availableValue,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.blockedValue !== undefined) {
      MoneyValue.encode(
        message.blockedValue,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PositionsMoney {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePositionsMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.availableValue = MoneyValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.blockedValue = MoneyValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PositionsMoney {
    return {
      availableValue: isSet(object.availableValue)
        ? MoneyValue.fromJSON(object.availableValue)
        : undefined,
      blockedValue: isSet(object.blockedValue)
        ? MoneyValue.fromJSON(object.blockedValue)
        : undefined,
    };
  },

  toJSON(message: PositionsMoney): unknown {
    const obj: any = {};
    message.availableValue !== undefined &&
      (obj.availableValue = message.availableValue
        ? MoneyValue.toJSON(message.availableValue)
        : undefined);
    message.blockedValue !== undefined &&
      (obj.blockedValue = message.blockedValue
        ? MoneyValue.toJSON(message.blockedValue)
        : undefined);
    return obj;
  },
};

/**
 * Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
 * портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
 * доступного остатка для вывода средств;</br> **5**. получения различных отчётов.
 */
export type OperationsServiceDefinition = typeof OperationsServiceDefinition;
export const OperationsServiceDefinition = {
  name: "OperationsService",
  fullName: "tinkoff.public.invest.api.contract.v1.OperationsService",
  methods: {
    /**
     * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
     */
    getOperations: {
      name: "GetOperations",
      requestType: OperationsRequest,
      requestStream: false,
      responseType: OperationsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения портфеля по счёту. */
    getPortfolio: {
      name: "GetPortfolio",
      requestType: PortfolioRequest,
      requestStream: false,
      responseType: PortfolioResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения списка позиций по счёту. */
    getPositions: {
      name: "GetPositions",
      requestType: PositionsRequest,
      requestStream: false,
      responseType: PositionsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения доступного остатка для вывода средств. */
    getWithdrawLimits: {
      name: "GetWithdrawLimits",
      requestType: WithdrawLimitsRequest,
      requestStream: false,
      responseType: WithdrawLimitsResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения брокерского отчёта. */
    getBrokerReport: {
      name: "GetBrokerReport",
      requestType: BrokerReportRequest,
      requestStream: false,
      responseType: BrokerReportResponse,
      responseStream: false,
      options: {},
    },
    /** Метод получения отчёта "Справка о доходах за пределами РФ". */
    getDividendsForeignIssuer: {
      name: "GetDividendsForeignIssuer",
      requestType: GetDividendsForeignIssuerRequest,
      requestStream: false,
      responseType: GetDividendsForeignIssuerResponse,
      responseStream: false,
      options: {},
    },
    /**
     * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
     * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
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

export interface OperationsServiceServiceImplementation<CallContextExt = {}> {
  /**
   * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   */
  getOperations(
    request: OperationsRequest,
    context: CallContext & CallContextExt
  ): Promise<OperationsResponse>;
  /** Метод получения портфеля по счёту. */
  getPortfolio(
    request: PortfolioRequest,
    context: CallContext & CallContextExt
  ): Promise<PortfolioResponse>;
  /** Метод получения списка позиций по счёту. */
  getPositions(
    request: PositionsRequest,
    context: CallContext & CallContextExt
  ): Promise<PositionsResponse>;
  /** Метод получения доступного остатка для вывода средств. */
  getWithdrawLimits(
    request: WithdrawLimitsRequest,
    context: CallContext & CallContextExt
  ): Promise<WithdrawLimitsResponse>;
  /** Метод получения брокерского отчёта. */
  getBrokerReport(
    request: BrokerReportRequest,
    context: CallContext & CallContextExt
  ): Promise<BrokerReportResponse>;
  /** Метод получения отчёта "Справка о доходах за пределами РФ". */
  getDividendsForeignIssuer(
    request: GetDividendsForeignIssuerRequest,
    context: CallContext & CallContextExt
  ): Promise<GetDividendsForeignIssuerResponse>;
  /**
   * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   */
  getOperationsByCursor(
    request: GetOperationsByCursorRequest,
    context: CallContext & CallContextExt
  ): Promise<GetOperationsByCursorResponse>;
}

export interface OperationsServiceClient<CallOptionsExt = {}> {
  /**
   * Метод получения списка операций по счёту.При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   */
  getOperations(
    request: OperationsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<OperationsResponse>;
  /** Метод получения портфеля по счёту. */
  getPortfolio(
    request: PortfolioRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PortfolioResponse>;
  /** Метод получения списка позиций по счёту. */
  getPositions(
    request: PositionsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<PositionsResponse>;
  /** Метод получения доступного остатка для вывода средств. */
  getWithdrawLimits(
    request: WithdrawLimitsRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<WithdrawLimitsResponse>;
  /** Метод получения брокерского отчёта. */
  getBrokerReport(
    request: BrokerReportRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<BrokerReportResponse>;
  /** Метод получения отчёта "Справка о доходах за пределами РФ". */
  getDividendsForeignIssuer(
    request: GetDividendsForeignIssuerRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetDividendsForeignIssuerResponse>;
  /**
   * Метод получения списка операций по счёту с пагинацией. При работе с данным методом необходимо учитывать
   * [особенности взаимодействия](/investAPI/operations_problems) с данным методом.
   */
  getOperationsByCursor(
    request: GetOperationsByCursorRequest,
    options?: CallOptions & CallOptionsExt
  ): Promise<GetOperationsByCursorResponse>;
}

export type OperationsStreamServiceDefinition =
  typeof OperationsStreamServiceDefinition;
export const OperationsStreamServiceDefinition = {
  name: "OperationsStreamService",
  fullName: "tinkoff.public.invest.api.contract.v1.OperationsStreamService",
  methods: {
    /** Server-side stream обновлений портфеля */
    portfolioStream: {
      name: "PortfolioStream",
      requestType: PortfolioStreamRequest,
      requestStream: false,
      responseType: PortfolioStreamResponse,
      responseStream: true,
      options: {},
    },
    /** Server-side stream обновлений информации по изменению позиций портфеля */
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

export interface OperationsStreamServiceServiceImplementation<
  CallContextExt = {}
> {
  /** Server-side stream обновлений портфеля */
  portfolioStream(
    request: PortfolioStreamRequest,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<PortfolioStreamResponse>;
  /** Server-side stream обновлений информации по изменению позиций портфеля */
  positionsStream(
    request: PositionsStreamRequest,
    context: CallContext & CallContextExt
  ): ServerStreamingMethodResult<PositionsStreamResponse>;
}

export interface OperationsStreamServiceClient<CallOptionsExt = {}> {
  /** Server-side stream обновлений портфеля */
  portfolioStream(
    request: PortfolioStreamRequest,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<PortfolioStreamResponse>;
  /** Server-side stream обновлений информации по изменению позиций портфеля */
  positionsStream(
    request: PositionsStreamRequest,
    options?: CallOptions & CallOptionsExt
  ): AsyncIterable<PositionsStreamResponse>;
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

export type ServerStreamingMethodResult<Response> = {
  [Symbol.asyncIterator](): AsyncIterator<Response, void>;
};
