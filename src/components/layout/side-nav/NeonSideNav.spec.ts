import { mount } from '@vue/test-utils';
import NeonSideNav from './NeonSideNav.vue';

describe('NeonSideNav', () => {
  it('renders sticky slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonSideNav, {
      propsData: {},
      slots: {
        sticky: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-side-nav__sticky p').text()).toEqual(slotValue);
  });

  it('renders scrolling slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonSideNav, {
      propsData: {},
      slots: {
        scrolling: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-side-nav__scrolling p').text()).toEqual(slotValue);
  });

  it('renders hr when sticky and scrolling slots contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonSideNav, {
      propsData: {},
      slots: {
        sticky: `<p>${slotValue}</p>`,
        scrolling: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-side-nav hr').element).toBeDefined();
  });
});
