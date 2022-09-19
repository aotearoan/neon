import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonGridArea from './NeonGridArea.vue';

describe('NeonGridArea', () => {
  const id = 'test';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonGridArea, {
        props: { id },
        slots: { default: '<p>test</p>' },
      },
    );
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders id as class', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch(`class="neon-grid-area ${id}"`);
  });
});
