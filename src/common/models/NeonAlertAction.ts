/**
 * Model describing an alert action. An alert action is a button in an alert notification allowing the user to make
 * simple actions without changing context.
 */
export interface NeonAlertAction {
  /**
   * Label of the action button. Keep it short! ~9 chars is the limit.
   */
  label: string;

  /**
   * Callback function - called when the user triggers the action.
   */
  callback: () => void;
}
