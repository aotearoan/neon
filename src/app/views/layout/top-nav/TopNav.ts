import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonTopNav } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'TopNav',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonTopNav,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display fixed content at the top of the page');

    const template = `<neon-top-nav>
  <span>Top navigation content</span>
</neon-top-nav>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonTopNav')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
