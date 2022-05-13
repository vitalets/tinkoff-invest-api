/**
 * Текущие счета и позиции.
 * npx ts-node-esm scripts/show-accounts.ts
 */
import 'dotenv/config';
import { RealAccount, SandboxAccount, TinkoffAccount, TinkoffInvestApi } from '../src/index.js';
import { Operation, OperationState, PortfolioPosition, PortfolioResponse } from '../src/generated/operations.js';
import { Account } from '../src/generated/users.js';
import { OrderDirection, OrderExecutionReportStatus, OrderState } from '../src/generated/orders.js';

const api = new TinkoffInvestApi({ token: process.env.TINKOFF_API_TOKEN! });
const OPERATIONS_PERIOD = '-1y';

main();

async function main() {
  const realAccounts = await api.users.getAccounts({});
  const sandboxAccounts = await api.sandbox.getSandboxAccounts({});
  const accounts = [ ...realAccounts.accounts, ...sandboxAccounts.accounts ];
  for (const account of accounts) await showAccount(account);
}

async function showAccount(a: Account) {
  const isReal = Boolean(a.name);
  const account = isReal ? new RealAccount(api, a.id) : new SandboxAccount(api, a.id);
  const portfolio = await account.getPortfolio();
  showAccountHeader(account, portfolio);
  const { orders } = await account.getOrders();
  for (const order of orders) showOrder(order);
  for (const position of portfolio.positions) {
    showPosition(position);
    await showOperations(account, position);
  }
}

function showAccountHeader(account: TinkoffAccount, p: PortfolioResponse) {
  const s = [
    account.accountId,
    api.helpers.toMoneyString(p.totalAmountCurrencies),
    p.expectedYield && `(${api.helpers.toNumber(p.expectedYield)}%)`,
  ].join(' ');
  console.log(s);
}

function showPosition(p: PortfolioPosition) {
  const currency = p.averagePositionPrice?.currency || '';
  const s = [
    ' '.repeat(4),
    p.figi,
    `(${p.instrumentType}, ${api.helpers.toNumber(p.quantity)})`,
    `${api.helpers.toNumber(p.averagePositionPrice)} -> ${api.helpers.toNumber(p.currentPrice)}`,
    `(${api.helpers.toNumber(p.expectedYield)} ${currency})`,
  ].join(' ');
  console.log(s);
}

function showOrder(order: OrderState) {
  const s = [
    `${' '.repeat(4)}*`,
    OrderDirection[order.direction].replace('ORDER_DIRECTION_', ''),
    order.figi,
    OrderExecutionReportStatus[order.executionReportStatus].replace('EXECUTION_REPORT_', ''),
    `${order.lotsRequested} lot(s) x`,
    `${api.helpers.toMoneyString(order.initialSecurityPrice)} =`,
    `${api.helpers.toMoneyString(order.initialOrderPrice)},`,
    `(fee ${api.helpers.toMoneyString(order.initialCommission)}),`,
    order.orderId,
  ].join(' ');
  console.log(s);
}

async function showOperations(account: RealAccount | SandboxAccount, { figi }: PortfolioPosition) {
  const { operations } = await account.getOperations({
    figi,
    state: OperationState.OPERATION_STATE_EXECUTED,
    ...api.helpers.fromTo(OPERATIONS_PERIOD)
  });
  // console.log(JSON.stringify(operations, null, 2))
  operations.forEach(o => {
    const s = [
      ' '.repeat(8),
      o.date?.toLocaleString(),
      o.type,
      o.quantity > 0 && `(${o.quantity})`,
      `${api.helpers.toNumber(o.payment)} ${o.payment?.currency}`,
      getFeePercent(o, operations),
    ].filter(Boolean).join(' ');
    console.log(s);
  });
}

function getFeePercent({ parentOperationId, payment }: Operation, operations: Operation[]) {
  const parentOperation = parentOperationId ? operations.find(o => o.id === parentOperationId) : null;
  if (parentOperation) {
    const parentPayment = api.helpers.toNumber(parentOperation.payment)!;
    const ownPayment = api.helpers.toNumber(payment)!;
    const percent = 100 * ownPayment / parentPayment;
    return `(${percent.toFixed(2)}%)`;
  }
}
