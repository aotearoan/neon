import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonStepper from './NeonStepper.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

describe('NeonStepper.vue', () => {
  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonStepper, {
      props: {
        steps: ['Parties', 'Artwork', 'Additional Terms', 'Duration', 'Review'],
        completedIndex: 3,
        modelValue: 2,
      },
    });
  });

  test('matches snapshot', () => {
    const { html } = harness;
    expect(html()).toMatchSnapshot();
  });

  test('emits input when clicking on previous step', async () => {
    const { emitted, getByText } = harness;

    await fireEvent.click(getByText('Artwork'));
    expect(emitted()['update:modelValue']).toEqual([[1]]);
  });

  test('renders in default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-stepper--primary')).toBeDefined();
  });

  test('renders alternative color', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Error });
    expect(container.querySelector('.neon-stepper--error')).toBeDefined();
  });

  test('does not emit input when clicking on active step', async () => {
    const { emitted, getByText } = harness;

    await fireEvent.click(getByText('Additional Terms'));
    expect(emitted()['update:modelValue']).toBeUndefined();
  });

  test('does not emit input when clicking on future step', async () => {
    const { emitted, getByText } = harness;

    await fireEvent.click(getByText('Review'));
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
