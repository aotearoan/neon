import Vue from 'vue';
import { mount, shallowMount } from '@vue/test-utils';
import NeonDropdown from './NeonDropdown.vue';
import NeonDropdownClass from './NeonDropdown';
import NeonBadge from '../badge/NeonBadge.vue';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonExpansionIndicator from '../expansion-indicator/NeonExpansionIndicator.vue';
import { NeonDropdownStyle } from '../../../common/enums/NeonDropdownStyle';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonDropdownPlacement } from '../../../common/enums/NeonDropdownPlacement';
import NeonTab from '../tabs/tab/NeonTab.vue';
import { NeonClosableUtils } from '../../../common/utils/NeonClosableUtils';

Vue.component('NeonBadge', NeonBadge);
Vue.component('NeonButton', NeonButton);
Vue.component('NeonExpansionIndicator', NeonExpansionIndicator);

describe('NeonDropdown', () => {
  beforeAll(() => {
    // @ts-ignore
    window.matchMedia = (query: string) => ({ matches: false });
  });

  it('renders default slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false },
      slots: {
        default: `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__content p').text()).toEqual(slotValue);
  });

  it('renders dropdown-button slot contents', () => {
    // given
    const slotValue = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false },
      slots: {
        'dropdown-button': `<p>${slotValue}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown > p').text()).toEqual(slotValue);
  });

  it('renders default indicator', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--with-indicator').element).toBeDefined();
    expect(wrapper.find('.neon-button__indicator').element).toBeDefined();
  });

  it('renders without indicator', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, indicator: false },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--with-indicator').element).toBeUndefined();
    expect(wrapper.find('.neon-button__indicator').element).toBeUndefined();
    expect(wrapper.find('.neon-button__indicator').element).toBeUndefined();
  });

  it('renders closed by default', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--open').element).toBeUndefined();
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeUndefined();
    expect(wrapper.find('.neon-dropdown__button').attributes()['aria-expanded']).toBeUndefined();
    expect(wrapper.find('.neon-dropdown__content').isVisible()).toEqual(false);
  });

  it('renders open', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--open').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown__button').attributes()['aria-expanded']).toEqual('true');
    expect(wrapper.find('.neon-dropdown__content').isVisible()).toEqual(true);
  });

  it('renders default openOnHover', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--open-on-hover').element).toBeUndefined();
    expect(wrapper.find('.neon-dropdown__content').isVisible()).toEqual(false);
  });

  it('renders openOnHover', () => {
    // given
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, openOnHover: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--open-on-hover').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown__content').isVisible()).toEqual(true);
  });

  it('renders icon only, with label', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--icon-only').element).toBeUndefined();
  });

  it('renders icon only, with label and icon', () => {
    // given
    const label = 'xd';
    const icon = 'check';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, icon },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--icon-only').element).toBeUndefined();
  });

  it('renders not disabled, button', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-dropdown__button.neon-button--disabled').element).toBeUndefined();
  });

  it('renders disabled, button', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-dropdown__button.neon-button--disabled').element).toBeDefined();
  });

  it('renders not disabled, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, indicator: true, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__badge').attributes().tabindex).toEqual('0');
    expect(wrapper.find('.neon-dropdown__badge.neon-badge--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-expansion-indicator--disabled').element).toBeUndefined();
  });

  it('renders default size, button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--m').element).toBeDefined();
    expect(wrapper.find('.neon-button--m').element).toBeDefined();
  });

  it('renders size, button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--l').element).toBeDefined();
    expect(wrapper.find('.neon-button--l').element).toBeDefined();
  });

  it('renders default size, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-badge--m').element).toBeDefined();
  });

  it('renders size, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-badge--l').element).toBeDefined();
  });

  it('renders default color, button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-button--low-contrast').element).toBeDefined();
  });

  it('renders color, button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown--primary').element).toBeDefined();
    expect(wrapper.find('.neon-button--primary').element).toBeDefined();
  });

  it('renders default color, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-badge--low-contrast').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-indicator--low-contrast').element).toBeDefined();
  });

  it('renders color, badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-badge--primary').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-indicator--primary').element).toBeDefined();
  });

  it('renders button style text', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.Text;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-button--text').element).toBeDefined();
  });

  it('renders button style solid', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.SolidButton;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-button--solid').element).toBeDefined();
  });

  it('renders square badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.SquareBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-badge--circular').element).toBeUndefined();
  });

  it('renders circular badge', () => {
    // given
    const dropdownStyle = NeonDropdownStyle.CircularBadge;
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle },
    });
    // when / then
    expect(wrapper.find('.neon-badge--circular').element).toBeDefined();
  });

  it('renders alternate color, button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, alternateColor: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-button--alternate-color-primary').element).toBeDefined();
  });

  it('renders alternate color, badge', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: {
        value: false,
        label,
        dropdownStyle: NeonDropdownStyle.SquareBadge,
        alternateColor: NeonFunctionalColor.Primary,
      },
    });
    // when / then
    expect(wrapper.find('.neon-badge--alternate-color-primary').element).toBeDefined();
  });

  it('renders default placement', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__content--bottom-left').element).toBeDefined();
  });

  it('renders placement', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, placement: NeonDropdownPlacement.LeftTop },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__content--left-top').element).toBeDefined();
  });

  it('renders placement with container', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, placementContainer: document.body },
    });
    // when / then
    expect(wrapper.find('.neon-dropdown__content--bottom-left').element).toBeDefined();
  });

  it('emits focus event', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-dropdown__button').trigger('focus');
    // then
    expect(wrapper.emitted().focus[0]).toEqual([]);
  });

  it('emits blur event', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-dropdown__button').trigger('blur');
    // then
    expect(wrapper.emitted().blur[0]).toEqual([]);
  });

  it('clicking button opens dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-dropdown__button').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('clicking button closes dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: true, label },
    });
    // when
    wrapper.find('.neon-dropdown__button').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('clicking disabled button does nothing', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, disabled: true },
    });
    // when
    wrapper.find('.neon-dropdown__button').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('clicking badge opens dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    wrapper.find('.neon-dropdown__badge').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('keydown space on badge opens dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    wrapper.find('.neon-dropdown__badge').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('keydown enter on badge opens dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    wrapper.find('.neon-dropdown__badge').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('clicking badge closes dropdown', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: true, label, dropdownStyle: NeonDropdownStyle.SquareBadge },
    });
    // when
    wrapper.find('.neon-dropdown__badge').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('clicking disabled badge does nothing', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, dropdownStyle: NeonDropdownStyle.SquareBadge, disabled: true },
    });
    // when
    wrapper.find('.neon-dropdown__badge').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('emits input event on calling close', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: true, label },
    });
    // when
    (wrapper.vm as NeonDropdownClass).close();
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('does not emit event on calling close when closed', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when
    (wrapper.vm as NeonDropdownClass).close();
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('returns button reference when calling button', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect((wrapper.vm as NeonDropdownClass).button.className).toEqual('neon-dropdown__button-wrapper');
  });

  it('returns placement', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when / then
    expect((wrapper.vm as NeonDropdownClass).getPlacement()).toEqual(NeonDropdownPlacement.BottomLeft);
  });

  it('does not recalculate placement when closed', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // when
    (wrapper.vm as NeonDropdownClass).recalculatePlacement();
    // then
    expect((wrapper.vm as NeonDropdownClass).dropdownPlacement).toEqual(NeonDropdownPlacement.BottomLeft);
  });

  it('recalculates placement when open', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: true, label },
    });
    // when
    (wrapper.vm as NeonDropdownClass).recalculatePlacement();
    // then
    expect((wrapper.vm as NeonDropdownClass).dropdownPlacement).toEqual(NeonDropdownPlacement.BottomLeft);
  });

  it('removes listeners on destroy', () => {
    // given
    const label = 'xd';
    const windowRemoveFn = window.removeEventListener;
    const removeEventListenerFn = jest.fn();
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, openOnHover: true },
    });
    window.removeEventListener = removeEventListenerFn;
    // when
    wrapper.destroy();
    // then
    expect(removeEventListenerFn).toHaveBeenCalledTimes(2);
    window.removeEventListener = windowRemoveFn;
  });

  it('adds/removes placeholder event listeners', () => {
    // given
    const placementContainer = {
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label, placementContainer },
    });
    // when
    wrapper.destroy();
    // then
    expect(placementContainer.addEventListener).toHaveBeenCalled();
    expect(placementContainer.removeEventListener).toHaveBeenCalled();
  });

  it('destroys closable utils', () => {
    // given
    const label = 'xd';
    const wrapper = mount(NeonDropdown, {
      propsData: { value: false, label },
    });
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const closableUtils = new NeonClosableUtils(document.body, () => {});
    closableUtils.destroy = jest.fn();
    (wrapper.vm as NeonDropdownClass).closableUtils = closableUtils;
    // when
    wrapper.destroy();
    // then
    expect(closableUtils.destroy).toHaveBeenCalled();
  });
});
