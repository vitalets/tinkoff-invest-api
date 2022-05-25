import { CandleInterval } from '../../src/generated/marketdata.js';
import { OrderDirection } from '../../src/generated/orders.js';
import { Helpers } from '../../src/index.js';

describe('helpers', () => {

  it('toQuotation', async () => {
    assert.deepEqual(Helpers.toQuotation(123.4), { units: 123, nano: 400000000 });
    assert.deepEqual(Helpers.toQuotation(-567.8), { units: -567, nano: -800000000 });
    assert.deepEqual(Helpers.toQuotation(0), { units: 0, nano: 0 });
  });

  it('toMoneyValue', async () => {
    assert.deepEqual(Helpers.toMoneyValue(123.4, 'rub'), { units: 123, nano: 400000000, currency: 'rub' });
    assert.deepEqual(Helpers.toMoneyValue(-567.8, 'rub'), { units: -567, nano: -800000000, currency: 'rub' });
    assert.deepEqual(Helpers.toMoneyValue(0, 'rub'), { units: 0, nano: 0, currency: 'rub' });
  });

  it('toMoneyString', async () => {
    assert.deepEqual(Helpers.toMoneyString({ units: 123, nano: 400000000, currency: 'rub' }), '123.4 rub');
    assert.deepEqual(Helpers.toMoneyString({ units: -567, nano: -800000000, currency: 'rub' }), '-567.8 rub');
    assert.deepEqual(Helpers.toMoneyString({ units: 0, nano: 0, currency: 'rub' }), '0 rub');
    assert.deepEqual(Helpers.toMoneyString(undefined), 'undefined undefined');
  });

  it('toNumber', async () => {
    assert.deepEqual(Helpers.toNumber({ units: 123, nano: 400000000 }), 123.4);
    assert.deepEqual(Helpers.toNumber({ units: -567, nano: -800000000, currency: 'rub' }), -567.8);
  });

  it('toHuman', async () => {
    assert.equal(Helpers.toHuman(CandleInterval.CANDLE_INTERVAL_1_MIN, CandleInterval), '1_MIN');
    assert.equal(Helpers.toHuman(OrderDirection.ORDER_DIRECTION_BUY, OrderDirection), 'BUY');
  });

  it('fromTo', async () => {
    assert.deepEqual(Helpers.fromTo('-5m', new Date('2022-05-13T12:00:00.000Z')), {
      from: new Date('2022-05-13T11:55:00.000Z'),
      to: new Date('2022-05-13T12:00:00.000Z'),
    });
    assert.deepEqual(Helpers.fromTo('1h', new Date('2022-05-13T12:00:00.000Z')), {
      from: new Date('2022-05-13T12:00:00.000Z'),
      to: new Date('2022-05-13T13:00:00.000Z'),
    });
  });
});
