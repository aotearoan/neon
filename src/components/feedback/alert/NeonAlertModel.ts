import type { NeonAlertMessage } from '../../../common/models/NeonAlertMessage';
import type { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';

export interface NeonAlertModel extends NeonAlertMessage {
  id: number;
  level: NeonAlertLevel;
}
