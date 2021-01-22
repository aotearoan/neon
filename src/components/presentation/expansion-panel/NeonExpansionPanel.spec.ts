import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonExpansionPanel from './NeonExpansionPanel.vue';
import NeonExpansionIndicator from '../expansion-indicator/NeonExpansionIndicator.vue';
import NeonIcon from '../icon/NeonIcon.vue';
import { NeonVerticalPosition } from '../../../common/enums/NeonVerticalPosition';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

Vue.component('NeonExpansionIndicator', NeonExpansionIndicator);
Vue.component('NeonIcon', NeonIcon);

describe('NeonExpansionPanel', () => {
  it('renders default slot content', () => {
    // given
    const content = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label: 'xdd', value: false },
      slots: {
        default: `<p>${content}</p>`,
      },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel__content p').text()).toEqual(content);
  });

  it('renders label', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel__label').text()).toEqual(label);
  });

  it('renders closed', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--expanded').element).toBeUndefined();
    expect(wrapper.find('.neon-expansion-panel__content').attributes().style).toEqual('display: none;');
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeUndefined();
  });

  it('renders open', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: true },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--expanded').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-panel--expanded').attributes()['aria-expanded']).toEqual('true');
    expect(wrapper.find('.neon-expansion-panel__content').attributes().style).toBeUndefined();
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeDefined();
  });

  it('renders id', () => {
    // given
    const label = 'lol';
    const id = 'xd';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, id },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel__header').attributes()['aria-controls']).toEqual(id);
    expect(wrapper.find('.neon-expansion-panel__content').element.id).toEqual(id);
  });

  it('renders no icon', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon').element).toBeUndefined();
  });

  it('renders icon', () => {
    // given
    const label = 'lol';
    const icon = 'times';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, icon },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon').element).toBeDefined();
  });

  it('renders default position', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--top').element).toBeDefined();
  });

  it('renders position', () => {
    // given
    const label = 'lol';
    const position = NeonVerticalPosition.Bottom;
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, position },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--bottom').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const label = 'lol';
    const size = NeonSize.Large;
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, size },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--l').element).toBeDefined();
  });

  it('renders default full width', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--full-width').element).toBeUndefined();
  });

  it('renders full width', () => {
    // given
    const label = 'lol';
    const fullWidth = true;
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, fullWidth },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--full-width').element).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const label = 'lol';
    const icon = 'times';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, icon },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--neutral').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-indicator--neutral').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon--neutral').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const label = 'lol';
    const icon = 'times';
    const color = NeonFunctionalColor.Primary;
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, icon, color },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--primary').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-indicator--primary').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon--primary').element).toBeDefined();
  });

  it('renders not disabled', () => {
    // given
    const label = 'lol';
    const icon = 'times';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, icon },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-expansion-panel').attributes()['aria-disabled']).toBeUndefined();
    expect(wrapper.find('.neon-expansion-indicator--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon--disabled').element).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const label = 'lol';
    const icon = 'times';
    const disabled = true;
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, icon, disabled },
    });
    // when / then
    expect(wrapper.find('.neon-expansion-panel--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-panel').attributes()['aria-disabled']).toEqual('true');
    expect(wrapper.find('.neon-expansion-indicator--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-expansion-panel__label-container .neon-icon--disabled').element).toBeDefined();
  });

  it('emits input event false', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: true },
    });
    // when
    wrapper.find('.neon-expansion-panel__header').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('emits input event true', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when
    wrapper.find('.neon-expansion-panel__header').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('emits input event space', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when
    wrapper.find('.neon-expansion-panel__label-container').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('emits input event enter', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false },
    });
    // when
    wrapper.find('.neon-expansion-panel__label-container').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('does not emit input event when disabled', () => {
    // given
    const label = 'lol';
    const wrapper = mount(NeonExpansionPanel, {
      propsData: { label, value: false, disabled: true },
    });
    // when
    wrapper.find('.neon-expansion-panel__header').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
