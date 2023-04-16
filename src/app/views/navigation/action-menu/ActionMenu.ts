import { defineComponent, onMounted, ref } from 'vue';
import { NeonActionMenu, NeonCard, NeonCardBody } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ActionMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Side navigation actions');

    const model = ref([
      {
        label: 'Option 1',
        key: 'option-1',
      },
      {
        label: 'Option 2',
        key: 'option-2',
      },
      {
        label: 'Option 3',
        key: 'option-3',
        disabled: true,
      },
    ]);

    const modelWithCounts = ref([
      {
        label: 'Option 1',
        key: 'option-1',
        count: 4322,
      },
      {
        label: 'Option 2',
        key: 'option-2',
        count: 42,
      },
      {
        label: 'Option 3',
        key: 'option-3',
        disabled: true,
        count: 911,
      },
    ]);

    const selected = ref('option-1');

    const selected2 = ref('option-1');

    const basicTemplate = '<neon-action-menu v-model="selected" :model="model" color="primary" />';
    const withCountsTemplate = '<neon-action-menu v-model="selected2" :model="modelWithCounts" color="primary" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonActionMenu')));

    return {
      menuModel,
      headline,
      model,
      modelWithCounts,
      selected,
      selected2,
      basicTemplate,
      withCountsTemplate,
    };
  },
});
