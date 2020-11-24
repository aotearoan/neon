import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonExpansionIndicator } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonExpansionIndicator,
    ComponentDocumentation,
  },
})
export default class ExpansionIndicator extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Indicate expanded / collapsed';

  private examples = [
    {
      title: 'Examples',
      template: `<div class="example--horizontal">
  <neon-expansion-indicator :expanded="false" />
  <neon-expansion-indicator :expanded="true" />
  <neon-expansion-indicator :expanded="false" color="primary" />
  <div class="example-inverse-bg">
    <neon-expansion-indicator :expanded="false" :inverse="true" />
  </div>
  <neon-expansion-indicator :disabled="true" />
</div>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonExpansionIndicator');
  }
}
