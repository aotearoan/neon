import type { NeonSelectOption } from './NeonSelectOption';

/**
 * Model describing a select opt-group and it's options. See <a href="/user-input/select">NeonSelect</a>.
 */
export interface NeonSelectGroup {
  /** The display label of the group. */
  group: string;
  /** The options belonging to the group. */
  options: NeonSelectOption[];
}
