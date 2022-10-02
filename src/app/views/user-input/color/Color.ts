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
      colorMedium: '#FF6F61',
      colorLarge: '#FF6F61',
    });

    const colorSizeExamples = `<div class="neon-vertically-spaced">
  <neon-color size="s" v-model="colorSmall" placeholder="Choose a color" />
  <neon-color size="m" v-model="colorMedium" placeholder="Choose a color" />
  <neon-color size="l" v-model="colorLarge" placeholder="Choose a color" />
</div>`;

    const examples = ref([
      {
        title: 'Color input sizes',
        template: colorSizeExamples,
        data: data.value,
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
