/**
 * Эмуляция marketdata.
 * See: https://tinkoff.github.io/investAPI/head-marketdata/
 *
 * Важный момент: при получении свечей в Тинькофф АПИ поле "from" включается в результат, а "to" не включается.
 * Т.е. запрос 5-мин свечей с 12:00 по 12:05 вернет 1 свечу.
 * В режиме бэктеста часто цикл бежит именно по границам свечей, это может приводить к неожиданным результатам.
 * Поэтому сделана небольшая хитрость: к начальной дате бэктеста автоматически прибавляется 1мс.
 */
import { Client } from 'nice-grpc';
import MockDate from 'mockdate';
import Debug from 'debug';
import { SecurityTradingStatus } from '../generated/common.js';
import {
  MarketDataServiceDefinition,
  GetCandlesRequest,
  HistoricCandle,
  GetLastPricesRequest,
  GetOrderBookRequest,
  GetTradingStatusRequest,
  Order,
  GetLastTradesRequest,
  Trade,
  CandleInterval
} from '../generated/marketdata.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';
import { CandlesLoader } from '../candles-loader/index.js';

const debug = Debug('tinkoff-invest-api:backtest:marketdata');

// сохраняем оригинальный конструктор Date(), т.к. при бэктесте он подменяется.
const OriginalDate = Date;

type DateRange = { from: Date, to: Date };

export class MarketDataStub implements Client<typeof MarketDataServiceDefinition> {
  private candles: Map<string, HistoricCandle[]> = new Map();
  private candlesFromTo: Map<string, DateRange> = new Map();
  private candlesLoader: CandlesLoader;
  private ticks = 0;

  constructor(private backtest: Backtest) {
    this.assertFinalDateInThePast();
    const { cacheDir } = this.options;
    this.candlesLoader = new BacktestCandlesLoader(this.backtest.apiReal, { cacheDir });
  }

  private get options() {
    return this.backtest.options;
  }

  /**
   * Смещаем дату на интервал свечи.
   */
  tick() {
    const nextDate = this.ticks === 0
      // добавляем 1 мс к стартовой дате. Это дает более ожидаемый результат:
      // текущей свечей будет именно свеча за сегодняшнюю дату
      ? new Date(this.options.from.valueOf() + 1)
      : new Date(Date.now() + intervalToMs(this.options.candleInterval));
    if (nextDate < this.options.to) {
      MockDate.set(nextDate);
      debug(`Установлена дата: ${nextDate.toLocaleString()}`);
      this.ticks++;
      return true;
    } else {
      debug(`Достигнута конечная дата: ${nextDate.toLocaleString()}`);
      // возможно тут стоит сделать MockDate.reset()
      return false;
    }
  }

  /**
   * Получение свечей.
   */
  async getCandles({ figi, interval, from, to }: GetCandlesRequest) {
    this.assertTickCalled();
    this.assertSameInterval(interval);
    if (!from || !to) throw new Error(`Нужно указать from и to`);
    const loadedRange = this.candlesFromTo.get(figi);
    if (!loadedRange || from < loadedRange.from || to > loadedRange.to) {
      const maxRange = buildMaxRange({ from, to }, loadedRange);
      await this.loadCandles(figi, maxRange.from, maxRange.to);
      // todo: тут можно было бы не перезагружать уже загруженные свечи каждый раз, но пока так
    } else {
      debug('Все запрошенные свечи есть в memory-кеше');
    }
    const candles = this.getFilteredCandles(figi, from, to);
    return { candles };
  }

  async getLastPrices(req: GetLastPricesRequest) {
    const currentPrices = await Promise.all(req.figi.map(figi => this.getCurrentPrice(figi)));
    const lastPrices = currentPrices.map((price, index) => {
      return {
        figi: req.figi[index],
        price: Helpers.toQuotation(price),
        time: new Date(),
      };
    });
    return { lastPrices };
  }

  async getOrderBook({ figi, depth }: GetOrderBookRequest) {
    const currentCandle = await this.getCurrentCandle(figi);
    const bids: Order[] = [];
    const asks: Order[] = [];
    return {
      figi,
      depth,
      bids,
      asks,
      lastPrice: currentCandle.close,
      closePrice: currentCandle.close,
      limitUp: currentCandle.high,
      limitDown: currentCandle.low,
    };
  }

  async getTradingStatus({ figi }: GetTradingStatusRequest) {
    return {
      figi,
      tradingStatus: SecurityTradingStatus.SECURITY_TRADING_STATUS_NORMAL_TRADING,
      limitOrderAvailableFlag: true,
      marketOrderAvailableFlag: true,
      apiTradeAvailableFlag: true,
    };
  }

  async getLastTrades(_: GetLastTradesRequest) {
    // todo: not implemented yet
    const trades: Trade[] = [];
    return { trades };
  }

  // --- Для внутреннего использования ---

  async getCurrentPrice(figi: string) {
    const currentCandle = await this.getCurrentCandle(figi);
    return Helpers.toNumber(currentCandle.close!);
  }

  async getCurrentCandle(figi: string) {
    return this.getCandle({ figi, offset: 0 });
  }

  async getCandle({ figi, offset }: { figi: string, offset: number }) {
    const { candleInterval: interval } = this.options;
    const intervalMs = intervalToMs(interval);
    const now = Date.now();
    const to = new Date(now - offset * intervalMs);
    // отступаем от текущей даты, чтобы получить ровно одну свечу
    const from = new Date(to.valueOf() - intervalMs);
    const { candles } = await this.getCandles({ figi, interval, from, to });
    if (candles.length !== 1) {
      throw new Error(`Что-то пошло не так при получении текущей свечи: ${candles.length}`);
    }
    return candles[0];
  }

  private async loadCandles(figi: string, from: Date, to: Date) {
    const { candleInterval: interval } = this.options;
    const { candles } = await this.candlesLoader.getCandles({ figi, from, to, interval });
    this.candles.set(figi, candles);
    // todo: тут по хорошему нужно записать в загруженный диапазон не переданные from/to,
    // а даты вытащенные из candlesLoader, т.к. он загрузил гораздо больше
    this.candlesFromTo.set(figi, { from, to });
  }

  private getFilteredCandles(figi: string, from: Date, to: Date) {
    const candles = this.candles.get(figi) || [];
    return candles.filter(c => c.time! >= from && c.time! < to);
  }

  private assertFinalDateInThePast() {
    const todayMidnight = new OriginalDate();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    if (this.options.to > todayMidnight) {
      // т.к. candlesLoader не кеширует за сегодня
      throw new Error(`Бэктест на сегодняшних данных запустить нельзя (пока)`);
    }
  }

  private assertTickCalled() {
    if (this.ticks === 0) {
      throw new Error(`Для получения свечей нужно сначала вызвать tick()`);
    }
  }

  private assertSameInterval(interval: CandleInterval) {
    if (interval !== this.options.candleInterval) {
      throw new Error(`interval в запросе не совпадает с установленным для бэктеста`);
    }
  }
}

/**
 * Для бэктеста в CandlesLoader переопределяем debug,
 * чтобы можно было отличить сообщения от CandlesLoader в коед робота.
 */
class BacktestCandlesLoader extends CandlesLoader {
  protected debug = Debug('tinkoff-invest-api:backtest:candles-loader');
}

function buildMaxRange(range1: DateRange, range2?: DateRange): DateRange {
  const minFrom = !range2 || range1.from < range2.from ? range1.from : range2.from;
  const maxTo = !range2 || range1.to > range2.to ? range1.to : range2.to;
  return { from: minFrom, to: maxTo };
}

function intervalToMs(interval: CandleInterval) {
  switch (interval) {
    case CandleInterval.CANDLE_INTERVAL_1_MIN: return 60 * 1000;
    case CandleInterval.CANDLE_INTERVAL_5_MIN: return 5 * 60 * 1000;
    case CandleInterval.CANDLE_INTERVAL_15_MIN: return 15 * 60 * 1000;
    case CandleInterval.CANDLE_INTERVAL_HOUR: return 60 * 60 * 1000;
    case CandleInterval.CANDLE_INTERVAL_DAY: return 24 * 60 * 60 * 1000;
    default: throw new Error(`Invalid interval`);
  }
}
