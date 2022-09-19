import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonModal from './NeonModal.vue';

describe('NeonModal', () => {
  const props = { open: true };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonModal,
      {
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
