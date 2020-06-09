import { mount } from '@vue/test-utils';
import NeonCardFooter from './NeonCardFooter.vue';

describe('NeonCardFooter', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonCardFooter, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-card-footer p').text()).toEqual(slotValue);
  });
});
