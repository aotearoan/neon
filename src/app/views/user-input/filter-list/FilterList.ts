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

  private data = {
    smallModel: [this.items[0].key],
    smallItems: [...this.items],
    mediumModel: [this.items[0].key],
    mediumItems: [...this.items],
    largeModel: [this.items[0].key],
    largeItems: [...this.items],
    hcModel: [this.items[0].key],
    hcItems: [...this.items],
    brandModel: [this.items[0].key],
    brandItems: [...this.items],
    warnModel: [this.items[0].key],
    warnItems: [...this.items],
    singleModel: this.items[0].key,
    singleItems: [...this.items],
    multipleModel: [this.items[0].key],
    multipleItems: [...this.items],
  };

  private sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-filter-list size="s" v-model="smallModel" :items="smallItems"/>
  <h4>Medium</h4>
  <neon-filter-list v-model="mediumModel" :items="mediumItems"/>
  <h4>Large</h4>
  <neon-filter-list size="l" v-model="largeModel" :items="largeItems"/>
</div>`;

  private colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-filter-list color="high-contrast" v-model="hcModel" :items="hcItems"/>
  <h4>Brand</h4>
  <neon-filter-list color="brand" v-model="brandModel" :items="brandItems"/>
  <h4>Warn</h4>
  <neon-filter-list color="warn" v-model="warnModel" :items="warnItems"/>
</div>`;

  private typeExamples = `<div class="neon-vertically-spaced">
  <h4>Single select</h4>
  <neon-filter-list :multiple="false" v-model="singleModel" :items="singleItems" />
  <h4>Multi select</h4>
  <neon-filter-list v-model="multipleModel" :items="multipleItems" />
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
      title: 'Filter list states',
      template: this.typeExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonFilterList');
  }
}
