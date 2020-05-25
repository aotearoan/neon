import { TranslateResult } from 'vue-i18n';

export interface NeonTreeMenuModel {
  label: TranslateResult;
  key: string;
  href?: string;
  children?: NeonTreeMenuModel[];
}
