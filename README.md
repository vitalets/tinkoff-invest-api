# tinkoff-invest-api
Node.js клиент для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

## Установка
```
npm i tinkoff-invest-api
```
> Примечание: библиотека поставляется в формате [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)

## Использование
```ts
import { TinkoffInvestApi } from 'tinkoff-invest-api';

// создать клиента с заданным токеном
const api = new TinkoffInvestApi({ token: '<your-token>' });

// Получить список счетов
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
Стрим реализуется с помощью `AsyncIterable`:
```ts
// подписка на свечи
const call = api.marketdataStream.marketDataStream(createRequest({
  subscribeCandlesRequest: {
    subscriptionAction: SubscriptionAction.SUBSCRIPTION_ACTION_SUBSCRIBE,
    instruments: [
      { figi: 'BBG004730N88', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
    ]
  },
}));

// обработка событий
for await (const event of call) {
  console.log('Stream event:', event);
}

// вспомогательная функция для создания запроса подписки
async function* createRequest(req: MarketDataRequest) {
  yield req;
  // бесконечный промис, чтобы запрос не завершался
  await new Promise(() => {});
}
```
Стрим еще хочется доработать.

### Универсальный счет
Для удобной работы со счетами в песочнице и в бою есть универсальный класс TinkoffAccount.

// tbd

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
