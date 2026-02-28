import { NeonResponsive } from '../enums/NeonResponsive';

/**
 * Responsive media query utilities.
 */
export class NeonResponsiveUtils {
  /**
   * The defined list of Neon responsive breakpoints. This can be used with matchMedia queries in javascript to respond
   * to layout changes.
   */
  public static readonly breakpoints: Record<NeonResponsive, string> = Object.freeze({
    [NeonResponsive.All]: '', // only use all on its own, never in combination with other breakpoints
    [NeonResponsive.DesktopLarge]: '(min-width: 1440px)',
    [NeonResponsive.Desktop]: '(max-width: 1339px)',
    [NeonResponsive.LargerThanTablet]: '(min-width: 1024px)',
    [NeonResponsive.Tablet]: '(max-width: 1023px)',
    [NeonResponsive.LargerThanMobileLarge]: '(min-width: 768px)',
    [NeonResponsive.MobileLarge]: '(max-width: 767px)',
    [NeonResponsive.LargerThanMobile]: '(min-width: 415px)',
    [NeonResponsive.Mobile]: '(max-width: 414px)',
  });
}
