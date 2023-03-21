import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonTreeMenu from './NeonTreeMenu.vue';
import { router } from '@/../test/unit/test-router';

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
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'note',
          label: 'Note',
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'notification-counter',
          label: 'Notification Counter',
          href: '/test',
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
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'dropdown-menu',
          label: 'Dropdown Menu',
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'link',
          label: 'Link',
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
        {
          key: 'tree-menu',
          label: 'Tree Menu',
          href: '/test',
          anchors: ['Description', 'API', 'Examples'],
        },
      ],
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonTreeMenu, {
      props: {
        model,
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

  it('expands all', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ expandAll: true });
    // when / then
    expect(container.querySelector('.neon-tree-menu--expand-all')).toBeDefined();
    expect(container.querySelectorAll('.neon-tree-menu__anchors--expanded').length).toEqual(7);
  });

  it('emits click event on click section link', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelectorAll('.neon-tree-menu__section-link').item(0) as HTMLElement;
    await fireEvent.click(item);
    // then
    expect(emitted().click[0]).toEqual(['feedback']);
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
    expect(emitted().click[0]).toEqual(['feedback']);
  });
});
