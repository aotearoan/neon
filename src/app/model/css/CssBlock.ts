import type { CssProperty } from './CssProperty';

export interface CssBlock {
  selector: string;
  properties: Array<CssProperty>;
}
