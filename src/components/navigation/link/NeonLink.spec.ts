import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import NeonLink from './NeonLink.vue';

describe('NeonLink', () => {
  it('renders default slot contents external link', () => {
    // given
    const slotValue = 'xd';
    const href = 'http://www.getskeleton.com';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link p').text()).toEqual(slotValue);
  });

  it('renders default slot contents router link', () => {
    // given
    const slotValue = 'xd';
    const href = '/xd';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link p').text()).toEqual(slotValue);
  });

  it('renders external link', () => {
    // given
    const href = 'http://www.getskeleton.com';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--external-link').element).toBeDefined();
  });

  it('renders router link link', () => {
    // given
    const href = '/xd';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--router-link').element).toBeDefined();
  });

  it('renders no style class', () => {
    // given
    const href = '/xd';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href, noStyle: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--no-style').element).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const wrapper = shallowMount(NeonLink, {
      propsData: { href: '/xd' },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-link').trigger('click');
    // then
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
