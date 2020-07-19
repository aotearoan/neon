import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonExpansionIndicator } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonExpansionIndicator,
    ComponentDocumentation,
  },
})
export default class ExpansionIndicator extends Vue {
  private menuModel: MenuModel | null = null;

  private examples = [
    {
      title: 'Examples',
      template: `<div>
  <neon-expansion-indicator :expanded="false" />
  <neon-expansion-indicator :expanded="true" />
  <neon-expansion-indicator :expanded="false" color="primary" />
</div>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonExpansionIndicator');
  }
}
