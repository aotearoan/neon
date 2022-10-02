import { defineComponent, onMounted, ref } from 'vue';
import { NeonCard, NeonCardBody, NeonCardHeader, NeonNumber } from '@/neon';
import type { MenuModel } from '@/app/Menu';
import { Menu } from '@/app/Menu';
import ComponentDocumentation from '@/app/components/component-documentation/ComponentDocumentation.vue';

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Number',
  components: {
    ComponentDocumentation,
    NeonCard,
    NeonCardBody,
    NeonCardHeader,
    NeonNumber,
  },
  setup() {
    const menuModel = ref<MenuModel | null>(null);
    const headline = ref('HTML number input component');

    const data = ref({
      smallNumber: null,
      mediumNumber: null,
      largeNumber: 0,
      hcNumber: -45,
      primaryNumber: 1,
      brandNumber: 2.5,
      minMaxNumber: 30,
      decimalMinMaxNumber: 5,
      notEditableNumber: 10,
      noButtonsNumber: 10,
      percentageNumber: 0.42,
      customNumber: 10.35,
      disabledNumber: 10,
    });

    const numberSizeExamples = `<div class="neon-vertically-spaced">
  <neon-number size="s" v-model="smallNumber" placeholder="Value" />
  <neon-number size="m" v-model="mediumNumber" placeholder="Value" />
  <neon-number size="l" v-model="largeNumber" placeholder="Value" />
</div>`;

    const numberColorExamples = `<div class="neon-vertically-spaced">
  <neon-number color="high-contrast" v-model="hcNumber" placeholder="Value" />
  <neon-number color="primary" v-model="primaryNumber" placeholder="Value" />
  <neon-number color="brand" v-model="brandNumber" placeholder="Value" />
</div>`;

    const numberValueExamples = `<div class="neon-vertically-spaced">
  <label>spinButtons = false</label>
  <neon-number v-model="noButtonsNumber" :spin-buttons="false" placeholder="Value" />
  <label>Editable = false</label>
  <neon-number v-model="notEditableNumber" :editable="false" placeholder="Value" />
  <label>With min, max, step</label>
  <neon-number v-model="minMaxNumber" :min="20" :max="90" :step="10" placeholder="Value" />
  <label>Decimal min, max, step</label>
  <neon-number v-model="decimalMinMaxNumber" :decimals="2" :min="-10.00" :max="10.00" :step="0.05" placeholder="Value" />
  <label>Percentage</label>
  <neon-number v-model="percentageNumber" :percentage="true" placeholder="Value" />
  <label>Custom template</label>
  <neon-number v-model="customNumber" value-template="\${value}" :step="0.05" :decimals="2" placeholder="Value" />
  <label>Disabled</label>
  <neon-number disabled="disabled" v-model="disabledNumber" placeholder="Value" />
</div>`;

    const examples = ref([
      {
        title: 'Number sizes',
        template: numberSizeExamples,
        data: data.value,
      },
      {
        title: 'Various number options',
        template: numberValueExamples,
        data: data.value,
      },
      {
        title: 'Number colors',
        template: numberColorExamples,
        data: data.value,
      },
    ]);

    onMounted(() => (menuModel.value = Menu.getComponentConfig('NeonNumber')));

    return {
      menuModel,
      headline,
      data,
      examples,
    };
  },
});
