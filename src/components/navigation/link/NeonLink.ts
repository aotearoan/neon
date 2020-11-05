import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonOutlineStyle } from '../../../common/enums/NeonOutlineStyle';

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
   * Style of the outline to use when the link has focus, use <em>text</em> for wrapping text content and
   * <em>border</em> for tooltips wrapping "block" elements, e.g. buttons.
   */
  @Prop({ default: NeonOutlineStyle.Text })
  private outlineStyle!: NeonOutlineStyle;

  /**
   * Display an external link icon to the right of the link indicating clicking it will take the user to another site.
   */
  @Prop({ default: false })
  public externalIndicator!: boolean;

  private get routerUrl() {
    return this.href?.indexOf('//') === -1 ? this.href : undefined;
  }

  private get sanitizedListeners() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { click, ...sanitized } = this.$listeners;
    return sanitized;
  }

  private onClick() {
    /**
     * Emitted when the user triggers the link by clicking on it or hitting Enter when the link has focus.
     * @type {void}
     */
    this.$emit('click');
  }
}
