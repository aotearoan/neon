/**
 * Describes the supported <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode">HTML
 * input modes</a> that can be used with
 * <a href="/user-input/input">NeonInput</a> & <a href="/user-input/number">NeonNumber</a>. This is used primarily for
 * triggering keyboard context on mobile devices.
 */
export enum NeonInputMode {
  /** The default - no context is provided. */
  None = 'none',
  /** The text mode. Opens a text keyboard. */
  Text = 'text',
  /** The decimal mode. Opens a numeric keyboard for decimal input. */
  Decimal = 'decimal',
  /** The numeric mode. Opens a numeric keyboard for numeric input. */
  Numeric = 'numeric',
  /** The telephone mode. Allows the mobile device to provide recent numbers / phone number search. */
  Tel = 'tel',
  /** The search mode. Allows the mobile device to provide a keyboard optimised for search. */
  Search = 'search',
  /**
   * The email mode. Allows the mobile device to provide an email optimised keyboard with email suggestions /
   * autocompletion.
   * */
  Email = 'email',
  /**
   * The url mode. Allows the mobile device to provide a URL optimised keyboard.
   * */
  Url = 'url',
}
