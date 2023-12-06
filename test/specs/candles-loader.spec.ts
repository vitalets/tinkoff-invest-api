import fs from 'fs';
import fg from 'fast-glob';
import { CandleInterval } from '../../src/generated/marketdata.js';
import { CandlesLoader } from '../../src/index.js';

describe('candles-loader', () => {

  const cacheDir = 'test/.cache';
  const figi = 'BBG00QPYJ5H0';
  const candlesCacheDir = `${cacheDir}/candles/${figi}`;

  beforeEach(() => {
    fs.rmSync(candlesCacheDir, { recursive: true, force: true });
  });

  it('загрузка нужного кол-ва свечей в пн утром: создается кеш и грузятся свечи с пятницы', async () => {
    const candlesLoader = new CandlesLoader(testApi, { cacheDir });
    const { candles } = await candlesLoader.getCandles({
      figi,
      instrumentId: figi,
      interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
      minCount: 33,
      to: new Date('2022-04-25T08:00:00.000Z')
    });
    assert.equal(candles.length, 40);
    assert.equal(candles[0].time?.toISOString(), '2022-04-22T07:00:00.000Z');
    assert.equal(candles.slice(-1)[0].time?.toISOString(), '2022-04-25T07:45:00.000Z');
    assert.deepEqual(await fg(`${candlesCacheDir}/**`), [
      `test/.cache/candles/BBG00QPYJ5H0/15_min/2022-04-22.json`,
      `test/.cache/candles/BBG00QPYJ5H0/15_min/2022-04-23.json`,
      `test/.cache/candles/BBG00QPYJ5H0/15_min/2022-04-24.json`,
      `test/.cache/candles/BBG00QPYJ5H0/15_min/2022-04-25.json`,
    ]);
  });

  it('загрузка кол-ва свечей по from-to: создается кеш и используется предыдущий день', async () => {
    const candlesLoader = new CandlesLoader(testApi, { cacheDir });
    const { candles } = await candlesLoader.getCandles({
      figi,
      instrumentId: figi,
      interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
      from: new Date('2022-04-25T10:00:00.000Z'),
      to: new Date('2022-04-26T08:00:00.000Z')
    });
    assert.equal(candles.length, 28);
    assert.equal(candles[0].time?.toISOString(), '2022-04-25T10:00:00.000Z');
    assert.equal(candles[candles.length - 1].time?.toISOString(), '2022-04-26T07:45:00.000Z');
  });

  // todo: проверять, что реальное апи не вызывается
});
