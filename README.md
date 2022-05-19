# tinkoff-invest-api
Node.js клиент для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

<!-- toc -->

- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
  * [Подключение](#%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
  * [Unary-запросы](#unary-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B)
  * [Стрим](#%D1%81%D1%82%D1%80%D0%B8%D0%BC)
  * [Универсальный счет](#%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D1%87%D0%B5%D1%82)
  * [Кеширование свечей](#%D0%BA%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%B5%D1%87%D0%B5%D0%B9)
  * [Бэктест](#%D0%B1%D1%8D%D0%BA%D1%82%D0%B5%D1%81%D1%82)
- [Лицензия](#%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F)

<!-- tocstop -->

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

// получить 1-минутные свечи за последние 5 мин для акций Тинкофф Групп
const { candles } = await api.marketdata.getCandles({
  figi: 'BBG00QPYJ5H0',
  interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
  ...api.helpers.fromTo('-5m'),
});
```

### Стрим
Для работы со стримом сделана обертка `api.stream`:
```ts
// подписка на свечи
api.stream.market.watch({ candles: [
  { figi: 'BBG00QPYJ5H0', interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE }
]});

// обработка событий
api.stream.market.on('data', data => console.log(data));

// закрыть соединение через 3 сек
setTimeout(() => api.stream.market.cancel(), 3000);
```
> Примечание: со стримом можно работать и напрямую через `api.marketdataStream`. Но там `AsyncIterable`, которые менее удобны кмк.

### Универсальный счет
Для бесшовной работы со счетами в бою и песочнице сделан универсальный интерфейс `TinkoffAccount`.

```ts
import { TinkoffAccount, RealAccount, SandboxAccount } from 'tinkoff-invest-api';
import { OrderDirection, OrderType } from 'tinkoff-invest-api/dist/generated/orders.js';

// создать экземпляр счета: боевого или в песочнице
const account: TinkoffAccount = process.env.USE_REAL_ACCOUNT
    ? new RealAccount(api, '<real-account-id>')
    : new SandboxAccount(api, '<sandbox-account-id>');

// получить портфель
const protfolio = await account.getPortfolio();

// получить список заявок
const { orders } = await account.getOrders();

// создать лимит-заявку на покупку 1 лота по цене 100
const order = await account.postOrder({
  figi: 'BBG00QPYJ5H0',
  quantity: 1,
  price: api.helpers.toQuotation(100),
  direction: OrderDirection.ORDER_DIRECTION_BUY,
  orderType: OrderType.ORDER_TYPE_LIMIT,
  orderId: '<random-id>',
});
```

### Кеширование свечей
Кеширование свечей позволяет сократить кол-во запросов к API, а также более удобно получать необходимые свечи за любой период времени. Для загрузки свечей с учетом кеша используется класс `CandlesLoader`:
```ts
import { TinkoffInvestApi, CandlesLoader } from 'tinkoff-invest-api';

const api = new TinkoffInvestApi({ token: '<your-token>' });

// создать инстанс загрузчика свечей
const candlesLoader = new CandlesLoader(api, { cacheDir: '.candles' });

// загрузить минимум 100 последних свечей (в понедельник будут использованы данные пятницы, итп)
const { candles } = await candlesLoader.getCandles({
  figi: 'BBG004730N88',
  interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
  minCount: 100,
});
```

### Бэктест
Модуль для бэктеста позволяет быстро протестировать  робота на исторических данных.

Работает все так:

1. вы указываете в конфиге диапазон дат и интервал свечей для бэктеста
2. на базе конфига класс `Backtest` создает замоканное Tinkoff API, которое вы прокидываете роботу
3. при старте происходит автоматическая загрузка данных, если их нет в кеше
4. в цикле вызывается `backtest.tick()`, который последовательно подменяет текущую дату и подставляет в API нужные свечи. Между тиками нужно вызвать код робота
5. на каждом тике происходит полная имитация работы API с биржей:
   * прием и исполнение заявок (лимитных и рыночных)
   * блокировка средств
   * списание комиссий
   * обновление позиций в портфеле
   * ведение списка операций

Пример:
```ts
import { Backtest, Helpers } from 'tinkoff-invest-api';

// Создать инстанс бэктеста на заданном диапазоне дат и интервале свечей.
const backtest = new Backtest({
  token: '<your-token>',
  from: new Date('2022-04-29T10:00:00+03:00'),
  to: new Date('2022-04-30T19:00:00+03:00'),
  candleInterval: CandleInterval.CANDLE_INTERVAL_5_MIN,
});

main();

async function main() {
  // Цикл по всем свечам с 2022-04-29 10:00
  while (await backtest.tick()) {
    // запуск вашего робота на замоканном API: runRobot({ api: backtest.api });
  }
  // Рассчитываем прибыль
  const { expectedYield } = await backtest.api.operations.getPortfolio({ accountId: '' });
  console.log(`Прибыль: ${Helpers.toNumber(expectedYield)}%`);
}
```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
