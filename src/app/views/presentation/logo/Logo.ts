import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLogo } from '@/neon';
import Examples from '../../../components/examples/Examples.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Logo',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLogo,
    Examples,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Light and dark mode logo');

    const examples = ref([
      {
        title: 'Logo example',
        template: '<neon-logo />',
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonLogo'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
