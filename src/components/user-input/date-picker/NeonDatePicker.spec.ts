import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonDatePicker from './NeonDatePicker.vue';
import { NeonDateUtils } from '@/common/utils/NeonDateUtils';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';

describe('NeonDatePicker', () => {
  const date = new Date(2023, 3, 16);
  let harness: RenderResult;

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2023-03-16'));

    harness = render(NeonDatePicker, {
      props: { modelValue: NeonDateUtils.dateToIso(date) },
    });
  });

  afterEach(() => {
    jest.useFakeTimers().clearAllTimers();
  });

  it('renders closed', () => {
    const { html } = harness;
    expect(html()).toMatchSnapshot();
  });

  it('renders open', async () => {
    const { container, html } = harness;

    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    expect(html()).toMatchSnapshot();
  });

  it('renders with locale', async () => {
    const { container, html, rerender } = harness;

    await rerender({ locale: 'de-DE' });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    expect(html()).toMatchSnapshot();
  });

  it('renders with defaults of today', async () => {
    const { container, html } = render(NeonDatePicker, {
      props: { modelValue: null },
    });

    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    expect(html()).toMatchSnapshot();
  });

  it('emits date', async () => {
    // given
    const { container, emitted } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const dateButton = container.querySelectorAll('.neon-date-picker__calendar-date')[30] as HTMLButtonElement;
    await fireEvent.click(dateButton);
    // then
    expect(emitted()['update:modelValue']).toEqual([['2023-03-29']]);
  });

  it('clears date', async () => {
    // given
    const { container, emitted } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const clearButton = container.querySelector('.neon-date-picker__calendar-clear-button') as HTMLButtonElement;
    await fireEvent.click(clearButton);
    // then
    expect(emitted()['update:modelValue']).toEqual([[null]]);
  });

  it('closes popup', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const doneButton = container.querySelector('.neon-date-picker__calendar-done-button') as HTMLButtonElement;
    await fireEvent.click(doneButton);
    // then
    expect(container.querySelector('.neon-date-picker--open')).toBeNull();
  });

  it('does not open popup when disabled', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: { disabled: true },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // then
    expect(container.querySelector('.neon-date-picker--open')).toBeNull();
  });

  it('displays list of months when clicking change date', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // then
    expect(container.querySelectorAll('.neon-date-picker__calendar-option').length).toEqual(12);
  });

  it('displays list of years when clicking change year', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // when
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // then
    expect(container.querySelectorAll('.neon-date-picker__calendar-option').length).toEqual(10);
  });

  it('navigates to previous decade', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // when
    const previousDecadeButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    await fireEvent.click(previousDecadeButton);
    // then
    expect(container.querySelector('.neon-date-picker__calendar-title-readonly')?.textContent).toEqual('2010–2019');
  });

  it('navigates to next decade', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // when
    const nextDecadeButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    await fireEvent.click(nextDecadeButton);
    // then
    expect(container.querySelector('.neon-date-picker__calendar-title-readonly')?.textContent).toEqual('2030–2039');
  });

  it('selects year', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // when
    const yearButton = container.querySelectorAll('.neon-date-picker__calendar-option')[6] as HTMLButtonElement;
    await fireEvent.click(yearButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('2026');
  });

  it('navigates to previous year', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // when
    const previousYearButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    await fireEvent.click(previousYearButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('2022');
  });

  it('navigates to next year', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // when
    const nextYearButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    await fireEvent.click(nextYearButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('2024');
  });

  it('selects month', async () => {
    // given
    const { container } = harness;
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // when
    const monthButton = container.querySelectorAll('.neon-date-picker__calendar-option')[10] as HTMLButtonElement;
    await fireEvent.click(monthButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('November 2023');
  });

  it('navigates to previous month', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const previousMonthButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    await fireEvent.click(previousMonthButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('February 2023');
  });

  it('navigates to previous month - start of year', async () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2023-01-16'));
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const previousMonthButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    await fireEvent.click(previousMonthButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('December 2022');
  });

  it('navigates to next month', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const nextMonthButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    await fireEvent.click(nextMonthButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('April 2023');
  });

  it('navigates to next month - end of year', async () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2023-12-16'));
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // when
    const nextMonthButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    await fireEvent.click(nextMonthButton);
    // then
    expect(
      container.querySelector('.neon-date-picker__calendar-header-title .neon-button__label')?.textContent,
    ).toEqual('January 2024');
  });

  it('renders default color', () => {
    const { container } = harness;

    expect(container.querySelector('.neon-date-picker--primary')).toBeDefined();
  });

  it('renders color', async () => {
    const { container, rerender } = harness;

    await rerender({ color: NeonFunctionalColor.Brand });
    expect(container.querySelector('.neon-date-picker--brand')).toBeDefined();
  });

  it('renders default size', () => {
    const { container } = harness;

    expect(container.querySelector('.neon-date-picker--m')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;

    await rerender({ size: NeonSize.Small });
    expect(container.querySelector('.neon-date-picker--s')).toBeDefined();
  });

  it('disables select dates', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null, disabledDates: ['2023-03-29'] },
    });
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // then
    const dateButton = container.querySelector('.neon-date-picker__calendar-date--disabled') as HTMLButtonElement;
    expect(dateButton.textContent).toEqual('29');
    expect(dateButton.disabled).toEqual(true);
  });

  it('renders placeholder', async () => {
    // given
    const placeholder = 'XD';
    const { container } = render(NeonDatePicker, {
      props: { modelValue: null, placeholder },
    });
    expect((container.querySelector('.neon-input__text') as HTMLInputElement).placeholder).toEqual(placeholder);
  });

  it('renders change month replacement strings', () => {
    // given
    const { html } = render(NeonDatePicker, {
      props: {
        openCalendarLabel: 'string 1',
        doneLabel: 'string 2',
        clearLabel: 'string 3',
        changeMonthLabel: 'string 4',
        previousMonthLabel: 'string 5',
        nextMonthLabel: 'string 6',
      },
    });
    expect(html()).toMatchSnapshot();
  });

  it('renders change year replacement strings', async () => {
    // given
    const { container, html } = render(NeonDatePicker, {
      props: {
        changeYearLabel: 'string 7',
        previousYearLabel: 'string 8',
        nextYearLabel: 'string 9',
      },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // then
    expect(html()).toMatchSnapshot();
  });

  it('renders change decade replacement strings', async () => {
    // given
    const { container, html } = render(NeonDatePicker, {
      props: {
        previousDecadeLabel: 'string 10',
        nextDecadeLabel: 'string 11',
      },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // then
    expect(html()).toMatchSnapshot();
  });

  it('disables previous/next decade buttons & year selection', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: {
        modelValue: null,
        min: '2022-01-01',
        max: '2025-01-01',
      },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    const changeYearButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeYearButton);
    // then
    const previousDecadeButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    expect(previousDecadeButton.disabled).toEqual(true);
    const nextDecadeButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    expect(nextDecadeButton.disabled).toEqual(true);
    expect(container.querySelectorAll('.neon-date-picker__calendar-option--disabled').length).toEqual(6);
  });

  it('disables previous/next/change year buttons & month selection', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: {
        modelValue: null,
        min: '2023-02-01',
        max: '2023-07-31',
      },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    const changeDateButton = container.querySelector('.neon-date-picker__calendar-header-title') as HTMLButtonElement;
    await fireEvent.click(changeDateButton);
    // then
    const previousDecadeButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    expect(previousDecadeButton.disabled).toEqual(true);
    const nextDecadeButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    expect(nextDecadeButton.disabled).toEqual(true);
    expect(container.querySelector('.neon-date-picker__calendar-title-readonly')).toBeDefined();
    expect(container.querySelectorAll('.neon-date-picker__calendar-option--disabled').length).toEqual(6);
  });

  it('disables previous/next/change month buttons & date selection', async () => {
    // given
    const { container } = render(NeonDatePicker, {
      props: {
        modelValue: null,
        min: '2023-03-05',
        max: '2023-03-22',
      },
    });
    // when
    const trigger = container.querySelector('.neon-date-picker__button-click-capture') as HTMLInputElement;
    await fireEvent.click(trigger);
    // then
    const previousDecadeButton = container.querySelector('.neon-date-picker__previous-button') as HTMLButtonElement;
    expect(previousDecadeButton.disabled).toEqual(true);
    const nextDecadeButton = container.querySelector('.neon-date-picker__next-button') as HTMLButtonElement;
    expect(nextDecadeButton.disabled).toEqual(true);
    expect(container.querySelector('.neon-date-picker__calendar-title-readonly')).toBeDefined();
    expect(container.querySelectorAll('.neon-date-picker__calendar-date--disabled').length).toEqual(13);
  });
});
