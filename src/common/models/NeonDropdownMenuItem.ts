/**
 * Model object for a dropdown menu item. See <a href="/navigation/dropdown-menu">NeonDropdownMenu</a>.
 */
export interface NeonDropdownMenuItem {
  /** A unique identifier for the menu item. */
  key: string;
  /** The display value for the menu item. */
  label: string;
  /** The URL if this menu item links to another page or an external URL. */
  href?: string;
  /** The name of an optional icon to be displayed before the label. */
  icon?: string;
  /** Boolean to indicate the display of a separator before this menu item in the dropdown list. */
  separatorBefore?: boolean;
  /** Boolean indicating if this menu item is disabled. */
  disabled?: boolean;
  /**
   * Boolean indicating if this menu item is a group title. If true, all following menu items in the list will be
   * grouped until the next menu item where <strong>isGroup</strong> is true OR the <strong>grouped</strong> flag is false.
   */
  isGroup?: boolean;
  /** Indicates that this menu item is a child of a group. */
  grouped?: boolean;
}
