import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { NeonTreeMenuSectionModel } from '../../../common/models/NeonTreeMenuModel';
import NeonLink from '../link/NeonLink.vue';

/**
 * Three level tree menu. This is useful for displaying a hierarchical navigation in NeonSideNav.The top level of the
 * menu is expandable on click but will not navigate to a page. The second level is links to pages and the third level
 * is the fragments on that page.
 */
@Component({
  components: {
    NeonLink,
  },
})
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

  private click($event: KeyboardEvent) {
    const target = $event.target as HTMLSpanElement;
    if (target && target.parentElement) {
      target.parentElement.click();
    }
  }
}
