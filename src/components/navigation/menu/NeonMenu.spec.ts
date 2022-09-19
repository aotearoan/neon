import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonMenu from '../menu/NeonMenu.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

describe('NeonMenu', () => {
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

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonMenu, {
      props: {
        menu,
      },
      global: {
        stubs: ['router-link'],
        mocks: {
          route: { path: '.' },
        },
      },
    });
  });

  it('renders menu', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-menu--brand')).toBeDefined();
    expect(container.querySelectorAll('.neon-dropdown-menu--brand').length).toEqual(2);
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });
    // when / then
    expect(container.querySelector('.neon-menu--primary')).toBeDefined();
    expect(container.querySelectorAll('.neon-dropdown-menu--primary').length).toEqual(2);
  });

  it('renders default size', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-menu--l')).toBeDefined();
    expect(container.querySelectorAll('.neon-dropdown--l').length).toEqual(2);
  });

  it('renders size', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Small });
    // when / then
    expect(container.querySelector('.neon-menu--s')).toBeDefined();
    expect(container.querySelectorAll('.neon-dropdown--s').length).toEqual(2);
  });

  it('removes resize handler on destroy', () => {
    // given
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const { unmount } = harness;
    // when
    unmount();
    // then
    expect(window.addEventListener).toHaveBeenCalledTimes(5);
    expect(window.removeEventListener).toHaveBeenCalledTimes(5);
  });

  it('does not remove resize handler on destroy', async () => {
    // given
    window.addEventListener = jest.fn();
    window.removeEventListener = jest.fn();
    const { unmount, rerender } = harness;
    await rerender({ priorityMenuEnabled: false });
    unmount();
    // then
    expect(window.addEventListener).toHaveBeenCalledTimes(0);
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);
  });

  it('emits click event', () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelector('.neon-menu__item:nth-child(4) .neon-link') as HTMLElement;
    item?.click();
    // then
    expect(emitted().click[0]).toEqual([menu[3].key]);
  });
});
