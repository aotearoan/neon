import { defineComponent, onMounted, ref } from 'vue';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import NeonCard from '@/components/layout/card/NeonCard.vue';
import NeonCardBody from '@/components/layout/card/body/NeonCardBody.vue';
import NeonFilter from '@/components/user-input/filter/NeonFilter.vue';
import NeonFilterBar from '@/components/layout/filter-bar/NeonFilterBar.vue';
import NeonSearchFilter from '@/components/user-input/search-filter/NeonSearchFilter.vue';
import NeonSelect from '@/components/user-input/select/NeonSelect.vue';
import NeonStack from '@/components/layout/stack/NeonStack.vue';

export default defineComponent({
  name: 'FilterBar',
  components: {
    NeonFilter,
    NeonSearchFilter,
    NeonCard,
    NeonCardBody,
    NeonFilterBar,
    NeonSelect,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display search, filters & sort above a list.');

    const searchValue = ref('');
    const count = ref(0);

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

    const sortValue = ref('newest');

    const sortModel = ref([
      {
        key: 'newest',
        label: 'Newest first',
        separatorBefore: true,
      },
      {
        key: 'oldest',
        label: 'Oldest first',
        separatorBefore: true,
      },
    ]);

    const template = `<neon-filter-bar>
  <template #filters>
    <neon-search-filter v-model="searchValue" :search-count="count" />
    <neon-filter v-model="items" :label="label" />
  </template>
  <template #sort>
    <neon-select v-model="sortValue" :options="sortModel" color="high-contrast" placeholder="Sort" />
  </template>
</neon-filter-bar>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonFilterBar')));

    return {
      sortValue,
      sortModel,
      items,
      label,
      count,
      searchValue,
      menuModel,
      headline,
      template,
    };
  },
});
