import type { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

export interface NeonNoteModel {
  title: string;
  description?: string;
  color: NeonFunctionalColor;
}
