import { defineComponent } from 'vue';
import type { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * Custom animated chevron component which is used in dropdowns and expansion panels. This may be useful in creating
 * higher level components but is unlikely to be used on its own.
 */
export default defineComponent({
  name: 'NeonExpansionIndicator',
  props: {
    /**
     * Whether the chevron is <em>open</em>.
     */
    expanded: { type: Boolean, default: false },
    /**
     * Display the expansion indicator in the inverse text color
     */
    inverse: { type: Boolean, default: false },
    /**
     * Display the expansion indicator in the disabled color
     */
    disabled: { type: Boolean, default: false },
    /**
     * The color of the chevron.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
  },
});
