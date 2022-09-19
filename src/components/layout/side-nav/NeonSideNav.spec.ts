import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonSideNav from './NeonSideNav.vue';

describe('NeonSideNav', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonSideNav, {
        props: {},
        slots: { sticky: '<p>sticky</p>', scrolling: '<p>scrolling</p>' },
      },
    );
  });

  it('renders sticky slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-side-nav__sticky');
    expect(html()).toMatch('sticky');
  });

  it('renders scrolling slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-side-nav__scrolling');
    expect(html()).toMatch('scrolling');
  });

  it('renders hr when sticky and scrolling slots contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<hr');
  });

  it('renders full width class', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ fullWidth: true });
    // when / then
    expect(html()).toMatch('neon-side-nav--full-width');
  });
});
