import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { NeonResponsiveUtils } from '../../../../common/utils/NeonResponsiveUtils';
import { NeonResponsive } from '../../../../common/enums/NeonResponsive';

/**
 * The NeonTab component that defines individual tabs for use with the NeonTabs component.
 */
export default defineComponent({
  name: 'NeonTab',
  props: {
    /**
     * True if the current tab is the visible tab.
     */
    selected: { type: Boolean, required: true },
    /**
     * Id of the tab (matches the key in NeonTabModel).
     */
    id: { type: String, default: null },
    /**
     * By default, use CSS display property to show/hide tab contents. This flag will enable using v-if instead.
     * */
    toggleOnIf: { type: Boolean, default: false },
  },
  setup() {
    const responsiveView = ref(false);

    const handleResize = () => {
      responsiveView.value = window.matchMedia(NeonResponsiveUtils.breakpoints[NeonResponsive.MobileLarge]).matches;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize, { passive: true });
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      responsiveView,
    };
  },
});
