import { computed, defineComponent, useAttrs } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';

/**
 * <p>
 *   The <strong>NeonSlider</strong> component is the equivalent of an <strong>&lt;input type="range" /&gt;</strong>. In
 *   addition to this, there is support for automatic formatting the min, max and selected value plus options for
 *   percentage formatting and providing custom templates, e.g. currency formatting.
 * </p>
 * <p><strong>NeonNumber</strong> also supports all relevant properties found on an HTML &lt;input&gt;.</p>
 */
export default defineComponent({
  name: 'NeonSlider',
  props: {
    /**
     * The current input <em>value</em>.
     */
    modelValue: { type: Number, required: true },
    /**
     * id of the range input.
     */
    id: { type: String, required: false },
    /**
     * Slider color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * The locale used for display purposes. This defaults to the browser's locale if none is provided.
     */
    locale: { type: String, default: null },
    /**
     * Show/hide the output.
     */
    output: { type: Boolean, default: true },
    /**
     * Show/hide the legend.
     */
    legend: { type: Boolean, default: true },
    /**
     * Show/hide the tooltip.
     */
    tooltip: { type: Boolean, default: true },
    /**
     * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%.
     */
    percentage: { type: Boolean, default: false },
    /**
     * The size of steps between values the user can select. The default value is 1 except when percentage = true the
     * default is 0.01 (1%).
     */
    step: { type: Number, required: false },
    /**
     * The rounding precision for display purposes.
     */
    decimals: { type: Number, required: false },
    /**
     * A template string used for formatting the display value. Use the placeholder {value} to reference the value in the
     * template string. e.g. value = 90, ${value} => $90.
     */
    valueTemplate: { type: String, required: false },
    /**
     * Disable formatting, e.g. in the case of a year value -> display as 2020, not 2,020.
     */
    disableFormatting: { type: Boolean, default: false },
    /**
     * The minimum range value.
     */
    min: { type: Number, default: 0 },
    /**
     * The maximum range value. The default value is 100 except when percentage = true the default is 1 (100%).
     */
    max: { type: Number, required: false },
    /**
     * The lower bound within the range of values.
     * @ignore
     */
    lowerBound: { type: Number, required: false },
    /**
     * The upper bound within the range of values.
     * @ignore
     */
    upperBound: { type: Number, required: false },
    /**
     * Component disabled state.
     */
    disabled: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Event triggered when the value changes.
     *
     * @type {number} the raw selected numeric value.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const attrs = useAttrs();

    const sanitizedAttributes = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { ...sanitized } = attrs;
      return sanitized;
    });

    const formatNumber = (value: number) => {
      return !props.disableFormatting
        ? NeonNumberUtils.formatNumber(
            value,
            {
              decimals: props.decimals,
              format: props.valueTemplate,
              percentage: props.percentage,
            },
            props.locale,
          )
        : value;
    };

    const formattedMin = computed(() => formatNumber(props.min));
    const computedMax = computed(() => (props.max !== undefined ? props.max : props.percentage ? 1 : 100));
    const formattedMax = computed(() => formatNumber(computedMax.value));
    const formattedValue = computed(() => formatNumber(props.modelValue));
    const computedStep = computed(() => (props.step !== undefined ? props.step : props.percentage ? 0.01 : 1));

    const changeValue = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let newValue = +input.value;
      // adjust for bounds if set
      if (props.lowerBound !== undefined && newValue < props.lowerBound) {
        newValue = props.lowerBound;
      } else if (props.upperBound !== undefined && newValue > props.upperBound) {
        newValue = props.upperBound;
      }
      emit('update:modelValue', newValue);
    };

    return {
      sanitizedAttributes,
      formattedMin,
      formattedMax,
      formattedValue,
      computedMax,
      computedStep,
      changeValue,
    };
  },
});
