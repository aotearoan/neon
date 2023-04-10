import { computed, defineComponent, ref, useAttrs } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonDropdown from '@/components/presentation/dropdown/NeonDropdown.vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonInput from '@/components/user-input/input/NeonInput.vue';
import { NeonDateUtils } from '@/common/utils/NeonDateUtils';

/**
 * <strong>NeonDatePicker</strong> is the equivalent of the native
 * <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date" target="_blank">HTML Date Input</a>.
 * It accepts an <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> date string as values &
 * allows the user to select a date. Dates are formatted with the provided locale, if none is provided the browser
 * locale is used as a default. On touch devices the native date picker is presented to the user.
 *
 * This component interaction was inspired by this <a href="https://icehaunter.github.io/vue3-datepicker" target="_blank">vue-datepicker</a>
 */
export default defineComponent({
  name: 'NeonDatePicker',
  components: {
    NeonButton,
    NeonDropdown,
    NeonInput,
  },
  props: {
    /**
     * The selected date. A date string in the
     * <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format.
     */
    modelValue: { type: String, default: null },
    /**
     * The locale used for display purposes. This defaults to the browser's locale if none is provided.
     */
    locale: { type: String, default: null },
    /**
     * Disable date picker
     */
    disabled: { type: Boolean, default: false },
    /**
     * The size of the date picker, one of NeonSize.Small | NeonSize.Medium | NeonSize.Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * Color of the date picker
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Minimum allowed date value in the <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format.
     */
    min: { type: String, default: null },
    /**
     * Maximum allowed date value in the <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format.
     */
    max: { type: String, default: null },
    /**
     * Disabled dates, a list of <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">ISO 8601</a> format
     * dates for which to disable selection.
     */
    disabledDates: { type: Array as () => Array<string>, default: () => [] },
    /**
     * This is the placeholder for the text input when no value is provided.
     */
    placeholder: { type: String, required: false },
    /**
     * This is the label of the input field which opens the calendar. This is technically a button.
     */
    openCalendarLabel: { type: String, default: 'Open calendar' },
    /**
     * This is the label of the 'Done' button in the calendar popup.
     */
    doneLabel: { type: String, default: 'Done' },
    /**
     * This is the label of the 'Clear' button in the calendar popup.
     */
    clearLabel: { type: String, default: 'Clear' },
    /**
     * This is the ARIA label of the 'Change month' button in the calendar popup.
     */
    changeMonthLabel: { type: String, default: 'Change month' },
    /**
     * This is the ARIA label of the 'Previous month' button in the calendar popup.
     */
    previousMonthLabel: { type: String, default: 'Previous month' },
    /**
     * This is the ARIA label of the 'Next month' button in the calendar popup.
     */
    nextMonthLabel: { type: String, default: 'Next month' },
    /**
     * This is the ARIA label of the 'Change year' button in the calendar popup.
     */
    changeYearLabel: { type: String, default: 'Change year' },
    /**
     * This is the ARIA label of the 'Previous year' button in the calendar popup.
     */
    previousYearLabel: { type: String, default: 'Previous year' },
    /**
     * This is the ARIA label of the 'Next year' button in the calendar popup.
     */
    nextYearLabel: { type: String, default: 'Next year' },
    /**
     * This is the ARIA label of the 'Previous decade' button in the calendar popup.
     */
    previousDecadeLabel: { type: String, default: 'Previous decade' },
    /**
     * This is the ARIA label of the 'Next decade' button in the calendar popup.
     */
    nextDecadeLabel: { type: String, default: 'Next decade' },
  },
  setup(props, { emit }) {
    const attrs = useAttrs();
    const optional = !attrs.required;

    const calendarOpen = ref<boolean>(false);
    const monthSelectionOpen = ref<boolean>(false);
    const yearSelectionOpen = ref<boolean>(false);

    const formattedValue = computed(() => {
      if (props.modelValue) {
        const formattedDate = NeonDateUtils.stringToNeonDate(props.modelValue, props.locale);
        if (formattedDate) {
          const { dayFormatted, monthShortName, year } = formattedDate;
          return `${dayFormatted} ${monthShortName} ${year}`;
        }
      }

      return '';
    });

    const isoDate = (year: number, month: number, day: number) => {
      return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
    };

    const todayDate = new Date();
    const locale = props.locale || navigator.language;

    const pageMonth = ref(
      props.modelValue ? +props.modelValue.substring(5, 7) : +todayDate.toLocaleString(locale, { month: 'numeric' }),
    );
    const pageYear = ref(
      props.modelValue ? +props.modelValue.substring(0, 4) : +todayDate.toLocaleString(locale, { year: 'numeric' }),
    );
    const pageDecadeStart = ref(Math.floor(pageYear.value / 10) * 10);

    const calendar = computed(() =>
      NeonDateUtils.toCalendarPage(
        props.modelValue,
        pageMonth.value,
        pageYear.value,
        pageDecadeStart.value,
        props.locale,
      ),
    );

    const today = computed(() => {
      const { year, month, day } = calendar.value.today;
      return isoDate(year, month, day);
    });

    const openCalendar = () => {
      if (!props.disabled) {
        calendarOpen.value = true;
      }
    };

    const emitDate = (newDate: string) => {
      emit('update:modelValue', newDate);
    };

    const onPrevious = () => {
      if (pageMonth.value === 1) {
        pageMonth.value = 12;
        pageYear.value = pageYear.value - 1;
      } else {
        pageMonth.value = pageMonth.value - 1;
      }
    };

    const onNext = () => {
      if (pageMonth.value === 12) {
        pageMonth.value = 1;
        pageYear.value = pageYear.value + 1;
      } else {
        pageMonth.value = pageMonth.value + 1;
      }
    };

    const changeMonth = () => {
      monthSelectionOpen.value = true;
    };

    const isPreviousDisabled = computed(
      () => props.min && props.min >= isoDate(calendar.value.pageYear, calendar.value.pageMonth, 1),
    );
    const isNextDisabled = computed(() => {
      const { pageYear, pageMonth, lastDayOfMonth } = calendar.value;
      return props.max && props.max <= isoDate(pageYear, pageMonth, lastDayOfMonth);
    });
    const isChangeDateDisabled = computed(() => isPreviousDisabled.value && isNextDisabled.value);

    const onPreviousYear = () => {
      pageYear.value = pageYear.value - 1;
    };

    const onNextYear = () => {
      pageYear.value = pageYear.value + 1;
    };

    const changeYear = () => {
      yearSelectionOpen.value = true;
    };

    const isPreviousYearDisabled = computed(() => props.min && props.min >= isoDate(calendar.value.pageYear, 1, 1));
    const isNextYearDisabled = computed(() => props.max && props.max <= isoDate(calendar.value.pageYear, 12, 31));
    const isChangeYearDisabled = computed(() => isPreviousYearDisabled.value && isNextYearDisabled.value);

    const onPreviousDecade = () => {
      pageDecadeStart.value = pageDecadeStart.value - 10;
    };

    const onNextDecade = () => {
      pageDecadeStart.value = pageDecadeStart.value + 10;
    };

    const isPreviousDecadeDisabled = computed(
      () => props.min && props.min >= isoDate(Math.floor(calendar.value.pageYear / 10) * 10, 1, 1),
    );
    const isNextDecadeDisabled = computed(
      () => props.max && props.max <= isoDate(Math.floor(calendar.value.pageYear / 10) * 10 + 9, 12, 31),
    );

    const resetToCalendar = () => {
      monthSelectionOpen.value = false;
      yearSelectionOpen.value = false;
    };

    const done = () => {
      calendarOpen.value = false;
      resetToCalendar();
    };

    const clear = () => {
      emit('update:modelValue', null);
      calendarOpen.value = false;
      resetToCalendar();
    };

    const selectMonth = (month: number) => {
      pageMonth.value = month;
      monthSelectionOpen.value = false;
    };

    const selectYear = (year: number) => {
      pageYear.value = year;
      yearSelectionOpen.value = false;
    };

    const isDisabled = (isoDate: string) => {
      return (
        props.disabledDates?.indexOf(isoDate) >= 0 ||
        (props.min && props.min > isoDate) ||
        (props.max && props.max < isoDate)
      );
    };

    const isMonthDisabled = (year: number, month: number) => {
      const dateStr = `${year}-${month < 10 ? '0' + month : month}`;
      return (
        (minYearMonth.value && minYearMonth.value > dateStr) || (maxYearMonth.value && maxYearMonth.value < dateStr)
      );
    };

    const minYear = computed<number | null>(() => (props.min ? +props.min.substring(0, 4) : null));
    const minYearMonth = computed<string | null>(() => (props.min ? props.min.substring(0, 7) : null));
    const maxYear = computed<number | null>(() => (props.max ? +props.max.substring(0, 4) : null));
    const maxYearMonth = computed<string | null>(() => (props.max ? props.max.substring(0, 7) : null));

    const isYearDisabled = (year: number) => {
      return (minYear.value && minYear.value > year) || (maxYear.value && maxYear.value < year);
    };

    return {
      attrs,
      calendar,
      calendarOpen,
      formattedValue,
      isChangeDateDisabled,
      isChangeYearDisabled,
      isNextDisabled,
      isNextDecadeDisabled,
      isNextYearDisabled,
      isPreviousDisabled,
      isPreviousDecadeDisabled,
      isPreviousYearDisabled,
      monthSelectionOpen,
      optional,
      today,
      yearSelectionOpen,
      changeMonth,
      changeYear,
      clear,
      done,
      emitDate,
      isDisabled,
      isoDate,
      isMonthDisabled,
      isYearDisabled,
      openCalendar,
      onNext,
      onNextDecade,
      onNextYear,
      onPrevious,
      onPreviousDecade,
      onPreviousYear,
      resetToCalendar,
      selectMonth,
      selectYear,
    };
  },
});
