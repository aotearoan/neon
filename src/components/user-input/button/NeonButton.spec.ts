import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import { RouterLinkStub } from '@vue/test-utils';
import NeonButton from './NeonButton.vue';
import { NeonButtonSize } from '../../../common/enums/NeonButtonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';
import { NeonButtonStyle } from '../../../common/enums/NeonButtonStyle';
import { NeonState } from '../../../common/enums/NeonState';

describe('NeonButton', () => {
  const label = 'test label';
  const icon = 'check';
  const props = { label };
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonButton,
      {
        props,
        global: {
          stubs: { RouterLink: RouterLinkStub },
        },
      },
    );
  });

  it('renders label', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-button__label');
  });

  it('renders icon only', async () => {
    const { html, rerender } = harness;
    await rerender({ label: null, icon });
    expect(html()).toMatch('neon-button--with-icon');
    expect(html()).toMatch('neon-button--icon-only');
  });

  it('renders with outline by default', async () => {
    const { html, rerender } = harness;
    await rerender({ icon });
    expect(html()).not.toMatch('neon-button--no-outline');
  });

  it('renders no outline class', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, outline: false });
    expect(html()).toMatch('neon-button--no-outline');
  });

  it('renders ready state by default', async () => {
    const { html, rerender } = harness;
    await rerender({ icon });
    expect(html()).toMatch('neon-button--state-ready');
  });

  it('renders loading state', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, state: NeonState.Loading });
    expect(html()).toMatch('neon-button--state-loading');
  });

  it('renders success state', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, state: NeonState.Success });
    expect(html()).toMatch('neon-button--state-success');
  });

  it('renders error state', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, state: NeonState.Error });
    expect(html()).toMatch('neon-button--state-error');
  });

  it('renders default size', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-button--m');
  });

  it('renders size', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, size: NeonButtonSize.Small });
    expect(html()).toMatch('neon-button--s');
  });

  it('renders default color', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-button--low-contrast');
  });

  it('renders color', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, color: NeonFunctionalColor.Primary });
    expect(html()).toMatch('neon-button--primary');
  });

  it('renders alternate color', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, alternateColor: NeonFunctionalColor.Primary });
    expect(html()).toMatch('neon-button--alternate-color-primary');
  });

  it('renders default style', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-button--solid');
  });

  it('renders outline style', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, buttonStyle: NeonButtonStyle.Outline });
    expect(html()).toMatch('neon-button--outline');
  });

  it('renders icon position left', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, icon });
    expect(html()).toMatch('neon-button--icon-left');
  });

  it('renders icon position right', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, icon, iconPosition: NeonHorizontalPosition.Right });
    expect(html()).toMatch('neon-button--icon-right');
  });

  it('renders as button', () => {
    const { html } = harness;
    expect(html()).toMatch('<button');
  });

  it('renders as button', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, href: 'http://getskeleton.com' });
    expect(html()).toMatch('<a');
  });

  it('renders full width', async () => {
    const { html, rerender } = harness;
    await rerender({ ...props, fullWidth: true });
    expect(html()).toMatch('neon-button--full-width');
  });

  it('renders circular', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, circular: true });
    expect(html()).toMatch('neon-button--circular');
  });

  it('renders indicator', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, indicator: true });
    expect(html()).toMatch('neon-button__indicator');
  });

  it('renders indicator expanded', async () => {
    const { html, rerender } = harness;
    await rerender({ icon, indicator: true, indicatorExpanded: true });
    expect(html()).toMatch('neon-expansion-indicator--expanded');
  });
});
