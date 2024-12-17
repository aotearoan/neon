import type { NeonNumberFormatOptions } from '../models/NeonNumberFormatOptions';

/**
 * Utilities for helping with number formatting.
 */
export class NeonNumberUtils {
  private static parseExample = Intl.NumberFormat([...navigator.languages]).format(1.1);
  private static decimalSeparator = NeonNumberUtils.parseExample.charAt(1);
  private static cleanPattern = new RegExp(`[^-+0-9${NeonNumberUtils.decimalSeparator}]`, 'g');

  private static valuePlaceholder = '{value}';
  private static percentageFormat = `${NeonNumberUtils.valuePlaceholder}%`;

  /**
   * Format a number for a provided locale.
   *
   * @param value Number to format.
   * @param options formatting options.
   * @param locale The user's locale.
   *
   * @returns The formatted number as a string.
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
        return options.format.replace(NeonNumberUtils.valuePlaceholder, formatted);
      } else if (options.percentage) {
        return NeonNumberUtils.percentageFormat.replace(NeonNumberUtils.valuePlaceholder, formatted);
      }
    }

    return formatted;
  }

  /**
   * Parse a number string, removing formatting & returning the numeric value.
   *
   * @param value The number string to parse.
   *
   * @returns The parsed number.
   */
  public static parseNumber(value: string) {
    const cleaned = value.replace(NeonNumberUtils.cleanPattern, '');
    const normalized = cleaned.replace(NeonNumberUtils.decimalSeparator, '.');

    return parseFloat(normalized);
  }
}
