import { shallowMount } from '@vue/test-utils';
import NeonDropZone from './NeonDropZone.vue';
import { NeonState } from '../../common/NeonState';

describe('NeonDropZone', () => {
  it('renders slot', () => {
    const slot = 'test';
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
      slots: {
        default: `<p>${slot}</p>`,
      },
    });
    expect(wrapper.find('.neon-drop-zone p').text()).toEqual(slot);
  });

  it('renders disabled', () => {
    const wrapper = shallowMount(NeonDropZone, {
      propsData: { disabled: true },
    });
    expect(wrapper.find('.neon-drop-zone--disabled').element).toBeDefined();
  });

  it('renders circular', () => {
    const wrapper = shallowMount(NeonDropZone, {
      propsData: { circular: true },
    });
    expect(wrapper.find('.neon-drop-zone--circular').element).toBeDefined();
  });

  it('renders default state = ready', () => {
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    expect(wrapper.find('.neon-drop-zone--state-ready').element).toBeDefined();
  });

  it('renders state', () => {
    const wrapper = shallowMount(NeonDropZone, {
      propsData: { state: NeonState.Loading },
    });
    expect(wrapper.find('.neon-drop-zone--state-loading').element).toBeDefined();
  });
});
