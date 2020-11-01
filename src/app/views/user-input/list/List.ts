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
export default class List extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'A vertical list of removable items';

  private items = [
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

  private data = {
    smallItems: [...this.items],
    mediumItems: [...this.items],
    largeItems: [...this.items],
    hcItems: [...this.items],
    brandItems: [...this.items],
    warnItems: [...this.items],
    disabledItems: [...this.items],
    onClose: (key: string) => console.log(`${key} removed`),
  };

  private sizeExamples = `<div class="neon-vertically-spaced">
  <h4>Small</h4>
  <neon-list size="s" v-model="smallItems" @close="onClose" />
  <h4>Medium</h4>
  <neon-list v-model="mediumItems" @close="onClose" />
  <h4>Large</h4>
  <neon-list size="l" v-model="largeItems" @close="onClose" />
</div>`;

  private colorExamples = `<div class="neon-vertically-spaced">
  <h4>High contrast</h4>
  <neon-list color="high-contrast" v-model="hcItems" @close="onClose" />
  <h4>Brand</h4>
  <neon-list color="brand" v-model="brandItems" @close="onClose" />
  <h4>Warn</h4>
  <neon-list color="warn" v-model="warnItems" @close="onClose" />
</div>`;

  private stateExamples = `<div class="neon-vertically-spaced">
  <h4>Disabled</h4>
  <neon-list :disabled="true" v-model="disabledItems" />
</div>`;

  private examples = [
    {
      title: 'List sizes',
      template: this.sizeExamples,
      data: this.data,
    },
    {
      title: 'List colors',
      template: this.colorExamples,
      data: this.data,
    },
    {
      title: 'List states',
      template: this.stateExamples,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonList');
  }
}
