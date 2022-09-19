import type { RenderResult } from '@testing-library/vue';
import { render } from '@testing-library/vue';
import NeonIcon from './NeonIcon.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

describe('NeonIcon', () => {
  const name = 'check';
  const color = NeonFunctionalColor.Warn;

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonIcon, { props: { name, color } });
  });

  it('renders color', () => {
    const { html } = harness;
    expect(html()).toMatch(`neon-icon--${color}`);
  });

  it('renders inverse', async () => {
    const { html, rerender } = harness;

    await rerender({ name, inverse: true });
    expect(html()).toMatch('neon-icon--inverse');
  });

  it('renders disabled', async () => {
    const { html, rerender } = harness;

    await rerender({ name, disabled: true });
    expect(html()).toMatch('neon-icon--disabled');
  });

  it('gets icon', () => {
    const { html } = harness;
    expect(html()).toMatch('<svg');
  });

  it('does not render missing icon', async () => {
    const { rerender } = harness;
    const errorFn = global.console.error;
    global.console.error = jest.fn();

    await rerender({ name: 'xdd' });
    expect(global.console.error).toHaveBeenCalled();
    global.console.error = errorFn;
  });
});
