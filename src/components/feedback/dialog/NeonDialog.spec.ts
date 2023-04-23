import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonDialog from './NeonDialog.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonDialog', () => {
  const title = 'test title';
  const question = 'question';

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonDialog, {
      props: { title, question },
    });
  });

  it('renders title', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText(title);
  });

  it('renders question', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText(question);
  });

  it('renders closed', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-modal--open');
  });

  it('renders open', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true });
    // when / then
    expect(html()).toMatch('neon-modal--open');
  });

  it('renders default cancel label', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText('Cancel');
  });

  it('renders provided cancel label', async () => {
    // given
    const cancelLabel = 'Decline';
    const { getByText, rerender } = harness;
    await rerender({ cancelLabel });
    // when / then
    getByText(cancelLabel);
  });

  it('renders default confirm label', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText('Confirm');
  });

  it('renders provided confirm label', async () => {
    // given
    const confirmLabel = 'Approve';
    const { getByText, rerender } = harness;
    await rerender({ confirmLabel });
    // when / then
    getByText(confirmLabel);
  });

  it('renders default color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-button--primary');
  });

  it('renders default color', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    // when / then
    expect(html()).toMatch('neon-button--brand');
  });

  it('renders alternate color', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ alternateColor: NeonFunctionalColor.Brand });
    // when / then
    expect(html()).toMatch('neon-button--alternate-color-brand');
  });

  it('emits cancel', async () => {
    // given
    const { getByText, emitted } = harness;
    await fireEvent.click(getByText('Cancel'));
    // when / then
    expect(emitted().cancel).toBeDefined();
  });

  it('emits confirm', async () => {
    // given
    const { getByText, emitted } = harness;
    await fireEvent.click(getByText('Confirm'));
    // when / then
    expect(emitted().confirm).toBeDefined();
  });
});
