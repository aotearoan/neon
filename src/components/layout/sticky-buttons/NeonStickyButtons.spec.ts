import NeonStickyButtons from './NeonStickyButtons.vue';
import { render } from '@testing-library/vue';

describe('NeonStickyButtons', () => {
  it('renders NeonStickyButtons', () => {
    const { html } = render(NeonStickyButtons, { slots: { default: '<p>Test</p>' } });
    expect(html()).toMatchSnapshot();
  });
});
