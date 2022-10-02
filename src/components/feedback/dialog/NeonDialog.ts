import { defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonCard from '@/components/layout/card/NeonCard.vue';
import NeonCardBody from '@/components/layout/card/body/NeonCardBody.vue';
import NeonModal from '@/components/layout/modal/NeonModal.vue';

/**
 * A dialog component for confirming simple actions. This will be rendered above the content of the main window and
 * present just two options to the user, one to proceed with the action and the other to cancel it.
 */
export default defineComponent({
  name: 'NeonDialog',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonModal,
  },
  props: {
    /**
     * The color of the button for the confirm (positive) action.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Alternate confirm button color for creating a gradient button. NOTE: can also be the same color as 'color'.
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * The label of the button for the cancel (negative) action.
     */
    cancelLabel: { type: String, default: 'Cancel' },
    /**
     * The label of the button for the confirm (positive) action.
     */
    confirmLabel: { type: String, default: 'Confirm' },
    /**
     * The dialog title
     */
    title: { type: String, required: true },
    /**
     * The dialog question. Can be html (rendered using v-html).
     */
    question: { type: String, required: true },
    /**
     * Whether the dialog is open.
     */
    open: { type: Boolean, default: false },
  },
  emits: [
    /**
     * emitted when the user clicks the cancel (negative) action button.
     * @type {void}
     */
    'cancel',
    /**
     * emitted when the user clicks the confirm (positive) action button.
     * @type {void}
     */
    'confirm',
  ],
  setup(_props, { emit }) {
    const cancel = () => {
      emit('cancel');
    };

    const confirm = () => {
      emit('confirm');
    };

    return {
      cancel,
      confirm,
    };
  },
});
