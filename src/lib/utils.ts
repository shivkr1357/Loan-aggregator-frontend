/**
 * Debounce a function. Executes after `ms` ms of no further calls.
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      fn.apply(this, args);
    }, ms);
  };
}

