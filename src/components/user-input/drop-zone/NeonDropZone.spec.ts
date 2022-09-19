import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';

import { NeonState } from '../../../common/enums/NeonState';
import NeonDropZone from './NeonDropZone.vue';

describe('NeonDropZone', () => {
  const slot = 'test';

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonDropZone, {
      slots: {
        default: `<p>${slot}</p>`,
      },
    });
  });

  it('renders slot', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-drop-zone p')?.textContent).toEqual(slot);
  });

  it('renders disabled', async () => {
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    expect(container.querySelector('.neon-drop-zone--disabled')).toBeDefined();
  });

  it('renders circular', async () => {
    const { container, rerender } = harness;
    await rerender({ circular: true });
    expect(container.querySelector('.neon-drop-zone--circular')).toBeDefined();
  });

  it('renders default state = ready', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-drop-zone--state-ready')).toBeDefined();
  });

  it('renders state', async () => {
    const { container, rerender } = harness;
    await rerender({ state: NeonState.Loading });
    expect(container.querySelector('.neon-drop-zone--state-loading')).toBeDefined();
  });


  it('emits files', async () => {
    // given
    const { emitted, container } = harness;
    // when / then
    await fireEvent.drop(container.children[0] as HTMLElement, {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    // then
    expect(emitted().files[0]).toBeDefined();
  });

  it('does not emit files when disabled', async () => {
    // given
    const { emitted, container, rerender } = harness;
    // when / then
    await rerender({ disabled: true });
    await fireEvent.drop(container.children[0] as HTMLElement, {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    // then
    expect(emitted().files).not.toBeDefined();
  });

  it('does not emit files when loading state', async () => {
    // given
    const { emitted, container, rerender } = harness;
    // when / then
    await rerender({ state: NeonState.Loading });
    await fireEvent.drop(container.children[0] as HTMLElement, {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    // then
    expect(emitted().files).not.toBeDefined();
  });
});
