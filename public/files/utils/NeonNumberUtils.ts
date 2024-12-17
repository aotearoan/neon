import type { NeonNumberFormatOptions } from '../models/NeonNumberFormatOptions';

/**
 * Utilities for helping with number formatting.
 */
export class NeonNumberUtils {
  public static parseExample = Intl.NumberFormat([...navigator.languages]).format(1.1);
  public static decimalSeparator = NeonNumberUtils.parseExample.charAt(1);
  public static cleanPattern = new RegExp(`[^-+0-9${NeonNumberUtils.decimalSeparator}]`, 'g');

  public static PercentageFormat = '{value}%';
  public static ValuePlaceholder = '{value}';

  /**
   * Format a number for a provided locale.
   *
   * @param value {number} Number to format.
   * @param options {NeonNumberFormatOptions} formatting options.
   * @param locale {string} The user's locale.
   *
   * @returns {string} The formatted number as a string.
   */
  public static formatNumber(value: number, options?: NeonNumberFormatOptions, locale?: string | null) {
    const formatOptions =
      options && (options.decimals || options.minimumFractionDigits || options.style || options.currency)
        ? {
            minimumFractionDigits: options.decimals || options.minimumFractionDigits,
            maximumFractionDigits: options.decimals,
            style: options.style,
            currency: options.currency,
          }
        : {};
    const formatted = Number(options && options.percentage ? 100 * value : value).toLocaleString(
      locale || navigator.language,
      formatOptions as Intl.NumberFormatOptions,
    );

    if (options) {
      if (options.format) {
        return options.format.replace(NeonNumberUtils.ValuePlaceholder, formatted);
      } else if (options.percentage) {
        return NeonNumberUtils.PercentageFormat.replace(NeonNumberUtils.ValuePlaceholder, formatted);
      }
    }

    return formatted;
  }

  /**
   * Parse a number string, removing formatting & returning the numeric value.
   *
   * @param value {string} The number string to parse.
   *
   * @returns {number} The parsed number.
   */
  public static parseNumber(value: string) {
    const cleaned = value.replace(NeonNumberUtils.cleanPattern, '');
    const normalized = cleaned.replace(NeonNumberUtils.decimalSeparator, '.');

    return parseFloat(normalized);
  }
}
