/**
 * Utility that provides application clipboard support.
 */
export class NeonClipboardSupport {
  private supportClipboard = false;

  /**
   * Initialise utility class & check if browser clipboard support is enabled.
   */
  public constructor() {
    const permissions = navigator.permissions;
    if (permissions) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      permissions.query({ name: 'clipboard-write' }).then(
        (result: PermissionStatus) => {
          if (result.state === 'granted' || result.state === 'prompt') {
            this.supportClipboard = true;
          }
        },
        () => console.info('clipboard-write unsupported'),
      );
    }
  }

  /**
   * Copy provided string to the clipboard if support is enabled.
   *
   * @param value {string} The value to copy.
   *
   * @returns {Promise<void>>} A promise indicating when the copy to clipboard is complete.
   */
  public copyTo(value: string): Promise<void> {
    return this.supportClipboard
      ? navigator.clipboard.writeText(value)
      : Promise.reject(new Error('No clipboard support'));
  }
}

export const NeonClipboardService = new NeonClipboardSupport();
