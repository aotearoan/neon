import type { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import type { NeonBannerMessage } from '@/common/models/NeonBannerMessage';

export interface NeonBannerModel extends NeonBannerMessage {
  id: number;
  level: NeonAlertLevel;
}
