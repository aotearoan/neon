import { fireEvent, render } from '@testing-library/vue';
import NeonDropdownMenu from './NeonDropdownMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import { router } from '@/../test/unit/test-router';
import { nextTick } from 'vue';
import { NeonDropdownPlacementUtils } from '@/common/utils/NeonDropdownPlacementUtils';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';

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
      href: '/test',
      icon: 'images',
      separatorBefore: false,
    },
    {
      key: 'k4',
      label: 'Disabled link',
      href: '/test',
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

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders default color', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown--open-on-hover')).toBeDefined();
  });

  it('changes highlighted on mouse over', async () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when
    const dd = container.querySelector('.neon-dropdown') as HTMLElement;
    await fireEvent.click(dd);
    const listItem = container.querySelectorAll('.neon-dropdown-menu__item')[1];
    await fireEvent.mouseOver(listItem);
    // then
    expect(listItem.classList.contains('neon-dropdown-menu__item--highlighted')).toEqual(true);
  });

  it('renders enabled', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelector('.neon-dropdown--disabled')).toBeNull();
  });

  it('recalculates placement on resize', async () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when
    const dd = container.querySelector('.neon-dropdown__button') as HTMLElement;
    await fireEvent.click(dd);

    Object.defineProperty(global, 'innerHeight', {
      value: 200,
      writable: true,
    });

    jest.spyOn(NeonDropdownPlacementUtils, 'calculatePlacement').mockReturnValue(NeonDropdownPlacement.TopLeft);

    global.dispatchEvent(new Event('resize'));
    await nextTick();
    // then
    const containerEl = container.querySelector('.neon-dropdown__content') as HTMLElement;
    expect(containerEl.classList.contains('neon-dropdown__content--top-left')).toEqual(true);
  });

  it('renders disabled', () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        disabled: true,
      },
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
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
      global: { plugins: [router] },
    });
    // when / then
    expect(
      container.querySelector('.neon-dropdown-menu__item:first-child.neon-dropdown-menu__item--group-title'),
    ).toBeDefined();
    expect(
      container.querySelector('.neon-dropdown-menu__item:last-child.neon-dropdown-menu__item--grouped'),
    ).toBeDefined();
  });

  it('emits click event', async () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when
    const el = container.querySelector(
      '.neon-dropdown-menu__item:first-child  .neon-dropdown-menu__item-container',
    ) as HTMLDivElement;
    await fireEvent.click(el);
    // then
    expect(emitted().click[0]).toEqual([model[0]]);
  });

  it('does not emit click event when disabled', async () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when
    const el = container.querySelector(
      '.neon-dropdown-menu__item:last-child .neon-dropdown-menu__item-container',
    ) as HTMLDivElement;
    await fireEvent.click(el);
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('does not emit click event when href', async () => {
    // given
    const { container, emitted } = render(NeonDropdownMenu, {
      props: {
        model,
      },
      global: { plugins: [router] },
    });
    // when
    const el = container.querySelector('.neon-dropdown-menu__item:nth-child(2) .neon-link') as HTMLAnchorElement;
    await fireEvent.click(el);
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('navigates menu using arrow keys', async () => {
    // given
    const { container } = render(NeonDropdownMenu, {
      props: {
        model,
        placement: NeonDropdownPlacement.TopRight,
      },
      global: { plugins: [router] },
    });
    // when
    const dd = container.querySelector('.neon-dropdown__button') as HTMLElement;
    await fireEvent.click(dd);
    const el = container.querySelector('.neon-dropdown-menu__item:nth-child(2) .neon-link') as HTMLAnchorElement;
    el.focus();
    await fireEvent.keyDown(el, { key: 'ArrowUp', code: 'ArrowUp' });
    expect(
      container.querySelector('.neon-dropdown-menu__item:nth-child(1).neon-dropdown-menu__item--highlighted'),
    ).toBeDefined();
    await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
    expect(
      container.querySelector('.neon-dropdown-menu__item:nth-child(2).neon-dropdown-menu__item--highlighted'),
    ).toBeDefined();
  });
});
