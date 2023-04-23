/**
 * Model describing a filter list item.
 */
export interface NeonFilterListItem {
  key: string;
  label: string;
  count: number;
  disabled?: boolean;
}
