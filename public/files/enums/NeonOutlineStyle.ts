/**
 * Describes the different outline accessibility styles available in Neon. These are displayed when the component has
 * focus. Generally these are internal use only with defaults provided for all interactive components. However, this can
 * be provided for the <a href="/navigation/link">NeonLink</a> & <a href="/feedback/tooltip">NeonTooltip</a> components
 * to override the default when desired.
 */
export enum NeonOutlineStyle {
  /** No outline style is displayed */
  None = 'none',
  /** Apply an underline, usually used for text, e.g. links */
  Text = 'text',
  /** Apply an outline border */
  Border = 'border',
  /** Apply a background color */
  Background = 'background',
  /** Apply a bullet point */
  Bullet = 'bullet',
}
