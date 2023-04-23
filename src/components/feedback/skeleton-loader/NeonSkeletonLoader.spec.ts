import { render } from '@testing-library/vue';
import NeonSkeletonLoader from './NeonSkeletonLoader.vue';

describe('NeonNotificationCounter', () => {
  const count = 5;

  it('renders correct number of loading bars', () => {
    const { html } = render(NeonSkeletonLoader, { props: { count } });
    expect(html()).toEqual(`<div class="neon-skeleton-loader">
  <div class="neon-skeleton-loader__item"></div>
  <div class="neon-skeleton-loader__item"></div>
  <div class="neon-skeleton-loader__item"></div>
  <div class="neon-skeleton-loader__item"></div>
  <div class="neon-skeleton-loader__item"></div>
</div>`);
  });
});
