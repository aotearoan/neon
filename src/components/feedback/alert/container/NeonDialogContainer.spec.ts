import type { NeonDialogMessage } from '@/model/feedback/dialog/NeonDialogMessage';
import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import NeonDialogContainer from './NeonDialogContainer.vue';

describe('NeonDialogContainer', () => {
  const msg: NeonDialogMessage = { open: true, title: 'test', question: 'question', confirmLabel: 'confirm' };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonDialogContainer, {
      props: { modelValue: msg },
    });
  });

  it('removes dialog on close', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    const btn = getByText('confirm');

    await fireEvent.click(btn);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([
      {
        ...msg,
        open: false,
      },
    ]);
  });
});
