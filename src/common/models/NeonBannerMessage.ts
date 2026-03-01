import type { NeonAlertAction } from './NeonAlertAction';

/**
 * Model describing a banner message to be displayed above the page content. See <a href="/feedback/banner">Banner</a>.
 */
export interface NeonBannerMessage {
  /**
   * Banner message to display to the user.
   */
  message: string;

  /**
   * Provide an action for the user to click on. Actions consist of a label to display for the action and a callback
   * which is invoked when the user clicks on the action. When a user clicks on an action the alert will also be
   * dismissed.
   */
  action: NeonAlertAction;
}
