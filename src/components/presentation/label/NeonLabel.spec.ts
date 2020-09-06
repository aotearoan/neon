import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../icon/NeonIcon.vue';
import NeonLabel from './NeonLabel.vue';
import { NeonLabelSize } from '../../../common/enums/NeonLabelSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';

Vue.component('NeonIcon', NeonIcon);

describe('NeonLabel', () => {
  const label = 'test label';

  it('renders label', () => {
    const wrapper = mount(NeonLabel, {
      propsData: { label },
    });
    expect(wrapper.find('.neon-label--with-label .neon-label__label').text()).toEqual(label);
  });

  it('renders icon', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon },
    });
    expect(wrapper.find('.neon-label--with-icon .neon-label__icon').element).toBeDefined();
  });

  it('renders default size', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon },
    });
    expect(wrapper.find('.neon-label--s').element).toBeDefined();
  });

  it('renders size', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon, size: NeonLabelSize.ExtraSmall },
    });
    expect(wrapper.find('.neon-label--xs').element).toBeDefined();
  });

  it('renders default color', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon },
    });
    expect(wrapper.find('.neon-label--neutral').element).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-label--primary').element).toBeDefined();
  });

  it('renders icon position left', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon },
    });
    expect(wrapper.find('.neon-label--icon-left').element).toBeDefined();
  });

  it('renders icon position right', () => {
    const icon = 'check';
    const wrapper = mount(NeonLabel, {
      propsData: { label, icon, iconPosition: NeonHorizontalPosition.Right },
    });
    expect(wrapper.find('.neon-label--icon-right').element).toBeDefined();
  });
});
