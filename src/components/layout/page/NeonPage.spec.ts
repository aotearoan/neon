import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonPage from './NeonPage.vue';

describe('NeonPage', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonPage, {
        props: { open: false },
        slots: {
          'top-nav': '<p>top nav</p>',
          'side-nav': '<p>side nav</p>',
          content: '<p>contents</p>',
        },
      },
    );
  });

  it('renders top-nav slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>top nav</p>');
  });

  it('renders top-nav slot class', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-page--with-top-nav');
  });

  it('renders side-nav slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>side nav</p>');
  });

  it('renders side-nav slot class', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-page--with-side-nav');
  });

  it('renders content slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>contents</p>');
  });
});
