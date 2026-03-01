import type { NeonTreeMenuItemModel } from './NeonTreeMenuItemModel';

/**
 * Model defining a <a href="/navigation/tree-menu">NeonTreeMenu</a> section.
 */
export interface NeonTreeMenuSectionModel {
  /** Display label for the menu section. */
  label: string;
  /** Unique key for the menu section. */
  key: string;
  /** optional icon to display alongside the section label. */
  icon?: string;
  /** URL for the menu section's page. */
  href?: string;
  /** Child items of the menu section. */
  children?: NeonTreeMenuItemModel[];
  /** Boolean describing if the menu section is expanded. */
  expanded?: boolean;
  /** Boolean describing if the menu section is disabled. */
  disabled?: boolean;
}
