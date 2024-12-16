import type { NeonTreeMenuLinkModel } from './NeonTreeMenuLinkModel';

export interface NeonTreeMenuSectionModel {
  label: string;
  key: string;
  children?: NeonTreeMenuLinkModel[];
  expanded?: boolean;
  disabled?: boolean;
}
