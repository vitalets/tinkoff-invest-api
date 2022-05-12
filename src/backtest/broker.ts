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
    const lotsRequested = req.quantity;
    const price = Helpers.toNumber(req.price || this.backtest.marketdata.currentCandle.close) || 0;
    const { lot } = await this.getInstrumentByFigi(req.figi);
    const initialOrderPrice = price * lotsRequested * lot;
    return {
      orderId: req.orderId,
      executionReportStatus: OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW,
      lotsRequested,
      lotsExecuted: 0,
      initialSecurityPrice: Helpers.toMoneyValue(price, this.options.currency),
      initialOrderPrice: Helpers.toMoneyValue(initialOrderPrice, this.options.currency),
      figi: req.figi,
      direction: req.direction,
      orderType: req.orderType,
      stages: [],
      currency: this.options.currency,
      orderDate: this.backtest.marketdata.getTime(),
    };
  }

  async tryExecuteOrders() {
    const { orders } = await this.backtest.orders.getOrders({ accountId: '' });
    for (const order of orders) {
      const price = this.isPriceReached(order);
      if (price) await this.executeOrder(order, price);
    }
  }

  private async executeOrder(order: OrderState, price: number) {
    const instrument = await this.getInstrumentByFigi(order.figi);
    this.setOrderExecuted(order, instrument, price,);
    const operation = this.createOperation(order, instrument);
    const comissionOperation = this.createComissionOperation(order, operation);
    this.backtest.operations.pushOperations([ operation, comissionOperation ]);
    const figiOperations = await this.getOperationsByFigi(operation.figi);
    const position = this.createPosition(figiOperations, instrument, price);
    this.backtest.operations.pushPosition(position);
  }

  /**
   * Блокировать средства для заявки.
   * (Пока не блокируем, а просто проверяем)
   */
  async blockPositionForOrder(order: OrderState) {
    if (order.direction === OrderDirection.ORDER_DIRECTION_BUY) {
      const balance = this.backtest.operations.getBalance();
      const orderAmount = Helpers.toNumber(order.initialOrderPrice!);
      if (balance < orderAmount) {
        throw new Error(`Недостаточно средств для покупки: ${balance} < ${orderAmount}`);
      }
    } else {
      const position = await this.getPositionByFigi(order.figi);
      const lots = Helpers.toNumber(position?.quantityLots) || 0;
      if (lots < order.lotsRequested) {
        throw new Error(`Недостаточно лотов для продажи: ${lots} < ${order.lotsRequested}`);
      }
    }
  }

  /**
   * Разблокировать средства для заявки.
   */
  unblockPositionForOrder(_: OrderState) {
    // т.к. пока ничего не блокируем, то здесь noop
  }

  /**
   * Достигнута ли цена, указанная в заявке.
   * (для рыночных всегда достуигнута)
   */
  private isPriceReached(order: OrderState) {
    const prevCandle = this.backtest.marketdata.candles[ this.backtest.marketdata.curIndex - 1 ];
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
    order.executedOrderPrice = Helpers.toMoneyValue(executedOrderPrice, this.options.currency);
    order.executedCommission = Helpers.toMoneyValue(executedCommission, this.options.currency);
    order.totalOrderAmount = Helpers.toMoneyValue(totalOrderAmount, this.options.currency);
    order.averagePositionPrice = Helpers.toMoneyValue(price, this.options.currency);
  }

  private createOperation(order: OrderState, instrument: Instrument): Operation {
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
      date: this.backtest.marketdata.getTime(),
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

  private async getPositionByFigi(figi: string) {
    const { positions } = await this.backtest.operations.getPortfolio({ accountId: '' });
    return positions.find(p => p.figi === figi);
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
