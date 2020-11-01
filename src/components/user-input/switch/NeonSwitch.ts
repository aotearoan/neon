import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSwitchStyle } from '../../../common/enums/NeonSwitchStyle';
import { TranslateResult } from 'vue-i18n';

/**
 * <p>
 * A Switch or Checkbox component used to indicate an on/off state. This is equivalent to a checkbox. The switch supports
 * both <em>Switch</em> and <em>Checkbox</em> styles which can be used in different scenarios.
 * </p>
 */
@Component({})
export default class NeonSwitch extends Vue {
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
   * Disabled state of the switch.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private toggleSwitch() {
    if (!this.disabled) {
      this.emitChecked(!this.value);
    }
  }

  private onInput(event: InputEvent) {
    this.emitChecked((event.target as HTMLInputElement).checked);
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
