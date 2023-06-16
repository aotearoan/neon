import { defineComponent } from 'vue';
import NeonCard from '@/components/layout/card/NeonCard.vue';
import NeonCardBody from '@/components/layout/card/body/NeonCardBody.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 * Represents a card in a card list.
 */
export default defineComponent({
  name: 'NeonCardListCard',
  components: {
    NeonCard,
    NeonCardBody,
  },
  emits: [
    /**
     * Emitted when a card is clickable & the card is clicked & not disabled.
     * @type {void}
     */
    'click',
  ],
  props: {
    /**
     * Specify a hover color for the card.
     */
    color: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Render card as disabled.
     */
    disabled: { type: Boolean, default: false },
    /**
     * Specify card is clickable. This will return click events when the card is clicked on. NOTE: use the href in the
     * card model instead of clickable=true if card is a link.
     */
    clickable: { type: Boolean, default: false },
  },
  setup(_props, { emit }) {
    return {
      emit,
      NeonFunctionalColor,
    };
  },
});
