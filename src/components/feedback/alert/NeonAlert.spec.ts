import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonAlert from './NeonAlert.vue';
import NeonAlertClass from './NeonAlert';
import NeonAlertContainer from './container/NeonAlertContainer.vue';
import NeonToastContainer from './container/NeonToastContainer.vue';
import { NeonAlertService } from '../../../common/utils/NeonAlertService';
import { NeonToastService } from '../../../common/utils/NeonToastService';
import { NeonAlertPlacement } from '../../../common/enums/NeonAlertPlacement';
import { NeonVerticalPosition } from '../../../common/enums/NeonVerticalPosition';
import { NeonEventBus } from '../../../common/utils/NeonEventBus';
import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';

Vue.component('NeonAlertContainer', NeonAlertContainer);
Vue.component('NeonToastContainer', NeonToastContainer);

describe('NeonAlert', () => {
  it('renders info alert', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders success alert', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.success({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--success').element).toBeDefined();
      done();
    });
  });

  it('renders warn alert', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.warn({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--warn').element).toBeDefined();
      done();
    });
  });

  it('renders error alert', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.error({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--error').element).toBeDefined();
      done();
    });
  });

  it('renders info toast', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders success toast', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.success({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--success').element).toBeDefined();
      done();
    });
  });

  it('renders warn toast', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.warn({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--warn').element).toBeDefined();
      done();
    });
  });

  it('renders error toast', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.error({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--error').element).toBeDefined();
      done();
    });
  });

  it('renders top right alert placement', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--top-right .neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('overrides default placement', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test', placement: NeonAlertPlacement.TopLeft });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--top-left .neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders alert bottom left', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test', placement: NeonAlertPlacement.BottomLeft });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--bottom-left .neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders alert bottom right', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test', placement: NeonAlertPlacement.BottomRight });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--bottom-right .neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders toast top', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--top .neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders toast bottom', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.info({ title: 'test', placement: NeonVerticalPosition.Bottom });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert--bottom .neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders duration 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: { duration: 0 },
    });
    // when
    NeonAlertService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders message duration 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test', duration: 0 });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders message duration > 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonAlertService.info({ title: 'test', duration: 1 });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-alert__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders toast duration 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: { duration: 0 },
    });
    // when
    NeonToastService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders toast duration > 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: { duration: 1 },
    });
    // when
    NeonToastService.info({ title: 'test' });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('renders toast message duration 0', (done) => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    NeonToastService.info({ title: 'test', duration: 0 });
    // then
    setTimeout(() => {
      expect(wrapper.find('.neon-toast__message--info').element).toBeDefined();
      done();
    });
  });

  it('removes toast top', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.top = [{ id: 0 }];
    // when
    component.removeToast({ id: 0, level: NeonAlertLevel.Info, title: 'test', duration: 50 });
    // then
    expect(component.top.length).toEqual(0);
  });

  it('removes toast bottom', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.bottom = [{ id: 0 }];
    // when
    component.removeToast({
      id: 0,
      level: NeonAlertLevel.Info,
      title: 'test',
      duration: 50,
      placement: NeonVerticalPosition.Bottom,
    });
    // then
    expect(component.bottom.length).toEqual(0);
  });

  it('removes alert top right', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.topRight = [{ id: 0 }];
    // when
    component.removeAlert({ id: 0, level: NeonAlertLevel.Info, title: 'test', duration: 50 });
    // then
    expect(component.topRight.length).toEqual(0);
  });

  it('removes alert top left', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.topLeft = [{ id: 0 }];
    // when
    component.removeAlert({
      id: 0,
      level: NeonAlertLevel.Info,
      title: 'test',
      duration: 50,
      placement: NeonAlertPlacement.TopLeft,
    });
    // then
    expect(component.topLeft.length).toEqual(0);
  });

  it('removes alert bottom left', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.bottomLeft = [{ id: 0 }];
    // when
    component.removeAlert({
      id: 0,
      level: NeonAlertLevel.Info,
      title: 'test',
      duration: 50,
      placement: NeonAlertPlacement.BottomLeft,
    });
    // then
    expect(component.bottomLeft.length).toEqual(0);
  });

  it('removes alert bottom right', () => {
    // given
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    const component = wrapper.vm as NeonAlertClass;
    // @ts-ignore
    component.bottomRight = [{ id: 0 }];
    // when
    component.removeAlert({
      id: 0,
      level: NeonAlertLevel.Info,
      title: 'test',
      duration: 50,
      placement: NeonAlertPlacement.BottomRight,
    });
    // then
    expect(component.bottomRight.length).toEqual(0);
  });

  it('removes listeners on destroy', () => {
    // given
    const offFn = NeonEventBus.off;
    NeonEventBus.off = jest.fn();
    const wrapper = mount(NeonAlert, {
      propsData: {},
    });
    // when
    wrapper.destroy();
    // then
    expect(NeonEventBus.off).toHaveBeenCalledTimes(8);
    NeonEventBus.off = offFn;
  });
});
