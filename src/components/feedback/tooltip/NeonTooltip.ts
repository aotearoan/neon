import { defineComponent, ref } from 'vue';
import { NeonPosition } from '@/common/enums/NeonPosition';
import { NeonTooltipStyle } from '@/common/enums/NeonTooltipStyle';
import { NeonTooltipPlacementUtils } from '@/common/utils/NeonTooltipPlacementUtils';
import { NeonOutlineStyle } from '@/common/enums/NeonOutlineStyle';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 * <p>
 *   Use <strong>NeonTooltip</strong> to display tooltips or popovers. It is recommended that tooltip content should be
 *   kept to a single line. Use the popover style for larger content.
 * </p>
 * <p>To use <strong>NeonTooltip</strong> provide the <em>target</em> and <em>content slots</em>.</p>
 */
export default defineComponent({
  name: 'NeonTooltip',
  props: {
    /**
     * Id of the tooltip.
     */
    id: { type: String, default: null },
    /**
     * Placement of the tooltip contents.
     */
    placement: { type: String as () => NeonPosition, default: NeonPosition.Top },
    /**
     * Style of the tooltip, use <em>Tooltip</em> for a simple tooltip, use <em>Popover</em> for larger more complex
     * content.
     */
    tooltipStyle: { type: String as () => NeonTooltipStyle, default: NeonTooltipStyle.Tooltip },
    /**
     * Style of the outline to use when the tooltip target has focus, use <em>text</em> for tooltips wrapping text and
     * <em>border</em> for tooltips wrapping "block" elements, e.g. buttons.
     */
    outlineStyle: { type: String as () => NeonOutlineStyle, default: NeonOutlineStyle.Text },
    /**
     * Color of the tooltip target when it is focussed.
     */
    outlineColor: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Primary },
    /**
     * Restrict placement to within this container.
     */
    placementContainer: { type: Object as () => HTMLElement, default: null },
  },
  setup(props) {
    const tooltip = ref<HTMLElement | null>(null);
    const content = ref<HTMLElement | null>(null);
    const tooltipPlacement = ref<NeonPosition | null>(props.placement);
    const open = ref(false);

    const recalculatePlacement = () => {
      tooltipPlacement.value = NeonTooltipPlacementUtils.calculatePlacement(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        tooltip.value!,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        content.value!,
        props.placement,
        props.placementContainer,
      );
    };

    const openTooltip = () => {
      open.value = true;
      setTimeout(recalculatePlacement);
    };

    const closeTooltip = () => {
      open.value = false;
    };

    const toggleTooltip = () => {
      open.value ? closeTooltip() : openTooltip();
    };

    return {
      tooltip,
      tooltipPlacement,
      content,
      open,
      toggleTooltip,
      closeTooltip,
      openTooltip,
    };
  },
});
