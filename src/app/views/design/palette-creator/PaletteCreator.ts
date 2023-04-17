import { defineComponent, onMounted, ref } from 'vue';
import {
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonColor,
  NeonDialog,
  NeonField
} from '@/neon';

export default defineComponent({
  name: 'PaletteCreator',
  components: {
    NeonButton,
    NeonCard,
    NeonCardHeader,
    NeonCardBody,
    NeonCardFooter,
    NeonColor,
    NeonDialog,
    NeonField,
  },
  setup() {
    const keys = [
      '--neon-rgb-text-dark',
      '--neon-rgb-text-strong-dark',
      '--neon-rgb-text-light',
      '--neon-rgb-text-strong-light',
      '--neon-rgb-low-contrast-l5',
      '--neon-rgb-low-contrast-l4',
      '--neon-rgb-low-contrast-l3',
      '--neon-rgb-low-contrast-l2',
      '--neon-rgb-low-contrast-l1',
      '--neon-rgb-low-contrast-d1',
      '--neon-rgb-low-contrast-d2',
      '--neon-rgb-low-contrast-d3',
      '--neon-rgb-low-contrast-d4',
      '--neon-rgb-low-contrast-d5',
      '--neon-rgb-neutral-l5',
      '--neon-rgb-neutral-l4',
      '--neon-rgb-neutral-l3',
      '--neon-rgb-neutral-l2',
      '--neon-rgb-neutral-l1',
      '--neon-rgb-neutral-d1',
      '--neon-rgb-neutral-d2',
      '--neon-rgb-neutral-d3',
      '--neon-rgb-neutral-d4',
      '--neon-rgb-neutral-d5',
      '--neon-rgb-high-contrast-l5',
      '--neon-rgb-high-contrast-l4',
      '--neon-rgb-high-contrast-l3',
      '--neon-rgb-high-contrast-l2',
      '--neon-rgb-high-contrast-l1',
      '--neon-rgb-high-contrast-d1',
      '--neon-rgb-high-contrast-d2',
      '--neon-rgb-high-contrast-d3',
      '--neon-rgb-high-contrast-d4',
      '--neon-rgb-high-contrast-d5',
      '--neon-rgb-brand-l5',
      '--neon-rgb-brand-l4',
      '--neon-rgb-brand-l3',
      '--neon-rgb-brand-l2',
      '--neon-rgb-brand-l1',
      '--neon-rgb-brand-d1',
      '--neon-rgb-brand-d2',
      '--neon-rgb-brand-d3',
      '--neon-rgb-brand-d4',
      '--neon-rgb-brand-d5',
      '--neon-rgb-primary-l5',
      '--neon-rgb-primary-l4',
      '--neon-rgb-primary-l3',
      '--neon-rgb-primary-l2',
      '--neon-rgb-primary-l1',
      '--neon-rgb-primary-d1',
      '--neon-rgb-primary-d2',
      '--neon-rgb-primary-d3',
      '--neon-rgb-primary-d4',
      '--neon-rgb-primary-d5',
      '--neon-rgb-info-l5',
      '--neon-rgb-info-l4',
      '--neon-rgb-info-l3',
      '--neon-rgb-info-l2',
      '--neon-rgb-info-l1',
      '--neon-rgb-info-d1',
      '--neon-rgb-info-d2',
      '--neon-rgb-info-d3',
      '--neon-rgb-info-d4',
      '--neon-rgb-info-d5',
      '--neon-rgb-success-l5',
      '--neon-rgb-success-l4',
      '--neon-rgb-success-l3',
      '--neon-rgb-success-l2',
      '--neon-rgb-success-l1',
      '--neon-rgb-success-d1',
      '--neon-rgb-success-d2',
      '--neon-rgb-success-d3',
      '--neon-rgb-success-d4',
      '--neon-rgb-success-d5',
      '--neon-rgb-warn-l5',
      '--neon-rgb-warn-l4',
      '--neon-rgb-warn-l3',
      '--neon-rgb-warn-l2',
      '--neon-rgb-warn-l1',
      '--neon-rgb-warn-d1',
      '--neon-rgb-warn-d2',
      '--neon-rgb-warn-d3',
      '--neon-rgb-warn-d4',
      '--neon-rgb-warn-d5',
      '--neon-rgb-error-l5',
      '--neon-rgb-error-l4',
      '--neon-rgb-error-l3',
      '--neon-rgb-error-l2',
      '--neon-rgb-error-l1',
      '--neon-rgb-error-d1',
      '--neon-rgb-error-d2',
      '--neon-rgb-error-d3',
      '--neon-rgb-error-d4',
      '--neon-rgb-error-d5',
    ];

    const neutralPalettes = ['low-contrast', 'neutral', 'high-contrast'];
    const brandPalettes = ['brand', 'primary'];
    const functionalPalettes = ['info', 'success', 'warn', 'error'];
    const steps = ['l5', 'l4', 'l3', 'l2', 'l1', 'd1', 'd2', 'd3', 'd4', 'd5'];

    const paletteKey = 'created-palette';
    const ready = ref<boolean>(false);
    const openConfirmResetDialog = ref<boolean>(false);

    const toHex = (rgbString: string) => {
      const [r, g, b] = rgbString.split(', ');
      const rHex = (+r).toString(16);
      const gHex = (+g).toString(16);
      const bHex = (+b).toString(16);
      return `#${rHex.length === 1 ? `0${rHex}` : rHex}${gHex.length === 1 ? `0${gHex}` : gHex}${
        bHex.length === 1 ? `0${bHex}` : bHex
      }`;
    };

    const toRGB = (hexString: string) => {
      return ` ${Number.parseInt(hexString.substring(1, 3), 16)}, ${Number.parseInt(
        hexString.substring(3, 5),
        16,
      )}, ${Number.parseInt(hexString.substring(5, 7), 16)}`;
    };

    const palette = ref<Record<string, string>>({});
    const setStyle = (key: string, value: string) => {
      palette.value[key] = value;
      document.documentElement.style.setProperty(key, toRGB(value));
      localStorage.setItem(paletteKey, JSON.stringify(palette.value));
    };

    onMounted(() => {
      const createdPalette = localStorage.getItem(paletteKey);

      if (createdPalette) {
        palette.value = JSON.parse(createdPalette);
        Object.keys(palette.value).forEach((key) => {
          document.documentElement.style.setProperty(key, toRGB(palette.value[key]));
        });
      } else {
        const docElement = getComputedStyle(document.documentElement);
        keys.forEach((key) => {
          palette.value[key] = toHex(docElement.getPropertyValue(key).trim());
        });
      }
      ready.value = true;
    });

    const resetPalette = () => {
      openConfirmResetDialog.value = false;
      localStorage.removeItem(paletteKey);
      document.location.reload();
    };

    const exportColors = () => {
      let fileString = `/*
  In order to use opacity with CSS Variables the raw r, g, b values need to be defined.
  This is why there are 2 color definitions the raw 'rgb' definition and the actual 'color' one
*/
.neon {
`;

      keys.forEach((key) => {
        fileString += `  ${key}: ${toRGB(palette.value[key])};
`;
      });

      fileString += `}
`;

      const hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/plain;charset=utf-8,' + encodeURI(fileString);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'palette.scss';
      hiddenElement.click();
    };

    return {
      ready,
      openConfirmResetDialog,
      palette,
      neutralPalettes,
      brandPalettes,
      functionalPalettes,
      steps,
      setStyle,
      exportColors,
      resetPalette,
    };
  },
});
