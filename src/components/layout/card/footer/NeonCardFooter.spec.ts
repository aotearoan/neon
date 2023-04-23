import { render } from '@testing-library/vue';
import NeonCardFooter from './NeonCardFooter.vue';

describe('NeonCardFooter', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonCardFooter, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
