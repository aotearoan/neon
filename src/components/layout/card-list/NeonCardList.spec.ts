import { fireEvent, render } from '@testing-library/vue';
import NeonCardList from './NeonCardList.vue';
import { cardListModelFixture } from '@/fixtures/CardListModelFixture';
import { router } from '../../../../test/unit/test-router';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonCardList', () => {
  const modelWithLinks = cardListModelFixture(5, 'http://getskeleton.com', 0);
  const modelNoLinks = cardListModelFixture(5, undefined, 0);

  it('renders filters slot contents', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        model: modelWithLinks,
        total: modelWithLinks.length,
      },
      slots: { filters: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders card slot contents', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        model: modelWithLinks,
        total: modelWithLinks.length,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders ofLabel override', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        model: modelWithLinks,
        total: modelWithLinks.length,
        ofLabel: 'von',
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch(`${modelWithLinks.length} von ${modelWithLinks.length}`);
  });

  it('renders showMoreLabel override', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        model: modelWithLinks,
        total: modelWithLinks.length - 1,
        showMoreLabel: 'Mehr laden',
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('Mehr laden');
  });

  it('renders showMoreLabel override', () => {
    // given
    const { html } = render(NeonCardList, {
      props: {
        model: modelWithLinks,
        total: modelWithLinks.length,
        endOfResultsLabel: 'Keine Daten mehr',
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(html()).toMatch('Keine Daten mehr');
  });

  it('renders cards non clickable by default', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__card--clickable').length).toEqual(0);
  });

  it('renders cards clickable', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length,
        clickable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__card--clickable').length).toEqual(modelNoLinks.length - 1);
  });

  it('renders disabled card', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length,
        clickable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__card--disabled').length).toEqual(1);
  });

  it('renders color', () => {
    // given
    const { container } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length,
        color: NeonFunctionalColor.Brand,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when / then
    expect(container.querySelectorAll('.neon-card-list__card--brand').length).toEqual(modelNoLinks.length);
  });

  it('emits show more event', async () => {
    // given
    const { container, emitted } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length - 1,
        color: NeonFunctionalColor.Brand,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__show-more') as HTMLButtonElement);
    // then
    expect(emitted()['show-more'].length).toEqual(1);
  });

  it('emits card click event', async () => {
    // given
    const { container, emitted } = render(NeonCardList, {
      props: {
        model: modelNoLinks,
        total: modelNoLinks.length - 1,
        clickable: true,
      },
      slots: { card: '<p>test</p>' },
      global: { plugins: [router] },
    });
    // when
    await fireEvent.click(container.querySelectorAll('.neon-card-list__card').item(0) as HTMLButtonElement);
    // then
    expect(emitted().click[0]).toEqual([0]);
  });
});
