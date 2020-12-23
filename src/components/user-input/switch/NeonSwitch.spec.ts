import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonSwitchStyle } from '../../../common/enums/NeonSwitchStyle';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonSwitch from './NeonSwitch.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

Vue.component('NeonIcon', NeonIcon);

describe('NeonSwitch', () => {
  const value = true;
  const label = 'test';

  it('renders default switch style', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('.neon-switch--switch').element).toBeDefined();
  });

  it('renders switch style', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, switchStyle: NeonSwitchStyle.Checkbox },
    });
    // when / then
    expect(wrapper.find('.neon-switch--checkbox').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('.neon-switch--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, size: NeonSize.Small },
    });
    // when / then
    expect(wrapper.find('.neon-switch--s').element).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('.neon-switch--primary').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, color: NeonFunctionalColor.LowContrast },
    });
    // when / then
    expect(wrapper.find('.neon-switch--low-contrast').element).toBeDefined();
  });

  it('renders default disabled', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('.neon-switch--disabled').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-switch--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-switch--disabled').attributes('aria-disabled')).toEqual('true');
  });

  it('renders checked', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('input:checked').element).toBeDefined();
    expect(wrapper.find('.neon-switch--checked').element).toBeDefined();
    expect(wrapper.find('.neon-switch--checked').attributes('aria-checked')).toEqual('true');
  });

  it('renders indeterminate', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, indeterminate: true },
    });
    // when / then
    expect(wrapper.find('input:indeterminate').element).toBeDefined();
    expect(wrapper.find('.neon-switch--indeterminate').element).toBeDefined();
  });

  it('renders label', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when / then
    expect(wrapper.find('.neon-switch__label').text()).toEqual(label);
  });

  it('renders icon for checkbox', () => {
    // given
    const wrapper = mount(NeonSwitch, {
      propsData: { label, value, switchStyle: NeonSwitchStyle.Checkbox },
    });
    // when / then
    expect(wrapper.find('.neon-switch--checked .neon-switch__checkbox.neon-icon svg').element).toBeDefined();
  });

  it('emits false when clicking checked checkbox', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when
    const labelElement = wrapper.find('.neon-switch');
    labelElement.trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('emits true when clicking unchecked checkbox', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value: false },
    });
    // when
    const labelElement = wrapper.find('.neon-switch');
    labelElement.trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('emits true when clicking indeterminate checkbox', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value: false, indeterminate: true },
    });
    // when
    const labelElement = wrapper.find('.neon-switch');
    labelElement.trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
    expect(wrapper.emitted()['indeterminate-change'][0]).toEqual([false]);
  });

  it('emits nothing when clicking disabled option', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, disabled: true },
    });
    // when
    const labelElement = wrapper.find('.neon-switch');
    labelElement.trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits false when keypress enter', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when
    wrapper.find('.neon-switch').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('emits nothing when keypress enter and disabled', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, disabled: true },
    });
    // when
    wrapper.find('.neon-switch').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits false when keypress space', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value },
    });
    // when
    wrapper.find('.neon-switch').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('emits nothing when keypress space and disabled', () => {
    // given
    const wrapper = shallowMount(NeonSwitch, {
      propsData: { label, value, disabled: true },
    });
    // when
    wrapper.find('.neon-switch').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
