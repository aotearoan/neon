import Vue from 'vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import NeonDropdownMenu from './NeonDropdownMenu.vue';
import NeonDropdownMenuClass from './NeonDropdownMenu';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonLink from '../link/NeonLink.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import { NeonScrollUtils } from '../../../common/utils/NeonScrollUtils';

Vue.component('NeonDropdown', NeonDropdown);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonLink', NeonLink);

describe('NeonDropdownMenu', () => {
  const model = [
    {
      key: 'k1',
      label: 'Clickable option',
      icon: 'user',
      separatorBefore: true,
    },
    {
      key: 'k2',
      label: 'External link',
      href: 'http://getskeleton.com',
      icon: 'download',
      separatorBefore: true,
    },
    {
      key: 'k3',
      label: 'Internal link',
      href: '/presentation/dropdown',
      icon: 'images',
      separatorBefore: false,
    },
    {
      key: 'k4',
      label: 'Disabled link',
      href: '/presentation/dropdown',
      icon: 'lock',
      separatorBefore: true,
      disabled: true,
    },
  ];

  const groupedModel = [
    {
      key: 'k1',
      label: 'Clickable option',
      icon: 'user',
      separatorBefore: true,
      isGroup: true,
    },
    {
      key: 'k2',
      label: 'External link',
      href: 'http://getskeleton.com',
      icon: 'download',
      separatorBefore: true,
      grouped: true,
    },
  ];

  it('renders default color', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown-menu--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, color: NeonFunctionalColor.Primary },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown-menu--primary').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--primary').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.findAll('.neon-dropdown-menu__item--m').length).toEqual(model.length);
    expect(wrapper.find('.neon-dropdown--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, size: NeonSize.Large },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.findAll('.neon-dropdown-menu__item--l').length).toEqual(model.length);
    expect(wrapper.find('.neon-dropdown--l').element).toBeDefined();
  });

  it('renders openOnHover', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, openOnHover: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--open-on-hover').element).toBeDefined();
  });

  it('renders enabled', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, disabled: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeDefined();
  });

  it('renders correct number of menu items', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.findAll('.neon-dropdown-menu__item').length).toEqual(model.length);
  });

  it('renders menu item icons', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.findAll('.neon-dropdown-menu__item .neon-icon').length).toEqual(model.length);
  });

  it('renders menu item label', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown-menu__item:first-child .neon-dropdown-menu__item-label').text()).toEqual(
      model[0].label,
    );
  });

  it('renders disabled menu items', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown-menu__item--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown-menu__item--disabled .neon-icon--disabled').element).toBeDefined();
  });

  it('renders menu item separators', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(wrapper.findAll('.neon-dropdown-menu__item--separator-before').length).toEqual(3);
  });

  it('renders grouped', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model: groupedModel },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when / then
    expect(
      wrapper.find('.neon-dropdown-menu__item:first-child.neon-dropdown-menu__item--group-title').element,
    ).toBeDefined();
    expect(
      wrapper.find('.neon-dropdown-menu__item:last-child.neon-dropdown-menu__item--grouped').element,
    ).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-dropdown-menu__item:first-child .neon-dropdown-menu__item-container').trigger('click');
    // then
    expect(wrapper.emitted().click[0]).toEqual([model[0]]);
  });

  it('emits click event space keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 0;
    dropdownMenu.highlightedKey = model[0].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().click[0]).toEqual([model[0]]);
  });

  it('emits click event enter keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 0;
    dropdownMenu.highlightedKey = model[0].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
    // then
    expect(wrapper.emitted().click[0]).toEqual([model[0]]);
  });

  it('does not emit click event when disabled', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-dropdown-menu__item:last-child .neon-dropdown-menu__item-container').trigger('click');
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('does not emit click event when disabled and space keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 3;
    dropdownMenu.highlightedKey = model[3].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('does not emit click event when disabled and enter keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 3;
    dropdownMenu.highlightedKey = model[3].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('does not emit click event when href', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    // when
    wrapper.find('.neon-dropdown-menu__item:nth-child(2) .neon-link').trigger('click');
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('does not emit click event when href and space keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('does not emit click event when href and enter keydown', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Enter' }));
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('navigate up', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect(dropdownMenu.highlightedIndex).toEqual(0);
  });

  it('navigate up first item', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 0;
    dropdownMenu.highlightedKey = model[0].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect(dropdownMenu.highlightedIndex).toEqual(0);
  });

  it('navigate down', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect(dropdownMenu.highlightedIndex).toEqual(2);
  });

  it('navigate down reverse', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, placement: NeonDropdownPlacement.TopLeft },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect(dropdownMenu.highlightedIndex).toEqual(0);
  });

  it('tab closes dropdown menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, placement: NeonDropdownPlacement.TopLeft },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Tab' }));
    // then
    expect(dropdownMenu.open).toEqual(false);
  });

  it('alt+tab does not close dropdown menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, placement: NeonDropdownPlacement.TopLeft },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Tab', altKey: true }));
    // then
    expect(dropdownMenu.open).toEqual(true);
  });

  it('escape closes dropdown menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, placement: NeonDropdownPlacement.TopLeft },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    // when
    document.dispatchEvent(new KeyboardEvent('keydown', { code: 'Escape' }));
    // then
    expect(dropdownMenu.open).toEqual(false);
  });

  it('change highlighted on mouse over', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, placement: NeonDropdownPlacement.TopLeft },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    dropdownMenu.highlightedIndex = 1;
    dropdownMenu.highlightedKey = model[1].key;
    // when
    wrapper.find('.neon-dropdown-menu__item:first-child').trigger('mouseover');
    // then
    expect(dropdownMenu.highlightedIndex).toEqual(0);
  });

  it('removes keyboard handler on destroy', () => {
    // given
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const wrapper: any = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    wrapper.destroy();
    // then
    expect(document.addEventListener).toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalled();
  });

  it('dropdown focus does not open menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    // when
    dropdownMenu.dropdown.$emit('focus');
    // then
    expect(dropdownMenu.open).toEqual(false);
  });

  it('dropdown focus open menu when openOnHover', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, openOnHover: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    // when
    dropdownMenu.dropdown.$emit('focus');
    // then
    expect(dropdownMenu.open).toEqual(true);
  });

  it('dropdown blur does not close menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    // when
    dropdownMenu.dropdown.$emit('blur');
    // then
    expect(dropdownMenu.open).toEqual(true);
  });

  it('dropdown blur closes menu', () => {
    // given
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model, openOnHover: true },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    dropdownMenu.open = true;
    // when
    dropdownMenu.dropdown.$emit('blur');
    // then
    expect(dropdownMenu.open).toEqual(false);
  });

  it('scroll on navigate scrolls into view', () => {
    // given
    const scrollIntoView = NeonScrollUtils.scrollIntoView;
    NeonScrollUtils.scrollIntoView = jest.fn();
    const wrapper = mount(NeonDropdownMenu, {
      propsData: { model },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
    const dropdownMenu = wrapper.vm as NeonDropdownMenuClass;
    // when
    dropdownMenu.scrollOnNavigate();
    // then
    expect(NeonScrollUtils.scrollIntoView).toHaveBeenCalled();
    NeonScrollUtils.scrollIntoView = scrollIntoView;
  });
});
