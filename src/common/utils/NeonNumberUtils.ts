import type { NeonNumberFormatOptions } from '../models/NeonNumberFormatOptions';

export class NeonNumberUtils {
  public static parseExample = Intl.NumberFormat([...navigator.languages]).format(1.1);
  public static decimalSeparator = NeonNumberUtils.parseExample.charAt(1);
  public static cleanPattern = new RegExp(`[^-+0-9${NeonNumberUtils.decimalSeparator}]`, 'g');

  public static PercentageFormat = '{value}%';
  public static ValuePlaceholder = '{value}';

  public static formatNumber(value: number, options?: NeonNumberFormatOptions) {
    const formatOptions =
      options && (options.decimals || options.minimumFractionDigits)
        ? {
          minimumFractionDigits: options.decimals || options.minimumFractionDigits,
          maximumFractionDigits: options.decimals,
        }
        : {};
    const formatted = Number(options && options.percentage ? 100 * value : value).toLocaleString(
      undefined,
      formatOptions,
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

  public static parseNumber(value: string) {
    const cleaned = value.replace(NeonNumberUtils.cleanPattern, '');
    const normalized = cleaned.replace(NeonNumberUtils.decimalSeparator, '.');

    return parseFloat(normalized);
  }
}
