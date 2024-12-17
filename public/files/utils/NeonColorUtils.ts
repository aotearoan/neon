import type { NeonContrastAccessibility } from '@/common/models/NeonContrastAccessibility';

/**
 * Utility class with helpers for calculating relative contrast & determining accessibility.
 * @ignore INTERNAL USE ONLY. This logic is specifically for the palette generator & is not intended for use elsewhere.
 */
export class NeonColorUtils {
  private static red = 0.2126;
  private static green = 0.7152;
  private static blue = 0.0722;
  private static labXn = 0.95047;
  private static labYn = 1;
  private static labZn = 1.08883;
  private static labT0 = 0.137931034; // 4 / 29
  private static labT1 = 0.206896552; // 6 / 29
  private static labT2 = 0.12841855; // 3 * t1 * t1
  private static labT3 = 0.008856452; // t1 * t1 * t1
  private static degreesToRadians = Math.PI / 180;
  private static radiansToDegrees = 180 / Math.PI;

  private static gamma = 2.4;

  /**
   * Calculate luminance from RGB color Array.
   *
   * @param r {number} Red value 0-255.
   * @param g {number} Green value 0-255.
   * @param b {number} Blue value 0-255.
   *
   * @returns {number} The luminance.
   */
  public static luminance([r, g, b]: Array<number>) {
    const a = [r, g, b].map((v) => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, NeonColorUtils.gamma);
    });
    return a[0] * NeonColorUtils.red + a[1] * NeonColorUtils.green + a[2] * NeonColorUtils.blue;
  }

  /**
   * Hex color string to RGB Array.
   *
   * @param hexString {string} Hex color string to transform.
   *
   * @returns {Array<number>} RGB color array.
   */
  public static toRgb(hexString: string): Array<number> {
    return [
      Number.parseInt(hexString.substring(1, 3), 16),
      Number.parseInt(hexString.substring(3, 5), 16),
      Number.parseInt(hexString.substring(5, 7), 16),
    ];
  }

  /**
   * Convert RGB color array to xyz color space.
   *
   * @param r {number} Red value 0-255.
   * @param g {number} Green value 0-255.
   * @param b {number} Blue value 0-255.
   *
   * @returns {Array<number>} xyz color value.
   */
  public static rgbToXyz(rgb: Array<number>): Array<number> {
    const [r, g, b] = rgb;
    const r1 = NeonColorUtils.rgbValueToXyz(r);
    const g1 = NeonColorUtils.rgbValueToXyz(g);
    const b1 = NeonColorUtils.rgbValueToXyz(b);

    const x = NeonColorUtils.xyzToLab((0.4124564 * r1 + 0.3575761 * g1 + 0.1804375 * b1) / NeonColorUtils.labXn);
    const y = NeonColorUtils.xyzToLab((0.2126729 * r1 + 0.7151522 * g1 + 0.072175 * b1) / NeonColorUtils.labYn);
    const z = NeonColorUtils.xyzToLab((0.0193339 * r1 + 0.119192 * g1 + 0.9503041 * b1) / NeonColorUtils.labZn);

    return [x, y, z];
  }

  /**
   * Convert RGB color array to Lab color space.
   *
   * @param r {number} Red value 0-255.
   * @param g {number} Green value 0-255.
   * @param b {number} Blue value 0-255.
   *
   * @returns {Array<number>} Lab color value.
   */
  public static rgbToLab(rgb: Array<number>): Array<number> {
    const [x, y, z] = NeonColorUtils.rgbToXyz(rgb);
    const l = 116 * y - 16;
    return [Math.max(l, 0), 500 * (x - y), 200 * (y - z)];
  }

  /**
   * Convert RGB color array to Hcl color space.
   *
   * @param r {number} Red value 0-255.
   * @param g {number} Green value 0-255.
   * @param b {number} Blue value 0-255.
   *
   * @returns {Array<number>} Hcl color value.
   */
  public static rgbToHcl(rgb: Array<number>): Array<number> {
    const lab = NeonColorUtils.rgbToLab(rgb);
    return NeonColorUtils.labToHcl(lab);
  }

  /**
   * Check two hex colors for their contrast accessibility.
   *
   * @param hex1 {string} Hex color 1.
   * @param hex2 {string} Hex color 2.
   *
   * @returns {NeonContrastAccessibility} Accessibility data.
   */
  public static isAccessible(rgb1: string, rgb2: string): NeonContrastAccessibility {
    const ratio = NeonColorUtils.contrast(NeonColorUtils.toRgb(rgb1), NeonColorUtils.toRgb(rgb2));

    const result = {
      largeAA: false,
      largeAAA: false,
      normalAA: false,
      normalAAA: false,
      ratio: Math.round(100 * ratio) / 100,
    };

    if (ratio >= 3) {
      result.largeAA = true;

      if (ratio >= 4.5) {
        result.normalAA = true;
        result.largeAAA = true;

        if (ratio >= 7) {
          result.normalAAA = true;
        }
      }
    }

    return result;
  }

  /**
   * Calculate the contrast ratio between two colors.
   *
   * @param rgb1 {Array<number>} First color.
   * @param rgb2 {Array<number>} Second color.
   *
   * @returns {number} The contrast ratio (x:1).
   */
  public static contrast(rgb1: Array<number>, rgb2: Array<number>) {
    const lum1 = NeonColorUtils.luminance(rgb1);
    const lum2 = NeonColorUtils.luminance(rgb2);
    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  /**
   * Convert RGB color array to hex color string.
   *
   * @param r {number} Red value 0-255.
   * @param g {number} Green value 0-255.
   * @param b {number} Blue value 0-255.
   *
   * @returns {string} hex color string.
   */
  public static rgbToHex(rgb: Array<number>): string {
    const [r, g, b] = rgb;
    const rHex = r.toString(16);
    const gHex = g.toString(16);
    const bHex = b.toString(16);
    return `#${rHex.length === 1 ? `0${rHex}` : rHex}${gHex.length === 1 ? `0${gHex}` : gHex}${
      bHex.length === 1 ? `0${bHex}` : bHex
    }`;
  }

  /**
   * Generate a Neon color palette with 5 light & 5 dark steps (l1-l5 & d1-d5) from a reference color. For both L1 & D1
   * steps this will search for the closest match to the reference color that meets at least AA contrast requirements.
   * The L2-L5 & D2-D5 steps are then generated based on a Hcl curve.
   *
   * @param referenceColor {string} Hex string of the reference color from which to generate the palette.
   * @param darkTextHex {string} The dark text color hex string for calculating the contrast ratio for L1-L5 steps.
   * @param lightTextHex {string} The light text color hex string for calculating the contrast ratio for D1-D5 steps.
   *
   * @returns {Record<string, string>} A map of the palette's color steps to hex values.
   */
  public static generatePalette(
    referenceColor: string,
    darkTextHex: string,
    lightTextHex: string,
  ): Record<string, string> {
    const referenceRgb = NeonColorUtils.toRgb(referenceColor);
    const [r, g, b] = referenceRgb;
    const darkTextRgb = NeonColorUtils.toRgb(darkTextHex);
    const lightTextRgb = NeonColorUtils.toRgb(lightTextHex);

    const [hue, _rest] = NeonColorUtils.rgbToHcl(referenceRgb);

    const [_l1Hue, l1Chroma, l1Luminance] = NeonColorUtils.lightReferenceColor(referenceRgb, darkTextRgb);
    const [_d1Hue, _d1Chroma, d1Luminance] = NeonColorUtils.darkReferenceColor(referenceRgb, lightTextRgb);

    const chromaCurve = NeonColorUtils.generateChromaCurve(l1Chroma);
    const luminanceCurve = NeonColorUtils.generateLuminanceCurve(l1Luminance, d1Luminance);

    // if blue is the dominant channel then adjust hue so it's not too purple
    // TODO: rework for some blue colors as they are still too purple
    if (b > 2 * g && b > 2 * r) {
      return {
        l5: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 30, chromaCurve[0], luminanceCurve[0])),
        l4: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 25, chromaCurve[1], luminanceCurve[1])),
        l3: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 20, chromaCurve[2], luminanceCurve[2])),
        l2: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 15, chromaCurve[3], luminanceCurve[3])),
        l1: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[4], luminanceCurve[4])),
        d1: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[5], luminanceCurve[5])),
        d2: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[6], luminanceCurve[6])),
        d3: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[7], luminanceCurve[7])),
        d4: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[8], luminanceCurve[8])),
        d5: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue - 10, chromaCurve[9], luminanceCurve[9])),
      };
    } else {
      return {
        l5: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[0], luminanceCurve[0])),
        l4: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[1], luminanceCurve[1])),
        l3: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[2], luminanceCurve[2])),
        l2: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[3], luminanceCurve[3])),
        l1: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[4], luminanceCurve[4])),
        d1: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[5], luminanceCurve[5])),
        d2: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[6], luminanceCurve[6])),
        d3: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[7], luminanceCurve[7])),
        d4: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[8], luminanceCurve[8])),
        d5: NeonColorUtils.rgbToHex(NeonColorUtils.hclToRgb(hue, chromaCurve[9], luminanceCurve[9])),
      };
    }
  }

  private static generateChromaCurve(chroma: number) {
    const lStep = 0.25 * Math.abs(chroma - 10);
    const dStep = 0.25 * Math.abs(chroma - 10);

    return [
      chroma - 4 * lStep,
      chroma - 3 * lStep + 4,
      chroma - 2 * lStep + 6,
      chroma - lStep + 4,
      chroma,
      chroma,
      chroma - dStep + 4,
      chroma - 2 * dStep + 6,
      chroma - 3 * dStep + 4,
      chroma - 4 * dStep,
    ];
  }

  private static generateLuminanceCurve(lightLuminance: number, darkLuminance: number) {
    const lStep = 0.25 * (96 - lightLuminance);
    const dStep = 0.25 * (darkLuminance - 10);

    return [
      lightLuminance + 4 * lStep,
      lightLuminance + 3 * lStep,
      lightLuminance + 2 * lStep,
      lightLuminance + lStep,
      lightLuminance,
      darkLuminance,
      darkLuminance - dStep + 2,
      darkLuminance - 2 * dStep + 1,
      darkLuminance - 3 * dStep - 1,
      darkLuminance - 4 * dStep,
    ];
  }

  private static xyzToLab(t: number) {
    return t > NeonColorUtils.labT3 ? Math.pow(t, 1 / 3) : t / NeonColorUtils.labT2 + NeonColorUtils.labT0;
  }

  private static rgbValueToXyz(value: number) {
    const v1 = value / 255;
    return v1 <= 0.04045 ? v1 / 12.92 : Math.pow((v1 + 0.055) / 1.055, 2.4);
  }

  private static labToHcl(lab: Array<number>) {
    const [l, a, b] = lab;
    const c = Math.sqrt(a * a + b * b);
    const h = (Math.atan2(b, a) * NeonColorUtils.radiansToDegrees + 360) % 360;
    return [Math.round(h), c, l];
  }

  private static luminanceByChannel(channel: number) {
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }

  private static relativeLuminance(rgb: Array<number>) {
    const [r, g, b] = rgb;
    const r1 = NeonColorUtils.luminanceByChannel(r / 255);
    const g1 = NeonColorUtils.luminanceByChannel(g / 255);
    const b1 = NeonColorUtils.luminanceByChannel(b / 255);
    return 0.2126 * r1 + 0.7152 * g1 + 0.0722 * b1;
  }

  private static contrastRatio(backgroundColor: Array<number>, textColor: Array<number>) {
    const lum1 = NeonColorUtils.relativeLuminance(backgroundColor);
    const lum2 = NeonColorUtils.relativeLuminance(textColor);

    const lightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    const contrast = (lightest + 0.05) / (darkest + 0.05);

    return Math.floor(contrast * 100) / 100;
  }

  private static labToXyz(t: number) {
    return t > NeonColorUtils.labT1 ? t * t * t : NeonColorUtils.labT2 * (t - NeonColorUtils.labT0);
  }

  private static xyzToRgb(r: number) {
    return r <= 0.00304 ? 255 * 12.92 * r : 255 * (1.055 * Math.pow(r, 1 / 2.4) - 0.055);
  }

  private static labToRgb(l: number, a: number, b: number): Array<number> {
    const y0 = (l + 16) / 116;
    const x0 = y0 + a / 500;
    const z0 = y0 - b / 200;

    const x1 = NeonColorUtils.labXn * NeonColorUtils.labToXyz(x0);
    const y1 = NeonColorUtils.labYn * NeonColorUtils.labToXyz(y0);
    const z1 = NeonColorUtils.labZn * NeonColorUtils.labToXyz(z0);
    const r = Math.round(
      Math.min(255, Math.max(0, NeonColorUtils.xyzToRgb(3.2404542 * x1 - 1.5371385 * y1 - 0.4985314 * z1))),
    ); // D65 -> sRGB
    const g = Math.round(
      Math.min(255, Math.max(0, NeonColorUtils.xyzToRgb(-0.969266 * x1 + 1.8760108 * y1 + 0.041556 * z1))),
    );
    const b_ = Math.round(
      Math.min(255, Math.max(0, NeonColorUtils.xyzToRgb(0.0556434 * x1 - 0.2040259 * y1 + 1.0572252 * z1))),
    );

    return [r, g, b_];
  }

  private static hclToLab(h: number, c: number, l: number) {
    const hue = h * NeonColorUtils.degreesToRadians;
    return [l, Math.cos(hue) * c, Math.sin(hue) * c];
  }

  private static hclToRgb(h: number, c: number, l: number): Array<number> {
    const [l_, a, b] = NeonColorUtils.hclToLab(h, c, l);
    return NeonColorUtils.labToRgb(l_, a, b);
  }

  private static lightReferenceColor(backgroundRgb: Array<number>, textRgb: Array<number>) {
    let referenceRgb = backgroundRgb;
    const [hue, chroma, l] = NeonColorUtils.rgbToHcl(referenceRgb);
    let luminance = l;
    // check contrast and adjust lightness up if contrast ratio too low
    while (NeonColorUtils.contrastRatio(referenceRgb, textRgb) < 4.5) {
      luminance = luminance + 1;
      referenceRgb = NeonColorUtils.hclToRgb(hue, chroma, luminance);
    }

    return [hue, chroma, luminance];
  }

  private static darkReferenceColor(backgroundRgb: Array<number>, textRgb: Array<number>) {
    let referenceRgb = backgroundRgb;
    const [hue, chroma, l] = NeonColorUtils.rgbToHcl(referenceRgb);
    let luminance = l;
    // check contrast and adjust lightness down if contrast ratio too low
    while (NeonColorUtils.contrastRatio(referenceRgb, textRgb) < 4.5) {
      luminance = luminance - 1;
      referenceRgb = NeonColorUtils.hclToRgb(hue, chroma, luminance);
    }

    return [hue, chroma, luminance];
  }
}
