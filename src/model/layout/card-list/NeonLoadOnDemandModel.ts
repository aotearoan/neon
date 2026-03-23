/**
 * For use with NeonCardList, this model represents the details required for adding a pagination component.
 */
export interface NeonLoadOnDemandModel {
  /**
   * The total item count of records including those not displayed. This is used to display the 'Showing x of y'
   * text.
   */
  total: number;
  /**
   * override the default 'Showing x of y' text.
   */
  resultCountLabel?: string;
  /**
   * override the 'Load more' text.
   */
  showMoreLabel?: string;
}
