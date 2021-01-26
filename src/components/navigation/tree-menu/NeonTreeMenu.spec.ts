import Vue from 'vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import NeonTreeMenu from './NeonTreeMenu.vue';
import NeonTreeMenuClass from './NeonTreeMenu';
import NeonLink from '../link/NeonLink.vue';

Vue.component('NeonLink', NeonLink);

describe('NeonTreeMenu', () => {
  const model = [
    {
      key: 'feedback',
      label: 'Feedback',
      expanded: false,
      children: [
        {
          key: 'alert',
          label: 'Alert',
          href: '/feedback/alert',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'note',
          label: 'Note',
          href: '/feedback/note',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'notification-counter',
          label: 'Notification Counter',
          href: '/feedback/notification-counter',
          anchors: ['Description', 'API', 'Examples'],
        },
      ],
    },
    {
      key: 'navigation',
      label: 'Navigation',
      expanded: true,
      children: [
        {
          key: 'action-menu',
          label: 'Action Menu',
          href: '/navigation/action-menu',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'dropdown-menu',
          label: 'Dropdown Menu',
          href: '/navigation/dropdown-menu',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'link',
          label: 'Link',
          href: '/navigation/link',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'tree-menu',
          label: 'Tree Menu',
          href: '/navigation/tree-menu',
          anchors: ['Description', 'API', 'Examples'],
        },
      ],
    },
  ];

  it('matches snapshot', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model },
      stubs: { RouterLink: RouterLinkStub },
    });
    // when / then
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('expands all', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model, expandAll: true },
      stubs: { RouterLink: RouterLinkStub },
    });
    // when / then
    expect(wrapper.find('.neon-tree-menu--expand-all').element).toBeDefined();
    expect(wrapper.findAll('.neon-tree-menu__anchors--expanded').length).toEqual(7);
  });

  it('emits click event on click section link', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model },
      stubs: { RouterLink: RouterLinkStub },
    });
    // when
    wrapper.findAll('.neon-tree-menu__section-link').at(0).trigger('click');
    // then
    expect(wrapper.emitted().click[0]).toEqual(['feedback']);
  });

  it('emits click event on space keydown section link', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model },
      stubs: { RouterLink: RouterLinkStub },
    });
    // when
    wrapper.findAll('.neon-tree-menu__section-link-label').at(0).trigger('keydown.space');
    // then
    expect(wrapper.emitted().click[0]).toEqual(['feedback']);
  });

  it('triggers click on parent link on space keydown', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model },
      stubs: { RouterLink: RouterLinkStub },
    });
    const vm = wrapper.vm as NeonTreeMenuClass;
    vm.click = jest.fn(vm.click);
    // when
    wrapper.findAll('.neon-tree-menu__link-label').at(0).trigger('keydown.space');
    // then
    expect(vm.click).toHaveBeenCalled();
  });

  it('click executes with no parent element', () => {
    // given
    const wrapper = mount(NeonTreeMenu, {
      propsData: { model },
      stubs: { RouterLink: RouterLinkStub },
    });
    const vm = wrapper.vm as NeonTreeMenuClass;
    // when / then
    // @ts-ignore
    expect(() => vm.click({})).not.toThrowError();
  });
});
