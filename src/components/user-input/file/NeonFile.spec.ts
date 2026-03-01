import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonState } from '@/common/enums/NeonState';
import NeonFile from './NeonFile.vue';
import { NeonButtonStyle } from '@/common/enums/NeonButtonStyle';

describe('NeonFile', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonFile);
  });

  it('renders default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-file--primary')).toBeDefined();
  });

  it('renders color', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Info });
    expect(container.querySelector('.neon-file--info')).toBeDefined();
  });

  it('renders default button style', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-button--solid')).toBeDefined();
  });

  it('renders button style', async () => {
    const { container, rerender } = harness;
    await rerender({ buttonStyle: NeonButtonStyle.Text });
    expect(container.querySelector('.neon-button--text')).toBeDefined();
  });

  it('renders square', () => {
    const { html } = harness;
    expect(html()).not.toMatch('neon-button--circular');
  });

  it('renders circular', async () => {
    const { html, rerender } = harness;
    await rerender({ circular: true });
    expect(html()).toMatch('neon-button--circular');
  });

  it('renders default title', async () => {
    const label = 'Test label';
    const { getByText, rerender } = harness;
    await rerender({ label });
    expect((getByText(label).parentElement as HTMLButtonElement).title).toEqual('Upload');
  });

  it('renders title', async () => {
    const label = 'Test label';
    const title = 'Test title';
    const { getByText, rerender } = harness;
    await rerender({ label, title });
    expect((getByText(label).parentElement as HTMLButtonElement).title).toEqual(title);
  });

  it('renders default size', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-file--m')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Small });
    expect(container.querySelector('.neon-file--s')).toBeDefined();
  });

  it('renders disabled', async () => {
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    expect(container.querySelector('.neon-file--disabled')).toBeDefined();
  });

  it('renders single', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-file--single')).toBeDefined();
  });

  it('renders multiple', async () => {
    const { container, rerender } = harness;
    await rerender({ multiple: true });
    expect(container.querySelector('.neon-file--single')).toBeNull();
  });

  it('renders directUpload', async () => {
    const { container, rerender } = harness;
    await rerender({ directUpload: true });
    expect(container.querySelectorAll('.neon-file .neon-file__actions .neon-button').length).toEqual(1);
    expect(container.querySelector('.neon-file .neon-list')).toBeNull();
    expect(container.querySelector('.neon-file--direct-upload')).toBeDefined();
  });

  it('renders accept', async () => {
    const accept = 'application/pdf';
    const { container, rerender } = harness;
    await rerender({ accept });
    const el = container.querySelector('.neon-file__input .neon-input__textfield') as HTMLElement;
    expect(el?.getAttribute('accept')).toEqual(accept);
  });

  it('renders button state', async () => {
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Loading });
    expect(container.querySelector('.neon-button .neon-icon')).toBeDefined();
  });

  it('renders button icon', async () => {
    const { container, rerender } = harness;
    await rerender({ icon: 'check' });
    expect(container.querySelector('.neon-button .neon-icon')).toBeDefined();
  });

  it('renders button label', async () => {
    const { getByText, rerender } = harness;
    await rerender({ label: 'xdd' });
    getByText('xdd');
  });
});
