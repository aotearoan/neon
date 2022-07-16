import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonNumberUtils } from '../../../common/utils/NeonNumberUtils';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * A component for displaying linear progress. The progress can be displayed as a percentage (default) or
 * as a counter (x / y).
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonLinearProgress extends Vue {
  private static PROGRESS_ANIMATION_INTERVAL = 25;
  private calculatedValue = 0;

  /**
   * If no total is provided (default) the current % completion is expressed as a %, e.g. 0.15 = 15%,
   * In the case of a total being provided this is the count of items from the total, i.e. the 'x' in 'x / y '.
   */
  @Prop({ required: true })
  public value!: number;

  /**
   * When the total is provided the display is 'x / y' where total is the 'y' in 'x / y'.
   */
  @Prop()
  public total?: number;

  /**
   * A label to display above the progress bar
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * The progress bar color
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  /**
   * The alternate color for displaying the progress as a gradient
   */
  @Prop()
  public alternateColor?: NeonFunctionalColor;

  /**
   * The component size, NeonSize.Small or NeonSize.Medium
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * Display the text output indicating the current state of progress
   */
  @Prop({ default: true })
  public output!: boolean;

  /**
   * Display an icon on completion
   */
  @Prop()
  public completedIcon?: string;

  /**
   * Specify the icon color (default = alternate-color || color)
   */
  @Prop()
  public completedIconColor?: NeonFunctionalColor;

  /**
   * The decimals to use for rounding
   */
  @Prop({ default: 0 })
  public decimals!: number;

  @Watch('value', { immediate: true })
  private calculateValue(value: number) {
    this.incrementValue(value);
  }

  private incrementValue(value: number) {
    setTimeout(() => {
      this.calculatedValue = Math.min(value, this.calculatedValue + this.increment);
      if (value > this.calculatedValue) {
        this.incrementValue(value);
      }
    }, NeonLinearProgress.PROGRESS_ANIMATION_INTERVAL);
  }

  private get increment() {
    return this.total ? 1 : 0.01;
  }

  private get computedPercentage() {
    return (100.0 * this.calculatedValue) / (this.total || 1.0);
  }

  private get computedTotal() {
    return this.total || 100.0;
  }

  private get completed() {
    return this.computedPercentage >= 100;
  }

  private get computedOutput() {
    return this.total
      ? `${NeonNumberUtils.formatNumber(this.calculatedValue, { decimals: this.decimals })} / ${this.total}`
      : `${NeonNumberUtils.formatNumber(this.computedPercentage, { decimals: this.decimals })}%`;
  }
}
