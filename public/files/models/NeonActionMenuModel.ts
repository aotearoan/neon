/**
 * Model describing an action menu item. For use with <a href="/navigation/action-menu">NeonActionMenu</a>.
 */
export interface NeonActionMenuModel {
  /** Display label of the menu item. */
  label: string;
  /** Key of the menu item - returned by model event (on click). */
  key: string;
  /**
   * Optional count to be displayed with an action menu item. This can be used to indicate the number of items in a
   * category.
   */
  count?: number;
  /** Boolean indicating if this menu item is currently selected. */
  selected?: boolean;
  /** Boolean indicating if this menu item is currently disabled. */
  disabled?: boolean;
}
