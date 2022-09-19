import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSlider } from '@/neon';
import type { MenuModel } from '../../../Menu';
import { Menu } from '../../../Menu';
import ComponentDocumentation from '../../../components/component-documentation/ComponentDocumentation.vue';

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

    const data = ref({
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
    });

    const coreExamples = `<div class="neon-vertically-spaced">
  <label>Basic slider</label>
  <neon-slider id="basicSliderId" v-model="basicSlider" />
  <label>With Min, max and step</label>
  <neon-slider v-model="minMaxSlider" :min="-100" :max="100" :step="10" />
  <label>Disabled</label>
  <neon-slider v-model="disabledSlider" :disabled="true" />
</div>`;

    const formattingExamples = `<div class="neon-vertically-spaced">
  <label>Percentage</label>
  <neon-slider v-model="percentageSlider" :percentage="true" />
  <label>Decimal values</label>
  <neon-slider v-model="decimalSlider" :decimals="2" />
  <label>Formatting disabled (e.g. year)</label>
  <neon-slider v-model="noFormattingSlider" :disable-formatting="true" :min="2000" :max="2050" />
  <label>With template (e.g. currency)</label>
  <neon-slider v-model="templateSlider" :max="200.0" :step="0.5" :decimals="2" value-template="\${value}" />
</div>`;

    const colorExamples = `<div class="neon-vertically-spaced">
  <neon-slider v-model="primarySlider" color="primary" />
  <neon-slider v-model="brandSlider" color="brand" />
  <neon-slider v-model="warnSlider" color="warn" />
</div>`;

    const displayExamples = `<div class="neon-vertically-spaced">
  <label>Output hidden</label>
  <neon-slider v-model="outputSlider" :output="false" />
  <label>Legend hidden</label>
  <neon-slider v-model="legendSlider" :legend="false" />
  <label>Tooltip hidden</label>
  <neon-slider v-model="tooltipSlider" :tooltip="false" />
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
        title: 'Slider colors',
        template: colorExamples,
        data: data.value,
      },
      {
        title: 'Display options',
        template: displayExamples,
        data: data.value,
      },
    ]);

    onMounted(() => menuModel.value = Menu.getComponentConfig('NeonSlider'));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
