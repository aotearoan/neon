import { computed, defineComponent, useSlots } from 'vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';

/**
 * NeonPageContainer is a component for the layout of basic (non-card based) page content. It is designed to be placed
 * directly inside the NeonPage <em>contents</em> slot.
 * <br />
 * <br />
 * Features include support for sticky button placement and hiding the nav bar.
 */
export default defineComponent({
  name: 'NeonPageContainer',
  components: {
    NeonIcon,
  },
  props: {
    /** The page title */
    title: { type: String },
    /** Hide the navbar */
    hideNav: { type: Boolean, default: false },
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
    };
  },
});
