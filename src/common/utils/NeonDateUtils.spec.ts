import { NeonDateUtils } from '@/common/utils/NeonDateUtils';

describe('NeonDateUtils', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-03-16T12:12:12Z'));
  });

  afterEach(() => {
    jest.useFakeTimers().clearAllTimers();
  });

  it('converts a string to a NeonDate', () => {
    expect(NeonDateUtils.stringToNeonDate('2023-01-01T12:12:12Z')).toEqual({
      day: 1,
      dayFormatted: '01',
      month: 1,
      monthLongName: 'January',
      monthShortName: 'Jan',
      time: '12:12:12',
      year: 2023,
      yearFormatted: '2023',
    });
  });

  it('converts a string to a NeonDate, date only', () => {
    expect(NeonDateUtils.stringToNeonDate('2023-01-01')).toEqual({
      day: 1,
      dayFormatted: '01',
      month: 1,
      monthLongName: 'January',
      monthShortName: 'Jan',
      year: 2023,
      yearFormatted: '2023',
    });
  });

  it('converts a string to a NeonDate, no seconds', () => {
    expect(NeonDateUtils.stringToNeonDate('2023-01-01T12:12')).toEqual({
      day: 1,
      dayFormatted: '01',
      month: 1,
      monthLongName: 'January',
      monthShortName: 'Jan',
      time: '12:12',
      year: 2023,
      yearFormatted: '2023',
    });
  });

  it('date to iso', () => {
    expect(NeonDateUtils.dateToIso(new Date('2023-02-01'))).toEqual('2023-02-01');
  });

  it('date to iso with time', () => {
    expect(NeonDateUtils.dateToIso(new Date('2023-02-01T12:12:12Z'), true)).toEqual('2023-02-01T12:12:12.000Z');
  });

  it('dmy to iso', () => {
    expect(NeonDateUtils.dmyToIso(17, 11, 2023)).toEqual('2023-11-17');
    expect(NeonDateUtils.dmyToIso(7, 2, 2023)).toEqual('2023-02-07');
  });

  it('generates dowNames', () => {
    expect(NeonDateUtils.dowNames('es-AR')).toEqual(['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom']);
  });

  it('generates dowNames missing locale', () => {
    expect(NeonDateUtils.dowNames()).toEqual(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  });

  it('generates monthNames', () => {
    expect(NeonDateUtils.monthNames('es-AR')).toEqual([
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sept',
      'oct',
      'nov',
      'dic',
    ]);
  });

  it('generates monthNames missing locale', () => {
    expect(NeonDateUtils.monthNames()).toEqual([
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]);
  });

  it('generates calendar configs', () => {
    expect(NeonDateUtils.toCalendarConfiguration()).toEqual({
      dates: [
        [null, null, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, null, null],
      ],
      dowNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      lastDayOfMonth: 31,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      pageDecadeStart: 2020,
      pageMonth: 3,
      pageMonthName: 'March',
      pageYear: 2023,
      today: {
        day: 16,
        dayFormatted: '16',
        month: 3,
        monthLongName: 'March',
        monthShortName: 'Mar',
        year: 2023,
        yearFormatted: '2023',
      },
    });
  });

  it('generates calendar configs with selected date', () => {
    expect(NeonDateUtils.toCalendarConfiguration('2023-03-18', 3, 2023)).toEqual({
      dates: [
        [null, null, 1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10, 11, 12],
        [13, 14, 15, 16, 17, 18, 19],
        [20, 21, 22, 23, 24, 25, 26],
        [27, 28, 29, 30, 31, null, null],
      ],
      dowNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      lastDayOfMonth: 31,
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      pageDecadeStart: 2020,
      pageMonth: 3,
      pageMonthName: 'March',
      pageYear: 2023,
      selected: {
        day: 18,
        dayFormatted: '18',
        month: 3,
        monthLongName: 'March',
        monthShortName: 'Mar',
        year: 2023,
        yearFormatted: '2023',
      },
      today: {
        day: 16,
        dayFormatted: '16',
        month: 3,
        monthLongName: 'March',
        monthShortName: 'Mar',
        year: 2023,
        yearFormatted: '2023',
      },
    });
  });
});
