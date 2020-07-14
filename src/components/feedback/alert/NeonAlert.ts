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
export default class NeonAlert extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static _instance: any = new NeonAlert();

  public info(title: string, message = '') {
    this.instance.$snotify.info(message, title);
  }

  public success(title: string, message = '') {
    this.instance.$snotify.success(message, title);
  }

  public warning(title: string, message = '') {
    this.instance.$snotify.warning(message, title);
  }

  public error(title: string, message = '') {
    this.instance.$snotify.error(message, title);
  }

  get instance() {
    return NeonAlert._instance;
  }
}

export const NeonAlertService = new NeonAlert();
