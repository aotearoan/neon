import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonRangeSlider } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  name: 'RangeSlider',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonRangeSlider,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('Select a range of discrete values');

    const basicSlider = ref([20, 80]);
    const minMaxSlider = ref([-50, 50]);
    const outputSlider = ref([20, 80]);
    const legendSlider = ref([20, 80]);
    const tooltipSlider = ref([20, 80]);
    const percentageSlider = ref([0.25, 0.75]);
    const decimalSlider = ref([21.5, 82.5]);
    const noFormattingSlider = ref([2015, 2020]);
    const templateSlider = ref([75.25, 125.75]);
    const disabledSlider = ref([20, 80]);
    const primarySlider = ref([20, 80]);
    const brandSlider = ref([20, 80]);
    const warnSlider = ref([20, 80]);

    const coreExamples = `<neon-range-slider id="basicSliderId" v-model="basicSlider" />
<neon-range-slider :max="100" :min="-100" v-model="minMaxSlider" :step="10" />
<neon-range-slider :disabled="true" v-model="disabledSlider" />`;

    const formattingExamples = `<neon-range-slider v-model="percentageSlider" :percentage="true" />
<neon-range-slider v-model="decimalSlider" :decimals="2" />
<neon-range-slider v-model="noFormattingSlider" :disable-formatting="true" :max="2050" :min="2000" />
<neon-range-slider v-model="templateSlider"
                   :decimals="2"
                   :max="200.0"
                   :step="0.5"
                   value-template="\${value}"
/>`;

    const colorExamples = `<neon-range-slider v-model="primarySlider" color="primary" />
<neon-range-slider v-model="brandSlider" color="brand" />
<neon-range-slider v-model="warnSlider" color="warn" />`;

    const displayExamples = `<neon-range-slider v-model="outputSlider" :output="false" />
<neon-range-slider v-model="legendSlider" :legend="false" />
<neon-range-slider v-model="tooltipSlider" :tooltip="false" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonRangeSlider')));

    return {
      menuModel,
      headline,
      basicSlider,
      minMaxSlider,
      outputSlider,
      legendSlider,
      tooltipSlider,
      percentageSlider,
      decimalSlider,
      noFormattingSlider,
      templateSlider,
      disabledSlider,
      primarySlider,
      brandSlider,
      warnSlider,
      coreExamples,
      formattingExamples,
      colorExamples,
      displayExamples,
    };
  },
});
