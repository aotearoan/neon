import { Component, Vue } from 'vue-property-decorator';
import {
  NeonCard,
  NeonCardBody,
  NeonGrid,
  NeonGridArea,
  NeonPage,
  NeonResponsive,
  NeonSideNav,
  NeonTopNav,
} from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonGrid,
    NeonGridArea,
    NeonPage,
    NeonSideNav,
    NeonTopNav,
    ComponentDocumentation,
  },
})
export default class Page extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'The basic container for a page';

  private examples = [
    {
      title: 'Page example',
      template: `<neon-page>
  <template #top-nav>
    <neon-top-nav>
      <span>Top Nav content</span>
    </neon-top-nav>
  </template>
  <template #content>
    <neon-side-nav>
      <template #sticky>
        <span>Side nav content</span>
      </template>
    </neon-side-nav>
    <neon-grid id="content" :layouts="layouts">
      <neon-grid-area id="section-content">
        <span>Grid area</span>
      </neon-grid-area>
    </neon-grid>
  </template>
</neon-page>`,
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
    this.menuModel = Menu.getComponentConfig('NeonPage');
  }
}
