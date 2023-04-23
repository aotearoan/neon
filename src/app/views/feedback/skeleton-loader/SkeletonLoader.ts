import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSkeletonLoader } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'SkeletonLoader',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSkeletonLoader,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Indicate initial loading progress');

    const template = '<neon-skeleton-loader :count="5" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSkeletonLoader')));

    return {
      menuModel,
      headline,
      template,
    };
  },
});
