import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonRangeSlider from './NeonRangeSlider.vue';
import NeonSlider from '../slider/NeonSlider.vue';

Vue.component('NeonSlider', NeonSlider);

describe('NeonRangeSlider', () => {
  it('renders enabled', () => {
    // given
    const value = [5, 10];
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider--disabled').element).toBeUndefined();
    expect(wrapper.findAll('.neon-slider--disabled').length).toEqual(0);
  });

  it('renders disabled', () => {
    // given
    const value = [5, 10];
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value, disabled: true },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider--disabled').element).toBeDefined();
    expect(wrapper.findAll('.neon-slider--disabled').length).toEqual(2);
  });

  it('renders output', () => {
    // given
    const value = [5000, 10000];
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider__output-range').text()).toEqual('5,000 : 10,000');
  });

  it('renders output disabled formatting', () => {
    // given
    const value = [5000, 10000];
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value, disableFormatting: true },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider__output-range').text()).toEqual('5000 : 10000');
  });

  it('does not render output', () => {
    // given
    const value = [5000, 10000];
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value, output: false },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider__output').element).toBeUndefined();
  });

  it('renders all upper bound', () => {
    // given
    const value = [10000, 10000];
    const max = 10000;
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value, max },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.find('.neon-range-slider--all-upper-bound').element).toBeDefined();
  });

  it('matches snapshot', () => {
    // given
    const value = [5000, 10000];
    const min = 1000;
    const lowerBound = 2000;
    const max = 50000;
    const upperBound = 49000;
    const step = 100;
    const decimals = 2;
    // eslint-disable-next-line no-template-curly-in-string
    const valueTemplate = '${value}';
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value, min, max, lowerBound, upperBound, step, decimals, valueTemplate },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when / then
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('emits lower change inside bound', () => {
    // given
    const value = [5, 10];
    const newValue = 6;
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when
    wrapper.find('.neon-range-slider__lower .neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([[newValue, value[1]]]);
  });

  it('emits lower change outside bound', () => {
    // given
    const value = [5, 10];
    const newValue = 11;
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when
    wrapper.find('.neon-range-slider__lower .neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[1], value[1]]]);
  });

  it('emits upper change outside bound', () => {
    // given
    const value = [5, 10];
    const newValue = 4;
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when
    wrapper.find('.neon-range-slider__upper .neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[0], value[0]]]);
  });

  it('emits upperBound change inside bound', () => {
    // given
    const value = [5, 10];
    const newValue = 6;
    const wrapper = mount(NeonRangeSlider, {
      propsData: { value },
      mocks: {
        $t: (key: string) => key,
      },
    });
    // when
    wrapper.find('.neon-range-slider__upper .neon-slider__input').setValue(newValue);
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[0], newValue]]);
  });
});
