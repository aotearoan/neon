import { computed, defineComponent, ref, useAttrs } from 'vue';
import { NeonToggleChipSize } from '@/common/enums/NeonToggleChipSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * <p>
 * A Toggle chip component used to indicate an on/off state in form inputs. This is equivalent to a checkbox. This is a
 * variation of a checkbox/switch which can be used as an on/off button to trigger an action or used in a group for
 * filtering.
 * </p>
 */
export default defineComponent({
  name: 'NeonToggleChip',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The toggle chip model.
     */
    modelValue: { type: Boolean, required: true },
    /**
     * The toggle label. Required unless overriding the slot contents.
     */
    label: { type: String },
    /**
     * The size of the toggle chip.
     */
    size: { type: String as () => NeonToggleChipSize, default: NeonToggleChipSize.Medium },
    /**
     * The toggle chip color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Whether to display a checked icon on the toggle chip when it is 'on'.
     */
    showCheck: { type: Boolean, default: true },
    /**
     * Disabled state of the toggle chip.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the toggle chip is toggled on or off.
     *
     * @type {boolean} The state of the switch.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();
    const toggleChipLabel = ref<HTMLLabelElement | null>(null);

    const emitInput = (value: boolean) => {
      emit('update:modelValue', value);
      toggleChipLabel.value?.blur();
    };

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onClick, type, tabindex, ...sanitized } = attrs;
      return { ...sanitized };
    });

    const toggleChip = () => {
      if (!props.disabled) {
        emitInput(!props.modelValue);
      }
    };

    return {
      sanitizedAttributes,
      toggleChipLabel,
      emitInput,
      toggleChip,
    };
  },
});
