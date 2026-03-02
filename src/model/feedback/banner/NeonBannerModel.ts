import type { NeonAlertLevel } from '@/model/feedback/alert/NeonAlertLevel';
import type { NeonBannerMessage } from '@/model/feedback/banner/NeonBannerMessage';

export interface NeonBannerModel extends NeonBannerMessage {
  id: number;
  level: NeonAlertLevel;
}
