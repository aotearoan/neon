import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTreeMenuSectionModel } from '../../../common/models/NeonTreeMenuModel';

@Component({})
export default class NeonTreeMenu extends Vue {
  @Prop({ default: false })
  public expandAll!: boolean;

  @Prop({ required: true })
  model!: NeonTreeMenuSectionModel[];

  private onClick(key: string) {
    this.$emit('click', key);
  }
}
