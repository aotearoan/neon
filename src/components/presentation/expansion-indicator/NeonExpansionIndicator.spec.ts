import { shallowMount } from '@vue/test-utils';
import NeonExpansionIndicator from './NeonExpansionIndicator.vue';

describe('NeonExpansionIndicator', () => {
  it('renders indicator closed', () => {
    // given
    const wrapper = shallowMount(NeonExpansionIndicator, {
      propsData: {},
    });
    // when / then
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeUndefined();
  });

  it('renders indicator expanded', () => {
    // given
    const wrapper = shallowMount(NeonExpansionIndicator, {
      propsData: { expanded: true },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeDefined();
  });
});
