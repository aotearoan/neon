import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonDrawer from './NeonDrawer.vue';
import { NeonPosition } from '@/common/enums/NeonPosition';

describe('NeonDrawer', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonDrawer, {
      props: { open: false },
      slots: { default: '<p>test</p>' },
    });
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders full width class', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true, fullWidth: true });
    // when / then
    expect(html()).toMatch('neon-drawer__container--full-width');
  });

  it('renders closed by default', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-drawer--open');
  });

  it('renders open', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true });
    // when / then
    expect(html()).toMatch('neon-drawer--open');
  });

  it('renders position', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true, position: NeonPosition.Right });
    // when / then
    expect(html()).toMatch('neon-drawer--right');
  });

  it('renders overlay default', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true });
    // when / then
    expect(html()).toMatch('neon-drawer--with-overlay');
  });

  it('renders overlay off', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ open: true, overlay: false });
    // when / then
    expect(html()).not.toMatch('neon-drawer--with-overlay');
  });

  it('emits close event on escape key', async () => {
    // given
    const { emitted, getByText } = render(NeonDrawer, { props: { open: true }, slots: { default: '<p>XDD</p>' } });
    // when / then
    await fireEvent.keyDown(getByText('XDD'), { key: 'Escape', code: 'Escape' });
    expect(emitted().close).toEqual([[]]);
  });

  it('emits close event on outside click', async () => {
    // given
    const { emitted } = (harness = render(NeonDrawer, { props: { open: true } }));
    // when / then
    await fireEvent.mouseDown(document);
    expect(emitted().close).toEqual([[]]);
  });

  it('does not emit close event on inside click', async () => {
    // given
    const { baseElement, emitted } = (harness = render(NeonDrawer, { props: { open: true } }));
    // when / then
    await fireEvent.mouseDown(baseElement);
    expect(emitted().close).toEqual([[]]);
  });
});
