import { Component, Vue } from 'vue-property-decorator';
import { NeonButton, NeonCard, NeonCardBody, NeonDialog } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';

@Component({
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonDialog,
    ComponentDocumentation,
  },
})
export default class Dialog extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Confirm user actions in a dialog window';

  private data = {
    open: false,
  };

  private examples = [
    {
      title: 'Dialog example',
      template: `<div class="example--horizontal">
  <neon-button label="Open dialog" @click="open = true"></neon-button>
  <neon-dialog
    :open="open"
    cancel-label="Reject"
    confirm-label="Accept"
    color="success"
    title="Incoming requests"
    question="Are you sure you want to accept incoming requests?"
    @cancel="open = false"
    @confirm="open = false">
  </neon-dialog>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonDialog');
  }
}
