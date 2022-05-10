/**
 * Эмуляция marketdata.
 * See: https://tinkoff.github.io/investAPI/head-marketdata/
 */
import fs from 'fs';
import { Client } from 'nice-grpc';
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
  MarketDataRequest
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

  get curCandle() {
    return this.candles[this.curIndex];
  }

  addCandle() {
    if (this.curIndex >= this.candles.length - 1) return false;
    if (this.curIndex === -1) {
      this.curIndex = this.options.offset;
    } else {
      this.curIndex++;
    }
    return true;
  }

  async getCandles(_: GetCandlesRequest) {
    const candles = this.candles.slice(this.options.offset, this.curIndex + 1);
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
    this.candles = JSON.parse(fs.readFileSync(this.options.candles, 'utf8'));
  }
}

export class MarketDataStreamStub implements Client<typeof MarketDataStreamServiceDefinition> {
  constructor(private backtest: Backtest) { }

  async *marketDataStream(_: AsyncIterable<MarketDataRequest>) {
    yield {
      subscribeCandlesResponse: undefined,
      subscribeOrderBookResponse: undefined,
      subscribeTradesResponse: undefined,
      subscribeInfoResponse: undefined,
    };
  }
}
