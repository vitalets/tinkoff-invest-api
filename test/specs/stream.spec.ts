import EventEmitter, { on } from 'node:events';
import { Candle, MarketDataResponse, SubscriptionInterval, SubscriptionStatus } from '../../src/generated/marketdata.js';
import { MarketStream } from '../../src/stream/market.js';

describe('stream', () => {

  const figi = 'BBG004730N88';
  const interval = SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE;
  const waitingClose = false;
  const candlesReq = { instruments: [ { figi, interval } ], waitingClose };
  const handler = () => { }; // eslint-disable-line @typescript-eslint/no-empty-function
  const candlesStatus: MarketDataResponse = {
    subscribeCandlesResponse: {
      trackingId: 'xxx',
      candlesSubscriptions: [
        { figi, interval, subscriptionStatus: SubscriptionStatus.SUBSCRIPTION_STATUS_SUCCESS }
      ]
    }
  };

  beforeEach(async () => {
    // отключаем autoReconnect, чтобы проще тестировать
    testApi.stream.market.options.autoReconnect = false;
    testApi.stream.market.subscriptions.clear();
    // в какой-то момент тесты стрима не проходили без этой задержки, возможно что были проблемы на сервере.
    // await new Promise(r => setTimeout(r, 3000));
  });

  afterEach(async () => {
    await testApi.stream.market.cancel();
  });

  it('getMySubscriptions', async () => {
    const res1 = await testApi.stream.market.getMySubscriptions();
    const unsubscribe = await testApi.stream.market.candles(candlesReq, handler);
    const res2 = await testApi.stream.market.getMySubscriptions();
    await testApi.stream.market.candles({
      instruments: [ { figi: 'BBG00QPYJ5H0', interval } ], waitingClose
    }, handler);
    const res3 = await testApi.stream.market.getMySubscriptions();
    await unsubscribe();
    const res4 = await testApi.stream.market.getMySubscriptions();
    assert.deepEqual(getNonEmptyKeys(res1), []);
    assert.deepEqual(getNonEmptyKeys(res2), [ 'subscribeCandlesResponse' ]);
    assert.deepEqual(res2.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi, interval: 1, subscriptionStatus: 1 }
    ]);
    assert.deepEqual(res3.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi, interval: 1, subscriptionStatus: 1 },
      { figi: 'BBG00QPYJ5H0', interval: 1, subscriptionStatus: 1 },
    ]);
    assert.deepEqual(res4.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi: 'BBG00QPYJ5H0', interval: 1, subscriptionStatus: 1 }
    ]);
  });

  it('подписка на свечи по конкретным figi', async () => {
    const calls: Candle[] = [];
    const stream = new MarketStreamEmulate(testApi);

    await Promise.all([
      stream.candles(candlesReq, candle => calls.push(candle)),
      stream.emulate(candlesStatus),
    ]);

    // нужный figi и interval
    const ownFigiAndInterval = { candle: { figi, interval, volume: 1 } };
    await Promise.all([ stream.emulate(ownFigiAndInterval), waitMarketStreamEvent(stream, 'data') ]);

    assert.equal(calls.length, 1);
    assert.deepEqual(calls[ 0 ], { figi, interval, volume: 1 });

    // другой figi
    const anotherFigi = { candle: { figi: 'another_figi', interval, volume: 2 } };
    await Promise.all([ stream.emulate(anotherFigi), waitMarketStreamEvent(stream, 'data') ]);

    // другой interval
    const anotherInterval = { candle: { figi, interval: 2, volume: 3 } };
    await Promise.all([ stream.emulate(anotherInterval), waitMarketStreamEvent(stream, 'data') ]);

    assert.equal(calls.length, 1);
  });

  it('ошибка подписки (неверный figi)', async () => {
    const promise = testApi.stream.market.candles({
      instruments: [ { figi: 'bad_figi', interval } ],
      waitingClose,
    }, handler);
    await assert.rejects(promise, /bad_figi: status 2/);
  });

  it('события: open, data, close', async () => {
    const openPromise = waitMarketStreamEvent(testApi.stream.market, 'open');
    const dataPromise = waitMarketStreamEvent(testApi.stream.market, 'data');
    const closePromise = waitMarketStreamEvent(testApi.stream.market, 'close');
    await testApi.stream.market.candles(candlesReq, handler);
    await openPromise;
    const data = await dataPromise;
    await testApi.stream.market.cancel();
    const closeError = await closePromise;
    assert.deepEqual(data.subscribeCandlesResponse?.candlesSubscriptions, [
      { figi, interval: 1, subscriptionStatus: 1 }
    ]);
    assert.equal(testApi.stream.market.connected, false);
    assert.equal(closeError, undefined);
  });

  it('connected', async () => {
    assert.equal(testApi.stream.market.connected, false);
    await testApi.stream.market.candles(candlesReq, handler);
    assert.equal(testApi.stream.market.connected, true);
    await testApi.stream.market.cancel();
    assert.equal(testApi.stream.market.connected, false);
  });

  it('unsubscribe', async () => {
    assert.equal(testApi.stream.market.subscriptions.size, 0);
    const unsubscribe = await testApi.stream.market.candles(candlesReq, handler);
    assert.equal(testApi.stream.market.subscriptions.size, 1);
    await unsubscribe();
    assert.equal(testApi.stream.market.subscriptions.size, 0);
  });

  it('закрытие соединения при ошибке сервера', async () => {
    const stream = new MarketStreamEmulate(testApi);
    stream.options.autoReconnect = false;

    await Promise.all([
      stream.candles(candlesReq, handler),
      stream.emulate(candlesStatus),
    ]);

    const [ error, closeError ] = await Promise.all([
      waitMarketStreamEvent(stream, 'error'),
      waitMarketStreamEvent(stream, 'close'),
      stream.emulate(new Error('foo')),
    ]);

    assert.equal(stream.connected, false);
    assert.equal(error.toString(), 'Error: foo');
    assert.equal(closeError.toString(), 'Error: foo');
  });

  it('autoReconnect', async () => {
    const stream = new MarketStreamEmulate(testApi);
    stream.options.autoReconnect = true;

    // эмулируем коннект
    await Promise.all([
      stream.candles(candlesReq, handler),
      stream.emulate(candlesStatus),
    ]);

    // эмулируем обрыв соединения и ждем реконнект
    await Promise.all([
      waitMarketStreamEvent(stream, 'error'),
      waitMarketStreamEvent(stream, 'close'),
      waitMarketStreamEvent(stream, 'open'),
      stream.emulate(new Error('foo')),
    ]);

    // эмулируем отправку данных после реконнекта
    await Promise.all([
      waitMarketStreamEvent(stream, 'data'),
      stream.emulate(candlesStatus),
    ]);

    assert.equal(stream.connected, true);
    assert.equal(stream.getEmitter().listenerCount('data'), 1);
  });

  // todo: test exponential reconnect?
});

export async function waitMarketStreamEvent(stream: MarketStream, event: 'open' | 'data' | 'close' | 'error') {
  return new Promise<MarketDataResponse>(resolve => {
    const handler = (res: MarketDataResponse) => {
      stream.off(event, handler);
      resolve(res);
    };
    stream.on(event, handler);
  });
}

/**
 * Класс, позволяющий эмулировать ответы сервера
 */
class MarketStreamEmulate extends MarketStream {
  private responseEmitter = new EventEmitter();

  emulate(res: MarketDataResponse | Error) {
    this.responseEmitter.emit('response', res);
  }

  getEmitter() {
    return this.emitter;
  }

  protected async waitEvents() {
    const call = this.createResponseIterable();
    await super.waitEvents(call);
  }

  protected async *createResponseIterable() {
    const innerRes = on(this.responseEmitter, 'response');
    for await (const data of innerRes) {
      const value = data[ 0 ];
      if (value instanceof Error) throw value;
      yield value as MarketDataResponse;
    }
  }
}

function getNonEmptyKeys(obj: MarketDataResponse) {
  const keys = Object.keys(obj) as (keyof MarketDataResponse)[];
  return keys.filter(key => Boolean(obj[key]));
}
