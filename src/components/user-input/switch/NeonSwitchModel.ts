import { TranslateResult } from 'vue-i18n';

export interface NeonSwitchModel {
  on: NeonCheckboxStateModel;
  off: NeonCheckboxStateModel;
}

export interface NeonCheckboxStateModel {
  key: string;
  label?: TranslateResult;
  icon?: string;
}
