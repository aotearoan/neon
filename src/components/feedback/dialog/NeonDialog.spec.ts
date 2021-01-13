import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonDialog from './NeonDialog.vue';
import NeonButton from '../../user-input/button/NeonButton.vue';
import NeonModal from '../../layout/modal/NeonModal.vue';
import NeonCardBody from '../../layout/card/body/NeonCardBody.vue';
import NeonCard from '../../layout/card/NeonCard.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

Vue.component('NeonButton', NeonButton);
Vue.component('NeonCard', NeonCard);
Vue.component('NeonCardBody', NeonCardBody);
Vue.component('NeonModal', NeonModal);

describe('NeonDialog', () => {
  const title = 'test title';
  const question = 'question';

  it('renders title', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    expect(wrapper.find('.neon-dialog__title').text()).toEqual(title);
  });

  it('renders question', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    expect(wrapper.find('.neon-dialog__question').text()).toEqual(question);
  });

  it('renders closed', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    expect(wrapper.find('.neon-modal--open').element).toBeUndefined();
  });

  it('renders open', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question, open: true },
    });
    // when / then
    expect(wrapper.find('.neon-modal--open').element).toBeDefined();
  });

  it('renders default cancel label', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    const cancelButton = wrapper.findAll('.neon-button').at(0);
    expect(cancelButton.text()).toEqual('Cancel');
    expect(cancelButton.attributes()['aria-label']).toEqual('Cancel');
  });

  it('renders provided cancel label', () => {
    // given
    const cancelLabel = 'Decline';
    const wrapper = mount(NeonDialog, {
      propsData: { title, question, cancelLabel },
    });
    // when / then
    const cancelButton = wrapper.findAll('.neon-button').at(0);
    expect(cancelButton.text()).toEqual(cancelLabel);
    expect(cancelButton.attributes()['aria-label']).toEqual(cancelLabel);
  });

  it('renders default confirm label', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    const confirmButton = wrapper.findAll('.neon-button').at(1);
    expect(confirmButton.text()).toEqual('Confirm');
    expect(confirmButton.attributes()['aria-label']).toEqual('Confirm');
  });

  it('renders provided confirm label', () => {
    // given
    const confirmLabel = 'Approve';
    const wrapper = mount(NeonDialog, {
      propsData: { title, question, confirmLabel },
    });
    // when / then
    const confirmButton = wrapper.findAll('.neon-button').at(1);
    expect(confirmButton.text()).toEqual(confirmLabel);
    expect(confirmButton.attributes()['aria-label']).toEqual(confirmLabel);
  });

  it('renders default color', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when / then
    expect(wrapper.find('.neon-button--primary')).toBeDefined();
  });

  it('renders brand color', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question, color: NeonFunctionalColor.Brand },
    });
    // when / then
    expect(wrapper.find('.neon-button--brand')).toBeDefined();
  });

  it('renders alternate color', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question, alternateColor: NeonFunctionalColor.Brand },
    });
    // when / then
    expect(wrapper.find('.neon-button--alternate-color-brand')).toBeDefined();
  });

  it('emits cancel', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when
    wrapper.findAll('.neon-button').at(0).trigger('click');
    // then
    expect(wrapper.emitted().cancel[0]).toBeDefined();
  });

  it('emits confirm', () => {
    // given
    const wrapper = mount(NeonDialog, {
      propsData: { title, question },
    });
    // when
    wrapper.findAll('.neon-button').at(1).trigger('click');
    // then
    expect(wrapper.emitted().confirm[0]).toBeDefined();
  });
});
