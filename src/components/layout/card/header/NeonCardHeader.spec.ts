import { render } from '@testing-library/vue';
import NeonCardHeader from './NeonCardHeader.vue';

describe('NeonCardHeader', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonCardHeader, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
