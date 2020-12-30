import Vue from 'vue';
import { mount, RouterLinkStub } from '@vue/test-utils';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonLink from '../../navigation/link/NeonLink.vue';
import NeonButton from './NeonButton.vue';
import NeonButtonClass from './NeonButton';
import NeonExpansionIndicator from '../../presentation/expansion-indicator/NeonExpansionIndicator.vue';
import { NeonButtonSize } from '../../../common/enums/NeonButtonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';
import { NeonButtonStyle } from '../../../common/enums/NeonButtonStyle';
import { NeonState } from '../../../common/enums/NeonState';

Vue.component('NeonIcon', NeonIcon);
Vue.component('NeonLink', NeonLink);
Vue.component('NeonExpansionIndicator', NeonExpansionIndicator);

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
    expect(wrapper.find('.neon-button--with-icon.neon-button--icon-only').element).toBeDefined();
  });

  it('renders with outline by default', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--no-outline').element).toBeUndefined();
  });

  it('renders no outline class', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, outline: false },
    });
    expect(wrapper.find('.neon-button--no-outline').element).toBeDefined();
  });

  it('renders ready state by default', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon },
    });
    expect(wrapper.find('.neon-button--state-ready').element).toBeDefined();
    expect((wrapper.vm as NeonButtonClass).iconName).toEqual('check');
  });

  it('renders loading state', () => {
    const wrapper = mount(NeonButton, {
      propsData: { state: NeonState.Loading },
    });
    expect(wrapper.find('.neon-button--state-loading').element).toBeDefined();
    expect((wrapper.vm as NeonButtonClass).iconName).toEqual('loading');
  });

  it('renders success state', () => {
    const wrapper = mount(NeonButton, {
      propsData: { state: NeonState.Success },
    });
    expect(wrapper.find('.neon-button--state-success').element).toBeDefined();
    expect((wrapper.vm as NeonButtonClass).iconName).toEqual('check');
  });

  it('renders error state', () => {
    const wrapper = mount(NeonButton, {
      propsData: { state: NeonState.Error },
    });
    expect(wrapper.find('.neon-button--state-error').element).toBeDefined();
    expect((wrapper.vm as NeonButtonClass).iconName).toEqual('times');
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
      propsData: { icon, size: NeonButtonSize.Small },
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

  it('renders alternate color', () => {
    const icon = 'check';
    const wrapper = mount(NeonButton, {
      propsData: { icon, alternateColor: NeonFunctionalColor.Primary },
    });
    expect(wrapper.find('.neon-button--alternate-color-primary').element).toBeDefined();
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
    expect(wrapper.find('.neon-button--with-icon.neon-button--icon-left').element).toBeDefined();
  });

  it('renders icon position right', () => {
    const icon = 'check';
    const label = 'xd';
    const wrapper = mount(NeonButton, {
      propsData: { icon, label, iconPosition: NeonHorizontalPosition.Right },
    });
    expect(wrapper.find('.neon-button--with-icon.neon-button--icon-right').element).toBeDefined();
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

  it('renders indicator', () => {
    const wrapper = mount(NeonButton, {
      propsData: { indicator: true },
    });
    expect(wrapper.find('.neon-button__indicator').element).toBeDefined();
  });

  it('renders indicator expanded', () => {
    const wrapper = mount(NeonButton, {
      propsData: { indicator: true, indicatorExpanded: true },
    });
    expect(wrapper.find('.neon-expansion-indicator--expanded').element).toBeDefined();
  });

  it('link space keypress triggers click', () => {
    // given
    const href = 'http://google.com';
    const wrapper = mount(NeonButton, {
      propsData: { label: 'xd', href },
    });
    const clickFn = (wrapper.vm.$el as HTMLAnchorElement).click;
    (wrapper.vm.$el as HTMLAnchorElement).click = jest.fn();
    // when
    wrapper.trigger('keydown.space.native');
    // then
    expect((wrapper.vm.$el as HTMLAnchorElement).click).toHaveBeenCalled();
    (wrapper.vm.$el as HTMLAnchorElement).click = clickFn;
  });
});
