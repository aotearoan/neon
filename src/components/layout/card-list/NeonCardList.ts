import { defineComponent } from 'vue';
import NeonButton from '@/components/user-input/button/NeonButton.vue';
import NeonCardListCard from './card/NeonCardListCard.vue';
import NeonInline from '@/components/layout/inline/NeonInline.vue';
import NeonLink from '@/components/navigation/link/NeonLink.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';
import { NeonButtonStyle } from '@/common/enums/NeonButtonStyle';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonCardListModel } from '@/common/models/NeonCardListModel';
import { NeonNumberUtils } from '@/common/utils/NeonNumberUtils';

/**
 * Represent lists of objects as cards. This is intended to be a more responsive replacement for tables. This component
 * will display a list of items as cards with a count (x of y) and a <em>Show more</em> button to load more results.
 * There is also a slot for adding filtering or other content above the list. A slot is provided with card model & index
 * parameters for customising how to display the model for each card.
 */
export default defineComponent({
  name: 'NeonCardList',
  components: {
    NeonButton,
    NeonCardListCard,
    NeonInline,
    NeonLink,
    NeonStack,
  },
  props: {
    /**
     * Model for a card in the list. This is passed through to the #card slot allowing the parent component to provide
     * the card layout.
     */
    model: { type: Array as () => Array<NeonCardListModel>, required: true },
    /**
     * For pagination - the total count of records including those not displayed.
     */
    total: { type: Number, default: null },
    /**
     * Specify a hover color for the cards.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Specify cards are clickable. This will return click events when cards are clicked on. NOTE: use the href in the
     * card model instead of clickable=true if cards are links.
     */
    clickable: { type: Boolean, default: false },
    /**
     * override the default 'x of y' text.
     */
    ofLabel: { type: String, default: 'of' },
    /**
     * override the 'Show more' text.
     */
    showMoreLabel: { type: String, default: 'Show more' },
    /**
     * override the 'End of results' text.
     */
    endOfResultsLabel: { type: String, default: 'End of results' },
  },
  emits: [
    /**
     * Emitted when the 'Show more' button is clicked.
     * @type {void}
     */
    'show-more',
    /**
     * Emitted when a cards are clickable & a card is clicked & not disabled.
     * @type index {number}
     */
    'click',
  ],
  setup(_props, { emit }) {
    const n = (value: number) => NeonNumberUtils.formatNumber(value);

    return {
      emit,
      n,
      NeonButtonStyle,
      NeonFunctionalColor,
      NeonSize,
    };
  },
});
