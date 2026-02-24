import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonInline from './NeonInline.vue';
import { NeonResponsive } from '@/common/enums/NeonResponsive';
import { NeonSize } from '@/common/enums/NeonSize';

describe('NeonInline', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonInline, {
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
    expect(html()).toMatch('neon-inline--gap-l');
  });

  it('renders gap', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ gap: NeonSize.Small });
    // when / then
    expect(html()).toMatch('neon-inline--gap-s');
  });

  it('renders default breakpoint', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-inline--breakpoint-mobile-large');
  });

  it('renders breakpoint', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ breakpoint: NeonResponsive.Tablet });
    // when / then
    expect(html()).toMatch('neon-inline--breakpoint-tablet');
  });
});
