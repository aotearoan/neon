/**
 * Utility that provides application clipboard support.
 */
export class NeonClipboardSupport {
  /**
   * Copy provided string to the clipboard if support is enabled.
   *
   * @param value The value to copy.
   *
   * @returns A promise indicating when the copy to clipboard is complete.
   */
  public copyTo(value: string): Promise<void> {
    return navigator.clipboard.writeText(value);
  }
}

export const NeonClipboardService = new NeonClipboardSupport();
