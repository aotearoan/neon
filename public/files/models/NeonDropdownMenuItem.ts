import { TranslateResult } from 'vue-i18n';

export interface NeonDropdownMenuItem {
  key: string;
  label: TranslateResult;
  href?: string;
  icon?: string;
  separatorBefore?: boolean;
  disabled?: boolean;
}
