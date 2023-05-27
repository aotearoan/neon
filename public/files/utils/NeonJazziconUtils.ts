import { NeonRandomUtils } from './NeonRandomUtils';

export class NeonJazziconUtils {
  private static readonly shapeCount = 4;
  private static readonly svgns = 'http://www.w3.org/2000/svg';
  private static readonly wobble = 30;

  /**
   * Returns base-64 encoded data URI
   * @param palette the color palettes to use when generating the Jazzicon
   * @param name used for random seed
   * @param size size in pixels to generate
   */
  public static genSvg(palette: Array<string>, name: string, size: number): string {
    return NeonJazziconUtils.generateIdenticon(palette, size, NeonRandomUtils.rand(name)).outerHTML;
  }

  private static generateIdenticon(palette: Array<string>, diameter: number, rand: () => number): SVGElement {
    const remainingColors = NeonJazziconUtils.hueShift(palette.slice(), rand);

    const svg = document.createElementNS(NeonJazziconUtils.svgns, 'svg');
    svg.setAttribute('xmlns', NeonJazziconUtils.svgns);
    svg.setAttributeNS(null, 'x', '0');
    svg.setAttributeNS(null, 'y', '0');
    svg.setAttributeNS(null, 'width', `${diameter}`);
    svg.setAttributeNS(null, 'height', `${diameter}`);

    NeonJazziconUtils.genShape(
      [NeonJazziconUtils.genColor(remainingColors, rand)],
      diameter,
      0,
      NeonJazziconUtils.shapeCount - 1,
      svg,
      () => 0,
    );

    for (let i = 0; i < NeonJazziconUtils.shapeCount - 1; i++) {
      NeonJazziconUtils.genShape(remainingColors, diameter, i, NeonJazziconUtils.shapeCount - 1, svg, rand);
    }

    return svg;
  }

  private static genShape(
    remainingColors: string[],
    diameter: number,
    i: number,
    total: number,
    svg: SVGElement,
    rand: () => number,
  ) {
    const center = diameter / 2;

    const shape = document.createElementNS(NeonJazziconUtils.svgns, 'rect');
    shape.setAttributeNS(null, 'x', '0');
    shape.setAttributeNS(null, 'y', '0');
    shape.setAttributeNS(null, 'width', `${diameter}`);
    shape.setAttributeNS(null, 'height', `${diameter}`);

    const firstRot = rand();
    const angle = Math.PI * 2 * firstRot;
    const velocity = (diameter / total) * rand() + (i * diameter) / total;

    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity;

    const translate = `translate(${tx} ${ty})`;

    // Third random is a shape rotation on top of all of that.
    const secondRot = rand();
    const rot = firstRot * 360 + secondRot * 180;
    const rotate = 'rotate(' + rot.toFixed(1) + ' ' + center + ' ' + center + ')';
    const transform = translate + ' ' + rotate;
    shape.setAttributeNS(null, 'transform', transform);
    const fill = NeonJazziconUtils.genColor(remainingColors, rand);
    shape.setAttributeNS(null, 'fill', fill);

    svg.appendChild(shape);
  }

  private static genColor(colors: string[], rand: () => number) {
    const idx = Math.floor(colors.length * rand());
    return colors.splice(idx, 1)[0];
  }

  private static hueShift(colors: Array<string>, rand: () => number) {
    const amount = rand() * 30 - NeonJazziconUtils.wobble / 2;
    const rotate = (hex: string) => NeonJazziconUtils.colorRotate(hex, amount);
    return colors.map(rotate);
  }

  private static colorRotate(hex: string, degrees: number) {
    const hsl = NeonJazziconUtils.hexToHSL(hex);
    let hue = hsl.h;
    hue = (hue + degrees) % 360;
    hue = hue < 0 ? 360 + hue : hue;
    hsl.h = hue;
    return NeonJazziconUtils.hslToHex(hsl);
  }

  private static hexToHSL(hex: string) {
    // Convert hex to RGB first
    let r = +('0x' + hex[1] + hex[2]);
    let g = +('0x' + hex[3] + hex[4]);
    let b = +('0x' + hex[5] + hex[6]);
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
  }

  private static hslToHex(hsl: Record<string, number>) {
    const h = hsl.h;
    let { s, l } = hsl;
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (h >= 60 && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (h >= 120 && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (h >= 180 && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (h >= 240 && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (h >= 300 && h < 360) {
      r = c;
      g = 0;
      b = x;
    }
    // Having obtained RGB, convert channels to hex
    let rStr = Math.round((r + m) * 255).toString(16);
    let gStr = Math.round((g + m) * 255).toString(16);
    let bStr = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (rStr.length === 1) {
      rStr = '0' + r;
    }

    if (gStr.length === 1) {
      gStr = '0' + g;
    }

    if (bStr.length === 1) {
      bStr = '0' + b;
    }

    return '#' + rStr + gStr + bStr;
  }
}
