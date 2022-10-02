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

    const data = ref({
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
    });

    const coreExamples = `<div class="neon-vertically-spaced">
  <label>Basic range slider</label>
  <neon-range-slider id="basicSliderId" v-model="basicSlider" />
  <label>With Min, max and step</label>
  <neon-range-slider v-model="minMaxSlider" :min="-100" :max="100" :step="10" />
  <label>Disabled</label>
  <neon-range-slider v-model="disabledSlider" :disabled="true" />
</div>`;

    const formattingExamples = `<div class="neon-vertically-spaced">
  <label>Percentage</label>
  <neon-range-slider v-model="percentageSlider" :percentage="true" />
  <label>Decimal values</label>
  <neon-range-slider v-model="decimalSlider" :decimals="2" />
  <label>Formatting disabled (e.g. year)</label>
  <neon-range-slider v-model="noFormattingSlider" :disable-formatting="true" :min="2000" :max="2050" />
  <label>With template (e.g. currency)</label>
  <neon-range-slider v-model="templateSlider" :max="200.0" :step="0.5" :decimals="2" value-template="\${value}" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <neon-range-slider v-model="primarySlider" color="primary" />
  <neon-range-slider v-model="brandSlider" color="brand" />
  <neon-range-slider v-model="warnSlider" color="warn" />
</div>`;

    const displayExamples = `<div class="neon-vertically-spaced">
  <label>Output hidden</label>
  <neon-range-slider v-model="outputSlider" :output="false" />
  <label>Legend hidden</label>
  <neon-range-slider v-model="legendSlider" :legend="false" />
  <label>Tooltip hidden</label>
  <neon-range-slider v-model="tooltipSlider" :tooltip="false" />
</div>`;

    const examples = ref([
      {
        title: 'Basic usage',
        template: coreExamples,
        data: data.value,
      },
      {
        title: 'Formatting options',
        template: formattingExamples,
        data: data.value,
      },
      {
        title: 'Rangle slider colors',
        template: colorExamples,
        data: data.value,
      },
      {
        title: 'Display options',
        template: displayExamples,
        data: data.value,
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
