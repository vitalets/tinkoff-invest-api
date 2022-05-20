/**
 * Эмуляция marketdata.
 * See: https://tinkoff.github.io/investAPI/head-marketdata/
 */
import { Client } from 'nice-grpc';
import MockDate from 'mockdate';
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

// сохраняем оригинальный конструктор Date(), т.к. при бэктесте он подменяется.
const OriginalDate = Date;

export class MarketDataStub implements Client<typeof MarketDataServiceDefinition> {
  private candles: Map<string, HistoricCandle[]> = new Map();
  private candlesLoader: CandlesLoader;
  private ticks = 0;

  constructor(private backtest: Backtest) {
    this.assertFinalDateInThePast();
    const { cacheDir } = this.options;
    this.candlesLoader = new CandlesLoader(this.backtest.apiReal, { cacheDir });
  }

  private get options() {
    return this.backtest.options;
  }

  /**
   * Смещаем дату на интервал свечи.
   */
  tick() {
    const nextDate = this.ticks === 0
      ? this.options.from
      : new Date(Date.now() + intervalToMs(this.options.candleInterval));
    if (nextDate > this.options.to) {
      // возможно тут стоит сделать MockDate.reset()
      return false;
    } else {
      MockDate.set(nextDate);
      this.ticks++;
      return true;
    }
  }

  async getCandles({ figi, interval, from, to }: GetCandlesRequest) {
    if (this.ticks === 0) throw new Error(`Для получения свечей нужно сначала вызвать tick()`);
    this.ensureSameInterval(interval);
    if (!from || !to) throw new Error(`Нужно указать from и to`);
    if (this.isInsideLoadedCandles(figi, from, to)) {
      const candles = this.getFilteredCandles(figi, from, to);
      return { candles };
    }
    await this.loadCandles(figi, from, to);
    const candles = this.isInsideLoadedCandles(figi, from, to)
      ? this.getFilteredCandles(figi, from, to)
      : [];
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
    // отступаем от текущей даты, чтобы получить ровно одну свечу
    const now = Date.now();
    const from = new Date(now - offset * intervalMs);
    const to = new Date(from.valueOf() + intervalMs);
    const { candles } = await this.getCandles({ figi, interval, from, to });
    if (candles.length !== 1) throw new Error(`Что-то пошло не так при получении текущей свечи.`);
    return candles[0];
  }

  private async loadCandles(figi: string, from: Date, to: Date) {
    const { candleInterval: interval } = this.options;
    const { candles } = await this.candlesLoader.getCandles({ figi, from, to, interval });
    this.candles.set(figi, candles);
  }

  private getFilteredCandles(figi: string, from: Date, to: Date) {
    const candles = this.candles.get(figi) || [];
    return candles.filter(c => c.time! >= from && c.time! < to);
  }

  private isInsideLoadedCandles(figi: string, from: Date, to: Date) {
    const candles = this.candles.get(figi);
    if (!candles) return false;
    const firstCandle = candles[0];
    const [ lastCandle ] = candles.slice(-1);
    if (!firstCandle || !lastCandle) return false;
    const maxTo = lastCandle.time!.valueOf() + intervalToMs(this.options.candleInterval);
    return from >= firstCandle.time! && to.valueOf() <= maxTo;
  }

  private assertFinalDateInThePast() {
    const todayMidnight = new OriginalDate();
    todayMidnight.setUTCHours(0, 0, 0, 0);
    if (this.options.to >= todayMidnight) {
      // т.к. candlesLoader не кеширует за сегодня
      throw new Error(`Бэктест на сегодняшних данных запустить нельзя (пока)`);
    }
  }

  private ensureSameInterval(interval: CandleInterval) {
    if (interval !== this.options.candleInterval) {
      throw new Error(`interval в запросе не совпадает с установленным для бэктеста`);
    }
  }
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
