/**
 * For use with NeonCardList, this model represents the details required for adding a pagination component.
 */
export interface NeonPaginationModel {
  /**
   * The current page number.
   */
  page: number;
  /**
   * The total number of items.
   */
  total: number;
  /**
   * The URL template for the pagination links. The template should contain a '{page}' placeholder that will be
   * substituted in links with the correct page number.
   */
  urlTemplate: string;
  /**
   * The number of items per page. Default is 20.
   */
  pageSize?: number;
  /**
   * Whether to display links to the first and last pages.
   */
  displayFirstAndLast?: boolean;
}
