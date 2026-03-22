/**
 * Model describing a filter item. See <a href="/user-input/filter">NeonFilter</a>.
 */
export interface NeonFilterItem {
  /** Display label for this item. */
  label: string;
  /** Count of items matching this filter option. */
  count: number;
  /** Boolean indicating if this item is selected. */
  selected: boolean;
  /** Boolean indicating if this item is disabled. */
  disabled?: boolean;
}
