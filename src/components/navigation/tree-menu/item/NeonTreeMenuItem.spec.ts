import Vue from 'vue';
import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils';
import NeonTreeMenuItem from './NeonTreeMenuItem.vue';
import NeonLink from '../../link/NeonLink.vue';

Vue.component('NeonLink', NeonLink);

describe('NeonTreeMenuItem', () => {
  it('renders link item', () => {
    // given
    const model = {
      label: 'Option 1',
      key: 'option-1',
      href: '/xd',
    };
    const wrapper = mount(NeonTreeMenuItem, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    const link = wrapper.find('.neon-tree-menu__link');
    expect(link.text()).toEqual(model.label);
  });

  it('renders child item', () => {
    // given
    const model = {
      label: 'Option 1',
      key: 'option-1',
      href: '/xd',
      children: [
        {
          label: 'Child 1',
          key: 'child-1',
          href: '/xdd',
        },
      ],
    };
    const wrapper = mount(NeonTreeMenuItem, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    const link = wrapper.find('.neon-tree-menu-item--depth-1 .neon-tree-menu__link');
    expect(link.text()).toEqual(model.children[0].label);
  });

  it('renders non-clickable link item', () => {
    // given
    const model = {
      label: 'Option 1',
      key: 'option-1',
    };
    const wrapper = mount(NeonTreeMenuItem, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-tree-menu__link--no-click').element).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const model = {
      label: 'Option 1',
      key: 'option-1',
    };
    const wrapper = shallowMount(NeonLink, {
      propsData: { model },
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
