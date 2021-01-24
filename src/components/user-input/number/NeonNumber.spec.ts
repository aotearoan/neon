import { mount } from '@vue/test-utils';
import NeonNumberClass from './NeonNumber';
import NeonNumber from './NeonNumber.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonInputMode } from '../../../common/enums/NeonInputMode';

describe('NeonNumber', () => {
  it('renders default size', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number--m').element).toBeDefined();
    expect(wrapper.find('.neon-input--m').element).toBeDefined();
    expect(wrapper.findAll('.neon-button--m').length).toEqual(2);
  });

  it('renders size', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-number--l').element).toBeDefined();
    expect(wrapper.find('.neon-input--l').element).toBeDefined();
    expect(wrapper.findAll('.neon-button--l').length).toEqual(2);
  });

  it('renders default color', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-input--low-contrast').element).toBeDefined();
    expect(wrapper.findAll('.neon-button--low-contrast').length).toEqual(2);
  });

  it('renders color', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-number--primary').element).toBeDefined();
    expect(wrapper.find('.neon-input--primary').element).toBeDefined();
    expect(wrapper.findAll('.neon-button--primary').length).toEqual(2);
  });

  it('renders enabled', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-input--disabled').element).toBeUndefined();
    expect(wrapper.findAll('.neon-button--disabled').length).toEqual(0);
  });

  it('renders disabled', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-number--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-input--disabled').element).toBeDefined();
    expect(wrapper.findAll('.neon-button--disabled').length).toEqual(2);
  });

  it('renders input editable by default', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number--editable').element).toBeDefined();
    expect(wrapper.find('.neon-input--disabled').element).toBeUndefined();
  });

  it('renders input non editable', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, editable: false },
    });
    // when / then
    expect(wrapper.find('.neon-number--editable').element).toBeUndefined();
    expect(wrapper.find('.neon-input--disabled').element).toBeDefined();
  });

  it('renders decrement spin button disabled when at min', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, min: value },
    });
    // when / then
    expect(wrapper.find('.neon-number__decrement.neon-button--disabled').element).toBeDefined();
  });

  it('renders increment spin button disabled when at max', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, max: value },
    });
    // when / then
    expect(wrapper.find('.neon-number__increment.neon-button--disabled').element).toBeDefined();
  });

  it('renders spin buttons by default', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number--with-buttons').element).toBeDefined();
    expect(wrapper.findAll('.neon-button').length).toEqual(2);
  });

  it('renders without spin buttons', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, spinButtons: false },
    });
    // when / then
    expect(wrapper.find('.neon-number--with-buttons').element).toBeUndefined();
    expect(wrapper.findAll('.neon-button').length).toEqual(0);
  });

  it('renders default decrement label', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number__decrement').attributes()['aria-label']).toEqual('Decrement');
  });

  it('renders decrement label', () => {
    // given
    const value = 42;
    const decrementLabel = 'XDD';
    const wrapper = mount(NeonNumber, {
      propsData: { value, decrementLabel },
    });
    // when / then
    expect(wrapper.find('.neon-number__decrement').attributes()['aria-label']).toEqual(decrementLabel);
  });

  it('renders default increment label', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-number__increment').attributes()['aria-label']).toEqual('Increment');
  });

  it('renders increment label', () => {
    // given
    const value = 42;
    const incrementLabel = 'XDD';
    const wrapper = mount(NeonNumber, {
      propsData: { value, incrementLabel },
    });
    // when / then
    expect(wrapper.find('.neon-number__increment').attributes()['aria-label']).toEqual(incrementLabel);
  });

  it('emits default decrement of 1', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-number__decrement').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value - 1]);
  });

  it('emits step decrement', () => {
    // given
    const value = 42;
    const step = 5;
    const wrapper = mount(NeonNumber, {
      propsData: { value, step },
    });
    // when
    wrapper.find('.neon-number__decrement').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value - step]);
  });

  it('does not emit when decrement disabled', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, disabled: true },
    });
    // when
    wrapper.find('.neon-number__decrement').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits default increment of 1', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-number__increment').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value + 1]);
  });

  it('emits step increment', () => {
    // given
    const value = 42;
    const step = 5;
    const wrapper = mount(NeonNumber, {
      propsData: { value, step },
    });
    // when
    wrapper.find('.neon-number__increment').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value + step]);
  });

  it('does not emit when increment disabled', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, disabled: true },
    });
    // when
    wrapper.find('.neon-number__increment').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('renders input max', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, max: 50 },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().max).toEqual('50');
    expect(wrapper.find('.neon-input__textfield').attributes()['aria-valuemax']).toEqual('50');
  });

  it('renders input min', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, min: 11 },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().min).toEqual('11');
    expect(wrapper.find('.neon-input__textfield').attributes()['aria-valuemin']).toEqual('11');
  });

  it('renders default step', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().step).toEqual('1');
  });

  it('renders step', () => {
    // given
    const value = 42;
    const step = 5;
    const wrapper = mount(NeonNumber, {
      propsData: { value, step },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().step).toEqual('5');
  });

  it('renders formatted value (default)', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).value).toEqual('1,000');
    expect(wrapper.find('.neon-input__textfield').attributes()['aria-valuenow']).toEqual('1000');
  });

  it('renders formatted value with decimals', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value, decimals: 2 },
    });
    // when / then
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).value).toEqual('1,000.00');
    expect(wrapper.find('.neon-input__textfield').attributes()['aria-valuenow']).toEqual('1000');
  });

  it('renders raw value when focussed', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when
    vm.onFocus();
    // then
    expect(vm.displayValue).toEqual(value);
  });

  it('renders formatted value when blurred', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when
    vm.onFocus();
    vm.onBlur();
    // then
    expect(vm.displayValue).toEqual('1,000');
  });

  it('renders default input mode', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().inputmode).toEqual(NeonInputMode.Numeric);
  });

  it('renders input mode', () => {
    // given
    const value = 1000;
    const wrapper = mount(NeonNumber, {
      propsData: { value, inputmode: NeonInputMode.Decimal },
    });
    // when / then
    expect(wrapper.find('.neon-input__textfield').attributes().inputmode).toEqual(NeonInputMode.Decimal);
  });

  it('renders percentage', () => {
    // given
    const value = 0.42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, percentage: true },
    });
    // when / then
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).value).toEqual('42%');
  });

  it('renders using valueTemplate', () => {
    // given
    const value = 5.42;
    const wrapper = mount(NeonNumber, {
      // eslint-disable-next-line no-template-curly-in-string
      propsData: { value, valueTemplate: '${value}' },
    });
    // when / then
    expect((wrapper.find('.neon-input__textfield').element as HTMLInputElement).value).toEqual('$5.42');
  });

  it('emits input when value changed', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-input__textfield').setValue('50');
    // then
    expect(wrapper.emitted().input[0]).toEqual([50]);
  });

  it('emits null for empty value', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-input__textfield').setValue('');
    // then
    expect(wrapper.emitted().input[0]).toEqual([null]);
  });

  it('does not emit a value when invalid input', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-input__textfield').setValue(NaN);
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('does not emit input when value changed and disabled', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, disabled: true },
    });
    // when
    wrapper.find('.neon-input__textfield').setValue('50');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('calculates computedValue valid number', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.computedValue).toEqual(value);
  });

  it('calculates computedValue with decimals', () => {
    // given
    const value = 42.357;
    const wrapper = mount(NeonNumber, {
      propsData: { value, decimals: 2 },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.computedValue).toEqual(42.36);
  });

  it('calculates computedValue null', () => {
    // given
    const value = null;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.computedValue).toEqual(0);
  });

  it('calculates rawValue valid number', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.rawValue).toEqual(value);
  });

  it('calculates rawValue with decimals', () => {
    // given
    const value = 42.3;
    const decimals = 2;
    const wrapper = mount(NeonNumber, {
      propsData: { value, decimals },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.rawValue).toEqual('42.30');
  });

  it('calculates rawValue null', () => {
    // given
    const value = null;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    const vm = wrapper.vm as NeonNumberClass;
    // when / then
    expect(vm.rawValue).toEqual(value);
  });

  it('decrements value with down arrow', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.down.prevent');
    // then
    expect(wrapper.emitted().input[0]).toEqual([41]);
  });

  it('does not decrement value when at min', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, min: value },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.down.prevent');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits min value when decrementing past min', () => {
    // given
    const value = 42;
    const step = 5;
    const wrapper = mount(NeonNumber, {
      propsData: { value, min: value - 1, step },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.down.prevent');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value - 1]);
  });

  it('increments value with up arrow', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.up.prevent');
    // then
    expect(wrapper.emitted().input[0]).toEqual([43]);
  });

  it('does not increment value when at max', () => {
    // given
    const value = 42;
    const wrapper = mount(NeonNumber, {
      propsData: { value, max: value },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.up.prevent');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits max value when incrementing past max', () => {
    // given
    const value = 42;
    const step = 5;
    const wrapper = mount(NeonNumber, {
      propsData: { value, max: value + 1, step },
    });
    // when
    wrapper.find('.neon-input__textfield').trigger('keydown.up.prevent');
    // then
    expect(wrapper.emitted().input[0]).toEqual([value + 1]);
  });
});
