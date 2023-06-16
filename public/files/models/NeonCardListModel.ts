/**
 * Provides the necessary fields for rendering card list items as links.
 */
export interface NeonCardListModel {
  /**
   * Used as the key in v-for for the list of cards. If not provided the index is used by default.
   */
  key?: string;
  /**
   * href to open when the user clicks on this card
   */
  href?: string;
  /**
   * open href in a new tab (target="_blank")
   */
  targetBlank?: boolean;
  /**
   * disable the card so it cannot be clicked
   */
  disabled?: boolean;
}
