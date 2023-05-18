import { defineComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
import type { NeonMenuModel } from '@/common/models/NeonMenuModel';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonDropdownMenu from '@/components/navigation/dropdown-menu/NeonDropdownMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import { NeonSize } from '@/common/enums/NeonSize';
import type { NeonPriorityMenuItem } from './NeonPriorityMenuItem';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { useRoute } from 'vue-router';

/**
 * <p>
 *   <strong>NeonMenu</strong> is a responsive aware menu that progressively collapses options into the mobile menu as
 *   the screen size gets smaller. This is a more flexible option than moving directly to a hamburger menu at tablet and
 *   below. It is a best effort approach to keep displaying the most important menu items for as long as possible,
 *   giving the user a better experience.
 * </p>
 */
export default defineComponent({
  name: 'NeonMenu',
  components: {
    NeonDropdownMenu,
    NeonLink,
    NeonIcon,
  },
  props: {
    /**
     * The menu configuration. This can have two levels, i.e. a top level horizontal menu and, if required, a dropdown
     * menu containing the second level. The highlighted 'active' menu is determined by the current Vue route.
     */
    menu: { type: Array as () => Array<NeonMenuModel>, required: true },
    /**
     * The menu highlight color (excludes low-contrast and neutral).
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
    /**
     * The menu size.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Large },
    /**
     * Whether to enable the priority menu which automatically calculates the available screen space and displays
     * as many of the menu items as possible, moving the remaining items into the overflow menu.
     */
    priorityMenuEnabled: { type: Boolean, default: true },
  },
  emits: [
    /**
     * Emitted when a user clicks on a menu item.
     * @type {string} the key of the menu item clicked.
     */
    'click',
  ],
  setup(props, { emit }) {
    const route = useRoute();
    const menuWrapper = ref<HTMLElement | null>(null);
    const menuItem = ref<Array<HTMLElement> | null>(null);
    const responsiveButton = ref<HTMLElement | null>(null);

    const menuItems = ref<Array<NeonPriorityMenuItem>>([]);
    const responsiveMenuItems = ref<Array<NeonMenuModel>>([]);
    const visible = ref<Array<string>>([]);

    const getWidth = (el: HTMLElement) => {
      const styles = window.getComputedStyle(el);
      const margin = parseFloat(styles.marginLeft || '0') + parseFloat(styles.marginRight || '0');
      return Math.ceil(el.offsetWidth + margin);
    };

    const toPriorityMenuItem = (key: string, element: HTMLElement): NeonPriorityMenuItem => {
      return {
        key,
        element,
        width: getWidth(element),
      };
    };

    const initMenuItems = () => {
      const results = props.menu.map(
        (item, index) => (menuItem.value && toPriorityMenuItem(item.key, menuItem.value[index])) || null,
      );
      menuItems.value = results.filter((item) => item !== null) as NeonPriorityMenuItem[];
    };

    const routeMatches = (path?: string) => {
      return path && route?.path.indexOf(path) >= 0;
    };

    const onClick = (key: string) => {
      emit('click', key);
    };

    const determineVisibleMenuItems = (
      menuWidth: number,
      responsiveMenuWidth: number,
      menuItems: NeonPriorityMenuItem[],
    ) => {
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
    };

    const refreshVisibleMenu = async () => {
      await nextTick();
      const menuWidth = (menuWrapper.value && getWidth(menuWrapper.value)) || 0;
      const responsiveMenuWidth = (responsiveButton.value && getWidth(responsiveButton.value)) || 0;
      visible.value = determineVisibleMenuItems(menuWidth, responsiveMenuWidth, menuItems.value);

      responsiveMenuItems.value = props.menu
        .filter((item) => visible.value.indexOf(item.key) < 0)
        .flatMap((item) => [
          { ...item, isGroup: item.children && item.children.length > 0 },
          ...(item.children || []).map((item) => ({ ...item, grouped: true })),
        ]);

      menuItems.value.forEach((item) => {
        item.element.hidden = visible.value.indexOf(item.key) < 0;
      });

      if (responsiveButton.value) {
        responsiveButton.value.hidden = menuItems.value.length === visible.value.length;
      }
    };

    onMounted(async () => {
      if (props.priorityMenuEnabled) {
        await nextTick();
        initMenuItems();
        await refreshVisibleMenu();
        window.addEventListener('resize', refreshVisibleMenu);
      }
    });

    onUnmounted(() => {
      if (props.priorityMenuEnabled) {
        window.removeEventListener('resize', refreshVisibleMenu);
      }
    });

    return {
      menuWrapper,
      menuItem,
      menuItems,
      responsiveButton,
      responsiveMenuItems,
      visible,
      onClick,
      routeMatches,
    };
  },
});
