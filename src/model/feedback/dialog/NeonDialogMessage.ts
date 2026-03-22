import type { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * A confirmation 'Dialog' style message. These are more complex than an alert and return a promise.
 */
export interface NeonDialogMessage {
  /**
   * The color of the button for the confirm (positive) action.
   */
  color?: NeonFunctionalColor;
  /**
   * Alternate confirm button color for creating a gradient button. NOTE: can also be the same color as 'color'.
   */
  alternateColor?: NeonFunctionalColor;
  /**
   * The label of the button for the cancel (negative) action.
   */
  cancelLabel?: string;
  /**
   * The label of the button for the confirm (positive) action.
   */
  confirmLabel?: string;
  /**
   * The dialog title
   */
  title: string;
  /**
   * The dialog question. Can be html (rendered using v-html).
   */
  question: string;
  /**
   * Whether the dialog is open.
   */
  open?: boolean;
  /**
   * Increase the opacity so that the page behind the modal is no longer visible
   */
  opaque?: boolean;
}
