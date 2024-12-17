/**
 * Event bus used internally for component to component communication. All Neon messages are namespaced with the
 * <em>neon-</em> messagePrefix. Feel free to also use it in applications, just use a different namespace so as not to
 * clash with Neon's messages.
 */
export class NeonEventBus {
  public static messagePrefix = 'neon-';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static listeners: Record<string, Array<(...args: any[]) => void>> = {};

  /**
   * Start listening to event bus events.
   *
   * @param event {string} The event topic to listen for.
   * @param callback {(...args: any[]) => void} Callback to be triggered when an event is received.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static on(event: string, callback: (...args: any[]) => void) {
    if (!NeonEventBus.listeners[event]) {
      NeonEventBus.listeners[event] = [];
    }
    NeonEventBus.listeners[event].push(callback);
  }

  /**
   * Stop listening to event bus events.
   *
   * @param event {string} The event topic to listen for.
   * @param callback {(...args: any[]) => void} Callback to stop triggering.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static off(event: string, callback: (...args: any[]) => void) {
    NeonEventBus.listeners[event] = NeonEventBus.listeners[event].filter((fn) => fn !== callback);
  }

  /**
   * Emit an event bus event on a specific topic.
   *
   * @param event {string} The topic on which to send the event.
   * @param args {any[]} The event arguments to send.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static emit(event: string, ...args: any[]) {
    NeonEventBus.listeners[event]?.forEach((callbackFn) => callbackFn(...args));
  }
}
