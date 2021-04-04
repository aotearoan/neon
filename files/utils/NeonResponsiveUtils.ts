import { NeonResponsive } from '../enums/NeonResponsive';

export class NeonResponsiveUtils {
  public static readonly breakpoints: Record<NeonResponsive, string> = Object.freeze({
    [NeonResponsive.All]: '', // only use all on it's own, never in combination with other breakpoints
    [NeonResponsive.DesktopLarge]: '(min-width: 1440px)',
    [NeonResponsive.Desktop]: '(max-width: 1339px)',
    [NeonResponsive.LargerThanTablet]: '(min-width: 1025px)',
    [NeonResponsive.Tablet]: '(max-width: 1024px)',
    [NeonResponsive.LargerThanMobileLarge]: '(min-width: 600px)',
    [NeonResponsive.MobileLarge]: '(max-width: 599px)',
    [NeonResponsive.LargerThanMobile]: '(min-width: 415px)',
    [NeonResponsive.Mobile]: '(max-width: 414px)',
  });
}
