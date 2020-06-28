import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

@Component
export default class NeonExpansionIndicator extends Vue {
  @Prop()
  public expanded?: boolean;

  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: boolean;
}
