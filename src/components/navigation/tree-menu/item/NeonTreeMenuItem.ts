import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTreeMenuModel } from '../NeonTreeMenuModel';
import NeonLink from '@/components/navigation/link/NeonLink.vue';

@Component({
  components: {
    NeonLink,
  },
})
export default class NeonTreeMenuItem extends Vue {
  @Prop({ required: true })
  model!: NeonTreeMenuModel;

  @Prop({ default: 0 })
  depth!: number;

  private onClick(key: string) {
    this.$emit('click', key);
  }
}
