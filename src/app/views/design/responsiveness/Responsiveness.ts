import { Component, Vue } from 'vue-property-decorator';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '../../../../components';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    Editor,
  },
})
export default class Responsiveness extends Vue {
  private sassExample = `@import '~@aotearoan/neon/themes/classic/theme';

@include responsive(larger-than-tablet) {
  // add desired larger-than-tablet responsive styling here
}`;

  private typescriptExample = `private responsiveView = false;

private mounted() {
  window.addEventListener('resize', this.handleResize, { passive: true });
  this.handleResize();
}

private beforeDestroy() {
  window.removeEventListener('resize', this.handleResize);
}

private handleResize() {
  this.responsiveView = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
}`;
}
