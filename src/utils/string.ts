export function capitalize<T extends string>(s: T) {
  return s.charAt(0).toUpperCase() + s.slice(1) as Capitalize<T>;
}
