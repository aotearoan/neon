import { mount } from '@vue/test-utils';
import NeonPage from './NeonPage.vue';

describe('NeonPage', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonPage, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-page p').text()).toEqual(slotValue);
  });
});
