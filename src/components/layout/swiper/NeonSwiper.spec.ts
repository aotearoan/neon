import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonSwiper from './NeonSwiper.vue';
import { NeonOrientation } from '@/common/enums/NeonOrientation';

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

  it('renders horizontal orientation by default', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-swiper--horizontal')).toBeDefined();
  });

  it('renders vertical orientation', async () => {
    // given
    const { container, rerender } = harness;
    // when / then
    await rerender({ orientation: NeonOrientation.Vertical });
    expect(container.querySelector('.neon-swiper--vertical')).toBeDefined();
  });

  it('hides starting fade', async () => {
    // given
    const { container, rerender } = harness;
    // when / then
    await rerender({ hideFadeStart: true });
    expect(container.querySelector('.neon-swiper--hide-fade-start')).toBeDefined();
  });

  it('hides ending fade', async () => {
    // given
    const { container, rerender } = harness;
    // when / then
    await rerender({ hideFadeEnd: true });
    expect(container.querySelector('.neon-swiper--hide-fade-end')).toBeDefined();
  });
});
