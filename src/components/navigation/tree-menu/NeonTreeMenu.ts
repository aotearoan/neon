import { defineComponent, ref, watch } from 'vue';
import type { NeonTreeMenuSectionModel } from '@/model/navigation/tree-menu/NeonTreeMenuSectionModel';
import NeonIcon from '../../presentation/icon/NeonIcon.vue';
import NeonLink from '../link/NeonLink.vue';
import { useRoute } from 'vue-router';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';

/**
 * Three level tree menu. This is useful for displaying a hierarchical navigation in NeonSideNav.The top level of the
 * menu is expandable on click but will not navigate to a page. The second level is links to pages and the third level
 * is the fragments on that page.
 */
export default defineComponent({
  name: 'NeonTreeMenu',
  components: {
    NeonIcon,
    NeonLink,
  },
  props: {
    /**
     * Id for the tree menu. This is used specifically to namespace the menu icons so that icon paths are unique. A
     * typical scenario is the tree menu is used in a side nav and also a drawer which means icon ids will be duplicated
     * unless they're namespaced.
     */
    id: { type: String, required: true },
    /**
     * The tree model defining the menu.
     */
    modelValue: { type: Array as () => Array<NeonTreeMenuSectionModel>, required: true },
    /**
     * The menu highlight color (excludes low-contrast and neutral).
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Brand },
    /**
     * Expand all nodes in the tree, this is useful for providing filtering (e.g. the Neon showcase side navigation menu).
     */
    expandAll: { type: Boolean, default: false },
  },
  emits: [
    /**
     * Emitted when the user toggles expansion of a section or item
     * @type {Array<NeonTreeMenuSectionModel>} the updated model with the section or item expanded/collapsed.
     */
    'update:modelValue',
    /**
     * Emitted when the user clicks on a link to navigate to another page. This is useful to e.g. close a side-nav
     * drawer containing the menu when there is a navigation event.
     * @type {string} the link the user clicked on.
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

    const onSectionClick = (key: string) => {
      const newModel = props.modelValue.map((section) => {
        return {
          ...section,
          children: section.children?.map((child) => ({ ...child })),
          expanded: section.key === key ? !section.expanded : section.expanded,
        };
      });

      emit('update:modelValue', newModel);
    };

    const onItemClick = (key: string) => {
      const newModel = props.modelValue.map((section) => {
        return {
          ...section,
          children: section.children?.map((child) => {
            return {
              ...child,
              expanded: child.key === key ? !child.expanded : child.expanded,
            };
          }),
        };
      });

      emit('update:modelValue', newModel);
    };

    watch(
      () => route.path,
      (value) => (url.value = value),
      { immediate: true },
    );

    return {
      url,
      emit,
      click,
      onSectionClick,
      onItemClick,
    };
  },
});
