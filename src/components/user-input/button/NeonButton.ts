import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonButtonStyle } from './NeonButtonStyle';
import { NeonIconPosition } from '../../design/icon/NeonIconPosition';

@Component({})
export default class NeonButton extends Vue {
  @Prop()
  public href?: string;

  @Prop()
  public label?: TranslateResult;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;

  @Prop()
  public icon?: string;

  @Prop({ default: NeonIconPosition.Left })
  public iconPosition!: NeonIconPosition;

  @Prop({ default: NeonButtonStyle.Solid })
  public buttonStyle!: NeonButtonStyle;

  @Prop()
  public disabled?: boolean;

  @Prop()
  public circular?: boolean;

  @Prop()
  public fullWidth?: boolean;

  private get classes() {
    return [
      `neon-button--${this.size}`,
      `neon-button--${this.color}`,
      `neon-button--${this.buttonStyle}`,
      {
        'neon--disabled neon-button--disabled': this.disabled,
        'neon-button--circular': this.circular,
        'neon-button--full-width': this.fullWidth,
        'neon-button--icon-only': !this.label && this.icon,
        'neon-button--icon-left': this.label && this.icon && this.iconPosition === 'left',
        'neon-button--icon-right': this.label && this.icon && this.iconPosition === 'right',
      },
    ];
  }
}
