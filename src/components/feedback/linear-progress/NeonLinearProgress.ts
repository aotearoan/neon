import { computed, defineComponent, ref, watch } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';

/**
 * A component for displaying linear progress. The progress can be displayed as a percentage (default) or
 * as a counter (x / y).
 */
export default defineComponent({
  name: 'NeonLinearProgress',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * If no total is provided (default) the current % completion is expressed as a %, e.g. 0.15 = 15%,
     * In the case of a total being provided this is the count of items from the total, i.e. the 'x' in 'x / y '.
     */
    modelValue: { type: Number, required: true },
    /**
     * When the total is provided the display is 'x / y' where total is the 'y' in 'x / y'.
     */
    total: { type: Number, default: null },
    /**
     * A label to display above the progress bar
     */
    label: { type: String, default: null },
    /**
     * The progress bar color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * The alternate color for displaying the progress as a gradient
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * The component size, NeonSize.Small or NeonSize.Medium
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The locale used for display purposes. This defaults to the browser's locale if none is provided.
     */
    locale: { type: String, default: null },
    /**
     * Display the text output indicating the current state of progress
     */
    output: { type: Boolean, default: true },
    /**
     * Display an icon on completion
     */
    completedIcon: { type: String, default: null },
    /**
     * Specify the icon color (default = alternate-color || color)
     */
    completedIconColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * The decimals to use for rounding
     */
    decimals: { type: Number, default: 0 },
  },
  setup(props) {
    const progressAnimationInterval = 25;
    const calculatedValue = ref(0);

    const increment = computed(() => {
      return props.total ? 1 : 0.01;
    });

    const computedPercentage = computed(() => {
      return (100.0 * calculatedValue.value) / (props.total || 1.0);
    });

    const computedTotal = computed(() => {
      return props.total || 100.0;
    });

    const completed = computed(() => {
      return computedPercentage.value >= 100;
    });

    const computedOutput = computed(() => {
      return props.total
        ? `${NeonNumberUtils.formatNumber(calculatedValue.value, { decimals: props.decimals }, props.locale)} / ${
          props.total
        }`
        : `${NeonNumberUtils.formatNumber(computedPercentage.value, { decimals: props.decimals }, props.locale)}%`;
    });

    const incrementValue = (value: number) => {
      setTimeout(() => {
        calculatedValue.value = Math.min(value, calculatedValue.value + increment.value);
        if (value > calculatedValue.value) {
          incrementValue(value);
        }
      }, progressAnimationInterval);
    };

    watch(
      () => props.modelValue,
      (value: number) => {
        incrementValue(value);
      },
      { immediate: true },
    );

    return {
      calculatedValue,
      computedTotal,
      completed,
      computedOutput,
      computedPercentage,
    };
  },
});
