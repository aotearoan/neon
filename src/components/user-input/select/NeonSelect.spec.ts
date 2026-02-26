import NeonSelect from './NeonSelect.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import type { RenderResult } from '@testing-library/vue';
import { fireEvent, render } from '@testing-library/vue';
import { nextTick } from 'vue';
import { NeonDropdownPlacement } from '@/common/enums/NeonDropdownPlacement';
import { NeonDropdownStyle } from '@/common/enums/NeonDropdownStyle';
import { flushPromises } from '@vue/test-utils';

describe('NeonSelect', () => {
  const placeholder = '';
  const modelValue = '';

  describe('grouped tests', () => {
    const groupedOptions = [
      {
        group: 'Africa',
        options: [
          {
            key: 'AGO',
            label: 'Angola',
          },
          {
            key: 'BFA',
            label: 'Burkina Faso',
          },
          {
            key: 'KEN',
            label: 'Kenya',
          },
          {
            key: 'MLI',
            label: 'Mali',
          },
        ],
      },
      {
        group: 'America',
        options: [
          {
            key: 'CAN',
            label: 'Canada',
          },
          {
            key: 'PAN',
            label: 'Panama',
          },
          {
            key: 'USA',
            label: 'United States',
          },
          {
            key: 'VEN',
            label: 'Venezuela',
          },
        ],
      },
      {
        group: 'Asia',
        options: [
          {
            key: 'CHN',
            label: 'China',
          },
          {
            key: 'PHL',
            label: 'Philippines',
          },
          {
            key: 'SNG',
            label: 'Singapore',
          },
          {
            key: 'THA',
            label: 'Thailand',
          },
        ],
      },
      {
        group: 'Europe',
        options: [
          {
            key: 'BEL',
            label: 'Belgium',
          },
          {
            key: 'FRA',
            label: 'France',
          },
          {
            key: 'DEU',
            label: 'Germany',
          },
          {
            key: 'NOR',
            label: 'Norway',
          },
        ],
      },
      {
        group: 'Oceania',
        options: [
          {
            key: 'AUS',
            label: 'Australia',
          },
          {
            key: 'FJI',
            label: 'Fiji',
          },
          {
            key: 'NZL',
            label: 'New Zealand',
          },
          {
            key: 'TKL',
            label: 'Tokelau',
          },
        ],
      },
    ];

    it('renders grouped', async () => {
      // given
      const { container } = render(NeonSelect, { props: { groupedOptions, modelValue, placeholder } });
      const el = container.querySelector('.neon-dropdown__button') as HTMLDivElement;
      await fireEvent.click(el);
      expect(container.querySelector('.neon-dropdown--open')).not.toBeNull();
      await nextTick();
      await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
      await nextTick();
      // when / then
      expect(container.querySelector('.neon-select--grouped')).not.toBeNull();
    });
  });

  describe('ungrouped tests', () => {
    const options = [
      {
        key: 'k1',
        label: 'Item 1',
        icon: 'contrast',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Item 2',
        icon: 'user',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Item 3',
        icon: 'plus',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Item 4',
        icon: 'download',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Item 5',
        icon: 'hammer',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Item 6',
        icon: 'images',
        disabled: true,
        separatorBefore: true,
      },
    ];

    let harness: RenderResult;

    beforeEach(() => {
      harness = render(NeonSelect, {
        props: { options, modelValue, placeholder, multiple: true },
      });
    });

    it('renders default color', () => {
      // given
      const { container } = harness;
      // when / then
      expect(container.querySelector('.neon-select--primary')).toBeDefined();
      expect(container.querySelector('.neon-dropdown--primary')).toBeDefined();
      expect(container.querySelectorAll('.neon-switch--primary').length).toEqual(options.length);
    });

    it('renders color', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ color: NeonFunctionalColor.Brand });
      // when / then
      expect(container.querySelector('.neon-select--brand')).toBeDefined();
      expect(container.querySelector('.neon-dropdown--brand')).toBeDefined();
      expect(container.querySelectorAll('.neon-switch--brand').length).toEqual(options.length);
    });

    it('renders default size', () => {
      // given
      const { container } = harness;
      // when / then
      expect(container.querySelector('.neon-dropdown--m')).toBeDefined();
      expect(container.querySelectorAll('.neon-select__option--m').length).toEqual(options.length);
      expect(container.querySelectorAll('.neon-switch--s').length).toEqual(options.length);
    });

    it('renders size', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ size: NeonSize.Large });
      // when / then
      expect(container.querySelector('.neon-dropdown--l')).toBeDefined();
      expect(container.querySelectorAll('.neon-select__option--l').length).toEqual(options.length);
      expect(container.querySelectorAll('.neon-switch--m').length).toEqual(options.length);
    });

    it('renders default button style', () => {
      // given
      const { container } = harness;
      // when / then
      expect(container.querySelector('.neon-button--input')).toBeDefined();
    });

    it('renders size', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ buttonStyle: NeonDropdownStyle.SolidButton });
      // when / then
      expect(container.querySelector('.neon-button--solid')).toBeDefined();
    });

    it('renders ungrouped', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ multiple: false });
      // when / then
      expect(container.querySelector('.neon-select--grouped')).toBeNull();
    });

    it('renders single select', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ multiple: false });
      // when / then
      expect(container.querySelector('.neon-select--multiple')).toBeNull();
      expect(container.querySelector('.neon-select')?.getAttribute('aria-multiselectable')).toEqual('false');
      expect(container.querySelectorAll('.neon-switch--checkbox').length).toEqual(0);
      expect((container.querySelector('.neon-select__native') as HTMLSelectElement)?.multiple).toEqual(false);
      expect(container.querySelectorAll('.neon-select__native option[multiple=true]').length).toEqual(0);
    });

    it('renders multiple select', () => {
      // given
      const { container } = harness;
      // when / then
      expect(container.querySelector('.neon-select--multiple')).toBeDefined();
      expect(container.querySelector('.neon-select')?.getAttribute('aria-multiselectable')).toEqual('true');
      expect(container.querySelectorAll('.neon-switch--checkbox').length).toEqual(options.length);
      expect((container.querySelector('.neon-select__native') as HTMLSelectElement)?.multiple).toEqual(true);
      expect(container.querySelectorAll('.neon-select__native option[multiple]').length).toEqual(options.length);
    });

    it('renders computedLabel single unselected', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ multiple: false });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('');
    });

    it('renders computedLabel single placeholder', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ placeholder: 'xdd' });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('xdd');
    });

    it('renders computedLabel single unselected', () => {
      // given
      const { container } = harness;
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('');
    });

    it('renders computedLabel single selected', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ modelValue: options[0].key, multiple: false });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toMatch(options[0].label);
    });

    it('renders computedLabel multiple placeholder', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ modelValue: [], multiple: true, placeholder: 'xdd' });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('xdd');
    });

    it('renders computedLabel multiple unselected', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ modelValue: [], placeholder, multiple: true });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('');
    });

    it('renders computedLabel multiple, single selection', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({ modelValue: [options[0].key], placeholder, multiple: true });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual(options[0].label);
    });

    it('renders computedLabel multiple, multiple selection', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({
        options,
        modelValue: [options[0].key, options[1].key],
        placeholder,
        multiple: true,
        multiselectPlaceholder: '2 items selected',
      });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('2 items selected');
    });

    it('renders computedLabel multiple, multiple selection', async () => {
      // given
      const { container, rerender } = harness;
      await rerender({
        options,
        modelValue: [options[0].key, options[1].key],
        placeholder,
        multiple: true,
      });
      // when / then
      expect(container.querySelector('.neon-dropdown__button')?.textContent).toEqual('2 items selected');
    });

    it('open highlights first option', async () => {
      // given
      const { container } = harness;
      // when
      const el = container.querySelector('.neon-select') as HTMLDivElement;
      await fireEvent.click(el);
      await nextTick();
      await flushPromises();
      // then
      const firstOption = container.querySelectorAll('.neon-select__option')[0];
      expect(firstOption.classList.contains('neon-select__option--highlighted')).toBeDefined();
    });

    it('arrow key highlights different option', async () => {
      // given
      const { container } = harness;

      // when
      const el = container.querySelector('.neon-dropdown__button') as HTMLDivElement;
      await fireEvent.click(el);
      expect(container.querySelector('.neon-dropdown--open')).not.toBeNull();
      await nextTick();
      await flushPromises();
      await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
      await nextTick();
      // then
      expect(
        container.querySelectorAll('.neon-select__option')[1].classList.contains('neon-select__option--highlighted'),
      ).toBeDefined();
    });

    it('arrow key highlights different option, placement TopLeft', async () => {
      // given
      const { container } = render(NeonSelect, {
        props: { options, modelValue, placeholder, multiple: true, placement: NeonDropdownPlacement.TopLeft },
      });

      // when
      const el = container.querySelector('.neon-dropdown__button') as HTMLDivElement;
      await fireEvent.click(el);
      expect(container.querySelector('.neon-dropdown--open')).not.toBeNull();
      await nextTick();
      await fireEvent.keyDown(el, { key: 'ArrowDown', code: 'ArrowDown' });
      await nextTick();
      // then
      expect(
        container.querySelectorAll('.neon-select__option')[1].classList.contains('neon-select__option--highlighted'),
      ).toBeDefined();
    });
  });
});
