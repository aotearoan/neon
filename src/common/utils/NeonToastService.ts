import { NeonEventBus } from './NeonEventBus';
import type { NeonToastMessage } from '../models/NeonToastMessage';
import { NeonAlertLevel } from '../enums/NeonAlertLevel';

/**
 * NeonToastService is a service for sending toast alerts to the <strong>NeonAlert</strong> component for display to the
 * user.
 */
export class NeonToastService {
  public static readonly removeEventKey = `${NeonEventBus.messagePrefix}-toast-remove`;

  /**
   * Send an info message.
   *
   * @param toast Info toast message.
   */
  public static info(toast: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Info, toast);
  }

  /**
   * Send a success message.
   *
   * @param toast Success toast message.
   */
  public static success(toast: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Success, toast);
  }

  /**
   * Send a warning message.
   *
   * @param toast Warning toast message.
   */
  public static warn(toast: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Warn, toast);
  }

  /**
   * Send an error message.
   *
   * @param toast Error toast message.
   */
  public static error(toast: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Error, toast);
  }

  /**
   * Remove a message.
   *
   * @param key Key of the message to delete.
   */
  public static remove(key: string) {
    NeonEventBus.emit(NeonToastService.removeEventKey, key);
  }

  /**
   * Generate an event key so that all events are published on the correct topic.
   *
   * @param eventType Alert level of the event
   *
   * @returns The event key for sending a message on <a href="/utils/NeonEventBus">NeonEventBus</a>.
   */
  public static generateEventKey(eventType: NeonAlertLevel) {
    return `${NeonEventBus.messagePrefix}-toast-${eventType}`;
  }

  private static emit(eventType: NeonAlertLevel, alert: NeonToastMessage) {
    const eventKey = NeonToastService.generateEventKey(eventType);
    NeonEventBus.emit(eventKey, alert);
  }
}
