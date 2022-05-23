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
import { CandlesReq, CandlesReqParams } from '../candles-loader/req.js';

const debug = Debug('tinkoff-invest-api:backtest:marketdata');
const candlesLoaderDebug = Debug('tinkoff-invest-api:backtest:candles-loader');

// сохраняем оригинальный конструктор Date(), т.к. при бэктесте он подменяется.
const OriginalDate = Date;

type DateRange = { from: Date, to: Date };

export class MarketDataStub implements Client<typeof MarketDataServiceDefinition> {
  private candles: Map<string, HistoricCandle[]> = new Map();
  private candlesFromTo: Map<string, DateRange> = new Map();

  private ticks = 0;

  constructor(private backtest: Backtest) {
    this.assertFinalDateInThePast();
  }

  private get options() {
    return this.backtest.options;
  }

  private get interval() {
    return this.options.candleInterval;
  }

  /**
   * Смещаем дату на интервал свечи.
   */
  tick() {
    const nextDate = this.ticks === 0
      // добавляем к стартовой дате 1 мс. Это дает более ожидаемый результат:
      // текущей свечей будет именно свеча за сегодняшнюю дату
      ? new Date(this.options.from.valueOf() + 1)
      : new Date(Date.now() + intervalToMs(this.interval));
    if (nextDate < this.options.to) {
      MockDate.set(nextDate);
      debug(`Установлена дата: ${nextDate.toISOString()}`);
      this.ticks++;
      return true;
    } else {
      debug(`Достигнута конечная дата: ${nextDate.toISOString()}`);
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
    const newRange = this.getNewRange(figi, from, to);
    if (newRange) {
      await this.reloadCandles({ figi, ...newRange });
    } else {
      debug('Все запрошенные свечи есть в memory-кеше');
    }
    const candles = this.getFilteredCandles(figi, from, to);
    return { candles };
  }

  async getLastPrices(req: GetLastPricesRequest) {
    const currentCandles = await Promise.all(req.figi.map(figi => this.getCurrentCandle(figi)));
    const lastPrices = currentCandles.map((candle, index) => {
      return {
        figi: req.figi[index],
        price: candle.close,
        time: candle.time,
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
    return this.getCandle(figi, 0);
  }

  /**
   * Получить свечу по смещению от текущего момента.
   * offset = 0: текущая свеча
   * offset = -1: предыдущая свеча
   * Если торги не идут, вернется последняя закрытая свеча.
   */
  async getCandle(figi: string, offset: number) {
    // Пока сделано максимально просто, без использования memory-кеша:
    // на каждый запрос идет считывание файлов, а результат также не записывается в memory-кеш.
    // По хорошему нужно сначала посмотреть в memory-кеш, и попробовать взять оттуда (учесть пустоты!).
    // А если пришлось грузить из файлов, то результат подмерджить в memory-кеш
    // (учесть что новых свечей может быть меньше чем уже загруженных)
    const minCount = Math.abs(offset - 1);
    const candlesReq = new CandlesReq(
      this.backtest.apiReal,
      this.options,
      { figi, minCount, interval: this.interval },
      candlesLoaderDebug
    );
    const candles = await candlesReq.getCandles();
    const candle = candles.slice(-minCount)[0];
    if (!candle) throw new Error(`Что-то пошло не так при получении текущей свечи`);
    return candle;
    // const intervalMs = intervalToMs(this.interval);
    // const to = new Date(Date.now() + offset * intervalMs);
    // отступаем от текущей даты, чтобы получить ровно одну свечу
    // const from = new Date(to.valueOf() - intervalMs);
  }

  private async reloadCandles(params: Omit<CandlesReqParams, 'interval'>) {
    const candlesReq = new BacktestCandlesReq(
      this.backtest.apiReal,
      this.options,
      { ...params, interval: this.interval },
      candlesLoaderDebug
    );
    const candles = await candlesReq.getCandles();
    this.candles.set(params.figi, candles);
    this.candlesFromTo.set(params.figi, candlesReq.getTotalRange());
  }

  private getFilteredCandles(figi: string, from: Date, to: Date) {
    const candles = this.candles.get(figi) || [];
    return candles.filter(c => c.time! >= from && c.time! < to);
  }

  private getNewRange(figi: string, from: Date, to: Date) {
    const loadedRange = this.candlesFromTo.get(figi);
    if (!loadedRange) return { from, to };
    if (from < loadedRange.from || to > loadedRange.to) {
      return {
        from: from < loadedRange.from ? from : loadedRange.from,
        to: to > loadedRange.to ? to : loadedRange.to,
      };
    }
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

class BacktestCandlesReq extends CandlesReq {
  protected filterCandlesBy(_: 'from' | 'to') {
    // noop: отключаем фильтрацию, чтобы вернуть максимум загруженных свечей.
    // А отфильтруем на уровне marketdata
  }

  getTotalRange() {
    return this.dateIterator.getTotalRange();
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
