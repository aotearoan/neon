import { shallowMount } from '@vue/test-utils';
import NeonToastContainer from './NeonToastContainer.vue';
import { NeonAlertLevel } from '../../../../common/enums/NeonAlertLevel';
import { NeonVerticalPosition } from '../../../../common/enums/NeonVerticalPosition';

describe('NeonToastContainer', () => {
  it('removes toast on close', () => {
    // given
    const msg = { id: 42, level: NeonAlertLevel.Info, title: 'test', dismissable: true };
    const wrapper = shallowMount(NeonToastContainer, {
      propsData: {
        value: [msg],
        placement: NeonVerticalPosition.Bottom,
      },
    });
    // when
    wrapper.find('.neon-toast__message').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });
});
