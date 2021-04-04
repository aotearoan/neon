import { TranslateResult } from 'vue-i18n';
import { NeonSelectOption } from './NeonSelectOption';

/**
 * Model describing a select opt-group and it's options.
 */
export interface NeonSelectGroup {
  group: TranslateResult;
  options: NeonSelectOption[];
}
