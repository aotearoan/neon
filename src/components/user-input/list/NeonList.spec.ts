import NeonList from './NeonList.vue';
import type { NeonListItem } from '@/common/models/NeonListItem';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';

describe('NeonList', () => {
  const value: NeonListItem[] = [
    {
      key: 'key1',
      label: 'Label 1',
    },
    {
      key: 'key2',
      label: 'Label 2',
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonList, {
      props: { modelValue: [value[0]] },
    });
  });

  it('renders list item label', () => {
    const { getByText } = harness;
    getByText(value[0].label);
  });

  it('renders close button when not disabled', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-list__item .neon-icon')).toBeDefined();
  });

  it('renders disabled', async () => {
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    expect(container.querySelector('.neon-list--disabled')).toBeDefined();
    expect(container.querySelector('.neon-list__item .neon-icon')).toBeNull();
  });

  it('renders default size', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-list--m')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    expect(container.querySelector('.neon-list--l')).toBeDefined();
  });

  it('renders default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-list--low-contrast')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });
    expect(container.querySelector('.neon-list--primary')).toBeDefined();
  });

  it('emits event on remove by click', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: [...value] });
    // when
    const el = container.querySelector('.neon-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[value[1]]]);
    expect(emitted().close[0]).toEqual([value[0].key]);
  });

  it('emits event on remove by keydown enter', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: [...value] });
    // when
    const el = container.querySelector('.neon-list__item:first-child') as HTMLElement;
    await fireEvent.keyDown(el, { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[value[1]]]);
    expect(emitted().close[0]).toEqual([value[0].key]);
  });

  it('emits event on remove by keydown space', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: [...value] });
    // when
    const el = container.querySelector('.neon-list__item:first-child') as HTMLElement;
    await fireEvent.keyDown(el, { key: 'Space', code: 'Space' });
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[value[1]]]);
    expect(emitted().close[0]).toEqual([value[0].key]);
  });

  it('does not emit event when disabled', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: [...value], disabled: true });
    // when
    const el = container.querySelector('.neon-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    // then
    expect(emitted()['update:modelValue']).toBeUndefined();
    expect(emitted().close).toBeUndefined();
  });
});
