import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonNumberUtils } from '../../../common/utils/NeonNumberUtils';
import NeonSlider from '../slider/NeonSlider.vue';
import { TranslateResult } from 'vue-i18n';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 *
 */
@Component({
  components: {
    NeonSlider,
  },
})
export class NeonRangeSlider extends Vue {
  /**
   * This is the <em>v-model</em> property which is an array containing the lower and upper bounds of the selected range.
   */
  @Prop({ required: true })
  private value!: number[];

  /**
   * The list of ids for the lower bound and upper bound inputs, e.g. ['lowerBoundId', 'upperBoundId']
   */
  @Prop()
  private ids?: string[];

  /**
   * Slider color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  private color!: boolean;

  /**
   * Disable output display if set to false
   */
  @Prop({ default: true })
  private output!: boolean;

  /**
   * Disable legend if set to false
   */
  @Prop({ default: true })
  private legend!: boolean;

  /**
   * Disable tooltip if set to false
   */
  @Prop({ default: true })
  private tooltip!: boolean;

  /**
   * The size of steps between values the user can select. Defaults to 1 unless percentage = true in which case it will
   * default to 0.01.
   */
  @Prop()
  private step?: number;

  /**
   * The rounding precision for display purposes
   */
  @Prop()
  private decimals?: number;

  /**
   * A format template string used for display purposes. Use the placeholder {value} to reference the value in the
   * format string. e.g. value = 90, ${value} => $90
   */
  @Prop()
  private valueTemplate?: string;

  /**
   * Disable formatting, e.g. in the case of a year value -> display as 2020, not 2,020.
   */
  @Prop({ default: false })
  private disableFormatting!: boolean;

  /**
   * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%
   */
  @Prop({ default: false })
  private percentage!: boolean;

  /**
   * The minimum range value
   */
  @Prop({ default: 0 })
  private min!: number;

  /**
   * The maximum range value. The default value is 100 except when percentage = true the default is 1 (100%).
   */
  @Prop()
  private max?: number;

  /**
   * Component disabled state.
   */
  @Prop({ default: false })
  private disabled!: boolean;

  /**
   * ARIA label for the lower bound slider.
   */
  @Prop({ default: 'Lower bound' })
  private lowerBoundLabel!: TranslateResult;

  /**
   * ARIA label for the upper bound slider.
   */
  @Prop({ default: 'Upper bound' })
  private upperBoundLabel!: TranslateResult;

  private get formattedValues(): string[] {
    const options = {
      decimals: this.decimals,
      format: this.valueTemplate,
      percentage: this.percentage,
    };

    return !this.disableFormatting
      ? [NeonNumberUtils.formatNumber(this.value[0], options), NeonNumberUtils.formatNumber(this.value[1], options)]
      : [`${this.value[0]}`, `${this.value[1]}`];
  }

  private changeLowerBound(value: number) {
    const values = [...this.value];
    values[0] = +value;
    this.emitValues(values);
  }

  private changeUpperBound(value: number) {
    const values = [...this.value];
    values[1] = +value;
    this.emitValues(values);
  }

  private emitValues(values: number[]) {
    /**
     * Event triggered when the lower or upper bounds of the value change.
     *
     * @type {number[]} An array containing the raw numeric upper and lower bounds of the selection.
     */
    this.$emit('input', values);
  }
}

export default NeonRangeSlider;
