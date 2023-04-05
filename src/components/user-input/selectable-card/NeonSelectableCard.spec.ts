import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonSelectableCard from './NeonSelectableCard.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';

describe('NeonSelectableCard', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonSelectableCard, {
      props: { modelValue: false },
      slots: { default: '<p>test</p>' },
    });
  });

  it('matches snapshot', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders selected', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ modelValue: true });
    // then
    expect(container.querySelector('.neon-selectable-card--selected')).toBeDefined();
  });

  it('toggles selected on Enter', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const card = container.querySelector('.neon-selectable-card') as HTMLElement;
    await fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('toggles selected on Space', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const card = container.querySelector('.neon-selectable-card') as HTMLElement;
    await fireEvent.keyDown(card, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('toggles selected on when clicked', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const card = container.querySelector('.neon-selectable-card') as HTMLElement;
    await fireEvent.click(card);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([true]);
  });

  it('does not toggle selected on when disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    // when
    await rerender({ disabled: true });
    const card = container.querySelector('.neon-selectable-card--disabled') as HTMLElement;
    await fireEvent.click(card);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    // when / then
    await rerender({ color: NeonFunctionalColor.Info });
    expect(container.querySelector('.neon-selectable-card--info')).toBeDefined();
  });

  it('renders size', async () => {
    // given
    const { container, rerender } = harness;
    // when / then
    await rerender({ size: NeonSize.Medium });
    expect(container.querySelector('.neon-selectable-card--m')).toBeDefined();
  });

  it('toggles selected off when clicked', async () => {
    // given
    const { container, emitted, rerender } = harness;
    // when
    await rerender({ modelValue: true });
    const card = container.querySelector('.neon-selectable-card') as HTMLElement;
    await fireEvent.click(card);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([false]);
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
