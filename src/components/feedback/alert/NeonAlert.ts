import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Snotify, { SnotifyPosition } from 'vue-snotify';

Vue.use(Snotify, {
  toast: {
    timeout: 2500,
    position: SnotifyPosition.rightTop,
    showProgressBar: false,
    CloseOnClick: true,
    titleMaxLength: 30,
  },
});

@Component
export class NeonAlertService extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _instance: any = new NeonAlertService();

  public static info(title: string, message = '') {
    NeonAlertService._instance.$snotify.info(message, title);
  }

  public static success(title: string, message = '') {
    NeonAlertService._instance.$snotify.success(message, title);
  }

  public static warning(title: string, message = '') {
    NeonAlertService._instance.$snotify.warning(message, title);
  }

  public static error(title: string, message = '') {
    NeonAlertService._instance.$snotify.error(message, title);
  }
}

export default NeonAlertService;
