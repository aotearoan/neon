import { TranslateResult } from 'vue-i18n';

export interface NeonActionMenuModel {
  label: TranslateResult;
  key: string;
  count?: number;
  selected?: boolean;
  disabled?: boolean;
}
