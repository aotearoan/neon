/**
 * Provides the necessary fields for rendering a card list items as a link. See
 * <a href="/layout/card-list">NeonCardList</a>.
 */
export interface NeonCardListModel {
  /**
   * Used as the key in v-for for the list of cards. If not provided the index is used by default.
   */
  key?: string;
  /**
   * Href to open when the user clicks on this card
   */
  href?: string;
  /**
   * Open href in a new tab (target="_blank")
   */
  targetBlank?: boolean;
  /**
   * Disable the card so it cannot be clicked
   */
  disabled?: boolean;
}
