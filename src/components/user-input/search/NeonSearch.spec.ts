import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonSearch from './NeonSearch.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonSearchOption } from '@/common/models/NeonSearchOption';
import { NeonSize } from '@/common/enums/NeonSize';

describe('NeonSearch', () => {
  const modelValue = '';
  const placeholder = '';
  const options: NeonSearchOption[] = [
    {
      key: 'key1',
      label: 'Label 1',
      separatorBefore: true,
      icon: 'check',
    },
    {
      key: 'key2',
      label: 'Label 2',
      separatorBefore: true,
      icon: 'check',
    },
  ];

  let harness: RenderResult;

  beforeEach(() => {
    harness = render(NeonSearch, { props: { modelValue, placeholder, options } });
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-search--low-contrast')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--low-contrast')).toBeDefined();
    expect(container.querySelector('.neon-search__container--low-contrast')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Primary });
    // when / then
    expect(container.querySelector('.neon-search--primary')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--primary')).toBeDefined();
    expect(container.querySelector('.neon-search__container--primary')).toBeDefined();
  });

  it('renders single', async () => {
    // given
    const modelValue = 'xdd';
    const { container, rerender } = harness;
    await rerender({ modelValue });
    // when / then
    expect(container.querySelector('.neon-search--multiple')).toBeNull();
    expect(container.querySelector('.neon-search')?.getAttribute('aria-multiselectable')).toEqual('false');
    expect(container.querySelector('.neon-search')?.getAttribute('aria-activedescendant')).toEqual(modelValue);
  });

  it('renders multiple', async () => {
    // given
    const modelValue = [{ key: 'xdd', label: 'XDD' }];
    const { container, rerender } = harness;
    await rerender({ modelValue, multiple: true });
    // when / then
    expect(container.querySelector('.neon-search--multiple')).toBeDefined();
    expect(container.querySelector('.neon-search')?.getAttribute('aria-multiselectable')).toEqual('true');
    expect(container.querySelector('.neon-search')?.getAttribute('aria-activedescendant')).toEqual(modelValue[0].key);
  });

  it('renders non empty', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-search--empty')).toBeNull();
  });

  it('renders empty', async () => {
    // given
    const options: NeonSearchOption[] = [];
    const { container, rerender } = harness;
    await rerender({ options });
    // when / then
    expect(container.querySelector('.neon-search--empty')).toBeDefined();
  });

  it('renders enabled', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-search--disabled')).toBeNull();
    expect(container.querySelector('.neon-dropdown--disabled')).toBeNull();
    expect(container.querySelector('.neon-search__container--disabled')).toBeNull();
    expect(container.querySelector('.neon-search__input.neon-input--disabled')).toBeNull();
  });

  it('renders disabled', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ disabled: true });
    // when / then
    expect(container.querySelector('.neon-search--disabled')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--disabled')).toBeDefined();
    expect(container.querySelector('.neon-search__container--disabled')).toBeDefined();
    expect(container.querySelector('.neon-search__input.neon-input--disabled')).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-dropdown--m')).toBeDefined();
    expect(container.querySelector('.neon-search__container--m')).toBeDefined();
    expect(container.querySelector('.neon-search__input.neon-input--m')).toBeDefined();
  });

  it('renders size', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ size: NeonSize.Large });
    // when / then
    expect(container.querySelector('.neon-dropdown--l')).toBeDefined();
    expect(container.querySelector('.neon-search__container--l')).toBeDefined();
    expect(container.querySelector('.neon-search__input.neon-input--l')).toBeDefined();
  });

  it('renders options', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-search__option--separator-before')).toBeDefined();
    expect(container.querySelector('.neon-search__option--m')).toBeDefined();
    expect(container.querySelector('.neon-search__option-icon')).toBeDefined();
    expect(container.querySelector('.neon-search__option-label')?.textContent).toEqual(options[0].label);
    expect(container.querySelector('.neon-search__option')?.getAttribute('id')).toEqual(options[0].key);
  });

  it('click option emits input single', async () => {
    // given
    const { container, emitted } = harness;
    // when
    await fireEvent.click(container.querySelector('.neon-search__option') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([options[0].key]);
  });

  it('click option emits input multiple, in modelValues', async () => {
    // given
    const modelValue: NeonSearchOption[] = [
      {
        key: 'key2',
        label: 'Label 2',
        separatorBefore: true,
        icon: 'check',
      },
    ];
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue, multiple: true });
    // when
    await fireEvent.click(container.querySelector('.neon-search__option:last-child') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });

  it('click option emits input multiple, not in modelValues', async () => {
    // given
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue: [], multiple: true });
    // when
    await fireEvent.click(container.querySelector('.neon-search__option:last-child') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[options[1]]]);
  });

  it('emits filter-changed', async () => {
    // given
    const { getByTestId, emitted } = harness;
    // when
    const el = getByTestId('neonInput') as HTMLInputElement;
    el.value = 'xdd';
    await fireEvent.input(el);
    // then
    expect(emitted()['filter-changed'][0]).toEqual(['xdd']);
  });

  it('renders chip', async () => {
    // given
    const modelValue: NeonSearchOption[] = [
      {
        key: 'key1',
        label: 'Label 1',
        separatorBefore: true,
        icon: 'check',
        chipColor: NeonFunctionalColor.Brand,
      },
    ];
    const { container, rerender } = harness;
    await rerender({ modelValue, multiple: true, size: NeonSize.Large });
    // when / then
    expect(container.querySelector('.neon-chip')?.textContent).toEqual(modelValue[0].label);
    expect(container.querySelector('.neon-chip')?.getAttribute('id')).toEqual(modelValue[0].key);
    expect(container.querySelector('.neon-chip--l')).toBeDefined();
    expect(container.querySelector('.neon-chip--brand')).toBeDefined();
    expect(container.querySelector('.neon-chip--last-chip')?.textContent).toEqual(modelValue[0].label);
  });

  it('closing a chip emits input', async () => {
    // given
    const modelValue: NeonSearchOption[] = [
      {
        key: 'key1',
        label: 'Label 1',
        separatorBefore: true,
        icon: 'check',
      },
    ];
    const { container, emitted, rerender } = harness;
    await rerender({ modelValue, multiple: true });
    // when
    await fireEvent.click(container.querySelector('.neon-chip') as HTMLElement);
    // then
    expect(emitted()['update:modelValue'][0]).toEqual([[]]);
  });
});
