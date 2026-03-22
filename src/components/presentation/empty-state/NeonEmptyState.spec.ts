import { fireEvent, render, type RenderResult } from '@testing-library/vue';
import NeonEmptyState from './NeonEmptyState.vue';
import { router } from '../../../../test/unit/test-router';
import { NeonEmptyStateType } from '../../../model/presentation/empty-state/NeonEmptyStateType';

describe('NeonEmptyState', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonEmptyState, {
      props: {
        title: 'Empty State',
        ctas: [
          {
            label: 'Add something',
            href: '/go-here',
          },
        ],
        image: 'error',
      },
      global: {
        plugins: [router],
      },
      slots: {
        description: '<p>No items found</p>',
      },
    });
  });

  it('renders content', () => {
    const { container, html } = harness;
    expect(container.querySelector('.neon-empty-state--empty-state')).toBeDefined();
    expect(html()).toMatchSnapshot();
  });

  it('renders error type', async () => {
    const { container, rerender } = harness;
    await rerender({ type: NeonEmptyStateType.Error });
    expect(container.querySelector('.neon-empty-state--error')).toBeDefined();
  });

  it('renders subtitle', async () => {
    const subtitle = 'XDD';
    const { getByText, rerender } = harness;
    await rerender({ subtitle });
    getByText(subtitle);
  });

  it('does not emit cta-click event when href present', async () => {
    const { emitted, getByText } = harness;
    await fireEvent.click(getByText('Add something'));

    expect(emitted()['cta-click']).not.toBeDefined();
  });

  it('emits cta-click event when no href', async () => {
    const { emitted, getByText, rerender } = harness;
    await rerender({
      ctas: [
        {
          label: 'Add something',
        },
      ],
    });
    await fireEvent.click(getByText('Add something'));

    expect(emitted()['cta-click'][0]).toEqual([0]);
  });
});
