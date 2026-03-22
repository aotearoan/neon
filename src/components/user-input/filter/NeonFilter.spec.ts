import { fireEvent, render } from '@testing-library/vue';
import { flushPromises } from '@vue/test-utils';
import type { NeonFilterItem } from '@/model/user-input/filter/NeonFilterItem';
import { router } from '../../../../test/unit/test-router';
import NeonFilter from './NeonFilter.vue';

describe('NeonFilter', () => {
  const modelValue: Array<NeonFilterItem> = [
    {
      label: 'Item 1',
      count: 5,
      selected: false,
    },
    {
      label: 'Item 2',
      count: 60,
      selected: false,
      disabled: true,
    },
    {
      label: 'Item 3',
      count: 22,
      selected: false,
    },
    {
      label: 'Item 4',
      count: 10,
      selected: false,
    },
    {
      label: 'Item 5',
      count: 42,
      selected: true,
    },
  ];

  const harness = (model = modelValue) => {
    return render(NeonFilter, {
      props: {
        modelValue: model,
        label: 'Artists | {itemLabel} | {count} artists',
      },
      global: {
        plugins: [router],
      },
    });
  };

  const open = async (container: Element) => {
    const button = container.querySelector('.neon-button__label')?.parentElement as HTMLButtonElement;
    await fireEvent.click(button);
    await flushPromises();
  };

  it('renders filter single selection', () => {
    const { container } = harness();
    expect(container.querySelector('.neon-button__label')?.textContent).toEqual('Item 5');
  });

  it('renders filter no selection', () => {
    const { container } = harness(modelValue.map((item) => ({ ...item, selected: false })));
    expect(container.querySelector('.neon-button__label')?.textContent).toEqual('Artists');
  });

  it('renders filter multi selection', () => {
    const { container } = harness(
      modelValue.map((item, index) => ({
        ...item,
        selected: index === 3 ? true : item.selected,
      })),
    );
    expect(container.querySelector('.neon-button__label')?.textContent).toEqual('2 artists');
  });

  it('opens dropdown', async () => {
    const { container, getByText } = harness();
    await open(container);
    getByText('Close');
  });

  it('updates show button label when selection changes', async () => {
    const { container, getByText } = harness();
    await open(container);
    await fireEvent.click(getByText(modelValue[3].label));
    await flushPromises();
    getByText('Show 52 items');
  });

  it('renders show label override', async () => {
    const { container, getByText, rerender } = harness();
    await rerender({ showLabel: 'Show {count} artworks | Show {count} artwork | Show {count} artworks' });
    await open(container);
    await fireEvent.click(getByText(modelValue[3].label));
    await flushPromises();
    getByText('Show 52 artworks');
  });

  it('filters list', async () => {
    const { container, getByPlaceholderText, html } = harness();
    await open(container);
    await fireEvent.update(getByPlaceholderText('Search'), '5');
    await flushPromises();
    expect(html()).toMatchSnapshot();
  });

  it('renders overridden placeholder', async () => {
    const { container, getByPlaceholderText, rerender } = harness();
    await rerender({ placeholder: 'Search artworks' });
    await open(container);
    getByPlaceholderText('Search artworks');
  });

  it('resets filter and emits all', async () => {
    const { container, emitted, getByText } = harness();
    await open(container);
    await fireEvent.click(getByText('Reset filter'));
    await flushPromises();
    await fireEvent.click(getByText('Show 139 items'));
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue.map((item) => ({ ...item, selected: false }))]);
  });

  it('resets filter and emits all overridden label', async () => {
    const { container, emitted, getByText, rerender } = harness();
    await rerender({ resetLabel: 'Reset' });
    await open(container);
    await fireEvent.click(getByText('Reset'));
    await flushPromises();
    await fireEvent.click(getByText('Show 139 items'));
    expect(emitted()['update:modelValue'][0]).toEqual([modelValue.map((item) => ({ ...item, selected: false }))]);
  });

  it('emits model update event', async () => {
    const { container, emitted, getByText } = harness();
    await open(container);
    await fireEvent.click(getByText(modelValue[3].label));
    await fireEvent.click(getByText('Show 52 items'));
    expect(emitted()['update:modelValue'][0]).toEqual([
      modelValue.map((item, index) => ({ ...item, selected: index === 3 ? true : item.selected })),
    ]);
  });
});
