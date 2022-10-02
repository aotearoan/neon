import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonList } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'FilterList',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonList,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A list of items to filter by');

    const items = [
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
    ];

    const longItemList = [
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
    ];

    const data = ref({
      items,
      longItemList,
      smallModel: [items[0].key],
      mediumModel: [items[0].key],
      largeModel: [items[0].key],
      hcModel: [items[0].key],
      brandModel: [items[0].key],
      primaryModel: [items[0].key],
      singleModel: items[0].key,
      multipleModel: [items[0].key],
      defaultLimitModel: [items[0].key],
      customLimitModel: [items[0].key],
      unlimitedModel: [items[0].key],
    });

    const sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-filter-list size="s" v-model="smallModel" :items="items"/>
  <h4>Medium</h4>
  <neon-filter-list v-model="mediumModel" :items="items"/>
  <h4>Large</h4>
  <neon-filter-list size="l" v-model="largeModel" :items="items"/>
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-filter-list color="high-contrast" v-model="hcModel" :items="items"/>
  <h4>Brand</h4>
  <neon-filter-list color="brand" v-model="brandModel" :items="items"/>
  <h4>Primary</h4>
  <neon-filter-list color="primary" v-model="primaryModel" :items="items"/>
</div>`;

    const typeExamples = `<div class="neon-vertically-spaced">
  <h4>Single select</h4>
  <neon-filter-list :multiple="false" v-model="singleModel" :items="items" />
  <h4>Multi select</h4>
  <neon-filter-list v-model="multipleModel" :items="items" />
</div>`;

    const limitExamples = `<div class="neon-vertically-spaced">
  <h4>Unlimited (default)</h4>
  <neon-filter-list v-model="unlimitedModel" :items="longItemList" :display-count="0" />
  <h4>Limited</h4>
  <neon-filter-list v-model="customLimitModel" :items="longItemList" :display-count="5" color="brand" />
</div>`;

    const examples = ref([
      {
        title: 'Filter list sizes',
        template: sizeExamples,
        data: data.value,
      },
      {
        title: 'Filter list colors',
        template: colorExamples,
        data: data.value,
      },
      {
        title: 'Filter list selection type',
        template: typeExamples,
        data: data.value,
      },
      {
        title: 'Limit items displayed',
        template: limitExamples,
        data: data.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFilterList')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
