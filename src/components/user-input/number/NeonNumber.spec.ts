import NeonNumber from './NeonNumber.vue';
import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonInputMode } from '@/common/enums/NeonInputMode';

describe('NeonNumber', () => {
  const modelValue = 42;
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonNumber, {
      props: { modelValue, debounce: 0, spinButtons: true },
    });
  });

  it('renders default size', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number--m')).toBeDefined();
    expect(container.querySelector('.neon-input--m')).toBeDefined();
    expect(container.querySelectorAll('.neon-button--m').length).toEqual(2);
  });

  it('renders size', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ size: NeonSize.Large });
    // then
    expect(container.querySelector('.neon-number--l')).toBeDefined();
    expect(container.querySelector('.neon-input--l')).toBeDefined();
    expect(container.querySelectorAll('.neon-button--l').length).toEqual(2);
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number--low-contrast')).toBeDefined();
    expect(container.querySelector('.neon-input--low-contrast')).toBeDefined();
    expect(container.querySelectorAll('.neon-button--low-contrast').length).toEqual(2);
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ color: NeonFunctionalColor.Primary });
    // then
    expect(container.querySelector('.neon-number--primary')).toBeDefined();
    expect(container.querySelector('.neon-input--primary')).toBeDefined();
    expect(container.querySelectorAll('.neon-button--primary').length).toEqual(2);
  });

  it('renders enabled', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number--disabled')).toBeNull();
    expect(container.querySelector('.neon-input--disabled')).toBeNull();
    expect(container.querySelectorAll('.neon-button--disabled').length).toEqual(0);
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-number--disabled')).toBeDefined();
    expect(container.querySelector('.neon-input--disabled')).toBeDefined();
    expect(container.querySelectorAll('.neon-button--disabled').length).toEqual(2);
  });

  it('renders input editable by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number--editable')).toBeDefined();
    expect(container.querySelector('.neon-input--disabled')).toBeNull();
  });

  it('renders input non editable', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ editable: false });
    // then
    expect(container.querySelector('.neon-number--editable')).toBeNull();
    expect(container.querySelector('.neon-input--disabled')).toBeDefined();
  });

  it('renders decrement spin button disabled when at min', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ min: modelValue });
    // then
    expect(container.querySelector('.neon-number__decrement.neon-button--disabled')).toBeDefined();
  });

  it('renders increment spin button disabled when at max', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ max: modelValue });
    // then
    expect(container.querySelector('.neon-number__increment.neon-button--disabled')).toBeDefined();
  });

  it('renders spin buttons by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number--with-buttons')).toBeDefined();
    expect(container.querySelectorAll('.neon-button').length).toEqual(2);
  });

  it('renders without spin buttons', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ spinButtons: false });
    // then
    expect(container.querySelector('.neon-number--with-buttons')).toBeNull();
    expect(container.querySelectorAll('.neon-button').length).toEqual(0);
  });

  it('renders default decrement label', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number__decrement')?.getAttribute('aria-label')).toEqual('Decrement');
  });

  it('renders decrement label', async () => {
    // given
    const { container, rerender } = harness;
    const decrementLabel = 'XDD';
    // when
    await rerender({ decrementLabel });
    // then
    expect(container.querySelector('.neon-number__decrement')?.getAttribute('aria-label')).toEqual(decrementLabel);
  });

  it('renders default increment label', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-number__increment')?.getAttribute('aria-label')).toEqual('Increment');
  });

  it('renders increment label', async () => {
    // given
    const { container, rerender } = harness;
    const incrementLabel = 'XDD';
    // when
    await rerender({ incrementLabel });
    // then
    expect(container.querySelector('.neon-number__increment')?.getAttribute('aria-label')).toEqual(incrementLabel);
  });

  it('emits default decrement of 1', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.click(container.querySelector('.neon-number__decrement') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue - 1]);
  });

  it('emits step decrement', async () => {
    // given
    const { container, emitted, rerender } = harness;
    const step = 5;
    await rerender({ step });
    // when
    await fireEvent.click(container.querySelector('.neon-number__decrement') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue - step]);
  });

  it('does not emit when decrement disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.click(container.querySelector('.neon-number__decrement') as HTMLElement);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits default increment of 1', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.click(container.querySelector('.neon-number__increment') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue + 1]);
  });

  it('emits step increment', async () => {
    // given
    const { container, emitted, rerender } = harness;
    const step = 5;
    await rerender({ step });
    // when
    await fireEvent.click(container.querySelector('.neon-number__increment') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue + step]);
  });

  it('does not emit when increment disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.click(container.querySelector('.neon-number__increment') as HTMLElement);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('renders input max', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ max: 50 });
    // when / then
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('max')).toEqual('50');
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('aria-valuemax')).toEqual('50');
  });

  it('renders input min', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ min: 11 });
    // when / then
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('min')).toEqual('11');
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('aria-valuemin')).toEqual('11');
  });

  it('renders default step', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('step')).toEqual('1');
  });

  it('renders step', async () => {
    // given
    const step = 5;
    const { container, rerender } = harness;
    await rerender({ step });
    // when / then
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('step')).toEqual('5');
  });

  it('renders formatted value (default)', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: 1000 });
    // when / then
    const input = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(input?.value).toEqual('1,000');
    expect(input?.getAttribute('aria-valuenow')).toEqual('1000');
  });

  it('renders formatted value with decimals', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: 1000, decimals: 2 });
    // when / then
    const input = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(input?.value).toEqual('1,000.00');
    expect(input?.getAttribute('aria-valuenow')).toEqual('1000');
  });

  it('renders raw value when focussed', async () => {
    // given
    const mv = 1000;
    const expected = '1000.00';
    const { container, rerender } = harness;
    await rerender({ modelValue: mv, decimals: 2 });
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    // when
    await fireEvent.focus(el);
    // then
    expect(el.value).toEqual(expected);
  });

  it('renders formatted value when blurred', async () => {
    // given
    const mv = 1000;
    const { container, rerender } = harness;
    await rerender({ modelValue: mv, decimals: 2 });
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    // when
    await fireEvent.focus(el);
    await fireEvent.blur(el);
    // then
    expect(el.value).toEqual('1,000.00');
  });

  it('renders default input mode', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: 1000 });
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    // when / then
    expect(el?.getAttribute('inputmode')).toEqual(NeonInputMode.Numeric);
  });

  it('renders input mode', async () => {
    // given
    const inputmode = NeonInputMode.Decimal;
    const { container, rerender } = harness;
    await rerender({ modelValue: 1000, inputmode });
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    // when / then
    expect(el?.getAttribute('inputmode')).toEqual(NeonInputMode.Decimal);
  });

  it('renders percentage', async () => {
    // given
    const value = 0.42;
    const { container, rerender } = harness;
    await rerender({ modelValue: value, percentage: true });
    // when / then
    const input = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(input?.value).toEqual('42%');
  });

  it('renders using valueTemplate', async () => {
    // given
    const value = 5.42;
    const { container, rerender } = harness;
    // eslint-disable-next-line no-template-curly-in-string
    await rerender({ modelValue: value, valueTemplate: '${value}' });
    // when / then
    const input = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(input?.value).toEqual('$5.42');
  });

  it('emits input when value changed', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    el.value = '50';
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([50]);
  });

  it('emits null for empty value', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    el.value = '';
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([null]);
  });

  it('does not emit a value when invalid input', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    el.value = '' + NaN;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('does not emit input when value changed and disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ disabled: true });
    // when
    const el = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(el.disabled).toEqual(true);
    el.value = '50';
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('decrements value with down arrow', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([41]);
  });

  it('does not decrement value when at min', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ min: modelValue });
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits min value when decrementing past min', async () => {
    // given
    const step = 5;
    const { container, emitted, rerender } = harness;
    await rerender({ min: modelValue - 1, step });
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowDown',
      code: 'ArrowDown',
    });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue - 1]);
  });

  it('increments value with up arrow', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([43]);
  });

  it('does not increment value when at max', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ max: modelValue });
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits max value when incrementing past max', async () => {
    // given
    const step = 5;
    const { container, emitted, rerender } = harness;
    await rerender({ max: modelValue + 1, step });
    // when
    await fireEvent.keyDown(container.querySelector('.neon-input__textfield') as HTMLInputElement, {
      key: 'ArrowUp',
      code: 'ArrowUp',
    });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue + 1]);
  });

  it('renders formatted value with locale', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: 1000, locale: 'de-DE' });
    // when / then
    const input = container.querySelector('.neon-input__textfield') as HTMLInputElement;
    expect(input?.value).toEqual('1.000');
    expect(input?.getAttribute('aria-valuenow')).toEqual('1000');
  });
});
