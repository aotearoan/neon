import { defineComponent } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * Use input indicators to provide additional information for input fields. This can be useful to add the field units or
 * a connected label or icon.
 * <br />
 * NOTE: An input indicator is an HTML <em>label</em> so attributes like, e.g. <em>for</em> are accepted.
 */
export default defineComponent({
  name: 'NeonInputIndicator',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The label to display
     */
    label: { type: String, required: false },
    /**
     * The icon to display
     */
    icon: { type: String, required: false },
    /**
     * The size of the input indicator
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
  },
});
