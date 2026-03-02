/**
 * Used internally in conjunction with the palette generation tools when calculating color accessibility. See
 * <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">WCAG contrast</a> documentation.
 */
export interface NeonContrastAccessibility {
  /** Boolean indicating if the element has a contrast ratio meeting the AA standard for normal-sized text. */
  normalAA: boolean;
  /** Boolean indicating if the element has a contrast ratio meeting the AAA standard for normal-sized text. */
  normalAAA: boolean;
  /** Boolean indicating if the element has a contrast ratio meeting the AA standard for large text. */
  largeAA: boolean;
  /** Boolean indicating if the element has a contrast ratio meeting the AAA standard for large text. */
  largeAAA: boolean;
  /**
   * Calculated contrast ratio between a foreground (e.g. text) & background color.
   */
  ratio: number;
}
