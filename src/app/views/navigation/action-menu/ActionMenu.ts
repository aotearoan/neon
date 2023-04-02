import { defineComponent, onMounted, ref } from 'vue';
import { NeonActionMenu, NeonCard, NeonCardBody } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';

export default defineComponent({
  name: 'ActionMenu',
  components: {
    NeonCard,
    NeonCardBody,
    NeonActionMenu,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Side navigation actions');

    const data = ref({
      model: [
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
      ],
      modelWithCounts: [
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
      ],
      selected: 'option-1',
      toggleSelected: (selected: string) => {
        data.value = { ...data.value, selected };
      },
      selected2: 'option-1',
      toggleSelected2: (selected2: string) => {
        data.value = { ...data.value, selected2 };
      },
    });

    const examples = ref([
      {
        title: 'Basic example',
        template:
          '<neon-action-menu :model="model" color="primary" :model-value="selected" @update:modelValue="toggleSelected"></neon-action-menu>',
        data,
      },
      {
        title: 'With counts',
        template:
          '<neon-action-menu :model="modelWithCounts" color="primary" :model-value="selected2" @update:modelValue="toggleSelected2"></neon-action-menu>',
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonActionMenu')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
