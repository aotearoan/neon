import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonColor } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Color',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonColor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Enhanced HTML native color picker');

    const data = ref({
      colorSmall: '#FF6F61',
      updateColorSmall: (colorSmall: string) => {
        data.value = { ...data.value, colorSmall };
      },
      colorMedium: '#FF6F61',
      updateColorMedium: (colorMedium: string) => {
        data.value = { ...data.value, colorMedium };
      },
      colorLarge: '#FF6F61',
      updateColorLarge: (colorLarge: string) => {
        data.value = { ...data.value, colorLarge };
      },
    });

    const colorSizeExamples = `<div class="neon-vertically-spaced">
  <neon-color size="s" :model-value="colorSmall" placeholder="Choose a color" @update:modelValue="updateColorSmall" />
  <neon-color size="m" :model-value="colorMedium" placeholder="Choose a color" @update:modelValue="updateColorMedium" />
  <neon-color size="l" :model-value="colorLarge" placeholder="Choose a color" @update:modelValue="updateColorLarge" />
</div>`;

    const examples = ref([
      {
        title: 'Color input sizes',
        template: colorSizeExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonColor')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
