import { shallowMount } from '@vue/test-utils';
import NeonIcon from './NeonIcon.vue';
import NeonIconClass from './NeonIcon';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonIcon', () => {
  const name = 'check';

  it('renders color', () => {
    const color = NeonFunctionalColor.Warn;
    const wrapper = shallowMount(NeonIcon, {
      propsData: { name, color },
    });
    expect(wrapper.find(`.neon-icon--${color}`).element).toBeDefined();
  });

  it('renders inverse', () => {
    const wrapper = shallowMount(NeonIcon, {
      propsData: { name, inverse: true },
    });
    expect(wrapper.find('.neon-icon--inverse').element).toBeDefined();
  });

  it('renders disabled', () => {
    const wrapper = shallowMount(NeonIcon, {
      propsData: { name, disabled: true },
    });
    expect(wrapper.find('.neon-icon--disabled').element).toBeDefined();
  });

  it('gets icon', () => {
    const wrapper = shallowMount(NeonIcon, {
      propsData: { name },
    });
    const vm = wrapper.vm as NeonIconClass;
    expect(vm.icon).toBeDefined();
  });

  it('does not render missing icon', () => {
    const errorFn = global.console.error;
    global.console.error = jest.fn();

    const wrapper = shallowMount(NeonIcon, {
      propsData: { name: 'xdd' },
    });
    const vm = wrapper.vm as NeonIconClass;
    expect(vm.icon).toBeUndefined();
    expect(global.console.error).toHaveBeenCalled();
    global.console.error = errorFn;
  });
});
