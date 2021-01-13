import { mount } from '@vue/test-utils';
import NeonSkeletonLoader from './NeonSkeletonLoader.vue';

describe('NeonSkeletonLoader', () => {
  it('renders correct number of loading bars', () => {
    // given
    const count = 5;
    const wrapper = mount(NeonSkeletonLoader, {
      propsData: { count },
    });
    // when / then
    expect(wrapper.findAll('.neon-skeleton-loader__item').length).toEqual(count);
  });
});
