import type { NeonVerticalPosition } from '../enums/NeonVerticalPosition';

/**
 * A 'Toast' style alert message. These are much simpler than normal alerts.
 */
export interface NeonToastMessage {
  /**
   * Optional key of the alert. This can be used to remove a message programmatically later.
   */
  key?: string;

  /**
   *  Toast title.
   */
  title: string;

  /**
   * Placement of the message, either centered at the top or at the bottom. Default is <strong>top</strong>.
   */
  placement?: NeonVerticalPosition;

  /**
   * Duration to display the message (default = 2500ms). Set to 0 for the message to never expire (make sure it's
   * dismissible).
   */
  duration?: number;

  /**
   * Whether the message can be dismissed by a user click. Default is true.
   */
  dismissible?: boolean;
}
