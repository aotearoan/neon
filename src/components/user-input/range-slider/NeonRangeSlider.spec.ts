import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonRangeSlider from './NeonRangeSlider.vue';

describe('NeonRangeSlider', () => {
  const modelValue = [5, 10];
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonRangeSlider, {
      props: {
        modelValue,
      },
    });
  });

  it('renders enabled', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-range-slider--disabled')).toBeNull();
    expect(container.querySelectorAll('.neon-slider--disabled').length).toEqual(0);
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-range-slider--disabled')).toBeDefined();
    expect(container.querySelectorAll('.neon-slider--disabled').length).toEqual(2);
  });

  it('renders output', async () => {
    // given
    const value = [5000, 10000];
    const { container, rerender } = harness;
    await rerender({ modelValue: value });
    // when / then
    expect(container.querySelector('.neon-range-slider__output-range')?.textContent).toEqual('5,000 : 10,000');
  });

  it('renders output with locale', async () => {
    // given
    const value = [5000, 10000];
    const { container, rerender } = harness;
    await rerender({ modelValue: value, locale: 'de-DE' });
    // when / then
    expect(container.querySelector('.neon-range-slider__output-range')?.textContent).toEqual('5.000 : 10.000');
  });

  it('renders output disabled formatting', async () => {
    // given
    const value = [5000, 10000];
    const { container, rerender } = harness;
    await rerender({ modelValue: value, disableFormatting: true });
    // when / then
    expect(container.querySelector('.neon-range-slider__output-range')?.textContent).toEqual('5000 : 10000');
  });

  it('does not render output', async () => {
    // given
    const value = [5000, 10000];
    const { container, rerender } = harness;
    await rerender({ modelValue: value, output: false });
    // when / then
    expect(container.querySelector('.neon-range-slider__output')).toBeNull();
  });

  it('renders all upper bound', async () => {
    // given
    const value = [10000, 10000];
    const max = 10000;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, max });
    // when / then
    expect(container.querySelector('.neon-range-slider--all-upper-bound')).toBeDefined();
  });

  it('matches snapshot', async () => {
    // given
    const value = [5000, 10000];
    const min = 1000;
    const lowerBound = 2000;
    const max = 50000;
    const upperBound = 49000;
    const step = 100;
    const decimals = 2;
    // eslint-disable-next-line no-template-curly-in-string
    const valueTemplate = '${value}';
    const { html, rerender } = harness;
    await rerender({ modelValue: value, min, max, lowerBound, upperBound, step, decimals, valueTemplate });
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('emits lower change inside bound', async () => {
    // given
    const newValue = 6;
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-range-slider__lower .neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[newValue, modelValue[1]]]);
  });

  it('emits lower change outside bound', async () => {
    // given
    const newValue = 11;
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-range-slider__lower .neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[modelValue[1], modelValue[1]]]);
  });

  it('emits upper change outside bound', async () => {
    // given
    const newValue = 4;
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-range-slider__upper .neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[modelValue[0], modelValue[0]]]);
  });

  it('emits upperBound change inside bound', async () => {
    // given
    const newValue = 6;
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-range-slider__upper .neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[modelValue[0], newValue]]);
  });
});
