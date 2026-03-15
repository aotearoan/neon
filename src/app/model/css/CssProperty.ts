import type { CssComment } from './CssComment';

export interface CssProperty {
  name: string;
  value: string;
  comment: CssComment;
}
