import { defineComponent } from 'vue';
import { NeonAnchor, NeonCard, NeonCardBody, NeonCardHeader, NeonLink, NeonStack } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'I18n',
  components: {
    NeonAnchor,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonLink,
    NeonStack,
  },
});
