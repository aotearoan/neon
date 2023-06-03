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

    const searchSmall = ref('');
    const searchMedium = ref('');
    const searchLarge = ref('');
    const searchMulti = ref([]);
    const searchColored = ref([]);
    const searchBrand = ref('');
    const searchInfo = ref('');
    const searchSuccess = ref('');
    const searchWarning = ref('');

    const filterSmall = ref('');
    const filterMedium = ref('');
    const filterLarge = ref('');
    const filterMulti = ref('');
    const filterColored = ref('');
    const filterBrand = ref('');
    const filterInfo = ref('');
    const filterSuccess = ref('');
    const filterWarning = ref('');

    const filters: Record<string, Ref<string | undefined>> = {
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

    const updateFilter = (key: string, value: string | undefined) => {
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

    const filterOptions = (
      model: NeonSearchOption[],
      selected: string | NeonSearchOption[],
      filter: string,
      multiple = false,
    ) => {
      const fltr = filter.toLowerCase();
      if (multiple) {
        return model
          .filter((m) => !(selected as NeonSearchOption[]).find((s) => s.key === m.key))
          .filter((item) => item.label.toString().toLowerCase().indexOf(fltr) >= 0);
      } else {
        return model
          .filter((m) => m.key !== selected)
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
