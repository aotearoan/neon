import { TranslateResult } from 'vue-i18n';

export interface NeonActionMenuModel {
  label: TranslateResult;
  key: string;
  selected?: boolean;
  disabled?: boolean;
}
