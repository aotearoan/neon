import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonFooter } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonFooter,
    ComponentDocumentation,
  },
})
export default class Footer extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Page footer component';

  private examples = [
    {
      title: 'Footer example',
      template: `<neon-footer>
  <span>Footer content</span>
</neon-footer>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonFooter');
  }
}
