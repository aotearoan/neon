import { computed, defineComponent } from 'vue';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

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
     * The toggle label.
     */
    label: { type: String, required: true },
    /**
     * The size of the toggle chip.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
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
  setup(props, { emit, attrs }) {
    const emitInput = (value: boolean) => {
      emit('update:modelValue', value);
    };

    const sanitizedAttributes = computed(() => {
      const attributes = Object.entries(attrs).filter(([key, _value]) => key !== 'onInput' && key !== 'onClick');
      return { ...attributes };
    });

    const toggleChip = () => {
      if (!props.disabled) {
        emitInput(!props.modelValue);
      }
    };

    return {
      sanitizedAttributes,
      emitInput,
      toggleChip,
    };
  },
});
