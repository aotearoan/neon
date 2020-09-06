import { Component, Vue } from 'vue-property-decorator';

/**
 * A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the
 * correct responsive layout accounting for NeonTopNav and NeonSideNav components being used.
 */
@Component
export default class NeonPage extends Vue {
  public created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
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
