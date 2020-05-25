import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class NeonLink extends Vue {
  @Prop()
  public href?: string;

  @Prop()
  public noStyle?: boolean;

  private get routerUrl() {
    return this.href && this.href.indexOf('//') === -1 ? this.href : undefined;
  }
}
