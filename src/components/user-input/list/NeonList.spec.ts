import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonList from './NeonList.vue';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import { NeonListItem } from '../../../common/models/NeonListItem';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

Vue.component('NeonIcon', NeonIcon);

describe('NeonList', () => {
  const value: NeonListItem[] = [
    {
      key: 'key1',
      label: 'Label 1',
    },
    {
      key: 'key2',
      label: 'Label 2',
    },
  ];

  it('renders list item label', () => {
    const wrapper = mount(NeonList, {
      propsData: { value: [value[0]] },
    });
    expect(wrapper.find('.neon-list__item span').text()).toEqual(value[0].label);
  });

  it('renders close button when not disabled', () => {
    const wrapper = mount(NeonList, {
      propsData: { value: [value[0]] },
    });
    expect(wrapper.find('.neon-list__item .neon-icon').element).toBeDefined();
  });

  it('renders disabled', () => {
    const wrapper = mount(NeonList, {
      propsData: { value: [value[0]], disabled: true },
    });
    expect(wrapper.find('.neon-list--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-list__item .neon-icon').element).toBeUndefined();
  });

  it('renders default size', () => {
    const wrapper = mount(NeonList, {
      propsData: { value },
    });
    expect(wrapper.find('.neon-list--m').element).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonList, {
      propsData: { value, size: NeonSize.Large },
    });
    expect(wrapper.find('.neon-list--l').element).toBeDefined();
  });

  it('renders default color', () => {
    const wrapper = mount(NeonList, {
      propsData: { value },
    });
    expect(wrapper.find('.neon-list--low-contrast').element).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonList, {
      propsData: { value, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-list--primary').element).toBeDefined();
  });

  it('emits event on remove by click', () => {
    // given
    const wrapper = mount(NeonList, {
      propsData: { value: [...value] },
    });
    // when
    wrapper.find('.neon-list__item:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[1]]]);
    expect(wrapper.emitted().close[0]).toEqual([value[0].key]);
  });

  it('emits event on remove by keydown enter', () => {
    // given
    const wrapper = mount(NeonList, {
      propsData: { value: [...value] },
    });
    // when
    wrapper.find('.neon-list__item:first-child').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[1]]]);
    expect(wrapper.emitted().close[0]).toEqual([value[0].key]);
  });

  it('emits event on remove by keydown space', () => {
    // given
    const wrapper = mount(NeonList, {
      propsData: { value: [...value] },
    });
    // when
    wrapper.find('.neon-list__item:first-child').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input[0]).toEqual([[value[1]]]);
    expect(wrapper.emitted().close[0]).toEqual([value[0].key]);
  });

  it('does not emits event when disabled', () => {
    // given
    const wrapper = mount(NeonList, {
      propsData: { value, disabled: true },
    });
    // when
    wrapper.find('.neon-list__item:first-child').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
    expect(wrapper.emitted().close).toBeUndefined();
  });
});
