/**
 * Responsive breakpoints defined in Neon. These cover both smaller than & larger than cases for ultimate flexibility in
 * defining responsive styles. See the <a href="/design/responsiveness">responsiveness</a> documentation for more
 * details.
 */
export enum NeonResponsive {
  /**
   * Defines <em>NO</em> breakpoint. This is only used for defining the global <a href="/layout/grid">NeonGrid</a>
   * breakpoint layout.
   */
  All = 'all',
  /** Defines a desktop breakpoint of <strong>max-width: 1439px</strong>. */
  Desktop = 'desktop',
  /** Defines a larger than desktop breakpoint of <strong>min-width: 1440px</strong>. */
  DesktopLarge = 'desktop-large',
  /** Defines a larger than tablet breakpoint of <strong>min-width: 1024px</strong>. */
  LargerThanTablet = 'larger-than-tablet',
  /** Defines a tablet breakpoint of <strong>max-width: 1023px</strong>. */
  Tablet = 'tablet',
  /** Defines a larger than mobile large breakpoint of <strong>min-width: 768px</strong>. */
  LargerThanMobileLarge = 'larger-than-mobile-l',
  /** Defines a large mobile breakpoint of <strong>max-width: 767px</strong>. */
  MobileLarge = 'mobile-large',
  /** Defines a larger than mobile breakpoint of <strong>min-width: 415px</strong>. */
  LargerThanMobile = 'larger-than-mobile',
  /** Defines a mobile breakpoint of <strong>max-width: 414px</strong>. */
  Mobile = 'mobile',
}
