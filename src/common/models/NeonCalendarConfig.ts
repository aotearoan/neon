import type { NeonDate } from '@/common/models/NeonDate';

export interface NeonCalendarConfig {
  today: NeonDate;
  selected?: NeonDate;
  pageMonth: number;
  pageMonthName: string;
  pageYear: number;
  pageDecadeStart: number;
  dowNames: Array<string>;
  dates: Array<Array<number | null>>;
  lastDayOfMonth: number;
  months: Array<string>;
}
