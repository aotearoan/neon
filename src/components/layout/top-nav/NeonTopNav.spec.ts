import { render } from '@testing-library/vue';
import NeonTopNav from './NeonTopNav.vue';

describe('NeonTopNav', () => {
  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonTopNav, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
