import type { NeonFunctionalColor } from '../enums/NeonFunctionalColor';

/**
 * Model describing a search option.
 */
export interface NeonSearchOption {
  key: string; // NOTE: Also used as the id of the option for accessibility so make sure it's unique on the page.
  label: string;
  chipColor?: NeonFunctionalColor; // When multiple=true this is the color of the input chip displayed when this option is selected.
  icon?: string;
  separatorBefore?: boolean;
}
