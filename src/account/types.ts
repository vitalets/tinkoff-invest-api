import { RealAccount } from './real.js';

export type OmitAccount<T> = Omit<T, 'accountId'>;
export type CommonAccountMethods = Pick<RealAccount,
'accountId'
| 'api'
| 'isSandbox'
| 'getInfo'
| 'getPortfolio'
| 'getOperations'
| 'getPositions'
| 'getOrders'
| 'getOrderState'
| 'postOrder'
| 'cancelOrder'
>;
