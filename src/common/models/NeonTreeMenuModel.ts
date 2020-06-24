import { TranslateResult } from 'vue-i18n';

export interface NeonTreeMenuModel {
  label: TranslateResult;
  key: string;
  keywords?: TranslateResult;
  href?: string;
  children?: NeonTreeMenuModel[];
}
