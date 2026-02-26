import { defineComponent } from 'vue';
import type { NeonMenuItem } from '@/common/models/NeonMenuItem';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonDropdownMenu from '@/components/navigation/dropdown-menu/NeonDropdownMenu.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import { useRoute } from 'vue-router';

/**
 * <p>
 *   <strong>NeonMobileMenu</strong> is a menu designed for mobile navigation. It is designed to be placed at the bottom
 *   of the screen to maximise mobile usability.
 * </p>
 */
export default defineComponent({
  name: 'NeonMobileMenu',
  components: {
    NeonDropdownMenu,
    NeonLink,
    NeonIcon,
  },
  props: {
    /**
     * The menu configuration. The highlighted 'active' menu is determined by the current Vue route.
     */
    menu: { type: Array as () => Array<NeonMenuItem>, required: true },
    /**
     * The menu color.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
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

    const routeMatches = (path: string) => {
      return route?.path.indexOf(path) >= 0;
    };

    const onClick = (key: string) => {
      emit('click', key);
    };

    return {
      onClick,
      routeMatches,
    };
  },
});
