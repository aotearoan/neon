import type { NeonAlertPlacement } from '../enums/NeonAlertPlacement';
import type { NeonAlertAction } from './NeonAlertAction';

/**
 * Model describing an alert message notification to be displayed to the user. See <a href="/feedback/alert">Alerts</a>.
 */
export interface NeonAlertMessage {
  /**
   * Optional title of the alert. NOTE: Either title or message needs to be provided.
   */
  title?: string;

  /**
   * Optional body message. NOTE: Either title or message needs to be provided.
   */
  message?: string;

  /**
   * Placement of the message. Default is top-right.
   */
  placement?: NeonAlertPlacement;

  /**
   * Duration to display the message (default = 2500ms). Set to 0 for the message to never expire (make sure it's
   * dismissible).
   */
  duration?: number;

  /**
   * Whether the message can be dismissed by a user click. Default is true.
   */
  dismissible?: boolean;

  /**
   * Provide an action for the user to click on an alert. Actions consist of a label to display for the action and a
   * callback which is invoked when the user clicks on the action. When a user clicks on an action the alert will also
   * be dismissed.
   */
  primaryAction?: NeonAlertAction;

  /**
   * A second action can be provided to the user. This is usually a 'Dismiss' action for an alert that doesn't expire.
   */
  secondaryAction?: NeonAlertAction;
}
