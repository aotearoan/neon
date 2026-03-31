/**
 * Utilities for handling HTTP operations such as URL construction and parameter encoding.
 */
export class NeonHttpUtils {
  /**
   * Constructs a URL with query parameters by appending encoded query parameters to a base URL.
   *
   * @param baseUrl The base URL to which query parameters will be appended.
   * @param params Object containing key-value pairs to be encoded as query parameters.
   * Values can be primitives or arrays of primitives which will be joined by commas.
   *
   * @returns A URL with encoded query parameters appended. If there are no parameters, returns the base URL.
   */
  public static urlWithQueryParams(baseUrl: string, params: object = {}) {
    const queryString = NeonHttpUtils.encodeObjectToHttpQueryParams(params);
    return queryString.length > 0 ? `${baseUrl}?${queryString}` : baseUrl;
  }

  /**
   * Encodes an object of key value pairs to a query string
   * @param params - object of key value pairs where the values must either be primitives or a list of primitives which
   * will be joined by commas
   *
   * @returns An encoded query string without the leading '?'
   */
  public static encodeObjectToHttpQueryParams(params: object = {}) {
    return Object.entries(params)
      .filter(
        ([, value]) =>
          value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0),
      )
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${encodeURIComponent(key)}=${value.map((v) => encodeURIComponent(v)).join(',')}`;
        }

        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join('&');
  }
}
