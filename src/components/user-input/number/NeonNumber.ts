import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonInputMode } from '../../../common/enums/NeonInputMode';
import NeonButton from '../button/NeonButton.vue';
import NeonFieldGroup from '../field-group/NeonFieldGroup.vue';
import NeonInput from '../input/NeonInput.vue';
import { TranslateResult } from 'vue-i18n';

/**
 * <p>
 *   The <strong>NeonNumber</strong> component is the equivalent of an <strong>&lt;input type="number" /&gt;</strong>
 *   with -/+ spin buttons. This is intended for simple (unformatted) number inputs where there is a step, min and/or
 *   max. For all other number inputs it is recommended to use
 *   <a href="/user-input/input"><strong>NeonInput</strong></a> directly and customize it to suit your needs.
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
  /**
   * The value of the number input. Either a valid number or null.
   */
  @Prop({ required: true })
  value!: number | null;

  /**
   * The minimum value the input can accept.
   */
  @Prop()
  min?: number;

  /**
   * The maximum value the input can accept.
   */
  @Prop()
  max?: number;

  /**
   * The step value for the spin buttons.
   */
  @Prop({ default: 1 })
  step?: number;

  /**
   * The component color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  color!: NeonFunctionalColor;

  /**
   * The component size.
   */
  @Prop({ default: NeonSize.Medium })
  size!: NeonSize;

  /**
   * Whether or not the component is disabled.
   */
  @Prop({ default: false })
  disabled!: boolean;

  /**
   * The HTML inputmode of the component. Either 'numeric' or 'decimal'.
   */
  @Prop({ default: NeonInputMode.Numeric })
  inputmode!: NeonInputMode;

  /**
   * ARIA label for the increment spinner button.
   */
  @Prop({ default: 'Increment' })
  incrementLabel!: TranslateResult;

  /**
   * ARIA label for the decrement spinner button.
   */
  @Prop({ default: 'Decrement' })
  decrementLabel!: TranslateResult;

  private get sanitizedAttributes() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { min, max, step, color, size, disabled, inputmode, ...attrs } = this.$attrs;
    return attrs;
  }

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return listeners;
  }

  private decrement() {
    const newValue = (this.value || this.min || 0) - (this.step || 1);
    this.$emit('input', this.min !== undefined ? Math.max(this.min, newValue) : newValue);
  }

  private increment() {
    const newValue = (this.value || this.min || 0) + (this.step || 1);
    this.$emit('input', this.max !== undefined ? Math.min(this.max, newValue) : newValue);
  }
}
