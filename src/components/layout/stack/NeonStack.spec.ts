import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonStack from './NeonStack.vue';
import { NeonSize } from '@/neon';

describe('NeonStack', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonStack, {
      props: {},
      slots: { default: '<p>test</p>' },
    });
  });

  it('renders slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatchSnapshot();
  });

  it('renders default gap', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-stack--gap-l');
  });

  it('renders gap', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ gap: NeonSize.Small });
    // when / then
    expect(html()).toMatch('neon-stack--gap-s');
  });
});
