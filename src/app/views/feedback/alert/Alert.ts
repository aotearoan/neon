import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  NeonAlertPlacement,
  NeonAlertService,
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardHeader,
  NeonInline,
  NeonLink,
  NeonStack,
  NeonToastService,
  NeonVerticalPosition,
} from '@/neon';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Alert',
  components: {
    NeonButton,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonLink,
    NeonStack,
    NeonInline,
    ComponentDocumentation,
    Editor,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Display temporary notifications to the user');

    const infoAlert = (placement?: NeonAlertPlacement) => {
      NeonAlertService.info({
        key: 'test-key',
        title: 'Info alert',
        message: 'This is an example of an info alert.',
        placement,
      });
    };

    const successAlert = (placement?: NeonAlertPlacement) => {
      NeonAlertService.success({
        title: 'Success alert',
        message: 'This is an example of a success alert.',
        placement,
      });
    };

    const warnAlert = (placement?: NeonAlertPlacement) => {
      NeonAlertService.warn({
        title: 'Warn alert',
        message: 'This is an example of a warning alert.',
        placement,
      });
    };

    const errorAlert = (placement?: NeonAlertPlacement) => {
      NeonAlertService.error({ title: 'Error alert', message: 'This is an example of an error alert.', placement });
    };

    const alertSingleAction = () => {
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
    };

    const alertBothActions = () => {
      NeonAlertService.info({
        title: 'Alert with two action',
        message: 'This is an example of an alert with two actions.',
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
    };

    const removeAlert = () => {
      NeonAlertService.remove('test-key');
    };

    const toastInfo = (placement?: NeonVerticalPosition) => {
      NeonToastService.info({ key: 'test-key', title: 'This is an info toast', placement });
    };
    const toastSuccess = (placement?: NeonVerticalPosition) => {
      NeonToastService.success({ title: 'This is a success toast', placement });
    };
    const toastWarn = (placement?: NeonVerticalPosition) => {
      NeonToastService.warn({ title: 'This is a warning toast', placement });
    };
    const toastError = (placement?: NeonVerticalPosition) => {
      NeonToastService.error({ title: 'This is an error toast', placement });
    };

    const removeToast = () => {
      NeonToastService.remove('test-key');
    };

    const typesTemplate = `<neon-button color="info" label="Info" @click="infoAlert()" />
<neon-button color="success" label="Success" @click="successAlert()" />
<neon-button color="warn" label="Warning" @click="warnAlert()" />
<neon-button color="error" label="Error" @click="errorAlert()" />`;

    const alertPlacementTemplate = `<neon-button label="Top left" @click="infoAlert('top-left')" />
<neon-button label="Top right" @click="infoAlert('top-right')" />
<neon-button label="Bottom left" @click="infoAlert('bottom-left')" />
<neon-button label="Bottom right" @click="infoAlert('bottom-right')" />`;

    const withActionsTemplate = `<neon-button label="Single action" @click="alertSingleAction()" />
<neon-button label="Both actions" @click="alertBothActions()" />`;

    const toastTemplate = `<neon-button label="Toast top" @click="toastInfo()" />
<neon-button label="Toast bottom" @click="toastInfo('bottom')" />
<neon-button color="info" label="Toast info" @click="toastInfo()" />
<neon-button color="success" label="Toast success" @click="toastSuccess()" />
<neon-button color="warn" label="Toast warning" @click="toastWarn()" />
<neon-button color="error" label="Toast error" @click="toastError()" />`;

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

    const removeAlertExample = computed(() => `NeonAlertService.remove('test-key');`);
    const removeToastExample = computed(() => `NeonToastService.remove('test-key');`);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonAlert')));

    return {
      menuModel,
      headline,
      infoExample,
      successExample,
      warnExample,
      errorExample,
      removeToastExample,
      infoToast,
      successToast,
      warnToast,
      errorToast,
      typesTemplate,
      alertPlacementTemplate,
      withActionsTemplate,
      toastTemplate,
      toastInfo,
      toastSuccess,
      toastWarn,
      toastError,
      removeToast,
      infoAlert,
      successAlert,
      warnAlert,
      errorAlert,
      removeAlert,
      alertSingleAction,
      alertBothActions,
      removeAlertExample,
      NeonAlertPlacement,
      NeonVerticalPosition,
    };
  },
});
