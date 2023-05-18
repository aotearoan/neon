import { NeonModeUtils } from './NeonModeUtils';
import { NeonMode } from '@/common/enums/NeonMode';

describe('NeonModeUtils', () => {
  it('adds & removes listeners, default mode', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addEventListener: jest.fn(), removeEventListener: jest.fn() }),
      writable: true,
    });

    const listener = jest.fn();
    NeonModeUtils.addListener('l1', listener);
    expect(Object.keys(NeonModeUtils.getCallbacks()).length).toEqual(1);
    NeonModeUtils.removeListener('l1');
    expect(Object.keys(NeonModeUtils.getCallbacks()).length).toEqual(0);
  });

  class MediaQueryListEvent extends Event {
    public matches = true;

    constructor() {
      super('');
    }
  }

  it('calls callbacks', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({
        addEventListener: (key: string, cb: (e: MediaQueryListEvent) => void) => cb(new MediaQueryListEvent()),
        removeEventListener: jest.fn(),
      }),
      writable: true,
    });

    const listener = jest.fn();
    const spyDark = jest.spyOn(NeonModeUtils, 'onDarkChange');
    const spyLight = jest.spyOn(NeonModeUtils, 'onLightChange');
    const spyNoPref = jest.spyOn(NeonModeUtils, 'onNoPreferenceChange');
    NeonModeUtils.addListener('l1', listener);
    expect(spyDark).toHaveBeenCalled();
    expect(spyLight).toHaveBeenCalled();
    expect(spyNoPref).toHaveBeenCalled();
  });

  it('gets mode without default, dark mode', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: (key: string) => ({ matches: key === '(prefers-color-scheme: dark)' }),
      writable: true,
    });

    NeonModeUtils.init();
    expect(NeonModeUtils.getMode()).toEqual(NeonMode.Dark);
  });

  it('gets mode without default, light mode', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: (key: string) => ({ matches: key === '(prefers-color-scheme: light)' }),
      writable: true,
    });

    NeonModeUtils.init();
    expect(NeonModeUtils.getMode()).toEqual(NeonMode.Light);
  });

  it('gets mode without default, neither', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ matches: false }),
      writable: true,
    });

    NeonModeUtils.init();
    expect(NeonModeUtils.getMode()).toEqual(NeonMode.Dark);
  });

  it('gets mode with default', () => {
    NeonModeUtils.init(NeonMode.Dark);
    expect(NeonModeUtils.getMode()).toEqual(NeonMode.Dark);
  });

  it('adds & removes listeners', () => {
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ addEventListener: jest.fn(), removeEventListener: jest.fn() }),
      writable: true,
    });

    NeonModeUtils.init(NeonMode.Dark);
    const listener = jest.fn();
    NeonModeUtils.addListener('l1', listener);
    expect(Object.keys(NeonModeUtils.getCallbacks()).length).toEqual(1);
    NeonModeUtils.removeListener('l1');
    expect(Object.keys(NeonModeUtils.getCallbacks()).length).toEqual(0);
  });
});
