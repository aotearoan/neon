import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonNote from './NeonNote.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonNote', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonNote, { props: {}, slots: { default: '<p>test</p>' } });
  });

  it('correctly maps icon name, primary', () => {
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('icon');
  });

  it('correctly maps icon name, info', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Info });
    // when / then
    expect(html()).toMatch('neon-icon--info');
  });

  it('correctly maps icon name, success', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Success });
    // when / then
    expect(html()).toMatch('neon-icon--success');
  });

  it('correctly maps icon name, warn', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Warn });
    // when / then
    expect(html()).toMatch('neon-icon--warn');
  });

  it('correctly maps icon name, error', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Error });
    // when / then
    expect(html()).toMatch('neon-icon--error');
  });

  it('correctly maps icon false', async () => {
    const { html, rerender } = harness;
    await rerender({ icon: false, color: NeonFunctionalColor.Error });
    // when / then
    expect(html()).not.toMatch('icon');
  });

  it('renders correct color class', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Error });
    // when / then
    expect(html()).toMatch('neon-note--error');
  });

  it('clicking close emits close event', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ closable: true, color: NeonFunctionalColor.Error });
    await fireEvent.click(getByTestId('note-button'));
    // when / then
    expect(emitted()['close-note']).toBeDefined();
  });

  it('space keydown on close emits close event', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ closable: true, color: NeonFunctionalColor.Error });
    await fireEvent.keyDown(getByTestId('note-button'), { key: 'Space', code: 'Space' });
    // when / then
    expect(emitted()['close-note']).toBeDefined();
  });

  it('enter keydown on close emits close event', async () => {
    const { emitted, getByTestId, rerender } = harness;
    await rerender({ closable: true, color: NeonFunctionalColor.Error });
    await fireEvent.keyDown(getByTestId('note-button'), { key: 'Enter', code: 'Enter' });
    // when / then
    expect(emitted()['close-note']).toBeDefined();
  });

  it('close button missing when closable = false', async () => {
    const { html, rerender } = harness;
    await rerender({ closable: false, color: NeonFunctionalColor.Error });
    // when / then
    expect(html()).not.toMatch('neon-note__close');
  });

  it('renders default slot contents', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Error });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});

