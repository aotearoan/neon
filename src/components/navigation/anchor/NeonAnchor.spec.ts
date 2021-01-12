import { mount } from '@vue/test-utils';
import NeonAnchor from './NeonAnchor.vue';

describe('NeonAnchor', () => {
  it('renders anchor with id', () => {
    // given
    const id = 'xdd';
    const wrapper = mount(NeonAnchor, {
      propsData: { id },
    });
    // when / then
    expect(wrapper.find('a').attributes().id).toEqual(id);
  });
});
