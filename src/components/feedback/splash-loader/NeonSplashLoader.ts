import { defineComponent, onMounted, ref } from 'vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import { NeonSplashLoaderSize } from '@/model/feedback/splash-loader/NeonSplashLoaderSize';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * Use <strong>NeonSplashLoader</strong> to indicate loading progress to the user. This can be used fullscreen for the
 * initial page loading as well as when updating data.
 */
export default defineComponent({
  name: 'NeonSplashLoader',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * Color of the loading icon
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
    /**
     * Loading icon size
     */
    size: { type: String as () => NeonSplashLoaderSize, default: NeonSplashLoaderSize.Large },
    /**
     * Display the overlay over the page
     */
    overlay: { type: Boolean, default: true },
    /**
     * Display fullscreen (position: fixed)
     */
    fullscreen: { type: Boolean, default: false },
  },
  setup() {
    const ready = ref(false);
    onMounted(() => {
      ready.value = true;
    });

    return {
      ready,
    };
  },
});
