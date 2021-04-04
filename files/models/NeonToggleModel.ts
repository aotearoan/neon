import { TranslateResult } from 'vue-i18n';

export interface NeonToggleModel {
  key: string;
  label?: TranslateResult;
  icon?: string;
  disabled?: boolean;
}
