import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonPlacement } from '../../../common/enums/NeonPlacement';
import { NeonTooltipStyle } from '../../../common/enums/NeonTooltipStyle';
import { NeonTooltipPlacementUtils } from '../../../common/utils/NeonTooltipPlacementUtils';

/**
 * <p>
 *   Use <strong>NeonTooltip</strong> to display tooltips or popovers. It is recommended that tooltip content should be
 *   kept to a single line. Use the popover style for larger content.
 * </p>
 * <p>To use <strong>NeonTooltip</strong> provide the <em>target</em> and <em>content slots</em>.</p>
 */
@Component
export default class NeonTooltip extends Vue {
  $refs!: {
    tooltip: HTMLElement;
    content: HTMLElement;
  };

  private open = false;
  private tooltipPlacement: NeonPlacement;

  /**
   * Placement of the tooltip contents.
   */
  @Prop({ default: NeonPlacement.Top })
  private placement!: NeonPlacement;

  /**
   * Style of the tooltip, use <em>Tooltip</em> for a simple tooltip, use <em>Popover</em> for larger more complex content.
   */
  @Prop({ default: NeonTooltipStyle.Tooltip })
  private tooltipStyle!: NeonTooltipStyle;

  /**
   * Restrict placement to within this container.
   */
  @Prop({ required: false })
  private placementContainer?: HTMLElement;

  public constructor() {
    super();
    this.tooltipPlacement = this.placement;
  }

  private mounted() {
    this.$refs.tooltip.addEventListener('mouseenter', this.openTooltip);
    this.$refs.tooltip.addEventListener('mouseleave', this.closeTooltip);
  }

  private beforeDestroy() {
    this.$refs.tooltip.removeEventListener('mouseenter', this.openTooltip);
    this.$refs.tooltip.removeEventListener('mouseleave', this.closeTooltip);
  }

  private recalculatePlacement() {
    if (this.open) {
      this.tooltipPlacement = NeonTooltipPlacementUtils.calculatePlacement(
        this.$refs.tooltip,
        this.$refs.content,
        this.placement,
        this.placementContainer,
      );
    }
  }

  private openTooltip() {
    this.open = true;
    setTimeout(this.recalculatePlacement);
  }

  private closeTooltip() {
    this.open = false;
  }
}
