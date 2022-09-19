import { NeonActionMenu, NeonCard, NeonCardBody } from '@/neon';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import Editor from '../../../components/editor/Editor.vue';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Anchor',
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML fragment scrolling helper');
    const example = ref('<neon-anchor id="functional-palettes" />');

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonAnchor'));

    return {
      menuModel,
      headline,
      example,
    };
  },
});
