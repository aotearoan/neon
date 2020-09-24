import { TranslateResult } from 'vue-i18n';
import { NeonAlertPlacement } from '../enums/NeonAlertPlacement';

export interface NeonAlertMessage {
  title?: TranslateResult;
  message?: TranslateResult;
  placement?: NeonAlertPlacement;
  duration?: number;
  dismissable?: boolean;
}
