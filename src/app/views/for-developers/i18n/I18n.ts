import { defineComponent } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLink } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'I18n',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
  },
});
