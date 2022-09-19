import type { NeonFormattedDate } from '../models/NeonFormattedDate';

export class NeonDateUtils {
  /**
   * Convert an ISO 8601 formatted string to a locale formatted date with a three letter month, a 2 digit day and a locale formatted time.
   * @param date The date/time as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string.
   */
  public static stringToFormattedDate(date?: string): NeonFormattedDate | null {
    if (date) {
      const dateObj = new Date(date);
      if (!isNaN(dateObj.getTime())) {
        let time;
        if (date.length > 10) {
          time = dateObj.toLocaleString(
            undefined,
            date.length <= 16
              ? { hour12: false, hour: '2-digit', minute: '2-digit' }
              : { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' },
          );
        }
        return {
          year: dateObj.getFullYear(),
          month: dateObj.toLocaleString(undefined, { month: 'short' }),
          day: dateObj.toLocaleString(undefined, { day: '2-digit' }),
          time,
        };
      }
    }
    return null;
  }
}
