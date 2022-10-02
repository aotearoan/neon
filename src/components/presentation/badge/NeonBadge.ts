import { defineComponent } from 'vue';
import { NeonSize } from '@/common/enums/NeonSize';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import NeonIcon from '@/components/icon/NeonIcon.vue';

/**
 * A badge is a small square or circular component for representing user avatars. These can be in the form of an image, an icon or a two character string (e.g. the user's initials).
 */
export default defineComponent({
  name: 'NeonBadge',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * The two character <em>initials</em> to display on the badge.
     */
    label: { type: String, default: null },
    /**
     * URL of the image to display on the badge.
     */
    image: { type: String, default: null },
    /**
     * An icon to display on the badge.
     */
    icon: { type: String, default: null },
    /**
     * If true, render the badge as a circle, instead of a square.
     */
    circular: { type: Boolean, default: false },
    /**
     * The size of the badge - Small, Medium or Large.
     */
    size: { type: String as () => NeonSize, default: NeonSize.Medium },
    /**
     * The color of the badge. This is one of the provided NeonFunctionalColors.
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.LowContrast },
    /**
     * Alternate color for creating gradient badges. NOTE: can also be the same color as 'color'.
     */
    alternateColor: { type: String as () => NeonFunctionalColor, default: null },
    /**
     * Display the badge in the disable style
     */
    disabled: { type: Boolean, default: false },
    /**
     * Badge image alt text.
     */
    imageAlt: { type: String, default: 'Badge' },
  },
});
