import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import NeonSearch from './NeonSearch.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonSearchOption } from '@/common/models/NeonSearchOption';
import { NeonSize } from '@/common/enums/NeonSize';
import { nextTick } from 'vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonDropdownPlacementUtils } from '@/common/utils/NeonDropdownPlacementUtils';

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
    harness = render(NeonSearch, { props: { modelValue, placeholder, options, debounce: 0 } });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders default color', () => {
    // given
    const { container } = harness;
    // when / then
    expect(container.querySelector('.neon-search--primary')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--primary')).toBeDefined();
    expect(container.querySelector('.neon-search__container--primary')).toBeDefined();
  });

  it('renders color', async () => {
    // given
    const { container, rerender } = harness;
    await rerender({ color: NeonFunctionalColor.Brand });
    // when / then
    expect(container.querySelector('.neon-search--brand')).toBeDefined();
    expect(container.querySelector('.neon-dropdown--brand')).toBeDefined();
    expect(container.querySelector('.neon-search__container--brand')).toBeDefined();
  });

  it('renders default autocomplete mode', () => {
    // given
    const { container } = harness;
    // when / then
    expect((container.querySelector('.neon-input__text') as HTMLInputElement).autocomplete).toEqual('on');
  });

  it('renders autocomplete mode', async () => {
    // given
    const autocomplete = 'email';
    const { container, rerender } = harness;
    await rerender({ autocomplete });
    // when / then
    expect((container.querySelector('.neon-input__text') as HTMLInputElement).autocomplete).toEqual(autocomplete);
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
    const { container, emitted } = harness;
    // when
    const el = container.querySelector('.neon-search__input .neon-input__text') as HTMLInputElement;
    el.value = 'xdd';
    await fireEvent.input(el);
    // then
    expect(emitted()['filter-changed'][0]).toEqual(['xdd']);
  });

  it('focus highlights first option', async () => {
    // given
    const { container } = harness;
    // when
    const el = container.querySelector('.neon-search__input .neon-input__text') as HTMLInputElement;
    await fireEvent.focus(el);
    await nextTick();
    // then
    expect(
      container.querySelectorAll('.neon-search__option')[0].classList.contains('neon-search__option--highlighted'),
    ).toBeDefined();
  });

  it('triggers isReverse placement TopLeft', async () => {
    // given
    jest.spyOn(NeonDropdownPlacementUtils, 'calculatePlacement').mockReturnValue(NeonDropdownPlacement.TopLeft);
    const { container } = render(NeonSearch, {
      props: {
        modelValue,
        placeholder,
        options,
        debounce: 0,
        placement: NeonDropdownPlacement.TopLeft,
      },
    });
    // when
    const el = container.querySelector('.neon-search__input .neon-input__text') as HTMLInputElement;
    await fireEvent.focus(el);
    await nextTick();
    await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
    await nextTick();
    // then
    const contentEl = container.querySelector('.neon-dropdown__content') as HTMLElement;
    expect(contentEl.classList.contains('neon-dropdown__content--top-left')).toEqual(true);
  });

  it('triggers isReverse placement TopRight', async () => {
    // given
    jest.spyOn(NeonDropdownPlacementUtils, 'calculatePlacement').mockReturnValue(NeonDropdownPlacement.TopRight);
    const { container } = render(NeonSearch, {
      props: {
        modelValue,
        placeholder,
        options,
        debounce: 0,
        placement: NeonDropdownPlacement.TopRight,
      },
    });
    // when
    const el = container.querySelector('.neon-search__input .neon-input__text') as HTMLInputElement;
    await fireEvent.focus(el);
    await nextTick();
    await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
    await nextTick();
    // then
    const contentEl = container.querySelector('.neon-dropdown__content') as HTMLElement;
    expect(contentEl.classList.contains('neon-dropdown__content--top-right')).toEqual(true);
  });

  it('arrow key highlights different option', async () => {
    // given
    const { container } = harness;
    // when
    const el = container.querySelector('.neon-search__input .neon-input__text') as HTMLInputElement;
    await fireEvent.focus(el);
    await nextTick();
    await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
    await nextTick();
    // then
    expect(
      container.querySelectorAll('.neon-search__option')[1].classList.contains('neon-search__option--highlighted'),
    ).toBeDefined();
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
    expect(container.querySelector('.neon-chip')?.textContent).toMatch(modelValue[0].label);
    expect(container.querySelector('.neon-chip')?.getAttribute('id')).toEqual(modelValue[0].key);
    expect(container.querySelector('.neon-chip--l')).toBeDefined();
    expect(container.querySelector('.neon-chip--brand')).toBeDefined();
    expect(container.querySelector('.neon-chip--last-chip')?.textContent).toMatch(modelValue[0].label);
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
