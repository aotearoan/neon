import type { NeonIdentifiable } from '@/common/models/NeonIdentifiable';

/**
 * Provides the necessary fields for rendering a card list items as a link. See
 * <a href="/layout/card-list">NeonCardList</a>.
 */
export interface NeonCardListModel<T extends NeonIdentifiable> {
  model: T;
  /**
   * href to open when the user clicks on this card.
   */
  href?: string;
  /**
   * Disable the card so it cannot be interacted with.
   */
  disabled?: boolean;
}
