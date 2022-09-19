import { computed, defineComponent, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonCardHeader, NeonIcon, NeonLink } from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonIcon,
    NeonLink,
  },
  setup() {
    const developerType = ref([
      'React',
      'Angular',
      'GWT',
      'Scala.js',
      'Less',
      'Lodash',
      'JQuery',
      'Bootstrap',
      'Tailwind CSS',
    ]);

    const developers = computed(() => developerType.value[Math.floor(Math.random() * 10) % developerType.value.length]);

    return {
      developerType,
      developers,
    };
  },
});
