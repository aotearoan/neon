import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonHorizontalPosition } from '@/common/enums/NeonHorizontalPosition';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonVerticalPosition } from '@/common/enums/NeonVerticalPosition';
import NeonExpansionIndicator from '@/components/presentation/expansion-indicator/NeonExpansionIndicator.vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { defineComponent } from 'vue';

/**
 * <p>Expansion panels are used to show and hide content that may be less important or too large to display on screen
 * all the time. They can also be used to expand lists of items, e.g. <em>Show more</em>. The expansion panel consists
 * of a button which, when clicked, toggles the open/closed state of the expansion panel and a slot for the content to
 * display on expansion.</p>
 */
export default defineComponent({
  name: 'NeonExpansionPanel',
  components: {
    NeonExpansionIndicator,
    NeonIcon,
  },
  props: {
    /**
     * A boolean indicating whether the expansion panel is expanded.
     */
    modelValue: { type: Boolean, required: true },
    /**
     * The label of the expansion button
     */
    label: { type: String },
    /**
     * Provide an id to support aria-controls. The id will be placed on the expansion panel content wrapper and the
     * aria-controls on the header (triggering the expansion).
     */
    id: { type: String, default: null },
    /**
     * An icon to display to the left of the label
     */
    icon: { type: String, default: null },
    /**
     * The position of the expansion button. This can be located above the content to expand or below it.
     */
    position: { type: String as () => NeonVerticalPosition, default: NeonVerticalPosition.Top },
    /**
     * The position of the expansion button. This can be located above the content to expand or below it.
     */
    indicatorPosition: { type: String as () => NeonHorizontalPosition, default: NeonHorizontalPosition.Right },
    /**
     * The size of the expansion panel button.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the expansion panel button.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Neutral },
    /**
     * Whether the label and expansion indicator should be flush with the width of the container.
     */
    fullWidth: { type: Boolean, default: false },
    /**
     * The disabled state of the expansion panel
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the expansion panel button is clicked.
     * @type {boolean} The new open state of the expansion panel.
     */
    'update:modelValue',
  ],
  setup(props, { emit, slots }) {
    // not sure how to test this, open to idea. Tried seeing if the console.warn was called but doesn't seem to trigger
    if (!props.label && !slots.header) {
      console.error(`A label or a header slot most be provided to the NeonExpansionPanel component`);
    }

    const toggleExpanded = () => {
      if (!props.disabled) {
        emit('update:modelValue', !props.modelValue);
      }
    };

    return {
      toggleExpanded,
    };
  },
});
