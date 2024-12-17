import type { NeonDate } from '@/common/models/NeonDate';

/**
 * Model describing calendar state, used internally with <a href="/utils/NeonDateUtils">NeonDateUtils</a> for driving
 * the <a href="/user-input/date-picker">NeonDatePicker</a> popup.
 */
export interface NeonCalendarConfig {
  /** The current date */
  today: NeonDate;
  /** The currently selected date */
  selected?: NeonDate;
  /** The numeric month of the current calendar page (1-12) */
  pageMonth: number;
  /**
   * The full name of the month of the current calendar page. This is in the provided locale, if no locale is provided
   * the browser default is used.
   */
  pageMonthName: string;
  /** The year of the current calendar page */
  pageYear: number;
  /** The decade starting year of the current calendar page. This will always be a 'zero' year e.g. 2020. */
  pageDecadeStart: number;
  /**
   * Short names for the days of the week from Mon-Sun. These values are in the provided locale, if no locale is
   * provided the browser default is used.
   */
  dowNames: Array<string>;
  /**
   * A two-dimensional array of calendar dates for the currently selected month. These are offset to match the days of
   * the week with Monday representing the first column. Nulls are placed in any empty positions.
   * <br /><br />
   * E.g. for August 2023:
   * <pre>
   * [
   *   [null, 1, 2, 3, 4, 5, 6],
   *   [7, 8, 9, 10, 11, 12, 13],
   *   [14, 15, 16, 17, 18, 19, 20],
   *   [21, 22, 23, 24, 25, 26, 27],
   *   [28, 29, 30, 31, null, null, null],
   * ]
   * </pre>
   * */
  dates: Array<Array<number | null>>;
  /** The date of the last day of the currently selected month. */
  lastDayOfMonth: number;
  /**
   * Short names for the months. These values are in the provided locale, if no locale is provided the browser default
   * is used.
   */
  months: Array<string>;
}
