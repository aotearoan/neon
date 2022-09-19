import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonLink, NeonSplashLoader } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';

export default defineComponent({
  name: 'SplashLoader',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonLink,
    NeonSplashLoader,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate loading progress');

    const data = ref({
      open: false,
      openLoader: () => {
        data.value.open = true;
        setTimeout(() => {
          data.value.open = false;
        }, 2500);
      },
    });

    const examples = ref([
      {
        title: 'Splash loader example',
        template: `
          <div class="example--vertical">
          <neon-button label="Show loader" @click="openLoader()" />
          <neon-splash-loader v-if="open" :fullscreen="true" :overlay="true" size="xl" color="brand" />
          </div>`,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonSplashLoader'));

    return {
      menuModel,
      data,
      headline,
      examples,
    };
  },
});
