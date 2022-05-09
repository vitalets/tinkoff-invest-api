import { CandleInterval } from '../../src/generated/marketdata.js';
import { OperationState } from '../../src/generated/operations.js';
import { OrderDirection, OrderExecutionReportStatus, OrderType } from '../../src/generated/orders.js';
import { Backtest, Helpers } from '../../src/index.js';

describe('backtest', () => {

  function createBacktest() {
    return new Backtest({ candlesFile: 'test/data/candles.json' });
  }

  async function getOrdersCount(backtest: Backtest) {
    const { orders } = await backtest.api.orders.getOrders({ accountId: '' });
    return orders.length;
  }

  async function getOperations(backtest: Backtest) {
    const { operations } = await backtest.api.operations.getOperations({
      figi: 'xxx',
      state: OperationState.OPERATION_STATE_EXECUTED,
      accountId: '',
    });
    return operations;
  }

  it('getAccounts', async () => {
    const backtest = createBacktest();
    const res = await backtest.api.users.getAccounts({});
    assert.equal(res.accounts[ 0 ].id, '0000000000');
  });

  it('getPortfolio', async () => {
    const backtest = createBacktest();
    const res = await backtest.api.operations.getPortfolio({ accountId: 'x' });
    assert.deepEqual(res.positions, []);
    assert.deepEqual(res.totalAmountCurrencies, {
      units: 100_000,
      nano: 0,
      currency: 'rub',
    });
  });

  it('итерация по свечам', async () => {
    const backtest = createBacktest();
    const interval = CandleInterval.CANDLE_INTERVAL_1_MIN;

    backtest.tick();
    const res = await backtest.api.marketdata.getCandles({ figi: 'xxx', interval });
    assert.equal(res.candles.length, 1);
    assert.deepEqual(res.candles[ 0 ].close, { units: 122, nano: 860000000 });

    backtest.tick();
    const res1 = await backtest.api.marketdata.getCandles({ figi: 'xxx', interval });
    assert.equal(res1.candles.length, 2);
    assert.deepEqual(res1.candles[ 0 ].close, { units: 122, nano: 860000000 });
    assert.deepEqual(res1.candles[ 1 ].close, { units: 123, nano: 650000000 });

    while (backtest.tick()) {
      // noop
    }
    const res2 = await backtest.api.marketdata.getCandles({ figi: 'xxx', interval });
    assert.equal(res2.candles.length, 525);
  });

  it('покупка по рыночной цене', async () => {
    const backtest = createBacktest();

    backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // создать заявку
    const res = await backtest.api.orders.postOrder({
      accountId: '',
      figi: 'xxx',
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    assert.equal(res.figi, 'xxx');
    assert.equal(res.executionReportStatus, OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW);
    assert.equal(await getOrdersCount(backtest), 1);

    backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // check operations
    const operations = await getOperations(backtest);
    assert.equal(operations.length, 2);
    assert.deepEqual(operations[ 0 ].payment, { units: -122, nano: -860000000, currency: 'rub' });
    // 122.86 * 0.003 = 0.36858
    assert.deepEqual(operations[ 1 ].payment, { units: -0, nano: -368580000, currency: 'rub' });

    // check balance: 100_000 - (122.86 + 0.36858) = 99876.77142
    const portfolio = await backtest.api.operations.getPortfolio({ accountId: '' });
    assert.deepEqual(portfolio.totalAmountCurrencies, { units: 99876, nano: 771420000, currency: 'rub' });

    // check positions
    assert.equal(portfolio.positions.length, 1);
    assert.deepEqual(portfolio.positions[0].averagePositionPrice, { units: 122, nano: 860000000, currency: 'rub' });
    assert.deepEqual(portfolio.positions[0].quantityLots, { units: 1, nano: 0 });
    assert.deepEqual(portfolio.positions[0].quantity, { units: 1, nano: 0 });
  });

  it('продажа по рыночной цене', async () => {
    const backtest = createBacktest();
    backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // сначала покупаем 1 лот: цена 122.86 (+комиссия)
    await backtest.api.orders.postOrder({
      accountId: '',
      figi: 'xxx',
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    backtest.tick();

    // теперь продаем этот 1 лот: цена 123.65 (-комиссия)
    await backtest.api.orders.postOrder({
      accountId: '',
      figi: 'xxx',
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '2',
    });
    backtest.tick();

    // check operations
    const operations = await getOperations(backtest);
    assert.equal(operations.length, 4);
    assert.deepEqual(operations[ 2 ].payment, { units: 123, nano: 650000000, currency: 'rub' });
    // 123.65 * 0.003 = 0.37095
    assert.deepEqual(operations[ 3 ].payment, { units: -0, nano: -370950000, currency: 'rub' });

    // check balance: 100_000 - (122.86 + 0.36858) + (123.65 - 0.37095) = 100000.05047
    const portfolio = await backtest.api.operations.getPortfolio({ accountId: '' });
    assert.deepEqual(portfolio.totalAmountCurrencies, { units: 100000, nano: 50470000, currency: 'rub' });

    // check positions
    assert.equal(portfolio.positions.length, 1);
    assert.deepEqual(portfolio.positions[0].quantityLots, { units: 0, nano: 0 });
    assert.deepEqual(portfolio.positions[0].quantity, { units: 0, nano: 0 });
    assert.deepEqual(portfolio.positions[0].averagePositionPrice, { units: 0, nano: 0, currency: 'rub' });
  });

  it('покупка по лимит-цене', async () => {
    const backtest = createBacktest();
    backtest.tick();
    const res = await backtest.api.orders.postOrder({
      accountId: '',
      figi: 'xxx',
      quantity: 1,
      price: Helpers.toQuotation(123), // предыдущая свеча: l=122.8, h=123.87, заявка должна исполниться
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: '1',
    });
    assert.deepEqual(res.initialOrderPrice, { units: 123, nano: 0, currency: 'rub' });

    backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // check operations
    const { operations } = await backtest.api.operations.getOperations({
      figi: 'xxx',
      state: OperationState.OPERATION_STATE_EXECUTED,
      accountId: '',
    });
    assert.equal(operations.length, 2);
    assert.deepEqual(operations[ 0 ].payment, { units: -123, nano: -0, currency: 'rub' });
    // 123 * 0.003 = 0.369
    assert.deepEqual(operations[ 1 ].payment, { units: -0, nano: -369000000, currency: 'rub' });
  });

  it('продажа по рыночной цене: недостаточно лотов в портфеле', async () => {
    const backtest = createBacktest();
    backtest.tick();
    const promise = backtest.api.orders.postOrder({
      accountId: '',
      figi: 'xxx',
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    await assert.rejects(promise, /Недостаточно лотов для заявки: 1 > 0/);
  });

});
