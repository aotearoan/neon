import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonFooter } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names,vue/no-reserved-component-names
  name: 'Footer',
  components: {
    NeonCard,
    NeonCardBody,
    NeonFooter,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Page footer component');

    const template = `<neon-footer>
  <span>Footer content</span>
</neon-footer>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFooter')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
