import { computed, defineComponent, useSlots } from 'vue';
import NeonHeader from '@/components/presentation/header/NeonHeader.vue';
import type { NeonBreadcrumbLink } from '@/model/navigation/breadcrumbs/NeonBreadcrumbLink';
import { NeonHeaderLevel } from '@/model/presentation/header/NeonHeaderLevel';

/**
 * NeonBasicLayout is a component for a basic page layout with a header (NeonHeader) followed by the page content.
 */
export default defineComponent({
  name: 'NeonBasicLayout',
  components: {
    NeonHeader,
  },
  props: {
    /** The page title */
    title: { type: String },
    /** The page subtitle */
    subtitle: { type: String },
    /**
     * Breadcrumbs to display above the header.
     */
    breadcrumbs: { type: Array as () => NeonBreadcrumbLink[], default: () => [] },
    /**
     * Whether to display a back button.
     */
    backButton: { type: Boolean, default: true },
    /**
     * Override the label for the back button.
     */
    backLabel: { type: String, default: 'Back' },
    /** Sticky button support on mobile */
    stickyButtons: { type: Boolean, default: false },
  },
  setup(props) {
    const slots = useSlots();

    const hasHeader = computed(() => {
      return props.title || slots.header || slots.actions;
    });

    return {
      hasHeader,
      NeonHeaderLevel,
    };
  },
});
