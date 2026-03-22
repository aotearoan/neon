import { defineComponent, ref, watch } from 'vue';
import type { NeonBreadcrumbLink } from '@/model/navigation/breadcrumbs/NeonBreadcrumbLink';
import NeonCardList from '@/components/layout/card-list/NeonCardList.vue';
import NeonHeader from '@/components/presentation/header/NeonHeader.vue';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import type { NeonLoadOnDemandModel } from '@/model/layout/card-list/NeonLoadOnDemandModel';
import type { NeonPaginationModel } from '@/model/navigation/pagination/NeonPaginationModel';
import type { NeonCardListModel } from '@/model/layout/card-list/NeonCardListModel';
import type { NeonIdentifiable } from '@/model/common/entity/NeonIdentifiable';
import type { NeonSelectable } from '@/model/common/entity/NeonSelectable';
import NeonEmptyState from '@/components/presentation/empty-state/NeonEmptyState.vue';
import NeonSplashLoader from '@/components/feedback/splash-loader/NeonSplashLoader.vue';

/**
 * A page level layout component for displaying a list with a page header, filter bar, card list, pagination & an empty
 * state. Use this component directly inside the NeonPage <em>contents</em> slot.
 */
export default defineComponent({
  name: 'NeonListLayout',
  components: {
    NeonSplashLoader,
    NeonEmptyState,
    NeonCardList,
    NeonHeader,
  },
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
     * Breadcrumbs to display above the header.
     */
    breadcrumbs: { type: Array as () => NeonBreadcrumbLink[], default: () => [] },
    /**
     * Whether to display a back button
     */
    backButton: { type: Boolean, default: true },
    /**
     * Override the label for the back button
     */
    backLabel: { type: String, default: 'Back' },
    /**
     * Items to display as cards. Each item should be a NeonCardListModel.
     */
    items: {
      type: Array as () => Array<NeonCardListModel<NeonIdentifiable | (NeonIdentifiable & NeonSelectable)>>,
      required: true,
    },
    /**
     * Loading state for pagination, set when loading a new page.
     */
    loading: { type: Boolean },
    /**
     * Specify a selection/loading/hover color for the cards.
     */
    color: { type: String as () => NeonFunctionalColor, default: () => NeonFunctionalColor.Brand },
    /**
     * Make cards selectable.
     */
    selectable: { type: Boolean, default: false },
    /**
     * Model for configuring the on demand loading layout.
     */
    loadOnDemand: { type: Object as () => NeonLoadOnDemandModel },
    /**
     * Model for configuring pagination, either pagination or loadOnDemand should be provided.
     */
    pagination: { type: Object as () => NeonPaginationModel },
  },
  emits: [
    /**
     * Emitted when the 'Show more' button is clicked in "on demand" mode.
     * @type {void}
     */
    'show-more',
    /**
     * Emitted when in selectable mode and the selected state of a card is toggled.
     * @type {string, boolean} - the id of the card which is toggled & the new selected state.
     */
    'toggle-selected',
  ],
  setup(props, { emit, slots }) {
    const initializing = ref<boolean>(true);
    const showMore = () => {
      emit('show-more');
    };

    const toggleSelected = (id: string, selected: boolean) => {
      emit('toggle-selected', id, selected);
    };

    watch(
      () => props.items,
      () => {
        if (initializing.value) {
          initializing.value = false;
        }
      },
      { immediate: true },
    );

    return {
      initializing,
      slots,
      showMore,
      toggleSelected,
    };
  },
});
