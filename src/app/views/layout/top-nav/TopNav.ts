import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonTopNav } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonTopNav,
    ComponentDocumentation,
  },
})
export default class TopNav extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display fixed content at the top of the page';

  private examples = [
    {
      title: 'Top Nav example',
      template: `<neon-top-nav>
  <span>Top navigation content</span>
</neon-top-nav>`,
      fixedContent: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonTopNav');
  }
}
