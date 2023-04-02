export class NeonDebounceUtils {
  private static debounceTimeout = 300;

  public static setGlobalDebounceTimeout(debounceTimeout: number) {
    NeonDebounceUtils.debounceTimeout = debounceTimeout;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static debounce(fn: (...args: any[]) => void, timeout = NeonDebounceUtils.debounceTimeout) {
    let timer: NodeJS.Timer;

    if (NeonDebounceUtils.debounceTimeout > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (...args: any[]) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => fn(...args), timeout);
      };
    }

    return fn;
  }
}
