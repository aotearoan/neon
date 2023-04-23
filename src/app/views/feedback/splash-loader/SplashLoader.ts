import { defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonLink, NeonSplashLoader } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SplashLoader',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonLink,
    NeonSplashLoader,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate loading progress');

    const open = ref(false);
    const openLoader = () => {
      setTimeout(() => {
        open.value = false;
      }, 2500);
      open.value = true;
    };

    const template = `<neon-button label="Show loader" @click="openLoader()" />
<neon-splash-loader v-if="open" :fullscreen="true" :overlay="true" size="xl" color="brand" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSplashLoader')));

    return {
      menuModel,
      open,
      headline,
      template,
      openLoader,
    };
  },
});
