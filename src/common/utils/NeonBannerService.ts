import { NeonEventBus } from './NeonEventBus';
import type { NeonBannerMessage } from '../models/NeonBannerMessage';
import { NeonAlertLevel } from '../enums/NeonAlertLevel';

/**
 * NeonBannerService is a service for sending status banner notifications to the <strong>NeonBanner</strong> component for display to the user.
 */
export class NeonBannerService {
  /**
   * Send an info message.
   *
   * @param message The info message to display.
   */
  public static info(message: NeonBannerMessage) {
    NeonBannerService.emit(NeonAlertLevel.Info, message);
  }

  /**
   * Send a success message.
   *
   * @param message The success message to display.
   */
  public static success(message: NeonBannerMessage) {
    NeonBannerService.emit(NeonAlertLevel.Success, message);
  }

  /**
   * Send a warning message.
   *
   * @param message The warning message to display.
   */
  public static warn(message: NeonBannerMessage) {
    NeonBannerService.emit(NeonAlertLevel.Warn, message);
  }

  /**
   * Send an error message.
   *
   * @param message The error message to display.
   */
  public static error(message: NeonBannerMessage) {
    NeonBannerService.emit(NeonAlertLevel.Error, message);
  }

  /**
   * Generate an event key so that all events are published on the correct topic.
   *
   * @param eventType Alert level of the event.
   *
   * @returns The event key for sending a message on <a href="/utils/NeonEventBus">NeonEventBus</a>.
   */
  public static generateEventKey(eventType: NeonAlertLevel): string {
    return `${NeonEventBus.messagePrefix}-banner-${eventType}`;
  }

  private static emit(eventType: NeonAlertLevel, alert: NeonBannerMessage) {
    const eventKey = NeonBannerService.generateEventKey(eventType);
    NeonEventBus.emit(eventKey, alert);
  }
}
