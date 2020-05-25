import { mount } from '@vue/test-utils';
import NeonCardHeader from './NeonCardHeader.vue';

describe('NeonCardHeader', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonCardHeader, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-card-header p').text()).toEqual(slotValue);
  });
});
