import { computed, defineComponent, ref } from 'vue';
import {
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonFunctionalColor,
  NeonIcon,
  NeonIconRegistry,
  NeonInline,
  NeonInput,
  NeonSelect,
  type NeonSelectOption,
} from '@/neon';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Icons',
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonIcon,
    NeonInline,
    NeonInput,
    NeonSelect,
  },
  setup() {
    const icons = NeonIconRegistry.list();

    const filter = ref<string>('');

    const selectedPalette = ref<NeonFunctionalColor | string>('text');
    const paletteOptions: Array<NeonSelectOption> = Object.entries(NeonFunctionalColor).map(([label, key]) => ({
      key,
      label: label === 'LowContrast' ? 'Low contrast' : label === 'HighContrast' ? 'High contrast' : label,
    }));
    paletteOptions.unshift({ key: 'text', label: 'Text color (default)' });

    const filteredIcons = computed(() => {
      const colorFilterIndex = icons.findIndex((icon) => icon === 'astrology-moon');
      return icons
        .filter((icon, index) => {
          return index < colorFilterIndex && icon.toLowerCase().includes(filter.value.toLowerCase());
        })
        .sort();
    });

    return {
      filteredIcons,
      filter,
      selectedPalette,
      paletteOptions,
    };
  },
});
