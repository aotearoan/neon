import { defineComponent, useAttrs } from 'vue';
import { NeonOrientation } from '@/common/enums/NeonOrientation';
import { NeonResponsive } from '@/common/enums/NeonResponsive';
import { NeonSize } from '@/common/enums/NeonSize';

/**
 * Card component used for the layout of content within a grid or page.
 */
export default defineComponent({
  name: 'NeonCard',
  props: {
    /**
     * Change the orientation of a card to horizontal. This is useful for creating long narrow cards spanning the full
     * page. NOTE: For responsiveness, horizontal cards are automatically transformed to vertical cards at lower screen
     * sizes.
     */
    orientation: { type: String as () => NeonOrientation, default: NeonOrientation.Vertical },
    /**
     * The size of the card, this only adjusts the padding where more compact cards are required.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * Whether to display the internal borders between card sections for horizontal cards
     */
    horizontalBorders: { type: Boolean, default: true },
    /**
     * The breakpoint to switch horizontal cards to vertical cards. Accepts <em>Mobile | MobileLarge | Tablet</em> ONLY.
     * @type NeonResponsive
     */
    horizontalBreakpoint: { type: String as () => NeonResponsive, default: NeonResponsive.MobileLarge },
    /**
     * If true, do not implement a responsive breakpoint for a horizontal card.
     */
    noBreak: { type: Boolean, default: false },
  },
  setup(_props) {
    const attrs = useAttrs();

    return {
      attrs,
      NeonOrientation,
    };
  },
});
