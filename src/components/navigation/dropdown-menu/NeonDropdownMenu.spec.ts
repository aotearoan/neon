import { render } from '@testing-library/vue';
import NeonDropdownMenu from './NeonDropdownMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';

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
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown-menu--low-contrast')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--low-contrast')).toBeDefined();
  });

  it('renders color', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        color: NeonFunctionalColor.Primary,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown-menu--primary')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--primary')).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-dropdown-menu__item--m').length).toEqual(model.length);
    expect(container.querySelector('.neon-dropdown--m')).toBeDefined();
  });

  it('renders size', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        size: NeonSize.Large,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-dropdown-menu__item--l').length).toEqual(model.length);
    expect(container.querySelector('.neon-dropdown--l')).toBeDefined();
  });

  it('renders openOnHover', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        openOnHover: true,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown--open-on-hover')).toBeDefined();
  });

  it('renders enabled', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown--disabled')).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        disabled: true,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown--disabled')).toBeDefined();
  });

  it('renders correct number of menu items', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-dropdown-menu__item').length).toEqual(model.length);
  });

  it('renders menu item icons', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-dropdown-menu__item .neon-icon').length).toEqual(model.length);
  });

  it('renders menu item label', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(
      container.querySelector('.neon-dropdown-menu__item:first-child .neon-dropdown-menu__item-label')?.textContent,
    ).toEqual(model[0].label);
  });

  it('renders disabled menu items', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown-menu__item--disabled')).toBeDefined();
    expect(container.querySelector('.neon-dropdown-menu__item--disabled .neon-icon--disabled')).toBeDefined();
  });

  it('renders menu item separators', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-dropdown-menu__item--separator-before').length).toEqual(3);
  });

  it('renders grouped', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model: groupedModel,
      },
      global: { stubs: ['router-link'] },
    });
    // when / then
    expect(
      container.querySelector('.neon-dropdown-menu__item:first-child.neon-dropdown-menu__item--group-title'),
    ).toBeDefined();
    expect(
      container.querySelector('.neon-dropdown-menu__item:last-child.neon-dropdown-menu__item--grouped'),
    ).toBeDefined();
  });

  it('emits click event', () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when
    (
      container.querySelector(
        '.neon-dropdown-menu__item:first-child .neon-dropdown-menu__item-container',
      ) as HTMLElement
    )?.click();
    // then
    expect(emitted().click[0]).toEqual([model[0]]);
  });

  it('does not emit click event when disabled', () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when
    (
      container.querySelector('.neon-dropdown-menu__item:last-child .neon-dropdown-menu__item-container') as HTMLElement
    )?.click();
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('does not emit click event when href', () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { stubs: ['router-link'] },
    });
    // when
    (container.querySelector('.neon-dropdown-menu__item:nth-child(2) .neon-link') as HTMLElement)?.click();
    // then
    expect(emitted().click).toBeUndefined();
  });
});
