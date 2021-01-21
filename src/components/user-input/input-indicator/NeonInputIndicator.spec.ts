import { mount } from '@vue/test-utils';
import NeonInputIndicator from './NeonInputIndicator.vue';
import { NeonSize } from '../../../common/enums/NeonSize';

describe('NeonInputIndicator', () => {
  it('renders label', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonInputIndicator, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-input-indicator__label').text()).toEqual(label);
    expect(wrapper.find('.neon-input-indicator--with-label').element).toBeDefined();
  });

  it('renders icon', () => {
    // given
    const icon = 'times';
    const wrapper = mount(NeonInputIndicator, {
      propsData: { icon },
    });
    // when / then
    expect(wrapper.find('.neon-input-indicator .neon-icon').element).toBeDefined();
    expect(wrapper.find('.neon-input-indicator--with-icon').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const wrapper = mount(NeonInputIndicator, {
      propsData: {},
    });
    // when / then
    expect(wrapper.find('.neon-input-indicator--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const size = NeonSize.Large;
    const wrapper = mount(NeonInputIndicator, {
      propsData: { size },
    });
    // when / then
    expect(wrapper.find('.neon-input-indicator--l').element).toBeDefined();
  });
});
