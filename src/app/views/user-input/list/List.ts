import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonList } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonList,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A vertical list of removable items');

    const items = [
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
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      smallItems: [...items],
      mediumItems: [...items],
      largeItems: [...items],
      hcItems: [...items],
      brandItems: [...items],
      warnItems: [...items],
      disabledItems: [...items],
      updateItems: (key: string, items: Array<string>) => {
        data.value[key] = items;
        data.value = { ...data.value };
      },
      onClose: (key: string) => console.log(`${key} removed`),
    });

    const sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-list size="s" :model-value="smallItems" @close="onClose" @update:modelValue="updateItems('smallItems', $event)" />
  <h4>Medium</h4>
  <neon-list :model-value="mediumItems" @close="onClose" @update:modelValue="updateItems('mediumItems', $event)" />
  <h4>Large</h4>
  <neon-list size="l" :model-value="largeItems" @close="onClose" @update:modelValue="updateItems('largeItems', $event)" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-list color="high-contrast" :model-value="hcItems" @close="onClose" @update:modelValue="updateItems('hcItems', $event)" />
  <h4>Brand</h4>
  <neon-list color="brand" :model-value="brandItems" @close="onClose" @update:modelValue="updateItems('brandItems', $event)" />
  <h4>Warn</h4>
  <neon-list color="warn" :model-value="warnItems" @close="onClose" @update:modelValue="updateItems('warnItems', $event)" />
</div>`;

    const stateExamples = `<div class="neon-vertically-spaced">
  <h4>Disabled</h4>
  <neon-list :disabled="true" :model-value="disabledItems" @update:modelValue="updateItems('disabledItems', $event)" />
</div>`;

    const examples = ref([
      {
        title: 'List sizes',
        template: sizeExamples,
        data,
      },
      {
        title: 'List colors',
        template: colorExamples,
        data,
      },
      {
        title: 'List states',
        template: stateExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonList')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
