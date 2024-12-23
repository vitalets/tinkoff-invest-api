# tinkoff-invest-api
Node.js SDK для работы с [Tinkoff Invest API](https://tinkoff.github.io/investAPI/).

<!-- toc -->

- [Установка](#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0)
- [Использование](#%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
  * [Подключение](#%D0%BF%D0%BE%D0%B4%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5)
  * [Unary-запросы](#unary-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B)
  * [Стримы](#%D1%81%D1%82%D1%80%D0%B8%D0%BC%D1%8B)
  * [Универсальный счет](#%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D1%87%D0%B5%D1%82)
  * [Кеширование свечей](#%D0%BA%D0%B5%D1%88%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%81%D0%B2%D0%B5%D1%87%D0%B5%D0%B9)
  * [Хелперы](#%D1%85%D0%B5%D0%BB%D0%BF%D0%B5%D1%80%D1%8B)
- [Отладка](#%D0%BE%D1%82%D0%BB%D0%B0%D0%B4%D0%BA%D0%B0)
- [История изменений](#%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9)
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
import { PortfolioRequest_CurrencyRequest } from 'tinkoff-invest-api/dist/generated/operations.js';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata.js';

// получить список счетов
const { accounts } = await api.users.getAccounts({});

// получить портфель по id счета
const portfolio = await api.operations.getPortfolio({
  accountId: accounts[0].id,
  currency: PortfolioRequest_CurrencyRequest.RUB
});

// получить 1-минутные свечи за последние 5 мин для акций Тинкофф Групп
const { candles } = await api.marketdata.getCandles({
  figi: 'BBG00QPYJ5H0',
  instrumentId: 'BBG00QPYJ5H0',
  interval: CandleInterval.CANDLE_INTERVAL_1_MIN,
  ...api.helpers.fromTo('-5m'), // <- удобный хелпер для получения { from, to }
});
```

### Стримы
Для работы со стримом сделана обертка `api.stream`:
```ts
import { SubscriptionInterval } from 'tinkoff-invest-api/dist/generated/marketdata.js';

// подписка на свечи
const unsubscribe = await api.stream.market.candles({
  instruments: [
    {
      figi: 'BBG00QPYJ5H0',
      instrumentId: 'BBG00QPYJ5H0',
      interval: SubscriptionInterval.SUBSCRIPTION_INTERVAL_ONE_MINUTE
    }
  ],
  waitingClose: false,
}, candle => console.log(candle));

// отписаться
await unsubscribe();

// обработка дополнительных событий
api.stream.market.on('error', error => console.log('stream error', error));
api.stream.market.on('close', error => console.log('stream closed, reason:', error));

// получить список текущих подписок
const data = await api.stream.market.getMySubscriptions();

// закрыть соединение
await api.stream.market.cancel();
```
> Примечание: со стримом можно работать и напрямую через `api.marketdataStream`. Но там `AsyncIterable`, которые менее удобны (имхо)

По умолчанию стрим автоматически переподключается при потере соединения ([#4](https://github.com/vitalets/tinkoff-invest-api/issues/4)). Чтобы это отключить, установите `api.stream.market.options.autoReconnect = false`.

Стримы доступны по следующим сущностям:
* `.candles(request, handler)`
* `.trades(request, handler)`
* `.orderBook(request, handler)`
* `.lastPrice(request, handler)`
* `.info(request, handler)`

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
Кеширование свечей позволяет сократить кол-во запросов к API, а также удобно получать нужное кол-во свечей за любой период времени (в исходном API есть ограничения на диапазоны дат запроса). Для загрузки свечей с учетом кеша используется класс `CandlesLoader`:
```ts
import { TinkoffInvestApi, CandlesLoader } from 'tinkoff-invest-api';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata.js';

const api = new TinkoffInvestApi({ token: '<your-token>' });

// создать инстанс загрузчика свечей
const candlesLoader = new CandlesLoader(api, { cacheDir: '.cache' });

// загрузить минимум 100 последних свечей (в понедельник будут использованы данные пятницы, итп)
const { candles } = await candlesLoader.getCandles({
  figi: 'BBG004730N88',
  instrumentId: 'BBG004730N88',
  interval: CandleInterval.CANDLE_INTERVAL_15_MIN,
  minCount: 100, // <- этот параметр позволяет задать кол-во свечей в результате
});
```

<details>
<summary>Для кеширования `CandlesLoader` создает на файловой системе следующую структуру:</summary>

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
 * Переводит число в Quotation.
 * Пример: 123.4 -> { units: 123, nano: 400000000 }
 */
Helpers.toQuotation(value: number): Quotation;

/**
 * Переводит число в MoneyValue.
 * Пример: (123.4, 'rub') -> { units: 123, nano: 400000000, currency: 'rub' }
 */
Helpers.toMoneyValue(value: number, currency: string): MoneyValue;

/**
 * Переводит MoneyValue в строку.
 * Пример: { units: 123, nano: 400000000, currency: 'rub' } -> '123.4 rub'
 */
Helpers.toMoneyString(value: MoneyValue | undefined): string;

/**
 * Переводит Quotation или MoneyValue в число.
 * Пример: { units: 123, nano: 400000000 } -> 123.4
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

## История изменений

#### 7.0.1
* Исправлена опечатка при получении лимитов ([#14](https://github.com/vitalets/tinkoff-invest-api/issues/14), [#26](https://github.com/vitalets/tinkoff-invest-api/pull/26), [@devoln](https://github.com/devoln))

#### 7.0.0
* Обновление версии протокола до 1.24 ([#24](https://github.com/vitalets/tinkoff-invest-api/issues/24), [@Jokky](https://github.com/Jokky))

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
