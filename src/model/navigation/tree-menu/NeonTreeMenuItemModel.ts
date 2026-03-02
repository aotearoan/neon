import type { NeonTreeMenuSubMenuModel } from './NeonTreeMenuSubMenuModel';

/**
 * Model defining a <a href="/navigation/tree-menu">NeonTreeMenu</a> item.
 */
export interface NeonTreeMenuItemModel {
  /** Display label for the menu item. */
  label: string;
  /** Unique key for the menu item. */
  key: string;
  /** URL for the menu item's page. */
  href?: string;
  /** Expanded state of the menu item. */
  expanded?: boolean;
  /** A list of page sub menu items */
  subMenu?: NeonTreeMenuSubMenuModel[];
}
