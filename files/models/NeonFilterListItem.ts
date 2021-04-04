import { TranslateResult } from 'vue-i18n';

/**
 * Model describing a filter list item.
 */
export interface NeonFilterListItem {
  key: string;
  label: TranslateResult;
  count: number;
  disabled?: boolean;
}
