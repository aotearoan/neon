import type { NeonTreeMenuLinkModel } from './NeonTreeMenuLinkModel';

/**
 * Model defining a <a href="/navigation/tree-menu">NeonTreeMenu</a> section.
 */
export interface NeonTreeMenuSectionModel {
  /** Display label for the menu section. */
  label: string;
  /** Unique key for the menu section. */
  key: string;
  /** URL for the menu section's page. */
  href?: string;
  /** Child links of the menu section. */
  children?: NeonTreeMenuLinkModel[];
  /** Boolean describing if the menu section is expanded. */
  expanded?: boolean;
  /** Boolean describing if the menu section is disabled. */
  disabled?: boolean;
}
