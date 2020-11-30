import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonDrawer } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonButton,
    NeonDrawer,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
})
export default class Drawer extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Slide-out panel for content';

  private data = {
    openLeft: false,
    openRight: false,
    openTop: false,
    openBottom: false,
    contents: `<h6>Drawer content goes here</h6>
              <p>
                Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
                Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
                tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
                Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
              </p>
              <p>
                Ribeye chicken t-bone burgdoggen kevin shank shankle. Turkey venison pastrami short loin shankle sausage
                prosciutto. Hamburger pancetta ribeye, ham ground round capicola shank beef. Flank shoulder strip steak
                rump venison short loin corned beef. Ground round turkey bresaola meatball pork loin, buffalo chuck pork
                ribeye kielbasa.
              </p>`,
  };

  examples = [
    {
      title: 'Drawer examples',
      template: `<div class="example--horizontal">
  <!-- Left -->
  <neon-button label="Open left" @click="openLeft = true"></neon-button>
  <neon-drawer :open="openLeft" position="left" @close="openLeft = false">
    <div v-html="contents"></div>
  </neon-drawer>
  <!-- Right -->
  <neon-button label="Open right" @click="openRight = true"></neon-button>
  <neon-drawer :open="openRight" position="right" @close="openRight = false">
    <div v-html="contents"></div>
  </neon-drawer>
  <!-- Top (overlay = false) -->
  <neon-button label="Open top" @click="openTop = true"></neon-button>
  <neon-drawer :open="openTop" position="top" @close="openTop = false" :overlay="false">
    <div v-html="contents"></div>
  </neon-drawer>
  <!-- Bottom -->
  <neon-button label="Open bottom" @click="openBottom = true"></neon-button>
  <neon-drawer :dismissable="false" :open="openBottom" position="bottom">
    <div v-html="contents"></div>
    <br />
    <neon-button style="align-self: flex-end" label="Close" @click="openBottom = false" />
  </neon-drawer>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonDrawer');
  }
}
