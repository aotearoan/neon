import { render } from '@testing-library/vue';
import NeonLoadingStateCard from './NeonLoadingStateCard.vue';

describe('NeonLoadingStateCard', () => {
  it('renders card', () => {
    const { html } = render(NeonLoadingStateCard);
    expect(html()).toMatchSnapshot();
  });
});
