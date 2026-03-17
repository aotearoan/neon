import { defineComponent, nextTick, onMounted, ref } from 'vue';
import NeonIcon from '@/components/presentation/icon/NeonIcon.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonSwiper from '@/components/layout/swiper/NeonSwiper.vue';
import type { NeonBreadcrumbLink } from '@/model/navigation/breadcrumbs/NeonBreadcrumbLink';

/**
 * The <em>NeonBreadcrumbs</em> component displays an optional list of breadcrumbs with an optional back button. This is
 * used in the <em>NeonHeader</em> component to display the current page hierarchy.
 */
export default defineComponent({
  name: 'NeonBreadcrumbs',
  components: { NeonIcon, NeonLink, NeonSwiper },
  props: {
    /**
     * The list of breadcrumbs to display.
     */
    breadcrumbs: { type: Array as () => NeonBreadcrumbLink[], default: () => [] },
    /**
     * Whether to display the back button.
     */
    backButton: { type: Boolean, default: true },
    /**
     * The label override for the back button.
     */
    backLabel: { type: String, default: 'Back' },
  },
  setup(props) {
    const linksRef = ref<HTMLDivElement | null>(null);
    const back = async () => history.back();

    onMounted(async () => {
      if (props.breadcrumbs.length > 0) {
        await nextTick();
        setTimeout(() => {
          if (linksRef.value) {
            const neonLink = linksRef.value.querySelector<HTMLAnchorElement>('.neon-link:last-child');
            neonLink?.scrollIntoView({
              behavior: 'auto',
              inline: 'end',
            });
          }
        });
      }
    });

    return {
      back,
      linksRef,
    };
  },
});
