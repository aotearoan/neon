import { defineComponent, onMounted, ref } from 'vue';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSplashLoaderSize } from '../../../common/enums/NeonSplashLoaderSize';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * Use <strong>NeonSplashLoader</strong> to indicate loading progress to the user. This can be used fullscreen for the
 * initial site loading as well as when UPDATING data, e.g. refreshing table data. For initial data loading please see
 * <a href="/feedback/skeleton-loader">NeonSkeletonLoader</a>.
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
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
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
