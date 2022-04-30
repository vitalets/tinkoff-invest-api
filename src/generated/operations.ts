/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "./google/protobuf/timestamp.js";
import { MoneyValue, Quotation } from "./common.js";

export const protobufPackage = "tinkoff.public.invest.api.contract.v1";

/** Статус запрашиваемых операций. */
export enum OperationState {
  /** OPERATION_STATE_UNSPECIFIED - Статус операции не определён */
  OPERATION_STATE_UNSPECIFIED = 0,
  /** OPERATION_STATE_EXECUTED - Исполнена. */
  OPERATION_STATE_EXECUTED = 1,
  /** OPERATION_STATE_CANCELED - Отменена. */
  OPERATION_STATE_CANCELED = 2,
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
    default:
      return "UNKNOWN";
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
  /** OPERATION_TYPE_INPUT_SECURITIES - Завод ценных бумаг из другого депозитария. */
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
    default:
      return "UNKNOWN";
  }
}

/** Запрос получения списка операций по счёту. */
export interface OperationsRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода (по UTC). */
  from: Date | undefined;
  /** Окончание периода (по UTC). */
  to: Date | undefined;
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
  payment: MoneyValue | undefined;
  /** Цена операции за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: MoneyValue | undefined;
  /** Статус операции. */
  state: OperationState;
  /** Количество лотов инструмента. */
  quantity: number;
  /** Неисполненный остаток по сделке. */
  quantityRest: number;
  /** Figi-идентификатор инструмента, связанного с операцией. */
  figi: string;
  /** Тип инструмента. Возможные значения: </br>**bond** — облигация; </br>**share** — акция; </br>**currency** — валюта; </br>**etf** — фонд; </br>**futures** — фьючерс. */
  instrumentType: string;
  /** Дата и время операции в формате часовом поясе UTC. */
  date: Date | undefined;
  /** Текстовое описание типа операции. */
  type: string;
  /** Тип операции. */
  operationType: OperationType;
  /** Массив сделок. */
  trades: OperationTrade[];
}

/** Сделка по операции. */
export interface OperationTrade {
  /** Идентификатор сделки. */
  tradeId: string;
  /** Дата и время сделки в часовом поясе UTC. */
  dateTime: Date | undefined;
  /** Количество инструментов. */
  quantity: number;
  /** Цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента. */
  price: MoneyValue | undefined;
}

/** Запрос получения текущего портфеля по счёту. */
export interface PortfolioRequest {
  /** Идентификатор счёта пользователя. */
  accountId: string;
}

/** Текущий портфель по счёту. */
export interface PortfolioResponse {
  /** Общая стоимость акций в портфеле в рублях. */
  totalAmountShares: MoneyValue | undefined;
  /** Общая стоимость облигаций в портфеле в рублях. */
  totalAmountBonds: MoneyValue | undefined;
  /** Общая стоимость фондов в портфеле в рублях. */
  totalAmountEtf: MoneyValue | undefined;
  /** Общая стоимость валют в портфеле в рублях. */
  totalAmountCurrencies: MoneyValue | undefined;
  /** Общая стоимость фьючерсов в портфеле в рублях. */
  totalAmountFutures: MoneyValue | undefined;
  /** Текущая относительная доходность портфеля, в %. */
  expectedYield: Quotation | undefined;
  /** Список позиций портфеля. */
  positions: PortfolioPosition[];
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
  quantity: Quotation | undefined;
  /** Средневзвешенная цена позиции. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPrice: MoneyValue | undefined;
  /** Текущая рассчитанная относительная доходность позиции, в %. */
  expectedYield: Quotation | undefined;
  /** Текущий НКД. */
  currentNkd: MoneyValue | undefined;
  /** Средняя цена лота в позиции в пунктах (для фьючерсов). **Возможна задержка до секунды для пересчёта**. */
  averagePositionPricePt: Quotation | undefined;
  /** Текущая цена за 1 инструмент. Для получения стоимости лота требуется умножить на лотность инструмента.. */
  currentPrice: MoneyValue | undefined;
  /** Средняя цена лота в позиции по методу FIFO. **Возможна задержка до секунды для пересчёта**. */
  averagePositionPriceFifo: MoneyValue | undefined;
  /** Количество лотов в портфеле. */
  quantityLots: Quotation | undefined;
}

/** Баланс позиции ценной бумаги. */
export interface PositionsSecurities {
  /** Figi-идентификатор бумаги. */
  figi: string;
  /** Заблокировано. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
}

/** Баланс фьючерса. */
export interface PositionsFutures {
  /** Figi-идентификатор фьючерса. */
  figi: string;
  /** Заблокировано. */
  blocked: number;
  /** Текущий незаблокированный баланс. */
  balance: number;
}

export interface BrokerReportRequest {
  generateBrokerReportRequest: GenerateBrokerReportRequest | undefined;
  getBrokerReportRequest: GetBrokerReportRequest | undefined;
}

export interface BrokerReportResponse {
  generateBrokerReportResponse: GenerateBrokerReportResponse | undefined;
  getBrokerReportResponse: GetBrokerReportResponse | undefined;
}

export interface GenerateBrokerReportRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода в часовом поясе UTC. */
  from: Date | undefined;
  /** Окончание периода в часовом поясе UTC. */
  to: Date | undefined;
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
  tradeDatetime: Date | undefined;
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
  price: MoneyValue | undefined;
  /** Количество. */
  quantity: number;
  /** Сумма (без НКД). */
  orderAmount: MoneyValue | undefined;
  /** НКД. */
  aciValue: Quotation | undefined;
  /** Сумма сделки. */
  totalOrderAmount: MoneyValue | undefined;
  /** Комиссия брокера. */
  brokerCommission: MoneyValue | undefined;
  /** Комиссия биржи. */
  exchangeCommission: MoneyValue | undefined;
  /** Комиссия клир. центра. */
  exchangeClearingCommission: MoneyValue | undefined;
  /** Ставка РЕПО (%). */
  repoRate: Quotation | undefined;
  /** Контрагент/Брокер. */
  party: string;
  /** Дата расчётов в часовом поясе UTC. */
  clearValueDate: Date | undefined;
  /** Дата поставки в часовом поясе UTC. */
  secValueDate: Date | undefined;
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
  generateDivForeignIssuerReport:
    | GenerateDividendsForeignIssuerReportRequest
    | undefined;
  /** Объект запроса сформированного отчёта. */
  getDivForeignIssuerReport: GetDividendsForeignIssuerReportRequest | undefined;
}

export interface GetDividendsForeignIssuerResponse {
  /** Объект результата задачи запуска формирования отчёта. */
  generateDivForeignIssuerReportResponse:
    | GenerateDividendsForeignIssuerReportResponse
    | undefined;
  /** Отчёт "Справка о доходах за пределами РФ". */
  divForeignIssuerReport: GetDividendsForeignIssuerReportResponse | undefined;
}

/** Объект запроса формирования отчёта "Справка о доходах за пределами РФ". */
export interface GenerateDividendsForeignIssuerReportRequest {
  /** Идентификатор счёта клиента. */
  accountId: string;
  /** Начало периода (по UTC). */
  from: Date | undefined;
  /** Окончание периода (по UTC). */
  to: Date | undefined;
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
  recordDate: Date | undefined;
  /** Дата выплаты. */
  paymentDate: Date | undefined;
  /** Наименование ценной бумаги. */
  securityName: string;
  /** ISIN-идентификатор ценной бумаги. */
  isin: string;
  /** Страна эмитента. Для депозитарных расписок указывается страна эмитента базового актива. */
  issuerCountry: string;
  /** Количество ценных бумаг. */
  quantity: number;
  /** Выплаты на одну бумагу */
  dividend: Quotation | undefined;
  /** Комиссия внешних платёжных агентов. */
  externalCommission: Quotation | undefined;
  /** Сумма до удержания налога. */
  dividendGross: Quotation | undefined;
  /** Сумма налога, удержанного агентом. */
  tax: Quotation | undefined;
  /** Итоговая сумма выплаты. */
  dividendAmount: Quotation | undefined;
  /** Валюта. */
  currency: string;
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
  return { accountId: "" };
}

export const PortfolioRequest = {
  encode(
    message: PortfolioRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.accountId !== "") {
      writer.uint32(10).string(message.accountId);
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
    };
  },

  toJSON(message: PortfolioRequest): unknown {
    const obj: any = {};
    message.accountId !== undefined && (obj.accountId = message.accountId);
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
    return obj;
  },
};

function createBasePositionsSecurities(): PositionsSecurities {
  return { figi: "", blocked: 0, balance: 0 };
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
    };
  },

  toJSON(message: PositionsSecurities): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
    message.blocked !== undefined &&
      (obj.blocked = Math.round(message.blocked));
    message.balance !== undefined &&
      (obj.balance = Math.round(message.balance));
    return obj;
  },
};

function createBasePositionsFutures(): PositionsFutures {
  return { figi: "", blocked: 0, balance: 0 };
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
    };
  },

  toJSON(message: PositionsFutures): unknown {
    const obj: any = {};
    message.figi !== undefined && (obj.figi = message.figi);
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

/**
 * Сервис предназначен для получения:</br> **1**.  списка операций по счёту;</br> **2**.
 * портфеля по счёту;</br> **3**. позиций ценных бумаг на счёте;</br> **4**.
 * доступного остатка для вывода средств;</br> **4**. получения различных отчётов.
 */
export const OperationsServiceDefinition = {
  name: "OperationsService",
  fullName: "tinkoff.public.invest.api.contract.v1.OperationsService",
  methods: {
    /** Метод получения списка операций по счёту. */
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
