import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';
import { NeonToastMessage } from '../../../common/models/NeonToastMessage';

export interface NeonToastModel extends NeonToastMessage {
  id: number;
  level: NeonAlertLevel;
}
