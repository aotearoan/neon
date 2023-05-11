import { NeonClipboardSupport } from './NeonClipboardService';

describe('NeonClipboardService', () => {
  const clipboard = navigator.clipboard;
  const permissions = navigator.permissions;

  afterEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: clipboard,
      writable: true,
    });

    Object.defineProperty(navigator, 'permissions', {
      value: permissions,
      writable: true,
    });
  });

  it('copies to clipboard when supported & granted', (done) => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn() },
      writable: true,
    });

    Object.defineProperty(navigator, 'permissions', {
      value: { query: () => Promise.resolve({ state: 'granted' }) },
      writable: true,
    });

    const toCopy = 'xdd';
    const clippy = new NeonClipboardSupport();

    setTimeout(async () => {
      await clippy.copyTo(toCopy);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(toCopy);
      done();
    });
  });

  it('copies to clipboard when supported & prompt', (done) => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn() },
      writable: true,
    });

    Object.defineProperty(navigator, 'permissions', {
      value: { query: () => Promise.resolve({ state: 'prompt' }) },
      writable: true,
    });

    const toCopy = 'xdd';
    const clippy = new NeonClipboardSupport();

    setTimeout(async () => {
      await clippy.copyTo(toCopy);
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(toCopy);
      done();
    });
  });

  it('does not copy when unsupported', (done) => {
    const toCopy = 'xdd';
    const clippy = new NeonClipboardSupport();

    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn() },
      writable: true,
    });

    Object.defineProperty(navigator, 'permissions', {
      value: null,
      writable: true,
    });

    setTimeout(() => {
      expect(() => clippy.copyTo(toCopy)).rejects.toThrow();
      done();
    });
  });
});
