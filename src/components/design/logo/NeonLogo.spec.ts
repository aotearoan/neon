import { shallowMount } from '@vue/test-utils';
import NeonLogo from './NeonLogo.vue';

describe('NeonLogo', () => {
  it('renders logo class', () => {
    const wrapper = shallowMount(NeonLogo, {
      propsData: {},
    });
    expect(wrapper.find('.neon-logo').element).toBeDefined();
  });
});
