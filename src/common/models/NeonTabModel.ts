import { TranslateResult } from 'vue-i18n';

export interface NeonTabModel {
  label: TranslateResult;
  key: string; // TIP: use this key as the id of the tab content to support aria-controls
  icon?: string;
}
