import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonFooter from './NeonFooter.vue';

describe('NeonFooter', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonFooter, {
        props: { open: false },
        slots: { default: '<p>test</p>' },
      },
    );
  });

  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonFooter, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
