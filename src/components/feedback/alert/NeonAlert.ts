import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { NeonEventBus } from '../../../common/utils/NeonEventBus';
import { NeonAlertMessage } from '../../../common/models/NeonAlertMessage';
import { NeonAlertLevel } from '../../../common/enums/NeonAlertLevel';
import { NeonAlertPlacement } from '../../../common/enums/NeonAlertPlacement';
import { NeonAlertService } from '../../../common/utils/NeonAlertService';
import NeonAlertContainer from './container/NeonAlertContainer.vue';
import { NeonAlertModel } from './NeonAlertModel';

/**
 * NeonAlert is a component for presenting temporary notifications to the user. Place the component once inside your app
 * and use <strong>NeonAlertService</strong> to send events to the component.
 */
@Component({
  components: {
    NeonAlertContainer,
  },
})
export default class NeonAlert extends Vue {
  private topLeft: NeonAlertModel[] = [];
  private topRight: NeonAlertModel[] = [];
  private bottomLeft: NeonAlertModel[] = [];
  private bottomRight: NeonAlertModel[] = [];
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
  @Prop({ default: 0 })
  duration!: number;

  public mounted() {
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Info), this.onInfo);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Success), this.onSuccess);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), this.onWarn);
    NeonEventBus.on(NeonAlertService.generateEventKey(NeonAlertLevel.Error), this.onError);
  }

  public beforeDestroy() {
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Info), this.onInfo);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Success), this.onSuccess);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Warn), this.onWarn);
    NeonEventBus.off(NeonAlertService.generateEventKey(NeonAlertLevel.Error), this.onError);
  }

  private onInfo(alert: NeonAlertMessage) {
    this.enqueueMessage(NeonAlertLevel.Info, alert);
  }

  private onSuccess(alert: NeonAlertMessage) {
    this.enqueueMessage(NeonAlertLevel.Success, alert);
  }

  private onWarn(alert: NeonAlertMessage) {
    this.enqueueMessage(NeonAlertLevel.Warn, alert);
  }

  private onError(alert: NeonAlertMessage) {
    this.enqueueMessage(NeonAlertLevel.Error, alert);
  }

  private enqueueMessage(level: NeonAlertLevel, alert: NeonAlertMessage) {
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
}
