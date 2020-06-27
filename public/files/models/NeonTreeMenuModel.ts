import { TranslateResult } from 'vue-i18n';

export interface NeonTreeMenuLinkModel {
  label: TranslateResult;
  key: string;
  keywords?: TranslateResult;
  href?: string;
}

export interface NeonTreeMenuSectionModel {
  label: TranslateResult;
  key: string;
  children?: NeonTreeMenuLinkModel[];
  expanded?: boolean;
}
