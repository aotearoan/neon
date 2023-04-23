import { NeonEventBus } from './NeonEventBus';
import type { NeonToastMessage } from '../models/NeonToastMessage';
import { NeonAlertLevel } from '../enums/NeonAlertLevel';

/**
 * NeonToastService is a service for sending toast alerts to the <strong>NeonAlert</strong> component for display to the user.
 */
export class NeonToastService {
  /**
   * Send an info message
   * @param alert {NeonToastMessage}
   */
  public static info(alert: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Info, alert);
  }

  /**
   * Send a success message
   * @param alert {NeonToastMessage}
   */
  public static success(alert: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Success, alert);
  }

  /**
   * Send a warning message
   * @param alert {NeonToastMessage}
   */
  public static warn(alert: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Warn, alert);
  }

  /**
   * Send an error message
   * @param alert {NeonToastMessage}
   */
  public static error(alert: NeonToastMessage) {
    NeonToastService.emit(NeonAlertLevel.Error, alert);
  }

  public static generateEventKey(eventType: NeonAlertLevel) {
    return `${NeonEventBus.messagePrefix}-toast-${eventType}`;
  }

  private static emit(eventType: NeonAlertLevel, alert: NeonToastMessage) {
    const eventKey = NeonToastService.generateEventKey(eventType);
    NeonEventBus.emit(eventKey, alert);
  }
}
