import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonLogo } from '../../../../components';
import Examples from '../../../components/examples/Examples.vue';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLogo,
    Examples,
    ComponentDocumentation,
  },
})
export default class Logo extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Light and dark mode logo';

  private examples = [
    {
      title: 'Logo example',
      template: `<neon-logo />`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonLogo');
  }
}
