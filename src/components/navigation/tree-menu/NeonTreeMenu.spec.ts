import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonTreeMenu from './NeonTreeMenu.vue';
import { router } from '@/../test/unit/test-router';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonTreeMenuSectionModel } from '@/common/models/NeonTreeMenuSectionModel';

describe('NeonTreeMenu', () => {
  const id = 'testTreeManu';
  const modelValue = [
    {
      key: 'feedback',
      label: 'Feedback',
      icon: 'send',
      expanded: false,
      children: [
        {
          key: 'alert',
          label: 'Alert',
          expanded: true,
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
        {
          key: 'note',
          label: 'Note',
          expanded: false,
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
        {
          key: 'notification-counter',
          label: 'Notification Counter',
          expanded: false,
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
      ],
    },
    {
      key: 'navigation',
      label: 'Navigation',
      expanded: false,
      children: [
        {
          key: 'action-menu',
          label: 'Action Menu',
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
        {
          key: 'dropdown-menu',
          label: 'Dropdown Menu',
          expanded: false,
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
        {
          key: 'link',
          label: 'Link',
          href: '/test',
        },
        {
          key: 'tree-menu',
          label: 'Tree Menu',
          expanded: false,
          subMenu: [
            {
              label: 'Description',
              href: '/test#description',
            },
            {
              label: 'API',
              href: '/test#api',
            },
            {
              label: 'Examples',
              href: '/test#examples',
            },
          ],
        },
      ],
    },
    {
      key: 'link-section',
      label: 'Link Section',
      href: '/some-url',
      expanded: true,
    },
    {
      key: 'disabled-section',
      label: 'Disabled Section',
      disabled: true,
      children: [
        {
          key: 'disabled-menu',
          label: 'Disabled Menu',
          href: '/disabled-url',
        },
      ],
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonTreeMenu, {
      props: {
        id,
        modelValue,
      },
      global: { plugins: [router] },
    });
  });

  it('matches snapshot', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-tree-menu--brand');
  });

  it('renders provided color', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });
    // when / then
    expect(html()).toMatch('neon-tree-menu--primary');
  });

  it('expands all', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ expandAll: true });
    // when / then
    expect(container.querySelector('.neon-tree-menu--expand-all')).toBeDefined();
    expect(container.querySelectorAll('.neon-tree-menu__sub-menu--expanded').length).toEqual(6);
  });

  it('disables sections', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ expandAll: true });
    // when
    const disabledEl = container.querySelector('.neon-tree-menu__section--disabled') as HTMLElement;
    expect(disabledEl).toBeDefined();
    const disabledElLink = container.querySelector(
      '.neon-tree-menu__section--disabled .neon-tree-menu__section-link',
    ) as HTMLElement;
    await fireEvent.click(disabledElLink);
    // then
    expect(emitted()['update:modelValue']).not.toBeDefined();
  });

  it('emits click event on click section link', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelectorAll('.neon-tree-menu__section-link').item(0) as HTMLElement;
    await fireEvent.click(item);
    // then
    const result = (
      emitted()['update:modelValue'][0] as Array<Array<NeonTreeMenuSectionModel>>
    )[0] as Array<NeonTreeMenuSectionModel>;
    expect(result).toBeDefined();
    expect(result[0].expanded).toEqual(true);
  });

  it('emits click event on space keydown section link', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container
      .querySelectorAll('.neon-tree-menu__section-link .neon-tree-menu__section-link-label')
      .item(0) as HTMLElement;
    await fireEvent.keyDown(item, { key: 'Space', code: 'Space' });
    // then
    const result = (
      emitted()['update:modelValue'][0] as Array<Array<NeonTreeMenuSectionModel>>
    )[0] as Array<NeonTreeMenuSectionModel>;
    expect(result).toBeDefined();
    expect(result[0].expanded).toEqual(true);
  });

  it('emits click event on space keydown link label', async () => {
    // given
    const { getByText, emitted } = harness;
    // when
    const link = getByText('Alert');
    await fireEvent.keyDown(link, { key: 'Space', code: 'Space' });
    // then
    const result = (
      emitted()['update:modelValue'][0] as Array<Array<NeonTreeMenuSectionModel>>
    )[0] as Array<NeonTreeMenuSectionModel>;
    expect(result).toBeDefined();
    expect(result[0].children?.[0].expanded).toEqual(false);
  });

  it('emits click event on enter keydown link label', async () => {
    // given
    const { getByText, emitted } = harness;
    // when
    const link = getByText('Alert');
    await fireEvent.keyDown(link, { key: 'Enter', code: 'Enter' });
    // then
    const result = (
      emitted()['update:modelValue'][0] as Array<Array<NeonTreeMenuSectionModel>>
    )[0] as Array<NeonTreeMenuSectionModel>;
    expect(result).toBeDefined();
    expect(result[0].children?.[0].expanded).toEqual(false);
  });
});
