import type { NeonMenuItem } from './NeonMenuItem';

/**
 * Menu model describing a menu item with children. See <a href="/navigation/menu">NeonMenu</a>.
 */
export interface NeonMenuModel extends NeonMenuItem {
  /** A list of child menu items. */
  children?: NeonMenuItem[];
}
