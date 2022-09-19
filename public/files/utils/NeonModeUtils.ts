import { NeonMode } from '../enums/NeonMode';

export class NeonModeUtils {
  private static callbacks: Record<string, (value: NeonMode) => void> = {};
  private static defaultMode: NeonMode = NeonMode.Dark;
  private static mode: NeonMode | null = null;

  public static getMode() {
    return NeonModeUtils.mode;
  }

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

  public static addListener(key: string, callback: (value: NeonMode) => void) {
    if (window.matchMedia) {
      if (
        Object.keys(NeonModeUtils.callbacks).length === 0 &&
        typeof MediaQueryList !== 'undefined') {
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

  public static removeListener(key: string) {
    delete NeonModeUtils.callbacks[key];
    if (
      Object.keys(NeonModeUtils.callbacks).length === 0 &&
      window.matchMedia &&
      typeof MediaQueryList !== 'undefined') {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', NeonModeUtils.onDarkChange);
      window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', NeonModeUtils.onLightChange);
      window
        .matchMedia('(prefers-color-scheme: no-preference)')
        .removeEventListener('change', NeonModeUtils.onNoPreferenceChange);
    }
  }

  private static onDarkChange(e: MediaQueryListEvent) {
    NeonModeUtils.onChange(e, NeonMode.Dark);
  }

  private static onLightChange(e: MediaQueryListEvent) {
    NeonModeUtils.onChange(e, NeonMode.Light);
  }

  private static onNoPreferenceChange(e: MediaQueryListEvent) {
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
