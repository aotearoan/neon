import { NeonModeUtils } from './NeonModeUtils';
import { NeonMode } from '@/common/enums/NeonMode';

describe('NeonModeUtils', () => {
  describe('basic tests', () => {
    let addEventListener: jest.Mock;
    let removeEventListener: jest.Mock;

    class MediaQueryListEvent extends Event {
      public matches;
      public media;

      constructor(matches: boolean) {
        super('');
        this.matches = matches;
        this.media = '';
      }
    }

    beforeEach(() => {
      addEventListener = jest.fn();
      removeEventListener = jest.fn();

      const matchMedia = () => ({
        addEventListener,
        removeEventListener,
      });

      Object.defineProperty(window, 'matchMedia', {
        value: matchMedia,
        writable: true,
      });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('gets mode, no default', () => {
      NeonModeUtils.init();
      expect(NeonModeUtils.getMode()).toEqual(NeonMode.Light);
      expect(addEventListener).toHaveBeenCalledTimes(2);
    });

    it('gets mode, with default', () => {
      NeonModeUtils.init(NeonMode.System);
      expect(NeonModeUtils.getMode()).toEqual(NeonMode.System);
    });

    it('triggers callback on dark change', () => {
      const callback = jest.fn();
      NeonModeUtils.init(NeonMode.System, callback);
      NeonModeUtils.onDarkChange(new MediaQueryListEvent(true));
      expect(callback).toHaveBeenCalledWith(true);
    });

    it('does not trigger callback on dark change when false', () => {
      const callback = jest.fn();
      NeonModeUtils.init(NeonMode.System, callback);
      NeonModeUtils.onDarkChange(new MediaQueryListEvent(false));
      expect(callback).toHaveBeenCalledWith(false);
    });

    it('triggers callback on light change', () => {
      const callback = jest.fn();
      NeonModeUtils.init(NeonMode.System, callback);
      NeonModeUtils.onLightChange(new MediaQueryListEvent(true));
      expect(callback).toHaveBeenCalledWith(false);
    });

    it('does not trigger callback on light change when false', () => {
      const callback = jest.fn();
      NeonModeUtils.init(NeonMode.System, callback);
      NeonModeUtils.onLightChange(new MediaQueryListEvent(false));
      expect(callback).toHaveBeenCalledWith(false);
    });

    it('destroys listeners', () => {
      NeonModeUtils.init();
      NeonModeUtils.destroy();
      expect(removeEventListener).toHaveBeenCalledTimes(2);
    });

    it('switches to dark mode', () => {
      NeonModeUtils.init(NeonMode.Light);
      NeonModeUtils.switchMode(NeonMode.Dark);
      expect(NeonModeUtils.getMode()).toEqual(NeonMode.Dark);
    });
  });

  describe('System mode complex tests', () => {
    it('initially switches to dark mode', () => {
      const addEventListener = jest.fn();
      const removeEventListener = jest.fn();
      const callback = jest.fn();

      const matchMedia = (query: string) => ({
        addEventListener,
        removeEventListener,
        matches: query === '(prefers-color-scheme: dark)',
      });

      Object.defineProperty(window, 'matchMedia', {
        value: matchMedia,
        writable: true,
      });

      NeonModeUtils.init(NeonMode.System, callback);
      expect(NeonModeUtils.getMode()).toEqual(NeonMode.System);
      expect(callback).toHaveBeenCalledWith(true);

      jest.resetAllMocks();
    });

    it('initially switches to light mode', () => {
      const addEventListener = jest.fn();
      const removeEventListener = jest.fn();
      const callback = jest.fn();

      const matchMedia = (query: string) => ({
        addEventListener,
        removeEventListener,
        matches: query === '(prefers-color-scheme: light)',
      });

      Object.defineProperty(window, 'matchMedia', {
        value: matchMedia,
        writable: true,
      });

      NeonModeUtils.init(NeonMode.System, callback);
      expect(NeonModeUtils.getMode()).toEqual(NeonMode.System);
      expect(callback).toHaveBeenCalledWith(false);

      jest.resetAllMocks();
    });
  });
});
