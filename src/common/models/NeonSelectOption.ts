/**
 * Model describing a select option. See <a href="/user-input/select">NeonSelect</a>.
 */
export interface NeonSelectOption {
  /**
   * Unique key for the search option.
   * <br />
   * <br />
   * NOTE: Also used as the id of the option for accessibility so make sure it's unique on the page.
   */
  key: string;
  /** Display label for the option. */
  label: string;
  /** Icon to be displayed before the label. */
  icon?: string;
  /** Boolean indicating if a separator should be displayed before this option. */
  separatorBefore?: boolean;
  /** Boolean indicating if the option is disabled. */
  disabled?: boolean;
}
