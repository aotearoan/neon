import { NeonEventBus } from './NeonEventBus';
import type { NeonAlertMessage } from '../models/NeonAlertMessage';
import { NeonAlertLevel } from '../enums/NeonAlertLevel';

/**
 * NeonAlertService is a service for sending alerts to the <strong>NeonAlert</strong> component for display to the user.
 */
export class NeonAlertService {
  /**
   * Send an info message.
   *
   * @param alert The info message to display.
   */
  public static info(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Info, alert);
  }

  /**
   * Send a success message.
   *
   * @param alert The success message to display.
   */
  public static success(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Success, alert);
  }

  /**
   * Send a warning message.
   *
   * @param alert The warning message to display.
   */
  public static warn(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Warn, alert);
  }

  /**
   * Send an error message.
   *
   * @param alert The error message to display.
   */
  public static error(alert: NeonAlertMessage) {
    NeonAlertService.emit(NeonAlertLevel.Error, alert);
  }

  /**
   * Generate an event key so that all events are published on the correct topic.
   *
   * @param eventType Alert level of the event.
   *
   * @returns The event key for sending a message on <a href="/utils/NeonEventBus">NeonEventBus</a>.
   */
  public static generateEventKey(eventType: NeonAlertLevel) {
    return `${NeonEventBus.messagePrefix}-alert-${eventType}`;
  }

  private static emit(eventType: NeonAlertLevel, alert: NeonAlertMessage) {
    const eventKey = NeonAlertService.generateEventKey(eventType);
    NeonEventBus.emit(eventKey, alert);
  }
}
