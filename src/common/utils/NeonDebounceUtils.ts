/**
 * Debounce utility used for debouncing user input. This has the benefit of also providing a global default which can
 * also be set to 0 for improving test code (no need to wait for input). The default debounce timeout is set to 300ms.
 */
export class NeonDebounceUtils {
  private static debounceTimeout = 300;

  /**
   * Set a global debounce timeout value. NOTE: Set this to 0 to disable debounce & receive all input events immediately.
   * This is useful for testing purposes.
   *
   * @param debounceTimeout {number} The debounce timeout in milliseconds.
   */
  public static setGlobalDebounceTimeout(debounceTimeout: number) {
    NeonDebounceUtils.debounceTimeout = debounceTimeout;
  }

  /**
   * Debounce a function, i.e. prevent triggering the function until a certain amount of time has passed without further
   * input.
   *
   * @param fn {(...args: any[]) => void} Function to debounce.
   * @param timeout Debounce timeout in milliseconds, uses the global setting by default.
   *
   * @returns {Function} Debounced function or in the case the timeout is set to 0 the original function parameter.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static debounce(fn: (...args: any[]) => void, timeout = NeonDebounceUtils.debounceTimeout) {
    let timer: number;

    if (timeout > 0) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (...args: any[]) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = window.setTimeout(() => fn(...args), timeout);
      };
    }

    return fn;
  }
}
