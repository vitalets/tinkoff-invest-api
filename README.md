# tinkoff-invest-api
Node.js SDK для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

<!-- toc -->

- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
  * [Подключение](#%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
  * [Unary-запросы](#unary-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B)
  * [Стрим](#%D1%81%D1%82%D1%80%D0%B8%D0%BC)
  * [Универсальный счет](#%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D1%87%D0%B5%D1%82)
  * [Кеширование свечей](#%D0%BA%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%B5%D1%87%D0%B5%D0%B9)
  * [Хелперы](#%D1%85%D0%B5%D0%BB%D0%BF%D0%B5%D1%80%D1%8B)
- [Отладка](#%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0)
- [Лицензия](#%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F)

<!-- tocstop -->

## Установка
```
npm i tinkoff-invest-api
```

## Использование
### Подключение
```ts
import { TinkoffInvestApi } from 'tinkoff-invest-api';

// создать клиента с заданным токеном доступа
const api = new TinkoffInvestApi({ token: '<your-token>' });
```
Как получить токен доступа описано [тут](https://tinkoff.github.io/investAPI/token/).

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
  ...api.helpers.fromTo('-5m'), // <- удобный хелпер для получения { from, to }
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
api.stream.market.on('data', data => console.log('stream data', data));
api.stream.market.on('error', error => console.log('stream error', error));
api.stream.market.on('close', error => console.log('stream closed, reason:', error));

// закрыть соединение через 3 сек
setTimeout(() => api.stream.market.cancel(), 3000);
```
> Примечание: со стримом можно работать и напрямую через `api.marketdataStream`. Но там `AsyncIterable`, которые менее удобны (имхо)

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

Все методы универсального счета можно посмотреть [тут](https://github.com/vitalets/tinkoff-invest-api/blob/main/src/account/real.ts).

### Кеширование свечей
Кеширование свечей позволяет сократить кол-во запросов к API, а также более удобно получать необходимые свечи за любой период времени. Для загрузки свечей с учетом кеша используется класс `CandlesLoader`:
```ts
import { TinkoffInvestApi, CandlesLoader } from 'tinkoff-invest-api';

const api = new TinkoffInvestApi({ token: '<your-token>' });

// создать инстанс загрузчика свечей
const candlesLoader = new CandlesLoader(api, { cacheDir: '.cache' });

// загрузить минимум 100 последних свечей (в понедельник будут использованы данные пятницы, итп)
const { candles } = await candlesLoader.getCandles({
  figi: 'BBG004730N88',
  interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
  minCount: 100, // <- этот параметр позволяет задать кол-во свечей в результате
});
```

<details>
<summary>Для кеширования `CandlesLoader` создает следующую структуру файлов со свечами:</summary>

```
.cache
  candles
    <figi>
      1_min
        2022-05-01.json
        2022-05-02.json
      5_min
        2022-05-01.json
        2022-05-02.json
      15_min
        2022-05-01.json
        2022-05-02.json
      hour
        2022-05-01.json
        2022-05-02.json
      day
        2020.json
        2021.json
        2022.json
```
</details>

### Хелперы
Для более удобной работы есть несколько хелперов:
```ts
import { Helpers } from 'tinkoff-invest-api';

/**
 * Переводит число в Quotation { units, nano }
 */
Helpers.toQuotation(value: number): Quotation;

/**
 * Переводит число в MoneyValue { units, nano, currency }
 */
Helpers.toMoneyValue(value: number, currency: string): MoneyValue;

/**
 * Переводит MoneyValue в строку
 */
Helpers.toMoneyString(value: MoneyValue | undefined): string;

/**
 * Переводит Quotation или MoneyValue в число
 */
Helpers.toNumber(value: Quotation | MoneyValue): number;

/**
 * Возвращает интервал времени в формате { from, to } по заданному смещению и базовой дате.
 * Для смещения можно использовать кол-во миллисекунд или строку в формате из https://github.com/vercel/ms.
 * Пример: получить { from, to } за последние 5 минут -> fromTo('-5m')
 */
Helpers.fromTo(offset: string | number, base?: Date): { from: Date; to: Date; };

/**
 * Переводит значения констант в человеко-читаемые строки.
 * Например: CandleInterval.CANDLE_INTERVAL_1_MIN -> '1_MIN'
 */
Helpers.toHuman<T extends Enums>(value: T, values: getEnumType<T>): string;
```

## Отладка
Для отладки используется модуль [debug](https://github.com/debug-js/debug).
Чтобы вывести отладочную информацию, нужно указать переменную окружения `DEBUG`:

```
DEBUG=tinkoff-invest-api:* node robot.js
```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
