import { mount } from '@vue/test-utils';
import NeonGridArea from './NeonGridArea.vue';

describe('NeonGridArea', () => {
  const id = 'area1';

  it('renders id as class', () => {
    // given
    const wrapper = mount(NeonGridArea, {
      propsData: { id },
    });
    // when / then
    expect(wrapper.find(`.${id}`).element).toBeDefined();
  });

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonGridArea, {
      propsData: { id },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-grid-area p').text()).toEqual(slotValue);
  });
});
