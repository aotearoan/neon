import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonButtonSize } from '../../../common/enums/NeonButtonSize';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonButtonStyle } from '../../../common/enums/NeonButtonStyle';
import { NeonHorizontalPosition } from '../../../common/enums/NeonHorizontalPosition';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonLink from '../../navigation/link/NeonLink.vue';
import { NeonState } from '../../../common/enums/NeonState';

/**
 * A button component. Renders an HTML button or, if an href is provided, renders using NeonLink in the style of a button. NeonButton supports all events and attributes of HTML buttons, e.g, @click.
 */
@Component({
  components: {
    NeonLink,
    NeonIcon,
  },
})
export default class NeonButton extends Vue {
  /**
   * Optional href for rendering a button as a link
   */
  @Prop()
  public href?: string;

  /**
   * The text to display on a button
   */
  @Prop()
  public label?: TranslateResult;

  /**
   * The button size
   */
  @Prop({ default: NeonButtonSize.Medium })
  public size!: NeonButtonSize;

  /**
   * The button color
   */
  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  /**
   * Optional icon to display
   */
  @Prop()
  public icon?: string;

  /**
   * Position of the icon if combined with text
   */
  @Prop({ default: NeonHorizontalPosition.Left })
  public iconPosition!: NeonHorizontalPosition;

  /**
   * The style of button
   */
  @Prop({ default: NeonButtonStyle.Solid })
  public buttonStyle!: NeonButtonStyle;

  /**
   * Provide button states of <em>ready, loading, success or error</em> which change the display of the button (with icons) to reflect the state.
   */
  @Prop({ default: NeonState.Ready })
  public state!: NeonState;

  /**
   * Whether or not the button is disabled
   */
  @Prop({ default: false })
  public disabled!: boolean;

  /**
   * Whether or not to display a button outline when the button has focus
   */
  @Prop({ default: true })
  public outline!: boolean;

  /**
   * Make the button circular. NOTE: This is only for icon only buttons.
   */
  @Prop()
  public circular?: boolean;

  /**
   * Make a button extend to the full width of the parent container.
   */
  @Prop()
  public fullWidth?: boolean;

  /**
   * INTERNAL USE ONLY: display a NeonExpansionIndicator on the button (used for dropdown buttons)
   * @ignore
   */
  @Prop({ default: false })
  public indicator!: boolean;

  /**
   * INTERNAL USE ONLY: display the NeonExpansionIndicator on the button as <em>open</em> or <em>closed</em>.
   * @ignore
   */
  @Prop()
  public indicatorExpanded?: boolean;

  private get classes() {
    return [
      `neon-button--${this.size}`,
      `neon-button--${this.color}`,
      `neon-button--${this.buttonStyle}`,
      `neon-button--state-${this.state}`,
      {
        'neon-button--disabled': this.disabled,
        'neon-button--circular': this.circular,
        'neon-button--no-outline': !this.outline,
        'neon-button--full-width': this.fullWidth,
        'neon-button--with-icon neon-button--icon-only': !this.label && this.icon && !this.indicator,
        'neon-button--with-icon neon-button--icon-left': this.label && this.icon && this.iconPosition === 'left',
        'neon-button--with-icon neon-button--icon-right': this.label && this.icon && this.iconPosition === 'right',
      },
    ];
  }

  get iconName() {
    switch (this.state) {
      case NeonState.Loading:
        return 'loading';
      case NeonState.Success:
        return 'check';
      case NeonState.Error:
        return 'times';
      default:
        return this.icon;
    }
  }

  private click() {
    (this.$el as HTMLAnchorElement).click();
  }
}
