import type { NeonSelectOption } from './NeonSelectOption';

/**
 * Model describing a select opt-group and it's options.
 */
export interface NeonSelectGroup {
  group: string;
  options: NeonSelectOption[];
}
