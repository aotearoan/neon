import { mount } from '@vue/test-utils';
import { NeonPosition } from '../../common/NeonPosition';
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
});
