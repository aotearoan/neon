import NeonFilterList from './NeonFilterList.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import { router } from '@/../test/unit/test-router';

describe('NeonFilterList', () => {
  const items = [
    {
      key: 'key1',
      label: 'Item 1',
      count: 5837,
    },
    {
      key: 'key2',
      label: 'Item 2',
      count: 433,
    },
    {
      key: 'key3',
      label: 'Item 3',
      count: 327,
    },
    {
      key: 'key4',
      label: 'Disabled item',
      count: 100,
      disabled: true,
    },
  ];

  const longItemList = [
    {
      key: 'key1',
      label: 'Item 1',
      count: 5837,
    },
    {
      key: 'key2',
      label: 'Item 2',
      count: 433,
    },
    {
      key: 'key3',
      label: 'Item 3',
      count: 327,
    },
    {
      key: 'key4',
      label: 'Item 4',
      count: 100,
    },
    {
      key: 'key5',
      label: 'Item 5',
      count: 5837,
    },
    {
      key: 'key6',
      label: 'Item 6',
      count: 433,
    },
    {
      key: 'key7',
      label: 'Item 7',
      count: 327,
    },
    {
      key: 'key8',
      label: 'Item 8',
      count: 100,
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonFilterList, {
      props: { items, modelValue: [] },
      global: {
        plugins: [router],
      },
    });
  });

  it('renders multiselect short list', () => {
    const { container, html } = harness;
    expect(html()).toMatchSnapshot();
    expect(container.querySelectorAll('.neon-filter-list__item').length).toEqual(items.length);
  });

  it('renders long list displayCount', () => {
    const displayCount = 3;
    const { container } = render(NeonFilterList, {
      props: { items: longItemList, displayCount, modelValue: [] },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelectorAll('.neon-filter-list__item').length).toEqual(displayCount);
  });

  it('renders long list displayCount, showAll', async () => {
    const displayCount = 3;
    const { container } = render(NeonFilterList, {
      props: { items: longItemList, modelValue: [], displayCount },
      global: {
        plugins: [router],
      },
    });
    const el = container.querySelector('.neon-filter-list__show-toggle') as HTMLInputElement;
    await fireEvent.click(el);
    expect(container.querySelectorAll('.neon-filter-list__item').length).toEqual(longItemList.length);
  });

  it('renders long list no displayCount', async () => {
    const { container, rerender } = harness;
    await rerender({ items: longItemList, modelValue: [] });
    expect(container.querySelectorAll('.neon-filter-list__item').length).toEqual(longItemList.length);
  });

  it('renders single select long list', async () => {
    const { html, rerender } = harness;
    await rerender({ items: longItemList, multiple: false, modelValue: '' });
    expect(html()).toMatchSnapshot();
  });

  it('renders long list, show all', async () => {
    const { html, rerender } = harness;
    await rerender({ items: longItemList, modelValue: [] });
    expect(html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-filter-list--primary')).toBeDefined();
    expect(container.querySelector('.neon-filter-list__item-close.neon-icon--primary')).toBeDefined();
  });

  it('renders color', async () => {
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    expect(container.querySelector('.neon-filter-list--brand')).toBeDefined();
    expect(container.querySelector('.neon-filter-list__item-close.neon-icon--brand')).toBeDefined();
  });

  it('renders default size', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-filter-list--m')).toBeDefined();
    expect(container.querySelector('.neon-list--m')).toBeDefined();
  });

  it('renders size', async () => {
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    expect(container.querySelector('.neon-filter-list--l')).toBeDefined();
    expect(container.querySelector('.neon-list--l')).toBeDefined();
  });

  it('renders multiple', () => {
    const { container } = harness;
    expect(container.querySelector('.neon-filter-list--multiple')).toBeDefined();
    expect(container.querySelector('.neon-filter-list')?.getAttribute('aria-multiselectable')).toEqual('true');
  });

  it('renders single', async () => {
    const { container, rerender } = harness;
    await rerender({ items, multiple: false, modelValue: '' });
    expect(container.querySelector('.neon-filter-list--multiple')).toBeNull();
    expect(container.querySelector('.neon-filter-list')?.getAttribute('aria-multiselectable')).toEqual('false');
  });

  it('renders active descendant multiple', async () => {
    const { container, rerender } = harness;
    await rerender({ items, modelValue: [items[0].key] });
    expect(container.querySelector('.neon-filter-list')?.getAttribute('aria-activedescendant')).toEqual(items[0].key);
  });

  it('renders active descendant single', async () => {
    const { container, rerender } = harness;
    await rerender({ items, multiple: false, modelValue: items[0].key });
    expect(container.querySelector('.neon-filter-list')?.getAttribute('aria-activedescendant')).toEqual(items[0].key);
  });

  it('renders selected multiple', async () => {
    const { container, rerender } = harness;
    await rerender({ items, modelValue: [items[0].key, items[1].key] });
    const firstEl = container.querySelector('.neon-filter-list__item:first-child.neon-filter-list__item--selected');
    expect(firstEl).toBeDefined();
    expect(firstEl?.getAttribute('aria-selected')).toEqual('true');
    expect(
      container.querySelector('.neon-filter-list__item:nth-child(2).neon-filter-list__item--selected'),
    ).toBeDefined();
  });

  it('renders selected single', async () => {
    const { container, rerender } = harness;
    await rerender({ items, multiple: false, modelValue: items[0].key });
    const el = container.querySelector('.neon-filter-list__item:first-child.neon-filter-list__item--selected');
    expect(el).toBeDefined();
    expect(el?.getAttribute('aria-selected')).toEqual('true');
  });

  it('renders disabled', () => {
    const { container } = harness;
    const el = container.querySelector('.neon-filter-list__item:last-child.neon-filter-list__item--disabled');
    expect(el).toBeDefined();
    expect(el?.getAttribute('tabindex')).toEqual('-1');
  });

  it('renders tabindex', () => {
    const { container } = harness;
    const el = container.querySelector('.neon-filter-list__item:first-child');
    expect(el).toBeDefined();
    expect(el?.getAttribute('tabindex')).toEqual('0');
  });

  it('renders show more label', () => {
    const showMoreLabel = 'xdd';
    const { container } = render(NeonFilterList, {
      props: { items, modelValue: [items[0].key], displayCount: 2, showMoreLabel },
      global: {
        plugins: [router],
      },
    });
    expect(container.querySelector('.neon-filter-list__show-toggle')?.textContent).toEqual(showMoreLabel);
  });

  it('renders show less label', async () => {
    const showLessLabel = 'xdd';
    const showMoreLabel = 'show more';
    const { container } = render(NeonFilterList, {
      props: { items, modelValue: [], displayCount: 2, showMoreLabel, showLessLabel },
      global: {
        plugins: [router],
      },
    });
    const el = container.querySelector('.neon-filter-list__show-toggle') as HTMLElement;
    await fireEvent.click(el);
    expect(container.querySelector('.neon-filter-list__show-toggle')?.textContent).toEqual(showLessLabel);
  });

  it('emits input on click multiple', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, modelValue: [items[1].key] });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    expect(emitted()['update:modelValue'][0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on keydown enter', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, modelValue: [items[1].key] });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.keyDown(el, { key: 'Enter', code: 'Enter' });
    expect(emitted()['update:modelValue'][0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on keydown space', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, modelValue: [items[1].key] });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.keyDown(el, { key: 'Space', code: 'Space' });
    expect(emitted()['update:modelValue'][0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on click multiple deselect', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, modelValue: [items[0].key] });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('emits input on click single', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, multiple: false, modelValue: items[1].key });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    expect(emitted()['update:modelValue'][0]).toEqual([items[0].key]);
  });

  it('emits input on click single unselect', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, multiple: false, modelValue: items[0].key });
    const el = container.querySelector('.neon-filter-list__item:first-child') as HTMLElement;
    await fireEvent.click(el);
    expect(emitted()['update:modelValue'][0]).toEqual(['']);
  });

  it('does not emit input on click when disabled', async () => {
    const { container, emitted, rerender } = harness;
    await rerender({ items, modelValue: [items[1].key] });
    const el = container.querySelector('.neon-filter-list__item:last-child') as HTMLElement;
    await fireEvent.click(el);
    expect(emitted()['update:modelValue']).toBeUndefined();
  });
});
