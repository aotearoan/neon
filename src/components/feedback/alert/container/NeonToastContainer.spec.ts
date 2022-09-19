import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonToastContainer from './NeonToastContainer.vue';
import { NeonAlertPlacement } from '../../../../common/enums/NeonAlertPlacement';
import { NeonAlertLevel } from '../../../../common/enums/NeonAlertLevel';

describe('NeonToastContainer', () => {
  const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissible: true };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonToastContainer,
      {
        props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
      });
  });

  it('removes toast on close', async () => {
    // given
    const { emitted, getByText } = harness;
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });
});
