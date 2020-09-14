import { TranslateResult } from 'vue-i18n';

export interface NeonTreeMenuSectionModel {
  label: TranslateResult;
  key: string;
  children?: NeonTreeMenuLinkModel[];
  expanded?: boolean;
}

export interface NeonTreeMenuLinkModel {
  label: TranslateResult;
  key: string;
  href?: string;
  anchors?: string[];
}
