import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSwitchStyle } from '../../../common/enums/NeonSwitchStyle';
import { TranslateResult } from 'vue-i18n';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';

/**
 * <p>
 * A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch supports
 * both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
 * </p>
 */
@Component({})
export default class NeonSwitch extends Vue {
  readonly $refs!: {
    checkbox: HTMLInputElement;
  };

  /**
   * The switch model.
   */
  @Prop({ required: true })
  public value!: boolean;

  /**
   * The switch label, the label can be optional only in the case the switch is part of a more complex component.
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * The indeterminate state of the checkbox.
   */
  @Prop({ default: false })
  public indeterminate!: boolean;

  /**
   * The size of the switch.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The switch color.
   */
  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  /**
   * Style the switch as a <em>Switch</em> or a <em>Checkbox</em>.
   */
  @Prop({ default: NeonSwitchStyle.Switch })
  public switchStyle!: NeonSwitchStyle;

  /**
   * The position of the switch label.
   */
  @Prop({ default: NeonHorizontalPosition.Right })
  public labelPosition!: NeonHorizontalPosition;

  /**
   * Disabled state of the switch.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  @Watch('indeterminate')
  private watchIndeterminate(to: boolean) {
    this.$refs.checkbox.indeterminate = to;
  }

  public mounted() {
    if (this.indeterminate) {
      this.watchIndeterminate(true);
    }
  }

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private toggleSwitch() {
    this.changeState(!this.value);
  }

  private onInput(event: InputEvent) {
    this.changeState((event.target as HTMLInputElement).checked);
  }

  private changeState(newState: boolean) {
    if (!this.disabled) {
      if (this.indeterminate) {
        this.emitIndeterminate(false);
        this.emitChecked(true);
      } else {
        this.emitChecked(newState);
      }
    }
  }

  private emitIndeterminate(indeterminate: boolean) {
    /**
     * Emitted when an indeterminate checkbox is toggled to checked.
     *
     * @type {boolean} The indeterminate state of the checkbox.
     */
    this.$emit('indeterminate-change', indeterminate);
  }

  private emitChecked(checked: boolean) {
    /**
     * Emitted when the switch is toggled checked or unchecked.
     *
     * @type {boolean} The checked state of the switch.
     */
    this.$emit('input', checked);
  }
}
