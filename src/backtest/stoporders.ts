/**
 * Эмуляция stoporders (пока заглушка).
 */
import { Client } from 'nice-grpc';
import {
  StopOrdersServiceDefinition
} from '../generated/stoporders.js';
import { Backtest } from './index.js';

type StopOrdersStubType = Omit<Client<typeof StopOrdersServiceDefinition>,
  'postStopOrder'
  | 'getStopOrders'
  | 'cancelStopOrder'
>

export class StopOrdersStub implements StopOrdersStubType {
  constructor(private backtest: Backtest) { }
}
