import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonInput from './NeonInput.vue';
import NeonInputClass from './NeonInput';
import { NeonInputType } from '../../../common/enums/NeonInputType';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonState } from '../../../common/enums/NeonState';

Vue.component('NeonIcon', NeonIcon);

describe('NeonInput', () => {
  it('renders id', () => {
    const value = '';
    const id = 'test id';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, id },
    });
    expect(wrapper.find('.neon-input__textfield').attributes().id).toEqual(id);
  });

  it('renders placeholder', () => {
    const value = '';
    const placeholder = 'test label';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, placeholder },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).placeholder).toEqual(placeholder);
  });

  it('renders telephone placeholder', () => {
    const value = '';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, type: NeonInputType.Tel },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).placeholder).toEqual('+41785551234');
  });

  it('renders url placeholder', () => {
    const value = '';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, type: NeonInputType.Url },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).placeholder).toEqual(
      'http://www.getskeleton.com',
    );
  });

  it('renders email placeholder', () => {
    const value = '';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, type: NeonInputType.Email },
    });
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).placeholder).toEqual(
      'gbelson@hooli.com',
    );
  });

  it('renders placeholder visible class', () => {
    const value = '';
    const placeholder = 'test label';
    const wrapper = shallowMount(NeonInput, {
      propsData: { value, placeholder },
    });
    expect(wrapper.find('.neon-input--placeholder-visible').element).toBeDefined();
  });

  it('does not render placeholder visible class when value is set', () => {
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
    expect(wrapper.find('textarea').attributes().rows).toEqual('1');
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
    expect(wrapper.find('.neon-input--low-contrast').element).toBeDefined();
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

  it('focuses when focus is called', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus' },
    });
    const vm = wrapper.vm as NeonInputClass;
    const focusFn = vm.$refs.neonInput.focus;
    vm.$refs.neonInput.focus = jest.fn();
    // when
    vm.focus();
    // then
    expect(vm.$refs.neonInput.focus).toHaveBeenCalled();
    vm.$refs.neonInput.focus = focusFn;
  });

  it('clicks on input whn click is called', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus' },
    });
    const vm = wrapper.vm as NeonInputClass;
    const clickFn = vm.$refs.neonInput.click;
    vm.$refs.neonInput.click = jest.fn();
    // when
    vm.click();
    // then
    expect(vm.$refs.neonInput.click).toHaveBeenCalled();
    vm.$refs.neonInput.click = clickFn;
  });

  it('renders icon', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus' },
    });
    expect(wrapper.find('.neon-icon')).toBeDefined();
  });

  it('determines iconName Success', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Success },
    });
    const vm = wrapper.vm as NeonInputClass;
    expect(vm.iconName).toEqual('check');
  });

  it('determines iconName Success, stateIcon = false', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Success, stateIcon: false },
    });
    const vm = wrapper.vm as NeonInputClass;
    expect(vm.iconName).toBeUndefined();
  });

  it('determines iconName Error', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Error },
    });
    const vm = wrapper.vm as NeonInputClass;
    expect(vm.iconName).toEqual('times');
  });

  it('hides icon', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus', hideIcon: true },
    });
    const vm = wrapper.vm as NeonInputClass;
    expect(vm.iconVisible).toEqual(false);
  });

  it('sets stateHighlight default', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Error },
    });
    expect(wrapper.find('.neon-input--with-state-highlight').element).toBeDefined();
  });

  it('sets stateHighlight false', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Error, stateHighlight: false },
    });
    expect(wrapper.find('.neon-input--with-state-highlight').element).toBeUndefined();
  });

  it('sets stateIcon default', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Error },
    });
    expect(wrapper.find('.neon-input--with-state-icon').element).toBeDefined();
  });

  it('sets stateIcon false', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, state: NeonState.Error, stateIcon: false },
    });
    expect(wrapper.find('.neon-input--with-state-icon').element).toBeUndefined();
  });

  it('sets tabindex', () => {
    // given
    const value = 'test';
    const tabindex = 14;
    const wrapper = mount(NeonInput, {
      propsData: { value, tabindex },
    });
    expect(wrapper.find('input').attributes().tabindex).toEqual(`${tabindex}`);
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

  it('does not emit icon click event when disabled', () => {
    // given
    const value = 'test';
    const wrapper = mount(NeonInput, {
      propsData: { value, icon: 'plus', disabled: true },
    });
    // when
    wrapper.find('.neon-icon').trigger('click');
    // then
    expect(wrapper.emitted()['icon-click']).toBeUndefined();
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

  it('does not render clear icon for empty input', () => {
    // given
    const value = '';
    const wrapper = mount(NeonInput, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-icon').element).toBeUndefined();
  });
});
