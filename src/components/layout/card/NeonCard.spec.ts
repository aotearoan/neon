import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonCard from './NeonCard.vue';
import { NeonOrientation } from '@/common/enums/NeonOrientation';
import { NeonResponsive } from '@/common/enums/NeonResponsive';

describe('NeonCard', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonCard, { slots: { default: '<p>test</p>' } });
  });

  it('renders orientation class', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ orientation: NeonOrientation.Horizontal });
    expect(html()).toMatch('neon-card--horizontal');
  });

  it('renders horizontal breakpoint class', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ orientation: NeonOrientation.Horizontal, horizontalBreakpoint: NeonResponsive.Tablet });
    expect(html()).toMatch('neon-card--horizontal-breakpoint-tablet');
  });

  it('does not render horizontal borders class by default', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-card--with-horizontal-borders');
  });

  it('renders horizontal borders class default for horizontal card', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ orientation: NeonOrientation.Horizontal });
    // then
    expect(html()).toMatch('neon-card--with-horizontal-borders');
  });

  it('does not render horizontal border class when disabled', async () => {
    // given
    const { html, rerender } = harness;
    // when
    await rerender({ orientation: NeonOrientation.Horizontal, horizontalBorders: false });
    // then
    expect(html()).not.toMatch('neon-card--with-horizontal-borders');
  });

  it('renders slot contents', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ orientation: NeonOrientation.Horizontal, horizontalBreakpoint: NeonResponsive.Tablet });
    expect(html()).toMatch('neon-card--horizontal-breakpoint-tablet');
  });

  it('renders default slot contents', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders no break', async () => {
    // given
    const { container, rerender } = harness;
    // when
    await rerender({ noBreak: true });
    // then
    expect(container.querySelector('.neon-card--horizontal-breakpoint-no-break')).toBeDefined();
  });
});
