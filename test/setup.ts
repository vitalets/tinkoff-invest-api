import 'dotenv/config';
import assert from 'assert';
import { TinkoffInvestApi } from '../src/index.js';

const api = new TinkoffInvestApi({ token: process.env.TINKOFF_API_TOKEN! });

type Assert = typeof assert.strict;

declare global {
  const assert: Assert;
  const api: TinkoffInvestApi;
}

Object.assign(global, {
  assert: assert.strict,
  api,
});
