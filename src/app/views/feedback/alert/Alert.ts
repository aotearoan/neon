import { Component, Vue } from 'vue-property-decorator';
import { NeonAlertService, NeonButton } from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonButton,
    ComponentDocumentation,
    Editor,
  },
})
export default class Alert extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display temporary notifications to the user';

  private data = {
    infoAlert: () => {
      NeonAlertService.info('Info alert', 'This is an example of an info alert.');
    },
    successAlert: () => {
      NeonAlertService.success('Success alert', 'This is an example of a success alert.');
    },
    warnAlert: () => {
      NeonAlertService.warning('Warning alert', 'This is an example of a warning alert.');
    },
    errorAlert: () => {
      NeonAlertService.error('Error alert', 'This is an example of an error alert.');
    },
  };

  private examples = [
    {
      title: 'Different types of alert',
      template: `<div class="example--horizontal">
  <neon-button color="info" label="Info" @click="infoAlert()" />
  <neon-button color="success" label="Success" @click="successAlert()" />
  <neon-button color="warn" label="Warning" @click="warnAlert()" />
  <neon-button color="error" label="Error" @click="errorAlert()" />
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonAlert');
  }
}
