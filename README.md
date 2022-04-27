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

const api = new TinkoffInvestApi({ token: process.env.TINKOFF_API_TOKEN! });

const { accounts } = await api.users.getAccounts({});
const portfolio = await api.operations.getPortfolio({ accountId: accounts[0].id });

// ...

```

## Лицензия
MIT @ [Vitaliy Potapov](https://github.com/vitalets)
