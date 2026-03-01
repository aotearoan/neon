import { defineComponent } from 'vue';
import type { NeonResponsive } from '@/common/enums/NeonResponsive';
import { NeonLayoutSize } from '@/common/enums/NeonLayoutSize';

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
    gap: { type: String as () => NeonLayoutSize, default: () => NeonLayoutSize.Large },
    /**
     * Breakpoint at which to layout switches to vertical column layout. If no breakpoint is provided there is no
     * responsive switch.
     */
    breakpoint: { type: String as () => NeonResponsive },
  },
});
