import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonToggleChip from './NeonToggleChip.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonToggleChip', () => {
  const label = 'xd';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonToggleChip, { props: { modelValue: true, label } });
  });

  it('renders checked state true', () => {
    const { html } = harness;

    const result = html();
    expect(result).toMatch('neon-toggle-chip--checked');
    expect(result).toMatch('aria-pressed="true"');
  });

  it('renders checked state false', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false });
    const result = html();
    expect(result).not.toMatch('neon-toggle-chip--checked');
    expect(result).not.toMatch('aria-pressed="true"');
  });

  it('renders checked icon when true', () => {
    const { html } = harness;

    const result = html();
    expect(result).toMatch('neon-icon');
  });

  it('does not render checked icon when false', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false });
    const result = html();
    expect(result).not.toMatch('neon-icon');
  });

  it('renders checked icon when true and showCheck true', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: true, showCheck: true, label });
    const result = html();
    expect(result).toMatch('neon-toggle-chip--show-check');
    expect(result).toMatch('neon-icon');
  });

  it('does not render checked icon when true and showCheck false', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: true, showCheck: false, label });
    const result = html();
    expect(result).not.toMatch('neon-toggle-chip--show-check');
    expect(result).not.toMatch('neon-icon');
  });

  it('renders icon enabled', () => {
    const { html } = harness;

    const result = html();
    expect(result).not.toMatch('neon-icon--disabled');
  });

  it('renders icon disabled', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: true, disabled: true });
    const result = html();
    expect(result).toMatch('neon-icon--disabled');
  });

  it('renders default size', () => {
    const { html } = harness;

    const result = html();
    expect(result).toMatch('neon-toggle-chip--m');
  });

  it('renders size', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: true, size: NeonSize.Small });
    const result = html();
    expect(result).toMatch('neon-toggle-chip--s');
  });

  it('renders default color', () => {
    const { html } = harness;

    const result = html();
    expect(result).toMatch('neon-toggle-chip--primary');
  });

  it('renders color', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: true, size: NeonFunctionalColor.Info });
    const result = html();
    expect(result).toMatch('neon-toggle-chip--info');
  });

  it('renders default disabled false', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false, label });
    const result = html();
    expect(result).not.toMatch('neon-toggle-chip--disabled');
    expect(result).toMatch('aria-disabled="false"');
  });

  it('renders disabled true', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false, label, disabled: true });
    const result = html();
    expect(result).toMatch('neon-toggle-chip--disabled');
    expect(result).toMatch('aria-disabled="true"');
  });

  it('renders default showCheck true', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false, label });
    const result = html();
    expect(result).toMatch('neon-toggle-chip--show-check');
  });

  it('renders default showCheck false', async () => {
    const { html, rerender } = harness;

    await rerender({ modelValue: false, label, showCheck: false });
    const result = html();
    expect(result).not.toMatch('neon-toggle-chip--show-check');
  });

  it('renders default showCheck false', () => {
    const { getByText } = harness;
    getByText(label);
  });

  it('renders input unchecked', async () => {
    const { html, rerender } = harness;
    await rerender({ modelValue: false, label });
    expect(html()).toMatch('checked="false"');
  });

  it('renders input checked', () => {
    const { html } = harness;
    expect(html()).toMatch('checked="true"');
  });

  it('renders input not disabled', () => {
    const { html } = harness;
    expect(html()).toMatch('disabled="false"');
  });

  it('renders input not disabled', async () => {
    const { html, rerender } = harness;
    await rerender({ modelValue: true, disabled: true });
    expect(html()).toMatch('disabled="true"');
  });

  it('does not emit event when disabled', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label, disabled: true });
    await fireEvent.click(getByTestId('toggle-chip-input'));
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits event when clicked', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label });
    await fireEvent.click(getByTestId('toggle-chip-input'));
    expect(emitted()['update:modelValue']).toEqual([[true]]);
  });

  it('toggles chip off when clicked', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: true, label });
    await fireEvent.click(getByTestId('toggle-chip-input'));
    expect(emitted()['update:modelValue']).toEqual([[false]]);
  });

  it('toggles chip toggle when enter pressed', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label });
    await fireEvent.keyDown(getByTestId('toggle-chip'), { key: 'Enter', code: 'Enter' });
    expect(emitted()['update:modelValue']).toEqual([[true]]);
  });

  it('does not toggle chip when enter pressed and disabled', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label, disabled: true });
    await fireEvent.keyDown(getByTestId('toggle-chip'), { key: 'Enter', code: 'Enter' });
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('toggles chip toggle when space pressed', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label });
    await fireEvent.keyDown(getByTestId('toggle-chip'), { key: 'Space', code: 'Space' });
    expect(emitted()['update:modelValue']).toEqual([[true]]);
  });

  it('does not toggle chip when space pressed and disabled', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ modelValue: false, label, disabled: true });
    await fireEvent.keyDown(getByTestId('toggle-chip'), { key: 'Space', code: 'Space' });
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
