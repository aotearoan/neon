import { defineComponent, onMounted, ref } from 'vue';
import type { NeonListItem } from '@/neon';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonList } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonList,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A vertical list of removable items');

    const items = ref<Array<NeonListItem>>([
      {
        key: 'key1',
        label: 'Item 1',
      },
      {
        key: 'key2',
        label: 'Item 2',
      },
      {
        key: 'key3',
        label: 'Item 3',
      },
      {
        key: 'key4',
        label: 'Item 4',
      },
    ]);

    const smallItems = ref([...items.value]);
    const mediumItems = ref([...items.value]);
    const largeItems = ref([...items.value]);
    const hcItems = ref([...items.value]);
    const brandItems = ref([...items.value]);
    const warnItems = ref([...items.value]);
    const disabledItems = ref([...items.value]);

    const onClose = (key: string) => console.log(`${key} removed`);

    const sizeExamples = `<neon-list v-model="smallItems"
           size="s"
           @close="onClose"
/>
<neon-list v-model="mediumItems"
           @close="onClose"
/>
<neon-list v-model="largeItems"
           size="l"
           @close="onClose"
/>`;

    const colorExamples = `<neon-list v-model="hcItems"
           color="high-contrast"
           @close="onClose"
/>
<neon-list v-model="brandItems"
           color="brand"
           @close="onClose"
/>
<neon-list v-model="warnItems"
           color="warn"
           @close="onClose"
/>`;

    const stateExamples = '<neon-list v-model="disabledItems" :disabled="true" />';

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonList')));

    return {
      menuModel,
      headline,
      sizeExamples,
      colorExamples,
      stateExamples,
      smallItems,
      mediumItems,
      largeItems,
      hcItems,
      brandItems,
      warnItems,
      disabledItems,
      onClose,
    };
  },
});
