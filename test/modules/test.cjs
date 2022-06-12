const { TinkoffInvestApi } = require('tinkoff-invest-api');
const { HistoricCandle } = require('tinkoff-invest-api/generated/marketdata');

new TinkoffInvestApi({ token: 'token' });

console.log('CJS: ok!');
