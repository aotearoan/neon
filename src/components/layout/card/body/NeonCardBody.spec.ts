import { mount } from '@vue/test-utils';
import NeonCardBody from './NeonCardBody.vue';

describe('NeonCardBody', () => {
  it('renders full width class', () => {
    // given
    const wrapper = mount(NeonCardBody, {
      propsData: { fullWidth: true },
    });
    // when / then
    expect(wrapper.find('.neon-card-body--full-width').element).toBeDefined();
  });

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonCardBody, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-card-body p').text()).toEqual(slotValue);
  });
});
