import { fireEvent, render } from '@testing-library/vue';
import { flushPromises } from '@vue/test-utils';
import { router } from '../../../../test/unit/test-router';
import NeonSearchFilter from './NeonSearchFilter.vue';

describe('NeonSearchFilter', () => {
  const searchCount = 123;
  const harness = (modelValue = '', count = searchCount) => {
    return render(NeonSearchFilter, {
      props: {
        modelValue,
        searchCount: count,
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

  it('renders filter with search term', () => {
    const { container } = harness('XDD');
    expect(container.querySelector('.neon-button__label')?.textContent).toEqual('XDD');
  });

  it('clears search', async () => {
    const { container, emitted } = harness('XDD');
    await fireEvent.click(container.querySelector('.neon-icon--name-times') as HTMLInputElement);
    expect(emitted()['update:modelValue'][0]).toEqual(['']);
  });

  it('renders filter without search term', () => {
    const { container } = harness();
    expect(container.querySelector('.neon-button__label')?.textContent).toEqual('Search');
  });

  it('opens dropdown', async () => {
    const { container, getByText } = harness();
    await open(container);
    getByText('Close');
  });

  it('updates show button label when search change', async () => {
    const { container, getByText } = harness();
    await open(container);
    const input = container.querySelector('.neon-input__text') as HTMLInputElement;
    await fireEvent.update(input, 'XDD');
    await flushPromises();
    getByText(`Show ${searchCount} items`);
  });

  it('renders overridden placeholder', async () => {
    const { container, getByPlaceholderText, rerender } = harness();
    await rerender({ placeholder: 'Search artworks' });
    await open(container);
    getByPlaceholderText('Search artworks');
  });

  it('emits model update event', async () => {
    const searchString = 'XDD';
    const { container, emitted, getByPlaceholderText, getByText } = harness();
    await open(container);
    await fireEvent.update(getByPlaceholderText('Search'), searchString);
    await fireEvent.click(getByText(`Show ${searchCount} items`));
    expect(emitted()['update:modelValue'][0]).toEqual([searchString]);
  });

  it('emits search change event', async () => {
    const searchString = 'XDD';
    const { container, emitted, getByPlaceholderText } = harness();
    await open(container);
    await fireEvent.update(getByPlaceholderText('Search'), searchString);
    expect(emitted().onSearch[0]).toEqual([searchString]);
  });
});
