import type { NeonDialogMessage } from '@/model/feedback/dialog/NeonDialogMessage';
import { NeonEventBus } from '@/utils/common/event/NeonEventBus';
import { nextTick } from 'vue';

/**
 * NeonDialogService is a service for invoking confirmation dialogs to the <strong>NeonAlert</strong> component for display to the
 * user
 */
export class NeonDialogService {
  public static readonly resolveEventKey = `${NeonEventBus.messagePrefix}-dialog-resolve`;

  public static readonly defaultDialogMessage: NeonDialogMessage = {
    open: false,
    title: '',
    question: '',
  };

  /**
   * Show a dialog message.
   *
   * @param dialog the dialog message to display.
   */
  public static async show(dialog: Omit<NeonDialogMessage, 'open'>): Promise<boolean> {
    NeonDialogService.resolve(false);
    await nextTick();
    NeonDialogService.emit(dialog);
    return new Promise((resolve) =>
      NeonEventBus.on(this.resolveEventKey, (key: boolean) => {
        resolve(key);
      }),
    );
  }

  /**
   * Trigger a resolution of the show dialog promise.
   *
   * @param key boolean value to resolve the promise.
   */
  public static resolve(key: boolean) {
    NeonEventBus.emit(NeonDialogService.resolveEventKey, key);
  }

  /**
   * Generate an event key so that all events are published on the correct topic.
   * @returns The event key for sending a message on <a href="/utils/common/event/NeonEventBus">NeonEventBus</a>.
   */
  public static generateEventKey() {
    return `${NeonEventBus.messagePrefix}-dialog`;
  }

  private static emit(message: NeonDialogMessage) {
    const eventKey = NeonDialogService.generateEventKey();
    NeonEventBus.emit(eventKey, message);
  }
}
