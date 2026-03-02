import { render, type RenderResult } from '@testing-library/vue';
import NeonPageSection from './NeonPageSection.vue';

describe('NeonPageSection', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonPageSection, { props: { title: 'Title' }, slots: { default: '<p>Content</p>' } });
  });

  it('renders NeonPageSection', () => {
    const { html } = harness;
    expect(html()).toMatchSnapshot();
  });
});
