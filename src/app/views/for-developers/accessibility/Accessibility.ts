import { defineComponent } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonNote } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Accessibility',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    NeonNote,
  },
});
