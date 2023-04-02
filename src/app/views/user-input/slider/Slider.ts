import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSlider } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Slider',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonSlider,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML single value slider input');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      basicSlider: 50,
      minMaxSlider: 0,
      outputSlider: 50,
      legendSlider: 50,
      tooltipSlider: 50,
      percentageSlider: 0.42,
      decimalSlider: 50.0,
      noFormattingSlider: 2020,
      templateSlider: 100.0,
      disabledSlider: 50,
      primarySlider: 50,
      brandSlider: 50,
      warnSlider: 50,
      updateSlider: (key: string, value?: string) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
    });

    const coreExamples = `<div class="neon-vertically-spaced">
  <label>Basic slider</label>
  <neon-slider id="basicSliderId" :model-value="basicSlider" @update:modelValue="updateSlider('basicSlider')" />
  <label>With Min, max and step</label>
  <neon-slider :model-value="minMaxSlider" :min="-100" :max="100" :step="10" @update:modelValue="updateSlider('minMaxSlider')" />
  <label>Disabled</label>
  <neon-slider :model-value="disabledSlider" :disabled="true" @update:modelValue="updateSlider('disabledSlider')" />
</div>`;

    const formattingExamples = `<div class="neon-vertically-spaced">
  <label>Percentage</label>
  <neon-slider :model-value="percentageSlider" :percentage="true" @update:modelValue="updateSlider('percentageSlider')" />
  <label>Decimal values</label>
  <neon-slider :model-value="decimalSlider" :decimals="2" @update:modelValue="updateSlider('decimalSlider')" />
  <label>Formatting disabled (e.g. year)</label>
  <neon-slider :model-value="noFormattingSlider" :disable-formatting="true" :min="2000" :max="2050" @update:modelValue="updateSlider('noFormattingSlider')" />
  <label>With template (e.g. currency)</label>
  <neon-slider :model-value="templateSlider" :max="200.0" :step="0.5" :decimals="2" value-template="\${value}" @update:modelValue="updateSlider('templateSlider')" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <neon-slider :model-value="primarySlider" color="primary" @update:modelValue="updateSlider('primarySlider')" />
  <neon-slider :model-value="brandSlider" color="brand" @update:modelValue="updateSlider('brandSlider')" />
  <neon-slider :model-value="warnSlider" color="warn" @update:modelValue="updateSlider('warnSlider')" />
</div>`;

    const displayExamples = `<div class="neon-vertically-spaced">
  <label>Output hidden</label>
  <neon-slider :model-value="outputSlider" :output="false" @update:modelValue="updateSlider('outputSlider')" />
  <label>Legend hidden</label>
  <neon-slider :model-value="legendSlider" :legend="false" @update:modelValue="updateSlider('legendSlider')" />
  <label>Tooltip hidden</label>
  <neon-slider :model-value="tooltipSlider" :tooltip="false" @update:modelValue="updateSlider('tooltipSlider')" />
</div>`;

    const examples = ref([
      {
        title: 'Basic usage',
        template: coreExamples,
        data,
      },
      {
        title: 'Formatting options',
        template: formattingExamples,
        data,
      },
      {
        title: 'Slider colors',
        template: colorExamples,
        data,
      },
      {
        title: 'Display options',
        template: displayExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSlider')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
