import { Component, Prop, Vue } from 'vue-property-decorator';
import { NeonMenuModel } from '../../../common/models/NeonMenuModel';
import NeonLink from '../link/NeonLink.vue';
import NeonDropdownMenu from '../dropdown-menu/NeonDropdownMenu.vue';
import NeonDropdownMenuClass from '../dropdown-menu/NeonDropdownMenu';
import { NeonFunctionalColor } from '../../../common/enums/NeonFunctionalColor';
import { NeonSize } from '../../../common/enums/NeonSize';
import { NeonPriorityMenuItem } from './NeonPriorityMenuItem';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';

/**
 * <p>
 *   <strong>NeonMenu</strong> is a responsive aware menu that progressively collapses options into the mobile menu as
 *   the screen size gets smaller. This is a more flexible option than moving directly to a hamburger menu at tablet and
 *   below. It is a best effort approach to keep displaying the most important menu items for as long as possible,
 *   giving the user a better experience.
 * </p>
 */
@Component({
  components: {
    NeonDropdownMenu,
    NeonLink,
    NeonIcon,
  },
})
export default class NeonMenu extends Vue {
  readonly $refs!: {
    menu: HTMLElement;
    menuItem: HTMLElement[];
    responsiveMenu: NeonDropdownMenuClass;
  };

  private menuItems: NeonPriorityMenuItem[] = [];
  private responsiveMenuItems: NeonMenuModel[] = [];
  private visible: string[] = [];

  /**
   * The menu configuration. This can have two levels, i.e. a top level horizontal menu and, if required, a dropdown
   * menu containing the second level. The highlighted 'active' menu is determined by the current Vue route.
   */
  @Prop({ required: true })
  public menu!: NeonMenuModel[];

  /**
   * The menu highlight color (excludes low-contrast and neutral).
   */
  @Prop({ default: NeonFunctionalColor.Brand })
  public color!: NeonFunctionalColor;

  /**
   * The menu size.
   */
  @Prop({ default: NeonSize.Large })
  public size!: NeonSize;

  /**
   * Whether or not to enable the priority menu which automatically calculates the available screen space and displays
   * as many of the menu items as possible, moving the remaining items to the mobile menu.
   */
  @Prop({ default: true })
  priorityMenuEnabled!: boolean;

  private mounted() {
    if (this.priorityMenuEnabled) {
      this.$nextTick();
      this.initMenuItems();
      this.refreshVisibleMenu();
      window.addEventListener('resize', this.refreshVisibleMenu);
    }
  }

  private destroyed() {
    if (this.priorityMenuEnabled) {
      window.removeEventListener('resize', this.refreshVisibleMenu);
    }
  }

  private refreshVisibleMenu() {
    this.$nextTick();
    const menuWidth = this.getWidth(this.$refs.menu);
    const responsiveMenuElement = this.$refs.responsiveMenu.dropdown.button;
    const responsiveMenuWidth = this.getWidth(responsiveMenuElement);
    this.visible = this.determineVisibleMenuItems(menuWidth, responsiveMenuWidth, this.menuItems);

    this.responsiveMenuItems = this.menu
      .filter((item) => this.visible.indexOf(item.key) < 0)
      .flatMap((item) => [
        { ...item, isGroup: item.children && item.children.length > 0 },
        ...(item.children || []).map((item) => ({ ...item, grouped: true })),
      ]);

    this.menuItems.forEach((item) => {
      this.$set(item.element, 'hidden', this.visible.indexOf(item.key) < 0);
    });

    this.$set(responsiveMenuElement, 'hidden', this.menuItems.length === this.visible.length);
  }

  private initMenuItems() {
    this.menuItems = [...this.menu].map((item, index) => this.toPriorityMenuItem(item.key, this.$refs.menuItem[index]));
  }

  private toPriorityMenuItem(key: string, element: HTMLElement): NeonPriorityMenuItem {
    return {
      key,
      element,
      width: this.getWidth(element),
    };
  }

  private determineVisibleMenuItems(menuWidth: number, responsiveMenuWidth: number, menuItems: NeonPriorityMenuItem[]) {
    const itemWidthSum = menuItems.map((item) => item.width).reduce((acc: number, width) => (acc ? acc + width : 0));

    // no responsive menu
    if (itemWidthSum <= menuWidth - responsiveMenuWidth) {
      return menuItems.map((menuItem) => menuItem.key);
    }

    // with responsive menu
    let availableWidth = menuWidth - responsiveMenuWidth;
    let visible: string[] = [];

    for (let i = 0; i < menuItems.length; i = i + 1) {
      const menuItem = menuItems[i];
      if (availableWidth < menuItem.width) {
        // if the second menu item should be hidden, also hide the first one to improve how it looks
        if (i === 1) {
          visible = visible.filter((key) => key !== menuItems[0].key);
        }
        break;
      }

      availableWidth = availableWidth - menuItem.width;
      visible.push(menuItem.key);
    }

    return visible;
  }

  private getWidth(el: HTMLElement) {
    const styles = window.getComputedStyle(el);
    const margin = parseFloat(styles.marginLeft || '0') + parseFloat(styles.marginRight || '0');
    return Math.ceil(el.offsetWidth + margin);
  }

  private routeMatches(path: string) {
    return this.$route.path.indexOf(path) >= 0;
  }

  private onClick(key: string) {
    /**
     * Emitted when a user clicks on a menu item.
     * @type {string} the key of the menu item clicked.
     */
    this.$emit('click', key);
  }
}
