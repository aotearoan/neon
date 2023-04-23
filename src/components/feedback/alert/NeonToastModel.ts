import type { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import type { NeonToastMessage } from '@/common/models/NeonToastMessage';

export interface NeonToastModel extends NeonToastMessage {
  id: number;
  level: NeonAlertLevel;
}
