import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonTreeMenuModel } from './NeonTreeMenuModel';
import NeonTreeMenuItem from '@/components/navigation/tree-menu/item/NeonTreeMenuItem.vue';

@Component({
  components: {
    NeonTreeMenuItem,
  },
})
export default class NeonTreeMenu extends Vue {
  @Prop({ required: true })
  model!: NeonTreeMenuModel[];

  private onClick(key: string) {
    this.$emit('click', key);
  }
}
