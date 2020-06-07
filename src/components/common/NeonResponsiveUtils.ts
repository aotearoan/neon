import { NeonResponsive } from '../layout/grid/NeonResponsive';

export class NeonResponsiveUtils {
  public static readonly breakpoints: Record<NeonResponsive, string> = Object.freeze({
    [NeonResponsive.All]: '', // only use all on it's own, never in combination with other breakpoints
    [NeonResponsive.Desktop]: '(min-width: 1025px)',
    [NeonResponsive.Tablet]: '(max-width: 1024px)',
    [NeonResponsive.LargerThanMobile]: '(min-width: 415px)',
    [NeonResponsive.Mobile]: '(max-width: 414px)',
  });
}
