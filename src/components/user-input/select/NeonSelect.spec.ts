import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonSelect from './NeonSelect.vue';
import NeonSelectClass from './NeonSelect';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonSwitch from '../switch/NeonSwitch.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import NeonSearch from '../search/NeonSearch.vue';
import NeonSearchClass from '../search/NeonSearch';
import { NeonScrollUtils } from '../../../common/utils/NeonScrollUtils';

Vue.component('NeonDropdown', NeonDropdown);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonSwitch', NeonSwitch);

describe('NeonSelect', () => {
  const placeholder = '';
  const value = '';
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

  it('renders default color', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-select--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--low-contrast').element).toBeDefined();
    expect(wrapper.findAll('.neon-switch--low-contrast').length).toEqual(options.length);
  });

  it('renders color', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder, multiple: true, color: NeonFunctionalColor.Brand },
    });
    // when / then
    expect(wrapper.find('.neon-select--brand').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--brand').element).toBeDefined();
    expect(wrapper.findAll('.neon-switch--brand').length).toEqual(options.length);
  });

  it('renders default size', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--m').element).toBeDefined();
    expect(wrapper.findAll('.neon-select__option--m').length).toEqual(options.length);
    expect(wrapper.findAll('.neon-switch--s').length).toEqual(options.length);
  });

  it('renders size', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder, multiple: true, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--l').element).toBeDefined();
    expect(wrapper.findAll('.neon-select__option--l').length).toEqual(options.length);
    expect(wrapper.findAll('.neon-switch--m').length).toEqual(options.length);
  });

  it('renders ungrouped', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-select--grouped').element).toBeUndefined();
  });

  it('renders grouped', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { groupedOptions, value, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-select--grouped').element).toBeDefined();
  });

  it('renders single select', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-select--multiple').element).toBeUndefined();
    expect(wrapper.find('.neon-select').attributes()['aria-multiselectable']).toBeUndefined();
    expect(wrapper.findAll('.neon-switch--checkbox').length).toEqual(0);
    expect(wrapper.find('.neon-select__native').attributes().multiple).toBeUndefined();
    expect(wrapper.findAll('.neon-select__native option[multiple]').length).toEqual(0);
  });

  it('renders multiple select', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-select--multiple').element).toBeDefined();
    expect(wrapper.find('.neon-select').attributes()['aria-multiselectable']).toEqual('true');
    expect(wrapper.findAll('.neon-switch--checkbox').length).toEqual(options.length);
    expect(wrapper.find('.neon-select__native').attributes().multiple).toEqual('multiple');
    expect(wrapper.findAll('.neon-select__native option[multiple]').length).toEqual(options.length);
  });

  it('renders computedLabel single unselected', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('');
  });

  it('renders computedLabel single placeholder', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder: 'xdd' },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('xdd');
  });

  it('renders computedLabel single unselected', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('');
  });

  it('renders computedLabel single selected', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value: options[0].key, placeholder },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual(options[0].label);
  });

  it('renders computedLabel multiple placeholder', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value: [], multiple: true, placeholder: 'xdd' },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('xdd');
  });

  it('renders computedLabel multiple unselected', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value: [], placeholder, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('');
  });

  it('renders computedLabel multiple, single selection', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { options, value: [options[0].key], placeholder, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual(options[0].label);
  });

  it('renders computedLabel multiple, multiple selection', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: {
        options,
        value: [options[0].key, options[1].key],
        placeholder,
        multiple: true,
        multiselectPlaceholder: '2 items selected',
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('2 items selected');
  });

  it('renders computedLabel multiple, multiple selection', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: {
        options,
        value: [options[0].key, options[1].key],
        placeholder,
        multiple: true,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__button').text()).toEqual('2 items selected');
  });

  it('removes keyboard handler on destroy', () => {
    // given
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    const wrapper = mount(NeonSelect, {
      propsData: { options, value: [], placeholder },
    });
    // when
    wrapper.destroy();
    // then
    expect(document.addEventListener).toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalled();
  });

  it('opens dropdown list of options when closed', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const select = wrapper.vm as NeonSelectClass;
    // when
    select.dropdown.toggleOpen();
    // then
    expect(select.open).toEqual(true);
  });

  it('leaves open dropdown open', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const select = wrapper.vm as NeonSelectClass;
    select.open = true;
    // when
    select.toggleOpen(false);
    // then
    expect(select.open).toEqual(true);
  });

  it('renders no options', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder },
    });
    const select = wrapper.vm as NeonSelectClass;
    // when / then
    expect(select.flattenedOptions).toBeUndefined();
  });

  it('renders options', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const select = wrapper.vm as NeonSelectClass;
    // when / then
    expect(select.flattenedOptions.length).toEqual(options.length);
  });

  it('renders groupedOptions', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, groupedOptions },
    });
    const select = wrapper.vm as NeonSelectClass;
    // when / then
    expect(select.flattenedOptions.length).toEqual(20);
  });

  it('navigates down in option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[1].key);
  });

  it('does not navigate when closed', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.highlightedIndex = 0;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
  });

  it('navigates down in reverse option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates down in reverse option list index 1', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates down last option in list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options: [options[0], options[1]] },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up in option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates up in reverse option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options: [options[0], options[1]], placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up in "reverse" grouped option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, groupedOptions, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 1;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
  });

  it('navigates up in reverse option list index 0', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up first option in list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSelectClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSelectClass).highlightedKey).toEqual(options[0].key);
  });

  it('Tab closes option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Tab' }));
    // then
    expect(search.open).toEqual(false);
  });

  it('ctrl+tab does not close option list', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Tab', ctrlKey: true }));
    // then
    expect(search.open).toEqual(true);
  });

  it('clicking option emits input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    wrapper.find('.neon-select__option:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('clicking native option emits input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    // when
    const select = wrapper.vm as NeonSelectClass;
    // @ts-ignore
    select.nativeSelectChange({ target: { options: [{ selected: true, value: options[0].key }] } });
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('clicking native option emits input event multiple', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    const select = wrapper.vm as NeonSelectClass;
    select.nativeSelectChange(
      // @ts-ignore
      {
        target: {
          // @ts-ignore
          options: [
            { selected: true, value: options[0].key },
            { selected: false, value: options[1].key },
            { selected: true, value: options[2].key },
          ],
        },
      },
    );
    // then
    expect(wrapper.emitted().input[0]).toEqual([[options[0].key, options[2].key]]);
  });

  it('enter keydown on option emits input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Enter' }));
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('space keydown on option emits input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('space keydown on disabled option emits no input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = options.length - 1;
    search.highlightedKey = options[options.length - 1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('changes highlighted option on mouseover', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    wrapper.find('.neon-select__option:last-child').trigger('mouseover');
    // then
    expect(search.highlightedIndex).toEqual(options.length - 1);
    expect(search.highlightedKey).toEqual(options[options.length - 1].key);
  });

  it('clicking option emits input event, multiple/add', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value: [options[1].key], placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    wrapper.find('.neon-select__option:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[options[1].key, options[0].key]]);
  });

  it('clicking option emits input event, multiple/remove', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value: [options[0].key], placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    wrapper.find('.neon-select__option:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });

  it('clicking disabled option does not emit input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    wrapper.find('.neon-select__option:last-child').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('clicking selected option does not emit input event', () => {
    // given
    const wrapper = mount(NeonSelect, {
      propsData: { value: options[0].key, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    search.open = true;
    // when
    wrapper.find('.neon-select__option:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('scroll on navigate scrolls into view', () => {
    // given
    const scrollIntoView = NeonScrollUtils.scrollIntoView;
    NeonScrollUtils.scrollIntoView = jest.fn();
    const wrapper = mount(NeonSelect, {
      propsData: { value: options[0].key, placeholder, options },
    });
    const search = wrapper.vm as NeonSelectClass;
    // when
    search.scrollOnNavigate();
    // then
    expect(NeonScrollUtils.scrollIntoView).toHaveBeenCalled();
    NeonScrollUtils.scrollIntoView = scrollIntoView;
  });
});
