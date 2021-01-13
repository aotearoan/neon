import Vue from 'vue';
import { mount } from '@vue/test-utils';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonSplashLoader from './NeonSplashLoader.vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';

Vue.component('NeonIcon', NeonIcon);

describe('NeonSplashLoader', () => {
  it('renders default color', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: {},
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-icon--primary').element).toBeDefined();
      done();
    });
  });

  it('renders color', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: { color: NeonFunctionalColor.Brand },
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-icon--brand').element).toBeDefined();
      done();
    });
  });

  it('renders default size', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: {},
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--l').element).toBeDefined();
      done();
    });
  });

  it('renders size', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: { size: NeonSize.Medium },
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--m').element).toBeDefined();
      done();
    });
  });

  it('renders overlay', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: {},
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--with-overlay').element).toBeDefined();
      done();
    });
  });

  it('renders without overlay', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: { overlay: false },
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--with-overlay').element).toBeUndefined();
      done();
    });
  });

  it('renders fullscreen', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: { fullscreen: true },
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--fullscreen').element).toBeDefined();
      done();
    });
  });

  it('renders without fullscreen', (done) => {
    // given
    const wrapper = mount(NeonSplashLoader, {
      propsData: {},
    });
    // when / then
    setTimeout(() => {
      expect(wrapper.find('.neon-splash-loader--fullscreen').element).toBeUndefined();
      done();
    });
  });
});
