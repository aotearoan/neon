import { defineComponent } from 'vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { NeonFunctionalColor } from '@/neon';

/**
 * A stepper component for assisting users in navigating through complex flows.
 */
export default defineComponent({
  name: 'NeonStepper',
  components: { NeonIcon },
  props: {
    /**
     * An ordered list of the step names, these values are used for display purposes.
     */
    steps: { type: Array as () => Array<string>, required: true },
    /**
     * The index of the highest completed step (regardless of the current step the user has selected).
     * This is used to display the completed steps to the user.
     */
    completedIndex: { type: Number, default: -1 },
    /**
     * The index of the step that is currently selected.
     */
    modelValue: { type: Number, default: 0 },
    /**
     * The color of the Stepper component.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
  },
  emits: [
    /**
     * Emitted when the selected step is changed.
     * @type {number} The index of the selected step.
     */
    'update:modelValue',
  ],
  setup(_props, { emit }) {
    return {
      emit,
    };
  },
});
