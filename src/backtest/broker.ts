/**
 * Логика работы брокера.
 */

/* eslint-disable max-lines */

import { Instrument, InstrumentIdType } from '../generated/instruments.js';
import { Operation, OperationState, OperationType, PortfolioPosition } from '../generated/operations.js';
import {
  OrderDirection,
  OrderExecutionReportStatus,
  OrderState,
  OrderType,
  PostOrderRequest
} from '../generated/orders.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class Broker {
  constructor(private backtest: Backtest) { }

  private get options() {
    return this.backtest.options;
  }

  async createOrder(req: PostOrderRequest): Promise<OrderState> {
    const currency = 'rub';
    const lotsRequested = req.quantity;
    const price = req.price
      ? Helpers.toNumber(req.price)
      : await this.backtest.marketdata.getCurrentPrice(req.figi);
    const { lot } = await this.getInstrumentByFigi(req.figi);
    const initialOrderPrice = price * lotsRequested * lot;
    const initialComission = initialOrderPrice * this.options.brokerFee / 100;
    const totalOrderAmount = initialOrderPrice + initialComission;
    const order: OrderState = {
      orderId: req.orderId,
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW,
      lotsRequested,
      lotsExecuted: 0,
      initialSecurityPrice: Helpers.toMoneyValue(price, currency),
      initialOrderPrice: Helpers.toMoneyValue(initialOrderPrice, currency),
      initialCommission: Helpers.toMoneyValue(initialComission, currency),
      totalOrderAmount: Helpers.toMoneyValue(totalOrderAmount, currency),
      figi: req.figi,
      direction: req.direction,
      orderType: req.orderType,
      stages: [],
      currency,
      orderDate: new Date(),
    };
    this.blockBalance(order, lot);
    return order;
  }

  async tryExecuteOrders() {
    const { orders } = await this.backtest.orders.getOrders({ accountId: '' });
    for (const order of orders) {
      const price = await this.isPriceReached(order);
      if (price) await this.executeOrder(order, price);
    }
  }

  private async executeOrder(order: OrderState, price: number) {
    const instrument = await this.getInstrumentByFigi(order.figi);
    this.setOrderExecuted(order, instrument, price);
    this.updateBalance(order, instrument.lot);
    const mainOperation = this.createOrderOperation(order, instrument);
    const comissionOperation = this.createComissionOperation(order, mainOperation);
    this.backtest.operations.pushOperations([ mainOperation, comissionOperation ]);
    const figiOperations = await this.getOperationsByFigi(mainOperation.figi);
    const position = this.createPosition(figiOperations, instrument, price);
    this.backtest.operations.replacePortfolioPosition(position);
  }

  /**
   * Заблокировать средства при создании заявки.
   */
  protected blockBalance(order: OrderState, lot: number) {
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) {
      const totalOrderAmount = Helpers.toNumber(order.totalOrderAmount) || 0;
      this.backtest.operations.blockMoney(totalOrderAmount);
    } else {
      this.backtest.operations.blockFigi(order.figi, order.lotsRequested * lot);
    }
  }

  /**
   * Разблокировать средства при отмене заявки.
   */
  async unblockBalance(order: OrderState) {
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) {
      const totalOrderAmount = Helpers.toNumber(order.totalOrderAmount) || 0;
      this.backtest.operations.blockMoney(-totalOrderAmount);
    } else {
      const { lot } = await this.getInstrumentByFigi(order.figi);
      this.backtest.operations.blockFigi(order.figi, -order.lotsRequested * lot);
    }
  }

  /**
   * Обновляем заблокированные ресурсы после успешного выполнения заявки.
   */
  protected updateBalance(order: OrderState, lot: number) {
    const qty = order.lotsExecuted * lot;
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) {
      const totalOrderAmount = Helpers.toNumber(order.totalOrderAmount) || 0;
      this.backtest.operations.addToBalance(-totalOrderAmount, 'blocked');
      this.backtest.operations.addToFigi(order.figi, qty, 'balance');
    } else {
      const executedOrderPrice = Helpers.toNumber(order.executedOrderPrice) || 0;
      const executedCommission = Helpers.toNumber(order.executedCommission) || 0;
      this.backtest.operations.addToBalance(executedOrderPrice - executedCommission, 'money');
      this.backtest.operations.addToFigi(order.figi, -qty, 'blocked');
    }
  }

  /**
   * Достигнута ли цена, указанная в заявке.
   * (для рыночных всегда достигнута)
   */
  private async isPriceReached(order: OrderState) {
    const prevCandle = await this.backtest.marketdata.getCandle({ figi: order.figi, offset: 1});
    if (!prevCandle) return false;
    const { low, high, close } = prevCandle;
    switch (order.orderType) {
      case OrderType.ORDER_TYPE_MARKET: return Helpers.toNumber(close);
      case OrderType.ORDER_TYPE_LIMIT: {
        const limitPrice = Helpers.toNumber(order.initialSecurityPrice!);
        const lowPrice = Helpers.toNumber(low!);
        const highPrice = Helpers.toNumber(high!);
        // See also: https://www.tradingview.com/pine-script-docs/en/v5/concepts/Strategies.html?highlight=backtesting#broker-emulator
        if (limitPrice >= lowPrice && limitPrice <= highPrice) return limitPrice;
      }
    }
  }

  private setOrderExecuted(order: OrderState, instrument: Instrument, price: number) {
    order.executionReportStatus = OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_FILL;
    order.lotsExecuted = order.lotsRequested;
    const executedOrderPrice = price * order.lotsExecuted * instrument.lot;
    const executedCommission = executedOrderPrice * this.options.brokerFee / 100;
    const totalOrderAmount = executedOrderPrice + executedCommission;
    order.executedOrderPrice = Helpers.toMoneyValue(executedOrderPrice, order.currency);
    order.executedCommission = Helpers.toMoneyValue(executedCommission, order.currency);
    order.totalOrderAmount = Helpers.toMoneyValue(totalOrderAmount, order.currency);
    order.averagePositionPrice = Helpers.toMoneyValue(price, order.currency);
  }

  private createOrderOperation(order: OrderState, instrument: Instrument): Operation {
    const isBuy = order.direction === OrderDirection.ORDER_DIRECTION_BUY;
    const operationType = isBuy ? OperationType.OPERATION_TYPE_BUY : OperationType.OPERATION_TYPE_SELL;
    const executedOrderPrice = Helpers.toNumber(order.executedOrderPrice!);
    const payment = isBuy ? -executedOrderPrice : executedOrderPrice;
    return {
      id: order.orderId,
      parentOperationId: '',
      figi: order.figi,
      operationType,
      state: OperationState.OPERATION_STATE_EXECUTED,
      payment: Helpers.toMoneyValue(payment, order.currency),
      price: order.averagePositionPrice,
      currency: order.currency,
      quantity: order.lotsExecuted,
      quantityRest: 0,
      type: getOperationText(operationType),
      instrumentType: instrument.instrumentType,
      trades: [],
      date: new Date(),
      // date: this.backtest.marketdata.getTime(),
    };
  }

  private createComissionOperation(order: OrderState, operation: Operation): Operation {
    const payment = -Helpers.toNumber(order.executedCommission!);
    const operationType = OperationType.OPERATION_TYPE_BROKER_FEE;
    return {
      id: `${operation.id}_fee`,
      parentOperationId: operation.id,
      instrumentType: operation.instrumentType,
      figi: order.figi,
      operationType,
      state: OperationState.OPERATION_STATE_EXECUTED,
      payment: Helpers.toMoneyValue(payment, order.currency),
      price: Helpers.toMoneyValue(0, order.currency),
      currency: order.currency,
      quantity: 0,
      quantityRest: 0,
      type: getOperationText(operationType),
      trades: [],
      date: operation.date,
    };
  }

  private createPosition(operations: Operation[], instrument: Instrument, price: number): PortfolioPosition {
    const qtyOperations = operations.filter(o => o.quantity > 0);
    const { sellLots, quantityLots } = calcPositionLots(qtyOperations);
    const quantity = quantityLots * instrument.lot;
    const totalAmountFilo = calcTotalAmount(qtyOperations, sellLots, 'filo');
    const totalAmountFifo = calcTotalAmount(qtyOperations, sellLots, 'fifo');
    const averagePriceFilo = quantity > 0 ? totalAmountFilo / quantity : 0;
    const averagePriceFifo = quantity > 0 ? totalAmountFifo / quantity : 0;
    return {
      figi: operations[ 0 ].figi,
      instrumentType: operations[ 0 ].instrumentType,
      quantityLots: Helpers.toQuotation(quantityLots),
      quantity: Helpers.toQuotation(quantity),
      currentPrice: Helpers.toMoneyValue(price, operations[ 0 ].currency),
      averagePositionPrice: Helpers.toMoneyValue(averagePriceFilo, operations[ 0 ].currency),
      averagePositionPriceFifo: Helpers.toMoneyValue(averagePriceFifo, operations[ 0 ].currency),
    };
  }

  private async getInstrumentByFigi(figi: string) {
    const { instrument } = await this.backtest.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: figi,
    });
    if (!instrument) throw new Error(`Нет данных по инструменту: ${figi}`);
    return instrument;
  }

  private async getOperationsByFigi(figi: string) {
    const { operations } = await this.backtest.operations.getOperations({
      figi,
      accountId: '',
      state: OperationState.OPERATION_STATE_EXECUTED,
    });
    return operations;
  }
}

function calcPositionLots(operations: Operation[]) {
  const res = { sellLots: 0, buyLots: 0, quantityLots: 0 };
  operations.forEach(o => {
    if (o.operationType === OperationType.OPERATION_TYPE_SELL) {
      res.sellLots += o.quantity;
    } else {
      res.buyLots += o.quantity;
    }
  });
  res.quantityLots = res.buyLots - res.sellLots;
  return res;
}

/**
 * Расчет суммарной стоимости по операциям:
 * - fifo: первым продается то, что было куплено первым
 * - filo: первым продается то, что было куплено последним
 */
function calcTotalAmount(operations: Operation[], selledLots: number, type: 'fifo' | 'filo') {
  if (type === 'filo') operations = operations.reverse();
  return operations
    .filter(o => o.operationType === OperationType.OPERATION_TYPE_BUY)
    .reduce((acc, o) => {
      selledLots -= o.quantity;
      // todo: если была продана только часть заявки, то тут не очень верно
      return selledLots < 0 ? acc + Math.abs(Helpers.toNumber(o.payment!)) : acc;
    }, 0);
}

function getOperationText(operationType: OperationType) {
  switch (operationType) {
    case OperationType.OPERATION_TYPE_BUY: return 'Покупка ЦБ';
    case OperationType.OPERATION_TYPE_SELL: return 'Продажа ЦБ';
    case OperationType.OPERATION_TYPE_BROKER_FEE: return 'Удержание комиссии за операцию';
    default: return '';
  }
}
