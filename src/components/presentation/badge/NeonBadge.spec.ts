import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../icon/NeonIcon.vue';
import NeonBadge from './NeonBadge.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

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
    // given
    const image = '/test.jpg';
    const wrapper = mount(NeonBadge, {
      propsData: { image },
    });
    // when
    const img = wrapper.find('.neon-badge--with-image .neon-badge__image');
    // then
    expect(img.attributes().src).toEqual(image);
    expect(img.attributes().alt).toEqual('Badge');
  });

  it('renders image with imageAlt', () => {
    // given
    const image = '/test.jpg';
    const wrapper = mount(NeonBadge, {
      propsData: { image, imageAlt: 'xdd' },
    });
    // when
    const img = wrapper.find('.neon-badge--with-image .neon-badge__image');
    // then
    expect(img.attributes().src).toEqual(image);
    expect(img.attributes().alt).toEqual('xdd');
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
    expect(wrapper.find('.neon-badge--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-badge--primary').element).toBeDefined();
  });

  it('renders alternateColor', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, alternateColor: NeonFunctionalColor.LowContrast },
    });
    expect(wrapper.find('.neon-badge--alternate-color-low-contrast').element).toBeDefined();
  });

  it('renders disabled', () => {
    const icon = 'check';
    const wrapper = mount(NeonBadge, {
      propsData: { icon, disabled: true },
    });
    expect(wrapper.find('.neon-badge--disabled').element).toBeDefined();
  });
});
