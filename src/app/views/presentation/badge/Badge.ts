import { Component, Vue } from 'vue-property-decorator';
import { NeonBadge, NeonCard, NeonCardBody } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonBadge,
    ComponentDocumentation,
  },
})
export default class Badge extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'User avatar badges';

  private examples = [
    {
      title: 'Badge sizes',
      template: `<div class="example--horizontal">
  <neon-badge size="s" label="SM" />
  <neon-badge size="m" label="MD" />
  <neon-badge size="l" label="LG" />
</div>`,
    },
    {
      title: 'Badge shapes',
      template: `<div class="example--horizontal">
  <neon-badge label="SQ" />
  <neon-badge :circular="true" label="CI" />
</div>`,
    },
    {
      title: 'Badge styles',
      template: `<div class="example--horizontal">
  <neon-badge label="LB" />
  <neon-badge icon="user" />
  <neon-badge image="/images/doge.jpg" />
</div>`,
    },
    {
      title: 'Badge colors',
      template: `<div class="example--horizontal">
  <neon-badge label="LB" color="brand" />
  <neon-badge icon="user" color="success" />
</div>`,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonBadge');
  }
}
