/**
 * Базовый класс обертки на bi-directional grpc stream.
 */
import { on, EventEmitter } from 'node:events';
import { TinkoffInvestApi } from '../api.js';

type EventMap<Res> = {
  data: (data: Res) => unknown,
  close: () => unknown,
  error: (e: Error) => unknown, // todo
}

export abstract class BaseStream<Req, Res> {
  connected = false;
  protected emitter = new EventEmitter();

  constructor(public api: TinkoffInvestApi) { }

  /**
   * Установить обработчик.
   */
  on<T extends keyof EventMap<Res>>(event: T, handler: EventMap<Res>[T]) {
    this.emitter.on(event, handler);
    return () => this.emitter.off(event, handler);
  }

  /**
   * Удалить обработчик.
   */
  off<T extends keyof EventMap<Res>>(event: T, handler: EventMap<Res>[T]) {
    this.emitter.off(event, handler);
  }

  /**
   * Отмена запроса.
   */
  cancel() {
    this.sendSubscriptionRequest(null);
    // todo: remove all listeners?
    // todo: make async and return promise
  }

  protected async *createRequestIterable() {
    const innerReq = on(this.emitter, 'request');
    // events.on эмитит данные в виде массива (https://nodejs.org/api/events.html#eventsonemitter-eventname-options)
    // поэтому трансформируем все вызовы в новый AsyncIterable, куда передается только первый аргумент
    for await (const data of innerReq) {
      const value = data[ 0 ];
      // Используем null как специальное значение, чтобы выйти из цикла и закрыть соединение
      if (value === null) break;
      yield value as Req;
    }
  }

  protected sendSubscriptionRequest(req: Req | null) {
    this.emitter.emit('request', req);
  }

  protected async loop(call: AsyncIterable<Res>) {
    this.connected = true;
    for await (const data of call) {
      this.emitter.emit('data', data);
    }
    // Если вышли из цикла, значит соединение разорвано
    this.connected = false;
    this.emitter.emit('close');
  }
}
