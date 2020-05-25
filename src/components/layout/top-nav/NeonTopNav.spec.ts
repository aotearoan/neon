import { mount } from '@vue/test-utils';
import NeonTopNav from './NeonTopNav.vue';

describe('NeonTopNav', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonTopNav, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-top-nav p').text()).toEqual(slotValue);
  });
});
