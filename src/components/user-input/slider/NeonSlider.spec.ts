import { mount } from '@vue/test-utils';
import NeonSlider from './NeonSlider.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonSlider', () => {
  it('renders default color', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-slider--primary').element).toBeDefined();
  });

  it('renders legend', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider--no-legend').element).toBeUndefined();
    expect(wrapper.find('.neon-slider__legend').element).toBeDefined();
  });

  it('does not render legend', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value, legend: false },
    });
    // when / then
    expect(wrapper.find('.neon-slider--no-legend').element).toBeDefined();
    expect(wrapper.find('.neon-slider__legend').element).toBeUndefined();
  });

  it('renders output', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider__output').element).toBeDefined();
  });

  it('does not render output', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value, output: false },
    });
    // when / then
    expect(wrapper.find('.neon-slider__output').element).toBeUndefined();
  });

  it('renders tooltip', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').element).toBeDefined();
  });

  it('does not render tooltip', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value, tooltip: false },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-slider__input').attributes().disabled).toBeUndefined();
  });

  it('does not render disabled', () => {
    // given
    const value = 5;
    const wrapper = mount(NeonSlider, {
      propsData: { value, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-slider--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-slider__input').attributes().disabled).toEqual('disabled');
  });

  it('renders id', () => {
    // given
    const value = 5;
    const id = 'lol';
    const wrapper = mount(NeonSlider, {
      propsData: { value, id },
    });
    // when / then
    expect(wrapper.find('.neon-slider__input').attributes().id).toEqual(id);
    expect(wrapper.find('.neon-slider__output').attributes().for).toEqual(id);
    expect(wrapper.find('.neon-slider__tooltip').attributes().for).toEqual(id);
  });

  it('renders value, min max', () => {
    // given
    const value = 5;
    const min = 1;
    const max = 42;
    const wrapper = mount(NeonSlider, {
      propsData: { value, min, max },
    });
    // when / then
    expect(wrapper.find('.neon-slider').attributes().style).toEqual(`--min: ${min}; --max: ${max}; --val: ${value};`);
  });

  it('renders formatted output', () => {
    // given
    const value = 5000.05;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider__output').text()).toEqual('5,000.05');
  });

  it('renders formatted tooltip', () => {
    // given
    const value = 5000.05;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').text()).toEqual('5,000.05');
  });

  it('renders formatted tooltip disabled formatting', () => {
    // given
    const value = 5000.05;
    const wrapper = mount(NeonSlider, {
      propsData: { value, disableFormatting: true },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').text()).toEqual(`${value}`);
  });

  it('renders formatted tooltip percentage with decimals', () => {
    // given
    const value = 0.42355;
    const wrapper = mount(NeonSlider, {
      propsData: { value, percentage: true, decimals: 2 },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').text()).toEqual('42.36%');
  });

  it('renders formatted tooltip with template', () => {
    // given
    const value = 42.355;
    const wrapper = mount(NeonSlider, {
      // eslint-disable-next-line no-template-curly-in-string
      propsData: { value, valueTemplate: '${value}', decimals: 2 },
    });
    // when / then
    expect(wrapper.find('.neon-slider__tooltip').text()).toEqual('$42.36');
  });

  it('renders formatted min/max', () => {
    // given
    const value = 5000;
    const min = 1000;
    const max = 99000;
    const wrapper = mount(NeonSlider, {
      propsData: { value, min, max },
    });
    // when / then
    expect(wrapper.find('.neon-slider__legend .neon-slider__legend-item:first-child').text()).toEqual('1,000');
    expect(wrapper.find('.neon-slider__legend .neon-slider__legend-item:last-child').text()).toEqual('99,000');
  });

  it('renders input attributes', () => {
    // given
    const value = 5000;
    const min = 1000;
    const max = 99000;
    const step = 10;
    const wrapper = mount(NeonSlider, {
      propsData: { value, min, max, step },
    });
    // when / then
    const attributes = wrapper.find('.neon-slider__input').attributes();
    expect((wrapper.find('.neon-slider__input').element as HTMLInputElement).value).toEqual('5000');
    expect(attributes['aria-valuenow']).toEqual('5000');
    expect(attributes.min).toEqual('1000');
    expect(attributes['aria-valuemin']).toEqual('1000');
    expect(attributes.max).toEqual('99000');
    expect(attributes['aria-valuemax']).toEqual('99000');
    expect(attributes.step).toEqual('10');
  });

  it('emits value change', () => {
    // given
    const value = 5;
    const newValue = 6;
    const wrapper = mount(NeonSlider, {
      propsData: { value },
    });
    // when
    wrapper.find('.neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([newValue]);
  });

  it('emits value change with lower bound', () => {
    // given
    const value = 5;
    const newValue = 1;
    const lowerBound = 2;
    const wrapper = mount(NeonSlider, {
      propsData: { value, lowerBound },
    });
    // when
    wrapper.find('.neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([lowerBound]);
  });

  it('emits value change with upper bound', () => {
    // given
    const value = 5;
    const newValue = 10;
    const upperBound = 9;
    const wrapper = mount(NeonSlider, {
      propsData: { value, upperBound },
    });
    // when
    wrapper.find('.neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([upperBound]);
  });
});
