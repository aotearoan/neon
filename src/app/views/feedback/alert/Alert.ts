import { Component, Vue } from 'vue-property-decorator';
import {
  NeonAlertPlacement,
  NeonAlertService,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonToastService,
  NeonVerticalPosition,
} from '../../../../components';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';
import { Menu, MenuModel } from '../../../Menu';
import Editor from '../../../components/editor/Editor.vue';

@Component({
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    ComponentDocumentation,
    Editor,
  },
})
export default class Alert extends Vue {
  private menuModel: MenuModel | null = null;

  private headline = 'Display temporary notifications to the user';

  private data = {
    infoAlert: (placement?: NeonAlertPlacement) => {
      NeonAlertService.info({ title: 'Info alert', message: 'This is an example of an info alert.', placement });
    },
    successAlert: (placement?: NeonAlertPlacement) => {
      NeonAlertService.success({
        title: 'Success alert',
        message: 'This is an example of a success alert.',
        placement,
      });
    },
    warnAlert: (placement?: NeonAlertPlacement) => {
      NeonAlertService.warn({
        title: 'Warn alert',
        message: 'This is an example of a warning alert.',
        placement,
      });
    },
    errorAlert: (placement?: NeonAlertPlacement) => {
      NeonAlertService.error({ title: 'Error alert', message: 'This is an example of an error alert.', placement });
    },
    alertSingleAction: () => {
      NeonAlertService.info({
        title: 'Alert with single action',
        message: 'This is an example of an alert with a single action.',
        primaryAction: {
          label: 'Dismiss',
          callback: () => {
            console.log('Dismiss clicked');
          },
        },
      });
    },
    alertBothActions: () => {
      NeonAlertService.info({
        title: 'Alert with single action',
        message: 'This is an example of an alert with a single action.',
        primaryAction: {
          label: 'Action',
          callback: () => {
            console.log('Action clicked');
          },
        },
        secondaryAction: {
          label: 'Cancel',
          callback: () => {
            console.log('Cancel clicked');
          },
        },
      });
    },
    toastInfo: (placement?: NeonVerticalPosition) => {
      NeonToastService.info({ title: 'This is an info toast', placement, duration: 60000 });
    },
    toastSuccess: (placement?: NeonVerticalPosition) => {
      NeonToastService.success({ title: 'This is a success toast', placement });
    },
    toastWarn: (placement?: NeonVerticalPosition) => {
      NeonToastService.warn({ title: 'This is a warning toast', placement });
    },
    toastError: (placement?: NeonVerticalPosition) => {
      NeonToastService.error({ title: 'This is an error toast', placement });
    },
  };

  private get infoExample() {
    return `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.info(alertMessage);`;
  }

  private get successExample() {
    return `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.success(alertMessage);`;
  }

  private get warnExample() {
    return `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.warn(alertMessage);`;
  }

  private get errorExample() {
    return `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.error(alertMessage);`;
  }

  private get infoToast() {
    return `const toastMessage = { title: 'message title' };
NeonToastService.info(toastMessage);`;
  }

  private get successToast() {
    return `const toastMessage = { title: 'message title' };
NeonToastService.success(toastMessage);`;
  }

  private get warnToast() {
    return `const toastMessage = { title: 'message title' };
NeonToastService.warn(toastMessage);`;
  }

  private get errorToast() {
    return `const toastMessage = { title: 'message title' };
NeonToastService.error(toastMessage);`;
  }

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
    {
      title: 'Alert placement',
      template: `<div class="example--horizontal">
  <neon-button label="Top left" @click="infoAlert('top-left')" />
  <neon-button label="Top right" @click="infoAlert('top-right')" />
  <neon-button label="Bottom left" @click="infoAlert('bottom-left')" />
  <neon-button label="Bottom right" @click="infoAlert('bottom-right')" />
</div>`,
      data: this.data,
    },
    {
      title: 'Alerts with actions',
      template: `<div class="example--horizontal">
  <neon-button label="Single action" @click="alertSingleAction()" />
  <neon-button label="Both actions" @click="alertBothActions()" />
</div>`,
      data: this.data,
    },
    {
      title: 'Toast alerts',
      template: `<div class="example--vertical">
  <div class="example--horizontal">
    <neon-button label="Toast top" @click="toastInfo()" />
    <neon-button label="Toast bottom" @click="toastInfo('bottom')" />
  </div>
  <div class="example--horizontal">
    <neon-button color="info" label="Toast info" @click="toastInfo()" />
    <neon-button color="success" label="Toast success" @click="toastSuccess()" />
    <neon-button color="warn" label="Toast warning" @click="toastWarn()" />
    <neon-button color="error" label="Toast error" @click="toastError()" />
  </div>
</div>`,
      data: this.data,
    },
  ];

  public mounted() {
    this.menuModel = Menu.getComponentConfig('NeonAlert');
  }
}
