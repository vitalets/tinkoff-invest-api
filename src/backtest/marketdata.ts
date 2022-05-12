/**
 * Эмуляция marketdata.
 * See: https://tinkoff.github.io/investAPI/head-marketdata/
 */
import fs from 'fs';
import { on, EventEmitter } from 'node:events';
import { Client } from 'nice-grpc';
import fg from 'fast-glob';
import { SecurityTradingStatus } from '../generated/common.js';
import {
  MarketDataServiceDefinition,
  MarketDataStreamServiceDefinition,
  GetCandlesRequest,
  HistoricCandle,
  GetLastPricesRequest,
  GetOrderBookRequest,
  GetTradingStatusRequest,
  LastPrice,
  Order,
  GetLastTradesRequest,
  Trade,
  MarketDataRequest,
  MarketDataResponse
} from '../generated/marketdata.js';
import { Helpers } from '../helpers.js';
import { Backtest } from './index.js';

export class MarketDataStub implements Client<typeof MarketDataServiceDefinition> {
  candles: HistoricCandle[] = [];
  curIndex = -1;

  constructor(private backtest: Backtest) {
    this.loadCandles();
  }

  private get options() {
    return this.backtest.options;
  }

  get currentCandle() {
    return this.candles[this.curIndex];
  }

  getTime() {
    return new Date(this.currentCandle.time!);
  }

  addCandle() {
    if (this.curIndex >= this.candles.length - 1) return false;
    if (this.curIndex === -1) {
      this.curIndex = this.options.initialCandleIndex;
    } else {
      this.curIndex++;
    }
    return true;
  }

  async getCandles(_: GetCandlesRequest) {
    const candles = this.candles.slice(this.options.initialCandleIndex, this.curIndex + 1);
    return { candles };
  }

  async getLastPrices(_: GetLastPricesRequest) {
    const lastPrices: LastPrice[] = [];
    return { lastPrices };
  }

  async getOrderBook({ figi, depth }: GetOrderBookRequest) {
    const bids: Order[] = [];
    const asks: Order[] = [];
    return {
      figi,
      depth,
      bids,
      asks,
      lastPrice: Helpers.toQuotation(0),
      closePrice: Helpers.toQuotation(0),
      limitUp: Helpers.toQuotation(0),
      limitDown: Helpers.toQuotation(0),
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
    const trades: Trade[] = [];
    return { trades };
  }

  private loadCandles() {
    const files = fg.sync(this.options.candles);
    this.candles = [];
    files.forEach(file => {
      const fileCandles = JSON.parse(fs.readFileSync(file, 'utf8')) as HistoricCandle[];
      this.candles.push(...fileCandles);
    });
    this.candles.forEach(candle => candle.time = new Date(candle.time!));
    this.candles.sort((a, b) => a.time!.valueOf() - b.time!.valueOf());
  }
}

export class MarketDataStreamStub implements Client<typeof MarketDataStreamServiceDefinition> {
  protected emitter = new EventEmitter();
  constructor(private backtest: Backtest) { }

  async *marketDataStream(_: AsyncIterable<MarketDataRequest>) {
    // todo: emit first event right after request?
    const innerReq = on(this.emitter, 'data');
    for await (const data of innerReq) {
      yield data[0] as MarketDataResponse;
    }
  }

  emit(data: MarketDataResponse) {
    this.emitter.emit('data', data);
  }
}
