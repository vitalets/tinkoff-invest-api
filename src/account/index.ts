import { RealAccount } from './real.js';
import { SandboxAccount } from './sandbox.js';

/** Универсальный интерфейс счета в песочнице и боевого */
// Note: просто Account лучше не называть, т.к. он есть в сгенерированных файлах
export type TinkoffAccount = RealAccount | SandboxAccount;

export {
  RealAccount,
  SandboxAccount,
};
