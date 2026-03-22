import { defineComponent } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import type { NeonButtonModel } from '@/model/user-input/button/NeonButtonModel';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import { NeonButtonStyle } from '@/model/user-input/button/NeonButtonStyle';
import { NeonEmptyStateType } from '@/model/presentation/empty-state/NeonEmptyStateType';

/**
 * NeonEmptyState is a component for displaying an empty state message with an image and optional call-to-action buttons.
 * It can also be used to render error pages.
 */
export default defineComponent({
  name: 'NeonEmptyState',
  components: {
    NeonButton,
    NeonIcon,
    NeonInline,
    NeonStack,
  },
  props: {
    /**
     * The image to display in the empty state. This is an icon name used by the NeonIcon component, typically an
     * svg illustration.
     */
    image: { type: String },
    /**
     * The type of empty state to render, either an empty state or an error.
     */
    type: { type: String as () => NeonEmptyStateType, default: () => NeonEmptyStateType.EmptyState },
    /**
     * The accent color of the image. This is a functional color from the NeonFunctionalColor enum.
     */
    imageColor: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.Brand },
    /**
     * The title of the empty state component.
     */
    title: { type: String, required: true },
    /**
     * A subtitle of the empty state component.
     */
    subtitle: { type: String },
    /**
     * A list of CTA buttons to display in the empty state. These are
     * NeonButtonModel objects.
     */
    ctas: { type: Array as () => Array<NeonButtonModel>, default: () => [] },
  },
  emits: [
    /**
     * Emitted when a CTA button is clicked. The index of the button in the ctas array is passed as the first argument.
     * @type {number} The index of the button clicked. This corresponds to the index of the button in the ctas property
     * array.
     */
    'cta-click',
  ],
  setup: (_props, { emit }) => {
    return {
      emit,
      NeonButtonStyle,
      NeonFunctionalColor,
    };
  },
});
