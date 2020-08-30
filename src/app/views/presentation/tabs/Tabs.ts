import { Component, Vue } from 'vue-property-decorator';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonTab, NeonTabs } from '../../../../components';
import { Menu, MenuModel } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

@Component({
  components: {
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonTab,
    NeonTabs,
    ComponentDocumentation,
  },
})
export default class Tabs extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Present content in tabbed panes';

  private tabContent = `Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. Flank turkey cupim chuck pastrami picanha short loin shankle. Tongue pork loin turducken, tenderloin pork belly ham boudin spare ribs sirloin pancetta jerky picanha corned beef ribeye alcatra. Kielbasa salami flank cow, beef sausage biltong jerky prosciutto strip steak. Meatball prosciutto ham hock salami, jowl tongue kevin fatback ground round beef ribs bacon pork loin meatloaf turducken strip steak.`;

  private data = {
    selected: 'tab1',
    selectedFullWidth: 'tab1',
    tabs: [
      {
        key: 'tab1',
        icon: 'heart',
        label: 'Tab one',
      },
      {
        key: 'tab2',
        label: 'Tab two',
      },
      {
        key: 'tab3',
        label: 'Tab three',
      },
    ],
  };

  private examples = [
    {
      title: 'Tabs inside a card body',
      template: `<neon-tabs :tabs="tabs" v-model="selected">
  <neon-tab v-for="tab in tabs" :key="tab.key" :tab="tab" :selected="selected === tab.key">
    <span>${this.tabContent}</span>
  </neon-tab>
</neon-tabs>`,
      data: this.data,
    },
    {
      title: 'Tabs inside a full width section',
      template: `<neon-tabs :tabs="tabs" v-model="selectedFullWidth">
  <neon-tab v-for="tab in tabs" :key="tab.key" :tab="tab" :selected="selectedFullWidth === tab.key">
    <span>${this.tabContent}</span>
  </neon-tab>
</neon-tabs>`,
      data: this.data,
      fullWidth: true,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonTabs');
  }
}
