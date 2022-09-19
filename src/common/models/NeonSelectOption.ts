/**
 * Model describing a select option.
 */
export interface NeonSelectOption {
  key: string; // NOTE: Also used as the id of the option for accessibility so make sure it's unique on the page.
  label: string;
  icon?: string;
  separatorBefore?: boolean;
  disabled?: boolean;
}
