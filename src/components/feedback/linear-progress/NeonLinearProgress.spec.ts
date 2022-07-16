import { shallowMount } from '@vue/test-utils';
import NeonLinearProgress from './NeonLinearProgress.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

describe('NeonLinearProgress', () => {
  it('renders output with total', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 9, total: 42 },
    });
    expect(wrapper.find('.neon-linear-progress__output').text()).toEqual('0 / 42');
    setTimeout(() => {
      expect(wrapper.find('.neon-linear-progress__output').text()).toEqual('9 / 42');
      const el = wrapper.find('.neon-linear-progress');
      expect(el.attributes()['aria-valuemin']).toEqual('0');
      expect(el.attributes()['aria-valuenow']).toEqual('9');
      expect(el.attributes()['aria-valuemax']).toEqual('42');
      done();
    }, 1000);
  });

  it('renders indicator width', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 10, total: 40 },
    });
    setTimeout(() => {
      expect(wrapper.find('.neon-linear-progress__indicator').attributes().style).toEqual('width: 25%;');
      done();
    }, 1000);
  });

  it('renders output as %', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 0.4 },
    });
    expect(wrapper.find('.neon-linear-progress__output').text()).toEqual('0%');
    setTimeout(() => {
      expect(wrapper.find('.neon-linear-progress__output').text()).toEqual('40%');
      done();
    }, 2000);
  });

  it('renders label', () => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 0.4, label: 'XDD' },
    });
    expect(wrapper.find('.neon-linear-progress__label').text()).toEqual('XDD');
  });

  it('renders color override', () => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 0.4, color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-linear-progress--brand')).toBeDefined();
  });

  it('renders alternate color override', () => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 0.4, color: NeonFunctionalColor.Brand, alternateColor: NeonFunctionalColor.Info },
    });
    expect(wrapper.find('.neon-linear-progress--alternate-color-info')).toBeDefined();
  });

  it('renders size override', () => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 0.4, size: NeonSize.Large },
    });
    expect(wrapper.find('.neon-linear-progress--l')).toBeDefined();
  });

  it('renders completed icon', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 1, decimals: 2, completedIcon: 'check' },
    });

    setTimeout(() => {
      expect(wrapper.find('.neon-linear-progress__indicator--completed')).toBeDefined();
      expect(wrapper.find('.neon-icon')).toBeDefined();
      done();
    }, 2000);
  });

  it('renders completed icon color override', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 1, decimals: 2, completedIcon: 'check', completedIconColor: NeonFunctionalColor.LowContrast },
    });

    setTimeout(() => {
      expect(wrapper.find('.neon-icon--low-contrast')).toBeDefined();
      done();
    }, 2000);
  });

  it('renders completed icon alternate color override', (done) => {
    const wrapper = shallowMount(NeonLinearProgress, {
      propsData: { value: 1, decimals: 2, completedIcon: 'check', alternateColor: NeonFunctionalColor.LowContrast },
    });

    setTimeout(() => {
      expect(wrapper.find('.neon-icon--low-contrast')).toBeDefined();
      done();
    }, 2000);
  });
});
