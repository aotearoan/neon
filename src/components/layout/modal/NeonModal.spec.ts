import { mount } from '@vue/test-utils';
import NeonModal from './NeonModal.vue';
import NeonButton from '../../user-input/button/NeonButton.vue';
import Vue from 'vue';

Vue.component('NeonButton', NeonButton);

describe('NeonModal', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonModal, {
      propsData: { open: true },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-modal__container p').text()).toEqual(slotValue);
  });

  it('renders as closed by default', () => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: true },
    });
    // when / then
    expect(wrapper.find('.neon-modal--open').element).toBeDefined();
  });

  it('renders open class', () => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: false },
    });
    // when / then
    expect(wrapper.find('.neon-modal--open').element).toBeUndefined();
  });

  it('emits close event on escape key', (done) => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: true },
    });
    // when
    setTimeout(() => {
      // when
      const event = new KeyboardEvent('keyup', { key: 'Escape' });
      document.dispatchEvent(event);
      // then
      expect(wrapper.emitted().close).toBeTruthy();
      done();
    });
  });

  it('emits close event on click outside modal container', (done) => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: true },
    });
    // when
    setTimeout(() => {
      // when
      const clickEvent = new MouseEvent('mousedown');
      Object.defineProperty(clickEvent, 'target', { value: document.body });
      document.dispatchEvent(clickEvent);
      // then
      expect(wrapper.emitted().close).toBeTruthy();
      done();
    });
  });

  it('does not emit close event on click outside modal container when dismissable = false', (done) => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: true, dismissable: false },
    });
    // when
    setTimeout(() => {
      // when
      const clickEvent = new MouseEvent('mousedown');
      Object.defineProperty(clickEvent, 'target', { value: document.body });
      document.dispatchEvent(clickEvent);
      // then
      expect(wrapper.emitted().close).toBeFalsy();
      done();
    });
  });

  it('does not emit close event on click inside modal container', (done) => {
    // given
    const wrapper = mount(NeonModal, {
      propsData: { open: true },
      slots: {
        default: '<p>xd</p>',
      },
    });
    // when
    setTimeout(() => {
      // when
      const insideElement = wrapper.find('.neon-modal__container p').element;
      const clickEvent = new MouseEvent('mousedown');
      Object.defineProperty(clickEvent, 'target', { value: insideElement });
      document.dispatchEvent(clickEvent);
      // then
      expect(wrapper.emitted().close).toBeFalsy();
      done();
    });
  });

  it('calls closable utils destroy', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonModal, {
      propsData: { open: true },
      slots: {
        default: '<p>xd</p>',
      },
    });
    const destroyFn = wrapper.vm.closableUtils.destroy;
    wrapper.vm.closableUtils.destroy = jest.fn();
    // when
    wrapper.destroy();
    // then
    expect(wrapper.vm.closableUtils.destroy).toHaveBeenCalled();
    wrapper.vm.closableUtils.destroy = destroyFn;
  });

  it('does not init closable utils when not dismissable', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonModal, {
      propsData: { open: true, dismissable: false },
      slots: {
        default: '<p>xd</p>',
      },
    });
    wrapper.destroy();
    // then
    expect(wrapper.vm.closableUtils).toBeUndefined();
  });

  it('calls closable open on open true', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonModal, {
      propsData: { open: false },
      slots: {
        default: '<p>xd</p>',
      },
    });
    const openFn = wrapper.vm.closableUtils.open;
    wrapper.vm.closableUtils.open = jest.fn();
    // when
    wrapper.vm.onOpen(true);
    // then
    expect(wrapper.vm.closableUtils.open).toHaveBeenCalled();
    wrapper.vm.closableUtils.open = openFn;
  });
});
