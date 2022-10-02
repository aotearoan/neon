import { computed, defineComponent, ref } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { NeonChipAction } from '@/common/enums/NeonChipAction';

/**
 * <p>
 * <strong>NeonChip</strong> is a clickable or removable chip which can be used as a tag or to indicate selected values
 * in filters and other more complex inputs (e.g. search / multiselect). Clicking the chip results in a callback and in
 * the case it is removable, also removal of the chip. Chips are designed to fit inside inputs for creating more complex
 * input components.
 * </p>
 * <p>
 *   Chips are navigable via tab (tabindex). When focussed, use space, return or enter to click on clickable tabs and, in
 *   the case of removable tabs, use backspace and delete to remove a tab. Escape will blur a focussed tab.
 * </p>
 */
export default defineComponent({
  name: 'NeonChip',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The chip label
     */
    label: { type: String, required: true },
    /**
     * The size of the chip.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The chip color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The action when clicking on a chip. Can be click or remove.
     */
    action: { type: String as () => NeonChipAction, default: NeonChipAction.Click },
    /**
     * The chip disabled state.
     */
    disabled: { type: Boolean, default: false },
    /**
     * This is the name of an icon which can optionally be added to the chip.
     */
    icon: { type: String, default: null },
  },
  emits: [
    /**
     * Emitted when the chip is closed by the user.
     *
     * @type {void}
     */
    'close',
    /**
     * Emitted when the chip is clicked on.
     *
     * @type {void}
     */
    'click',
  ],
  setup(props, { emit }) {
    const chip = ref(null);
    const open = ref(true);
    const active = ref(false);

    const role = computed(() => {
      if (!props.disabled) {
        switch (props.action) {
          case NeonChipAction.Remove:
            return 'button';
          case NeonChipAction.Click:
            return 'link';
        }
      }

      return undefined;
    });

    const clicked = () => {
      if (!props.disabled) {
        switch (props.action) {
          case NeonChipAction.Remove:
            open.value = false;
            emit('close');
            break;
          case NeonChipAction.Click:
            emit('click');
            break;
        }
      }
    };

    const keyUp = () => {
      active.value = false;
    };

    const keyDown = () => {
      if (!props.disabled) {
        active.value = true;
        clicked();
      }
    };

    return {
      chip,
      open,
      active,
      role,
      keyUp,
      keyDown,
      clicked,
    };
  },
});
