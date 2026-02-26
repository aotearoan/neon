/**
 * Dropdown trigger style for describing the triggering element of dropdowns & selects like:
 * <ul class="no-style">
 *  <li><a href="/user-input/select">NeonSelect</a></li>
 *  <li><a href="/navigation/dropdown-menu">NeonDropdownMenu</a></li>
 *  <li><a href="/presentation/dropdown">NeonDropdown</a></li>
 * </ul>
 */
export enum NeonDropdownStyle {
  /** A <a href="/user-input/button">NeonButton</a> in the solid color style */
  SolidButton = 'solid',
  /** A style similar to <a href="/user-input/input">NeonInput</a> which is used as the default for a
   * <a href="/user-input/select">NeonSelect</a> */
  Input = 'input',
  /** A <a href="/user-input/button">NeonButton</a> in the text style */
  Text = 'text',
  /** A square <a href="/presentation/badge">NeonBadge</a> */
  SquareBadge = 'square-badge',
  /** A circular <a href="/presentation/badge">NeonBadge</a> */
  CircularBadge = 'circular-badge',
}
