import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonMenu from './NeonMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import { router } from '@/../test/unit/test-router';

describe('NeonMenu', () => {
  const menu = [
    {
      key: 'action-menu',
      label: 'Action Menu',
      href: '/test',
    },
    {
      key: 'link',
      label: 'Link',
      href: '/test',
    },
    {
      key: 'menu',
      label: 'Menu',
      href: '/test',
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
      href: '/test',
      children: [
        {
          key: 'tree-menu-description',
          label: 'Description',
          href: '/test',
        },
        {
          key: 'tree-menu-api',
          label: 'API',
          href: '/test',
        },
        {
          key: 'tree-menu-examples',
          label: 'Examples',
          href: '/test',
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
        plugins: [router],
      },
    });

    jest.resetAllMocks();
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

  it('emits click event', () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelector('.neon-menu__item:nth-child(4) .neon-menu__link-container') as HTMLElement;
    fireEvent.click(item);
    // then
    expect(emitted().click[0]).toEqual([menu[3].key]);
  });
});
