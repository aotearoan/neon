import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonActionMenuModel } from '../../../common/models/NeonActionMenuModel';
import NeonLink from '../../navigation/link/NeonLink.vue';

@Component({
  components: {
    NeonLink,
  },
})
export default class NeonActionMenu extends Vue {
  @Prop({ required: true })
  model!: NeonActionMenuModel[];

  @Prop({ required: true })
  value!: string;

  private onClick(key: string) {
    if (this.value !== key) {
      this.$emit('input', key);
    }
  }
}
