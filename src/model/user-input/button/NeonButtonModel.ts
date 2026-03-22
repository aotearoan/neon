import type { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import type { NeonButtonStyle } from './NeonButtonStyle';

/**
 * Model describing a button
 */
export interface NeonButtonModel {
  /** The button label */
  label?: string;
  /** Button url (renders button as an anchor element) */
  href?: string;
  /** button disabled state */
  disabled?: boolean;
  /** Button icon */
  icon?: string;
  /** Button color */
  color?: NeonFunctionalColor;
  /** Button style */
  style?: NeonButtonStyle;
}
