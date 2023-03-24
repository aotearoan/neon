import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonModal from './NeonModal.vue';

describe('NeonModal', () => {
  const props = { open: true };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonModal, {
      props,
      slots: {
        default: '<p>test</p>',
      },
    });
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders closed', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: false });
    // when / then
    expect(html()).not.toMatch('neon-modal--open');
  });

  it('renders open', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-modal--open');
  });

  it('renders opaque', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ opaque: true });
    // when / then
    expect(html()).toMatch('neon-modal__overlay--opaque');
  });

  it('renders transparent', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-modal__overlay--opaque');
  });

  it('renders top nav visible', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ showTopNav: true });
    // when / then
    expect(html()).toMatch('neon-modal__overlay--show-top-nav');
  });

  it('renders over top nav', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-modal__overlay--show-top-nav');
  });

  it('emits close event on escape key', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.keyDown(getByText('test'), { key: 'Escape', code: 'Escape' });
    // then
    expect(emitted().close).toBeDefined();
  });

  it('emits close event on click outside modal container', async () => {
    // given
    const { emitted } = harness;
    // when
    await fireEvent.mouseDown(document);
    // then
    expect(emitted().close).toBeDefined();
  });

  it('does not emit close event on click outside modal container when dismissible = false', async () => {
    // given
    const { emitted, rerender } = harness;
    await rerender({ open: true, dismissible: false });
    // when
    await fireEvent.mouseDown(document);
    // then
    expect(emitted().close).toBeUndefined();
  });

  it('does not emit close event on click inside modal container', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.mouseDown(getByText('test'));
    // then
    expect(emitted().close).toBeUndefined();
  });
});
