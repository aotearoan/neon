import { computed, defineComponent } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonPagination from '@/components/navigation/pagination/NeonPagination.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
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

/**
 * TODO: consider refactoring since it's no longer just a layout component when selectable.
 * Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This component
 * will display a list of items as cards with a count (x of y) and a <em>Show more</em> button to load more results.
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
    NeonStack,
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
     * Specify a selection/hover color for the cards.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
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
    'toggleSelected',
  ],
  setup(props, { emit, slots }) {
    const ofLabel = computed(() => {
      if (!props.pagination && props.loadOnDemand) {
        return props.loadOnDemand.ofLabel ?? 'of';
      }

      return undefined;
    });

    const showMoreLabel = computed(() => {
      if (!props.pagination) {
        return props.loadOnDemand?.showMoreLabel ?? 'Show more';
      }

      return undefined;
    });

    const endOfResultsLabel = computed(() => {
      if (!props.pagination) {
        return props.loadOnDemand?.endOfResultsLabel ?? 'End of results';
      }

      return undefined;
    });

    const total = computed(() => props.loadOnDemand?.total ?? props.pagination?.total ?? 0);

    return {
      emit,
      n: NeonNumberUtils.formatNumber,
      NeonButtonStyle,
      NeonFunctionalColor,
      NeonSize,
      ofLabel,
      showMoreLabel,
      endOfResultsLabel,
      total,
      slots,
    };
  },
});
