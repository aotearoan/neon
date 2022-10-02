import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonLabel from './NeonLabel.vue';
import { NeonLabelSize } from '@/common/enums/NeonLabelSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '@/common/enums/NeonHorizontalPosition';

describe('NeonLabel', () => {
  const label = 'test label';
  const icon = 'check';

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonLabel, { props: { label } });
  });

  it('renders label', () => {
    const { getByText, html } = harness;
    getByText(label);
    expect(html()).toMatch('neon-label--with-label');
    expect(html()).toMatch('neon-label__label');
  });

  it('renders icon', async () => {
    const { html, rerender } = harness;

    await rerender({ icon });
    expect(html()).toMatch('neon-label--with-icon');
    expect(html()).toMatch('neon-label__icon');
  });

  it('renders default size', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-label--s');
  });

  it('renders size', async () => {
    const { html, rerender } = harness;
    await rerender({ size: NeonLabelSize.ExtraSmall });

    expect(html()).toMatch('neon-label--xs');
  });

  it('renders default color', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-label--neutral');
  });

  it('renders color', async () => {
    const { html, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });

    expect(html()).toMatch('neon-label--primary');
  });

  it('renders alternate color', async () => {
    const { html, rerender } = harness;
    await rerender({ alternateColor: NeonFunctionalColor.Primary });

    expect(html()).toMatch('neon-label--alternate-color-primary');
  });

  it('renders icon position left', async () => {
    const { html, rerender } = harness;
    await rerender({ icon });
    expect(html()).toMatch('neon-label--icon-left');
  });

  it('renders icon position right', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, iconPosition: NeonHorizontalPosition.Right });
    expect(html()).toMatch('neon-label--icon-right');
  });
});
