import type { NeonFunctionalColor } from '../enums/NeonFunctionalColor';

/**
 * Model describing a search option. See <a href="/user-input/search">NeonSearch</a>.
 */
export interface NeonSearchOption {
  /**
   * Unique key for the search option.
   * <br />
   * <br />
   * NOTE: Also used as the id of the option for accessibility so make sure it's unique <strong>on the page</strong>.
   */
  key: string;
  /** Display label for the option. */
  label: string;
  /** Color of the input chip when the option is selected if NeonSearch multiple=true. */
  chipColor?: NeonFunctionalColor;
  /** Icon to be displayed before the label. */
  icon?: string;
  /** Display a separator before the search option in the dropdown. */
  separatorBefore?: boolean;
}
