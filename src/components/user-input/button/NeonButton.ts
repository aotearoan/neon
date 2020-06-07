import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonButtonStyle } from './NeonButtonStyle';
import { NeonHorizontalPosition } from '../../common/NeonHorizontalPosition';
import NeonIcon from '../../design/icon/NeonIcon.vue';
import NeonLink from '../../navigation/link/NeonLink.vue';
import { NeonState } from '../../common/NeonState';

@Component({
  components: {
    NeonLink,
    NeonIcon,
  },
})
export default class NeonButton extends Vue {
  @Prop()
  public href?: string;

  @Prop()
  public label?: TranslateResult;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: NeonFunctionalColor;

  @Prop()
  public icon?: string;

  @Prop({ default: NeonHorizontalPosition.Left })
  public iconPosition!: NeonHorizontalPosition;

  @Prop({ default: NeonButtonStyle.Solid })
  public buttonStyle!: NeonButtonStyle;

  @Prop({ default: NeonState.Ready })
  public state!: NeonState;

  @Prop()
  public disabled?: boolean;

  @Prop({ default: true })
  public outline?: boolean;

  @Prop()
  public circular?: boolean;

  @Prop()
  public fullWidth?: boolean;

  private get classes() {
    return [
      `neon-button--${this.size}`,
      `neon-button--${this.color}`,
      `neon-button--${this.buttonStyle}`,
      `neon-button--state-${this.state}`,
      {
        'neon--disabled neon-button--disabled': this.disabled,
        'neon-button--circular': this.circular,
        'neon-button--no-outline': !this.outline,
        'neon-button--full-width': this.fullWidth,
        'neon-button--with-icon neon-button--icon-only': !this.label && this.icon,
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
}
