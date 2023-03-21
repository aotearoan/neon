import { defineComponent, ref } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Responsiveness',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    Editor,
  },
  setup() {
    const sassExample = ref(`@use '~@aotearoan/neon/theme';

@include responsive(larger-than-tablet) {
  // add desired larger-than-tablet responsive styling here
}`);

    const typescriptExample = ref(`private responsiveView = false;

private mounted() {
  window.addEventListener('resize', this.handleResize, { passive: true });
  this.handleResize();
}

private beforeDestroy() {
  window.removeEventListener('resize', this.handleResize);
}

private handleResize() {
  this.responsiveView = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
}`);

    return {
      sassExample,
      typescriptExample,
    };
  },
});
