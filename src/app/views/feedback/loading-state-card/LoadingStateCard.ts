import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonLoadingStateCard, NeonStack } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SkeletonLoader',
  components: {
    NeonLoadingStateCard,
    NeonCard,
    NeonCardBody,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate a card list item is loading');

    const template = '<neon-loading-state-card />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonLoadingStateCard')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
