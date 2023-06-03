import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNumber, NeonStack } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';
import Editor from '@/app/components/editor/Editor.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Number',
  components: {
    ComponentDocumentation,
    Editor,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNumber,
    NeonStack,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML number input component');

    const smallNumber = ref(null);
    const mediumNumber = ref(null);
    const largeNumber = ref(0);
    const hcNumber = ref(-45);
    const primaryNumber = ref(1);
    const brandNumber = ref(2.5);
    const infoNumber = ref(2.5);
    const minMaxNumber = ref(30);
    const decimalMinMaxNumber = ref(5);
    const notEditableNumber = ref(10);
    const noButtonsNumber = ref(10);
    const percentageNumber = ref(0.42);
    const customNumber = ref(10.35);
    const disabledNumber = ref(10);

    const numberSizeExamples = `<neon-number v-model="smallNumber" placeholder="Value" size="s" />
<neon-number v-model="mediumNumber" placeholder="Value" size="m" />
<neon-number v-model="largeNumber" placeholder="Value" size="l" />`;

    const numberColorExamples = `<neon-number v-model="hcNumber" color="high-contrast" placeholder="Value" />
<neon-number v-model="primaryNumber" color="primary" placeholder="Value" />
<neon-number v-model="brandNumber" :spin-buttons="true" color="brand" placeholder="Value" />
<neon-number v-model="infoNumber" :editable="false" :spin-buttons="true" color="info" placeholder="Value" />`;

    const numberValueExamples = `<neon-number v-model="noButtonsNumber" :spin-buttons="true" placeholder="Value" />
<neon-number v-model="notEditableNumber" :editable="false" placeholder="Value" />
<neon-number v-model="notEditableNumber" :editable="false" :spin-buttons="true" placeholder="Value" />
<neon-number v-model="minMaxNumber" :max="90" :min="20" :spin-buttons="true" :step="10" placeholder="Value" />
<neon-number
  v-model="decimalMinMaxNumber"
  :decimals="2"
  :max="10.0"
  :min="-10.0"
  :spin-buttons="true"
  :step="0.05"
  placeholder="Value"
/>
<neon-number v-model="percentageNumber" :percentage="true" placeholder="Value" />
<neon-number
  v-model="customNumber"
  :decimals="2"
  :step="0.05"
  placeholder="Value"
  value-template="\${value}"
/>
<neon-number v-model="disabledNumber" disabled="disabled" placeholder="Value" />
<neon-number v-model="disabledNumber" :spin-buttons="true" disabled="disabled" placeholder="Value" />`;

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonNumber')));

    return {
      menuModel,
      headline,
      smallNumber,
      mediumNumber,
      largeNumber,
      hcNumber,
      primaryNumber,
      brandNumber,
      infoNumber,
      minMaxNumber,
      decimalMinMaxNumber,
      notEditableNumber,
      noButtonsNumber,
      percentageNumber,
      customNumber,
      disabledNumber,
      numberSizeExamples,
      numberValueExamples,
      numberColorExamples,
    };
  },
});
