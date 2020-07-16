import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';

@Component
export default class NeonNotificationCounter extends Vue {
  @Prop({ default: false })
  public active!: boolean;

  @Prop()
  public count?: number;

  @Prop()
  public color?: NeonFunctionalColor;
}
