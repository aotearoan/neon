import { defineComponent } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonNote, NeonStack } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Typography',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    NeonNote,
    NeonStack,
  },
});
