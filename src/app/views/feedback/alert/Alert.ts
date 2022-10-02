import { computed, defineComponent, onMounted, ref } from 'vue';
import { NeonButton, NeonCard, NeonCardBody, NeonLink } from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '.@/app/components/editor/Editor.vue';
import type { NeonAlertPlacement } from '@/common/enums/NeonAlertPlacement';
import type { NeonVerticalPosition } from '@/common/enums/NeonVerticalPosition';
import { NeonAlertService } from '@/common/utils/NeonAlertService';
import { NeonToastService } from '@/common/utils/NeonToastService';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Alert',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonLink,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display temporary notifications to the user');

    const data = ref({
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
        NeonToastService.info({ title: 'This is an info toast', placement });
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
    });

    const examples = ref([
      {
        title: 'Different types of alert',
        template: `
          <div class="example--horizontal">
          <neon-button color="info" label="Info" @click="infoAlert()" />
          <neon-button color="success" label="Success" @click="successAlert()" />
          <neon-button color="warn" label="Warning" @click="warnAlert()" />
          <neon-button color="error" label="Error" @click="errorAlert()" />
          </div>`,
        data: data.value,
        components: {
          NeonButton,
        },
      },
      {
        title: 'Alert placement',
        template: `
          <div class="example--horizontal">
          <neon-button label="Top left" @click="infoAlert('top-left')" />
          <neon-button label="Top right" @click="infoAlert('top-right')" />
          <neon-button label="Bottom left" @click="infoAlert('bottom-left')" />
          <neon-button label="Bottom right" @click="infoAlert('bottom-right')" />
          </div>`,
        data: data.value,
        components: {
          NeonButton,
        },
      },
      {
        title: 'Alerts with actions',
        template: `
          <div class="example--horizontal">
          <neon-button label="Single action" @click="alertSingleAction()" />
          <neon-button label="Both actions" @click="alertBothActions()" />
          </div>`,
        data: data.value,
        components: {
          NeonButton,
        },
      },
      {
        title: 'Toast alerts',
        template: `
          <div class="example--vertical">
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
        data: data.value,
        components: {
          NeonButton,
        },
      },
    ]);

    const infoExample = computed(
      () => `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.info(alertMessage);`,
    );

    const successExample = computed(
      () => `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.success(alertMessage);`,
    );

    const warnExample = computed(
      () => `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.warn(alertMessage);`,
    );

    const errorExample = computed(
      () => `const alertMessage = { title: 'message title', message: 'Message' };
NeonAlertService.error(alertMessage);`,
    );

    const infoToast = computed(
      () => `const toastMessage = { title: 'message title' };
NeonToastService.info(toastMessage);`,
    );

    const successToast = computed(
      () => `const toastMessage = { title: 'message title' };
NeonToastService.success(toastMessage);`,
    );

    const warnToast = computed(
      () => `const toastMessage = { title: 'message title' };
NeonToastService.warn(toastMessage);`,
    );

    const errorToast = computed(
      () => `const toastMessage = { title: 'message title' };
NeonToastService.error(toastMessage);`,
    );

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonAlert')));

    return {
      menuModel,
      headline,
      data,
      examples,
      infoExample,
      successExample,
      warnExample,
      errorExample,
      infoToast,
      successToast,
      warnToast,
      errorToast,
    };
  },
});
