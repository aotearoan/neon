import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonFilterList } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'FilterList',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonFilterList,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A list of items to filter by');

    const items = ref([
      {
        key: 'key1',
        label: 'Item 1',
        count: 5837,
      },
      {
        key: 'key2',
        label: 'Item 2',
        count: 433,
      },
      {
        key: 'key3',
        label: 'Item 3',
        count: 327,
      },
      {
        key: 'key4',
        label: 'Disabled item',
        count: 100,
        disabled: true,
      },
    ]);

    const longItemList = ref([
      {
        key: 'key1',
        label: 'Item 1',
        count: 5837,
      },
      {
        key: 'key2',
        label: 'Item 2',
        count: 433,
      },
      {
        key: 'key3',
        label: 'Item 3',
        count: 327,
      },
      {
        key: 'key4',
        label: 'Item 4',
        count: 100,
      },
      {
        key: 'key5',
        label: 'Item 5',
        count: 5837,
      },
      {
        key: 'key6',
        label: 'Item 6',
        count: 433,
      },
      {
        key: 'key7',
        label: 'Item 7',
        count: 327,
      },
      {
        key: 'key8',
        label: 'Item 8',
        count: 100,
      },
    ]);

    const smallModel = ref([items.value[0].key]);
    const mediumModel = ref([items.value[0].key]);
    const largeModel = ref([items.value[0].key]);
    const hcModel = ref([items.value[0].key]);
    const brandModel = ref([items.value[0].key]);
    const primaryModel = ref([items.value[0].key]);
    const singleModel = ref([items.value[0].key]);
    const multipleModel = ref([items.value[0].key]);
    const defaultLimitModel = ref([items.value[0].key]);
    const customLimitModel = ref([items.value[0].key]);
    const unlimitedModel = ref([items.value[0].key]);

    const sizeExamples = `<neon-filter-list v-model="smallModel"
                  :items="items"
                  size="s"
/>
<neon-filter-list v-model="mediumModel"
                  :items="items"
/>
<neon-filter-list v-model="largeModel"
                  :items="items"
                  size="l"
/>`;

    const colorExamples = `<neon-filter-list v-model="hcModel"
                  :items="items"
                  color="high-contrast"
/>
<neon-filter-list v-model="brandModel"
                  :items="items"
                  color="brand"
/>
<neon-filter-list v-model="primaryModel"
                  :items="items"
                  color="primary"
/>`;

    const typeExamples = `<neon-filter-list v-model="singleModel"
                  :items="items"
                  :multiple="false"
/>
<neon-filter-list v-model="multipleModel"
                  :items="items"
/>`;

    const limitExamples = `<neon-filter-list v-model="unlimitedModel"
                  :display-count="0"
                  :items="longItemList"
/>
<neon-filter-list v-model="customLimitModel"
                  :display-count="5"
                  :items="longItemList"
                  color="brand"
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFilterList')));

    return {
      menuModel,
      headline,
      items,
      longItemList,
      sizeExamples,
      colorExamples,
      typeExamples,
      limitExamples,
      smallModel,
      mediumModel,
      largeModel,
      hcModel,
      brandModel,
      primaryModel,
      singleModel,
      multipleModel,
      defaultLimitModel,
      customLimitModel,
      unlimitedModel,
    };
  },
});
