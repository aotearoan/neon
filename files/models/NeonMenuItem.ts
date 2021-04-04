import { TranslateResult } from 'vue-i18n';

export interface NeonMenuItem {
  key: string;
  label: TranslateResult;
  href?: string;
  icon?: string;
  disabled?: boolean;
}
