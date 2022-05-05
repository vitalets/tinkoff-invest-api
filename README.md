# tinkoff-invest-api
Node.js клиент для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

## Установка
```
npm i tinkoff-invest-api
```
> Примечание: библиотека поставляется в формате [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Пример использования
```ts
import { TinkoffInvestApi } from 'tinkoff-invest-api';

// создать клиента с заданным токеном
const api = new TinkoffInvestApi({ token: '<your-token>' });

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

#### Универсальный счет
Для удобной работы со счетами в песочнице и в бою есть универсальный класс TinkoffAccount.

// tbd

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
