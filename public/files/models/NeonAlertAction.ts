/**
 * Provide actions for users to click in alerts.
 */
export interface NeonAlertAction {
  /**
   * Label of the action. Keep it short! ~9 chars is the limit.
   */
  label: string;

  /**
   * Called when the user clicks on the action.
   */
  callback: () => void;
}
