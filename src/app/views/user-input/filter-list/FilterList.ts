import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonList } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonList,
    ComponentDocumentation,
  },
})
export default class FilterList extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A list of items to filter by';

  private items = [
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

  private longItemList = [
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

  private data = {
    items: this.items,
    longItemList: this.longItemList,
    smallModel: [this.items[0].key],
    mediumModel: [this.items[0].key],
    largeModel: [this.items[0].key],
    hcModel: [this.items[0].key],
    brandModel: [this.items[0].key],
    primaryModel: [this.items[0].key],
    singleModel: this.items[0].key,
    multipleModel: [this.items[0].key],
    defaultLimitModel: [this.items[0].key],
    customLimitModel: [this.items[0].key],
    unlimitedModel: [this.items[0].key],
  };

  private sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-filter-list size="s" v-model="smallModel" :items="items"/>
  <h4>Medium</h4>
  <neon-filter-list v-model="mediumModel" :items="items"/>
  <h4>Large</h4>
  <neon-filter-list size="l" v-model="largeModel" :items="items"/>
</div>`;

  private colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-filter-list color="high-contrast" v-model="hcModel" :items="items"/>
  <h4>Brand</h4>
  <neon-filter-list color="brand" v-model="brandModel" :items="items"/>
  <h4>Primary</h4>
  <neon-filter-list color="primary" v-model="primaryModel" :items="items"/>
</div>`;

  private typeExamples = `<div class="neon-vertically-spaced">
  <h4>Single select</h4>
  <neon-filter-list :multiple="false" v-model="singleModel" :items="items" />
  <h4>Multi select</h4>
  <neon-filter-list v-model="multipleModel" :items="items" />
</div>`;

  private limitExamples = `<div class="neon-vertically-spaced">
  <h4>Unlimited (default)</h4>
  <neon-filter-list v-model="unlimitedModel" :items="longItemList" :display-count="0" />
  <h4>Limited</h4>
  <neon-filter-list v-model="customLimitModel" :items="longItemList" :display-count="5" color="brand" />
</div>`;

  private examples = [
    {
      title: 'Filter list sizes',
      template: this.sizeExamples,
      data: this.data,
    },
    {
      title: 'Filter list colors',
      template: this.colorExamples,
      data: this.data,
    },
    {
      title: 'Filter list selection type',
      template: this.typeExamples,
      data: this.data,
    },
    {
      title: 'Limit items displayed',
      template: this.limitExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonFilterList');
  }
}
