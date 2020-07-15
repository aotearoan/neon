import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class NeonLink extends Vue {
  @Prop()
  public href?: string;

  @Prop({ default: false })
  public noStyle!: boolean;

  @Prop({ default: false })
  public externalIndicator!: boolean;

  private get routerUrl() {
    return this.href && this.href.indexOf('//') === -1 ? this.href : undefined;
  }

  private onClick() {
    this.$emit('click');
  }
}
