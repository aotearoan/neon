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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = ref<Record<string, any>>({
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
      updateNumber: (key: string, value: string) => {
        data.value[key] = value;
        data.value = { ...data.value };
      },
    });

    const numberSizeExamples = `<div class="neon-vertically-spaced">
  <neon-number size="s" :model-value="smallNumber" placeholder="Value" @update:modelValue="updateNumber('smallNumber', $event)" />
  <neon-number size="m" :model-value="mediumNumber" placeholder="Value" @update:modelValue="updateNumber('mediumNumber', $event)" />
  <neon-number size="l" :model-value="largeNumber" placeholder="Value" @update:modelValue="updateNumber('largeNumber', $event)" />
</div>`;

    const numberColorExamples = `<div class="neon-vertically-spaced">
  <neon-number color="high-contrast" :model-value="hcNumber" placeholder="Value" @update:modelValue="updateNumber('hcNumber', $event)" />
  <neon-number color="primary" :model-value="primaryNumber" placeholder="Value" @update:modelValue="updateNumber('primaryNumber', $event)" />
  <neon-number color="brand" :model-value="brandNumber" placeholder="Value" @update:modelValue="updateNumber('brandNumber', $event)" />
</div>`;

    const numberValueExamples = `<div class="neon-vertically-spaced">
  <label>spinButtons = false</label>
  <neon-number :model-value="noButtonsNumber" :spin-buttons="false" placeholder="Value" @update:modelValue="updateNumber('noButtonsNumber', $event)" />
  <label>Editable = false</label>
  <neon-number :model-value="notEditableNumber" :editable="false" placeholder="Value" @update:modelValue="updateNumber('notEditableNumber', $event)" />
  <label>With min, max, step</label>
  <neon-number :model-value="minMaxNumber" :min="20" :max="90" :step="10" placeholder="Value" @update:modelValue="updateNumber('minMaxNumber', $event)" />
  <label>Decimal min, max, step</label>
  <neon-number :model-value="decimalMinMaxNumber" :decimals="2" :min="-10.00" :max="10.00" :step="0.05" placeholder="Value" @update:modelValue="updateNumber('decimalMinMaxNumber', $event)" />
  <label>Percentage</label>
  <neon-number :model-value="percentageNumber" :percentage="true" placeholder="Value" @update:modelValue="updateNumber('percentageNumber', $event)" />
  <label>Custom template</label>
  <neon-number :model-value="customNumber" value-template="\${value}" :step="0.05" :decimals="2" placeholder="Value" @update:modelValue="updateNumber('customNumber', $event)" />
  <label>Disabled</label>
  <neon-number disabled="disabled" :model-value="disabledNumber" placeholder="Value" @update:modelValue="updateNumber('disabled', $event)" />
</div>`;

    const examples = ref([
      {
        title: 'Number sizes',
        template: numberSizeExamples,
        data,
      },
      {
        title: 'Various number options',
        template: numberValueExamples,
        data,
      },
      {
        title: 'Number colors',
        template: numberColorExamples,
        data,
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
