import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import NeonLink from './NeonLink.vue';
import Vue from 'vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonOutlineStyle } from '../../../common/enums/NeonOutlineStyle';

Vue.component('NeonIcon', NeonIcon);

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

  it('renders external link with indicator', () => {
    // given
    const href = 'http://www.getskeleton.com';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href, externalIndicator: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--external-link').element).toBeDefined();
    expect(wrapper.find('.neon-link--with-external-indicator').element).toBeDefined();
  });

  it('renders external link without indicator', () => {
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
    expect(wrapper.find('.neon-link--with-external-indicator').element).toBeUndefined();
  });

  it('renders router link', () => {
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

  it('renders default outline style', () => {
    // given
    const href = '/xd';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--outline-text').element).toBeDefined();
  });

  it('renders provided outline style', () => {
    // given
    const href = '/xd';
    const wrapper = shallowMount(NeonLink, {
      propsData: { href, outlineStyle: NeonOutlineStyle.Border },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-link--outline-border').element).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const wrapper = shallowMount(NeonLink, {
      propsData: {},
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-link').trigger('click');
    // then
    expect(wrapper.emitted().click[0]).toBeDefined();
  });

  it('emits click event on enter keydown', () => {
    // given
    const wrapper = shallowMount(NeonLink, {
      propsData: {},
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-link').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().click[0]).toBeDefined();
  });
});
