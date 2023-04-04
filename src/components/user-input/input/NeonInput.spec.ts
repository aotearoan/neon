import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonInput from './NeonInput.vue';
import { NeonInputType } from '@/common/enums/NeonInputType';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonState } from '@/common/enums/NeonState';

describe('NeonInput', () => {
  const modelValue = '';
  const id = 'test id';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonInput, {
      props: { modelValue, id },
    });
  });

  it('renders id', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('id')).toEqual(id);
  });

  it('renders placeholder', async () => {
    const modelValue = '';
    const placeholder = 'test label';
    const { getByPlaceholderText, rerender } = harness;
    await rerender({ modelValue, placeholder });
    getByPlaceholderText(placeholder);
  });

  it('renders telephone placeholder', async () => {
    const modelValue = '';
    const { getByPlaceholderText, rerender } = harness;
    await rerender({ modelValue, type: NeonInputType.Tel });
    getByPlaceholderText('+41785551234');
  });

  it('renders url placeholder', async () => {
    const modelValue = '';
    const { getByPlaceholderText, rerender } = harness;
    await rerender({ modelValue, type: NeonInputType.Url });
    getByPlaceholderText('http://www.getskeleton.com');
  });

  it('renders email placeholder', async () => {
    const modelValue = '';
    const { getByPlaceholderText, rerender } = harness;
    await rerender({ modelValue, type: NeonInputType.Email });
    getByPlaceholderText('gbelson@hooli.com');
  });

  it('renders message', async () => {
    const message = 'Bacon ipsum dolor amet venison';
    const { container, getByText, rerender } = harness;
    await rerender({ message });
    getByText(message);
    expect(container.querySelector('.neon-input__message .neon-color-text-low-contrast')).toBeDefined();
  });

  it('renders error message', async () => {
    const message = 'Bacon ipsum dolor amet venison';
    const { container, getByText, rerender } = harness;
    await rerender({ message, messageLevel: NeonFunctionalColor.Error });
    getByText(message);
    expect(container.querySelector('.neon-input__message .neon-color-text-error')).toBeDefined();
  });

  it('renders placeholder visible class', async () => {
    const modelValue = '';
    const placeholder = 'test label';
    const { container, rerender } = harness;
    await rerender({ modelValue, placeholder });
    expect(container.querySelector('.neon-input--placeholder-visible')).toBeDefined();
  });

  it('does not render placeholder visible class when modelValue is set', async () => {
    const modelValue = '1';
    const placeholder = 'test label';
    const { container, rerender } = harness;
    await rerender({ modelValue, placeholder });
    expect(container.querySelector('.neon-input--placeholder-visible')).toBeNull();
  });

  it('renders modelValue', async () => {
    const { container, rerender } = harness;
    const modelValue = 'xdd';
    await rerender({ modelValue });
    expect((container.querySelector('.neon-input__textfield') as HTMLInputElement).getAttribute('value')).toEqual(
      modelValue,
    );
  });

  it('renders as input by default', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input__textfield')).toBeDefined();
  });

  it('renders textarea', async () => {
    const rows = 1;
    const { container, rerender } = harness;
    await rerender({ modelValue, rows });
    expect(container.querySelector('textarea')).toBeDefined();
    expect(container.querySelector('textarea')?.getAttribute('rows')).toEqual(`${rows}`);
  });

  it('renders type as text by default', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('type')).toEqual(NeonInputType.Text);
  });

  it('renders type', async () => {
    const { container, rerender } = harness;
    await rerender({ modelValue, type: NeonInputType.Email });
    expect(container.querySelector('.neon-input__textfield')?.getAttribute('type')).toEqual(NeonInputType.Email);
  });

  it('renders default size', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input--m')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Small });
    expect(container.querySelector('.neon-input--s')).toBeDefined();
  });

  it('renders default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input--low-contrast')).toBeDefined();
  });

  it('renders color', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Info });
    expect(container.querySelector('.neon-input--info')).toBeDefined();
  });

  it('renders default state', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-input--state-ready')).toBeDefined();
  });

  it('renders state', async () => {
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Loading });
    expect(container.querySelector('.neon-input--state-loading')).toBeDefined();
  });

  it('renders disabled', async () => {
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    expect(container.querySelector('.neon-input--disabled')).toBeDefined();
    expect(container.querySelector('input[disabled]')).toBeDefined();
  });

  it('emits update event', async () => {
    // given
    const newValue = 'new modelValue';
    const { emitted, getByTestId } = harness;
    // when
    const el = getByTestId('neonInput') as HTMLInputElement;
    el.value = newValue;
    await fireEvent.input(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([newValue]);
  });

  it('emits truncated value when maxlength defined', async () => {
    // given
    const newValue = 'new modelValue';
    const rows = 2;
    const maxlength = 5;
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ rows, maxlength });
    // when
    const el = getByTestId('neonTextArea') as HTMLTextAreaElement;
    el.value = newValue;
    await fireEvent.input(el);
    expect(emitted()['update:modelValue'][0]).toEqual([newValue.substring(0, maxlength)]);
  });

  it('does not emit truncated modelValue when equals existing modelValue', async () => {
    // given
    const newValue = 'test new modelValue';
    const rows = 2;
    const maxlength = 4;
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ rows, maxlength, modelValue: 'test' });
    // when
    const el = getByTestId('neonTextArea') as HTMLTextAreaElement;
    el.value = newValue;
    await fireEvent.input(el);
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits focus/blur events', async () => {
    // given
    const { getByTestId, emitted } = harness;
    // when
    await fireEvent.blur(getByTestId('neonInput'));
    await fireEvent.focus(getByTestId('neonInput'));
    // then
    expect(emitted().blur).toBeDefined();
    expect(emitted().focus).toBeDefined();
  });

  it('renders icon', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ icon: 'plus' });
    expect(container.querySelector('.neon-icon')).toBeDefined();
  });

  it('sets stateHighlight default', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Error });
    expect(container.querySelector('.neon-input--with-state-highlight')).toBeDefined();
  });

  it('sets stateHighlight false', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Error, stateHighlight: false });
    expect(container.querySelector('.neon-input--with-state-highlight')).toBeNull();
  });

  it('sets stateIcon default', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Error });
    expect(container.querySelector('.neon-input--with-state-icon')).toBeDefined();
  });

  it('sets stateIcon false', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Error, stateIcon: false });
    expect(container.querySelector('.neon-input--with-state-icon')).toBeNull();
  });

  it('sets tabindex', async () => {
    // given
    const tabindex = 14;
    const { container, rerender } = harness;
    await rerender({ tabindex });
    expect(container.querySelector('input')?.getAttribute('tabindex')).toEqual(`${tabindex}`);
  });

  it('emits icon click event', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ icon: 'plus' });
    // when
    const icon = container.querySelector('.neon-icon') as HTMLElement;
    await fireEvent.click(icon);
    // then
    expect(emitted()['icon-click'][0]).toBeDefined();
  });

  it('does not emit icon click event when disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ icon: 'plus', disabled: true });
    // when
    const icon = container.querySelector('.neon-icon') as HTMLElement;
    await fireEvent.click(icon);
    // then
    expect(emitted()['icon-click']).toBeUndefined();
  });

  it('emits clear event', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: 'xdd' });
    // when
    const icon = container.querySelector('.neon-icon') as HTMLElement;
    await fireEvent.click(icon);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual(['']);
  });

  it('does not render clear icon for empty input', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: '' });
    // when / then
    expect(container.querySelector('.neon-icon')).toBeNull();
  });
});
