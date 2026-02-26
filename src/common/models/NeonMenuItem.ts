/**
 * Model describing a menu item. See <a href="/navigation/menu">NeonMenu</a>.
 */
export interface NeonMenuItem {
  /** Unique identifier for this menu item. */
  key: string;
  /** Display label for this menu item. Must either provide a label, icon or both. */
  label?: string;
  /** URL of a link to open when the menu item is triggered. */
  href?: string;
  /** Name of an icon to display before the label. */
  icon?: string;
  /** Boolean indicating if the menu item is disabled. */
  disabled?: boolean;
}
