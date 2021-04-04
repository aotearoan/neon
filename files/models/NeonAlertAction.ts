import VueI18n from 'vue-i18n';
import TranslateResult = VueI18n.TranslateResult;

/**
 * Provide actions for users to click in alerts.
 */
export interface NeonAlertAction {
  /**
   * Label of the action. Keep it short! ~9 chars is the limit.
   */
  label: TranslateResult;

  /**
   * Called when the user clicks on the action.
   */
  callback: () => void;
}
