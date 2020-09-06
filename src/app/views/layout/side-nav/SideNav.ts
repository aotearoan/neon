import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonSideNav } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonCard,
    NeonCardBody,
    NeonSideNav,
    ComponentDocumentation,
  },
})
export default class SideNav extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display fixed content at the side of the page';

  private examples = [
    {
      title: 'Side Nav example',
      template: `<neon-side-nav>
  <template #sticky>
    <h6>Sticky content</h6>
  </template>
  <template #scrolling>
    <h6>Scrolling content</h6>
    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.</p>
  </template>
</neon-side-nav>`,
      fixedContent: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonSideNav');
  }
}
