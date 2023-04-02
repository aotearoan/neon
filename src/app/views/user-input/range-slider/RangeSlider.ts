import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonRangeSlider } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  name: 'RangeSlider',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonRangeSlider,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Select a range of discrete values');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
      basicSlider: [20, 80],
      minMaxSlider: [-50, 50],
      outputSlider: [20, 80],
      legendSlider: [20, 80],
      tooltipSlider: [20, 80],
      percentageSlider: [0.25, 0.75],
      decimalSlider: [21.5, 82.5],
      noFormattingSlider: [2015, 2020],
      templateSlider: [75.25, 125.75],
      disabledSlider: [20, 80],
      primarySlider: [20, 80],
      brandSlider: [20, 80],
      warnSlider: [20, 80],
      updateModel: (key: string, value: Array<number>) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
    });

    const coreExamples = `<div class="neon-vertically-spaced">
  <label>Basic range slider</label>
  <neon-range-slider id="basicSliderId" :model-value="basicSlider" @update:modelValue="updateModel('basicSlider')" />
  <label>With Min, max and step</label>
  <neon-range-slider :model-value="minMaxSlider" :min="-100" :max="100" :step="10" @update:modelValue="updateModel('minMaxSlider')" />
  <label>Disabled</label>
  <neon-range-slider :model-value="disabledSlider" :disabled="true" @update:modelValue="updateModel('disabledSlider')" />
</div>`;

    const formattingExamples = `<div class="neon-vertically-spaced">
  <label>Percentage</label>
  <neon-range-slider :model-value="percentageSlider" :percentage="true" @update:modelValue="updateModel('percentageSlider')" />
  <label>Decimal values</label>
  <neon-range-slider :model-value="decimalSlider" :decimals="2" @update:modelValue="updateModel('decimalSlider')" />
  <label>Formatting disabled (e.g. year)</label>
  <neon-range-slider :model-value="noFormattingSlider" :disable-formatting="true" :min="2000" :max="2050" @update:modelValue="updateModel('noFormattingSlider')" />
  <label>With template (e.g. currency)</label>
  <neon-range-slider :model-value="templateSlider" :max="200.0" :step="0.5" :decimals="2" value-template="\${value}" @update:modelValue="updateModel('templateSlider')" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <neon-range-slider :model-value="primarySlider" color="primary" @update:modelValue="updateModel('primarySlider')" />
  <neon-range-slider :model-value="brandSlider" color="brand" @update:modelValue="updateModel('brandSlider')" />
  <neon-range-slider :model-value="warnSlider" color="warn" @update:modelValue="updateModel('warnSlider')" />
</div>`;

    const displayExamples = `<div class="neon-vertically-spaced">
  <label>Output hidden</label>
  <neon-range-slider :model-value="outputSlider" :output="false" @update:modelValue="updateModel('outputSlider')" />
  <label>Legend hidden</label>
  <neon-range-slider :model-value="legendSlider" :legend="false" @update:modelValue="updateModel('legendSlider')" />
  <label>Tooltip hidden</label>
  <neon-range-slider :model-value="tooltipSlider" :tooltip="false" @update:modelValue="updateModel('tooltipSlider')" />
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
        title: 'Range slider colors',
        template: colorExamples,
        data,
      },
      {
        title: 'Display options',
        template: displayExamples,
        data,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonRangeSlider')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
