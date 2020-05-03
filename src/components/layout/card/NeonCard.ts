import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonOrientation } from '../../common/NeonOrientation';

@Component
export default class NeonCard extends Vue {
  @Prop({ default: NeonOrientation.VERTICAL })
  public orientation!: NeonOrientation;
}
