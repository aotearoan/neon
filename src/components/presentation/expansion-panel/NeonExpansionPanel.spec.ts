import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonExpansionPanel from './NeonExpansionPanel.vue';
import { NeonVerticalPosition } from '@/common/enums/NeonVerticalPosition';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonExpansionPanel', () => {
  const content = 'lol';
  const label = 'xdd';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonExpansionPanel, {
      props: { label, modelValue: false },
      slots: { default: `<p>${content}</p>` },
    });
  });

  it('renders default slot content', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel__content p')?.textContent).toEqual(content);
  });

  it('renders label', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel__label')?.textContent).toEqual(label);
  });

  it('renders closed', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel--expanded')).toBeNull();
    expect(container.querySelector('.neon-expansion-panel__content')?.getAttribute('style')).toEqual('display: none;');
    expect(container.querySelector('.neon-expansion-indicator--expanded')).toBeNull();
  });

  it('renders open', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ modelValue: true });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--expanded')).toBeDefined();
    expect(container.querySelector('.neon-expansion-panel--expanded')?.getAttribute('aria-expanded')).toEqual('true');
    expect(container.querySelector('.neon-expansion-panel__content')?.getAttribute('style')).toEqual('');
    expect(container.querySelector('.neon-expansion-indicator--expanded')).toBeDefined();
  });

  it('renders id', async () => {
    // given
    const id = 'xd';
    const { container, rerender } = harness;
    await rerender({ id });
    // when / then
    expect(container.querySelector('.neon-expansion-panel__header')?.getAttribute('aria-controls')).toEqual(id);
    expect(container.querySelector('.neon-expansion-panel__content')?.id).toEqual(id);
  });

  it('renders no icon', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon')).toBeNull();
  });

  it('renders icon', async () => {
    // given
    const icon = 'times';
    const { container, rerender } = harness;
    await rerender({ icon });
    // when / then
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon')).toBeDefined();
  });

  it('renders default position', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel--top')).toBeDefined();
  });

  it('renders position', async () => {
    // given
    const position = NeonVerticalPosition.Bottom;
    const { container, rerender } = harness;
    await rerender({ position });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--bottom')).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel--m')).toBeDefined();
  });

  it('renders size', async () => {
    // given
    const size = NeonSize.Large;
    const { container, rerender } = harness;
    await rerender({ size });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--l')).toBeDefined();
  });

  it('renders default full width', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-expansion-panel--full-width')).toBeNull();
  });

  it('renders full width', async () => {
    // given
    const fullWidth = true;
    const { container, rerender } = harness;
    await rerender({ fullWidth });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--full-width')).toBeDefined();
  });

  it('renders default color', async () => {
    // given
    const icon = 'times';
    const { container, rerender } = harness;
    await rerender({ icon });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--neutral')).toBeDefined();
    expect(container.querySelector('.neon-expansion-indicator--neutral')).toBeDefined();
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon--neutral')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const icon = 'times';
    const color = NeonFunctionalColor.Primary;
    const { container, rerender } = harness;
    await rerender({ icon, color });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--primary')).toBeDefined();
    expect(container.querySelector('.neon-expansion-indicator--primary')).toBeDefined();
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon--primary')).toBeDefined();
  });

  it('renders not disabled', async () => {
    // given
    const icon = 'times';
    const { container, rerender } = harness;
    await rerender({ icon });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--disabled')).toBeNull();
    expect(container.querySelector('.neon-expansion-panel')?.getAttribute('aria-disabled')).toEqual('false');
    expect(container.querySelector('.neon-expansion-indicator--disabled')).toBeNull();
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon--disabled')).toBeNull();
  });

  it('renders disabled', async () => {
    // given
    const icon = 'times';
    const disabled = true;
    const { container, rerender } = harness;
    await rerender({ icon, disabled });
    // when / then
    expect(container.querySelector('.neon-expansion-panel--disabled')).toBeDefined();
    expect(container.querySelector('.neon-expansion-panel')?.getAttribute('aria-disabled')).toEqual('true');
    expect(container.querySelector('.neon-expansion-indicator--disabled')).toBeDefined();
    expect(container.querySelector('.neon-expansion-panel__label-container .neon-icon--disabled')).toBeDefined();
  });

  it('emits input event false', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ modelValue: true });
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([false]);
  });

  it('emits input event true', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('emits input event space', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('emits input event enter', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('does not emit input event when disabled', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
