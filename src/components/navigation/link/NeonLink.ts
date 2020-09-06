import { Component, Prop, Vue } from 'vue-property-decorator';

/**
 * An HTML anchor component which handles VueRouter links (internal), href links (external) and clickable links (no href).
 */
@Component({})
export default class NeonLink extends Vue {
  /**
   * The href of the link, this can be an internal (relative or absolute) or an external link.
   */
  @Prop()
  public href?: string;

  /**
   * set to true if you would like a completely unstyled link. This is useful for creating a complex component which may use NeonLink.
   */
  @Prop({ default: false })
  public noStyle!: boolean;

  /**
   * Display an external link icon to the right of the link indicating clicking it will take the user to another site.
   */
  @Prop({ default: false })
  public externalIndicator!: boolean;

  private get routerUrl() {
    return this.href && this.href.indexOf('//') === -1 ? this.href : undefined;
  }

  private onClick() {
    /**
     * <p>Emitted when the user clicks on the link. This is only useful when there is no <em>href</em> provided otherwise page navigation supersedes this event.</p>
     * @type {void}
     */
    this.$emit('click');
  }
}
