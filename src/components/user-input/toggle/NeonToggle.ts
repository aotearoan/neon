import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonToggleModel } from '../../../common/models/NeonToggleModel';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonToggleStyle } from '../../../common/enums/NeonToggleStyle';
import { NeonOrientation } from '../../../common/enums/NeonOrientation';
import NeonIcon from '../../design/icon/NeonIcon.vue';

/**
 * <p>A toggle component for selecting one value from a range of options. This is equivalent to a radio button group. It can be styled as a <em>Toggle</em> or as <em>Radio buttons</em>.
 */
@Component({
  components: {
    NeonIcon,
  },
})
export default class NeonToggle extends Vue {
  /**
   * The name of the radio button group.
   */
  @Prop({ required: true })
  public name!: string;

  /**
   * The key of the selected option.
   */
  @Prop({ required: true })
  public value!: string;

  /**
   * The list of options to present to the user. See <a href="/models/NeonToggleModel">NeonToggleModel</a>.
   */
  @Prop({ required: true })
  public model!: NeonToggleModel[];

  /**
   * The style of toggle to display to the user. See <a href="/enums/NeonToggleStyle">NeonToggleStyle</a>.
   */
  @Prop({ default: NeonToggleStyle.Toggle })
  public toggleStyle!: NeonToggleStyle;

  /**
   * The size of the toggle. See <a href="/enums/NeonSize">NeonSize</a>.
   */
  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  /**
   * The orientation of the toggle if the style is a radio button group. See <a href="/enums/NeonOrientation">NeonOrientation</a>.
   */
  @Prop({ default: NeonOrientation.Vertical })
  public orientation!: NeonOrientation;

  /**
   * The color of the toggle. See <a href="/enums/NeonFunctionalColor">NeonFunctionalColor</a>.
   */
  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;

  /**
   * Whether or not the toggle is disabled.
   */
  @Prop()
  public disabled?: boolean;

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { input, ...listeners } = this.$listeners;
    return { listeners, input: this.onInput };
  }

  private onInput(event: InputEvent) {
    const key = (event.target as HTMLInputElement).value;
    /**
     * Event triggered when the selected value changes.
     *
     * @event input
     * @property {boolean} - The key of the selected <a href="/models/NeonToggleModel">NeonToggleModel</a>.
     */
    this.$emit('input', key);
  }
}
