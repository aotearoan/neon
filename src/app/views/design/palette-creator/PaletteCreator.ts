import { computed, defineComponent, onMounted, ref } from 'vue';
import {
  NeonButton,
  NeonCard,
  NeonCardBody,
  NeonCardFooter,
  NeonCardHeader,
  NeonColor,
  NeonDialog,
  NeonField,
  NeonInline,
  NeonStack,
  NeonSwitch,
  NeonTooltip,
} from '@/neon';
import { NeonColorUtils } from '@/common/utils/NeonColorUtils';

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
    NeonInline,
    NeonStack,
    NeonSwitch,
    NeonTooltip,
  },
  setup() {
    const keys = [
      '--neon-rgb-text-dark',
      '--neon-rgb-text-strong-dark',
      '--neon-rgb-text-light',
      '--neon-rgb-text-strong-light',
      '--neon-rgb-disabled-background-dark',
      '--neon-rgb-disabled-border-dark',
      '--neon-rgb-disabled-text-dark',
      '--neon-rgb-disabled-border-light',
      '--neon-rgb-disabled-background-light',
      '--neon-rgb-disabled-text-light',
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
    const stepsLight = ['l5', 'l4', 'l3', 'l2', 'l1'];
    const stepsDark = ['d1', 'd2', 'd3', 'd4', 'd5'];

    const paletteKey = 'created-palette';
    const ready = ref<boolean>(false);
    const openConfirmResetDialog = ref<boolean>(false);

    const toRGB = (hexString: string) => {
      const [r, g, b] = NeonColorUtils.toRgb(hexString);
      return ` ${r}, ${g}, ${b}`;
    };

    const palette = ref<Record<string, string>>({});

    const setStyle = (key: string, value: string) => {
      palette.value[key] = value;
      palette.value = { ...palette.value };
      document.documentElement.style.setProperty(key, toRGB(value));
      localStorage.setItem(paletteKey, JSON.stringify(palette.value));
    };

    const generatePalette = (colorPaletteKey: string, color: string) => {
      const darkText = palette.value['--neon-rgb-text-dark'];
      const lightText = palette.value['--neon-rgb-text-light'];
      const newPalette = NeonColorUtils.generatePalette(color, darkText, lightText);
      Object.entries(newPalette).forEach(([key, value]) => {
        const colorKey = `--neon-rgb-${colorPaletteKey}-${key}`;
        palette.value[colorKey] = value;
        document.documentElement.style.setProperty(colorKey, toRGB(value));
      });
      palette.value = { ...palette.value };
      localStorage.setItem(paletteKey, JSON.stringify(palette.value));
    };

    const accessibility = computed(() => {
      const result: Record<string, Record<string, string | number | null>> = {};

      Object.entries(palette.value).forEach(([key, value]) => {
        if (key.indexOf('text') === -1) {
          const isDark = key[key.length - 2] === 'd';
          const accessibleNormal = NeonColorUtils.isAccessible(
            palette.value[isDark ? '--neon-rgb-text-light' : '--neon-rgb-text-dark'],
            value,
          );
          const { normalAA, normalAAA } = accessibleNormal;

          const accessibleLarge = NeonColorUtils.isAccessible(
            palette.value[isDark ? '--neon-rgb-text-strong-light' : '--neon-rgb-text-strong-dark'],
            value,
          );
          const { largeAA, largeAAA } = accessibleLarge;

          result[key] = {
            ratioLarge: accessibleLarge.ratio,
            ratioNormal: accessibleNormal.ratio,
            large: largeAAA ? 'AAA' : largeAA ? 'AA' : null,
            normal: normalAAA ? 'AAA' : normalAA ? 'AA' : null,
          };
        } else {
          result[key] = {
            large: null,
            normal: null,
          };
        }
      });

      return result;
    });

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
          palette.value[key] = NeonColorUtils.rgbToHex(
            docElement
              .getPropertyValue(key)
              .trim()
              .split(', ')
              .map((value) => +value),
          );
        });
      }
      palette.value = { ...palette.value };
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
        fileString += `  ${key}:${toRGB(palette.value[key])};
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

    const toggleNeutral = ref(false);
    const toggleBrand = ref(false);
    const toggleFunctional = ref(false);

    return {
      toggleNeutral,
      toggleBrand,
      toggleFunctional,
      accessibility,
      ready,
      openConfirmResetDialog,
      palette,
      neutralPalettes,
      brandPalettes,
      functionalPalettes,
      stepsLight,
      stepsDark,
      setStyle,
      exportColors,
      resetPalette,
      generatePalette,
    };
  },
});
