import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonInput from '../input/NeonInput.vue';
import NeonFile from './NeonFile.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

Vue.component('NeonButton', NeonButton);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonInput', NeonInput);

describe('NeonFile', () => {
  it('renders default color', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    const wrapper = mount(NeonFile, {
      propsData: { color: NeonFunctionalColor.Info },
    });
    expect(wrapper.find('.neon-file--info').element).toBeDefined();
  });

  it('renders default size', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--m').element).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonFile, {
      propsData: { size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-file--s').element).toBeDefined();
  });

  it('renders disabled', () => {
    const wrapper = mount(NeonFile, {
      propsData: { disabled: true },
    });
    expect(wrapper.find('.neon-file--disabled').element).toBeDefined();
  });

  it('renders single', () => {
    const wrapper = mount(NeonFile, {
      propsData: {},
    });
    expect(wrapper.find('.neon-file--single').element).toBeDefined();
  });

  it('renders multiple', () => {
    const wrapper = mount(NeonFile, {
      propsData: { multiple: true },
    });
    expect(wrapper.find('.neon-file--single').element).toBeUndefined();
  });
});
