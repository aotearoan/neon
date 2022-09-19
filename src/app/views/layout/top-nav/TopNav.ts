import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonTopNav } from '@/neon';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'TopNav',
  components: {
    NeonCard,
    NeonCardBody,
    NeonTopNav,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display fixed content at the top of the page');

    const examples = ref([
      {
        title: 'Top Nav example',
        template: `<neon-top-nav>
  <span>Top navigation content</span>
</neon-top-nav>`,
        fixedContent: true,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonTopNav'));

    return {
      menuModel,
      headline,
      examples,
    };
  },
});
