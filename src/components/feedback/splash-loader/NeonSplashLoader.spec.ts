import NeonSplashLoader from './NeonSplashLoader.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import { render } from '@testing-library/vue';

describe('NeonSplashLoader', () => {
  it('renders default color', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: {} });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-icon--primary');
      done();
    });
  });

  it('renders color', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: { color: NeonFunctionalColor.Brand } });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-icon--brand');
      done();
    });
  });

  it('renders default size', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: {} });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-splash-loader--l');
      done();
    });
  });

  it('renders size', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: { size: NeonSize.Medium } });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-splash-loader--m');
      done();
    });
  });

  it('renders overlay', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: {} });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-splash-loader--with-overlay');
      done();
    });
  });

  it('renders without overlay', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: { overlay: false } });
    // when / then
    setTimeout(() => {
      expect(html()).not.toMatch('neon-splash-loader--with-overlay');
      done();
    });
  });

  it('renders fullscreen', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: { fullscreen: true } });
    // when / then
    setTimeout(() => {
      expect(html()).toMatch('neon-splash-loader--fullscreen');
      done();
    });
  });

  it('renders without fullscreen', (done) => {
    // given
    const { html } = render(NeonSplashLoader, { props: {} });
    // when / then
    setTimeout(() => {
      expect(html()).not.toMatch('neon-splash-loader--fullscreen');
      done();
    });
  });
});
