import { defineComponent } from 'vue';
import NeonIcon from '../icon/NeonIcon.vue';

/**
 * Component for displaying the SASS configured logo.
 */
export default defineComponent({
  name: 'NeonLogo',
  components: {
    NeonIcon,
  },
  props: {
    /**
     * invert the logo color
     */
    inverse: { type: Boolean, default: false },
  },
});
