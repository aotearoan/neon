import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonTreeMenuSectionModel } from '../../../common/models/NeonTreeMenuModel';

/**
 * Four level tree menu. This is useful for displaying a hierarchical navigation in NeonSideNav. The top level of the menu is the group (optional). The second level is expandable on click but will not navigate to a page. The third level is the page links and the fourth level is the fragment on that page.
 */
@Component({})
export default class NeonTreeMenu extends Vue {
  private url: string | null = null;

  /**
   * The tree model defining the menu.
   */
  @Prop({ required: true })
  model!: NeonTreeMenuSectionModel[];

  /**
   * Expand all nodes in the tree, this is useful for providing filtering (e.g. the Neon showcase side navigation menu).
   */
  @Prop({ default: false })
  public expandAll!: boolean;

  private onClick(key: string) {
    /**
     * Emitted when the user clicks on a menu item
     * @type {string} the key of the clicked on menu item.
     */
    this.$emit('click', key);
  }

  private fragment(anchor: string) {
    return anchor.toLowerCase().replace(/\s/g, '-');
  }

  @Watch('$route.path', { immediate: true })
  private onRouteChange(path: string) {
    this.url = path;
  }
}
