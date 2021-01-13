import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonPlacement } from '../../../common/enums/NeonPlacement';
import { NeonTooltipStyle } from '../../../common/enums/NeonTooltipStyle';
import { NeonTooltipPlacementUtils } from '../../../common/utils/NeonTooltipPlacementUtils';
import { NeonOutlineStyle } from '../../../common/enums/NeonOutlineStyle';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

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

  private tooltipPlacement: NeonPlacement;
  open = false;

  /**
   * Id of the tooltip.
   */
  @Prop({ required: false })
  private id?: string;

  /**
   * Placement of the tooltip contents.
   */
  @Prop({ default: NeonPlacement.Top })
  private placement!: NeonPlacement;

  /**
   * Style of the tooltip, use <em>Tooltip</em> for a simple tooltip, use <em>Popover</em> for larger more complex
   * content.
   */
  @Prop({ default: NeonTooltipStyle.Tooltip })
  private tooltipStyle!: NeonTooltipStyle;

  /**
   * Style of the outline to use when the tooltip target has focus, use <em>text</em> for tooltips wrapping text and
   * <em>border</em> for tooltips wrapping "block" elements, e.g. buttons.
   */
  @Prop({ default: NeonOutlineStyle.Text })
  private outlineStyle!: NeonOutlineStyle;

  /**
   * Color of the tooltip target when it is focussed.
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  private outlineColor!: NeonFunctionalColor;

  /**
   * Restrict placement to within this container.
   */
  @Prop({ required: false })
  private placementContainer?: HTMLElement;

  public constructor() {
    super();
    this.tooltipPlacement = this.placement;
  }

  private recalculatePlacement() {
    this.tooltipPlacement = NeonTooltipPlacementUtils.calculatePlacement(
      this.$refs.tooltip,
      this.$refs.content,
      this.placement,
      this.placementContainer,
    );
  }

  openTooltip() {
    this.open = true;
    setTimeout(this.recalculatePlacement);
  }

  private closeTooltip() {
    this.open = false;
  }

  private toggleTooltip() {
    this.open ? this.closeTooltip() : this.openTooltip();
  }
}
