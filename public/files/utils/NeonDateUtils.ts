import type { NeonCalendarConfig } from '@/common/models/NeonCalendarConfig';
import type { NeonDate } from '@/common/models/NeonDate';

export class NeonDateUtils {
  /**
   * Convert an ISO 8601 formatted string to a locale formatted date with a three letter month, a 2 digit day and a locale formatted time.
   * @param date The date/time as an <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a> string.
   * @param locale The locale for which to convert the date for display purposes, defaults to browser locale.
   * @param strict Do not add time component to localise the date.
   */
  public static stringToNeonDate(date: string, locale?: string, strict = false): NeonDate {
    const loc = locale || navigator.language;
    const now = new Date();
    const dateObj = new Date(!strict && date.length === 10 ? `${date}T${now.toISOString().split('T')[1]}` : date);
    let time;
    if (date.length > 10) {
      time = dateObj.toLocaleString(
        loc,
        date.length <= 16
          ? { hour12: false, hour: '2-digit', minute: '2-digit' }
          : { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' },
      );
    }

    const result: NeonDate = {
      year: +dateObj.toLocaleString('en-US', { year: 'numeric' }),
      yearFormatted: dateObj.toLocaleString(loc, { year: 'numeric' }),
      month: +dateObj.toLocaleString('en-US', { month: 'numeric' }),
      monthShortName: dateObj.toLocaleString(loc, { month: 'short' }),
      monthLongName: dateObj.toLocaleString(loc, { month: 'long' }),
      day: +dateObj.toLocaleString('en-US', { day: 'numeric' }),
      dayFormatted: dateObj.toLocaleString(loc, { day: '2-digit' }),
    };

    if (time) {
      result.time = time;
    }

    return result;
  }

  public static dateToIso(date: Date, time = false): string {
    const dateString = date.toISOString();
    return time ? dateString : dateString.split('T')[0];
  }

  public static dmyToIso(day: number, month: number, year: number): string {
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

  public static dowNames(locale?: string): Array<string> {
    const loc = locale || navigator.language;
    const date = new Date();

    const weekdays = [];
    while (!weekdays[date.getDay()]) {
      weekdays[date.getDay()] = date.toLocaleString(loc, { weekday: 'short' });
      date.setDate(date.getDate() + 1);
    }

    const sunday = weekdays.shift();
    if (sunday) {
      weekdays.push(sunday);
    }

    return weekdays;
  }

  public static monthNames(locale?: string): Array<string> {
    const loc = locale || navigator.language;

    return Array.from(Array(12).keys()).map((key) => {
      const date = new Date(2023, key, 15);
      return date.toLocaleString(loc, { month: 'short' });
    });
  }

  public static toCalendarConfiguration(
    selectedDate?: string,
    currentPageMonth?: number,
    currentPageYear?: number,
    currentPageDecadeStart?: number,
    locale?: string,
  ): NeonCalendarConfig {
    const loc = locale || navigator.language;
    const today = NeonDateUtils.stringToNeonDate(NeonDateUtils.dateToIso(new Date()), loc);
    const selected = selectedDate ? NeonDateUtils.stringToNeonDate(selectedDate, loc, true) : undefined;
    // month indexed from 1-12
    const pageMonth = currentPageMonth || today.month;

    // month indexed from 0-11
    const pageDate = currentPageMonth && currentPageYear ? new Date(currentPageYear, currentPageMonth - 1, 15) : null;
    const pageMonthName = pageDate?.toLocaleString(loc, { month: 'long' }) || today.monthLongName;
    const pageYear = currentPageYear || today.year;
    const pageDecadeStart = currentPageDecadeStart || Math.floor(pageYear / 10) * 10;

    // determine dow of first day of month. Months are indexed from 0 here
    const date = new Date(pageYear, (pageMonth + 11) % 12, 1);
    const offsetDate = new Date(pageYear, (pageMonth + 11) % 12, 1);
    offsetDate.setDate(offsetDate.getDate() - 1);

    const dates: Array<Array<number | null>> = [];

    let lastDayOfMonth = 1;
    let done = false;

    for (let row = 0; row < 6; row++) {
      dates[row] = [];

      for (let col = 0; col < 7; col++) {
        if (row === 0 && col < offsetDate.getDay()) {
          dates[row][col] = null;
        } else {
          dates[row][col] = date.getDate();
          lastDayOfMonth = date.getDate();
          date.setDate(date.getDate() + 1);

          if (date.getDate() === 1) {
            for (let i = col + 1; i < 7; i++) {
              dates[row][i] = null;
            }
            done = true;
            break;
          }
        }
      }

      if (done) {
        break;
      }
    }

    return {
      today,
      selected,
      pageMonth,
      pageMonthName,
      pageYear,
      pageDecadeStart,
      dowNames: NeonDateUtils.dowNames(loc),
      dates,
      lastDayOfMonth,
      months: NeonDateUtils.monthNames(loc),
    };
  }
}
