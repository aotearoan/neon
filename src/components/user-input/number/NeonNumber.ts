import { computed, defineComponent, ref, useAttrs } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonInputMode } from '@/common/enums/NeonInputMode';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonFieldGroup from '@/components/user-input/field-group/NeonFieldGroup.vue';
import NeonInput from '@/components/user-input/input/NeonInput.vue';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';

/**
 * <p>
 *   The <strong>NeonNumber</strong> component is the equivalent of an <strong>&lt;input type="number" /&gt;</strong>
 *   with -/+ spin buttons. In addition, it supports formatting as a percentage or with a provided custom template and
 *   also pasting of values in the user's locale, e.g. 6,543.12.
 * </p>
 * <p><strong>NeonNumber</strong> supports all the properties found on an HTML &lt;input&gt;.</p>
 */
export default defineComponent({
  name: 'NeonNumber',
  components: {
    NeonButton,
    NeonFieldGroup,
    NeonInput,
  },
  props: {
    /**
     * The value of the number input. Either a valid number or null.
     */
    modelValue: { type: Number, default: null },
    /**
     * The minimum value the input can accept.
     */
    min: { type: Number, required: false },
    /**
     * The maximum value the input can accept.
     */
    max: { type: Number, required: false },
    /**
     * The step value for the spin buttons.
     */
    step: { type: Number, required: false },
    /**
     * The component color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * The component size.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The locale used for display purposes. This defaults to the browser's locale if none is provided.
     */
    locale: { type: String, default: null },
    /**
     * Placeholder text to display in the input
     */
    placeholder: { type: String, default: null },
    /**
     * Whether the component is disabled.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Enable/disable direct editing of the value.
     */
    editable: { type: Boolean, default: true },
    /**
     * Show/hide spin buttons. NOTE: The user can still use up/down arrow keys when the input has focus.
     */
    spinButtons: { type: Boolean, default: false },
    /**
     * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%.
     */
    percentage: { type: Boolean, default: false },
    /**
     * The rounding precision for display formatting.
     */
    decimals: { type: Number, required: false },
    /**
     * A template string used for formatting the value for display. Use the placeholder {value} to reference the value in
     * the template string. e.g. value = 90, ${value} => $90.
     */
    valueTemplate: { type: String, required: false },
    /**
     * The HTML inputmode of the component. Either 'numeric' or 'decimal'.
     */
    inputmode: { type: String as () => NeonInputMode, default: NeonInputMode.Numeric },
    /**
     * ARIA label for the increment spinner button.
     */
    incrementLabel: { type: String, default: 'Increment' },
    /**
     * ARIA label for the decrement spinner button.
     */
    decrementLabel: { type: String, default: 'Decrement' },
  },
  emits: [
    /**
     * Emitted when the user changes the value of the number via the increment/decrement buttons or manually entering
     * the value.
     * @type {number | null} the current value or null if the value has been cleared.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();
    const focus = ref(false);

    const emitValue = (value: number | null) => {
      if (!props.disabled) {
        emit('update:modelValue', value);
      }
    };

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { onBlur, onFocus, ...sanitized } = attrs;
      return sanitized;
    });

    const valueChanged = (value: string) => {
      const parsedValue = NeonNumberUtils.parseNumber(value);
      const newValue =
        value !== '' && value !== null
          ? Math.max(Math.min(parsedValue, props.max ?? Number.MAX_SAFE_INTEGER), props.min ?? Number.MIN_SAFE_INTEGER)
          : null;
      if (newValue === null || !isNaN(parsedValue)) {
        emitValue(newValue);
      }
    };

    const computedDecimals = computed(() => {
      return props.decimals ?? (props.percentage ? 0 : undefined);
    });

    const computedRawDecimals = computed(() => {
      return props.percentage && computedDecimals.value !== undefined
        ? computedDecimals.value + 2
        : computedDecimals.value;
    });

    const computedValue = computed(() => {
      const newValue = props.modelValue !== null ? +props.modelValue : props.min || 0;
      return computedRawDecimals.value !== undefined ? Number(newValue.toFixed(computedRawDecimals.value)) : newValue;
    });

    const formattedValue = computed(() => {
      return props.modelValue !== null &&
        (props.valueTemplate !== undefined || computedDecimals.value !== undefined || props.percentage !== undefined)
        ? NeonNumberUtils.formatNumber(
            props.modelValue,
            {
              decimals: computedDecimals.value,
              format: props.valueTemplate,
              percentage: props.percentage,
            },
            props.locale,
          )
        : props.modelValue;
    });

    const rawValue = computed(() => {
      return computedRawDecimals.value ? props.modelValue?.toFixed(computedRawDecimals.value) : props.modelValue;
    });

    const displayValue = computed(() => {
      return focus.value ? (rawValue.value ? `${rawValue.value}` : '') : formattedValue.value;
    });

    const computedStep = computed(() => {
      return props.step ?? (props.percentage ? 0.01 : 1);
    });

    const decrement = () => {
      const newValue = computedValue.value - computedStep.value;
      const emittedValue = props.min !== undefined ? Math.max(props.min, newValue) : newValue;
      if (emittedValue !== props.modelValue) {
        emitValue(emittedValue);
      }
    };

    const increment = () => {
      const newValue = computedValue.value + computedStep.value;
      const emittedValue = props.max !== undefined ? Math.min(props.max, newValue) : newValue;
      if (emittedValue !== props.modelValue) {
        emitValue(emittedValue);
      }
    };

    const onFocus = () => (focus.value = true);
    const onBlur = () => (focus.value = false);

    return {
      focus,
      sanitizedAttributes,
      computedDecimals,
      computedRawDecimals,
      computedValue,
      computedStep,
      displayValue,
      valueChanged,
      increment,
      decrement,
      onFocus,
      onBlur,
    };
  },
});
