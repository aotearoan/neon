/**
 * For use with NeonCardList, this model represents the details required for adding a pagination component.
 */
export interface NeonLoadOnDemandModel {
  /**
   * The total item count of records including those not displayed. This is used to display the 'x' of 'y'
   * text.
   */
  total: number;
  /**
   * override the default 'x of y' text.
   */
  ofLabel?: string;
  /**
   * override the 'Show more' text.
   */
  showMoreLabel?: string;
  /**
   * override the 'End of results' text.
   */
  endOfResultsLabel?: string;
}
