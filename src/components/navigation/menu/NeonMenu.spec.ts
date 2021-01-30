import Vue from 'vue';
import { mount, RouterLinkStub, shallowMount } from '@vue/test-utils';
import NeonDropdownMenu from '../dropdown-menu/NeonDropdownMenu.vue';
import NeonMenu from '../menu/NeonMenu.vue';
import NeonMenuClass from '../menu/NeonMenu';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonLink from '../link/NeonLink.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonPriorityMenuItem } from './NeonPriorityMenuItem';

Vue.component('NeonDropdownMenu', NeonDropdownMenu);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonLink', NeonLink);

describe('NeonMenu', () => {
  const priorityMenuItems: NeonPriorityMenuItem[] = [
    {
      // @ts-ignore
      element: {},
      width: 250,
      key: 'item1',
    },
    {
      // @ts-ignore
      element: {},
      width: 250,
      key: 'item2',
    },
    {
      // @ts-ignore
      element: {},
      width: 250,
      key: 'item3',
    },
    {
      // @ts-ignore
      element: {},
      width: 250,
      key: 'item4',
    },
  ];

  const menu = [
    {
      key: 'action-menu',
      label: 'Action Menu',
      href: '/navigation/action-menu',
    },
    {
      key: 'link',
      label: 'Link',
      href: '/navigation/link',
    },
    {
      key: 'menu',
      label: 'Menu',
      href: '/navigation/menu',
    },
    {
      key: 'click-link',
      icon: 'contrast',
      label: 'Click link',
    },
    {
      key: 'disabled',
      label: 'Disabled',
      disabled: true,
    },
    {
      key: 'tree-menu',
      label: 'Tree Menu',
      href: '/navigation/tree-menu',
      children: [
        {
          key: 'tree-menu-description',
          label: 'Description',
          href: '/navigation/tree-menu#description',
        },
        {
          key: 'tree-menu-api',
          label: 'API',
          href: '/navigation/tree-menu#api',
        },
        {
          key: 'tree-menu-examples',
          label: 'Examples',
          href: '/navigation/tree-menu#examples',
        },
      ],
    },
  ];

  it('renders menu', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when / then
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when / then
    expect(wrapper.find('.neon-menu--brand').element).toBeDefined();
    expect(wrapper.findAll('.neon-dropdown-menu--brand').length).toEqual(2);
  });

  it('renders color', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu, color: NeonFunctionalColor.Primary },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when / then
    expect(wrapper.find('.neon-menu--primary').element).toBeDefined();
    expect(wrapper.findAll('.neon-dropdown-menu--primary').length).toEqual(2);
  });

  it('renders default size', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when / then
    expect(wrapper.find('.neon-menu--l').element).toBeDefined();
    expect(wrapper.findAll('.neon-dropdown--l').length).toEqual(2);
  });

  it('renders size', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu, size: NeonSize.Small },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when / then
    expect(wrapper.find('.neon-menu--s').element).toBeDefined();
    expect(wrapper.findAll('.neon-dropdown--s').length).toEqual(2);
  });

  it('removes resize handler on destroy', () => {
    // given
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    wrapper.destroy();
    // then
    expect(window.addEventListener).toHaveBeenCalledTimes(5);
    expect(window.removeEventListener).toHaveBeenCalledTimes(5);
  });

  it('does not remove resize handler on destroy', () => {
    // given
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const wrapper = shallowMount(NeonMenu, {
      propsData: { menu, priorityMenuEnabled: false },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    wrapper.destroy();
    // then
    expect(window.addEventListener).toHaveBeenCalledTimes(0);
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('emits click event', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when
    wrapper.find('.neon-menu__item:nth-child(4) .neon-link').trigger('click');
    // then
    expect(wrapper.emitted().click[0]).toEqual([menu[3].key]);
  });

  it('responsive menu desktop', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when
    const menuComponent = wrapper.vm as NeonMenuClass;
    const result = menuComponent.determineVisibleMenuItems(1048, 48, priorityMenuItems);
    // then
    expect(result).toEqual(['item1', 'item2', 'item3', 'item4']);
  });

  it('responsive menu mobile', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when
    const menuComponent = wrapper.vm as NeonMenuClass;
    const result = menuComponent.determineVisibleMenuItems(550, 48, priorityMenuItems);
    // then
    expect(result).toEqual(['item1', 'item2']);
  });

  it('responsive menu mobile, never show just one item', () => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    // when
    const menuComponent = wrapper.vm as NeonMenuClass;
    const result = menuComponent.determineVisibleMenuItems(300, 48, priorityMenuItems);
    // then
    expect(result).toEqual([]);
  });

  it('resizes to mobile', (done) => {
    // given
    const wrapper = mount(NeonMenu, {
      propsData: { menu },
      stubs: {
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route: { path: '.' },
      },
    });
    const menuComponent = wrapper.vm as NeonMenuClass;
    menuComponent.menuItems = [
      {
        // @ts-ignore
        element: {},
        key: 'action-menu',
        width: 200,
      },
    ];
    setTimeout(() => {
      // when
      menuComponent.refreshVisibleMenu();
      // then
      expect(wrapper.find('.neon-menu__responsive-menu .neon-button').attributes().hidden).toBeUndefined();
      done();
    });
  });
});
