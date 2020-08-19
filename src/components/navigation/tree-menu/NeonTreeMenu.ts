import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonTreeMenuSectionModel } from '../../../common/models/NeonTreeMenuModel';

@Component({})
export default class NeonTreeMenu extends Vue {
  private url: string | null = null;

  @Prop({ default: false })
  public expandAll!: boolean;

  @Prop({ required: true })
  model!: NeonTreeMenuSectionModel[];

  private onClick(key: string) {
    this.$emit('click', key);
  }

  private fragment(anchor: string) {
    return anchor.toLowerCase().replace(/\s/g, '-');
  }

  private scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView();
    }
  }

  @Watch('$route.path')
  private onRouteChange(path: string) {
    this.url = path;
  }
}
