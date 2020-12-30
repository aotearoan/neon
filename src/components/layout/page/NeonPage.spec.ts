import { mount } from '@vue/test-utils';
import NeonPage from './NeonPage.vue';

describe('NeonPage', () => {
  it('renders top-nav slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        'top-nav': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page p').text()).toEqual(slotValue);
  });

  it('renders top-nav slot class', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        'top-nav': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page--with-top-nav').element).toBeDefined();
  });

  it('renders side-nav slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        'side-nav': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page p').text()).toEqual(slotValue);
  });

  it('renders side-nav slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        'side-nav': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page--with-side-nav').element).toBeDefined();
  });

  it('renders content slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        content: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page__container p').text()).toEqual(slotValue);
  });

  it('adds/removes resize listener', () => {
    // given
    const addEventFn = window.addEventListener;
    const removeEventFn = window.removeEventListener;
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();

    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        content: `<p>${slotValue}</p>`,
      },
    });
    // when
    wrapper.destroy();
    // then
    expect(wrapper.find('.neon-page__container p').text()).toEqual(slotValue);
    expect(window.addEventListener).toHaveBeenCalled();
    expect(window.removeEventListener).toHaveBeenCalled();
    window.addEventListener = addEventFn;
    window.removeEventListener = removeEventFn;
  });
});
