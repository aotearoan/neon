import { shallowMount } from '@vue/test-utils';
import NeonAlertContainer from './NeonAlertContainer.vue';
import { NeonAlertPlacement } from '../../../../common/enums/NeonAlertPlacement';
import { NeonAlertLevel } from '../../../../common/enums/NeonAlertLevel';

describe('NeonAlertContainer', () => {
  it('removes alert on close', () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissable: true };
    const wrapper = shallowMount(NeonAlertContainer, {
      propsData: {
        value: [msg],
        placement: NeonAlertPlacement.TopLeft,
      },
    });
    // when
    wrapper.find('.neon-alert__message').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });
});
