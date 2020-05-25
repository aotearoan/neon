import { shallowMount } from '@vue/test-utils';
import NeonIcon from './NeonIcon.vue';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

describe('NeonIcon', () => {
  const name = 'check';

  it('renders color', () => {
    const color = NeonFunctionalColor.Warn;
    const wrapper = shallowMount(NeonIcon, {
      propsData: { name, color },
    });
    expect(wrapper.find(`.neon-icon--${color}`).element).toBeDefined();
  });

  it('gets icon', () => {
    const color = NeonFunctionalColor.Warn;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = shallowMount(NeonIcon, {
      propsData: { name, color },
    });
    expect(wrapper.vm.icon).toBeDefined();
  });
});
