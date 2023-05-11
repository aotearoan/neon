import { fireEvent, render } from '@testing-library/vue';
import NeonAlertContainer from './NeonAlertContainer.vue';
import { NeonAlertLevel } from '@/common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';

describe('NeonAlertContainer', () => {
  it('removes alert on close info', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissible: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close success', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Success, title: 'test', dismissible: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close warn', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Warn, title: 'test', dismissible: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('removes alert on close error', async () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Error, title: 'test', dismissible: true };
    const { emitted, getByText } = render(NeonAlertContainer, {
      props: { modelValue: [msg], placement: NeonAlertPlacement.TopLeft },
    });
    // when
    await fireEvent.click(getByText(msg.title));
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });
});
