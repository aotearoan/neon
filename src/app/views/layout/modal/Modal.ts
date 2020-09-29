import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonModal } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonButton,
    NeonModal,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
  },
})
export default class Modal extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Page footer component';

  private data = {
    open: false,
  };

  private examples = [
    {
      title: 'Modal example',
      template: `<div class="example--horizontal">
  <neon-button label="Open modal" @click="open = true"></neon-button>
  <neon-modal :open="open" @close="open = false">
    <neon-card>
      <neon-card-header>
        <h3>Modal title</h3>
      </neon-card-header>
      <neon-card-body>
        <h6>Modal content goes here</h6>
        <p>
          Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
          Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
          tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
          Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
        </p>
      </neon-card-body>
      <neon-card-footer>
        <neon-button label="Cancel" @click="open = false" />
        <neon-button label="Accept" color="primary" @click="open = false" />
      </neon-card-footer>
    </neon-card>
  </neon-modal>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonModal');
  }
}
