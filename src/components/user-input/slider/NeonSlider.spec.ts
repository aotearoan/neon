import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonSlider from './NeonSlider.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonSlider', () => {
  const modelValue = 5;
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonSlider, {
      props: {
        modelValue,
      },
    });
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-slider--low-contrast')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });
    // when / then
    expect(container.querySelector('.neon-slider--primary')).toBeDefined();
  });

  it('renders legend', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-slider--no-legend')).toBeNull();
    expect(container.querySelector('.neon-slider__legend')).toBeDefined();
  });

  it('does not render legend', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ legend: false });
    // when / then
    expect(container.querySelector('.neon-slider--no-legend')).toBeDefined();
    expect(container.querySelector('.neon-slider__legend')).toBeNull();
  });

  it('renders output', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-slider__output')).toBeDefined();
  });

  it('does not render output', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ output: false });
    // when / then
    expect(container.querySelector('.neon-slider__output')).toBeNull();
  });

  it('renders tooltip', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-slider__tooltip')).toBeDefined();
  });

  it('does not render tooltip', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ tooltip: false });
    // when / then
    expect(container.querySelector('.neon-slider__tooltip')).toBeNull();
  });

  it('renders enabled', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-slider--disabled')).toBeNull();
    expect((container.querySelector('.neon-slider__input') as HTMLInputElement)?.disabled).toEqual(false);
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-slider--disabled')).toBeDefined();
    expect((container.querySelector('.neon-slider__input') as HTMLInputElement)?.disabled).toEqual(true);
  });

  it('renders id', async () => {
    // given
    const id = 'lol';
    const { container, rerender } = harness;
    await rerender({ id });
    // when / then
    expect(container.querySelector('.neon-slider__input')?.getAttribute('id')).toEqual(id);
    expect(container.querySelector('.neon-slider__output')?.getAttribute('for')).toEqual(id);
    expect(container.querySelector('.neon-slider__tooltip')?.getAttribute('for')).toEqual(id);
  });

  it('renders value, min max', async () => {
    // given
    const min = 1;
    const max = 42;
    const { container, rerender } = harness;
    await rerender({ min, max });
    // when / then
    expect(container.querySelector('.neon-slider')?.getAttribute('style')).toEqual(
      `--min: ${min}; --max: ${max}; --val: ${modelValue};`,
    );
  });

  it('renders formatted output', async () => {
    // given
    const value = 5000.05;
    const { container, rerender } = harness;
    await rerender({ modelValue: value });
    // when / then
    expect(container.querySelector('.neon-slider__output')?.textContent).toEqual('5,000.05');
  });

  it('renders formatted tooltip', async () => {
    // given
    const value = 5000.05;
    const { container, rerender } = harness;
    await rerender({ modelValue: value });
    // when / then
    expect(container.querySelector('.neon-slider__tooltip')?.textContent).toEqual('5,000.05');
  });

  it('renders formatted tooltip disabled formatting', async () => {
    // given
    const value = 5000.05;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, disableFormatting: true });
    // when / then
    expect(container.querySelector('.neon-slider__tooltip')?.textContent).toEqual(`${value}`);
  });

  it('renders formatted tooltip percentage with decimals', async () => {
    // given
    const value = 0.42355;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, percentage: true, decimals: 2 });

    // when / then
    expect(container.querySelector('.neon-slider__tooltip')?.textContent).toEqual('42.36%');
  });

  it('renders formatted tooltip with template', async () => {
    // given
    const value = 42.355;
    const { container, rerender } = harness;
    // eslint-disable-next-line no-template-curly-in-string
    await rerender({ modelValue: value, valueTemplate: '${value}', decimals: 2 });
    // when / then
    expect(container.querySelector('.neon-slider__tooltip')?.textContent).toEqual('$42.36');
  });

  it('renders formatted min/max', async () => {
    // given
    const value = 5000;
    const min = 1000;
    const max = 99000;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, min, max });
    // when / then
    expect(container.querySelector('.neon-slider__legend .neon-slider__legend-item:first-child')?.textContent).toEqual(
      '1,000',
    );
    expect(container.querySelector('.neon-slider__legend .neon-slider__legend-item:last-child')?.textContent).toEqual(
      '99,000',
    );
  });

  it('renders input attributes', async () => {
    // given
    const value = 5000;
    const min = 1000;
    const max = 99000;
    const step = 10;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, min, max, step });

    // when / then
    const input = container.querySelector('.neon-slider__input');
    expect((input as HTMLInputElement)?.value).toEqual('5000');
    expect(input?.getAttribute('aria-valuenow')).toEqual('5000');
    expect(input?.getAttribute('min')).toEqual('1000');
    expect(input?.getAttribute('aria-valuemin')).toEqual('1000');
    expect(input?.getAttribute('max')).toEqual('99000');
    expect(input?.getAttribute('aria-valuemax')).toEqual('99000');
    expect(input?.getAttribute('step')).toEqual('10');
  });

  it('emits value change', async () => {
    // given
    const newValue = 6;
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([newValue]);
  });

  it('emits value change with lower bound', async () => {
    // given
    const newValue = 1;
    const lowerBound = 2;
    const { container, emitted, rerender } = harness;
    await rerender({ lowerBound });
    // when
    const el = container.querySelector('.neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([lowerBound]);
  });

  it('emits value change with upper bound', async () => {
    // given
    const newValue = 10;
    const upperBound = 9;
    const { container, emitted, rerender } = harness;
    await rerender({ upperBound });
    // when
    const el = container.querySelector('.neon-slider__input') as HTMLInputElement;
    el.value = `${newValue}`;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([upperBound]);
  });
});
