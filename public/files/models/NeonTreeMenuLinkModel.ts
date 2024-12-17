/**
 * Model defining a <a href="/navigation/tree-menu">NeonTreeMenu</a> link.
 */
export interface NeonTreeMenuLinkModel {
  /** Display label for the menu item. */
  label: string;
  /** Unique key for the menu item. */
  key: string;
  /** URL for the menu item's page. */
  href?: string;
  /** A list of page anchor links. */
  anchors?: string[];
}
