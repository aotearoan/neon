import { fireEvent, render } from '@testing-library/vue';
import NeonCardListCard from './NeonCardListCard.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonCardListCard', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonCardListCard, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders with color', () => {
    // given
    const { container } = render(NeonCardListCard, { props: { color: NeonFunctionalColor.Brand } });
    // when / then
    expect(container.querySelector(`.neon-card-list__card--${NeonFunctionalColor.Brand}`)).toBeDefined();
  });

  it('renders not disabled by default', () => {
    // given
    const { container } = render(NeonCardListCard, { props: {} });
    // when / then
    expect(container.querySelector(`.neon-card-list__card--disabled`)).toBeNull();
  });

  it('renders disabled', () => {
    // given
    const { container } = render(NeonCardListCard, { props: { disabled: true } });
    // when / then
    expect(container.querySelector(`.neon-card-list__card--disabled`)).toBeDefined();
  });

  it('renders not clickable by default', () => {
    // given
    const { container } = render(NeonCardListCard, { props: {} });
    // when / then
    expect(container.querySelector(`.neon-card-list__card--clickable`)).toBeNull();
  });

  it('renders clickable', () => {
    // given
    const { container } = render(NeonCardListCard, { props: { clickable: true } });
    // when / then
    expect(container.querySelector(`.neon-card-list__card--clickable`)).toBeDefined();
  });

  it('emits click event', async () => {
    // given
    const { container, emitted } = render(NeonCardListCard, { props: { clickable: true } });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__card') as HTMLElement);
    // then
    expect(emitted().click[0]).toBeDefined();
  });

  it('does not emits click event when disabled', async () => {
    // given
    const { container, emitted } = render(NeonCardListCard, { props: { clickable: true, disabled: true } });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__card') as HTMLElement);
    // then
    expect(emitted().click).toBeUndefined();
  });

  it('does not emits click event when not clickable', async () => {
    // given
    const { container, emitted } = render(NeonCardListCard, { props: { clickable: false } });
    // when
    await fireEvent.click(container.querySelector('.neon-card-list__card') as HTMLElement);
    // then
    expect(emitted().click).toBeUndefined();
  });
});
