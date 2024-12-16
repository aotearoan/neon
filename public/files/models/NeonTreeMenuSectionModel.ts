import type { NeonTreeMenuLinkModel } from './NeonTreeMenuLinkModel';

export interface NeonTreeMenuSectionModel {
  label: string;
  key: string;
  href?: string;
  children?: NeonTreeMenuLinkModel[];
  expanded?: boolean;
  disabled?: boolean;
}
