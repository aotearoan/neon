import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonSelect } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import { NeonFunctionalColor } from '@/common/enums/NeonFunctionalColor';
import type { NeonSearchOption } from '@/common/models/NeonSearchOption';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Search',
  components: {
    NeonCard,
    NeonCardBody,
    NeonSelect,
    ComponentDocumentation,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('A search input field');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      filterSmall: '',
      searchSmall: '',
      filterMedium: '',
      searchMedium: '',
      filterLarge: '',
      searchLarge: '',
      filterMulti: '',
      searchMulti: [],
      filterBrand: '',
      searchBrand: '',
      filterInfo: '',
      searchInfo: '',
      filterSuccess: '',
      searchSuccess: '',
      filterWarning: '',
      searchWarning: '',
      updateSelection: (key: string, value: string | Array<string>) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
      updateFilter: (key: string, value?: string) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
      model: [
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
      ],
      modelWithIcons: [
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
      ],
      coloredChips: [
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
      ],
      filterOptions: (
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
      },
    });

    const examples = ref([
      {
        title: 'Multiple selection',
        template: `
          <div class="neon-vertically-spaced">
          <neon-search :multiple="true" placeholder="Search"
                       :options="filterOptions(modelWithIcons, searchMulti, filterMulti, true)"
                       :model-value="searchMulti"
                       @filter-changed="updateFilter('filterMulti', $event)"
                       @update:modelValue="updateSelection('searchMulti')" />
          </div>`,
        data,
      },
      {
        title: 'Colored chips',
        template: `
          <div class="neon-vertically-spaced">
          <neon-search :multiple="true" placeholder="Search"
                       :options="filterOptions(coloredChips, searchMulti, filterMulti, true)"
                       :model-value="searchMulti"
                       @filter-changed="filterMulti = $event"
                       @update:modelValue="updateSelection('searchMulti')" />
          </div>`,
        data,
      },
      {
        title: 'Search sizes',
        template: `
          <div class="neon-vertically-spaced">
          <neon-search size="s" placeholder="Search"
                       :options="filterOptions(model, searchSmall, filterSmall)"
                       :model-value="searchSmall"
                       @filter-changed="filterSmall = $event"
                       @update:modelValue="updateSelection('searchSmall')" />
          <neon-search size="m" placeholder="Search"
                       :options="filterOptions(model, searchMedium, filterMedium)"
                       :model-value="searchMedium"
                       @filter-changed="filterMedium = $event"
                       @update:modelValue="updateSelection('searchMedium')" />
          <neon-search size="l" placeholder="Search"
                       :options="filterOptions(model, searchLarge, filterLarge)"
                       :model-value="searchLarge"
                       @filter-changed="filterLarge = $event"
                       @update:modelValue="updateSelection('searchLarge')" />
          </div>`,
        data,
      },
      {
        title: 'Search with colors and icons',
        template: `
          <div class="neon-vertically-spaced">
          <neon-search color="brand" placeholder="Search"
                       :options="filterOptions(modelWithIcons, searchBrand, filterBrand)"
                       :model-value="searchBrand"
                       @filter-changed="filterBrand = $event"
                       @update:modelValue="updateSelection('searchBrand')" />
          <neon-search color="info" placeholder="Search"
                       :options="filterOptions(modelWithIcons, searchInfo, filterInfo)"
                       :model-value="searchInfo"
                       @filter-changed="filterInfo = $event"
                       @update:modelValue="updateSelection('searchInfo')" />
          <neon-search color="success" placeholder="Search"
                       :options="filterOptions(modelWithIcons, searchSuccess, filterSuccess)"
                       :model-value="searchSuccess"
                       @filter-changed="filterSuccess = $event"
                       @update:modelValue="updateSelection('searchSuccess')" />
          <neon-search color="warn" placeholder="Search"
                       :options="filterOptions(modelWithIcons, searchWarning, filterWarning)"
                       :model-value="searchWarning"
                       @filter-changed="filterWarning = $event"
                       @update:modelValue="updateSelection('searchWarning')" />
          </div>`,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSearch')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
