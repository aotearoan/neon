import NeonLabelledContent from './NeonLabelledContent.vue';
import { render, type RenderResult } from '@testing-library/vue';

describe('NeonLabelledContent', () => {
  let harness: RenderResult;
  const label = 'Label';
  const value = 'Value';

  beforeEach(() => {
    harness = render(NeonLabelledContent, {
      props: {
        label,
        value,
      },
    });
  });

  it('Renders label & value', () => {
    const { container } = harness;

    expect(container.querySelector('.neon-labelled-content__label')?.textContent).toEqual(label);
    expect(container.querySelector('.neon-labelled-content__value')?.textContent).toEqual(value);
  });

  it('Renders important', async () => {
    const { container, rerender } = harness;

    await rerender({ important: true });
    expect(container.querySelector('.neon-labelled-content__label--important')?.textContent).toEqual(label);
  });

  it('Renders numeric', async () => {
    const { container, rerender } = harness;

    await rerender({ numeric: true });
    expect(container.querySelector('.neon-number')?.textContent).toEqual(value);
  });

  it('Renders using slot', async () => {
    const { container } = render(NeonLabelledContent, {
      props: {
        label,
      },
      slots: { default: `<p>${value}</p>` },
    });

    expect(container.querySelector('p')?.textContent).toEqual(value);
  });
});
