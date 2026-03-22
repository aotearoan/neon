import { render } from '@testing-library/vue';
import NeonFilterBar from './NeonFilterBar.vue';

describe('NeonFilterBar', () => {
  it('renders filters slot contents', () => {
    // given
    const { html } = render(NeonFilterBar, { slots: { filters: '<p>filters slot</p>' } });
    // when / then
    expect(html()).toMatch('<p>filters slot</p>');
  });

  it('renders sort slot contents', () => {
    // given
    const { html } = render(NeonFilterBar, { slots: { sort: '<p>sort slot</p>' } });
    // when / then
    expect(html()).toMatch('<p>sort slot</p>');
  });
});
