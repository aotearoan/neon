import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonFilterList from './NeonFilterList.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonLink from '../../navigation/link/NeonLink.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonLink', NeonLink);

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

  it('renders multiselect short list', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAll('.neon-filter-list__item').length).toEqual(items.length);
  });

  it('renders long list displayCount', () => {
    const displayCount = 3;
    const wrapper = mount(NeonFilterList, {
      propsData: { items: longItemList, value: [], displayCount },
      mocks: {
        $t: (value: string) => value,
      },
    });
    expect(wrapper.findAll('.neon-filter-list__item').length).toEqual(displayCount);
  });

  it('renders long list displayCount, showAll', (done) => {
    const displayCount = 3;
    const wrapper = mount(NeonFilterList, {
      propsData: { items: longItemList, value: [], displayCount },
      mocks: {
        $t: (value: string) => value,
      },
    });
    wrapper.find('.neon-filter-list__show-toggle').trigger('click');
    setTimeout(() => {
      expect(wrapper.findAll('.neon-filter-list__item').length).toEqual(longItemList.length);
      done();
    });
  });

  it('renders long list no displayCount', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items: longItemList, value: [] },
      mocks: {
        $t: (value: string) => value,
      },
    });
    expect(wrapper.findAll('.neon-filter-list__item').length).toEqual(longItemList.length);
  });

  it('renders single select long list', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items: longItemList, multiple: false, value: '' },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders long list, show all', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items: longItemList, value: [] },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders default color', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    expect(wrapper.find('.neon-filter-list--primary')).toBeDefined();
    expect(wrapper.find('.neon-filter-list__item-close.neon-icon--primary')).toBeDefined();
  });

  it('renders color', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [], color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-filter-list--brand')).toBeDefined();
    expect(wrapper.find('.neon-filter-list__item-close.neon-icon--brand')).toBeDefined();
  });

  it('renders default size', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    expect(wrapper.find('.neon-filter-list--m')).toBeDefined();
    expect(wrapper.find('.neon-list--m')).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [], size: NeonSize.Large },
    });
    expect(wrapper.find('.neon-filter-list--l')).toBeDefined();
    expect(wrapper.find('.neon-list--l')).toBeDefined();
  });

  it('renders multiple', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    expect(wrapper.find('.neon-filter-list--multiple')).toBeDefined();
    expect(wrapper.find('.neon-filter-list').attributes()['aria-multiselectable']).toEqual('true');
  });

  it('renders single', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, multiple: false, value: '' },
    });
    expect(wrapper.find('.neon-filter-list--multiple').element).toBeUndefined();
    expect(wrapper.find('.neon-filter-list').attributes()['aria-multiselectable']).toBeUndefined();
  });

  it('renders active descendant multiple', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[0].key] },
    });
    expect(wrapper.find('.neon-filter-list').attributes()['aria-activedescendant']).toEqual(items[0].key);
  });

  it('renders active descendant single', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, multiple: false, value: items[0].key },
    });
    expect(wrapper.find('.neon-filter-list').attributes()['aria-activedescendant']).toEqual(items[0].key);
  });

  it('renders selected multiple', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[0].key, items[1].key] },
    });
    const firstEl = wrapper.find('.neon-filter-list__item:first-child.neon-filter-list__item--selected');
    expect(firstEl.element).toBeDefined();
    expect(firstEl.attributes()['aria-selected']).toEqual('true');
    expect(wrapper.find('.neon-filter-list__item:nth-child(2).neon-filter-list__item--selected').element).toBeDefined();
  });

  it('renders selected single', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, multiple: false, value: items[0].key },
    });
    const el = wrapper.find('.neon-filter-list__item:first-child.neon-filter-list__item--selected');
    expect(el.element).toBeDefined();
    expect(el.attributes()['aria-selected']).toEqual('true');
  });

  it('renders disabled', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    const el = wrapper.find('.neon-filter-list__item:last-child.neon-filter-list__item--disabled');
    expect(el.element).toBeDefined();
    expect(el.attributes().tabindex).toEqual('-1');
  });

  it('renders tabindex', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [] },
    });
    const el = wrapper.find('.neon-filter-list__item:first-child');
    expect(el.element).toBeDefined();
    expect(el.attributes().tabindex).toEqual('0');
  });

  it('emits input on click multiple', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[1].key] },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on keydown enter', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[1].key] },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('keydown.enter');
    expect(wrapper.emitted().input[0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on keydown space', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[1].key] },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('keydown.space');
    expect(wrapper.emitted().input[0]).toEqual([[items[1].key, items[0].key]]);
  });

  it('emits input on click multiple deselect', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[0].key] },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual([[]]);
  });

  it('emits input on click single', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, multiple: false, value: items[1].key },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual([items[0].key]);
  });

  it('emits input on click single unselect', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, multiple: false, value: items[0].key },
    });
    wrapper.find('.neon-filter-list__item:first-child').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual(['']);
  });

  it('does not emit input on click when disabled', () => {
    const wrapper = mount(NeonFilterList, {
      propsData: { items, value: [items[1].key] },
    });
    wrapper.find('.neon-filter-list__item:last-child').trigger('click');
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
