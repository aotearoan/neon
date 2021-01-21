import { mount } from '@vue/test-utils';
import NeonFieldGroup from './NeonFieldGroup.vue';

describe('NeonFieldGroup', () => {
  it('renders default slot', () => {
    // given
    const content = 'xdd';
    const wrapper = mount(NeonFieldGroup, {
      propsData: {},
      slots: { default: `<p>${content}</p>` },
    });
    // when / then
    expect(wrapper.find('.neon-field-group p').text()).toEqual(content);
  });
});
