import { InstrumentIdType } from '../../src/generated/instruments.js';
import { CandleInterval, SubscriptionInterval } from '../../src/generated/marketdata.js';
import { OperationState } from '../../src/generated/operations.js';
import { OrderDirection, OrderExecutionReportStatus, OrderType } from '../../src/generated/orders.js';
import { Backtest, Helpers } from '../../src/index.js';
import { waitMarketStreamEvent } from './stream.spec.js';

describe('backtest', () => {

  const figi = 'BBG004730N88';

  async function createBacktest() {
    const backtest = new Backtest({
      token: process.env.TINKOFF_API_TOKEN_READONLY!,
      from: new Date('2022-04-29T10:00:00+03:00'),
      to: new Date('2022-04-30T19:00:00+03:00'),
      candleInterval: CandleInterval.CANDLE_INTERVAL_1_MIN,
      cacheDir: 'test/.cache',
    });
    await backtest.tick();
    return backtest;
  }

  async function getOrdersCount(backtest: Backtest) {
    const { orders } = await backtest.api.orders.getOrders({ accountId: '' });
    return orders.length;
  }

  async function getOperations(backtest: Backtest) {
    const { operations } = await backtest.api.operations.getOperations({
      figi,
      state: OperationState.OPERATION_STATE_EXECUTED,
      accountId: '',
    });
    return operations;
  }

  it('getAccounts', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.users.getAccounts({});
    assert.equal(res.accounts[ 0 ].id, '0000000000');
  });

  it('getPortfolio', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.operations.getPortfolio({ accountId: 'x' });
    assert.deepEqual(res.positions, []);
    assert.deepEqual(res.totalAmountCurrencies, { units: 100_000, nano: 0, currency: 'rub' });
    assert.deepEqual(res.expectedYield, { units: 0, nano: 0 });
  });

  it('getInstrumentBy', async () => {
    const backtest = await createBacktest();
    const { instrument } = await backtest.api.instruments.getInstrumentBy({
      idType: InstrumentIdType.INSTRUMENT_ID_TYPE_FIGI,
      classCode: '',
      id: 'BBG004730N88'
    });
    assert.equal(instrument?.ticker, 'SBER');
    assert.equal(instrument?.tradingStatus, 5);
  });

  it('getPositions', async () => {
    const backtest = await createBacktest();
    const positions = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positions, {
      money: [ { units: 100000, nano: 0, currency: 'rub' } ],
      securities: [],
      blocked: [],
      futures: [],
      limitsLoadingInProgress: false,
    });
  });

  it('итерация по свечам', async () => {
    const backtest = await createBacktest();
    const interval = CandleInterval.CANDLE_INTERVAL_1_MIN;

    // запрашиваем свечи за 3 мин
    let res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('3m') });
    assert.equal(res.candles.length, 3);
    assert.equal(res.candles[0].time?.toISOString(), '2022-04-29T07:00:00.000Z');
    assert.equal(res.candles[1].time?.toISOString(), '2022-04-29T07:01:00.000Z');
    assert.equal(res.candles[2].time?.toISOString(), '2022-04-29T07:02:00.000Z');

    await backtest.tick();

    res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('3m') });
    assert.equal(res.candles.length, 3);
    assert.equal(res.candles[0].time?.toISOString(), '2022-04-29T07:01:00.000Z');
    assert.equal(res.candles[1].time?.toISOString(), '2022-04-29T07:02:00.000Z');
    assert.equal(res.candles[2].time?.toISOString(), '2022-04-29T07:03:00.000Z');

    while (await backtest.tick()) { /* noop */ }

    res = await backtest.api.marketdata.getCandles({ figi, interval, ...Helpers.fromTo('3m') });
    assert.equal(res.candles.length, 0);
  });

  it('покупка по рыночной цене', async () => {
    const backtest = await createBacktest();

    assert.equal(await getOrdersCount(backtest), 0);

    // создать заявку
    const res = await backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    assert.equal(res.figi, figi);
    assert.equal(res.executionReportStatus, OrderExecutionReportStatus.EXECUTION_REPORT_STATUS_NEW);
    assert.deepEqual(res.initialOrderPrice, { units: 1228, nano: 600000000, currency: 'rub' });
    // 1228.6 * 0.003 = 3.6858
    assert.deepEqual(res.initialCommission, { units: 3, nano: 685800000, currency: 'rub' });
    assert.deepEqual(res.totalOrderAmount, { units: 1232, nano: 285800000, currency: 'rub' });
    assert.equal(await getOrdersCount(backtest), 1);

    // check blocked money/figi
    const positions = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positions.blocked, [{ units: 1232, nano: 285800000, currency: 'rub' }]);
    assert.deepEqual(positions.money, [{ units: 98767, nano: 714200000, currency: 'rub' }]);
    assert.deepEqual(positions.securities, []);

    await backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // check operations
    const operations = await getOperations(backtest);
    assert.equal(operations.length, 2);
    assert.deepEqual(operations[ 0 ].payment, { units: -1228, nano: -600000000, currency: 'rub' });
    assert.equal(operations[ 0 ].date?.toISOString(), '2022-04-29T07:01:00.000Z');
    // 1228.6 * 0.003 = 3.6858
    assert.deepEqual(operations[ 1 ].payment, { units: -3, nano: -685800000, currency: 'rub' });

    // check balance and capital: 100_000 - (1228.6 + 3.6858) = 98767.7142
    const portfolio = await backtest.api.operations.getPortfolio({ accountId: '' });

    // check positions
    assert.equal(portfolio.positions.length, 1);
    assert.deepEqual(portfolio.positions[0].currentPrice, { units: 123, nano: 650000000, currency: 'rub' });
    assert.deepEqual(portfolio.positions[0].averagePositionPrice, { units: 122, nano: 860000000, currency: 'rub' });
    assert.deepEqual(portfolio.positions[0].averagePositionPriceFifo, { units: 122, nano: 860000000, currency: 'rub' });
    assert.deepEqual(portfolio.positions[0].quantityLots, { units: 1, nano: 0 });
    assert.deepEqual(portfolio.positions[0].quantity, { units: 10, nano: 0 });
    assert.equal(portfolio.positions[0].instrumentType, 'share');

    // check blocked money/figi
    const positionsUnblocked = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positionsUnblocked.blocked, []);
    assert.deepEqual(positionsUnblocked.money, [{ units: 98767, nano: 714200000, currency: 'rub' }]);
    assert.deepEqual(positionsUnblocked.securities, [{ figi: 'BBG004730N88', balance: 10, blocked: 0 }]);

    // totals
    assert.deepEqual(portfolio.totalAmountCurrencies, { units: 98767, nano: 714200000, currency: 'rub' });
    assert.deepEqual(portfolio.totalAmountShares, { units: 1236, nano: 500000000, currency: 'rub' });
    // capital: 100_000 - (1228.6 + 3.6858) + 1236.5 = 100_004.2142
    // expectedYield: 100 * (100_004.2142 - 100_000 ) / 100_000 = 0.42142%
    assert.deepEqual(portfolio.expectedYield, { units: 0, nano: 4214200 });
  });

  it('продажа по рыночной цене', async () => {
    const backtest = await createBacktest();

    assert.equal(await getOrdersCount(backtest), 0);

    // сначала покупаем 1 лот: цена 122.86 (+комиссия)
    await backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    await backtest.tick();

    // теперь продаем этот 1 лот: цена 123.65 (+комиссия)
    await backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 1,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '2',
    });
    // check blocked figi
    const positionsUnblocked = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positionsUnblocked.securities, [{ figi: 'BBG004730N88', balance: 0, blocked: 10 }]);

    await backtest.tick();

    // check operations
    const operations = await getOperations(backtest);
    assert.equal(operations.length, 4);
    assert.deepEqual(operations[ 0 ].payment, { units: -1228, nano: -600000000, currency: 'rub' });
    assert.deepEqual(operations[ 1 ].payment, { units: -3, nano: -685800000, currency: 'rub' });
    assert.deepEqual(operations[ 2 ].payment, { units: 1236, nano: 500000000, currency: 'rub' });
    // 1236.5 * 0.003 = 3.7095
    assert.deepEqual(operations[ 3 ].payment, { units: -3, nano: -709500000, currency: 'rub' });

    // check balance: 100_000 - (1228.6 + 3.6858) + (1236.5 - 3.7095) = 100000.5047
    const portfolio = await backtest.api.operations.getPortfolio({ accountId: '' });
    assert.deepEqual(portfolio.totalAmountCurrencies, { units: 100000, nano: 504700000, currency: 'rub' });

    // check portfolio positions
    assert.equal(portfolio.positions.length, 1);
    assert.deepEqual(portfolio.positions[0].quantityLots, { units: 0, nano: 0 });
    assert.deepEqual(portfolio.positions[0].quantity, { units: 0, nano: 0 });
    assert.deepEqual(portfolio.positions[0].averagePositionPrice, { units: 0, nano: 0, currency: 'rub' });
  });

  it('покупка по лимит-цене', async () => {
    const backtest = await createBacktest();

    const res = await backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 10,
      price: Helpers.toQuotation(123), // предыдущая свеча: l=122.8, h=123.87, заявка должна исполниться
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: '1',
    });
    assert.deepEqual(res.initialOrderPrice, { units: 12300, nano: 0, currency: 'rub' });

    await backtest.tick();
    assert.equal(await getOrdersCount(backtest), 0);

    // check operations
    const { operations } = await backtest.api.operations.getOperations({
      figi,
      state: OperationState.OPERATION_STATE_EXECUTED,
      accountId: '',
    });
    assert.equal(operations.length, 2);
    assert.deepEqual(operations[ 0 ].payment, { units: -12300, nano: -0, currency: 'rub' });
    // 12300 * 0.003 = 36.9
    assert.deepEqual(operations[ 1 ].payment, { units: -36, nano: -900000000, currency: 'rub' });
  });

  it('отмена заявки: заблокированные средства возвращаются на баланс', async () => {
    const backtest = await createBacktest();

    const { orderId } = await backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 1,
      price: Helpers.toQuotation(100),
      direction: OrderDirection.ORDER_DIRECTION_BUY,
      orderType: OrderType.ORDER_TYPE_LIMIT,
      orderId: '1',
    });

    await backtest.tick();

    await backtest.api.orders.cancelOrder({ orderId, accountId: '' });
    assert.equal(await getOrdersCount(backtest), 0);

    const positions = await backtest.api.operations.getPositions({ accountId: '' });
    assert.deepEqual(positions.money, [{ units: 100000, nano: 0, currency: 'rub' }]);

    const portfolio = await backtest.api.operations.getPortfolio({ accountId: '' });
    assert.deepEqual(portfolio.totalAmountCurrencies, { units: 100000, nano: 0, currency: 'rub' });
  });

  it('недостаточно лотов для продажи', async () => {
    const backtest = await createBacktest();

    const promise = backtest.api.orders.postOrder({
      accountId: '',
      figi,
      quantity: 5,
      direction: OrderDirection.ORDER_DIRECTION_SELL,
      orderType: OrderType.ORDER_TYPE_MARKET,
      orderId: '1',
    });
    await assert.rejects(promise, /Отрицательный баланс инструмента BBG004730N88: -50/);
  });

  it('getLastPrices', async () => {
    const backtest = await createBacktest();
    const { lastPrices } = await backtest.api.marketdata.getLastPrices({ figi: [ figi ] });
    assert.deepEqual(lastPrices[0], {
      figi,
      price: { units: 122, nano: 860000000 },
      time: new Date('2022-04-29T07:00:00.000Z')
    });
  });

  it('getOrderBook', async () => {
    const backtest = await createBacktest();
    const res = await backtest.api.marketdata.getOrderBook({ figi, depth: 1 });
    assert.deepEqual(res, {
      figi,
      depth: 1,
      bids: [],
      asks: [],
      lastPrice: { units: 122, nano: 860000000 },
      closePrice: { units: 122, nano: 860000000 },
      limitUp: { units: 123, nano: 870000000 },
      limitDown: { units: 122, nano: 800000000 },
    });
  });

  it('stream: подписка и получение свечей', async () => {
    const backtest = await createBacktest();
    const interval = SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;

    // подписываемся
    const promise = waitMarketStreamEvent(backtest.api);
    backtest.api.stream.market.watch({ candles: [ { figi, interval } ]});
    const data = await promise;
    assert.deepEqual(data, {
      subscribeCandlesResponse: {
        trackingId: 'xxx',
        candlesSubscriptions: [
          { figi: 'BBG004730N88', interval: 1, subscriptionStatus: 1 }
        ]
      }
    });

    // ждем свечу
    const promiseCandle = waitMarketStreamEvent(backtest.api);
    await backtest.tick();
    const dataCandle = await promiseCandle;
    assert.deepEqual(dataCandle.candle?.figi, 'BBG004730N88');
    assert.deepEqual(dataCandle.candle?.close, { units: 123, nano: 650000000 });
  });

});
