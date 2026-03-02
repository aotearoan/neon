import { defineComponent } from 'vue';
import { NeonLabelSize } from '@/model/presentation/label/NeonLabelSize';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import { NeonHorizontalPosition } from '@/model/common/position/NeonHorizontalPosition';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * Labels are used to tag or emphasize properties of an item in the UI. Labels can be text only, icon only or contain both text and icons.
 */
export default defineComponent({
  name: 'NeonLabel',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The label text
     */
    label: { type: String, required: true },
    /**
     * The name of the optional label icon
     */
    icon: { type: String, default: null },
    /**
     * The icon position if there is also text in the label. This is either left or right.
     */
    iconPosition: { type: String as () => NeonHorizontalPosition, default: NeonHorizontalPosition.Left },
    /**
     * The label size
     */
    size: { type: String as () => NeonLabelSize, default: NeonLabelSize.Small },
    /**
     * Display the label as disabled
     */
    disabled: { type: Boolean, default: false },
    /**
     * The label color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Neutral },
    /**
     * Alternate color for creating gradient labels. NOTE: can also be the same color as 'color'.
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
  },
});
