import { defineComponent } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';

/**
 * A vertical layout component. NeonStack provides a way of laying out it's contents with standard gaps at each
 * breakpoint. For cases where the gap needs to be different it is recommended to just use a <em>div</em> & apply a gap
 * using CSS. Alternatively, NeonStack could be used by also applying a gap in CSS.
 */
export default defineComponent({
  name: 'NeonStack',
  props: {
    /** Size of the gap between items */
    gap: { type: String as () => NeonSize, default: () => NeonSize.Large },
  },
});
