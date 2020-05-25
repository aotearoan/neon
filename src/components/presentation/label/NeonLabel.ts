import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonLabelSize } from './NeonLabelSize';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonIconPosition } from '../../design/icon/NeonIconPosition';

@Component({})
export default class NeonLabel extends Vue {
  @Prop()
  public label?: TranslateResult;

  @Prop()
  public icon?: string;

  @Prop({ default: NeonIconPosition.Left })
  public iconPosition?: NeonIconPosition;

  @Prop()
  public outline?: boolean;

  @Prop({ default: NeonLabelSize.Small })
  public size!: NeonLabelSize;

  @Prop({ default: NeonFunctionalColor.Neutral })
  public color!: NeonFunctionalColor;
}
