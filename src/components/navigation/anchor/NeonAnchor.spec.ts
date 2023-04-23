import { render } from '@testing-library/vue';
import NeonAnchor from './NeonAnchor.vue';

describe('NeonAnchor', () => {
  it('renders anchor with id', () => {
    // given
    const id = 'xdd';
    const { html } = render(NeonAnchor, { props: { id } });

    // when / then
    expect(html()).toMatch(`id="${id}"`);
  });
});
