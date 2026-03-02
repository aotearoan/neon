import type { NeonAlertLevel } from '@/model/feedback/alert/NeonAlertLevel';
import type { NeonToastMessage } from '@/model/feedback/toast/NeonToastMessage';

export interface NeonToastModel extends NeonToastMessage {
  id: number;
  level: NeonAlertLevel;
}
