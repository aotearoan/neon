/**
 * Corresponds to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types">HTML input
 * types</a> for use with <a href="/user-input/input">NeonInput</a>.
 *
 * NOTE: prefer the specific components for Number, Password, Date, File, Search fields.
 */
export enum NeonInputType {
  /** Date input for selecting dates from a calendar. Use <a href="/user-input/date-picker">NeonDatePicker</a>. */
  Date = 'date',
  /** Date time input for selecting dates including a specific time. */
  DateTime = 'datetime-local',
  /** Email input for entering email addresses. */
  Email = 'email',
  /**
   * File input for opening a file dialog. Use <a href="/user-input/file">NeonDatePicker</a> or
   * <a href="/user-input/drop-zone">NeonDropZone</a>.
   */
  File = 'file',
  /** Number input for entering numeric values. Use <a href="/user-input/number">NeonNumber</a> */
  Number = 'number',
  /** Password input for entering passwords. Use <a href="/user-input/password">NeonPassword</a> */
  Password = 'password',
  /**
   * Range input for a slider control. Use <a href="/user-input/slider">NeonSlider</a> or
   * <a href="/user-input/range-slider">NeonRangeSlider</a>
   */
  Range = 'range',
  /** Search input for searching. Use <a href="/user-input/search">NeonSearch</a> */
  Search = 'search',
  /** Telephone number input. */
  Tel = 'tel',
  /** Text input for single or multiline text input. */
  Text = 'text',
  /** Time input. */
  Time = 'time',
  /** URL input for entering web addresses. */
  Url = 'url',
}
