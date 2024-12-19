import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonSwiper from './NeonSwiper.vue';

describe('NeonSwiper', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonSwiper, {
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

  it('applies fade style by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-swiper--fade')).toBeDefined();
  });

  it('does not apply fade style when false', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ fade: false });
    // when / then
    expect(container.querySelector('.neon-swiper--fade')).toBeNull();
  });
});
