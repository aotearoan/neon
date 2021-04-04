import { TranslateResult } from 'vue-i18n';
import { NeonVerticalPosition } from '../enums/NeonVerticalPosition';

/**
 * A 'Toast' style alert message. These are much simpler than normal alerts.
 */
export interface NeonToastMessage {
  /**
   *  Toast title.
   */
  title: TranslateResult;

  /**
   * Placement of the message, either centered at the top or at the bottom. Default is top.
   */
  placement?: NeonVerticalPosition;

  /**
   * Duration to display the message (default = 2500ms). Set to 0 for the message to never expire (make sure it's
   * dismissable).
   */
  duration?: number;

  /**
   * Whether the message can be dismissed by a user click. Default is true.
   */
  dismissable?: boolean;
}
