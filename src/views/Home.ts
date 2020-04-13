import { Component, Vue } from 'vue-property-decorator';

export enum Color {
  NEUTRAL = 'neutral',
  PRIMARY = 'primary',
  INFO = 'info',
  SUCCESS = 'success',
  WARN = 'warn',
  ERROR = 'error',
}

@Component
export default class Home extends Vue {
  get colors() {
    return [Color.NEUTRAL, Color.PRIMARY, Color.INFO, Color.SUCCESS, Color.WARN, Color.ERROR];
  }
}
