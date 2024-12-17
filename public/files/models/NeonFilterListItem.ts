/**
 * Model describing a filter list item. See <a href="/user-input/filter-list">NeonFilterList</a>.
 */
export interface NeonFilterListItem {
  /** Unique key identifying this item. */
  key: string;
  /** Display label for this item. */
  label: string;
  /** Count of items matching this filter option. */
  count: number;
  /** Boolean indicating if this item is disabled. */
  disabled?: boolean;
}
