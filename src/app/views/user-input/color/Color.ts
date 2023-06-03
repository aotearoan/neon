import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonColor, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Color',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonColor,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Enhanced HTML native color picker');

    const colorSmall = ref('#BADA55');
    const colorMedium = ref('#BADA55');
    const colorLarge = ref('#BADA55');

    const colorSizeExamples = `<neon-color v-model="colorSmall"
            placeholder="Choose a color"
            size="s"
/>
<neon-color v-model="colorMedium"
            placeholder="Choose a color"
            size="m"
/>
<neon-color v-model="colorLarge"
            placeholder="Choose a color"
            size="l"
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonColor')));

    return {
      menuModel,
      headline,
      colorSmall,
      colorMedium,
      colorLarge,
      colorSizeExamples,
    };
  },
});
