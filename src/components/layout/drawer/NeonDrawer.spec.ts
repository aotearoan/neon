import { mount } from '@vue/test-utils';
import { NeonPosition } from '../../../common/enums/NeonPosition';
import NeonDrawer from './NeonDrawer.vue';

describe('NeonDrawer', () => {
  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-drawer__container p').text()).toEqual(slotValue);
  });

  it('renders full width class', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true, fullWidth: true },
    });
    // when / then
    expect(wrapper.find('.neon-drawer__container--full-width').element).toBeDefined();
  });

  it('renders as closed by default', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true },
    });
    // when / then
    expect(wrapper.find('.neon-drawer--open').element).toBeDefined();
  });

  it('renders open class', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: false },
    });
    // when / then
    expect(wrapper.find('.neon-drawer--open').element).toBeUndefined();
  });

  it('renders position class', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true, position: NeonPosition.Right },
    });
    // when / then
    expect(wrapper.find('.neon-drawer--right').element).toBeDefined();
  });

  it('renders overlay class by default', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true },
    });
    // when / then
    expect(wrapper.find('.neon-drawer--with-overlay').element).toBeDefined();
  });

  it('renders without overlay class', () => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true, overlay: false },
    });
    // when / then
    expect(wrapper.find('.neon-drawer--with-overlay').element).toBeUndefined();
  });

  it('emits close event on escape key', (done) => {
    // given
    const wrapper = mount(NeonDrawer, {
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

  it('emits close event on click outside drawer container', (done) => {
    // given
    const wrapper = mount(NeonDrawer, {
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

  it('does not emit close event on click inside drawer container', (done) => {
    // given
    const wrapper = mount(NeonDrawer, {
      propsData: { open: true },
      slots: {
        default: '<p>xd</p>',
      },
    });
    // when
    setTimeout(() => {
      // when
      const insideElement = wrapper.find('.neon-drawer__container p').element;
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
    const wrapper: any = mount(NeonDrawer, {
      propsData: { open: true },
    });
    const destroyFn = wrapper.vm.closableUtils.destroy;
    wrapper.vm.closableUtils.destroy = jest.fn();
    // when
    wrapper.destroy();
    // then
    expect(wrapper.vm.closableUtils.destroy).toHaveBeenCalled();
    wrapper.vm.closableUtils.destroy = destroyFn;
  });

  it('calls closable open on open true', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonDrawer, {
      propsData: { open: false },
    });
    const openFn = wrapper.vm.closableUtils.open;
    wrapper.vm.closableUtils.open = jest.fn();
    // when
    wrapper.vm.onOpen(true);
    // then
    expect(wrapper.vm.closableUtils.open).toHaveBeenCalled();
    wrapper.vm.closableUtils.open = openFn;
  });

  it('calls closable close on open false', () => {
    // given
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonDrawer, {
      propsData: { open: true },
    });
    const closeFn = wrapper.vm.closableUtils.close;
    wrapper.vm.closableUtils.close = jest.fn();
    // when
    wrapper.vm.onOpen(false);
    // then
    expect(wrapper.vm.closableUtils.close).toHaveBeenCalled();
    wrapper.vm.closableUtils.close = closeFn;
  });
});
