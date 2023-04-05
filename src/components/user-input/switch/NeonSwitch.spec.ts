import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonSwitchStyle } from '@/common/enums/NeonSwitchStyle';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonSwitch from './NeonSwitch.vue';

describe('NeonSwitch', () => {
  const modelValue = true;
  const label = 'test';

  let harness: RenderResult;
  const props = { modelValue, label };

  beforeEach(() => {
    harness = render(NeonSwitch, { props });
  });

  it('renders default switch style', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-switch--switch');
  });

  it('renders switch style', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, switchStyle: NeonSwitchStyle.Checkbox });
    // then
    expect(html()).toMatch('neon-switch--checkbox');
  });

  it('renders default switch size', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-switch--m');
  });

  it('renders switch size', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, size: NeonSize.Small });
    // then
    expect(html()).toMatch('neon-switch--s');
  });

  it('renders default switch color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-switch--primary');
  });

  it('renders switch color', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, color: NeonFunctionalColor.LowContrast });
    // then
    expect(html()).toMatch('neon-switch--low-contrast');
  });

  it('renders default disabled', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-switch--disabled');
  });

  it('renders disabled', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, disabled: true });
    // then
    expect(html()).toMatch('neon-switch--disabled');
    expect(html()).toMatch('aria-disabled="true"');
  });

  it('renders checked', () => {
    // given
    const { getByTestId, html } = harness;
    // when / then
    const checkbox = getByTestId('checkbox');
    expect(checkbox.getAttribute('checked')).toEqual('true');
    const result = html();
    expect(result).toMatch('neon-switch--checked');
    expect(checkbox.parentElement?.getAttribute('aria-checked')).toEqual('true');
  });

  it('renders indeterminate', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, indeterminate: true });
    // then
    const result = html();
    expect(result).toMatch('neon-switch--indeterminate');
  });

  it('renders label', () => {
    // given
    const { container, getByText } = harness;
    getByText(label);
    expect(container.querySelector('.neon-switch__label')).toBeDefined();
  });

  it('does not render label when not provided', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ label: null });
    expect(container.querySelector('.neon-switch__label')).toBeNull();
  });

  it('renders icon for checkbox', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ ...props, switchStyle: NeonSwitchStyle.Checkbox });
    // then
    expect(html()).toMatch('neon-icon');
  });

  it('emits false when clicking checked checkbox', async () => {
    const { emitted, getByTestId } = harness;
    await fireEvent.click(getByTestId('checkbox'));
    expect(emitted()['update:modelValue']).toEqual([[false]]);
  });

  it('emits true when clicking unchecked checkbox', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ ...props, modelValue: false });
    await fireEvent.click(getByTestId('checkbox'));
    expect(emitted()['update:modelValue']).toEqual([[true]]);
  });

  it('emits true when clicking indeterminate checkbox', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ ...props, modelValue: false, indeterminate: true });
    await fireEvent.click(getByTestId('checkbox'));
    expect(emitted()['update:modelValue']).toEqual([[true]]);
    expect(emitted()['indeterminate-change']).toEqual([[false]]);
  });

  it('emits nothing when clicking disabled checkbox', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ ...props, disabled: true });
    await fireEvent.click(getByTestId('checkbox'));
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits false when keypress enter', async () => {
    const { emitted, getByTestId } = harness;
    await fireEvent.keyDown(getByTestId('checkbox-label'), { key: 'Enter', code: 'Enter' });
    expect(emitted()['update:modelValue']).toEqual([[false]]);
  });

  it('emits nothing when keypress enter & disabled', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ ...props, disabled: true });
    await fireEvent.keyDown(getByTestId('checkbox-label'), { key: 'Enter', code: 'Enter' });
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  it('emits false when keypress space', async () => {
    const { emitted, getByTestId } = harness;
    await fireEvent.keyDown(getByTestId('checkbox-label'), { key: 'Space', code: 'Space' });
    expect(emitted()['update:modelValue']).toEqual([[false]]);
  });

  it('emits nothing when keypress space & disabled', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ ...props, disabled: true });
    await fireEvent.keyDown(getByTestId('checkbox-label'), { key: 'Space', code: 'Space' });
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
