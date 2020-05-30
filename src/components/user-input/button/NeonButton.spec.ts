import Vue from 'vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonLink from '../../navigation/link/NeonLink.vue';
import NeonButton from './NeonButton.vue';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonIconPosition } from '../../design/icon/NeonIconPosition';
import { NeonButtonStyle } from './NeonButtonStyle';

Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonLink', NeonLink);

describe('NeonButton', () => {
  it('renders label', () => {
    const label = 'test label';
    const wrapper = mount(NeonButton, {
      propsData: { label },
    });
    expect(wrapper.find('.neon-button__label').text()).toEqual(label);
  });

  it('renders icon only', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--icon-only').element).toBeDefined();
  });

  it('renders default size', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--m').element).toBeDefined();
  });

  it('renders size', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, size: NeonSize.Small },
    });
    expect(wrapper.find('.neon-button--s').element).toBeDefined();
  });

  it('renders default color', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--low-contrast').element).toBeDefined();
  });

  it('renders color', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, color: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-button--primary').element).toBeDefined();
  });

  it('renders default style', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--solid').element).toBeDefined();
  });

  it('renders outline style', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, buttonStyle: NeonButtonStyle.Outline },
    });
    expect(wrapper.find('.neon-button--outline').element).toBeDefined();
  });

  it('renders icon position left', () => {
    const icon = 'check';
    const label = 'xd';
    const wrapper = mount(NeonButton, {
      propsData: { icon, label },
    });
    expect(wrapper.find('.neon-button--icon-left').element).toBeDefined();
  });

  it('renders icon position right', () => {
    const icon = 'check';
    const label = 'xd';
    const wrapper = mount(NeonButton, {
      propsData: { icon, label, iconPosition: NeonIconPosition.Right },
    });
    expect(wrapper.find('.neon-button--icon-right').element).toBeDefined();
  });

  it('renders as button', () => {
    const label = 'xd';
    const wrapper = mount(NeonButton, {
      propsData: { label },
    });
    expect(wrapper.find('button.neon-button').element).toBeDefined();
  });

  it('renders as link with href', () => {
    const label = 'xd';
    const href = '.';
    const wrapper = mount(NeonButton, {
      propsData: { label, href },
      stubs: { RouterLink: RouterLinkStub },
    });
    expect(wrapper.find('a.neon-button').element).toBeDefined();
  });

  it('renders full width', () => {
    const label = 'xd';
    const wrapper = mount(NeonButton, {
      propsData: { label, fullWidth: true },
    });
    expect(wrapper.find('.neon-button--full-width').element).toBeDefined();
  });

  it('renders circular', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, circular: true },
    });
    expect(wrapper.find('.neon-button--circular').element).toBeDefined();
  });

  it('renders disabled', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, disabled: true },
    });
    expect(wrapper.find('.neon-button--disabled[disabled]').element).toBeDefined();
  });
});
