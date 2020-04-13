import { Component, Vue } from 'vue-property-decorator';

export enum Theme {
  DEFAULT = 'default',
}

export enum Mode {
  LIGHT = 'light',
  DARK = 'dark',
}

@Component
export default class App extends Vue {
  public theme = Theme.DEFAULT;
  public mode = Mode.LIGHT;

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
    if (this.mode !== mode) {
      document.documentElement.classList.remove(`neon-mode--${this.mode}`);
      document.documentElement.classList.add(`neon-mode--${mode}`);
      this.mode = mode;
    }
  }
}
