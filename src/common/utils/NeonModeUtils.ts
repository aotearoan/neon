import { NeonMode } from '../enums/NeonMode';

/**
 * Utility for managing Neon's light & dark modes & defaulting to the user's preference. See
 * <a href="/design/theming#dark-mode">Dark mode</a>.
 */
export class NeonModeUtils {
  private static callbacks: Record<string, (value: NeonMode) => void> = {};
  private static defaultMode: NeonMode = NeonMode.Dark;
  private static mode: NeonMode | null = null;

  /**
   * Get the current mode.
   *
   * @returns The current user light or dark mode.
   */
  public static getMode() {
    return NeonModeUtils.mode;
  }

  /**
   * Set the initial mode.
   *
   * @param defaultMode The mode to set. If no mode is passed in the user preferences are used.
   */
  public static init(defaultMode?: NeonMode) {
    if (defaultMode) {
      NeonModeUtils.defaultMode = defaultMode;
      NeonModeUtils.mode = NeonModeUtils.defaultMode;
    } else {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

      if (isDarkMode) {
        NeonModeUtils.mode = NeonMode.Dark;
      } else if (isLightMode) {
        NeonModeUtils.mode = NeonMode.Light;
      } else {
        NeonModeUtils.mode = NeonModeUtils.defaultMode;
      }
    }
  }

  /**
   * Add a callback to listen to mode changes made by the user.
   *
   * @param key The unique key for the listener.
   * @param callback The callback function.
   */
  public static addListener(key: string, callback: (value: NeonMode) => void) {
    if (window.matchMedia) {
      if (Object.keys(NeonModeUtils.callbacks).length === 0) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', NeonModeUtils.onDarkChange);
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', NeonModeUtils.onLightChange);
        window
          .matchMedia('(prefers-color-scheme: no-preference)')
          .addEventListener('change', NeonModeUtils.onNoPreferenceChange);
      }

      NeonModeUtils.callbacks[key] = callback;
      callback(NeonModeUtils.mode || NeonModeUtils.defaultMode);
    }
  }

  /**
   * Remove a callback listener.
   *
   * @param key The unique key for the listener.
   */
  public static removeListener(key: string) {
    delete NeonModeUtils.callbacks[key];
    if (Object.keys(NeonModeUtils.callbacks).length === 0 && window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', NeonModeUtils.onDarkChange);
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', NeonModeUtils.onLightChange);
      window
        .matchMedia('(prefers-color-scheme: no-preference)')
        .removeEventListener('change', NeonModeUtils.onNoPreferenceChange);
    }
  }

  static getCallbacks() {
    return NeonModeUtils.callbacks;
  }

  static onDarkChange(e: MediaQueryListEvent) {
    NeonModeUtils.onChange(e, NeonMode.Dark);
  }

  static onLightChange(e: MediaQueryListEvent) {
    NeonModeUtils.onChange(e, NeonMode.Light);
  }

  static onNoPreferenceChange(e: MediaQueryListEvent) {
    NeonModeUtils.onChange(e, NeonModeUtils.defaultMode);
  }

  private static onChange(e: MediaQueryListEvent, value: NeonMode) {
    if (e.matches) {
      NeonModeUtils.handleChange(value);
    }
  }

  private static handleChange(value: NeonMode) {
    Object.values(NeonModeUtils.callbacks).forEach((cb) => cb(value));
  }
}
