import { defineComponent } from 'vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';

/**
 * A component for displaying notification counts to the user.
 */
export default defineComponent({
  name: 'NeonNotificationCounter',
  props: {
    /**
     * Whether the notification is active
     */
    active: { type: Boolean, default: false },
    /**
     * The notification color
     */
    color: { type: String as () => NeonFunctionalColor, default: NeonFunctionalColor.Error },
    /**
     * The count of notifications to display, if greater than 9 <em>9+</em> is displayed
     */
    count: { type: Number, default: null },
  },
});
