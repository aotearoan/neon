import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '@/neon';
import { defineComponent } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
  },
});
