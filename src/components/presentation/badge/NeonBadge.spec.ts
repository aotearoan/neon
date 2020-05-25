import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonBadge from './NeonBadge.vue';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

Vue.component('NeonIcon', NeonIcon);

describe('NeonBadge', () => {
  it('renders label', () => {
    const label = 'test label';
    const wrapper = mount(NeonBadge, {
      propsData: { label },
    });
    expect(wrapper.find('.neon-badge--with-label .neon-badge__label').text()).toEqual(label);
  });

  it('renders image', () => {
    const image = '/test.jpg';
    const wrapper = mount(NeonBadge, {
      propsData: { image },
    });
    expect(wrapper.find('.neon-badge--with-image .neon-badge__image').attributes().src).toEqual(image);
  });

  it('renders icon', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-badge--with-icon .neon-badge__icon').element).toBeDefined();
  });

  it('renders square class', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-badge--square').element).toBeDefined();
  });

  it('renders circular class', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, circular: true },
    });
    expect(wrapper.find('.neon-badge--circular').element).toBeDefined();
  });

  it('renders default size', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-badge--m').element).toBeDefined();
  });

  it('renders size', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-badge--s').element).toBeDefined();
  });

  it('renders default color', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-badge--neutral').element).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-badge--primary').element).toBeDefined();
  });
});
