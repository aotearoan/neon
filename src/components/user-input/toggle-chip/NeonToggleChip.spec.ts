import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonToggleChip from './NeonToggleChip.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

Vue.component('NeonIcon', NeonIcon);

describe('NeonToggleChip', () => {
  const label = 'xd';

  it('renders checked state true', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label },
    });
    expect(wrapper.find('.neon-toggle-chip--checked').element).toBeDefined();
    expect(wrapper.find('.neon-toggle-chip').attributes('aria-pressed')).toEqual('true');
  });

  it('renders checked state false', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip--checked').element).toBeUndefined();
    expect(wrapper.find('.neon-toggle-chip').attributes('aria-pressed')).toBeUndefined();
  });

  it('renders checked icon when true', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label },
    });
    expect(wrapper.find('.neon-icon').element).toBeDefined();
  });

  it('does not render checked icon when false', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-icon').element).toBeUndefined();
  });

  it('renders checked icon when true and showCheck true', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, showCheck: true, label },
    });
    expect(wrapper.find('.neon-icon').element).toBeDefined();
  });

  it('does not render checked icon when true and showCheck false', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, showCheck: false, label },
    });
    expect(wrapper.find('.neon-icon').element).toBeUndefined();
  });

  it('renders icon enabled', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label },
    });
    expect(wrapper.find('.neon-icon--disabled').element).toBeUndefined();
  });

  it('renders icon disabled', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label, disabled: true },
    });
    expect(wrapper.find('.neon-icon--disabled').element).toBeDefined();
  });

  it('renders default size', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip--m').element).toBeDefined();
  });

  it('renders provided size', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-toggle-chip--s').element).toBeDefined();
  });

  it('renders default color', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip--primary').element).toBeDefined();
  });

  it('renders provided color', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, color: NeonFunctionalColor.Info },
    });
    expect(wrapper.find('.neon-toggle-chip--info').element).toBeDefined();
  });

  it('renders default disabled false', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-toggle-chip').attributes('aria-disabled')).toBeUndefined();
  });

  it('renders disabled true', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, disabled: true },
    });
    expect(wrapper.find('.neon-toggle-chip--disabled').element).toBeDefined();
    expect(wrapper.find('.neon-toggle-chip').attributes('aria-disabled')).toEqual('true');
  });

  it('renders default showCheck true', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip--show-check').element).toBeDefined();
  });

  it('renders showCheck false', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, showCheck: false },
    });
    expect(wrapper.find('.neon-toggle-chip--show-check').element).toBeUndefined();
  });

  it('renders label', () => {
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    expect(wrapper.find('.neon-toggle-chip__label').text()).toEqual(label);
  });

  it('renders input unchecked', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    // when
    const checkbox = wrapper.find('.neon-toggle-chip__input').element as HTMLInputElement;
    // then
    expect(checkbox.checked).toEqual(false);
  });

  it('renders input checked', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label },
    });
    // when
    const checkbox = wrapper.find('.neon-toggle-chip__input').element as HTMLInputElement;
    // then
    expect(checkbox.checked).toEqual(true);
  });

  it('renders input not disabled', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    // when
    const checkbox = wrapper.find('.neon-toggle-chip__input').element as HTMLInputElement;
    // then
    expect(checkbox.disabled).toEqual(false);
  });

  it('renders input disabled', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label, disabled: true },
    });
    // when
    const checkbox = wrapper.find('.neon-toggle-chip__input').element as HTMLInputElement;
    // then
    expect(checkbox.disabled).toEqual(true);
  });

  it('does not emit event when disabled', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, disabled: true },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('click');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('toggles chip on when clicked', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('toggles chip off when clicked', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: true, label },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('click');
    // then
    expect(wrapper.emitted().input[0]).toEqual([false]);
  });

  it('toggles chip toggle when enter pressed', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('does not toggle chip when enter pressed and disabled', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, disabled: true },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });

  it('toggles chip toggle when space pressed', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input[0]).toEqual([true]);
  });

  it('does not toggle chip when space pressed and disabled', () => {
    // given
    const wrapper = mount(NeonToggleChip, {
      propsData: { value: false, label, disabled: true },
    });
    // when
    wrapper.find('.neon-toggle-chip').trigger('keydown.space');
    // then
    expect(wrapper.emitted().input).toBeUndefined();
  });
});
