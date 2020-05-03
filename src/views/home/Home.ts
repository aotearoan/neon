import { Component, Vue } from 'vue-property-decorator';
import { NeonColor, NeonColorUtils, NeonResponsive } from '@/components';

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
  private ratios: { [s: string]: number } = {};

  public mounted() {
    this.ratios = this.contrastRatios();
  }

  get colors() {
    return [Color.NEUTRAL, Color.PRIMARY, Color.INFO, Color.SUCCESS, Color.WARN, Color.ERROR];
  }

  get layouts() {
    return [
      {
        breakpoint: NeonResponsive.All,
        grid: [['colorPalette'], ['typography']],
      },
    ];
  }

  private contrastRatios() {
    const result: { [key: string]: number } = {};

    for (let hue = 0; hue < 360; hue++) {
      for (let i = 1; i <= 11; i++) {
        const key = i < 6 ? `${hue}l${6 - i}` : (i > 6 ? `${hue}d${i - 6}` : `${hue}`);
        const element = this.$refs[key];
        if (element) {
          const styles = window.getComputedStyle((element as Element[])[0], null);
          const bgColor = styles.getPropertyValue('background-color');
          const color = styles.getPropertyValue('color');
          const backgroundColor = this.toColor(bgColor);
          const foregroundColor = this.toColor(color);
          result[key] = NeonColorUtils.contrastRatio(backgroundColor, foregroundColor);
        }
      }
    }

    return result;
  }

  private toColor(c: string): NeonColor {
    const parts = /rgb\(([0-9]+), ([0-9]+), ([0-9]+)\)/g.exec(c);
    if (parts) {
      return {
        r: +parts[1],
        g: +parts[2],
        b: +parts[3],
      };
    }

    return { r: 0, g: 0, b: 0 };
  }
}
