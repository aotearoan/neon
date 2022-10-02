import { computed, defineComponent } from 'vue';
import type { NeonToggleModel } from '@/common/models/NeonToggleModel';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonToggleStyle } from '@/common/enums/NeonToggleStyle';
import { NeonOrientation } from '@/common/enums/NeonOrientation';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * <p>A toggle component for selecting one value from a range of options. This is equivalent to a radio button group. It can be styled as a <em>Toggle</em> or as <em>Radio buttons</em>.
 */
export default defineComponent({
  name: 'NeonToggle',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The name of the radio button group.
     */
    name: { type: String, required: true },
    /**
     * The key of the selected option.
     */
    modelValue: { type: String, required: true },
    /**
     * The list of options to present to the user.
     */
    model: { type: Array as () => Array<NeonToggleModel>, required: true },
    /**
     * The style of toggle to display to the user.
     */
    toggleStyle: { type: String as () => NeonToggleStyle, default: () => NeonToggleStyle.Toggle },
    /**
     * The size of the toggle.
     */
    size: { type: String as () => NeonSize, default: () => NeonSize.Medium },
    /**
     * The orientation of the toggle if the style is a radio button group.
     */
    orientation: { type: String as () => NeonOrientation, default: () => NeonOrientation.Vertical },
    /**
     * The color of the toggle.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.Neutral },
    /**
     * Whether the toggle is disabled.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the selected value changes.
     * @type {boolean} The key of the selected model item.
     */
    'update:modelValue',
  ],
  setup(props, { emit, attrs }) {
    const emitInput = (key: string) => {
      emit('update:modelValue', key);
    };

    const onInput = (key: string) => {
      if (!props.disabled) {
        emitInput(key);
      }
    };

    const sanitizedAttributes = computed(() => {
      const attributes = Object.entries(attrs).filter(([key, _value]) => key !== 'onInput' && key !== 'onClick');
      return { ...attributes };
    });

    const selectOption = (option: NeonToggleModel) => {
      if (!props.disabled && !option.disabled) {
        emitInput(option.key);
      }
    };

    return {
      selectOption,
      onInput,
      sanitizedAttributes,
    };
  },
});
