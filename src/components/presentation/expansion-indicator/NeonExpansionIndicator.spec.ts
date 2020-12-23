import { shallowMount } from '@vue/test-utils';
import NeonExpansionIndicator from './NeonExpansionIndicator.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

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

  it('renders inverse', () => {
    // given
    const wrapper = shallowMount(NeonExpansionIndicator, {
      propsData: { inverse: true },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-indicator--inverse').element).toBeDefined();
  });

  it('renders disabled', () => {
    // given
    const wrapper = shallowMount(NeonExpansionIndicator, {
      propsData: { disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-indicator--disabled').element).toBeDefined();
  });

  it('renders indicator color', () => {
    // given
    const wrapper = shallowMount(NeonExpansionIndicator, {
      propsData: { color: NeonFunctionalColor.Info },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-indicator--info').element).toBeDefined();
  });
});
