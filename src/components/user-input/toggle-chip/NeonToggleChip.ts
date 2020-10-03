import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { TranslateResult } from 'vue-i18n';

/**
 * <p>
 * A Toggle chip component used to indicate an on/off state in form inputs. This is equivalent to a checkbox. This is a
 * variation of a checkbox/switch which can be used as an on/off button to trigger an action or used in a group for
 * filtering.
 * </p>
 */
@Component({})
export default class NeonToggleChip extends Vue {
  /**
   * The togge chip model.
   */
  @Prop({ required: true })
  public value!: boolean;

  /**
   * The toggle label.
   */
  @Prop({ required: true })
  public label!: TranslateResult;

  /**
   * The size of the toggle chip.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The toggle chip color.
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * Whether or not to display a checked icon on the toggle chip when it is 'on'.
   */
  @Prop({ default: true })
  public showCheck!: boolean;

  /**
   * Disabled state of the toggle chip.
   */
  @Prop({ default: false })
  public disabled!: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private onInput(event: InputEvent) {
    const on = (event.target as HTMLInputElement).checked;
    /**
     * Emitted when the toggle chip is toggled on or off.
     *
     * @type {boolean} The state of the switch.
     */
    this.$emit('input', on);
  }
}
