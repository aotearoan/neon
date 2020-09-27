import { Component, Vue } from 'vue-property-decorator';

/**
 * A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the
 * correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
 */
@Component
export default class NeonPage extends Vue {
  private withTopNav = false;
  private withSideNav = false;

  public created() {
    window.addEventListener('resize', this.handleResize, { passive: true });
    this.handleResize();
  }

  public mounted() {
    this.withTopNav = !!this.$slots['top-nav'];
    this.withSideNav = !!this.$slots['side-nav'];
  }

  public beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }

  public handleResize() {
    const vh = (window.innerHeight * 0.01).toFixed(2);
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const vw = (window.innerWidth * 0.01).toFixed(2);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
}
