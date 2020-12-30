import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonNote from './NeonNote.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

Vue.component('NeonButton', NeonButton);
Vue.component('NeonIcon', NeonIcon);

describe('NeonNote', () => {
  it('correctly maps icon name, primary', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: {},
    });
    // when / then
    expect(wrapper.vm.iconName).toBeUndefined();
  });

  it('correctly maps icon name, info', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: { color: NeonFunctionalColor.Info },
    });
    // when / then
    expect(wrapper.vm.iconName).toEqual('info-circle');
  });

  it('correctly maps icon name, success', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: { color: NeonFunctionalColor.Success },
    });
    // when / then
    expect(wrapper.vm.iconName).toEqual('check-circle');
  });

  it('correctly maps icon name, warn', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: { color: NeonFunctionalColor.Warn },
    });
    // when / then
    expect(wrapper.vm.iconName).toEqual('exclamation-circle');
  });

  it('correctly maps icon name, error', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: { color: NeonFunctionalColor.Error },
    });
    // when / then
    expect(wrapper.vm.iconName).toEqual('times-circle');
  });

  it('correctly maps icon false', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonNote, {
      propsData: { icon: false, color: NeonFunctionalColor.Error },
    });
    // when / then
    expect(wrapper.vm.iconName).toBeUndefined();
  });

  it('renders correct color class', () => {
    // given
    const wrapper = mount(NeonNote, {
      propsData: { color: NeonFunctionalColor.Error },
    });
    // when / then
    expect(wrapper.find('.neon-note--error').element).toBeDefined();
  });

  it('clicking close emits close event', () => {
    // given
    const wrapper = mount(NeonNote, {
      propsData: { closable: true },
    });
    // when
    const closeButton = wrapper.find('.neon-note__close');
    closeButton.trigger('click');
    // when / then
    expect(wrapper.emitted()['close-note'][0]).toBeDefined();
  });

  it('space keydown on close emits close event', () => {
    // given
    const wrapper = mount(NeonNote, {
      propsData: { closable: true },
    });
    // when
    const closeButton = wrapper.find('.neon-note__close');
    closeButton.trigger('keypress.space.stop');
    // when / then
    expect(wrapper.emitted()['close-note'][0]).toBeDefined();
  });

  it('enter keydown on close emits close event', () => {
    // given
    const wrapper = mount(NeonNote, {
      propsData: { closable: true },
    });
    // when
    const closeButton = wrapper.find('.neon-note__close');
    closeButton.trigger('keydown.enter');
    // when / then
    expect(wrapper.emitted()['close-note'][0]).toBeDefined();
  });

  it('close button missing when closable = false', () => {
    // given
    const wrapper = mount(NeonNote, {
      propsData: { closable: false },
    });
    // when / then
    expect(wrapper.find('.neon-note__close').element).toBeUndefined();
  });

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonNote, {
      propsData: {},
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-note__container p').text()).toEqual(slotValue);
  });
});
