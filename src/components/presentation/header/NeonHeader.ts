import { computed, defineComponent } from 'vue';
import NeonBreadcrumbs from '@/components/navigation/breadcrumbs/NeonBreadcrumbs.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import type { NeonBreadcrumbLink } from '@/model/navigation/breadcrumbs/NeonBreadcrumbLink';
import { NeonHeaderLevel } from '@/model/presentation/header/NeonHeaderLevel';

/**
 * A header component consisting of a title, an optional subtitle, actions, labels and breadcrumbs. This component
 * supports different levels of headers including Page, Section & SubSection (`NeonHeaderLevel`).
 */
export default defineComponent({
  name: 'NeonHeader',
  components: { NeonBreadcrumbs, NeonInline, NeonStack },
  props: {
    /**
     * The title of the header.
     */
    title: { type: String, required: true },
    /**
     * The subtitle of the header.
     */
    subtitle: { type: String },
    /**
     * The level of the header. Allows the header to be used in multiple contexts with different sizes.
     */
    level: { type: String as () => NeonHeaderLevel, default: () => NeonHeaderLevel.Page },
    /**
     * Breadcrumbs to display above the header (Page level only).
     */
    breadcrumbs: { type: Array as () => NeonBreadcrumbLink[], default: () => [] },
    // TODO: revert the default to true when the back button is implemented on all pages in all apps
    /**
     * Whether to display a back button (Page level only).
     */
    backButton: { type: Boolean, default: false },
    /**
     * Override the label for the back button (Page level only).
     */
    backLabel: { type: String, default: 'Back' },
  },
  setup(props, { slots }) {
    const titleLevel = computed<string>(() => {
      switch (props.level) {
        case NeonHeaderLevel.SubSection:
          return 'h3';
        case NeonHeaderLevel.Section:
          return 'h2';
        default:
          return 'h1';
      }
    });

    return {
      titleLevel,
      NeonHeaderLevel,
      slots,
    };
  },
});
