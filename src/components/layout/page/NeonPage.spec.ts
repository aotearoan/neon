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
});
