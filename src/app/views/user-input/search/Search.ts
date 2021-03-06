import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonFunctionalColor, NeonSearchOption, NeonSelect } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonSelect,
    ComponentDocumentation,
  },
})
export default class Search extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A search input field';

  private data = {
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
  };

  private examples = [
    {
      title: `Multiple selection`,
      template: `<div class="neon-vertically-spaced">
  <neon-search :multiple="true" placeholder="Search" :options="filterOptions(modelWithIcons, searchMulti, filterMulti, true)" v-model="searchMulti" @filter-changed="filterMulti = $event" />
</div>`,
      data: this.data,
    },
    {
      title: `Colored chips`,
      template: `<div class="neon-vertically-spaced">
  <neon-search :multiple="true" placeholder="Search" :options="filterOptions(coloredChips, searchMulti, filterMulti, true)" v-model="searchMulti" @filter-changed="filterMulti = $event" />
</div>`,
      data: this.data,
    },
    {
      title: `Search sizes`,
      template: `<div class="neon-vertically-spaced">
  <neon-search size="s" placeholder="Search" :options="filterOptions(model, searchSmall, filterSmall)" v-model="searchSmall" @filter-changed="filterSmall = $event" />
  <neon-search size="m" placeholder="Search" :options="filterOptions(model, searchMedium, filterMedium)" v-model="searchMedium" @filter-changed="filterMedium = $event" />
  <neon-search size="l" placeholder="Search" :options="filterOptions(model, searchLarge, filterLarge)" v-model="searchLarge" @filter-changed="filterLarge = $event" />
</div>`,
      data: this.data,
    },
    {
      title: `Search with colors and icons`,
      template: `<div class="neon-vertically-spaced">
  <neon-search color="brand" placeholder="Search" :options="filterOptions(modelWithIcons, searchBrand, filterBrand)" v-model="searchBrand" @filter-changed="filterBrand = $event" />
  <neon-search color="info" placeholder="Search" :options="filterOptions(modelWithIcons, searchInfo, filterInfo)" v-model="searchInfo" @filter-changed="filterInfo = $event" />
  <neon-search color="success" placeholder="Search" :options="filterOptions(modelWithIcons, searchSuccess, filterSuccess)" v-model="searchSuccess" @filter-changed="filterSuccess = $event" />
  <neon-search color="warn" placeholder="Search" :options="filterOptions(modelWithIcons, searchWarning, filterWarning)" v-model="searchWarning" @filter-changed="filterWarning = $event" />
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSearch');
  }
}
