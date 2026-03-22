import { defineComponent } from 'vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonSkeletonLoader from '@/components/feedback/skeleton-loader/NeonSkeletonLoader.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';

export default defineComponent({
  name: 'NeonLoadingStateCard',
  components: {
    NeonInline,
    NeonSkeletonLoader,
    NeonStack,
  },
});
