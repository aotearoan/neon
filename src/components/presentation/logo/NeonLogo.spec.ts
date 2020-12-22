import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import NeonLogo from './NeonLogo.vue';
import NeonIcon from '../icon/NeonIcon.vue';

Vue.component('NeonIcon', NeonIcon);

describe('NeonLogo', () => {
  it('renders logo class', () => {
    const wrapper = shallowMount(NeonLogo, {
      propsData: {},
    });
    expect(wrapper.find('.neon-logo').element).toBeDefined();
  });
});
