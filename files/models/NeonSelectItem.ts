import { TranslateResult } from 'vue-i18n';

/**
 * Model describing a select option.
 */
export interface NeonSelectItem {
  key: string;
  label: TranslateResult;
  icon?: string;
  separatorBefore?: boolean;
  disabled?: boolean;
  group?: TranslateResult;
}
