export interface NeonDropdownMenuItem {
  key: string;
  label: string;
  href?: string;
  icon?: string;
  separatorBefore?: boolean;
  disabled?: boolean;
  // is the title for a group of grouped items
  isGroup?: boolean;
  // is a child in a group
  grouped?: boolean;
}
