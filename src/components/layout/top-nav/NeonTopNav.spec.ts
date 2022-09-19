import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonTopNav from './NeonTopNav.vue';

describe('NeonTopNav', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonTopNav, {
        props: { open: false },
        slots: { default: '<p>test</p>' },
      },
    );
  });

  it('renders default slot contents', () => {
    // given
    const { html } = render(NeonTopNav, { slots: { default: '<p>test</p>' } });
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });
});
