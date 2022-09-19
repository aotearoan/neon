import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { NeonEventBus } from '../../../common/utils/NeonEventBus';
import type { NeonAlertMessage } from '../../../common/models/NeonAlertMessage';
import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';
import { NeonAlertService } from '../../../common/utils/NeonAlertService';
import NeonAlertContainer from './container/NeonAlertContainer.vue';
import NeonToastContainer from './container/NeonToastContainer.vue';
import type { NeonAlertModel } from './NeonAlertModel';
import type { NeonToastModel } from './NeonToastModel';
import type { NeonToastMessage } from '../../../common/models/NeonToastMessage';
import { NeonToastService } from '../../../common/utils/NeonToastService';
import { NeonAlertPlacement } from '../../../common/enums/NeonAlertPlacement';
import { NeonVerticalPosition } from '../../../common/enums/NeonVerticalPosition';

/**
 * NeonAlert is a component for presenting temporary notifications to the user. Place the component once inside your app
 * and use <strong>NeonAlertService</strong> to send events to the component.
 */
export default defineComponent({
  name: 'NeonAlert',
  components: {
    NeonAlertContainer,
    NeonToastContainer,
  },
  props: {
    /**
     * Whether alert messages are dismissible by clicking on them. This can also be set per alert message.
     */
    dismissible: { type: Boolean, default: true },
    /**
     * Duration to display messages before removing them. This can also be set per alert message. Set the duration to 0 to
     * disable the duration timer, NOTE: this requires the user to dismiss the alert by clicking on it.
     */
    duration: { type: Number, default: 2500 },
  },
  setup(props) {

    // alerts
    const topLeft = ref<Array<NeonAlertModel>>([]);
    const topRight = ref<Array<NeonAlertModel>>([]);
    const bottomLeft = ref<Array<NeonAlertModel>>([]);
    const bottomRight = ref<Array<NeonAlertModel>>([]);
    // toasts
    const top = ref<Array<NeonToastModel>>([]);
    const bottom = ref<Array<NeonToastModel>>([]);

    const internalId = ref(1);

    const removeAlert = (message: NeonAlertModel) => {
      switch (message.placement || NeonAlertPlacement.TopRight) {
        case NeonAlertPlacement.TopLeft:
          topLeft.value = topLeft.value.filter((m) => m.id !== message.id);
          break;
        case NeonAlertPlacement.TopRight:
          topRight.value = topRight.value.filter((m) => m.id !== message.id);
          break;
        case NeonAlertPlacement.BottomLeft:
          bottomLeft.value = bottomLeft.value.filter((m) => m.id !== message.id);
          break;
        case NeonAlertPlacement.BottomRight:
          bottomRight.value = bottomRight.value.filter((m) => m.id !== message.id);
          break;
      }
    };

    const enqueueAlert = (level: NeonAlertLevel, alert: NeonAlertMessage) => {
      const id = internalId.value;
      internalId.value = internalId.value + 1;
      const message: NeonAlertModel = {
        dismissible: props.dismissible,
        ...alert,
        level,
        id,
      };

      switch (alert.placement || NeonAlertPlacement.TopRight) {
        case NeonAlertPlacement.TopLeft:
          topLeft.value.unshift(message);
          break;
        case NeonAlertPlacement.TopRight:
          topRight.value.unshift(message);
          break;
        case NeonAlertPlacement.BottomLeft:
          bottomLeft.value.push(message);
          break;
        case NeonAlertPlacement.BottomRight:
          bottomRight.value.push(message);
          break;
      }

      const duration = alert.duration === undefined ? props.duration : alert.duration;
      if (duration > 0 && !alert.primaryAction) {
        setTimeout(() => removeAlert(message), duration);
      }
    };

    const removeToast = (message: NeonToastModel) => {
      switch (message.placement || NeonVerticalPosition.Top) {
        case NeonVerticalPosition.Top:
          top.value = top.value.filter((m) => m.id !== message.id);
          break;
        case NeonVerticalPosition.Bottom:
          bottom.value = bottom.value.filter((m) => m.id !== message.id);
          break;
      }
    };

    const enqueueToast = (level: NeonAlertLevel, toast: NeonToastMessage) => {
      const id = internalId.value;
      internalId.value = internalId.value + 1;
      const message: NeonToastModel = {
        dismissible: props.dismissible,
        ...toast,
        level,
        id,
      };

      switch (toast.placement || NeonVerticalPosition.Top) {
        case NeonVerticalPosition.Top:
          top.value.unshift(message);
          break;
        case NeonVerticalPosition.Bottom:
          bottom.value.push(message);
          break;
      }

      const duration = toast.duration === undefined ? props.duration : toast.duration;
      if (duration > 0) {
        setTimeout(() => removeToast(message), duration);
      }
    };

    const onInfoAlert = (alert: NeonAlertMessage) => {
      enqueueAlert(NeonAlertLevel.Info, alert);
    };

    const onSuccessAlert = (alert: NeonAlertMessage) => {
      enqueueAlert(NeonAlertLevel.Success, alert);
    };

    const onWarnAlert = (alert: NeonAlertMessage) => {
      enqueueAlert(NeonAlertLevel.Warn, alert);
    };

    const onErrorAlert = (alert: NeonAlertMessage) => {
      enqueueAlert(NeonAlertLevel.Error, alert);
    };

    const onInfoToast = (toast: NeonToastMessage) => {
      enqueueToast(NeonAlertLevel.Info, toast);
    };

    const onSuccessToast = (toast: NeonToastMessage) => {
      enqueueToast(NeonAlertLevel.Success, toast);
    };

    const onWarnToast = (toast: NeonToastMessage) => {
      enqueueToast(NeonAlertLevel.Warn, toast);
    };

    const onErrorToast = (toast: NeonToastMessage) => {
      enqueueToast(NeonAlertLevel.Error, toast);
    };

    onMounted(() => {
      // alerts
      NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Info), onInfoAlert);
      NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Success), onSuccessAlert);
      NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), onWarnAlert);
      NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Error), onErrorAlert);
      // toast
      NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Info), onInfoToast);
      NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Success), onSuccessToast);
      NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Warn), onWarnToast);
      NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Error), onErrorToast);
    });

    onUnmounted(() => {
      // alerts
      NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Info), onInfoAlert);
      NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Success), onSuccessAlert);
      NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), onWarnAlert);
      NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Error), onErrorAlert);
      // toast
      NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Info), onInfoToast);
      NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Success), onSuccessToast);
      NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Warn), onWarnToast);
      NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Error), onErrorToast);
    });

    return {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      top,
      bottom,
    };
  },
});
