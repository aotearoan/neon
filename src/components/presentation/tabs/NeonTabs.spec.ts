import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonTabs from './NeonTabs.vue';
import NeonIcon from '../icon/NeonIcon.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

Vue.component('NeonIcon', NeonIcon);

describe('NeonTabs', () => {
  const tabs = [
    {
      key: 'tab1',
      label: 'Tab 1',
    },
    {
      key: 'tab2',
      label: 'Tab 2',
      icon: 'heart',
    },
    {
      key: 'tab3',
      label: 'Tab 3',
      icon: 'check',
    },
  ];
  const value = tabs[1].key;

  it('renders default slot', () => {
    const contents = 'lol';
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
      slots: {
        default: `<p>${contents}</p>`,
      },
    });
    expect(wrapper.find('.neon-tabs p').text()).toEqual(contents);
  });

  it('renders default size', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs--m').element).toBeDefined();
  });

  it('renders size', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, size: NeonSize.Large },
    });
    expect(wrapper.find('.neon-tabs--l').element).toBeDefined();
  });

  it('renders default color', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs--primary').element).toBeDefined();
  });

  it('renders color', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-tabs--brand').element).toBeDefined();
  });

  it('renders default underline', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-items--underlined').element).toBeDefined();
  });

  it('renders underline false', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, underline: false },
    });
    expect(wrapper.find('.neon-tabs__menu-items--underlined').element).toBeUndefined();
  });

  it('selects the correct tab', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-item:nth-child(2).neon-tabs__menu-item--selected').element).toBeDefined();
    expect(wrapper.find('.neon-tabs__menu-item:nth-child(2)').attributes()['aria-selected']).toEqual('true');
  });

  it('renders aria-controls', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-item--selected').attributes()['aria-controls']).toEqual(value);
  });

  it('renders id', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-item--selected').attributes().id).toEqual(`${value}Button`);
  });

  it('renders button container id', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-item--selected .neon-tabs__menu-item-container').attributes().id).toEqual(
      `${value}ButtonContainer`,
    );
  });

  it('renders tabindex selected', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(
      wrapper.find('.neon-tabs__menu-item--selected .neon-tabs__menu-item-container').attributes().tabindex,
    ).toEqual('0');
  });

  it('renders tabindex unselected', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(
      wrapper.find('.neon-tabs__menu-item:first-child .neon-tabs__menu-item-container').attributes().tabindex,
    ).toEqual('-1');
  });

  it('renders tab label', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    expect(wrapper.find('.neon-tabs__menu-item:first-child .neon-tabs__menu-label').text()).toEqual(tabs[0].label);
  });

  it('renders tab icon', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-tabs__menu-item:last-child .neon-tabs__menu-icon').element).toBeDefined();
  });

  it('renders tab icon selected', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, color: NeonFunctionalColor.Brand },
    });
    expect(wrapper.find('.neon-tabs__menu-item--selected .neon-icon--brand').element).toBeDefined();
  });

  it('click tab emits event', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, color: NeonFunctionalColor.Brand },
    });
    wrapper.find('.neon-tabs__menu-item:first-child').trigger('click');
    expect(wrapper.emitted().input[0]).toEqual([tabs[0].key]);
  });

  it('click selected tab emits no event', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value, color: NeonFunctionalColor.Brand },
    });
    wrapper.find('.neon-tabs__menu-item--selected').trigger('click');
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('key left goes to previous tab', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    wrapper.find('.neon-tabs__menu-item--selected .neon-tabs__menu-item-container').trigger('keydown.left');
    expect(wrapper.emitted().input[0]).toEqual([tabs[0].key]);
  });

  it('key left wraps to last tab', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    wrapper.find('.neon-tabs__menu-item:first-child .neon-tabs__menu-item-container').trigger('keydown.left');
    expect(wrapper.emitted().input[0]).toEqual([tabs[tabs.length - 1].key]);
  });

  it('key right goes to next tab', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    wrapper.find('.neon-tabs__menu-item--selected .neon-tabs__menu-item-container').trigger('keydown.right');
    expect(wrapper.emitted().input[0]).toEqual([tabs[2].key]);
  });

  it('key right wraps to first tab', () => {
    const wrapper = mount(NeonTabs, {
      propsData: { tabs, value },
    });
    const getElFn = document.getElementById;
    document.getElementById = (id: string) =>
      wrapper.find('.neon-tabs__menu-item:first-child .neon-tabs__menu-item-container').element;
    wrapper.find('.neon-tabs__menu-item:last-child .neon-tabs__menu-item-container').trigger('keydown.right');
    expect(wrapper.emitted().input[0]).toEqual([tabs[0].key]);
    document.getElementById = getElFn;
  });
});
