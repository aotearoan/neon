import { defineComponent } from 'vue';

/**
 * A component for indicating initial data is loading. Compose multiple skeleton loaders to generate a loader matching
 * the shape of the content to be loaded.
 */
export default defineComponent({
  name: 'NeonSkeletonLoader',
  props: {
    /**
     * The count of skeleton loaders to render. The size of the skeleton loaders depends on the parent container. The
     * skeleton loaders will split the container evenly vertically.
     */
    count: { type: Number, default: 1 },
  },
});
