import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonOrientation } from '../../../common/enums/NeonOrientation';
import { NeonResponsive } from '../../../common/enums/NeonResponsive';

@Component
export default class NeonCard extends Vue {
  @Prop({ default: NeonOrientation.Vertical })
  public orientation!: NeonOrientation;

  @Prop({ default: NeonResponsive.MobileLarge })
  public horizontalBreakpoint!: NeonResponsive;
}
