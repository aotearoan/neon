import { computed, defineComponent, ref } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonPagination from '@/components/navigation/pagination/NeonPagination.vue';
import { NeonButtonStyle } from '@/model/user-input/button/NeonButtonStyle';
import { NeonSize } from '@/model/common/size/NeonSize';
import { NeonFunctionalColor } from '@/model/common/color/NeonFunctionalColor';
import type { NeonCardListModel } from '@/model/layout/card-list/NeonCardListModel';
import { NeonNumberUtils } from '@/utils/common/number/NeonNumberUtils';
import type { NeonLoadOnDemandModel } from '@/model/layout/card-list/NeonLoadOnDemandModel';
import type { NeonPaginationModel } from '@/model/navigation/pagination/NeonPaginationModel';
import type { NeonIdentifiable } from '@/model/common/entity/NeonIdentifiable';
import type { NeonSelectable } from '@/model/common/entity/NeonSelectable';
import NeonSelectableCard from './selectable-card/NeonSelectableCard.vue';
import NeonSplashLoader from '@/components/feedback/splash-loader/NeonSplashLoader.vue';
import NeonLoadingStateCard from '@/components/feedback/loading-state-card/NeonLoadingStateCard.vue';
import { NeonState } from '@/model/common/state/NeonState';
import { NeonCardListStyle } from '@/model/layout/card-list/NeonCardListStyle';

/**
 * TODO: consider refactoring since it's no longer just a layout component when selectable.
 * Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This component
 * will display a list of items as cards with a count (Showing x of y) and a <em>Load more</em> button to load more results.
 * There is also a slot for adding filtering or other content above the list. A slot is provided with card model & index
 * parameters for customising how to display the model for each card.
 */
export default defineComponent({
  name: 'NeonCardList',
  components: {
    NeonSelectableCard,
    NeonPagination,
    NeonButton,
    NeonInline,
    NeonLink,
    NeonLoadingStateCard,
    NeonSplashLoader,
  },
  props: {
    /**
     * Items to display as cards. Each item should be a NeonCardListModel.
     */
    items: {
      type: Array as () => Array<NeonCardListModel<NeonIdentifiable | (NeonIdentifiable & NeonSelectable)>>,
      required: true,
    },
    /**
     * * Specify a selection, hover & pagination accent color for the cards.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Specify the card list layout, either a 'List' of cards with 100% width or a responsive 'Grid' of cards.
     */
    listStyle: { type: String as () => NeonCardListStyle, default: () => NeonCardListStyle.List },
    /**
     * Make cards selectable.
     */
    selectable: { type: Boolean, default: false },
    /**
     * Model for configuring the on-demand loading layout.
     */
    loadOnDemand: { type: Object as () => NeonLoadOnDemandModel },
    /**
     * Model for configuring pagination, either pagination or loadOnDemand should be provided.
     */
    pagination: { type: Object as () => NeonPaginationModel },
    /**
     * Show loading state when loading new items.
     */
    loading: { type: Boolean },
  },
  emits: [
    /**
     * Emitted when pagination is enabled and the user clicks on a page link (useful for paginated lists which are not
     * the main focus of the page, i.e. should not be deep linked).
     *
     * @type {number} The new page number.
     */
    'page-change',
    /**
     * Emitted when the 'Load more' button is clicked in "on demand" mode.
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
    const cards = ref<HTMLDivElement | undefined>(undefined);

    const resultCountLabel = computed(() => {
      if (!props.pagination && props.loadOnDemand) {
        const template = props.loadOnDemand.resultCountLabel ?? 'Showing {count} of {total}';
        return template
          .replace('{count}', NeonNumberUtils.formatNumber(props.items.length))
          .replace('{total}', NeonNumberUtils.formatNumber(props.loadOnDemand.total));
      }

      return undefined;
    });

    const showMoreLabel = computed(() => {
      if (!props.pagination) {
        return props.loadOnDemand?.showMoreLabel ?? 'Load more';
      }

      return undefined;
    });

    const total = computed(() => props.loadOnDemand?.total ?? props.pagination?.total ?? 0);

    const onPageChange = (newPage: number) => {
      if (cards.value?.scrollTo) {
        cards.value.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior,
        });
      }

      emit('page-change', newPage);
    };

    return {
      emit,
      n: NeonNumberUtils.formatNumber,
      NeonButtonStyle,
      NeonFunctionalColor,
      NeonSize,
      showMoreLabel,
      resultCountLabel,
      total,
      slots,
      cards,
      onPageChange,
      NeonState,
    };
  },
});
