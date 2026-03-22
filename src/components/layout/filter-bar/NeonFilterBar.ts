import { defineComponent } from 'vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonSwiper from '@/components/layout/swiper/NeonSwiper.vue';

/**
 * A filter bar to be placed above a list of items providing search, filter and sort options.
 */
export default defineComponent({
  name: 'NeonFilterBar',
  components: { NeonInline, NeonSwiper },
});
