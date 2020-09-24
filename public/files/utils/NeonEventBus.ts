import Vue from 'vue';

/**
 * Event bus used internally for component to component communication. All Neon messages are namespaced with the
 * messagePrefix below. Feel free to also use it in your applications, just use your own namespace so as not to clash
 * with Neon's messages.
 */
export class NeonEventBus extends Vue {
  public static messagePrefix = 'neon-';

  private static _bus = new Vue();

  /**
   * Listen to event bus events
   * @param event {string | string[]}
   * @param callback {Function}
   */
  public static on(event: string | string[], callback: Function) {
    return NeonEventBus._bus.$on(event, callback);
  }

  /**
   * Stop listening to event bus events
   * @param event {string | string[] | undefined}
   * @param callback {Function | undefined}
   */
  public static off(event?: string | string[] | undefined, callback?: Function | undefined) {
    return NeonEventBus._bus.$off(event, callback);
  }

  /**
   * Emit event bus events
   * @param event {string}
   * @param args {any[]}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public static emit(event: string, ...args: any[]) {
    return NeonEventBus._bus.$emit(event, ...args);
  }
}
