import { NeonMode } from '@/components/common/NeonMode';

export class NeonModeUtils {
  private static callbacks: Record<string, (value: NeonMode) => void> = {};
  private static defaultMode: NeonMode = NeonMode.Dark;

  public static setDefault(defaultMode: NeonMode) {
    NeonModeUtils.defaultMode = defaultMode;
  }

  public static addListener(key: string, callback: (value: NeonMode) => void) {
    if (window.matchMedia) {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

      if (isDarkMode) {
        callback(NeonMode.Dark);
      } else if (isLightMode) {
        callback(NeonMode.Light);
      } else {
        callback(NeonModeUtils.defaultMode);
      }

      if (
        Object.keys(NeonModeUtils.callbacks).length === 0 &&
        typeof MediaQueryList !== 'undefined' &&
        MediaQueryList.prototype.addEventListener
      ) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', NeonModeUtils.onDarkChange);
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', NeonModeUtils.onLightChange);
        window
          .matchMedia('(prefers-color-scheme: no-preference)')
          .addEventListener('change', NeonModeUtils.onNoPreferenceChange);
      }

      NeonModeUtils.callbacks[key] = callback;
    }
  }

  public static removeListener(key: string) {
    delete NeonModeUtils.callbacks[key];
    if (
      Object.keys(NeonModeUtils.callbacks).length === 0 &&
      window.matchMedia &&
      typeof MediaQueryList !== 'undefined' &&
      MediaQueryList.prototype.removeEventListener
    ) {
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
