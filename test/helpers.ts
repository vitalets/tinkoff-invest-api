export function omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => !keys.includes(key as K))
  ) as Omit<T, K>;
}

export function omits<T extends object, K extends keyof T>(items: T[], keys: K[]): Omit<T, K>[] {
  return items.map((item) => omit(item, keys));
}
