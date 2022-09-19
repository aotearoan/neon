import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonExpansionIndicator from './NeonExpansionIndicator.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonExpansionIndicator', () => {
  const props = {};
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonExpansionIndicator, { props });
  });

  it('renders defaults', () => {
    // given
    const { html } = harness;
    // when / then
    expect(html()).not.toMatch('neon-expansion-indicator--expanded');
    expect(html()).not.toMatch('neon-expansion-indicator--inverse');
    expect(html()).not.toMatch('neon-expansion-indicator--disabled');
  });

  it('renders indicator expanded', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ expanded: true });
    expect(html()).toMatch('neon-expansion-indicator--expanded');
  });

  it('renders inverse', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ inverse: true });
    expect(html()).toMatch('neon-expansion-indicator--inverse');
  });

  it('renders disabled', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ disabled: true });
    expect(html()).toMatch('neon-expansion-indicator--disabled');
  });

  it('renders indicator color', async () => {
    // given
    const { html, rerender } = harness;
    // when / then
    await rerender({ color: NeonFunctionalColor.Info });
    expect(html()).toMatch('neon-expansion-indicator--info');
  });
});
