import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonSlider } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Slider',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonSlider,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML single value slider input');

    const basicSlider = ref(50);
    const minMaxSlider = ref(0);
    const outputSlider = ref(50);
    const legendSlider = ref(50);
    const tooltipSlider = ref(50);
    const percentageSlider = ref(0.42);
    const decimalSlider = ref(50.0);
    const noFormattingSlider = ref(2020);
    const templateSlider = ref(100.0);
    const disabledSlider = ref(50);
    const primarySlider = ref(50);
    const brandSlider = ref(50);
    const warnSlider = ref(50);

    const coreExamples = `<neon-slider id="basicSliderId" v-model="basicSlider" />
<neon-slider v-model="minMaxSlider" :max="100" :min="-100" :step="10" />
<neon-slider v-model="disabledSlider" :disabled="true" />`;

    const formattingExamples = `<neon-slider v-model="percentageSlider" :percentage="true" />
<neon-slider v-model="decimalSlider" :decimals="2" />
<neon-slider v-model="noFormattingSlider" :disable-formatting="true" :max="2050" :min="2000" />
<neon-slider v-model="templateSlider" :decimals="2" :max="200.0" :step="0.5" value-template="\${value}" />`;

    const colorExamples = `<neon-slider v-model="primarySlider" color="primary" />
<neon-slider v-model="brandSlider" color="brand" />
<neon-slider v-model="warnSlider" color="warn" />`;

    const displayExamples = `<neon-slider v-model="outputSlider" :output="false" />
<neon-slider v-model="legendSlider" :legend="false" />
<neon-slider v-model="tooltipSlider" :tooltip="false" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonSlider')));

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
