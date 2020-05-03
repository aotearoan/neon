import { Component, Vue } from 'vue-property-decorator';
import { NeonLogo, NeonPage, NeonTopNav } from './components';

export enum Theme {
  DEFAULT = 'default',
}

export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

@Component({
  components: {
    NeonLogo,
    NeonPage,
    NeonTopNav,
  },
})
export default class App extends Vue {
  public theme = Theme.DEFAULT;
  public selectedMode = Mode.DARK;

  get themes() {
    return [Theme.DEFAULT];
  }

  get modes() {
    return [Mode.LIGHT, Mode.DARK];
  }

  private switchTheme(theme: Theme) {
    if (this.theme !== theme) {
      document.documentElement.classList.remove(`neon-theme--${this.theme}`);
      document.documentElement.classList.add(`neon-theme--${theme}`);
      this.theme = theme;
    }
  }

  private switchMode(mode: Mode) {
    if (this.selectedMode !== mode) {
      document.documentElement.classList.remove(`neon-mode--${this.selectedMode}`);
      document.documentElement.classList.add(`neon-mode--${mode}`);
      this.selectedMode = mode;
    }
  }
}
