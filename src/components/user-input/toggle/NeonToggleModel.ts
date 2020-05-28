import { TranslateResult } from 'vue-i18n';

export interface NeonToggleModel {
  key: string;
  label: TranslateResult;
  disabled?: boolean;
}
