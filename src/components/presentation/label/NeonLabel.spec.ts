import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonLabel from './NeonLabel.vue';
import { NeonLabelSize } from './NeonLabelSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../common/NeonHorizontalPosition';

Vue.component('NeonIcon', NeonIcon);

describe('NeonLabel', () => {
  it('renders label', () => {
    const label = 'test label';
    const wrapper = mount(NeonLabel, {
      propsData: { label },
    });
    expect(wrapper.find('.neon-label--with-label .neon-label__label').text()).toEqual(label);
  });

  it('renders icon', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-label--with-icon .neon-label__icon').element).toBeDefined();
  });

  it('renders default size', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-label--s').element).toBeDefined();
  });

  it('renders size', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon, size: NeonLabelSize.ExtraSmall },
    });
    expect(wrapper.find('.neon-label--xs').element).toBeDefined();
  });

  it('renders default color', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-label--neutral').element).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-label--primary').element).toBeDefined();
  });

  it('renders solid style', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-label--solid').element).toBeDefined();
  });

  it('renders outline style', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon, outline: true },
    });
    expect(wrapper.find('.neon-label--outline').element).toBeDefined();
  });

  it('renders icon position left', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-label--icon-left').element).toBeDefined();
  });

  it('renders icon position right', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { icon, iconPosition: NeonHorizontalPosition.Right },
    });
    expect(wrapper.find('.neon-label--icon-right').element).toBeDefined();
  });
});
