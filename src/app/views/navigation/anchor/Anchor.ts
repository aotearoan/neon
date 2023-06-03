import { NeonActionMenu, NeonCard, NeonCardBody, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Anchor',
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML fragment scrolling helper');
    const example = ref('<neon-anchor id="functional-palettes" />');

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonAnchor')));

    return {
      menuModel,
      headline,
      example,
    };
  },
});
