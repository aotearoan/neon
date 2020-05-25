import { mount } from '@vue/test-utils';
import NeonFooter from './NeonFooter.vue';

describe('NeonFooter', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonFooter, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-footer p').text()).toEqual(slotValue);
  });
});
