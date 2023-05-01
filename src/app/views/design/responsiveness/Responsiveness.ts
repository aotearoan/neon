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
    const sassExample = ref(`@use '@aotearoan/neon/sass/includes/responsive';

@include responsive.responsive(larger-than-tablet) {
  // add desired larger-than-tablet responsive styling here
}`);

    const typescriptExample = ref(`const responsiveView = ref<boolean>(false);

const handleResize = () => {
  responsiveView.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
}

onMounted(() => {
  window.addEventListener('resize', handleResize, { passive: true });
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});`);

    return {
      sassExample,
      typescriptExample,
    };
  },
});
