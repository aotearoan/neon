import { mount } from '@vue/test-utils';
import NeonColor from './NeonColor.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonColor', () => {
  it('renders default size', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55' },
    });
    expect(wrapper.find('.neon-color--m').element).toBeDefined();
    expect(wrapper.findAll('.neon-input--m').length).toEqual(2);
  });

  it('renders size', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55', size: NeonSize.Large },
    });
    expect(wrapper.find('.neon-color--l').element).toBeDefined();
    expect(wrapper.findAll('.neon-input--l').length).toEqual(2);
  });

  it('renders default color', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55' },
    });
    expect(wrapper.find('.neon-color--low-contrast').element).toBeDefined();
    expect(wrapper.findAll('.neon-input--low-contrast').length).toEqual(2);
  });

  it('renders color', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55', color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-color--brand').element).toBeDefined();
    expect(wrapper.findAll('.neon-input--brand').length).toEqual(2);
  });

  it('renders default not disabled', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55' },
    });
    expect(wrapper.find('.neon-color--disabled').element).toBeUndefined();
    expect(wrapper.findAll('.neon-input--disabled').length).toEqual(0);
  });

  it('renders disabled', () => {
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55', disabled: true },
    });
    expect(wrapper.find('.neon-color--disabled').element).toBeDefined();
    expect(wrapper.findAll('.neon-input--disabled').length).toEqual(2);
  });

  it('renders placeholder', () => {
    const placeholder = 'xdd';
    const wrapper = mount(NeonColor, {
      propsData: { value: '#bada55', placeholder },
    });
    expect(wrapper.find('.neon-color__text-input .neon-input__textfield').attributes().placeholder).toEqual(
      placeholder,
    );
  });

  it('renders value', () => {
    const value = '#bada55';
    const wrapper = mount(NeonColor, {
      propsData: { value },
    });
    expect((wrapper.find('.neon-color__text-input .neon-input__textfield').element as HTMLInputElement).value).toEqual(
      value,
    );
    expect((wrapper.find('.neon-color__input .neon-input__textfield').element as HTMLInputElement).value).toEqual(
      value,
    );
    expect(
      (wrapper.find('.neon-color__indicator').element as HTMLInputElement).style.getPropertyValue('background-color'),
    ).toEqual('rgb(186, 218, 85)');
    expect(
      (wrapper.find('.neon-color__indicator').element as HTMLInputElement).style.getPropertyValue('box-shadow'),
    ).toEqual(`0 0 0 4px ${value}4D`);
  });

  it('emits changed text value', () => {
    const value = '#bada55';
    const newValue = '#1a1a1a';
    const wrapper = mount(NeonColor, {
      propsData: { value },
    });
    wrapper.find('.neon-color__text-input .neon-input__textfield').setValue(newValue);
    expect(wrapper.emitted().input[0]).toEqual([newValue]);
  });

  it('emits changed color picker value', () => {
    const value = '#bada55';
    const newValue = '#1a1a1a';
    const wrapper = mount(NeonColor, {
      propsData: { value },
    });
    wrapper.find('.neon-color__input .neon-input__textfield').setValue(newValue);
    expect(wrapper.emitted().input[0]).toEqual([newValue]);
  });
});
