/**
 * Date model object for use with the <a href="/user-input/date-picker">NeonDatePicker</a> &
 * <a href="/utils/NeonDateUtils">NeonDateUtils</a>.
 */
export interface NeonDate {
  /** Numeric year value of the date. */
  year: number;
  /** Year value of the date formatted as a string in the provided locale. */
  yearFormatted: string;
  /** Numeric month value of the date. In the range 1-12. */
  month: number;
  /** Month short name for the provided locale. */
  monthShortName: string;
  /** Month long name for the provided locale. */
  monthLongName: string;
  /** Numeric day of the month for the given date. */
  day: number;
  /** Day of the month formatted as a string in the given locale. */
  dayFormatted: string;
  /** Time string in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601 format</a>. */
  time?: string;
  /** Time string in the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO-8601 format</a> without seconds. */
  timeShort?: string;
}
