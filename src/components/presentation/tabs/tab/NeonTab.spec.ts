import { mount, shallowMount } from '@vue/test-utils';
import NeonTab from './NeonTab.vue';
import NeonTabClass from './NeonTab';

describe('NeonTab', () => {
  beforeAll(() => {
    // @ts-ignore
    window.matchMedia = (query: string) => ({ matches: false });
  });

  it('renders default slot', () => {
    const contents = 'lol';
    const wrapper = mount(NeonTab, {
      propsData: { selected: true },
      slots: {
        default: `<p>${contents}</p>`,
      },
    });
    expect(wrapper.find('.neon-tab p').text()).toEqual(contents);
  });

  it('renders id', () => {
    const id = 'xdd';
    const wrapper = mount(NeonTab, {
      propsData: { selected: true, id },
    });
    expect(wrapper.find('.neon-tab').attributes().id).toEqual(id);
    expect(wrapper.find('.neon-tab').attributes()['aria-labelledby']).toEqual(`${id}Button`);
  });

  it('renders selected', () => {
    const wrapper = mount(NeonTab, {
      propsData: { selected: true },
    });
    expect(wrapper.find('.neon-tab--selected').element).toBeDefined();
  });

  it('renders tab selected false', () => {
    const wrapper = mount(NeonTab, {
      propsData: { selected: false },
    });
    expect(wrapper.find('.neon-tab').element).toBeDefined();
  });

  it('does not render tab toggle on if, selected false', () => {
    const wrapper = mount(NeonTab, {
      propsData: { selected: false, toggleOnIf: true },
    });
    expect(wrapper.find('.neon-tab').element).toBeUndefined();
  });

  it('renders tab toggle on if, selected true', () => {
    const wrapper = mount(NeonTab, {
      propsData: { selected: true, toggleOnIf: true },
    });
    expect(wrapper.find('.neon-tab').element).toBeDefined();
  });

  it('renders tab responsiveView = true', () => {
    const wrapper = mount(NeonTab, {
      propsData: { selected: false, toggleOnIf: true },
    });
    (wrapper.vm as NeonTabClass).responsiveView = true;
    expect(wrapper.find('.neon-tab')).toBeDefined();
  });

  it('removes listener', () => {
    // given
    const windowRemoveFn = window.removeEventListener;
    const removeEventListenerFn = jest.fn();
    const wrapper = shallowMount(NeonTab, {
      propsData: { selected: false },
    });
    window.removeEventListener = removeEventListenerFn;
    // when
    wrapper.destroy();
    // then
    expect(removeEventListenerFn).toHaveBeenCalled();
    window.removeEventListener = windowRemoveFn;
  });
});
