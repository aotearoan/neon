import type { Ref } from 'vue';
import { defineComponent, onMounted, ref } from 'vue';
import type { NeonSearchOption } from '@/neon';
import { NeonCard, NeonCardBody, NeonFunctionalColor, NeonSearch, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSearch,
    NeonStack,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A search input field');

    const searchSmall = ref(null);
    const searchLarge = ref(null);
    const searchColored = ref([]);
    const searchBrand = ref(null);
    const searchInfo = ref(null);
    const searchSuccess = ref(null);
    const searchWarning = ref(null);

    const filterSmall = ref(null);
    const filterMedium = ref(null);
    const filterLarge = ref(null);
    const filterMulti = ref(null);
    const filterColored = ref(null);
    const filterBrand = ref(null);
    const filterInfo = ref(null);
    const filterSuccess = ref(null);
    const filterWarning = ref(null);

    const filters: Record<string, Ref<string | null>> = {
      filterSmall,
      filterMedium,
      filterLarge,
      filterMulti,
      filterColored,
      filterBrand,
      filterInfo,
      filterSuccess,
      filterWarning,
    };

    const updateFilter = (key: string, value: string | null) => {
      if (filters[key]) {
        filters[key].value = value;
      }
    };

    const model = ref([
      {
        key: 'k1',
        label: 'Avocado',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Bacon',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Chicken',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Mushroom',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Pineapple',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Tomato',
        separatorBefore: true,
      },
    ]);

    const modelWithIcons = ref([
      {
        key: 'k1',
        label: 'Item 1',
        icon: 'contrast',
        separatorBefore: true,
      },
      {
        key: 'k2',
        label: 'Item 2',
        icon: 'user',
        separatorBefore: true,
      },
      {
        key: 'k3',
        label: 'Item 3',
        icon: 'plus',
        separatorBefore: true,
      },
      {
        key: 'k4',
        label: 'Item 4',
        icon: 'download',
        separatorBefore: true,
      },
      {
        key: 'k5',
        label: 'Item 5',
        icon: 'hammer',
        separatorBefore: true,
      },
      {
        key: 'k6',
        label: 'Item 6',
        icon: 'images',
        separatorBefore: true,
      },
    ]);

    const coloredChips = ref([
      {
        key: 'k1',
        label: 'Item 1',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
      {
        key: 'k2',
        label: 'Item 2',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
      {
        key: 'k3',
        label: 'Item 3',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
      {
        key: 'k4',
        label: 'Item 4',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
      {
        key: 'k5',
        label: 'Item 5',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
      {
        key: 'k6',
        label: 'Item 6',
        separatorBefore: true,
        chipColor: NeonFunctionalColor.Primary,
      },
    ]);

    const searchMedium = ref(model.value[1]);
    const searchMulti = ref([modelWithIcons.value[0], modelWithIcons.value[2]]);

    const filterOptions = (
      model: NeonSearchOption[],
      selected: NeonSearchOption | NeonSearchOption[] | null,
      filter: string | null,
      multiple = false,
    ) => {
      if (multiple) {
        const fltr = filter?.toLowerCase() || '';
        return model
          .filter((m) => !(selected as NeonSearchOption[]).find((s) => s.key === m.key))
          .filter((item) => item.label.toString().toLowerCase().indexOf(fltr) >= 0);
      } else if (!filter) {
        return model;
      } else {
        const fltr = filter.toLowerCase();
        return model
          .filter((m) => selected === null || m.key !== (selected as NeonSearchOption).key)
          .filter((item) => item.label.toString().toLowerCase().indexOf(fltr) >= 0);
      }
    };

    const multipleTemplate = `<neon-search v-model="searchMulti"
             :multiple="true"
             :options="filterOptions(modelWithIcons, searchMulti, filterMulti, true)"
             placeholder="Search"
             @filter-changed="updateFilter('filterMulti', $event)"
/>`;

    const coloredTemplate = `<neon-search v-model="searchMulti"
             :multiple="true"
             :options="filterOptions(coloredChips, searchMulti, filterMulti, true)"
             placeholder="Search"
             @filter-changed="filterMulti = $event"
/>`;

    const sizesTemplate = `<neon-search v-model="searchSmall"
             :options="filterOptions(model, searchSmall, filterSmall)"
             placeholder="Search"
             size="s"
             @filter-changed="filterSmall = $event"
/>
<neon-search v-model="searchMedium"
             :options="filterOptions(model, searchMedium, filterMedium)"
             placeholder="Search"
             size="m"
             @filter-changed="filterMedium = $event"
/>
<neon-search v-model="searchLarge"
             :options="filterOptions(model, searchLarge, filterLarge)"
             placeholder="Search"
             size="l"
             @filter-changed="filterLarge = $event"
/>`;

    const colorsTemplate = `<neon-search v-model="searchBrand"
             :options="filterOptions(modelWithIcons, searchBrand, filterBrand)"
             color="brand"
             placeholder="Search"
             @filter-changed="filterBrand = $event"
/>
<neon-search v-model="searchInfo"
             :options="filterOptions(modelWithIcons, searchInfo, filterInfo)"
             color="info"
             placeholder="Search"
             @filter-changed="filterInfo = $event"
/>
<neon-search v-model="searchSuccess"
             :options="filterOptions(modelWithIcons, searchSuccess, filterSuccess)"
             color="success"
             placeholder="Search"
             @filter-changed="filterSuccess = $event"
/>
<neon-search v-model="searchWarning"
             :options="filterOptions(modelWithIcons, searchWarning, filterWarning)"
             color="warn"
             placeholder="Search"
             @filter-changed="filterWarning = $event"
/>`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSearch')));

    return {
      menuModel,
      headline,
      searchSmall,
      searchMedium,
      searchLarge,
      searchMulti,
      searchColored,
      searchBrand,
      searchInfo,
      searchSuccess,
      searchWarning,
      filterSmall,
      filterMedium,
      filterLarge,
      filterMulti,
      filterColored,
      filterBrand,
      filterInfo,
      filterSuccess,
      filterWarning,
      model,
      modelWithIcons,
      coloredChips,
      multipleTemplate,
      colorsTemplate,
      sizesTemplate,
      coloredTemplate,
      updateFilter,
      filterOptions,
    };
  },
});
