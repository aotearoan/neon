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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
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
      updateModel: (model: string, value: Array<string>) => {
        data.value[model] = value;
        data.value = { ...data.value };
      },
    });

    const sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-filter-list size="s" :model-value="smallModel" :items="items" @update:modelValue="updateModel('smallModel', $event)"/>
  <h4>Medium</h4>
  <neon-filter-list :model-value="mediumModel" :items="items" @update:modelValue="updateModel('mediumModel', $event)"/>
  <h4>Large</h4>
  <neon-filter-list size="l" :model-value="largeModel" :items="items" @update:modelValue="updateModel('largeModel', $event)"/>
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-filter-list color="high-contrast" :model-value="hcModel" :items="items" @update:modelValue="updateModel('hcModel', $event)"/>
  <h4>Brand</h4>
  <neon-filter-list color="brand" :model-value="brandModel" :items="items" @update:modelValue="updateModel('brandModel', $event)"/>
  <h4>Primary</h4>
  <neon-filter-list color="primary" :model-value="primaryModel" :items="items" @update:modelValue="updateModel('primaryModel', $event)"/>
</div>`;

    const typeExamples = `<div class="neon-vertically-spaced">
  <h4>Single select</h4>
  <neon-filter-list :multiple="false" :model-value="singleModel" :items="items" @update:modelValue="updateModel('singleModel', $event)"/>
  <h4>Multi select</h4>
  <neon-filter-list :model-value="multipleModel" :items="items" @update:modelValue="updateModel('multipleModel', $event)"/>
</div>`;

    const limitExamples = `<div class="neon-vertically-spaced">
  <h4>Unlimited (default)</h4>
  <neon-filter-list :model-value="unlimitedModel" :items="longItemList" :display-count="0" @update:modelValue="updateModel('unlimitedModel', $event)"/>
  <h4>Limited</h4>
  <neon-filter-list :model-value="customLimitModel" :items="longItemList" :display-count="5" color="brand" @update:modelValue="updateModel('customLimitModel', $event)"/>
</div>`;

    const examples = ref([
      {
        title: 'Filter list sizes',
        template: sizeExamples,
        data,
      },
      {
        title: 'Filter list colors',
        template: colorExamples,
        data,
      },
      {
        title: 'Filter list selection type',
        template: typeExamples,
        data,
      },
      {
        title: 'Limit items displayed',
        template: limitExamples,
        data,
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
