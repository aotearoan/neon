import { TranslateResult } from 'vue-i18n';

/**
 * Model describing a list item.
 */
export interface NeonListItem {
  key: string;
  label: TranslateResult;
}
