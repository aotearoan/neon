import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonAlert from './NeonAlert.vue';

describe('NeonAlert', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonAlert, {
      props: { dismissable: true, duration: 1000 },
    });
  });

  it('matches snapshot', async () => {
    // given
    const { html } = harness;
    // then
    expect(html()).toMatchSnapshot();
  });
});
