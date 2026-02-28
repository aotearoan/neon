import { NeonMode } from '../enums/NeonMode';

/**
 * Utility for managing Neon's light/dark mode & defaulting to the user's preference. See
 * <a href="https://aotearoan.github.io/neon/design/theming#dark-mode">Dark mode</a>.
 */
export class NeonModeUtils {
  private static defaultMode = NeonMode.Light;
  private static mode = NeonMode.Light;
  private static callback: ((isDark: boolean) => void) | null = null;

  /**
   * Set the initial mode.
   *
   * @param defaultMode The initial mode to set
   * @param callback An optional callback to be triggered when using NeonMode.System indicating changes in the current
   * light/dark mode set internally by this class.
   */
  public static init(defaultMode?: NeonMode, callback?: (isDark: boolean) => void) {
    if (defaultMode) {
      NeonModeUtils.defaultMode = defaultMode;
      NeonModeUtils.mode = defaultMode;
    }

    if (callback) {
      NeonModeUtils.callback = callback;
    }

    NeonModeUtils.switchMode(NeonModeUtils.mode);

    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', NeonModeUtils.onDarkChange);
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', NeonModeUtils.onLightChange);
    }
  }

  /**
   * Remove system listeners
   *
   */
  public static destroy() {
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', NeonModeUtils.onDarkChange);
    window.matchMedia('(prefers-color-scheme: light)').removeEventListener('change', NeonModeUtils.onLightChange);
  }

  /**
   * Switch the current mode.
   * @param mode the mode to switch to.
   */
  public static switchMode(mode: NeonMode) {
    NeonModeUtils.mode = mode;
    switch (mode) {
      case NeonMode.Light:
        NeonModeUtils.updateClasses(false);
        break;
      case NeonMode.Dark:
        NeonModeUtils.updateClasses(true);
        break;
      case NeonMode.System:
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          NeonModeUtils.updateClasses(true);
          if (NeonModeUtils.callback) {
            NeonModeUtils.callback(true);
          }
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          NeonModeUtils.updateClasses(false);
          if (NeonModeUtils.callback) {
            NeonModeUtils.callback(false);
          }
        } else {
          NeonModeUtils.updateClasses(NeonModeUtils.defaultMode === NeonMode.Dark);
          if (NeonModeUtils.callback) {
            NeonModeUtils.callback(NeonModeUtils.defaultMode === NeonMode.Dark);
          }
        }
        break;
    }
  }

  /**
   * Get the current mode.
   *
   * @returns The current user light or dark mode.
   */
  public static getMode() {
    return NeonModeUtils.mode;
  }

  static onDarkChange(e: MediaQueryListEvent) {
    if (NeonModeUtils.mode === NeonMode.System && e.matches) {
      NeonModeUtils.updateClasses(true);
      if (NeonModeUtils.callback) {
        NeonModeUtils.callback(true);
      }
    }
  }

  static onLightChange(e: MediaQueryListEvent) {
    if (NeonModeUtils.mode === NeonMode.System && e.matches) {
      NeonModeUtils.updateClasses(false);
      if (NeonModeUtils.callback) {
        NeonModeUtils.callback(false);
      }
    }
  }

  private static updateClasses(isDark: boolean) {
    document.documentElement.classList.remove(`neon-mode--${isDark ? NeonMode.Light : NeonMode.Dark}`);
    document.documentElement.classList.add(`neon-mode--${isDark ? NeonMode.Dark : NeonMode.Light}`);
  }
}
