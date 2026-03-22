import { fireEvent, render } from '@testing-library/vue';
import NeonCardList from './NeonCardList.vue';
import { type CardListModel, CardListModelFixture } from '@/fixtures/CardListModelFixture';
import { router } from '../../../../test/unit/test-router';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import { PaginationFixture, PaginationFixtureNoUrl } from '@/fixtures/PaginationFixture';
import { LoadOnDemandWithLabelsFixture } from '@/fixtures/LoadOnDemandFixture';
import type { NeonCardListModel } from '@/model/layout/card-list/NeonCardListModel';

describe('NeonCardList', () => {
  let modelWithLinks: Array<NeonCardListModel<CardListModel>>;
  let modelNoLinks: Array<NeonCardListModel<CardListModel>>;
  let modelSelectable: Array<NeonCardListModel<CardListModel>>;

  beforeEach(() => {
    modelWithLinks = CardListModelFixture(5, 'http://getskeleton.com', 0);
    modelNoLinks = CardListModelFixture(5, undefined, 0);
    modelSelectable = CardListModelFixture(5, undefined, 0, true);
  });

  it('renders filters slot contents', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
      },
      slots: { filters: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders header slot contents', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand: { total: modelWithLinks.length },
      },
      slots: { header: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders card slot contents', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand: { total: modelWithLinks.length },
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders selectable cards', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelSelectable,
        selectable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders loading state', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        items: modelSelectable,
        loading: true,
      },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelector('.neon-splash-loader')).toBeDefined();
  });

  it('emits toggle-selection event when card is clicked', async () => {
    // given
    const { container, emitted } = render(NeonCardList, {
      props: {
        items: modelSelectable,
        selectable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelectorAll('.neon-selectable-card')[0] as HTMLDivElement);
    // then
    expect(emitted()['toggle-selected'][0]).toEqual([modelSelectable[0].model.id, !modelSelectable[0].selected]);
  });

  it('renders default labels', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand: { total: modelWithLinks.length },
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    const result = html();
    expect(result).toMatch(`${modelWithLinks.length} of ${modelWithLinks.length}`);
    expect(result).toMatch('End of results');
  });

  it('renders default show more label', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand: { total: modelWithLinks.length - 1 },
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    const result = html();
    expect(result).toMatch('Show more');
  });

  it('renders label overrides', () => {
    // given
    const loadOnDemand = LoadOnDemandWithLabelsFixture(modelWithLinks.length);
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch(`${modelWithLinks.length} ${loadOnDemand.ofLabel} ${modelWithLinks.length}`);
  });

  it('renders showMoreLabel override', () => {
    // given
    const loadOnDemand = LoadOnDemandWithLabelsFixture(modelWithLinks.length - 1);
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch(loadOnDemand.showMoreLabel ?? '');
  });

  it('renders endOfResultsLabel override', () => {
    // given
    const loadOnDemand = LoadOnDemandWithLabelsFixture(modelWithLinks.length);
    const { html } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        loadOnDemand,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch(loadOnDemand.endOfResultsLabel ?? '');
  });

  it('renders disabled card', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        items: modelNoLinks,
        total: modelNoLinks.length,
        clickable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__card--disabled').length).toEqual(1);
  });

  it('renders with pagination & color', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        items: modelWithLinks,
        pagination: PaginationFixture(modelWithLinks.length),
        color: NeonFunctionalColor.Info,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__link--info').length).toEqual(modelWithLinks.length - 1);
    expect(container.querySelector('.neon-pagination')).toBeDefined();
    expect(container.querySelector('.neon-pagination--info')).toBeDefined();
  });

  it('emits page change events', async () => {
    // given
    const items = CardListModelFixture(50, 'http://getskeleton.com', 0);
    const { emitted, getByText } = render(NeonCardList, {
      props: {
        items,
        pagination: PaginationFixtureNoUrl(items.length),
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    await fireEvent.click(getByText(2));
    expect(emitted()['page-change']).toEqual([[2]]);
  });

  it('emits show more event', async () => {
    // given
    const { container, emitted } = render(NeonCardList, {
      props: {
        items: modelNoLinks,
        loadOnDemand: { total: modelNoLinks.length - 1 },
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__show-more') as HTMLButtonElement);
    // then
    expect(emitted()['show-more'].length).toEqual(1);
  });
});
