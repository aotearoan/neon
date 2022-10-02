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

    const data = ref({
      smallItems: [...items],
      mediumItems: [...items],
      largeItems: [...items],
      hcItems: [...items],
      brandItems: [...items],
      warnItems: [...items],
      disabledItems: [...items],
      onClose: (key: string) => console.log(`${key} removed`),
    });

    const sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-list size="s" v-model="smallItems" @close="onClose" />
  <h4>Medium</h4>
  <neon-list v-model="mediumItems" @close="onClose" />
  <h4>Large</h4>
  <neon-list size="l" v-model="largeItems" @close="onClose" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-list color="high-contrast" v-model="hcItems" @close="onClose" />
  <h4>Brand</h4>
  <neon-list color="brand" v-model="brandItems" @close="onClose" />
  <h4>Warn</h4>
  <neon-list color="warn" v-model="warnItems" @close="onClose" />
</div>`;

    const stateExamples = `<div class="neon-vertically-spaced">
  <h4>Disabled</h4>
  <neon-list :disabled="true" v-model="disabledItems" />
</div>`;

    const examples = ref([
      {
        title: 'List sizes',
        template: sizeExamples,
        data: data.value,
      },
      {
        title: 'List colors',
        template: colorExamples,
        data: data.value,
      },
      {
        title: 'List states',
        template: stateExamples,
        data: data.value,
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
