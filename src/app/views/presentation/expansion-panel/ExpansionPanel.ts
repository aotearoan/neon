import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonExpansionPanel } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionPanel,
    ComponentDocumentation,
  },
})
export default class ExpansionPanel extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Expandable/collapsible container for content';

  private data = {
    expanded1: false,
    expanded2: false,
    expanded3: false,
    expanded4: false,
    expanded5: false,
    expanded6: false,
    expanded7: false,
    expanded8: false,
  };

  private content = `<p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>`;

  private examples = [
    {
      title: 'Expansion panel sizes',
      template: `<div class="example--vertical example-expansion-panel">
  <neon-expansion-panel v-model="expanded1" label="Small" size="s">
    ${this.content}
  </neon-expansion-panel>
  <neon-expansion-panel v-model="expanded2" label="Medium" size="m">
    ${this.content}
  </neon-expansion-panel>
  <neon-expansion-panel v-model="expanded3" label="Large" size="l">
    ${this.content}
  </neon-expansion-panel>
</div>`,
      data: this.data,
    },
    {
      title: 'More styles',
      template: `<div class="example--vertical example-expansion-panel">
  <neon-expansion-panel v-model="expanded4" icon="contrast" label="With icon">
    ${this.content}
  </neon-expansion-panel>
  <neon-expansion-panel v-model="expanded5" color="success" icon="contrast" label="Colored label">
    ${this.content}
  </neon-expansion-panel>
  <neon-expansion-panel v-model="expanded6" :disabled="true" label="Disabled">
    ${this.content}
  </neon-expansion-panel>
</div>`,
      data: this.data,
    },
    {
      title: 'Button position',
      template: `<div class="example--vertical example-expansion-panel">
  <neon-expansion-panel v-model="expanded7" label="From top">
    ${this.content}
  </neon-expansion-panel>
  <neon-expansion-panel v-model="expanded8" position="bottom" label="From bottom">
    ${this.content}
  </neon-expansion-panel>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonExpansionPanel');
  }
}
