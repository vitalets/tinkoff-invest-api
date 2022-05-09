export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// see: https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object
export type OptionalKeys<T> = { [K in keyof T]-?: Record<string, never> extends Pick<T, K> ? K : never }[keyof T];

// see: https://github.com/microsoft/TypeScript/issues/471
export type PublicOf<T> = {[P in keyof T]: T[P]}
