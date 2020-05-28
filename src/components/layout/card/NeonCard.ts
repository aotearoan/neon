import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonOrientation } from '../../common/NeonOrientation';
import { NeonResponsive } from '../../layout/grid/NeonResponsive';

@Component
export default class NeonCard extends Vue {
  @Prop({ default: NeonOrientation.Vertical })
  public orientation!: NeonOrientation;

  @Prop({ default: NeonResponsive.Mobile })
  public horizontalBreakpoint!: NeonResponsive.Mobile | NeonResponsive.Tablet;
}
