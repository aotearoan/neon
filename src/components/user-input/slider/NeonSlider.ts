import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonNumberUtils } from '../../../common/utils/NeonNumberUtils';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

/**
 * <p>
 *   The <strong>NeonSlider</strong> component is the equivalent of an <strong>&lt;input type="range" /&gt;</strong>. In
 *   addition to this, there is support for automatic formatting the min, max and selected value plus options for
 *   percentage formatting and providing custom templates, e.g. currency formatting.
 * </p>
 * <p><strong>NeonNumber</strong> also supports all relevant properties found on an HTML &lt;input&gt;.</p>
 */
@Component
export class NeonSlider extends Vue {
  /**
   * The current input <em>value</em>.
   */
  @Prop({ required: true })
  private value!: number;

  /**
   * Id of the range input.
   */
  @Prop()
  private id?: string;

  /**
   * Slider color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  private color!: boolean;

  /**
   * Show/hide the output.
   */
  @Prop({ default: true })
  private output!: boolean;

  /**
   * Show/hide the legend.
   */
  @Prop({ default: true })
  private legend!: boolean;

  /**
   * Show/hide the tooltip.
   */
  @Prop({ default: true })
  private tooltip!: boolean;

  /**
   * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%.
   */
  @Prop({ default: false })
  private percentage!: boolean;

  /**
   * The size of steps between values the user can select. The default value is 1 except when percentage = true the
   * default is 0.01 (1%).
   */
  @Prop()
  private step?: number;

  /**
   * The rounding precision for display purposes.
   */
  @Prop()
  private decimals?: number;

  /**
   * A template string used for formatting the display value. Use the placeholder {value} to reference the value in the
   * template string. e.g. value = 90, ${value} => $90.
   */
  @Prop()
  private valueTemplate?: string;

  /**
   * Disable formatting, e.g. in the case of a year value -> display as 2020, not 2,020.
   */
  @Prop({ default: false })
  private disableFormatting!: boolean;

  /**
   * The minimum range value.
   */
  @Prop({ default: 0 })
  private min!: number;

  /**
   * The maximum range value. The default value is 100 except when percentage = true the default is 1 (100%).
   */
  @Prop()
  private max?: number;

  /**
   * The lower bound within the range of values.
   * @ignore
   */
  @Prop()
  private lowerBound?: number;

  /**
   * The upper bound within the range of values.
   * @ignore
   */
  @Prop()
  private upperBound?: number;

  /**
   * Component disabled state.
   */
  @Prop({ default: false })
  private disabled!: boolean;

  private get sanitizedAttributes() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, type, value, step, min, max, disabled, ...attrs } = this.$attrs;
    return attrs;
  }

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return listeners;
  }

  private get formattedMin() {
    return this.formatNumber(this.min);
  }

  private get formattedMax() {
    return this.formatNumber(this.computedMax);
  }

  private get formattedValue() {
    return this.formatNumber(this.value);
  }

  private get computedMax() {
    return this.max !== undefined ? this.max : this.percentage ? 1 : 100;
  }

  private get computedStep() {
    return this.step !== undefined ? this.step : this.percentage ? 0.01 : 1;
  }

  private formatNumber(value: number) {
    return !this.disableFormatting
      ? NeonNumberUtils.formatNumber(value, {
          decimals: this.decimals,
          format: this.valueTemplate,
          percentage: this.percentage,
        })
      : value;
  }

  private changeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    let newValue = +input.value;
    // adjust for bounds if set
    if (this.lowerBound !== undefined && newValue < this.lowerBound) {
      newValue = this.lowerBound;
    } else if (this.upperBound !== undefined && newValue > this.upperBound) {
      newValue = this.upperBound;
    }
    /**
     * Event triggered when the value changes.
     *
     * @type {number} the raw selected numeric value.
     */
    this.$emit('input', newValue);
  }
}

export default NeonSlider;
