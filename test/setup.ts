import 'dotenv/config';
import assert from 'assert';
import { TinkoffInvestApi } from '../src/index.js';

const testApi = new TinkoffInvestApi({ token: process.env.TINKOFF_API_TOKEN! });

type Assert = typeof assert.strict;

declare global {
  const assert: Assert;
  const testApi: TinkoffInvestApi;
}

Object.assign(global, {
  assert: assert.strict,
  testApi,
});
