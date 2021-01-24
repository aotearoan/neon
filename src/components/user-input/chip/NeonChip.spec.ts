import { mount } from '@vue/test-utils';
import NeonChipClass from './NeonChip';
import NeonChip from './NeonChip.vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonChipAction } from '../../../common/enums/NeonChipAction';

describe('NeonChip', () => {
  it('renders label', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip__label').text()).toEqual(label);
  });

  it('renders open by default', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip').element).toBeDefined();
  });

  it('renders default size', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip--m').element).toBeDefined();
  });

  it('renders size', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, size: NeonSize.Large },
    });
    // when / then
    expect(wrapper.find('.neon-chip--l').element).toBeDefined();
  });

  it('renders default color', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-chip--primary').element).toBeDefined();
  });

  it('renders icon with color', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, icon: 'check', color: NeonFunctionalColor.Primary },
    });
    // when / then
    expect(wrapper.find('.neon-chip__icon').element).toBeDefined();
    expect(wrapper.find('.neon-icon--primary').element).toBeDefined();
  });

  it('renders default action', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip--click').element).toBeDefined();
    expect(wrapper.find('.neon-chip__close').element).toBeUndefined();
  });

  it('renders removable', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove },
    });
    // when / then
    expect(wrapper.find('.neon-chip--remove').element).toBeDefined();
    expect(wrapper.find('.neon-chip__close').element).toBeDefined();
  });

  it('emits close event when removable and clicked', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove },
    });
    // when
    wrapper.find('.neon-chip').trigger('click');
    // then
    expect(wrapper.emitted().close[0]).toBeDefined();
  });

  it('does not emit close event when disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove, disabled: true },
    });
    // when
    wrapper.find('.neon-chip').trigger('click');
    // then
    expect(wrapper.emitted().close).toBeUndefined();
  });

  it('emits click event when clicked', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when
    wrapper.find('.neon-chip').trigger('click');
    // then
    expect(wrapper.emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove },
    });
    // when
    wrapper.find('.neon-chip').trigger('click');
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('emits click event when space keydown', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when
    wrapper.find('.neon-chip').trigger('keydown.space');
    // then
    expect(wrapper.emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when space keydown and disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, disabled: true },
    });
    // when
    wrapper.find('.neon-chip').trigger('keydown.space');
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('emits close event when delete keydown and removable', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove },
    });
    // when
    wrapper.find('.neon-chip').trigger('keydown.delete');
    // then
    expect(wrapper.emitted().close[0]).toBeDefined();
  });

  it('renders active', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    const vm = wrapper.vm as NeonChipClass;
    // when / then
    wrapper.find('.neon-chip').trigger('keydown.enter');
    expect(vm.active).toEqual(true);
    wrapper.find('.neon-chip').trigger('keyup');
    expect(vm.active).toEqual(false);
  });

  it('emits click event when enter keydown', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when
    wrapper.find('.neon-chip').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().click[0]).toBeDefined();
  });

  it('does not emit click event when enter keydown and disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, disabled: true },
    });
    // when
    wrapper.find('.neon-chip').trigger('keydown.enter');
    // then
    expect(wrapper.emitted().click).toBeUndefined();
  });

  it('renders disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-chip--disabled')).toBeDefined();
    expect(wrapper.find('.neon-chip--disabled').attributes()['aria-disabled']).toEqual('true');
    expect(wrapper.find('.neon-chip--disabled').attributes().tabindex).toBeUndefined();
  });

  it('renders not disabled by default', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip--disabled').element).toBeUndefined();
    expect(wrapper.find('.neon-chip').attributes().tabindex).toEqual('0');
  });

  it('renders button role when removable', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, action: NeonChipAction.Remove },
    });
    // when / then
    expect(wrapper.find('.neon-chip').attributes().role).toEqual('button');
  });

  it('renders link role when clickable', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label },
    });
    // when / then
    expect(wrapper.find('.neon-chip').attributes().role).toEqual('link');
  });

  it('renders undefined role when disabled', () => {
    // given
    const label = 'xdd';
    const wrapper = mount(NeonChip, {
      propsData: { label, disabled: true },
    });
    // when / then
    expect(wrapper.find('.neon-chip').attributes().role).toBeUndefined();
  });
});
