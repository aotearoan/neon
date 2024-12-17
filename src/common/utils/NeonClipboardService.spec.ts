import { NeonClipboardSupport } from './NeonClipboardService';

describe('NeonClipboardService', () => {
  it('copies to clipboard', (done) => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: jest.fn() },
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
});
