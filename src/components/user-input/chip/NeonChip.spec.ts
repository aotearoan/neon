import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonChip from './NeonChip.vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonChipAction } from '@/common/enums/NeonChipAction';

describe('NeonChip', () => {
  const label = 'xdd';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonChip, {
      props: { label },
    });
  });

  it('renders label', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip__label')?.textContent).toEqual(label);
  });

  it('renders open by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip')).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip--m')).toBeDefined();
  });

  it('renders size', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    // when / then
    expect(container.querySelector('.neon-chip--l')).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip--primary')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    // when / then
    expect(container.querySelector('.neon-chip--brand')).toBeDefined();
  });

  it('renders icon with color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ icon: 'check', color: NeonFunctionalColor.Brand });
    // when / then
    expect(container.querySelector('.neon-chip__icon')).toBeDefined();
    expect(container.querySelector('.neon-icon--brand')).toBeDefined();
  });

  it('renders default action', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip--click')).toBeDefined();
    expect(container.querySelector('.neon-chip__close')).toBeNull();
  });

  it('renders removable', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ action: NeonChipAction.Remove });
    // when / then
    expect(container.querySelector('.neon-chip--remove')).toBeDefined();
    expect(container.querySelector('.neon-chip__close')).toBeDefined();
  });

  it('emits close event when removable and clicked', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ action: NeonChipAction.Remove });
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted().close[0]).toBeDefined();
  });

  it('does not emit close event when disabled', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ action: NeonChipAction.Remove, disabled: true });
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted().close).toBeUndefined();
  });

  it('emits click event when clicked', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when disabled', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.click(getByText(label));
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('emits click event when space keydown', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when space keydown and disabled', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Space', code: 'Space' });
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('emits close event when delete keydown and removable', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ action: NeonChipAction.Remove });
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Delete', code: 'Delete' });
    // then
    expect(emitted().close[0]).toBeDefined();
  });

  it('emits click event when enter keydown', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when enter keydown and disabled', async () => {
    // given
    const { emitted, getByText, rerender } = harness;
    await rerender({ disabled: true });
    // when
    await fireEvent.keyDown(getByText(label), { key: 'Enter', code: 'Enter' });
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-chip--disabled')).toBeDefined();
    expect(container.querySelector('.neon-chip--disabled')?.getAttribute('aria-disabled')).toEqual('true');
    expect(container.querySelector('.neon-chip--disabled')?.getAttribute('tabindex')).toBeNull();
  });

  it('renders not disabled by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip--disabled')).toBeNull();
    expect(container.querySelector('.neon-chip')?.getAttribute('tabindex')).toEqual('0');
  });

  it('renders button role when removable', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ action: NeonChipAction.Remove });
    // when / then
    expect(container.querySelector('.neon-chip')?.getAttribute('role')).toEqual('button');
  });

  it('renders link role when clickable', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-chip')?.getAttribute('role')).toEqual('link');
  });

  it('renders undefined role when disabled', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-chip')?.getAttribute('role')).toBeNull();
  });
});
