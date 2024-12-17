/**
 * Describes the different <a href="/user-input/button">NeonButton</a> styles.
 */
export enum NeonButtonStyle {
  /** Solid buttons are solid color buttons. Use these for primary or secondary actions (usually low contrast color). */
  Solid = 'solid',
  /**
   * Outline buttons appear with a border & no background color. Outline buttons should be used for secondary actions
   * or alternate actions outside the main flow to minimise distraction for the user.
   */
  Outline = 'outline',
  /**
   * Text buttons appear as text without a background. Text buttons are usually used for icons buttons or secondary
   * actions.
   */
  Text = 'text',
}
