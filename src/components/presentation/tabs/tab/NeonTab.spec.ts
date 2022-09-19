import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonTab from './NeonTab.vue';

describe('NeonTab', () => {
  const selected = true;

  let harness: RenderResult;

  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.matchMedia = () => ({ matches: false });
  });

  beforeEach(() => {
    harness = render(NeonTab, {
      props: { selected },
      slots: {
        default: '<p>test</p>',
      },
    });
  });

  it('renders default slot', () => {
    const { html } = harness;
    expect(html()).toMatch('<p>test</p>');
  });

  it('renders id', async () => {
    const id = 'xdd';
    const { html, rerender } = harness;
    await rerender({ id });

    expect(html()).toMatch(`id="${id}"`);
    expect(html()).toMatch(`aria-labelledby="${id}Button"`);
  });

  it('renders selected', () => {
    const { html } = harness;
    expect(html()).toMatch('neon-tab--selected');
  });

  it('renders tab selected false', async () => {
    const { html, rerender } = harness;
    await rerender({ selected: false });
    expect(html()).not.toMatch('neon-tab--selected');
  });

  it('does not render tab toggle on if, selected false', async () => {
    const { baseElement, rerender } = harness;
    await rerender({ selected: false, toggleOnIf: true });
    expect(baseElement.innerHTML).not.toMatch('neon-tab');
  });

  it('renders tab toggle on if, selected true', async () => {
    const { html, rerender } = harness;
    await rerender({ selected: true, toggleOnIf: true });
    expect(html()).toMatch('neon-tab');
  });
});
