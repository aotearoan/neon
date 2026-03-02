import type { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

export interface NeonNoteModel {
  title: string;
  description?: string;
  color: NeonFunctionalColor;
}
