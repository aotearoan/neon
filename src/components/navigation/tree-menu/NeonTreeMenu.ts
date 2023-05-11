import { defineComponent, ref, watch } from 'vue';
import type { NeonTreeMenuSectionModel } from '@/common/models/NeonTreeMenuSectionModel';
import NeonLink from '../link/NeonLink.vue';
import { useRoute } from 'vue-router';

/**
 * Three level tree menu. This is useful for displaying a hierarchical navigation in NeonSideNav.The top level of the
 * menu is expandable on click but will not navigate to a page. The second level is links to pages and the third level
 * is the fragments on that page.
 */
export default defineComponent({
  name: 'NeonTreeMenu',
  components: {
    NeonLink,
  },
  props: {
    /**
     * The tree model defining the menu.
     */
    model: { type: Array as () => Array<NeonTreeMenuSectionModel>, required: true },
    /**
     * Expand all nodes in the tree, this is useful for providing filtering (e.g. the Neon showcase side navigation menu).
     */
    expandAll: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the user clicks on a menu item
     * @type {string} the key of the clicked on menu item.
     */
    'click',
  ],
  setup(props, { emit }) {
    const route = useRoute();
    const url = ref<string | null>(null);

    const click = ($event: KeyboardEvent) => {
      const target = $event.target as HTMLSpanElement;
      if (target.parentElement) {
        target.parentElement.click();
      }
    };

    const onClick = (key: string) => {
      emit('click', key);
    };

    const fragment = (anchor: string) => {
      return anchor.toLowerCase().replace(/\s/g, '-');
    };

    watch(
      () => route.path,
      (value) => (url.value = value),
      { immediate: true },
    );

    return {
      url,
      click,
      onClick,
      fragment,
    };
  },
});
