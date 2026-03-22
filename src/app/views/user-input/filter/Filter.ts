import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFilter, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: 'Filter',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFilter,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Filtering list items by a specific attribute');

    const items = ref([
      {
        label: 'Item 1',
        count: 5837,
        selected: true,
      },
      {
        label: 'Item 2',
        count: 433,
        selected: true,
      },
      {
        label: 'Item 3',
        count: 327,
        selected: false,
      },
      {
        label: 'Disabled item',
        count: 100,
        disabled: true,
        selected: false,
      },
    ]);

    const label = 'Artists | {itemLabel} | {count} artists';

    const sizeExamples = `<neon-filter v-model="items" :label="label" size="s" />
<neon-filter v-model="items" :label="label" />
<neon-filter v-model="items" :label="label" size="l" />`;
    const colorExamples = `<neon-filter v-model="items" :label="label" />
<neon-filter v-model="items" :label="label" color="brand" />
<neon-filter v-model="items" :label="label" color="primary" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFilter')));

    return {
      label,
      menuModel,
      headline,
      items,
      sizeExamples,
      colorExamples,
    };
  },
});
