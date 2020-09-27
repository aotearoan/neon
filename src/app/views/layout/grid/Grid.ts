import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonGrid, NeonGridArea, NeonResponsive } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonGrid,
    NeonGridArea,
    ComponentDocumentation,
  },
})
export default class Grid extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Use CSS grid for page content';

  private examples = [
    {
      title: 'Grid example',
      template: `<neon-grid id="content" :layouts="layouts">
  <neon-grid-area id="section-content">
    <span>Grid area (scroll me)</span>
  </neon-grid-area>
</neon-grid>`,
      data: {
        layouts: [
          {
            breakpoint: NeonResponsive.All,
            grid: [['section-content']],
          },
        ],
      },
      fixedContent: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonGrid');
  }
}
