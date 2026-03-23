import { fireEvent, render, waitFor } from '@testing-library/vue';
import NeonListLayout from './NeonListLayout.vue';
import { CardListModelFixture } from '@/fixtures/CardListModelFixture';
import { PaginationFixture, PaginationFixtureNoUrl } from '@/fixtures/PaginationFixture';
import { router } from '@/../test/unit/test-router';
import { breadcrumbsFixture } from '@/fixtures/navigation/breadcrumbs/BreadcrumbsFixture';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import { LoadOnDemandWithLabelsFixture } from '@/fixtures/LoadOnDemandFixture';
import { flushPromises } from '@vue/test-utils';
import { nextTick } from 'vue';
import { NeonCardListStyle } from '@/model/layout/card-list/NeonCardListStyle';

describe('NeonListLayout', () => {
  const title = 'test title';
  const items = CardListModelFixture(5);
  const selectableItems = CardListModelFixture(5, undefined, 0, true);
  const pagination = PaginationFixture(1000);

  it('renders basic layout with pagination', () => {
    const { getByText, html } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
      },
      global: {
        plugins: [router],
      },
    });

    getByText(title);
    expect(html()).toMatchSnapshot();
  });

  it('renders subtitle', () => {
    const subtitle = 'test subtitle';
    const { getByText } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
        subtitle,
      },
      global: {
        plugins: [router],
      },
    });

    getByText(subtitle);
  });

  it('renders breadcrumbs', () => {
    const breadcrumbs = breadcrumbsFixture();
    const backLabel = 'Zurück';
    const { getByText, html } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
        breadcrumbs,
        backLabel,
      },
      global: {
        plugins: [router],
      },
    });

    getByText(backLabel);
    expect(html()).toMatchSnapshot();
  });

  it('renders color override', async () => {
    const { container } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
        color: NeonFunctionalColor.Warn,
      },
      global: {
        plugins: [router],
      },
    });
    await flushPromises();
    await nextTick();

    expect(container.querySelector('.neon-pagination--warn')).toBeDefined();
  });

  it('renders loading', async () => {
    const { container } = render(NeonListLayout, {
      props: {
        title,
        items: [],
        loading: true,
      },
      global: {
        plugins: [router],
      },
    });

    await waitFor(() => {
      expect(container.querySelector('.neon-splash-loader')).toBeDefined();
    });
  });

  it('renders selectable cards', () => {
    const { container } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
        selectable: true,
      },
      global: {
        plugins: [router],
      },
    });

    expect(container.querySelectorAll('.neon-card-list__card--selectable').length).toEqual(items.length);
  });

  it('renders load on demand pagination', () => {
    const loadOnDemand = LoadOnDemandWithLabelsFixture(1000);
    const { getByText, html } = render(NeonListLayout, {
      props: {
        title,
        items,
        loadOnDemand,
      },
      global: {
        plugins: [router],
      },
    });

    getByText('Zeigt 5 von 1,000');
    expect(html()).toMatchSnapshot();
  });

  it('renders default card list style', () => {
    // given
    const loadOnDemand = LoadOnDemandWithLabelsFixture(1000);
    const { container } = render(NeonListLayout, {
      props: {
        title: 'test',
        items,
        loadOnDemand,
      },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelector('.neon-card-list--list')).toBeDefined();
  });

  it('renders grid card list style', () => {
    // given
    const loadOnDemand = LoadOnDemandWithLabelsFixture(1000);
    const { container } = render(NeonListLayout, {
      props: {
        title: 'test',
        items,
        loadOnDemand,
        listStyle: NeonCardListStyle.Grid,
      },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelector('.neon-card-list--grid')).toBeDefined();
  });

  it('emits toggle-selection event when card is clicked', async () => {
    // given
    const { container, emitted } = render(NeonListLayout, {
      props: {
        title,
        items: selectableItems,
        pagination,
        selectable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelectorAll('.neon-selectable-card')[0] as HTMLDivElement);
    // then
    expect(emitted()['toggle-selected'][0]).toEqual([selectableItems[0].model.id, !selectableItems[0].selected]);
  });

  it('emits show more event', async () => {
    // given
    const { container, emitted } = render(NeonListLayout, {
      props: {
        items,
        loadOnDemand: { total: items.length + 1 },
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__show-more') as HTMLButtonElement);
    // then
    expect(emitted()['show-more'].length).toEqual(1);
  });

  it('renders with all slots', () => {
    const { getAllByText, getByText } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination,
      },
      global: {
        plugins: [router],
      },
      slots: {
        labels: '<p>labels</p>',
        actions: '<p>actions</p>',
        note: '<p>note</p>',
        filters: '<p>filters</p>',
        header: '<p>header</p>',
        card: '<p>card</p>',
      },
    });

    getByText('labels');
    getByText('actions');
    getByText('note');
    getByText('filters');
    getByText('header');
    expect(getAllByText('card').length).toEqual(items.length);
  });

  it('emits page change event', async () => {
    const { emitted, getByText } = render(NeonListLayout, {
      props: {
        title,
        items,
        pagination: PaginationFixtureNoUrl(1000),
      },
      global: {
        plugins: [router],
      },
      slots: {
        card: '<p>card</p>',
      },
    });

    await fireEvent.click(getByText('2'));
    expect(emitted()['page-change']).toEqual([[2]]);
  });

  it('renders empty state', () => {
    const { getByText } = render(NeonListLayout, {
      props: {
        title,
        items: [],
      },
      global: {
        plugins: [router],
      },
      slots: {
        emptyState: '<p>empty state</p>',
      },
    });

    getByText('empty state');
  });
});
