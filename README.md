# tinkoff-invest-api
Node.js клиент для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

## Установка
```
npm i tinkoff-invest-api
```
> Примечание: библиотека поставляется в формате [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Использование
### Подключение
```ts
import { TinkoffInvestApi } from 'tinkoff-invest-api';

// создать клиента с заданным токеном
const api = new TinkoffInvestApi({ token: '<your-token>' });
```

### Unary-запросы
```ts
// получить список счетов
const { accounts } = await api.users.getAccounts({});

// получить портфель по id счета
const portfolio = await api.operations.getPortfolio({ accountId: accounts[0].id });

// получить 1-минутные свечи за последние 5 мин для акций Сбера
const { candles } = await api.marketdata.getCandles({
  figi: 'BBG004730N88',
  interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
  ...api.helpers.fromTo('-5m'),
});
```

### Стрим
Для работы со стримом сделана обертка `api.stream`:
```ts
// подписка на свечи
api.stream.watch({ candles: [
  { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
]});

// обработка событий
api.stream.on('data', data => console.log(data));

// закрыть соединение через 3 сек
setTimeout(() => api.stream.cancel(), 3000);
```
> Примечание: со стримом можно работать и напрямую через `api.marketdataStream`. Но там `AsyncIterable`, которые менее удобны кмк.

### Универсальный счет
Для бесшовной работы со счетами в бою и песочнице сделан универсальный интерфейс `TinkoffAccount`.

// tbd

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
