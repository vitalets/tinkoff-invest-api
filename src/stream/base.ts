/**
 * Базовый класс обертки на bi-directional grpc stream.
 */
import { on, EventEmitter, once } from 'node:events';
import TypedEmitter from 'typed-emitter';
import { TinkoffInvestApi } from '../api.js';

type EventMap<Res> = {
  open: () => unknown,
  data: (data: Res) => unknown,
  close: (error?: Error) => unknown,
  error: (error: Error) => unknown,
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
   * Установлен ли обработчик.
   */
  hasListener<T extends keyof EventMap<Res>>(event: T, handler: InternalEventMap<Req, Res>[T]) {
    return this.emitter.listeners(event).includes(handler);
  }

  /**
   * Отмена запроса.
   */
  async cancel() {
    if (this.connected) {
      this.sendRequest(CLOSE_STREAM_VALUE);
      const [ error ] = await once(this.emitter, 'close');
      return error;
      // todo: remove all data listeners?
      // this.emitter.removeAllListeners('data');
    }
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

  protected sendRequest(req: Req | CloseReq) {
    this.emitter.emit('request', req);
  }

  protected async waitEvents(call: AsyncIterable<Res>) {
    this.connected = true;
    this.emitter.emit('open');
    let error: Error | undefined = undefined;
    try {
      for await (const data of call) {
        this.emitter.emit('data', data);
      }
    } catch (e) {
      error = e;
      this.emitter.emit('error', e);
    } finally {
      // Если вышли из цикла, значит соединение разорвано
      this.connected = false;
      this.emitter.emit('close', error);
    }
  }
}
