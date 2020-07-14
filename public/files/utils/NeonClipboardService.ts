export class NeonClipboardSupport {
  public supportClipboard = false;

  public constructor() {
    const permissions = navigator.permissions;
    if (permissions) {
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

  public copyTo(value: string): Promise<void> {
    return this.supportClipboard
      ? navigator.clipboard.writeText(value)
      : Promise.reject(new Error('No clipboard support'));
  }
}

export const NeonClipboardService = new NeonClipboardSupport();
