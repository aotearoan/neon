import { defineComponent } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonResponsive } from '@/neon';

/**
 * A horizontal layout component. NeonInline provides a way of laying out it's contents with standard gaps. At the
 * specified breakpoint the layout will wrap to vertical.
 */
export default defineComponent({
  name: 'NeonInline',
  props: {
    /**
     * Size of the gap between items
     */
    gap: { type: String as () => NeonSize, default: () => NeonSize.Large },
    /**
     * Breakpoint at which to layout wraps to vertical
     */
    breakpoint: { type: String as () => NeonSize, default: () => NeonResponsive.MobileLarge },
  },
});
