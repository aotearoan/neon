import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonButtonStyle } from './NeonButtonStyle';
import { NeonHorizontalPosition } from '../../common/NeonHorizontalPosition';
import NeonIcon from '@/components/design/icon/NeonIcon.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';

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
