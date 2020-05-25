import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTreeMenuModel } from '../NeonTreeMenuModel';

@Component
export default class NeonTreeMenuItem extends Vue {
  @Prop({ required: true })
  model!: NeonTreeMenuModel;

  @Prop({ default: 0 })
  depth!: number;
}
