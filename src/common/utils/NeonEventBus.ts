/**
 * Event bus used internally for component to component communication. All Neon messages are namespaced with the
 * messagePrefix below. Feel free to also use it in your applications, just use your own namespace so as not to clash
 * with Neon's messages.
 */
export class NeonEventBus {
  public static messagePrefix = 'neon-';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static listeners: Record<string, Array<(...args: any[]) => void>> = {};

  /**
   * Listen to event bus events
   * @param event {string}
   * @param callback {(...args: any[]) => void}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static on(event: string, callback: (...args: any[]) => void) {
    if (!NeonEventBus.listeners[event]) {
      NeonEventBus.listeners[event] = [];
    }
    NeonEventBus.listeners[event].push(callback);
  }

  /**
   * Stop listening to event bus events
   * @param event {string}
   * @param callback {(...args: any[]) => void}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static off(event: string, callback: (...args: any[]) => void) {
    NeonEventBus.listeners[event] = NeonEventBus.listeners[event].filter((fn) => fn !== callback);
  }

  /**
   * Emit event bus events
   * @param event {string}
   * @param args {any[]}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static emit(event: string, ...args: any[]) {
    NeonEventBus.listeners[event]?.forEach((callbackFn) => callbackFn(...args));
  }
}
