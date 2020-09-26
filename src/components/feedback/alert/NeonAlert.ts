import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonEventBus } from '../../../common/utils/NeonEventBus';
import { NeonAlertMessage } from '../../../common/models/NeonAlertMessage';
import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from '../../../common/enums/NeonAlertPlacement';
import { NeonAlertService } from '../../../common/utils/NeonAlertService';
import NeonAlertContainer from './container/NeonAlertContainer.vue';
import NeonToastContainer from './container/NeonToastContainer.vue';
import { NeonAlertModel } from './NeonAlertModel';
import { NeonToastModel } from './NeonToastModel';
import { NeonToastMessage } from '../../../common/models/NeonToastMessage';
import { NeonToastService } from '../../../common/utils/NeonToastService';
import { NeonVerticalPosition } from '../../../common/enums/NeonVerticalPosition';

/**
 * NeonAlert is a component for presenting temporary notifications to the user. Place the component once inside your app
 * and use <strong>NeonAlertService</strong> to send events to the component.
 */
@Component({
  components: {
    NeonAlertContainer,
    NeonToastContainer,
  },
})
export default class NeonAlert extends Vue {
  // alerts
  private topLeft: NeonAlertModel[] = [];
  private topRight: NeonAlertModel[] = [];
  private bottomLeft: NeonAlertModel[] = [];
  private bottomRight: NeonAlertModel[] = [];
  // toasts
  private top: NeonToastModel[] = [];
  private bottom: NeonToastModel[] = [];

  private internalId = 1;

  /**
   * Whether or not alert messages are dismissable by clicking on them. This can also be set per alert message.
   */
  @Prop({ default: true })
  dismissable!: boolean;

  /**
   * Duration to display messages before removing them. This can also be set per alert message. Set the duration to 0 to
   * disable the duration timer, NOTE: this requires the user to dismiss the alert by clicking on it.
   */
  @Prop({ default: 2500 })
  duration!: number;

  public mounted() {
    // alerts
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Info), this.onInfoAlert);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Success), this.onSuccessAlert);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), this.onWarnAlert);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Error), this.onErrorAlert);
    // toast
    NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Info), this.onInfoToast);
    NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Success), this.onSuccessToast);
    NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Warn), this.onWarnToast);
    NeonEventBus.on(NeonToastService.generateEventKey(NeonAlertLevel.Error), this.onErrorToast);
  }

  public beforeDestroy() {
    // alerts
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Info), this.onInfoAlert);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Success), this.onSuccessAlert);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), this.onWarnAlert);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Error), this.onErrorAlert);
    // toast
    NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Info), this.onInfoToast);
    NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Success), this.onSuccessToast);
    NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Warn), this.onWarnToast);
    NeonEventBus.off(NeonToastService.generateEventKey(NeonAlertLevel.Error), this.onErrorToast);
  }

  private onInfoAlert(alert: NeonAlertMessage) {
    this.enqueueAlert(NeonAlertLevel.Info, alert);
  }

  private onSuccessAlert(alert: NeonAlertMessage) {
    this.enqueueAlert(NeonAlertLevel.Success, alert);
  }

  private onWarnAlert(alert: NeonAlertMessage) {
    this.enqueueAlert(NeonAlertLevel.Warn, alert);
  }

  private onErrorAlert(alert: NeonAlertMessage) {
    this.enqueueAlert(NeonAlertLevel.Error, alert);
  }

  private enqueueAlert(level: NeonAlertLevel, alert: NeonAlertMessage) {
    const id = this.internalId;
    this.internalId = this.internalId + 1;
    const message: NeonAlertModel = {
      dismissable: this.dismissable,
      ...alert,
      level,
      id,
    };

    switch (alert.placement || NeonAlertPlacement.TopRight) {
      case NeonAlertPlacement.TopLeft:
        this.topLeft.unshift(message);
        break;
      case NeonAlertPlacement.TopRight:
        this.topRight.unshift(message);
        break;
      case NeonAlertPlacement.BottomLeft:
        this.bottomLeft.push(message);
        break;
      case NeonAlertPlacement.BottomRight:
        this.bottomRight.push(message);
        break;
    }

    const duration = alert.duration || this.duration;
    if (duration > 0 && !alert.primaryAction) {
      setTimeout(() => {
        switch (alert.placement || NeonAlertPlacement.TopRight) {
          case NeonAlertPlacement.TopLeft:
            this.topLeft = this.topLeft.filter((m) => m.id !== message.id);
            break;
          case NeonAlertPlacement.TopRight:
            this.topRight = this.topRight.filter((m) => m.id !== message.id);
            break;
          case NeonAlertPlacement.BottomLeft:
            this.bottomLeft = this.bottomLeft.filter((m) => m.id !== message.id);
            break;
          case NeonAlertPlacement.BottomRight:
            this.bottomRight = this.bottomRight.filter((m) => m.id !== message.id);
            break;
        }
      }, duration);
    }
  }

  private onInfoToast(toast: NeonToastMessage) {
    this.enqueueToast(NeonAlertLevel.Info, toast);
  }

  private onSuccessToast(toast: NeonToastMessage) {
    this.enqueueToast(NeonAlertLevel.Success, toast);
  }

  private onWarnToast(toast: NeonToastMessage) {
    this.enqueueToast(NeonAlertLevel.Warn, toast);
  }

  private onErrorToast(toast: NeonToastMessage) {
    this.enqueueToast(NeonAlertLevel.Error, toast);
  }

  private enqueueToast(level: NeonAlertLevel, toast: NeonToastMessage) {
    const id = this.internalId;
    this.internalId = this.internalId + 1;
    const message: NeonToastModel = {
      dismissable: this.dismissable,
      ...toast,
      level,
      id,
    };

    switch (toast.placement || NeonVerticalPosition.Top) {
      case NeonVerticalPosition.Top:
        this.top.unshift(message);
        break;
      case NeonVerticalPosition.Bottom:
        this.bottom.push(message);
        break;
    }

    const duration = toast.duration || this.duration;
    if (duration > 0) {
      setTimeout(() => {
        switch (toast.placement || NeonVerticalPosition.Top) {
          case NeonVerticalPosition.Top:
            this.top = this.top.filter((m) => m.id !== message.id);
            break;
          case NeonVerticalPosition.Bottom:
            this.bottom = this.bottom.filter((m) => m.id !== message.id);
            break;
        }
      }, duration);
    }
  }
}
