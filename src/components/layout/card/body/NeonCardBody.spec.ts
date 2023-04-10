import { render } from '@testing-library/vue';
import NeonCardBody from './NeonCardBody.vue';

describe('NeonCardBody', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonCardBody, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders full width', () => {
    // given
    const { html } = render(NeonCardBody, { props: { fullWidth: true } });
    // when / then
    expect(html()).toMatch('neon-card-body--full-width');
  });
});
