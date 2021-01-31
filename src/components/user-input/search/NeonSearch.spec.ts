import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonSearch from './NeonSearch.vue';
import NeonSearchClass from './NeonSearch';
import NeonChip from '../chip/NeonChip.vue';
import NeonDropdown from '../../presentation/dropdown/NeonDropdown.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonInput from '../input/NeonInput.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSearchOption } from '../../../common/models/NeonSearchOption';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';

Vue.component('NeonChip', NeonChip);
Vue.component('NeonDropdown', NeonDropdown);
Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonInput', NeonInput);

describe('NeonSearch', () => {
  const value: NeonSearchOption[] = [];
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

  it('renders default color', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-search__container--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-search--primary').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--primary').element).toBeDefined();
    expect(wrapper.find('.neon-search__container--primary').element).toBeDefined();
  });

  it('renders single', () => {
    // given
    const value = 'xdd';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search--multiple').element).toBeUndefined();
    expect(wrapper.find('.neon-search').attributes()['aria-multiselectable']).toBeUndefined();
    expect(wrapper.find('.neon-search').attributes()['aria-activedescendant']).toEqual(value);
  });

  it('renders multiple', () => {
    // given
    const value = [{ key: 'xdd' }];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when / then
    expect(wrapper.find('.neon-search--multiple').element).toBeDefined();
    expect(wrapper.find('.neon-search').attributes()['aria-multiselectable']).toEqual('true');
    expect(wrapper.find('.neon-search').attributes()['aria-activedescendant']).toEqual(value[0].key);
  });

  it('renders non empty', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search--empty').element).toBeUndefined();
  });

  it('renders empty', () => {
    // given
    const value = '';
    const options: NeonSearchOption[] = [];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search--empty').element).toBeDefined();
  });

  it('renders enabled', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-search__container--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-search__input.neon-input--disabled').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-search--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-search__container--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-search__input.neon-input--disabled').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--m').element).toBeDefined();
    expect(wrapper.find('.neon-search__container--m').element).toBeDefined();
    expect(wrapper.find('.neon-search__input.neon-input--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--l').element).toBeDefined();
    expect(wrapper.find('.neon-search__container--l').element).toBeDefined();
    expect(wrapper.find('.neon-search__input.neon-input--l').element).toBeDefined();
  });

  it('renders options', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when / then
    expect(wrapper.find('.neon-search__option--separator-before').element).toBeDefined();
    expect(wrapper.find('.neon-search__option--m').element).toBeDefined();
    expect(wrapper.find('.neon-search__option-icon').element).toBeDefined();
    expect(wrapper.find('.neon-search__option-label').text()).toEqual(options[0].label);
    expect(wrapper.find('.neon-search__option').attributes().id).toEqual(options[0].key);
  });

  it('renders empty options', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options: [] },
    });
    const search = wrapper.vm as NeonSearchClass;
    // when
    search.showOptions();
    // then
    expect(wrapper.find('.neon-search__option').element).toBeUndefined();
  });

  it('click option emits input single', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when
    wrapper.find('.neon-search__option').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('Enter keydown on option emits input single', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Enter' }));
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('Space keydown on option emits input single', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().input[0]).toEqual([options[0].key]);
  });

  it('Space keydown on option closed', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Space' }));
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('click option emits input multiple, in values', () => {
    // given
    const value: NeonSearchOption[] = [
      {
        key: 'key2',
        label: 'Label 2',
        separatorBefore: true,
        icon: 'check',
      },
    ];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.find('.neon-search__option:last-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });

  it('click option emits input multiple, not in values', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.find('.neon-search__option:last-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[options[1]]]);
  });

  it('change highlighted on mouse over', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    wrapper.find('.neon-search__option:last-child').trigger('mouseover');
    // then
    expect(search.highlightedIndex).toEqual(1);
  });

  it('emits filter-changed', () => {
    // given
    const value = '';
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options },
    });
    // when
    wrapper.find('.neon-search__input input').setValue('xdd');
    // then
    expect(wrapper.emitted()['filter-changed'][0]).toEqual(['xdd']);
  });

  it('renders chip', () => {
    // given
    const value: NeonSearchOption[] = [
      {
        key: 'key1',
        label: 'Label 1',
        separatorBefore: true,
        icon: 'check',
        chipColor: NeonFunctionalColor.Brand,
      },
    ];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-chip').text()).toEqual(value[0].label);
    expect(wrapper.find('.neon-chip').attributes().id).toEqual(value[0].key);
    expect(wrapper.find('.neon-chip--l').element).toBeDefined();
    expect(wrapper.find('.neon-chip--brand').element).toBeDefined();
    expect(wrapper.find('.neon-chip--last-chip').text()).toEqual(value[0].label);
  });

  it('closing a chip emits input', () => {
    // given
    const value: NeonSearchOption[] = [
      {
        key: 'key1',
        label: 'Label 1',
        separatorBefore: true,
        icon: 'check',
      },
    ];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.find('.neon-chip').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });

  it('removes keyboard handler on destroy', () => {
    // given
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    const value: NeonSearchOption[] = [
      {
        key: 'key1',
        label: 'Label 1',
        separatorBefore: true,
        icon: 'check',
      },
    ];
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.destroy();
    // then
    expect(document.addEventListener).toHaveBeenCalled();
    expect(document.removeEventListener).toHaveBeenCalled();
  });

  it('focus opens dropdown list of options', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.find('.neon-search__input input').trigger('focus');
    // then
    expect((wrapper.vm as NeonSearchClass).open).toEqual(true);
  });

  it('focus opens dropdown no options', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    // when
    wrapper.find('.neon-search__input input').trigger('focus');
    // then
    expect((wrapper.vm as NeonSearchClass).open).toEqual(true);
  });

  it('navigates down in option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates down in reverse option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates down in reverse option list index 1', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates down last option in list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowDown' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up in option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[0].key);
  });

  it('navigates up in reverse option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 1;
    search.highlightedKey = options[1].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up in reverse option list index 0', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true, placement: NeonDropdownPlacement.TopLeft },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(1);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[1].key);
  });

  it('navigates up first option in list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    search.highlightedIndex = 0;
    search.highlightedKey = options[0].key;
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'ArrowUp' }));
    // then
    expect((wrapper.vm as NeonSearchClass).highlightedIndex).toEqual(0);
    expect((wrapper.vm as NeonSearchClass).highlightedKey).toEqual(options[0].key);
  });

  it('Tab closes option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Tab' }));
    // then
    expect(search.open).toEqual(false);
  });

  it('ctrl+tab does not close option list', () => {
    // given
    const wrapper = mount(NeonSearch, {
      propsData: { value, placeholder, options, multiple: true },
    });
    const search = wrapper.vm as NeonSearchClass;
    search.showOptions();
    // when
    search.keyboardHandler(new KeyboardEvent('keydown', { code: 'Tab', ctrlKey: true }));
    // then
    expect(search.open).toEqual(true);
  });
});
