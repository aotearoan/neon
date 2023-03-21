import { computed, defineComponent } from 'vue';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';
import NeonSlider from '@/components/user-input/slider/NeonSlider.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 *
 */
export default defineComponent({
  name: 'NeonRangeSlider',
  components: {
    NeonSlider,
  },
  props: {
    /**
     * This is the <em>v-model</em> property which is an array containing the lower and upper bounds of the selected range.
     */
    modelValue: { type: Array as () => Array<number>, required: true },
    /**
     * The list of ids for the lower bound and upper bound inputs, e.g. ['lowerBoundId', 'upperBoundId']
     */
    ids: { type: Array as () => Array<string>, required: false },

    /**
     * Slider color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * Disable output display if set to false
     */
    output: { type: Boolean, default: true },
    /**
     * Disable legend if set to false
     */
    legend: { type: Boolean, default: true },
    /**
     * Disable tooltip if set to false
     */
    tooltip: { type: Boolean, default: true },
    /**
     * The size of steps between values the user can select. Defaults to 1 unless percentage = true in which case it will
     * default to 0.01.
     */
    step: { type: Number, required: false },
    /**
     * The rounding precision for display purposes
     */
    decimals: { type: Number, required: false },
    /**
     * A format template string used for display purposes. Use the placeholder {value} to reference the value in the
     * format string. e.g. value = 90, ${value} => $90
     */
    valueTemplate: { type: String, required: false },
    /**
     * Disable formatting, e.g. in the case of a year value -> display as 2020, not 2,020.
     */
    disableFormatting: { type: Boolean, default: false },
    /**
     * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%
     */
    percentage: { type: Boolean, default: false },
    /**
     * The minimum range value
     */
    min: { type: Number, default: 0 },
    /**
     * The maximum range value. The default value is 100 except when percentage = true the default is 1 (100%).
     */
    max: { type: Number, required: false },
    /**
     * Component disabled state.
     */
    disabled: { type: Boolean, default: false },
    /**
     * ARIA label for the lower bound slider.
     */
    lowerBoundLabel: { type: String, default: 'Lower bound' },
    /**
     * ARIA label for the upper bound slider.
     */
    upperBoundLabel: { type: String, default: 'Upper bound' },
  },
  emits: [
    /**
     * Event triggered when the lower or upper bounds of the value change.
     *
     * @type {number[]} An array containing the raw numeric upper and lower bounds of the selection.
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const formattedValues = computed((): string[] => {
      const options = {
        decimals: props.decimals,
        format: props.valueTemplate,
        percentage: props.percentage,
      };

      return !props.disableFormatting
        ? [
            NeonNumberUtils.formatNumber(props.modelValue[0], options),
            NeonNumberUtils.formatNumber(props.modelValue[1], options),
          ]
        : [`${props.modelValue[0]}`, `${props.modelValue[1]}`];
    });

    const emitValues = (values: number[]) => {
      emit('update:modelValue', values);
    };

    const changeLowerBound = (value: number) => {
      const values = props.modelValue.map((v) => v);
      values[0] = +value;
      emitValues(values);
    };

    const changeUpperBound = (value: number) => {
      const values = props.modelValue.map((v) => v);
      values[1] = +value;
      emitValues(values);
    };

    return {
      formattedValues,
      changeLowerBound,
      changeUpperBound,
      emitValues,
    };
  },
});
