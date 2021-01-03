import { shallowMount } from '@vue/test-utils';
import NeonDropZone from './NeonDropZone.vue';
import NeonDropZoneClass from './NeonDropZone';
import { NeonState } from '../../../common/enums/NeonState';

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

  it('removes listeners', () => {
    // given
    const removeEventListenerFn = jest.fn();
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.$refs.dropzone.removeEventListener = removeEventListenerFn;
    // when
    wrapper.destroy();
    // then
    expect(removeEventListenerFn).toHaveBeenCalledTimes(3);
  });

  it('calls processDragLeave', () => {
    // given
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = true;
    // when
    vm.processDragLeave();
    // then
    expect(vm.active).toEqual(false);
  });

  it('calls processDragOverEnter no data transfer', () => {
    // given
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = false;
    // when / then
    // @ts-ignore
    vm.processDragOverOrEnter({});
    // then
    expect(vm.active).toEqual(false);
  });

  it('calls processDragOverEnter with data transfer', () => {
    // given
    const event = {
      dataTransfer: { effectAllowed: undefined },
      preventDefault: () => {
        return false;
      },
    };
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = false;
    // when / then
    // @ts-ignore
    vm.processDragOverOrEnter(event);
    // then
    expect(vm.active).toEqual(true);
    expect(event.dataTransfer.effectAllowed).toEqual('copy');
  });

  it('emits files', () => {
    // given
    // @ts-ignore
    const event = {
      dataTransfer: { files: [] },
      preventDefault: () => {
        return false;
      },
    };
    const wrapper = shallowMount(NeonDropZone, {
      propsData: {},
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = true;
    // when / then
    // @ts-ignore
    vm.transferData(event);
    // then
    expect(vm.active).toEqual(false);
    expect(wrapper.emitted().files[0]).toBeDefined();
  });

  it('does not emit files when disabled', () => {
    // given
    // @ts-ignore
    const event = {
      dataTransfer: { files: [] },
      preventDefault: () => {
        return false;
      },
    };
    const wrapper = shallowMount(NeonDropZone, {
      propsData: { disabled: true },
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = true;
    // when / then
    // @ts-ignore
    vm.transferData(event);
    // then
    expect(vm.active).toEqual(true);
    expect(wrapper.emitted().files).toBeUndefined();
  });

  it('does not emit files when loading state', () => {
    // given
    // @ts-ignore
    const event = {
      dataTransfer: { files: [] },
      preventDefault: () => {
        return false;
      },
    };
    const wrapper = shallowMount(NeonDropZone, {
      propsData: { state: NeonState.Loading },
    });
    const vm = wrapper.vm as NeonDropZoneClass;
    vm.active = true;
    // when / then
    // @ts-ignore
    vm.transferData(event);
    // then
    expect(vm.active).toEqual(true);
    expect(wrapper.emitted().files).toBeUndefined();
  });
});
