import { mount } from '@vue/test-utils';
import NeonCard from './NeonCard.vue';
import { NeonOrientation } from '../../common/NeonOrientation';
import { NeonResponsive } from '../../layout/grid/NeonResponsive';

describe('NeonCard', () => {
  it('renders orientation class', () => {
    // given
    const wrapper = mount(NeonCard, {
      propsData: { orientation: NeonOrientation.Horizontal },
    });
    // when / then
    expect(wrapper.find('.neon-card--horizontal').element).toBeDefined();
  });

  it('renders horizontal breakpoint class', () => {
    // given
    const wrapper = mount(NeonCard, {
      propsData: { orientation: NeonOrientation.Horizontal, horizontalBreakpoint: NeonResponsive.Tablet },
    });
    // when / then
    expect(wrapper.find('.neon-card--horizontal-breakpoint-tablet').element).toBeDefined();
  });

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonCard, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-card p').text()).toEqual(slotValue);
  });
});
