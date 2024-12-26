import { computed, defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';

/**
 * NeonNote is a component for displaying important information to the user, such as - notes, hints or quotes.
 */
export default defineComponent({
  name: 'NeonNote',
  components: {
    NeonButton,
    NeonIcon,
    NeonInline,
    NeonStack,
  },
  props: {
    /**
     * An optional title to be displayed above the note description (aka slot contents).
     */
    title: { type: String },
    /**
     * The color of the note. In the case of the colors info, success, warn and error an icon will also be displayed to
     * further enhance user comprehension.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * Whether the note has a close button
     */
    closable: { type: Boolean, default: false },
    /**
     * Display the associated icon for info, success, warn and error colors.
     */
    icon: { type: Boolean, default: true },
    /**
     * Note close button aria label.
     */
    ariaLabelCloseNote: { type: String, default: 'Close note' },
  },
  emits: [
    /**
     * emitted when the user clicks the close button on the note
     * @type {void}
     */
    'close-note',
  ],
  setup(props, { emit, slots }) {
    const iconName = computed(() => {
      if (props.icon) {
        switch (props.color) {
          case NeonFunctionalColor.Info:
            return 'info-circle';
          case NeonFunctionalColor.Success:
            return 'check-circle';
          case NeonFunctionalColor.Warn:
            return 'exclamation-circle';
          case NeonFunctionalColor.Error:
            return 'times-circle';
          default:
            return undefined;
        }
      }

      return undefined;
    });

    const closeNote = () => {
      emit('close-note');
    };

    return {
      iconName,
      slots,
      closeNote,
    };
  },
});
