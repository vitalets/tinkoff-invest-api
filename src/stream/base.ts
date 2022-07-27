/**
 * Базовый класс обертки на bi-directional grpc stream.
 */
import { on, EventEmitter } from 'node:events';
import TypedEmitter from 'typed-emitter';
import { TinkoffInvestApi } from '../api.js';

type EventMap<Res> = {
  data: (data: Res) => unknown,
  close: (reason?: Error) => unknown,
  error: (e: Error) => unknown,
}

type InternalEventMap<Req, Res> = EventMap<Res> & {
  request: (req: Req | CloseReq) => unknown
};

// Используем null как специальное значение, чтобы выйти из цикла в async итераторе и закрыть соединение
const CLOSE_STREAM_VALUE = null;
type CloseReq = typeof CLOSE_STREAM_VALUE;

export abstract class BaseStream<Req, Res> {
  connected = false;
  protected emitter = new EventEmitter() as TypedEmitter<InternalEventMap<Req, Res>>;

  constructor(public api: TinkoffInvestApi) { }

  /**
   * Установить обработчик.
   */
  on<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]) {
    this.emitter.on(event, handler);
    return () => this.emitter.off(event, handler);
  }

  /**
   * Удалить обработчик.
   */
  off<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]) {
    this.emitter.off(event, handler);
  }

  /**
   * Отмена запроса.
   */
  cancel() {
    this.sendSubscriptionRequest(CLOSE_STREAM_VALUE);
    // todo: remove all listeners?
    // todo: make async and return promise
  }

  protected async *createRequestIterable() {
    const innerReq = on(this.emitter, 'request');
    // events.on эмитит данные в виде массива (https://nodejs.org/api/events.html#eventsonemitter-eventname-options)
    // поэтому трансформируем все вызовы в новый AsyncIterable, куда передается только первый аргумент
    for await (const data of innerReq) {
      const value = data[ 0 ];
      if (value === CLOSE_STREAM_VALUE) break;
      yield value as Req;
    }
  }

  protected sendSubscriptionRequest(req: Req | CloseReq) {
    this.emitter.emit('request', req);
  }

  protected async loop(call: AsyncIterable<Res>) {
    this.connected = true;
    let reason: Error | undefined = undefined;
    try {
      for await (const data of call) {
        this.emitter.emit('data', data);
      }
    } catch (e) {
      reason = e;
      this.emitter.emit('error', e);
    } finally {
      // Если вышли из цикла, значит соединение разорвано
      this.connected = false;
      this.emitter.emit('close', reason);
    }
  }
}
