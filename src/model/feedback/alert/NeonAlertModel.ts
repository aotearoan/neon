import type { NeonAlertMessage } from '@/model/feedback/alert/NeonAlertMessage';
import type { NeonAlertLevel } from '@/model/feedback/alert/NeonAlertLevel';

export interface NeonAlertModel extends NeonAlertMessage {
  id: number;
  level: NeonAlertLevel;
}
