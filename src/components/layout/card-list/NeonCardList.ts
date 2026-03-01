import { computed, defineComponent } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonPagination from '@/components/navigation/pagination/NeonPagination.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import { NeonButtonStyle } from '@/common/enums/NeonButtonStyle';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonCardListModel } from '@/common/models/NeonCardListModel';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';
import type { NeonLoadOnDemandModel } from '@/common/models/NeonLoadOnDemandModel';
import type { NeonPaginationModel } from '@/common/models/NeonPaginationModel';
import type { NeonIdentifiable } from '@/common/models/NeonIdentifiable';

/**
 * Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This component
 * will display a list of items as cards with a count (x of y) and a <em>Show more</em> button to load more results.
 * There is also a slot for adding filtering or other content above the list. A slot is provided with card model & index
 * parameters for customising how to display the model for each card.
 */
export default defineComponent({
  name: 'NeonCardList',
  components: {
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
    items: { type: Array as () => Array<NeonCardListModel<NeonIdentifiable>>, required: true },
    /**
     * Specify a hover color for the cards.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
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
  ],
  setup(props, { emit }) {
    const ofLabel = computed(() => {
      if (!props.pagination) {
        return props.loadOnDemand?.ofLabel ?? 'of';
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
    };
  },
});
