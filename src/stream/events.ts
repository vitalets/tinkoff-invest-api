export const enum StreamEvents {
  data = 'data',
  close = 'close',
  error = 'error',
  restore = 'restore',
}

export type EventMap<Res> = {
  [StreamEvents.data]: (data: Res) => unknown,
  [StreamEvents.close]: () => unknown,
  [StreamEvents.error]: (e: Error) => unknown, // todo
  [StreamEvents.restore]: () => unknown, // todo
}
