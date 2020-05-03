import { NeonColor } from './NeonColor';

export class NeonColorUtils {
  public static relativeLuminance(color: NeonColor) {
    const { r, g, b } = color;
    const srgb = [r, g, b].map(value => value / 255);
    const [R, G, B] = srgb.map(value => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4));

    return (0.2126 * R) + (0.7152 * G) + (0.0722 * B);
  }

  public static contrastRatio(color1: NeonColor, color2: NeonColor) {
    const l1 = NeonColorUtils.relativeLuminance(color1);
    const l2 = NeonColorUtils.relativeLuminance(color2);

    const lightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);

    const contrast = (lightest + 0.05) / (darkest + 0.05);

    return Math.floor(contrast * 100) / 100;
  }
}
