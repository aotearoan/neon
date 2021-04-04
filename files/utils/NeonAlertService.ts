import { NeonEventBus } from './NeonEventBus';
import { NeonAlertMessage } from '../models/NeonAlertMessage';
import { NeonAlertLevel } from '../enums/NeonAlertLevel';

/**
 * NeonAlertService is a service for sending alerts to the <strong>NeonAlert</strong> component for display to the user.
 */
export class NeonAlertService {
  /**
   * Send an info message
   * @param alert {NeonAlertMessage}
   */
  public static info(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Info, alert);
  }

  /**
   * Send a success message
   * @param alert {NeonAlertMessage}
   */
  public static success(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Success, alert);
  }

  /**
   * Send a warning message
   * @param alert {NeonAlertMessage}
   */
  public static warn(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Warn, alert);
  }

  /**
   * Send an error message
   * @param alert {NeonAlertMessage}
   */
  public static error(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Error, alert);
  }

  private static emit(eventType: NeonAlertLevel, alert: NeonAlertMessage) {
    const eventKey = NeonAlertService.generateEventKey(eventType);
    NeonEventBus.emit(eventKey, alert);
  }

  public static generateEventKey(eventType: NeonAlertLevel) {
    return `${NeonEventBus.messagePrefix}-alert-${eventType}`;
  }
}
