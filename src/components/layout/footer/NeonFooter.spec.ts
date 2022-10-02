import { render } from '@testing-library/vue';
import NeonFooter from './NeonFooter.vue';

describe('NeonFooter', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonFooter, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
