import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonInput from './NeonInput.vue';
import { NeonInputType } from '../../../common/enums/NeonInputType';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonState } from '../../../common/enums/NeonState';

Vue.component('NeonIcon', NeonIcon);

describe('NeonInput', () => {
  it('renders placeholder', () => {
    const value = '';
    const placeholder = 'test label';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, placeholder },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).placeholder).toEqual(placeholder);
  });

  it('renders placeholder visible class', () => {
    const value = '';
    const placeholder = 'test label';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, placeholder },
    });
    expect(wrapper.find('.neon-input--placeholder-visible').element).toBeDefined();
  });

  it('does not renders placeholder visible class when value is set', () => {
    const value = '1';
    const placeholder = 'test label';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, placeholder },
    });
    expect(wrapper.find('.neon-input--placeholder-visible').element).toBeUndefined();
  });

  it('renders value', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).value).toEqual(value);
  });

  it('renders as input by default', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect(wrapper.find('input')).toBeDefined();
  });

  it('renders textarea', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, rows: 1 },
    });
    expect(wrapper.find('textarea')).toBeDefined();
  });

  it('renders type as text by default', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect((wrapper.find('input').element as HTMLInputElement).type).toEqual(NeonInputType.Text);
  });

  it('renders type', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, type: NeonInputType.Email },
    });
    expect((wrapper.find('input').element as HTMLInputElement).type).toEqual(NeonInputType.Email);
  });

  it('renders default size', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect(wrapper.find('.neon-input--m').element).toBeDefined();
  });

  it('renders size', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-input--s').element).toBeDefined();
  });

  it('renders default color', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect(wrapper.find('.neon-input--primary').element).toBeDefined();
  });

  it('renders color', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, color: NeonFunctionalColor.Info },
    });
    expect(wrapper.find('.neon-input--info').element).toBeDefined();
  });

  it('renders default state', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    expect(wrapper.find('.neon-input--state-ready').element).toBeDefined();
  });

  it('renders state', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, state: NeonState.Loading },
    });
    expect(wrapper.find('.neon-input--state-loading').element).toBeDefined();
  });

  it('renders disabled', () => {
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, disabled: true },
    });
    expect(wrapper.find('.neon-input--disabled').element).toBeDefined();
    expect(wrapper.find('input[disabled]').element).toBeDefined();
  });

  it('emits input event', () => {
    // given
    const value = 'test';
    const newValue = 'new value';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    // when
    const input = wrapper.find('input');
    input.setValue(newValue);

    // then
    expect(wrapper.emitted().input[0]).toEqual([newValue]);
  });

  it('emits focus/blur events', () => {
    // given
    const value = 'test';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value },
    });
    // when
    const input = wrapper.find('input');
    input.trigger('focus');
    input.trigger('blur');

    // then
    expect(wrapper.emitted().focus).toBeDefined();
    expect(wrapper.emitted().blur).toBeDefined();
  });

  it('renders icon', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus' },
    });
    expect(wrapper.find('.neon-icon')).toBeDefined();
  });

  it('emits icon click event', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus' },
    });
    // when
    wrapper.find('.neon-icon').trigger('click');
    // then
    expect(wrapper.emitted()['icon-click'][0]).toBeDefined();
  });

  it('clears input when no icon and clicked', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-icon').trigger('click');
    // then
    expect(wrapper.emitted()['icon-click']).toBeUndefined();
    expect(wrapper.emitted().input[0]).toEqual(['']);
  });
});
