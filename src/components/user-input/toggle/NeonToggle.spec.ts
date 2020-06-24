import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonToggleStyle } from '../../../common/enums/NeonToggleStyle';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonOrientation } from '../../../common/enums/NeonOrientation';
import NeonToggle from './NeonToggle.vue';
import NeonIcon from '../../design/icon/NeonIcon';

Vue.component('NeonIcon', NeonIcon);

describe('NeonToggle', () => {
  const name = 'xd';

  const model = [
    {
      label: 'Option 1',
      key: 'option-1',
    },
    {
      label: 'Option 2',
      key: 'option-2',
      disabled: true,
    },
    {
      label: 'Option 3',
      key: 'option-3',
    },
  ];

  const iconModel = [
    {
      icon: 'align-left',
      key: 'left',
    },
    {
      icon: 'align-right',
      key: 'right',
    },
  ];

  const value = model[0].key;
  const iconValue = iconModel[0].key;

  it('renders default toggle style', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--toggle').element).toBeDefined();
  });

  it('renders toggle style', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, toggleStyle: NeonToggleStyle.RadioButtons },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--radio-buttons').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, size: NeonSize.Small },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--s').element).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--neutral').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--primary').element).toBeDefined();
  });

  it('renders default disabled', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--disabled').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--disabled').element).toBeDefined();
  });

  it('renders icon', () => {
    // given
    const wrapper = mount(NeonToggle, {
      propsData: { name, model: iconModel, value: iconValue },
    });
    // when / then
    expect(wrapper.findAll('.neon-toggle__label--with-icon').length).toEqual(2);
  });

  it('renders default orientation', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--vertical').element).toBeDefined();
  });

  it('renders orientation', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, orientation: NeonOrientation.Horizontal },
    });
    // when / then
    expect(wrapper.find('.neon-toggle--horizontal').element).toBeDefined();
  });

  it('renders name', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.findAll(`input[name="${name}"]`).length).toEqual(3);
  });

  it('renders disabled option', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.findAll('input[disabled]').length).toEqual(1);
    expect(wrapper.findAll('.neon-toggle__label--disabled').length).toEqual(1);
  });

  it('renders checked option', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.findAll('input:checked').length).toEqual(1);
    expect(wrapper.findAll('.neon-toggle__label--checked').length).toEqual(1);
  });

  it('renders label', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect(wrapper.find('.neon-toggle__label--checked').text()).toEqual(model[0].label);
  });

  it('renders label', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when / then
    expect((wrapper.find('input:checked').element as HTMLInputElement).value).toEqual(model[0].key);
  });

  it('renders indicator for radio buttons', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value, toggleStyle: NeonToggleStyle.RadioButtons },
    });
    // when / then
    expect(wrapper.find('.neon-toggle__label--checked .neon-toggle__radio-button-indicator').element).toBeDefined();
  });

  it('emits selection when clicked', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when
    const label = wrapper.find(
      '.neon-toggle__label:not(.neon-toggle__label--checked):not(.neon-toggle__label--disabled)',
    );
    label.trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([model[2].key]);
  });

  it('emits nothing when clicking disabled option', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when
    const label = wrapper.find('.neon-toggle__label--disabled');
    label.trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits nothing when clicking checked option', () => {
    // given
    const wrapper = shallowMount(NeonToggle, {
      propsData: { name, model, value },
    });
    // when
    const label = wrapper.find('.neon-toggle__label--checked');
    label.trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
