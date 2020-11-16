import { Component, Vue } from 'vue-property-decorator';
import { NeonIconRegistry } from '../../../../common/utils/NeonIconRegistry';
import { NeonCard, NeonCardBody, NeonIcon, NeonLink } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonIcon,
    NeonLink,
    ComponentDocumentation,
  },
})
export default class Icon extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display icons and other SVGs';

  private examples = [
    {
      title: 'Icon colors',
      template: `<div class="icons-wrapper">
  <neon-icon name="contrast" />
  <neon-icon color="primary" name="contrast" />
  <neon-icon :disabled="true" name="contrast" />
</div>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonIcon');
  }

  get icons() {
    return NeonIconRegistry.list();
  }
}
