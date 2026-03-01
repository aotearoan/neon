import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonToastContainer from './NeonToastContainer.vue';
import { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import { nextTick } from 'vue';
import { NeonToastService } from '@/common/utils/NeonToastService';

describe('NeonToastContainer', () => {
  const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissible: true };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonToastContainer, {
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

  it('removes message programmatically', async () => {
    // given
    NeonToastService.info({ key: 'test', title: 'test', dismissible: false });
    await nextTick();
    NeonToastService.remove('test');
    await nextTick();

    const { html } = render(NeonToastContainer, {
      props: { modelValue: [], placement: NeonAlertPlacement.TopLeft },
    });
    // then
    expect(html()).toMatchSnapshot();
  });
});
