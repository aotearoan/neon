import { TranslateResult } from 'vue-i18n';

export interface NeonDropdownMenuItem {
  key: string;
  label: TranslateResult;
  href?: string;
  icon?: string;
  separatorBefore?: boolean;
  disabled?: boolean;
  // is the title for a group of grouped items
  isGroup?: boolean;
  // is a child in a group
  grouped?: boolean;
}
