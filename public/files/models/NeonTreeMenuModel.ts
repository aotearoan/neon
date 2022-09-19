export interface NeonTreeMenuSectionModel {
  label: string;
  key: string;
  children?: NeonTreeMenuLinkModel[];
  expanded?: boolean;
}

export interface NeonTreeMenuLinkModel {
  label: string;
  key: string;
  href?: string;
  anchors?: string[];
}
