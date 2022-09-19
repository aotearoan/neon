import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonTooltip from './NeonTooltip.vue';
import { NeonTooltipStyle } from '../../../common/enums/NeonTooltipStyle';
import { NeonOutlineStyle } from '../../../common/enums/NeonOutlineStyle';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonTooltip', () => {
  const slotValue = 'lol';
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonTooltip, {
      props: {},
      slots: {
        content: `<p>${slotValue}Content</p>`,
        target: `<p>${slotValue}Target</p>`,
      },
    });
  });

  it('renders content slot', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText(slotValue + 'Content');
  });

  it('renders target slot', () => {
    // given
    const { getByText } = harness;
    // when / then
    getByText(slotValue + 'Target');
  });

  it('renders id', async () => {
    // given
    const id = 'lol';
    const { html, rerender } = harness;
    await rerender({ id });
    // when / then
    expect(html()).toMatch(`id="${id}"`);
    expect(html()).toMatch(`aria-describedby="${id}"`);
  });

  it('renders default placement', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-tooltip--top');
  });

  it('renders default style', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-tooltip--tooltip');
  });

  it('renders style', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ tooltipStyle: NeonTooltipStyle.Popover });
    // when / then
    expect(html()).toMatch('neon-tooltip--popover');
  });

  it('does not render arrow overlay when tooltip style', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-tooltip__arrow-overlay');
  });

  it('renders arrow overlay when popover style', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ tooltipStyle: NeonTooltipStyle.Popover });
    // when / then
    expect(html()).toMatch('neon-tooltip__arrow-overlay');
  });

  it('renders default outline style', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-tooltip--outline-text');
  });

  it('renders outline style', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ outlineStyle: NeonOutlineStyle.Border });
    // when / then
    expect(html()).toMatch('neon-tooltip--outline-border');
  });

  it('renders default outline color', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).toMatch('neon-tooltip--outline-color-primary');
  });

  it('renders outline color', async () => {
    // given
    const { html, rerender } = harness;
    await rerender({ outlineColor: NeonFunctionalColor.Info });
    // when / then
    expect(html()).toMatch('neon-tooltip--outline-color-info');
  });


  it('is closed by default', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-tooltip--open');
  });
});
