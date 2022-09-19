import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonTreeMenu from './NeonTreeMenu.vue';

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

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonTreeMenu, {
      props: {
        model,
      },
      global: {
        stubs: ['router-link'],
      },
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

  it('emits click event on click section link', () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelectorAll('.neon-tree-menu__section-link').item(0) as HTMLElement;
    item?.click();
    // then
    expect(emitted().click[0]).toEqual(['feedback']);
  });

  it('emits click event on space keydown section link', async () => {
    // given
    const { container, emitted } = harness;
    // when
    const item = container.querySelectorAll('.neon-tree-menu__section-link').item(0) as HTMLElement;
    await fireEvent.keyDown(item, { key: 'Space', code: 'Space' });
    // then
    expect(emitted().click[0]).toEqual(['feedback']);
  });
});
