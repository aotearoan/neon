import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonSize } from '../../common/NeonSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';

@Component({})
export default class NeonBadge extends Vue {
  @Prop()
  public label?: TranslateResult;

  @Prop()
  public image?: string;

  @Prop()
  public icon?: string;

  @Prop()
  public circular?: boolean;

  @Prop({ default: NeonSize.Medium })
  public size!: NeonSize;

  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;
}
