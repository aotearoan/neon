import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonEmptyState } from '@/neon';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'EmptyState',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonEmptyState,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display an empty state or a page error.');

    const templateEmptyState = `<neon-empty-state title="Inventory is empty" :ctas="emptyCtas">
  <template #description>
    <span>Manage the items you own, sell, or have documented.</span>
  </template>
</neon-empty-state>`;

    const templateError = `<neon-empty-state type="error" title="404" subtitle="Page not found" :ctas="errorCtas">
  <template #description>
    <span>The page you're looking for does not exist, please check the url or click below.</span>
  </template>
</neon-empty-state>`;

    const emptyCtas = [
      {
        href: '/',
        label: 'Upload items',
      },
      { href: '/', label: 'Add item', icon: 'add' },
    ];

    const errorCtas = [
      {
        href: '/',
        label: 'Back to homepage',
      },
    ];

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonEmptyState')));

    return {
      menuModel,
      headline,
      templateEmptyState,
      templateError,
      emptyCtas,
      errorCtas,
    };
  },
});
