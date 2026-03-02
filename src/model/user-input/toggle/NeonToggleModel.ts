/**
 * Model to use with <a href="/user-input/toggle">NeonToggle</a> for defining radio button & toggle control items.
 */
export interface NeonToggleModel {
  /** Unique key of toggle item. */
  key: string;
  /** Display label of toggle item. */
  label?: string;
  /** Icon of toggle item. */
  icon?: string;
  /** Boolean indicating if item is disabled. */
  disabled?: boolean;
}
