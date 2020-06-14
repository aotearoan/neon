import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '@/components/common/NeonFunctionalColor';

@Component
export default class NeonExpansionIndicator extends Vue {
  @Prop()
  public expanded?: boolean;

  @Prop({ default: NeonFunctionalColor.LowContrast })
  public color!: boolean;
}
