import { NeonAlertMessage } from '../../../common/models/NeonAlertMessage';
import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';

export interface NeonAlertModel extends NeonAlertMessage {
  id: number;
  level: NeonAlertLevel;
}
