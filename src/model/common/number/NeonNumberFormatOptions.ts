/**
 * An options object for defining number formatting options for use with
 * <a href="/utils/NeonNumberUtils">NeonNumberUtils</a>.
 */
export interface NeonNumberFormatOptions {
  /** The number of decimals digits to display. */
  decimals?: number;
  /**
   * A display format for the number field. This is a template string with the placeholder <strong>{value}</strong> used
   * for formatting a number value.
   */
  format?: string;
  /** Format the number as a percentage. */
  percentage?: boolean;
  /** Specify a minimum number of decimal digits to display. Equivalent to setting style: 'percent'. */
  minimumFractionDigits?: number;
  /** Defines the style formatting option. See
   * <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options">NumberFormatOption</a>.
   */
  style?: string;
  /** If the style is 'currency', provide the ISO currency code to the formatter. */
  currency?: string;
}
