import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonInputMode } from '../../../common/enums/NeonInputMode';
import NeonButton from '../button/NeonButton.vue';
import NeonFieldGroup from '../field-group/NeonFieldGroup.vue';
import NeonInput from '../input/NeonInput.vue';
import { TranslateResult } from 'vue-i18n';
import { NeonNumberUtils } from '../../../common/utils/NeonNumberUtils';

/**
 * <p>
 *   The <strong>NeonNumber</strong> component is the equivalent of an <strong>&lt;input type="number" /&gt;</strong>
 *   with -/+ spin buttons. In addition, it supports formatting as a percentage or with a provided custom template and
 *   also pasting of values in the user's locale, e.g. 6,543.12.
 * </p>
 * <p><strong>NeonNumber</strong> supports all of the properties found on an HTML &lt;input&gt;.</p>
 */
@Component({
  components: {
    NeonButton,
    NeonFieldGroup,
    NeonInput,
  },
})
export default class NeonNumber extends Vue {
  private focus = false;

  /**
   * The value of the number input. Either a valid number or null.
   */
  @Prop({ required: true })
  public value!: number | null;

  /**
   * The minimum value the input can accept.
   */
  @Prop()
  public min?: number;

  /**
   * The maximum value the input can accept.
   */
  @Prop()
  public max?: number;

  /**
   * The step value for the spin buttons.
   */
  @Prop()
  public step?: number;

  /**
   * The component color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * The component size.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * Whether or not the component is disabled.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * Enable/disable direct editing of the value.
   */
  @Prop({ default: true })
  public editable!: boolean;

  /**
   * Show/hide spin buttons. NOTE: The user can still use up/down arrow keys when the input has focus.
   */
  @Prop({ default: true })
  public spinButtons!: boolean;

  /**
   * Automatically applies % formatting, e.g. if the value = 0.15 it will be displayed as 15%.
   */
  @Prop({ default: false })
  public percentage!: boolean;

  /**
   * The rounding precision for display formatting.
   */
  @Prop()
  public decimals?: number;

  /**
   * A template string used for formatting the value for display. Use the placeholder {value} to reference the value in
   * the template string. e.g. value = 90, ${value} => $90.
   */
  @Prop()
  private valueTemplate?: string;

  /**
   * The HTML inputmode of the component. Either 'numeric' or 'decimal'.
   */
  @Prop({ default: NeonInputMode.Numeric })
  public inputmode!: NeonInputMode;

  /**
   * ARIA label for the increment spinner button.
   */
  @Prop({ default: 'Increment' })
  public incrementLabel!: TranslateResult;

  /**
   * ARIA label for the decrement spinner button.
   */
  @Prop({ default: 'Decrement' })
  public decrementLabel!: TranslateResult;

  private get sanitizedAttributes() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { min, max, step, color, size, disabled, inputmode, ...attrs } = this.$attrs;
    return attrs;
  }

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, blur, focus, ...listeners } = this.$listeners;
    return listeners;
  }

  private valueChanged(value: string) {
    const parsedValue = NeonNumberUtils.parseNumber(value);
    const newValue =
      value !== '' && value !== null
        ? Math.max(Math.min(parsedValue, this.max ?? Number.MAX_SAFE_INTEGER), this.min ?? Number.MIN_SAFE_INTEGER)
        : null;
    if (newValue === null || !isNaN(parsedValue)) {
      this.emitValue(newValue);
    }
  }

  private get computedValue() {
    const newValue = this.value !== null ? +this.value : this.min || 0;
    return this.computedRawDecimals !== undefined ? Number(newValue.toFixed(this.computedRawDecimals)) : newValue;
  }

  private decrement() {
    const newValue = this.computedValue - this.computedStep;
    this.emitValue(this.min !== undefined ? Math.max(this.min, newValue) : newValue);
  }

  private increment() {
    const newValue = this.computedValue + this.computedStep;
    this.emitValue(this.max !== undefined ? Math.min(this.max, newValue) : newValue);
  }

  private get formattedValue() {
    return this.value !== null &&
      (this.valueTemplate !== undefined || this.computedDecimals !== undefined || this.percentage !== undefined)
      ? NeonNumberUtils.formatNumber(this.value, {
          decimals: this.computedDecimals,
          format: this.valueTemplate,
          percentage: this.percentage,
        })
      : this.value;
  }

  private get rawValue() {
    return this.computedRawDecimals ? this.value?.toFixed(this.computedRawDecimals) : this.value;
  }

  private emitValue(value: number | null) {
    /**
     * Emitted when the user changes the value of the number via the increment/decrement buttons or manually entering
     * the value.
     * @type {number | null} the current value or null if the value has been cleared.
     */
    this.$emit('input', value);
  }

  private onFocus() {
    this.focus = true;
  }

  private onBlur() {
    this.focus = false;
  }

  private get computedStep() {
    return this.step ?? (this.percentage ? 0.01 : 1);
  }

  private get computedDecimals() {
    return this.decimals ?? (this.percentage ? 0 : undefined);
  }

  private get computedRawDecimals() {
    return this.percentage && this.computedDecimals !== undefined ? this.computedDecimals + 2 : this.computedDecimals;
  }
}
