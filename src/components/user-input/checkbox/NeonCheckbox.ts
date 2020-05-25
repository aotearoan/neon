import { Component, Prop, Vue } from 'vue-property-decorator';
import { TranslateResult } from 'vue-i18n';
import { NeonFunctionalColor } from '../../common/NeonFunctionalColor';
import { NeonCheckboxStyle } from './NeonCheckboxStyle';

@Component({})
export default class NeonCheckbox extends Vue {
  @Prop({ required: true })
  public value!: boolean;

  @Prop({ required: true })
  public label!: TranslateResult;

  @Prop({ default: NeonFunctionalColor.Primary })
  public color!: NeonFunctionalColor;

  @Prop({ default: NeonCheckboxStyle.Checkbox })
  public checkboxStyle!: NeonFunctionalColor;

  @Prop()
  public disabled?: boolean;
}
