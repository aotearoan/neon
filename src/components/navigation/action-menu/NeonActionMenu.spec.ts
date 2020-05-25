import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonActionMenu from './NeonActionMenu.vue';
import NeonLink from '../link/NeonLink.vue';

Vue.component('NeonLink', NeonLink);

describe('NeonActionMenu', () => {
  it('renders selected class', () => {
    // given
    const model = [
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
    ];
    const value = model[1].key;
    const wrapper = mount(NeonActionMenu, {
      propsData: { model, value },
    });
    // when / then
    expect(wrapper.find('.neon-action-menu__link--selected').text()).toEqual(model[1].label);
  });

  it('renders disabled classes', () => {
    // given
    const model = [
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
        disabled: true,
      },
    ];
    const value = model[0].key;
    const wrapper = mount(NeonActionMenu, {
      propsData: { model, value },
    });
    // when / then
    expect(wrapper.find('.neon-action-menu__link--disabled.neon--disabled').text()).toEqual(model[1].label);
  });

  it('emits click event', () => {
    // given
    const model = [
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
    ];
    const value = model[1].key;
    const wrapper = mount(NeonActionMenu, {
      propsData: { model, value },
    });
    // when
    const item = wrapper.findAll('.neon-action-menu__link').at(0);
    item.trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([model[0].key]);
  });

  it('does not emit click event on disabled item', () => {
    // given
    const model = [
      {
        label: 'Option 1',
        key: 'option-1',
        disabled: true,
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
    ];
    const value = model[1].key;
    const wrapper = mount(NeonActionMenu, {
      propsData: { model, value },
    });
    // when
    const item = wrapper.find('.neon-action-menu__link--disabled');
    item.trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('does not emit click event on selected item', () => {
    // given
    const model = [
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
    ];
    const value = model[1].key;
    const wrapper = mount(NeonActionMenu, {
      propsData: { model, value },
    });
    // when
    const item = wrapper.findAll('.neon-action-menu__link').at(1);
    item.trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
