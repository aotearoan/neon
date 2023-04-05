import { defineComponent } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonIcon, NeonIconRegistry } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icons',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonIcon,
  },
  setup() {
    const icons = NeonIconRegistry.list();

    return {
      icons,
    };
  },
});
