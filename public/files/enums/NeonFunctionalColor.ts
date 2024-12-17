/**
 * The core color palettes available for styling components in Neon. See the design section
 * <a href="/design/color">Color</a> page for more details on color palettes.
 */
export enum NeonFunctionalColor {
  /** Low contrast is a more subtle neutral palette which can be used for secondary actions & supporting text. */
  LowContrast = 'low-contrast',
  /** Neutral is the base greyscale palette. */
  Neutral = 'neutral',
  /**
   * High contrast is a higher contrast palette than can be used for increased accessibility or for a stronger black &
   * white application.
   * */
  HighContrast = 'high-contrast',
  /** Brand is the main brand color palette, this is useful for branded CTAs, text & controls. */
  Brand = 'brand',
  /** Primary is the main application color palette. For most applications this will be used by default. */
  Primary = 'primary',
  /** Info can be used to convey informational context, e.g. notes & alerts */
  Info = 'info',
  /** Success can be used to convey successful actions. */
  Success = 'success',
  /** Warn can be used to convey issues/actions that are less severe but may still impact the user. */
  Warn = 'warn',
  /** Error can be used to convey issues/actions that are severe & that the user may not be able to recover from. */
  Error = 'error',
}
